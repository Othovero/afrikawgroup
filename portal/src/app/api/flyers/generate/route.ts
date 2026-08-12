import { NextResponse } from "next/server";
import OpenAI, { toFile } from "openai";
import { checkClaims } from "@/lib/flyer/claimsFilter";
import { compositeFlyer, toStory } from "@/lib/flyer/composite";
import {
  buildPrompt,
  outputSize,
  RANKS,
  type FlyerFormat,
  type FlyerRequest,
  type Rank,
} from "@/lib/flyer/prompt";
import {
  loadMemberPhoto,
  loadReference,
  MissingReferenceError,
} from "@/lib/flyer/references";

/**
 * gpt-image-1/1.5 are deprecated (shutdown 23 Oct / 1 Dec 2026) — gpt-image-2
 * (April 2026) is current and is what this now calls.
 */
const IMAGE_MODEL = "gpt-image-2";

export const runtime = "nodejs";
export const maxDuration = 120;

interface Body {
  displayName?: string;
  rank?: string;
  country?: string;
  format?: string;
  memberPhoto?: string;
  funnelUrl?: string;
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey === "sk-REPLACE_ME") {
    return NextResponse.json(
      {
        error:
          "OPENAI_API_KEY is not set. Add it to portal/.env.local and restart the dev server.",
      },
      { status: 503 }
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const displayName = (body.displayName ?? "").trim();
  const country = (body.country ?? "").trim();
  const rank = body.rank as Rank | undefined;
  const format: FlyerFormat = body.format === "portrait" ? "portrait" : "square";

  if (!displayName) {
    return NextResponse.json({ error: "displayName is required." }, { status: 400 });
  }
  if (!rank || !RANKS.includes(rank)) {
    return NextResponse.json(
      { error: `rank must be one of: ${RANKS.join(", ")}` },
      { status: 400 }
    );
  }
  if (!country) {
    return NextResponse.json({ error: "country is required." }, { status: 400 });
  }

  // Claims filter on every member-supplied string, before anything is generated.
  const inbound = checkClaims(displayName, country);
  if (!inbound.ok) {
    return NextResponse.json(
      { error: "Input rejected by claims filter.", violations: inbound.violations },
      { status: 422 }
    );
  }

  const req: FlyerRequest = {
    displayName,
    rank,
    country,
    format,
    memberPhoto: body.memberPhoto,
  };

  try {
    const reference = await loadReference(format);

    // Order matters — the prompt says "the first image" meaning the new
    // photo, so the photo (when supplied) goes first and the flyer being
    // edited goes second, matching the proven prompt exactly.
    const images = [];
    if (req.memberPhoto) {
      const photo = await loadMemberPhoto(req.memberPhoto);
      images.push(await toFile(photo, "member-photo.png", { type: "image/png" }));
    }
    images.push(await toFile(reference, `reference-${format}.png`, { type: "image/png" }));

    const client = new OpenAI({ apiKey });

    const result = await client.images.edit({
      model: IMAGE_MODEL,
      image: images,
      prompt: buildPrompt(req),
      size: outputSize(format),
    });

    const b64 = result.data?.[0]?.b64_json;
    if (!b64) {
      return NextResponse.json(
        { error: "The image model returned no image." },
        { status: 502 }
      );
    }

    const artwork = Buffer.from(b64, "base64");
    const flyer = await compositeFlyer(artwork, req);
    const story = await toStory(flyer);

    return NextResponse.json({
      format,
      flyer: `data:image/png;base64,${flyer.toString("base64")}`,
      story: `data:image/png;base64,${story.toString("base64")}`,
    });
  } catch (err) {
    if (err instanceof MissingReferenceError) {
      return NextResponse.json({ error: err.message }, { status: 503 });
    }
    const message = err instanceof Error ? err.message : "Flyer generation failed.";
    console.error("[flyers/generate]", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
