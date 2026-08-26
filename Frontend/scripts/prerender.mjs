import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createClient } from '@supabase/supabase-js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '../dist')
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')
const { render } = await import(path.join(distDir, 'server/entry-server.js'))

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
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
)

async function getBlogRoutes() {
  const { data, error } = await supabase.from('blogs').select('id, created_at')
  if (error) {
    console.error('Could not fetch blog ids from Supabase, skipping blog routes:', error.message)
    return []
  }
  return data.map((row) => ({ route: `/blog/${row.id}`, created_at: row.created_at }))
}

const blogRows = await getBlogRoutes()
const blogRoutePaths = blogRows.map((row) => row.route)
const ALL_ROUTES = [...STATIC_ROUTES, ...blogRoutePaths]

for (const route of ALL_ROUTES) {
  const { html, helmet } = render(route)

  const headTags = [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].join('\n')

  const page = template
    .replace('</head>', `${headTags}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  const outPath =
    route === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, route.slice(1), 'index.html')

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, page)
  console.log(`Prerendered ${route} -> ${outPath}`)
}

console.log(`\nPrerendering complete: ${ALL_ROUTES.length} routes.`)

// ---- Generate sitemap.xml dynamically ----
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

const blogEntries = blogRows.map(({ route, created_at }) => {
  const lastmod = created_at ? created_at.split('T')[0] : today
  return `  <url>
    <loc>https://www.aegiscoworking.ae${route}</loc>
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










