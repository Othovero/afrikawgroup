import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Built and served as a static bundle inside the portal Next.js app (see
// portal/scripts/build-funnel-static.mjs and next.config.ts's rewrite for
// /f/:slug*), so this deploys as one Vercel project. `base` must be an
// absolute path so the bundle's own asset references resolve correctly
// regardless of which URL triggered the Next.js rewrite that serves it.
export default defineConfig({
  base: '/funnel-static/',
  plugins: [react()],
})
