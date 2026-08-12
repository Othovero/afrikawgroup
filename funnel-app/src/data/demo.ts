import type { SponsorTokens } from "../types";

/**
 * Demo-only values. Every field here is a personalization token (see
 * Requirements §6) — nothing below should be hardcoded into any section
 * component. Swap this object for real per-member data at render time.
 * sponsor_photo is left blank on purpose: no real, licensed member photo
 * was supplied, so the sponsor block falls back to an initials badge
 * rather than shipping a stock photo (Requirements §1).
 */
export const demoSponsor: SponsorTokens = {
  sponsor_name: "Thandiwe Mokoena",
  sponsor_photo: "",
  sponsor_whatsapp: "https://wa.me/27000000000",
  carypact_url: "https://app.carypact.com/?ref=demo",
  funnel_url: "https://afrikawealthgroup.example/thandiwe",
};
