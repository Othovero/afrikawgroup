import { Container } from "../ui/Container";
import { GoldButton } from "../ui/GoldButton";
import { Reveal } from "../ui/Reveal";

export function CtaBlock({
  heading,
  ctaLabel,
  href,
}: {
  heading: string;
  ctaLabel: string;
  href: string;
}) {
  return (
    <section className="py-14 md:py-16">
      <Container>
        <Reveal>
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-[var(--color-panel-border)] bg-gradient-to-br from-[var(--color-panel)] to-[var(--color-ink-soft)] px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
            <p className="font-display text-xl md:text-2xl text-[var(--color-parchment)]">{heading}</p>
            <GoldButton href={href} target="_blank" rel="noreferrer">
              {ctaLabel}
            </GoldButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
