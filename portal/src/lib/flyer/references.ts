import { readFile } from "node:fs/promises";
import path from "node:path";
import type { FlyerFormat } from "./prompt";

/**
 * Reference flyers live in portal/assets/brand/ — outside public/ so they are
 * read server-side and never served to browsers. See that folder's README.
 */
const FILES: Record<FlyerFormat, string> = {
  square: "reference-square.png",
  portrait: "reference-portrait.png",
};

export class MissingReferenceError extends Error {
  constructor(public file: string) {
    super(
      `Reference image not found: assets/brand/${file}. Save the reference flyer ` +
        `there (see assets/brand/README.md) before generating.`
    );
    this.name = "MissingReferenceError";
  }
}

export async function loadReference(format: FlyerFormat): Promise<Buffer> {
  const file = FILES[format];
  const full = path.join(process.cwd(), "assets", "brand", file);
  try {
    return await readFile(full);
  } catch {
    throw new MissingReferenceError(file);
  }
}

/** Decode a `data:` URL or fetch a remote image into a Buffer. */
export async function loadMemberPhoto(src: string): Promise<Buffer> {
  if (src.startsWith("data:")) {
    const base64 = src.split(",")[1] ?? "";
    return Buffer.from(base64, "base64");
  }
  const res = await fetch(src);
  if (!res.ok) throw new Error(`Could not fetch member photo (${res.status}).`);
  return Buffer.from(await res.arrayBuffer());
}
