import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@supabase/supabase-js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
  .replace(
    /<link rel="stylesheet" crossorigin href="([^"]+)">/,
    `<link rel="stylesheet" crossorigin href="$1" media="print" onload="this.media='all'">` +
    `<noscript><link rel="stylesheet" crossorigin href="$1"></noscript>`
  )
const { render } = await import(path.join(distDir, 'server/entry-server.js'))

// Routes that get their own indexable, SEO-optimized static page.
const STATIC_ROUTES = [
  '/',
  '/about',
  '/contact',
  '/office-spaces',
  '/day-pass',
  '/meeting-room',
  '/virtual-office',
  '/private-office',
  '/pricing',
  '/blogs',
  '/presentation-room',
  '/membership',
]

// Real routes that must still work when visited directly (bookmarked,
// typed, refreshed), but are intentionally NOT meant to be indexed or
// listed in the sitemap. Prerendering them bakes their noindex tag into
// the actual HTML a crawler receives, instead of relying only on
// robots.txt (which also prevents Google from ever seeing that tag).
const NOINDEX_ROUTES = ['/admin', '/create-blog']

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
)

async function getAllBlogs() {
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) {
    console.error('Could not fetch blogs from Supabase, skipping blog routes:', error.message)
    return []
  }
  return data
}

// Mirrors BlogDetail.jsx's fetchRelatedPosts logic exactly: same-category
// posts first (newest 3), falling back to the newest 3 posts overall.
function getRelatedPosts(allBlogs, currentPost) {
  const currentId = Number(currentPost.id)
  const byDateDesc = (a, b) => new Date(b.created_at) - new Date(a.created_at)

  let related = []
  if (currentPost.category) {
    related = allBlogs
      .filter((p) => Number(p.id) !== currentId && p.category === currentPost.category)
      .sort(byDateDesc)
      .slice(0, 3)
  }
  if (related.length === 0) {
    related = allBlogs
      .filter((p) => Number(p.id) !== currentId)
      .sort(byDateDesc)
      .slice(0, 3)
  }
  return related
}

// Safely embed data inside an inline <script> tag: escapes characters
// that could otherwise break out of the tag (e.g. a blog post body
// containing the literal text "</script>") or be misread as HTML.
function safeJsonForScript(obj) {
  return JSON.stringify(obj)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
}

const allBlogs = await getAllBlogs()
const blogRoutePaths = allBlogs.map((row) => `/blog/${row.id}`)
const blogRoutePaths = allBlogs.map((row) => `/blog/${row.slug}`)
const ALL_ROUTES = [...STATIC_ROUTES, ...NOINDEX_ROUTES, ...blogRoutePaths]

function getPreloadedDataForRoute(route) {
  if (route === '/blogs') {
    return { type: 'blogsList', blogs: allBlogs }
  }
  if (route.startsWith('/blog/')) {
    const id = route.slice('/blog/'.length)
    const post = allBlogs.find((p) => String(p.id) === id)
    const slug = route.slice('/blog/'.length)
    const post = allBlogs.find((p) => String(p.slug) === slug)
    if (!post) return null
    return { type: 'blogDetail', post, relatedPosts: getRelatedPosts(allBlogs, post) }
  }
  return null
}

function writePage(route, html, helmet, preloadedData) {
  const headTags = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].join('\n')

  let page = template
    .replace('</head>', `${headTags}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  if (preloadedData) {
    const dataScript = `<script>window.__PRELOADED_DATA__ = ${safeJsonForScript(preloadedData)}</script>\n`
    page = page.replace('<script type="module"', `${dataScript}<script type="module"`)
  }

  const outPath =
    route === '/'
      ? path.join(distDir, 'index.html')
      : route === '/404'
        ? path.join(distDir, '404.html')
        : path.join(distDir, route.slice(1), 'index.html')

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, page)
  console.log(`Prerendered ${route} -> ${outPath}`)
}

for (const route of ALL_ROUTES) {
  const preloadedData = getPreloadedDataForRoute(route)
  const { html, helmet } = render(route, preloadedData)
  writePage(route, html, helmet, preloadedData)
}

// ---- Real 404 page ----
// Vercel serves this automatically, with a genuine 404 HTTP status, for
// any request that doesn't match a real file/route — but only once the
// blanket "rewrite everything to index.html" rule is removed from
// vercel.json, since that rule would otherwise intercept the request first.
{
  const { html, helmet } = render('/this-path-does-not-exist-404-check')
  writePage('/404', html, helmet, null)
}

console.log(`\nPrerendering complete: ${ALL_ROUTES.length} routes + 404 page.`)

// ---- Generate sitemap.xml dynamically ----
// Deliberately built from STATIC_ROUTES + blog posts only — NOINDEX_ROUTES
// (/admin, /create-blog) must never appear here.
const STATIC_SITEMAP_META = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/about': { changefreq: 'monthly', priority: '0.8' },
  '/office-spaces': { changefreq: 'monthly', priority: '0.9' },
  '/private-office': { changefreq: 'monthly', priority: '0.9' },
  '/virtual-office': { changefreq: 'monthly', priority: '0.9' },
  '/meeting-room': { changefreq: 'monthly', priority: '0.8' },
  '/presentation-room': { changefreq: 'monthly', priority: '0.8' },
  '/day-pass': { changefreq: 'monthly', priority: '0.8' },
  '/pricing': { changefreq: 'weekly', priority: '0.9' },
  '/contact': { changefreq: 'yearly', priority: '0.6' },
  '/blogs': { changefreq: 'weekly', priority: '0.7' },
  '/membership': { changefreq: 'monthly', priority: '0.8' },
}

const today = new Date().toISOString().split('T')[0]

const staticEntries = STATIC_ROUTES.map((route) => {
  const meta = STATIC_SITEMAP_META[route] || { changefreq: 'monthly', priority: '0.7' }
  return `  <url>
    <loc>https://www.aegiscoworking.ae${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`
})

const blogEntries = allBlogs.map(({ id, created_at }) => {
  const lastmod = created_at ? created_at.split('T')[0] : today
  return `  <url>
    <loc>https://www.aegiscoworking.ae/blog/${id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
})

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...blogEntries].join('\n')}
</urlset>
`

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml)
console.log(`Sitemap written: ${staticEntries.length} static + ${blogEntries.length} blog URLs -> dist/sitemap.xml`)
