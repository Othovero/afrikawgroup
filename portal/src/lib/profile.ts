"use client";

/**
 * Member funnel profile — PRD §4.2 onboarding. No database yet, so this lives
 * in localStorage keyed per member id. Swap `load`/`save` for Supabase
 * `members` + `funnels` row reads/writes and nothing above this file changes.
 */

export interface FunnelProfile {
  displayName: string;
  whatsapp: string;
  photoUrl: string;
  /** The only referral link that exists — CaryPact issues it, BOT Chain doesn't. */
  carypactUrl: string;
  slug: string;
  completedAt: string | null;
}

const KEY = (memberId: string) => `awg_profile_${memberId}`;

/**
 * Where the public funnel pages are served. They're rewritten at /f/:slug*
 * by this same Next.js app (see next.config.ts) — always same-origin as
 * wherever the portal itself is being viewed, dev or prod.
 */
function funnelOrigin() {
  return typeof window !== "undefined" ? window.location.origin : "";
}

export function emptyProfile(displayName = ""): FunnelProfile {
  return {
    displayName,
    whatsapp: "",
    photoUrl: "",
    carypactUrl: "",
    slug: slugify(displayName),
    completedAt: null,
  };
}

export function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 32);
}

export function loadProfile(memberId: string): FunnelProfile | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(KEY(memberId));
  if (!raw) return null;
  try {
    return JSON.parse(raw) as FunnelProfile;
  } catch {
    return null;
  }
}

export function saveProfile(memberId: string, profile: FunnelProfile) {
  localStorage.setItem(KEY(memberId), JSON.stringify(profile));
}

export function isComplete(p: FunnelProfile | null): p is FunnelProfile {
  return !!(
    p &&
    p.displayName.trim() &&
    p.whatsapp.trim() &&
    p.carypactUrl.trim() &&
    p.slug.trim()
  );
}

/** Normalise a raw WhatsApp number into a wa.me click-to-chat URL. */
export function toWhatsAppUrl(input: string) {
  const digits = input.replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}

/**
 * Build the member's public funnel URL. There's no shared database between
 * the portal and the funnel pages in this demo, so the personalization
 * tokens ride along as query params — the funnel reads them and renders
 * that member's page. In production the funnel would resolve `/f/{slug}`
 * server-side from the `funnels` table instead.
 */
export function buildFunnelUrl(profile: FunnelProfile, referralCode: string) {
  const params = new URLSearchParams({
    ref: referralCode,
    name: profile.displayName,
    wa: toWhatsAppUrl(profile.whatsapp),
    cp: profile.carypactUrl,
  });
  if (profile.photoUrl) params.set("photo", profile.photoUrl);
  return `${funnelOrigin()}/f/${profile.slug}?${params.toString()}`;
}

/** The short, shareable form a member would actually paste. */
export function prettyFunnelUrl(profile: FunnelProfile) {
  return `${funnelOrigin().replace(/^https?:\/\//, "")}/f/${profile.slug}`;
}

export function validateReferralUrl(url: string, host: string) {
  if (!url.trim()) return "Required.";
  try {
    const u = new URL(url.trim());
    if (!u.protocol.startsWith("http")) return "Must start with https://";
    if (!u.hostname.includes(host)) return `Should be a ${host} link.`;
    return null;
  } catch {
    return "That doesn't look like a valid URL.";
  }
}
