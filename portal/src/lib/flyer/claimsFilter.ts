/**
 * Claims filter — PRD §F5. Runs server-side on every string that will appear on
 * a flyer, including anything the image model hands back, before a download is
 * ever offered.
 */

const BLOCKED_TERMS = [
  "guaranteed",
  "guarantee",
  "roi",
  "returns",
  "profit",
  "passive income",
  "double your",
  "risk-free",
  "risk free",
  "get rich",
  "financial freedom",
  "quit your job",
];

const BLOCKED_PATTERNS: Array<{ re: RegExp; label: string }> = [
  {
    re: /\d+\s*%\s*(daily|weekly|monthly|annual|yearly|return|profit|gain)/i,
    label: "percentage-return pattern",
  },
  {
    re: /(?:\$|usd|usdt|pula|bwp|r)\s?\d[\d,.]*\s*(?:\+|per|\/)?\s*(?:day|week|month|year|daily|weekly|monthly)/i,
    label: "currency-per-period pattern",
  },
  {
    re: /\b(?:earn|make|receive)\s+(?:up\s+to\s+)?(?:\$|usd|usdt)\s?\d/i,
    label: "earnings-amount pattern",
  },
];

export interface FilterResult {
  ok: boolean;
  violations: string[];
}

export function checkClaims(...parts: Array<string | undefined | null>): FilterResult {
  const text = parts.filter(Boolean).join(" \n ");
  const haystack = text.toLowerCase();
  const violations: string[] = [];

  for (const term of BLOCKED_TERMS) {
    if (haystack.includes(term)) violations.push(`blocked term: "${term}"`);
  }
  for (const { re, label } of BLOCKED_PATTERNS) {
    const m = text.match(re);
    if (m) violations.push(`${label}: "${m[0].trim()}"`);
  }

  return { ok: violations.length === 0, violations };
}

/** Mandatory on every flyer, per PRD §F5. */
export const FLYER_DISCLAIMER = "Not financial advice. Capital at risk.";
