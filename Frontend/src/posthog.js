import posthog from 'posthog-js'

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST

if (POSTHOG_KEY && POSTHOG_HOST) {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,

    // Automatically capture unhandled errors and unhandled promise
    // rejections as PostHog exception events.
    capture_exceptions: true,

    // Leave console.error capture disabled (per setup report).
    // If you want it later, PostHog exposes this via the exception
    // autocapture config rather than a top-level flag.
  })
} else {
  // Fail loudly in dev so a missing env var doesn't silently drop events.
  console.warn(
    '[posthog] Missing VITE_POSTHOG_KEY or VITE_POSTHOG_HOST — analytics not initialized.'
  )
}

export default posthog
