// import puppeteer from 'puppeteer-core'
// import chromium from '@sparticuz/chromium'
// chromium.setGraphicsMode = false
// import { createServer } from 'http'
// import handler from 'serve-handler'
// import { mkdir, writeFile } from 'fs/promises'
// import path from 'path'
// import { createClient } from '@supabase/supabase-js'


// // ---- 1. List every route that should be prerendered ----
// // Static routes: copy directly from your App.jsx <Routes> block.
// const STATIC_ROUTES = [
//   '/',
//   '/contact',
//   '/office-spaces',
//   '/day-pass',
//   '/meeting-room',
//   '/virtual-office',
//   '/private-office',
//   '/pricing',
//   '/blogs',
// ]

// // Blog posts use /blog/:id — fetched live from Supabase so new posts are
// // automatically included in every future build with no manual editing.
// const supabase = createClient(
//   'https://amtgqyccwmffksrdarpk.supabase.co',
//   'sb_publishable_fdZ5LWFFNRF9oAOwpHlDMw_3BTH3uuc'
// )

// async function getBlogRoutes() {
//   const { data, error } = await supabase.from('blogs').select('id')
//   if (error) {
//     console.error('Could not fetch blog ids from Supabase, skipping blog routes:', error.message)
//     return []
//   }
//   return data.map((row) => `/blog/${row.id}`)
// }

// const DIST_DIR = path.resolve('dist')
// const PORT = 5005

// async function main() {
//   // ---- 2. Serve the built dist/ folder locally ----
//   const server = createServer((req, res) => handler(req, res, { public: DIST_DIR }))
//   await new Promise((resolve) => server.listen(PORT, resolve))
//   console.log(`Serving dist/ at http://localhost:${PORT}`)

//   // ---- 3. Launch headless browser ----
//  const browser = await puppeteer.launch({
//   args: chromium.args,
//   executablePath: await chromium.executablePath(),
//   headless: chromium.headless,
// })
//   const page = await browser.newPage()

//   for (const route of ALL_ROUTES) {
//     const url = `http://localhost:${PORT}${route}`
//     console.log(`Prerendering ${route} ...`)

//     await page.goto(url, { waitUntil: 'networkidle0' })

//     // Give react-helmet-async a moment to finish committing head tags
//     await new Promise((r) => setTimeout(r, 300))

//     const html = await page.content()

//     // ---- 4. Write to dist/<route>/index.html ----
//     // "/" -> dist/index.html (already exists, this overwrites with rendered version)
//     // "/private-office" -> dist/private-office/index.html
//     const outDir =
//       route === '/' ? DIST_DIR : path.join(DIST_DIR, route.replace(/^\//, ''))
//     await mkdir(outDir, { recursive: true })
//     await writeFile(path.join(outDir, 'index.html'), html, 'utf-8')
//   }

//   await browser.close()
//   server.close()
//   console.log(`\nPrerendered ${ALL_ROUTES.length} routes into dist/`)
// }

// main().catch((err) => {
//   console.error('Prerender failed:', err)
//   process.exit(1)
// })

// // ---- Optional: pull blog ids from Supabase instead of hardcoding ----
// // Replace the BLOG_IDS constant above with something like:
// //
// //   import { createClient } from '@supabase/supabase-js'
// //   const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
// //   const { data } = await supabase.from('blogs').select('id')
// //   const BLOG_IDS = data.map((row) => row.id)
// //
// // This keeps new blog posts automatically included in every future build
// // without manually editing this file each time you publish.




















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
  '/contact',
  '/office-spaces',
  '/day-pass',
  '/meeting-room',
  '/virtual-office',
  '/private-office',
  '/pricing',
  '/blogs',
  '/presentation-room',
]

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
)

async function getBlogRoutes() {
  const { data, error } = await supabase.from('blogs').select('id')
  if (error) {
    console.error('Could not fetch blog ids from Supabase, skipping blog routes:', error.message)
    return []
  }
  return data.map((row) => `/blog/${row.id}`)
}

const ALL_ROUTES = [...STATIC_ROUTES, ...(await getBlogRoutes())]

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










