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

function run(cmd, cwd, envOverrides = {}) {
  console.log(`[build-funnel-static] ${cmd}  (in ${cwd})`);
  execSync(cmd, { cwd, stdio: "inherit", env: { ...process.env, ...envOverrides } });
}

if (!existsSync(funnelAppRoot)) {
  console.warn(
    `[build-funnel-static] ${funnelAppRoot} not found — skipping. ` +
      `The funnel pages at /f/* won't be available.`
  );
  process.exit(0);
}

// Full, deterministic install from the lockfile, forced to include
// devDependencies. Vercel's build environment sets NODE_ENV=production,
// and npm's default under that is to skip devDependencies entirely —
// which is where vite, typescript and @vitejs/plugin-react all live here.
// Confirmed in practice: without this, only the 3 `dependencies` installed
// (~7 packages incl. their own transitive deps) and `tsc -b` failed
// immediately on missing @types/node and vite/client types. Both
// --include=dev and overriding NODE_ENV are set — either alone should be
// enough, but belt-and-braces since this exact failure already shipped
// once from an assumption that looked right locally but wasn't.
run("npm ci --include=dev", funnelAppRoot, { NODE_ENV: "development" });

run("npm run build", funnelAppRoot);

rmSync(destination, { recursive: true, force: true });
mkdirSync(destination, { recursive: true });
cpSync(funnelDist, destination, { recursive: true });

console.log(`[build-funnel-static] Copied ${funnelDist} -> ${destination}`);
