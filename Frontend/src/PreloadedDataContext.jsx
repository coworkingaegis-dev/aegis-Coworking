import { createContext, useContext } from 'react'

// Carries data fetched at build time (in scripts/prerender.mjs) into the
// component tree, so pages like BlogDetail/Blogs can render real content
// on the very first paint — both in the server-rendered HTML and during
// client hydration — instead of starting empty and fetching in useEffect
// (which never runs during server rendering, so crawlers saw nothing).
export const PreloadedDataContext = createContext(null)

export function usePreloadedData() {
  return useContext(PreloadedDataContext)
}
