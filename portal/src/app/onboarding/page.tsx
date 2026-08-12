"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AuroraBackdrop } from "@/components/AuroraBackdrop";
import { AlertIcon, CheckIcon, FunnelIcon, ShieldIcon } from "@/components/Icons";
import { getSession, type SessionUser } from "@/lib/auth";
import {
  emptyProfile,
  isComplete,
  loadProfile,
  prettyFunnelUrl,
  saveProfile,
  slugify,
  validateReferralUrl,
  type FunnelProfile,
} from "@/lib/profile";

const STEPS = ["Your details", "Referral link", "Your link"] as const;

export default function OnboardingPage() {
  const router = useRouter();
  const [user, setUser] = useState<SessionUser | null>(null);
  const [profile, setProfile] = useState<FunnelProfile | null>(null);
  const [step, setStep] = useState(0);
  const [slugEdited, setSlugEdited] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const session = getSession();
    if (!session) {
      router.replace("/login");
      return;
    }
    setUser(session);
    setProfile(loadProfile(session.id) ?? emptyProfile(session.displayName));
  }, [router]);

  const update = (patch: Partial<FunnelProfile>) =>
    setProfile((p) => (p ? { ...p, ...patch } : p));

  const slugPreview = useMemo(
    () => (profile ? prettyFunnelUrl(profile) : ""),
    [profile]
  );

  if (!user || !profile) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-panel-border)] border-t-[var(--color-accent)]" />
      </div>
    );
  }

  function validateStep(): boolean {
    const e: Record<string, string> = {};
    if (step === 0) {
      if (!profile!.displayName.trim()) e.displayName = "Required.";
      const digits = profile!.whatsapp.replace(/\D/g, "");
      if (digits.length < 8) e.whatsapp = "Enter a full number including country code.";
      if (!profile!.slug.trim()) e.slug = "Required.";
      else if (!/^[a-z0-9-]+$/.test(profile!.slug))
        e.slug = "Lowercase letters, numbers and hyphens only.";
    }
    if (step === 1) {
      const cp = validateReferralUrl(profile!.carypactUrl, "carypact");
      if (cp) e.carypactUrl = cp;
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function next() {
    if (!validateStep()) return;
    if (step === 1) {
      const finished: FunnelProfile = { ...profile!, completedAt: new Date().toISOString() };
      setProfile(finished);
      saveProfile(user!.id, finished);
      setStep(2);
      return;
    }
    setStep((s) => s + 1);
  }

  return (
    <main className="relative min-h-screen overflow-hidden px-5 py-10">
      <AuroraBackdrop />

      <div className="relative mx-auto w-full max-w-[540px]">
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
            <FunnelIcon width={20} height={20} />
          </div>
          <h1 className="font-display text-xl">Set up your funnel</h1>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Three steps. Takes about a minute.
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-6 flex items-center gap-2">
          {STEPS.map((label, i) => (
            <div key={label} className="flex flex-1 items-center gap-2">
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs transition-colors ${
                  i < step
                    ? "bg-[var(--color-accent)] text-[var(--color-ink)]"
                    : i === step
                      ? "border border-[var(--color-accent)] text-[var(--color-accent)]"
                      : "border border-[var(--color-panel-border)] text-[var(--color-muted)]"
                }`}
              >
                {i < step ? <CheckIcon width={13} height={13} /> : i + 1}
              </div>
              <span
                className={`hidden text-xs sm:block ${
                  i <= step ? "text-[var(--color-parchment)]" : "text-[var(--color-muted)]"
                }`}
              >
                {label}
              </span>
              {i < STEPS.length - 1 && (
                <div
                  className={`h-px flex-1 ${
                    i < step ? "bg-[var(--color-accent)]" : "bg-[var(--color-panel-border)]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-[var(--color-panel-border)] bg-[var(--color-panel)]/80 p-6 backdrop-blur-xl">
          {step === 0 && (
            <div className="space-y-5">
              <Field
                label="Display name"
                hint="Shown as the sponsor on your funnel page."
                value={profile.displayName}
                error={errors.displayName}
                onChange={(v) => {
                  update({ displayName: v, ...(slugEdited ? {} : { slug: slugify(v) }) });
                }}
                placeholder="Thandiwe Mokoena"
              />
              <Field
                label="WhatsApp number"
                hint="Include your country code. Becomes a click-to-chat button."
                value={profile.whatsapp}
                error={errors.whatsapp}
                onChange={(v) => update({ whatsapp: v })}
                placeholder="+267 71 234 567"
              />
              <Field
                label="Photo URL"
                hint="Optional. Leave blank to use an initials badge."
                value={profile.photoUrl}
                onChange={(v) => update({ photoUrl: v })}
                placeholder="https://…"
              />
              <div>
                <Field
                  label="Your funnel address"
                  value={profile.slug}
                  error={errors.slug}
                  onChange={(v) => {
                    setSlugEdited(true);
                    update({ slug: slugify(v) });
                  }}
                  placeholder="thandiwe-m"
                />
                <p className="mt-1.5 font-mono text-[11px] text-[var(--color-accent)]">
                  {slugPreview}
                </p>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-5">
              <Field
                label="CaryPact referral link"
                hint="Copy this from your CaryPact account. Your Register button points here. This is the only referral link — CaryPact issues it, BOT Chain doesn't."
                value={profile.carypactUrl}
                error={errors.carypactUrl}
                onChange={(v) => update({ carypactUrl: v })}
                placeholder="https://app.carypact.com/?ref=…"
              />
              <div className="flex items-start gap-2 rounded-xl border border-[var(--color-panel-border)] bg-black/25 px-3 py-2.5 text-[11px] leading-relaxed text-[var(--color-muted)]">
                <ShieldIcon width={14} height={14} className="mt-px shrink-0 text-[var(--color-accent)]" />
                <span>
                  Your link is only used to build your own page. The portal doesn&apos;t connect to
                  CaryPact and can&apos;t see your account there.
                </span>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                <CheckIcon width={22} height={22} />
              </div>
              <div>
                <h2 className="font-display text-lg">Your funnel is live</h2>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  Share this link. Every visit and Register click is tracked on your dashboard.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--color-panel-border)] bg-black/40 px-3 py-3 font-mono text-xs break-all text-[var(--color-accent)]">
                {slugPreview}
              </div>
              <button
                onClick={() => router.replace("/dashboard")}
                className="w-full rounded-xl bg-gradient-to-r from-[var(--color-accent-soft)] via-[var(--color-accent)] to-[var(--color-accent-deep)] py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
              >
                Go to dashboard
              </button>
            </div>
          )}

          {step < 2 && (
            <div className="mt-6 flex gap-3">
              {step > 0 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="rounded-xl border border-[var(--color-panel-border)] px-4 py-2.5 text-sm text-[var(--color-muted)] transition-colors hover:text-[var(--color-parchment)]"
                >
                  Back
                </button>
              )}
              <button
                onClick={next}
                className="flex-1 rounded-xl bg-gradient-to-r from-[var(--color-accent-soft)] via-[var(--color-accent)] to-[var(--color-accent-deep)] py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
              >
                {step === 1 ? "Create my funnel" : "Continue"}
              </button>
            </div>
          )}
        </div>

        {isComplete(loadProfile(user.id)) && step < 2 && (
          <button
            onClick={() => router.replace("/dashboard")}
            className="mx-auto mt-5 block text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-parchment)]"
          >
            Skip — back to dashboard
          </button>
        )}
      </div>
    </main>
  );
}

function Field({
  label,
  hint,
  value,
  onChange,
  placeholder,
  error,
}: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs text-[var(--color-parchment)]">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-black/40 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-[var(--color-muted)]/45 ${
          error
            ? "border-red-500/50 focus:border-red-500"
            : "border-[var(--color-panel-border)] focus:border-[var(--color-accent)]"
        }`}
      />
      {error ? (
        <span className="mt-1.5 flex items-center gap-1.5 text-[11px] text-red-300">
          <AlertIcon width={12} height={12} />
          {error}
        </span>
      ) : hint ? (
        <span className="mt-1.5 block text-[11px] text-[var(--color-muted)]">{hint}</span>
      ) : null}
    </label>
  );
}
