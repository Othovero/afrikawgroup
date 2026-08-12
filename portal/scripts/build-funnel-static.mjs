#!/usr/bin/env node
/**
 * Builds the sibling funnel-app (a separate Vite/React SPA) and copies its
 * static output into portal/public/funnel-static/, so this one Next.js app
 * can serve both the member portal and the public funnel page as a single
 * Vercel project — next.config.ts rewrites /f/:slug* to the copied
 * funnel-static/index.html.
 *
 * Runs as `prebuild` (see package.json), so both `npm run dev` locally and
 * Vercel's build step pick it up automatically. Vercel clones the whole
 * repo even when Root Directory is set to portal/, so the sibling
 * ../funnel-app checkout is present on disk at build time.
 */
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, cpSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const portalRoot = path.resolve(__dirname, "..");
const funnelAppRoot = path.resolve(portalRoot, "..", "funnel-app");
const funnelDist = path.join(funnelAppRoot, "dist");
const destination = path.join(portalRoot, "public", "funnel-static");

function run(cmd, cwd) {
  console.log(`[build-funnel-static] ${cmd}  (in ${cwd})`);
  execSync(cmd, { cwd, stdio: "inherit" });
}

if (!existsSync(funnelAppRoot)) {
  console.warn(
    `[build-funnel-static] ${funnelAppRoot} not found — skipping. ` +
      `The funnel pages at /f/* won't be available.`
  );
  process.exit(0);
}

if (!existsSync(path.join(funnelAppRoot, "node_modules"))) {
  run("npm install", funnelAppRoot);
}

run("npm run build", funnelAppRoot);

rmSync(destination, { recursive: true, force: true });
mkdirSync(destination, { recursive: true });
cpSync(funnelDist, destination, { recursive: true });

console.log(`[build-funnel-static] Copied ${funnelDist} -> ${destination}`);
