import { Container } from "../ui/Container";
import { SectionShell, SectionHeading } from "../ui/SectionShell";

export interface Testimonial {
  quote: string;
  attribution: string;
}

/**
 * Built per Requirements §5.12 but intentionally NOT mounted in FunnelPage.
 * No real, sourced member testimonials exist yet (see copy draft §12 and
 * Requirements §10's open question). Wire `items` in and mount this
 * component only once real quotes exist — each one must individually pass
 * the Requirements §1 claims filter (no earnings/return language) before
 * being added here.
 */
export function SocialProof({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;

  return (
    <SectionShell id="social-proof" tone="base">
      <Container>
        <SectionHeading title="From the community" />
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <blockquote
              key={t.attribution}
              className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-6 text-sm text-[var(--color-parchment)]/85"
            >
              <p className="leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-xs uppercase tracking-wide text-[var(--color-gold)]">
                {t.attribution}
              </footer>
            </blockquote>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
