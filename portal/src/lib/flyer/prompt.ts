/**
 * Locked prompt construction — PRD §F5. Members never supply free text that
 * reaches the model; only the fields below, and `rank`/`country` come from
 * fixed enums. This is what keeps every flyer's claims surface under Owner
 * control rather than per-member.
 */

export const RANKS = [
  "V0",
  "V1",
  "V2",
  "V3",
  "V4",
  "V5",
  "V6",
  "V7",
  "V8",
  "V9",
  "V10",
] as const;
export type Rank = (typeof RANKS)[number];

export type FlyerFormat = "square" | "portrait";

export interface FlyerRequest {
  displayName: string;
  rank: Rank;
  country: string;
  format: FlyerFormat;
  /** Data URL or absolute URL of the member's own photo. */
  memberPhoto?: string;
}


/** Final export dimensions after compositing. */
export const EXPORT_DIMENSIONS: Record<FlyerFormat, { width: number; height: number }> = {
  square: { width: 1080, height: 1080 },
  portrait: { width: 1080, height: 1350 },
};

/**
 * gpt-image-2 accepts arbitrary resolutions, but both dimensions must be
 * divisible by 16 — 1080 isn't, so the exact export size (above) can't be
 * requested directly. These are the closest same-aspect-ratio sizes that
 * satisfy that constraint (1:1 and 4:5, matching the export dimensions
 * exactly); compositeFlyer's existing resize step scales the result up to
 * the real 1080px export size afterwards, so nothing is lost.
 */
const GENERATION_SIZE: Record<FlyerFormat, `${number}x${number}`> = {
  square: "1024x1024",
  portrait: "1024x1280",
};

export function outputSize(format: FlyerFormat): `${number}x${number}` {
  return GENERATION_SIZE[format];
}

/**
 * Best-effort colour hint so the model doesn't have to guess a flag from
 * scratch — deliberately a short list, not a full ISO database. Unknown
 * countries just get no hint and the model does its best.
 */
const FLAG_HINTS: Record<string, string> = {
  botswana: "light blue, with a black-and-white striped band across the middle",
  "south africa": "red, white, blue, green, black and gold, in a Y-shaped design",
  lesotho: "blue, white and green horizontal bands, with a black Basotho hat emblem centred on the white band",
  namibia: "blue and green diagonal split, with a red diagonal band edged in white, and a golden sun in the blue section",
  zimbabwe: "green, yellow, red, black and white horizontal stripes, with a white triangle and a red star and bird emblem",
  zambia: "green, with a coloured panel of red, black and orange stripes on the lower right, and an orange eagle above",
  mozambique: "green, black and yellow bands separated by white, with a red triangle bearing a star and a crossed hoe and rifle",
  eswatini: "blue, yellow and red horizontal bands, with a black-and-white shield and spears centred",
  swaziland: "blue, yellow and red horizontal bands, with a black-and-white shield and spears centred",
  nigeria: "green, white, green vertical bands",
  ghana: "red, yellow and green horizontal bands with a black star centred on the yellow band",
  kenya: "black, red and green horizontal bands separated by white, with a red-and-white Maasai shield and spears centred",
  malawi: "black, red and green horizontal bands, with a red rising sun on the black band",
};

function flagHint(country: string) {
  const hint = FLAG_HINTS[country.trim().toLowerCase()];
  return hint ? ` (that flag's real colours and pattern: ${hint})` : "";
}

/**
 * Mirrors the exact prompt style that's already proven to work (dictated by
 * the Owner from their own working ChatGPT process), extended with the extra
 * fields this app supports (rank, country, flag) using the same plain
 * "change X to Y" pattern. Deliberately NOT a rewritten/engineered prompt —
 * the model does the whole edit itself, including drawing the new text, so
 * there is no separate compositing pass to conflict with it.
 *
 * Image order matters: the API call sends [memberPhoto, reference] in that
 * order (see route.ts) so "the first image" below is always the new photo,
 * matching how it was dictated.
 */
export function buildPrompt(req: FlyerRequest): string {
  const flagLine = [
    `Change the large national flag draped in the background behind the person — the big flag`,
    `artwork, not a small icon — to the flag of ${req.country}${flagHint(req.country)}. It must`,
    `actually be a different flag design from what's currently there, matching ${req.country}'s`,
    `real flag exactly, in the same position, size, drape and style as the original flag artwork.`,
  ].join(" ");

  if (!req.memberPhoto) {
    return [
      "This is an edit of the attached flyer image. Keep everything as it is, the designs and",
      "everything — just remove the person currently shown and leave that area as background,",
      "matching what's around it, with no person in it.",
      "",
      "Then make these edits, and only these:",
      `Change the name in the flyer to: ${req.displayName}`,
      `Change the rank in the flyer to: ${req.rank} Achiever`,
      `Change the country in the flyer to: ${req.country}`,
      flagLine,
      "",
      "I'm giving you the exact name, rank and country above so you don't make any mistakes with",
      "them. Keep everything else about the flyer exactly as it is, the designs and everything.",
    ].join("\n");
  }

  return [
    "Create a professional headshot of the first image and replace it with the image in the",
    "flyer. The first image must become the picture in the flyer — replace the picture that's",
    "currently on the flyer with a headshot image of the first image, same person. Keep",
    "everything else as it is, the designs and everything.",
    "",
    "Then make these edits, and only these:",
    `Change the name in the flyer to: ${req.displayName}`,
    `Change the rank in the flyer to: ${req.rank} Achiever`,
    `Change the country in the flyer to: ${req.country}`,
    flagLine,
    "",
    "I'm giving you the exact name, rank and country above so you don't make any mistakes with",
    "them. Just make these edits — the headshot, and those four fields. Keep everything else",
    "about the flyer exactly as it is, the designs and everything.",
  ].join("\n");
}
