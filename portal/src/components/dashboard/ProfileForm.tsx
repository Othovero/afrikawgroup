"use client";

import { useState } from "react";
import { AlertIcon, CheckIcon, ShieldIcon } from "@/components/Icons";
import type { SessionUser } from "@/lib/auth";
import {
  saveProfile,
  slugify,
  validateReferralUrl,
  type FunnelProfile,
} from "@/lib/profile";

export function ProfileForm({
  user,
  profile,
  onSaved,
}: {
  user: SessionUser;
  profile: FunnelProfile;
  onSaved: (p: FunnelProfile) => void;
}) {
  const [form, setForm] = useState(profile);
  const [slugEdited, setSlugEdited] = useState(true); // editing an existing profile — don't auto-overwrite a chosen slug
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saved, setSaved] = useState(false);

  const update = (patch: Partial<FunnelProfile>) => {
    setSaved(false);
    setForm((f) => ({ ...f, ...patch }));
  };

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!form.displayName.trim()) e.displayName = "Required.";
    if (form.whatsapp.replace(/\D/g, "").length < 8)
      e.whatsapp = "Enter a full number including country code.";
    if (!form.slug.trim()) e.slug = "Required.";
    else if (!/^[a-z0-9-]+$/.test(form.slug))
      e.slug = "Lowercase letters, numbers and hyphens only.";
    const cp = validateReferralUrl(form.carypactUrl, "carypact");
    if (cp) e.carypactUrl = cp;
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function save() {
    if (!validate()) return;
    const next: FunnelProfile = { ...form, completedAt: form.completedAt ?? new Date().toISOString() };
    saveProfile(user.id, next);
    setForm(next);
    onSaved(next);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="max-w-2xl space-y-6">
      <div className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-6">
        <h3 className="font-display text-base">Account</h3>
        <p className="mt-0.5 text-xs text-[var(--color-muted)]">Read-only — from your login.</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <ReadOnly label="Email" value={user.email} />
          <ReadOnly label="Referral code" value={user.referralCode} accent />
          <ReadOnly label="Role" value={user.role} className="capitalize" />
          <div className="rounded-xl bg-black/25 px-3.5 py-2.5">
            <div className="text-[11px] text-[var(--color-muted)]">2FA</div>
            <div className="mt-0.5 flex items-center gap-1.5 text-sm text-emerald-400">
              <ShieldIcon width={13} height={13} />
              Active
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-6">
        <h3 className="font-display text-base">Funnel profile</h3>
        <p className="mt-0.5 text-xs text-[var(--color-muted)]">
          Feeds your landing page and dashboard everywhere they show your name.
        </p>

        <div className="mt-5 space-y-4">
          <Field
            label="Display name"
            value={form.displayName}
            error={errors.displayName}
            onChange={(v) => update({ displayName: v })}
          />
          <Field
            label="WhatsApp number"
            value={form.whatsapp}
            error={errors.whatsapp}
            onChange={(v) => update({ whatsapp: v })}
            placeholder="+267 71 234 567"
          />
          <Field
            label="Photo URL"
            value={form.photoUrl}
            onChange={(v) => update({ photoUrl: v })}
            placeholder="https://… (optional)"
          />
          <Field
            label="Funnel address"
            value={form.slug}
            error={errors.slug}
            onChange={(v) => {
              setSlugEdited(true);
              update({ slug: slugify(v) });
            }}
            hint={slugEdited ? undefined : "Auto-generated from your name."}
          />
          <Field
            label="CaryPact referral link"
            hint="The only referral link — CaryPact issues it, BOT Chain doesn't."
            value={form.carypactUrl}
            error={errors.carypactUrl}
            onChange={(v) => update({ carypactUrl: v })}
            placeholder="https://app.carypact.com/?ref=…"
          />
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            onClick={save}
            className="rounded-xl bg-gradient-to-r from-[var(--color-accent-soft)] via-[var(--color-accent)] to-[var(--color-accent-deep)] px-5 py-2.5 text-sm font-semibold text-[var(--color-ink)] transition-transform hover:-translate-y-0.5"
          >
            Save changes
          </button>
          {saved && (
            <span className="flex items-center gap-1.5 text-xs text-emerald-400">
              <CheckIcon width={13} height={13} />
              Saved — live everywhere now
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function ReadOnly({
  label,
  value,
  accent,
  className = "",
}: {
  label: string;
  value: string;
  accent?: boolean;
  className?: string;
}) {
  return (
    <div className="rounded-xl bg-black/25 px-3.5 py-2.5">
      <div className="text-[11px] text-[var(--color-muted)]">{label}</div>
      <div
        className={`mt-0.5 truncate text-sm ${accent ? "text-[var(--color-accent)]" : "text-[var(--color-parchment)]"} ${className}`}
      >
        {value}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  error,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs text-[var(--color-muted)]">{label}</span>
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
