import { Container } from "../ui/Container";
import type { SponsorTokens } from "../../types";

/** Where the member portal is served. Override per environment. */
const PORTAL_ORIGIN = import.meta.env.VITE_PORTAL_ORIGIN ?? "http://localhost:3000";

function LockIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function Footer({ tokens }: { tokens: SponsorTokens }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-panel-border)] bg-[var(--color-ink)] pb-10 pt-12">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <img src="/assets/awg-logo.png" alt="Afrika Wealth Group" className="h-14 w-auto" />
        </div>

        <div className="mt-8 rounded-2xl border border-[var(--color-gold-deep)]/60 bg-black/40 p-6 text-sm leading-relaxed text-[var(--color-parchment)]">
          <p>
            This page is operated by an independent member of a private marketing group and is not
            an official CaryPact or BOT Chain communication. Nothing here is financial advice or an
            offer of investment. Digital asset participation carries risk including total loss of
            capital. No income or return is promised, implied, or guaranteed. Conduct your own
            research and consider independent professional advice before participating.
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-panel-border)] pt-6 text-xs text-[var(--color-muted)] md:flex-row">
          <span>© {year} Afrika Wealth Group.</span>
          <span className="break-all">{tokens.funnel_url}</span>
          <a
            href={PORTAL_ORIGIN}
            className="flex items-center gap-1.5 rounded-full border border-[var(--color-panel-border)] px-3.5 py-1.5 transition-colors hover:border-[var(--color-accent-deep)] hover:text-[var(--color-parchment)]"
          >
            <LockIcon />
            Group members — sign in
          </a>
        </div>
      </Container>
    </footer>
  );
}
