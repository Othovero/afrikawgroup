"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AuroraBackdrop } from "@/components/AuroraBackdrop";
import { AlertIcon, LockIcon, MailIcon } from "@/components/Icons";
import {
  DEMO_CREDENTIALS,
  getPendingMfaEmail,
  getSession,
  signIn,
  verifyMfa,
} from "@/lib/auth";

type Step = "credentials" | "mfa";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("credentials");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const codeRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (getSession()) router.replace("/dashboard");
  }, [router]);

  async function handleCredentials(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const res = await signIn(email, password);
    setBusy(false);
    if (!res.ok) {
      setError(res.error);
      return;
    }
    setStep("mfa");
    setTimeout(() => codeRefs.current[0]?.focus(), 60);
  }

  async function submitCode(fullCode: string) {
    setError(null);
    setBusy(true);
    const res = await verifyMfa(fullCode);
    setBusy(false);
    if (!res.ok) {
      setError(res.error);
      setCode(Array(6).fill(""));
      codeRefs.current[0]?.focus();
      return;
    }
    router.replace("/dashboard");
  }

  function handleDigit(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...code];
    next[index] = digit;
    setCode(next);
    if (digit && index < 5) codeRefs.current[index + 1]?.focus();
    if (next.every((d) => d !== "")) submitCode(next.join(""));
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      codeRefs.current[index - 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent) {
    const digits = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!digits) return;
    e.preventDefault();
    const next = Array(6).fill("");
    digits.split("").forEach((d, i) => (next[i] = d));
    setCode(next);
    if (digits.length === 6) submitCode(digits);
    else codeRefs.current[digits.length]?.focus();
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-12">
      <AuroraBackdrop />

      <div className="relative w-full max-w-[420px]">
        {/* Brand */}
        <div className="mb-8 text-center">
          <img
            src="/assets/awg-logo.png"
            alt="Afrika Wealth Group"
            className="mx-auto mb-4 h-20 w-auto"
          />
          <h1 className="font-display text-2xl font-semibold tracking-tight">
            Afrika Wealth Group
          </h1>
          <p className="mt-1.5 text-sm text-[var(--color-muted)]">Member portal</p>
        </div>

        <div className="rounded-3xl border border-[var(--color-panel-border)] bg-[var(--color-panel)]/80 p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
          {step === "credentials" ? (
            <form onSubmit={handleCredentials} className="space-y-5">
              <div>
                <h2 className="font-display text-lg">Sign in</h2>
                <p className="mt-1 text-xs text-[var(--color-muted)]">
                  Two-factor authentication is required on every account.
                </p>
              </div>

              <label className="block">
                <span className="mb-1.5 block text-xs text-[var(--color-muted)]">Email</span>
                <div className="relative">
                  <MailIcon
                    width={16}
                    height={16}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
                  />
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@afrikawealth.group"
                    className="w-full rounded-xl border border-[var(--color-panel-border)] bg-black/40 py-2.5 pl-10 pr-3.5 text-sm outline-none transition-colors placeholder:text-[var(--color-muted)]/50 focus:border-[var(--color-accent)]"
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs text-[var(--color-muted)]">Password</span>
                <div className="relative">
                  <LockIcon
                    width={16}
                    height={16}
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--color-muted)]"
                  />
                  <input
                    type="password"
                    required
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-[var(--color-panel-border)] bg-black/40 py-2.5 pl-10 pr-3.5 text-sm outline-none transition-colors placeholder:text-[var(--color-muted)]/50 focus:border-[var(--color-accent)]"
                  />
                </div>
              </label>

              {error && <ErrorNote message={error} />}

              <button
                type="submit"
                disabled={busy}
                className="w-full rounded-xl bg-gradient-to-r from-[var(--color-accent-soft)] via-[var(--color-accent)] to-[var(--color-accent-deep)] py-2.5 text-sm font-semibold text-[var(--color-ink)] shadow-[0_8px_30px_-8px_rgba(53,195,234,0.5)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {busy ? "Checking…" : "Continue"}
              </button>
            </form>
          ) : (
            <div className="space-y-5">
              <div>
                <h2 className="font-display text-lg">Two-factor code</h2>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)]">
                  Enter the 6-digit code from your authenticator app for{" "}
                  <span className="text-[var(--color-parchment)]">{getPendingMfaEmail()}</span>.
                </p>
              </div>

              <div className="flex justify-between gap-2" onPaste={handlePaste}>
                {code.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => {
                      codeRefs.current[i] = el;
                    }}
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    disabled={busy}
                    onChange={(e) => handleDigit(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    className="h-14 w-full rounded-xl border border-[var(--color-panel-border)] bg-black/40 text-center font-display text-xl outline-none transition-colors focus:border-[var(--color-accent)] disabled:opacity-60"
                  />
                ))}
              </div>

              {error && <ErrorNote message={error} />}

              {busy && (
                <p className="text-center text-xs text-[var(--color-accent)]">Verifying…</p>
              )}

              <button
                type="button"
                onClick={() => {
                  setStep("credentials");
                  setCode(Array(6).fill(""));
                  setError(null);
                }}
                className="w-full text-center text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-parchment)]"
              >
                ← Use a different account
              </button>
            </div>
          )}
        </div>

        {/* Demo credentials — no signup path exists without a database */}
        <div className="mt-6 rounded-2xl border border-dashed border-[var(--color-panel-border)] bg-black/20 p-4">
          <p className="mb-2 text-[11px] uppercase tracking-wider text-[var(--color-muted)]">
            Demo accounts — no database connected
          </p>
          <div className="space-y-1.5">
            {DEMO_CREDENTIALS.map((c) => (
              <button
                key={c.email}
                onClick={() => {
                  setEmail(c.email);
                  setPassword(c.password);
                  setError(null);
                }}
                className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-xs transition-colors hover:bg-white/5"
              >
                <span className="text-[var(--color-parchment)]">{c.email}</span>
                <span className="rounded-full bg-[var(--color-accent)]/15 px-2 py-0.5 text-[10px] uppercase tracking-wide text-[var(--color-accent)]">
                  {c.role}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-2.5 text-[11px] text-[var(--color-muted)]">
            Password <code className="text-[var(--color-parchment)]">portal123</code> · any 6 digits
            for the 2FA step
          </p>
        </div>
      </div>
    </main>
  );
}

function ErrorNote({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2.5 text-xs text-red-300">
      <AlertIcon width={15} height={15} className="mt-px shrink-0" />
      <span>{message}</span>
    </div>
  );
}
