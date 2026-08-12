import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The public funnel app (a separate Vite/React SPA, built by
  // scripts/build-funnel-static.mjs as a `prebuild` step) is served as a
  // static bundle at /f/*, so one Next.js app — one Vercel project — hosts
  // both the member portal and the public funnel pages.
  //
  // This is a rewrite, not a redirect: the browser's address bar keeps
  // /f/{slug}, so the funnel bundle's own client-side routing (which reads
  // window.location.pathname to resolve the slug) works unchanged. Static
  // asset requests resolve correctly because vite.config.ts sets
  // `base: '/funnel-static/'`, making every asset reference an absolute
  // path independent of which URL triggered the rewrite.
  async rewrites() {
    return [{ source: "/f/:slug*", destination: "/funnel-static/index.html" }];
  },
};

export default nextConfig;
