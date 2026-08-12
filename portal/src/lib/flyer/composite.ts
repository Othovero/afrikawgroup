import sharp from "sharp";
import { EXPORT_DIMENSIONS, type FlyerFormat, type FlyerRequest } from "./prompt";

/**
 * The model now edits the flyer directly and draws its own text (name, rank,
 * country, flag) — see prompt.ts. This step no longer composites anything;
 * it just scales the model's output up to the real 1080px export size,
 * since the generation size is constrained to multiples of 16 (see
 * prompt.ts's GENERATION_SIZE) and can't be requested at 1080 directly.
 */
export async function compositeFlyer(artwork: Buffer, req: FlyerRequest): Promise<Buffer> {
  const { width, height } = EXPORT_DIMENSIONS[req.format];

  return sharp(artwork)
    .resize(width, height, { fit: "cover", position: "centre" })
    .png()
    .toBuffer();
}

/** Story variant — 1080×1920, letterboxed. */
export async function toStory(flyer: Buffer): Promise<Buffer> {
  return sharp({
    create: {
      width: 1080,
      height: 1920,
      channels: 4,
      background: { r: 6, g: 7, b: 9, alpha: 1 },
    },
  })
    .composite([{ input: await sharp(flyer).resize(1080).toBuffer(), gravity: "centre" }])
    .png()
    .toBuffer();
}

export function formatFromString(v: string | null): FlyerFormat {
  return v === "portrait" ? "portrait" : "square";
}
