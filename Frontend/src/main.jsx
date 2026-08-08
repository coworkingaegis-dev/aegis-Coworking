// import './posthog.js'
// import { StrictMode } from 'react'
// import { createRoot, hydrateRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// if ('scrollRestoration' in window.history) {
//   window.history.scrollRestoration = 'manual'
// }
// const rootElement = document.getElementById('root')
// const app = (
//   <StrictMode>
//     <App />
//   </StrictMode>
// )
// if (rootElement.hasChildNodes()) {
//   hydrateRoot(rootElement, app)
// } else {
//   createRoot(rootElement).render(app)
// }

















import './posthog.js'
import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const rootElement = document.getElementById('root')
const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
)

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app)
} else {
  createRoot(rootElement).render(app)
}
