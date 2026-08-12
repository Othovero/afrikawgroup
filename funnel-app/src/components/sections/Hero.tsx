import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { GoldButton } from "../ui/GoldButton";
import { CyberGlowMotif } from "../CyberGlowMotif";
import { SponsorAvatar } from "../SponsorAvatar";
import type { SponsorTokens } from "../../types";

export function Hero({ tokens }: { tokens: SponsorTokens }) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_-10%,#0d1f26_0%,var(--color-ink)_60%)] pt-16 pb-24 md:pt-24 md:pb-32">
      <CyberGlowMotif className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-ink)]/40 to-[var(--color-ink)]" />

      <Container className="relative">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.08] text-[var(--color-parchment)]">
              Own compute power on BOT Chain{" "}
              <span className="bg-gradient-to-r from-[var(--color-accent-soft)] to-[var(--color-accent)] bg-clip-text text-transparent">
                from $100
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-muted)]">
              CaryPact tokenizes physical compute power into a tradable on-chain asset — mined daily,
              stakeable, bridgeable across three chains. Afrika Wealth Group member{" "}
              <strong className="text-[var(--color-parchment)]">{tokens.sponsor_name}</strong> will
              walk you through it.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <GoldButton href="#calculator">Run the numbers</GoldButton>
              <GoldButton variant="outline" href="#sponsor" showArrow={false}>
                Meet {tokens.sponsor_name.split(" ")[0]}
              </GoldButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm rounded-3xl border border-[var(--color-panel-border)] bg-white/[0.04] backdrop-blur-xl p-8 text-center shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
          >
            <SponsorAvatar photoUrl={tokens.sponsor_photo} name={tokens.sponsor_name} size={104} />
            <p className="mt-5 font-display text-xl text-[var(--color-parchment)]">{tokens.sponsor_name}</p>
            <p className="mt-1 text-sm uppercase tracking-[0.18em] text-[var(--color-accent)]">
              Afrika Wealth Group
            </p>
            <p className="mt-4 text-sm text-[var(--color-muted)]">
              Independent member — not an official CaryPact or BOT Chain representative.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
