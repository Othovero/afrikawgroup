"use client";

import { useState } from "react";
import Link from "next/link";
import { enquiries, flyers as seedFlyers } from "@/lib/mockData";
import { CheckIcon, CopyIcon, EyeIcon, ImageIcon, SparkIcon } from "@/components/Icons";
import type { SessionUser } from "@/lib/auth";
import { buildFunnelUrl, prettyFunnelUrl, type FunnelProfile } from "@/lib/profile";
import { DAILY_CAP, remainingToday } from "@/lib/flyer/dailyCap";
import { FlyerGenerator } from "./FlyerGenerator";

export function FunnelLinkPanel({
  user,
  profile,
  onEdit,
}: {
  user: SessionUser;
  profile: FunnelProfile;
  onEdit?: () => void;
}) {
  const [copied, setCopied] = useState(false);
  // What's shown, what's copied and what's opened by "View live page" are all
  // the SAME url on purpose. There's no shared database between the portal
  // and the funnel app in this demo, so the personalization (name, WhatsApp,
  // referral links) can only travel to the funnel page as query params on
  // this exact link — a shorter "pretty" link with no params would silently
  // show the generic demo page instead of your details. Once a real backend
  // resolves /f/{slug} server-side, this collapses to prettyFunnelUrl and the
  // params go away.
  const liveUrl = buildFunnelUrl(profile, user.referralCode);
  const friendlyAddress = prettyFunnelUrl(profile);

  async function copy() {
    try {
      await navigator.clipboard.writeText(liveUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — the URL is visible on screen regardless */
    }
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[var(--color-panel-border)] bg-gradient-to-br from-[var(--color-panel)] to-[var(--color-ink-soft)] p-5">
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--color-accent)] opacity-10 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-base">Your funnel</h3>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/12 px-2.5 py-1 text-[11px] text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="pulse-ring absolute inset-0 rounded-full" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Live
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-xl border border-[var(--color-panel-border)] bg-black/40 px-3 py-2.5">
          <span className="min-w-0 flex-1 truncate font-mono text-xs text-[var(--color-parchment)]">
            {liveUrl}
          </span>
          <button
            onClick={copy}
            className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[var(--color-accent)]/15 px-2.5 py-1.5 text-[11px] text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/25"
          >
            {copied ? <CheckIcon width={13} height={13} /> : <CopyIcon width={13} height={13} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <p className="mt-1.5 truncate text-[11px] text-[var(--color-muted)]">
          Address: <span className="text-[var(--color-parchment)]/80">{friendlyAddress}</span>
        </p>

        <div className="mt-3 flex gap-2">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[var(--color-accent-soft)] via-[var(--color-accent)] to-[var(--color-accent-deep)] py-2 text-xs font-semibold text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
          >
            <EyeIcon width={14} height={14} />
            View live page
          </a>
          {onEdit ? (
            <button
              onClick={onEdit}
              className="rounded-xl border border-[var(--color-panel-border)] px-3 py-2 text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-parchment)]"
            >
              Edit
            </button>
          ) : (
            <Link
              href="/onboarding"
              className="rounded-xl border border-[var(--color-panel-border)] px-3 py-2 text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-parchment)]"
            >
              Edit
            </Link>
          )}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-black/25 px-3 py-2.5">
            <div className="text-[11px] text-[var(--color-muted)]">Referral code</div>
            <div className="mt-0.5 font-display text-sm text-[var(--color-accent)]">
              {user.referralCode}
            </div>
          </div>
          <div className="rounded-xl bg-black/25 px-3 py-2.5">
            <div className="text-[11px] text-[var(--color-muted)]">WhatsApp</div>
            <div className="mt-0.5 truncate font-display text-sm">{profile.whatsapp || "—"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function EnquiriesPanel() {
  const [items, setItems] = useState(enquiries);

  function markRead(id: string) {
    setItems((prev) => prev.map((e) => (e.id === id ? { ...e, isRead: true } : e)));
  }

  const unread = items.filter((e) => !e.isRead).length;

  return (
    <div className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-base">Enquiries</h3>
          <p className="mt-0.5 text-xs text-[var(--color-muted)]">
            {unread} unread of {items.length}
          </p>
        </div>
      </div>

      <div className="space-y-2.5">
        {items.map((e) => (
          <button
            key={e.id}
            onClick={() => markRead(e.id)}
            className={`w-full rounded-xl border p-3.5 text-left transition-colors ${
              e.isRead
                ? "border-[var(--color-panel-border)] bg-black/15"
                : "border-[var(--color-accent)]/25 bg-[var(--color-accent)]/[0.06] hover:border-[var(--color-accent)]/45"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm text-[var(--color-parchment)]">{e.name}</span>
              {!e.isRead && <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />}
            </div>
            <div className="mt-0.5 text-[11px] text-[var(--color-muted)]">{e.contact}</div>
            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[var(--color-muted)]">
              {e.message}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

interface GeneratedFlyer {
  id: string;
  template: string;
  createdAt: string;
  accent: string;
  image: string;
}

export function FlyersPanel({
  user,
  profile,
}: {
  user: SessionUser;
  profile: FunnelProfile;
}) {
  const [open, setOpen] = useState(false);
  const [generated, setGenerated] = useState<GeneratedFlyer[]>([]);
  const [remaining, setRemaining] = useState(() => remainingToday(user.id));

  return (
    <div className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-base">Flyers</h3>
          <p className="mt-0.5 text-xs text-[var(--color-muted)]">
            {remaining} of {DAILY_CAP} left today
          </p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-1.5 rounded-lg bg-[var(--color-accent)]/15 px-3 py-1.5 text-[11px] text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/25"
        >
          <SparkIcon width={13} height={13} />
          Generate
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {generated.map((f) => (
          <a
            key={f.id}
            href={f.image}
            download="flyer.png"
            className="group overflow-hidden rounded-xl border border-[var(--color-accent)]/30 bg-black/25 transition-colors hover:border-[var(--color-accent)]"
          >
            <img src={f.image} alt={f.template} className="aspect-square w-full object-cover" />
            <div className="p-2.5">
              <div className="truncate text-[11px] text-[var(--color-parchment)]">{f.template}</div>
              <div className="text-[10px] text-[var(--color-muted)]">{f.createdAt}</div>
            </div>
          </a>
        ))}
        {seedFlyers.map((f) => (
          <div
            key={f.id}
            className="group overflow-hidden rounded-xl border border-[var(--color-panel-border)] bg-black/25"
          >
            <div
              className="flex aspect-square items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${f.accent}22, transparent 70%)`,
              }}
            >
              <ImageIcon width={22} height={22} style={{ color: f.accent }} />
            </div>
            <div className="p-2.5">
              <div className="truncate text-[11px] text-[var(--color-parchment)]">{f.template}</div>
              <div className="text-[10px] text-[var(--color-muted)]">{f.createdAt}</div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-[11px] text-[var(--color-muted)]">
        Every flyer carries &ldquo;Not financial advice. Capital at risk.&rdquo; and passes the
        claims filter before download.
      </p>

      {open && (
        <FlyerGenerator
          user={user}
          profile={profile}
          onClose={() => setOpen(false)}
          onGenerated={() => setRemaining(remainingToday(user.id))}
        />
      )}
    </div>
  );
}
