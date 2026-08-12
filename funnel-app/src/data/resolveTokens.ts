import type { SponsorTokens } from "../types";
import { demoSponsor } from "./demo";

/**
 * Resolve which member's page this is.
 *
 * In production the funnel would look up `/f/{slug}` server-side from the
 * `funnels` table. In this demo the portal and the funnel are separate origins
 * with no shared database, so the portal passes the personalization tokens as
 * query params (see portal/src/lib/profile.ts → buildFunnelUrl). Anything not
 * supplied falls back to the demo sponsor so the page is never broken.
 */
export function resolveTokens(): SponsorTokens {
  if (typeof window === "undefined") return demoSponsor;

  const q = new URLSearchParams(window.location.search);
  const slugMatch = window.location.pathname.match(/^\/f\/([a-z0-9-]+)/i);
  const slug = slugMatch?.[1];

  const name = q.get("name");
  const wa = q.get("wa");
  const cp = q.get("cp");
  const photo = q.get("photo");

  // No member context at all — show the demo page.
  if (!name && !cp && !slug) return demoSponsor;

  const origin = window.location.origin;

  return {
    sponsor_name: name || demoSponsor.sponsor_name,
    sponsor_photo: photo || "",
    sponsor_whatsapp: wa || demoSponsor.sponsor_whatsapp,
    carypact_url: cp || demoSponsor.carypact_url,
    funnel_url: slug ? `${origin}/f/${slug}` : demoSponsor.funnel_url,
  };
}
