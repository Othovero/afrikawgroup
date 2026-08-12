"use client";

import { useRef, useState } from "react";
import { AlertIcon, DownloadIcon, SparkIcon, UploadIcon, XIcon } from "@/components/Icons";
import { RANKS, type FlyerFormat, type Rank } from "@/lib/flyer/prompt";
import { DAILY_CAP, recordGeneration, remainingToday } from "@/lib/flyer/dailyCap";
import type { SessionUser } from "@/lib/auth";
import type { FunnelProfile } from "@/lib/profile";

interface Result {
  flyer: string;
  story: string;
}

export function FlyerGenerator({
  user,
  profile,
  onClose,
  onGenerated,
}: {
  user: SessionUser;
  profile: FunnelProfile;
  onClose: () => void;
  onGenerated?: () => void;
}) {
  const [rank, setRank] = useState<Rank>("V0");
  const [country, setCountry] = useState("Botswana");
  const [format, setFormat] = useState<FlyerFormat>("square");
  const [photo, setPhoto] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const remaining = remainingToday(user.id);

  function handleFile(file: File) {
    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result as string);
    reader.readAsDataURL(file);
  }

  async function generate() {
    if (remaining <= 0) {
      setError(`Daily limit reached (${DAILY_CAP}/day). Try again tomorrow.`);
      return;
    }
    setBusy(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/flyers/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          displayName: profile.displayName,
          rank,
          country,
          format,
          memberPhoto: photo ?? undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(
          data.violations
            ? `Rejected by claims filter — ${data.violations.join(", ")}`
            : data.error ?? "Generation failed."
        );
        return;
      }
      setResult({ flyer: data.flyer, story: data.story });
      recordGeneration(user.id);
      onGenerated?.();
    } catch {
      setError("Could not reach the generator. Check your connection and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="font-display text-lg">Generate flyer</h2>
            <p className="mt-0.5 text-xs text-[var(--color-muted)]">
              {remaining} of {DAILY_CAP} generations left today
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full border border-[var(--color-panel-border)] p-2 text-[var(--color-muted)] transition-colors hover:text-[var(--color-parchment)]"
          >
            <XIcon width={16} height={16} />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <span className="mb-1.5 block text-xs text-[var(--color-muted)]">Format</span>
              <div className="flex gap-2">
                {(["square", "portrait"] as FlyerFormat[]).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFormat(f)}
                    className={`flex-1 rounded-xl border px-3 py-2 text-xs capitalize transition-colors ${
                      format === f
                        ? "border-[var(--color-accent)] bg-[var(--color-accent)]/12 text-[var(--color-accent)]"
                        : "border-[var(--color-panel-border)] text-[var(--color-muted)]"
                    }`}
                  >
                    {f === "square" ? "Square 1:1" : "Portrait 4:5"}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="mb-1.5 block text-xs text-[var(--color-muted)]">Rank</span>
              <select
                value={rank}
                onChange={(e) => setRank(e.target.value as Rank)}
                className="w-full rounded-xl border border-[var(--color-panel-border)] bg-black/40 px-3.5 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
              >
                {RANKS.map((r) => (
                  <option key={r} value={r}>
                    {r} Achiever
                  </option>
                ))}
              </select>
            </div>

            <div>
              <span className="mb-1.5 block text-xs text-[var(--color-muted)]">Country</span>
              <input
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-xl border border-[var(--color-panel-border)] bg-black/40 px-3.5 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
              />
            </div>

            <div>
              <span className="mb-1.5 block text-xs text-[var(--color-muted)]">Your photo</span>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />
              {photo ? (
                <div className="flex items-center gap-3">
                  <img src={photo} alt="" className="h-14 w-14 rounded-xl object-cover" />
                  <button
                    onClick={() => setPhoto(null)}
                    className="text-xs text-[var(--color-muted)] hover:text-[var(--color-parchment)]"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => fileRef.current?.click()}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[var(--color-panel-border)] py-4 text-xs text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-parchment)]"
                >
                  <UploadIcon width={15} height={15} />
                  Upload a headshot
                </button>
              )}
            </div>

            {error && (
              <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-xs text-red-300">
                <AlertIcon width={14} height={14} className="mt-px shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              onClick={generate}
              disabled={busy || remaining <= 0}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent-soft)] via-[var(--color-accent)] to-[var(--color-accent-deep)] py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
            >
              <SparkIcon width={15} height={15} />
              {busy ? "Generating…" : "Generate"}
            </button>
          </div>

          <div className="flex items-center justify-center rounded-2xl border border-[var(--color-panel-border)] bg-black/25 p-4">
            {busy ? (
              <div className="text-center">
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-panel-border)] border-t-[var(--color-accent)]" />
                <p className="mt-3 text-xs text-[var(--color-muted)]">
                  This can take up to a minute.
                </p>
              </div>
            ) : result ? (
              <div className="w-full">
                <img
                  src={result.flyer}
                  alt="Generated flyer"
                  className="w-full rounded-xl border border-[var(--color-panel-border)]"
                />
                <div className="mt-3 flex gap-2">
                  <a
                    href={result.flyer}
                    download="flyer.png"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[var(--color-accent)]/15 py-2 text-xs text-[var(--color-accent)]"
                  >
                    <DownloadIcon width={13} height={13} />
                    Flyer
                  </a>
                  <a
                    href={result.story}
                    download="flyer-story.png"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[var(--color-panel-border)] py-2 text-xs text-[var(--color-muted)]"
                  >
                    <DownloadIcon width={13} height={13} />
                    Story
                  </a>
                </div>
              </div>
            ) : (
              <p className="px-4 text-center text-xs text-[var(--color-muted)]">
                Your flyer preview will appear here.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
