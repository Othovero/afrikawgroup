import { Container } from "../ui/Container";
import { GoldButton } from "../ui/GoldButton";
import { Reveal } from "../ui/Reveal";
import type { SponsorTokens } from "../../types";

export function FinalCta({ tokens }: { tokens: SponsorTokens }) {
  return (
    <section className="py-20 md:py-28 bg-[radial-gradient(circle_at_50%_100%,#0e2530_0%,var(--color-ink)_65%)]">
      <Container>
        <Reveal className="text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[var(--color-parchment)]">
            Last step: talk to the person who shared this page with you
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <GoldButton href={tokens.sponsor_whatsapp} target="_blank" rel="noreferrer">
              Message {tokens.sponsor_name}
            </GoldButton>
            <GoldButton variant="outline" href={tokens.carypact_url} target="_blank" rel="noreferrer">
              Register
            </GoldButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
