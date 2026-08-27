// import './posthog.js'
// import { StrictMode } from 'react'
// import { createRoot, hydrateRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import { HelmetProvider } from 'react-helmet-async'
// import './index.css'
// import App from './App.jsx'
// import { PreloadedDataContext } from './PreloadedDataContext.jsx'

// if ('scrollRestoration' in window.history) {
//   window.history.scrollRestoration = 'manual'
// }

// const rootElement = document.getElementById('root')
// const preloadedData = window.__PRELOADED_DATA__ || null

// const app = (
//   <StrictMode>
//     <HelmetProvider>
//       <PreloadedDataContext.Provider value={preloadedData}>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </PreloadedDataContext.Provider>
//     </HelmetProvider>
//   </StrictMode>
// )

// if (rootElement.hasChildNodes()) {
//   hydrateRoot(rootElement, app)
// } else {
//   createRoot(rootElement).render(app)
// }














import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { PreloadedDataContext } from './PreloadedDataContext.jsx'

// Load analytics after the page has painted, not on the critical path.
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => import('./posthog.js'))
} else {
  setTimeout(() => import('./posthog.js'), 2000)
}

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}
const rootElement = document.getElementById('root')
const preloadedData = window.__PRELOADED_DATA__ || null
const app = (
  <StrictMode>
    <HelmetProvider>
      <PreloadedDataContext.Provider value={preloadedData}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PreloadedDataContext.Provider>
    </HelmetProvider>
  </StrictMode>
)
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}















