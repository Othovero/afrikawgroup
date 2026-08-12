import { Container } from "../ui/Container";
import { SectionShell } from "../ui/SectionShell";
import { Reveal } from "../ui/Reveal";
import { GoldButton } from "../ui/GoldButton";
import { SponsorAvatar } from "../SponsorAvatar";
import { MessageIcon } from "../Icons";
import type { SponsorTokens } from "../../types";

export function SponsorBlock({ tokens }: { tokens: SponsorTokens }) {
  return (
    <SectionShell id="sponsor" tone="panel">
      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-lg flex-col items-center gap-5 rounded-3xl border border-[var(--color-panel-border)] bg-gradient-to-b from-[var(--color-panel)] to-[var(--color-ink-soft)] p-10 text-center">
            <SponsorAvatar photoUrl={tokens.sponsor_photo} name={tokens.sponsor_name} size={88} />
            <div>
              <p className="font-display text-xl text-[var(--color-parchment)]">{tokens.sponsor_name}</p>
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-gold)]">
                Afrika Wealth Group member
              </p>
            </div>
            <GoldButton href={tokens.sponsor_whatsapp} target="_blank" rel="noreferrer" showArrow={false}>
              <MessageIcon width={16} height={16} />
              Chat on WhatsApp
            </GoldButton>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
