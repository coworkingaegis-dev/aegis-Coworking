import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import { PreloadedDataContext } from './PreloadedDataContext.jsx'

export function render(url, preloadedData = null) {
  const helmetContext = {}
  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <PreloadedDataContext.Provider value={preloadedData}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </PreloadedDataContext.Provider>
      </HelmetProvider>
    </StrictMode>
  )
  return { html, helmet: helmetContext.helmet }
}
