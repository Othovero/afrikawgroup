import { Container } from "../ui/Container";
import { SectionShell, SectionHeading } from "../ui/SectionShell";
import { Reveal } from "../ui/Reveal";
import { ChainLinkIcon, CompassIcon, LayersIcon, WalletIcon } from "../Icons";
import { TechGridMotif } from "../TechGridMotif";
import { pricing } from "../../data/pricing";

const infra = [
  { icon: LayersIcon, label: "Mainnet", desc: "The core blockchain network." },
  { icon: CompassIcon, label: "Explorer", desc: "Public view of on-chain data." },
  { icon: ChainLinkIcon, label: "Bridge", desc: "Cross-chain connectivity." },
  { icon: WalletIcon, label: "BO Wallet", desc: "Native wallet for holding and staking assets." },
];

export function WhatIsBotChain() {
  return (
    <SectionShell id="what-is-botchain" tone="base" className="relative overflow-hidden">
      <TechGridMotif className="pointer-events-none absolute inset-0 h-full w-full opacity-40" />
      <Container className="relative">
        <SectionHeading
          title="What is BOT Chain"
          intro="BOT Chain is a Layer-1 blockchain. Its native coin is BOT, with a total supply of 150 million."
        />
        <Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {infra.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)]/90 backdrop-blur-sm p-6 text-center transition-colors hover:border-[var(--color-teal-deep)]"
              >
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)]">
                  <Icon />
                </div>
                <div className="font-display text-lg text-[var(--color-parchment)]">{label}</div>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[var(--color-muted)]">
            BOT Chain also includes a decentralized exchange, BDEX, and runs a Lab program
            covering project onboarding, developer support, liquidity provisioning, and
            exchange-listing assistance for projects building on the chain.
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)]/80 p-6">
            <div className="font-display text-base text-[var(--color-parchment)]">
              How the chain runs
            </div>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              BOT Chain uses a hybrid consensus it calls SPoA — pairing compute-backed authority
              (DePIN hardware) with staking consensus (PoS), so validators secure the chain by
              staking BOT while hardware nodes contribute physical GPU/CPU capacity. It is
              EVM-compatible, and describes a zero-inflation token model in which mining rewards
              come from transaction fees and compute-service revenue rather than new issuance.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                ["0.75s", "Block time"],
                ["~0.9s", "Finality"],
                ["64", "Tx per batch"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-xl bg-black/30 px-3 py-3 text-center">
                  <div className="font-display text-base text-[var(--color-accent)]">{v}</div>
                  <div className="text-[11px] text-[var(--color-muted)]">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.17}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-[var(--color-muted)]">
            CaryPact is not the only protocol on the chain. BOT Chain's own site lists an ecosystem
            including Money, ArcadeX, Tandot, Meridian, Finnext Wallet, CIAO, Nasera, SilkDAO and
            Choicepop.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
            {[
              ["19.3M+", "Blocks"],
              ["1.27M+", "Wallet addresses"],
              ["14.5M+", "Transactions"],
              ["0.7s", "Avg block time"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-[var(--color-panel-border)] bg-[var(--color-panel)]/80 px-3 py-3 text-center"
              >
                <div className="font-display text-lg text-[var(--color-teal)]">{value}</div>
                <div className="text-[11px] text-[var(--color-muted)]">{label}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-[var(--color-muted)]">
            Live network activity, as of {pricing.asOf} —{" "}
            <a
              href="https://scan.botchain.ai"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-teal)] underline underline-offset-2"
            >
              check the live explorer
            </a>
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-3 rounded-full border border-[var(--color-panel-border)] bg-[var(--color-panel)] px-5 py-3 text-sm">
            <span className="text-[var(--color-muted)]">BOT price snapshot: </span>
            <span className="font-display text-[var(--color-teal)]">${pricing.bot.usd}</span>
            <span className="text-[var(--color-muted)]">as of {pricing.asOf} —</span>
            <a
              href={pricing.bot.url}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-teal)] underline underline-offset-2 hover:text-[var(--color-teal-soft)]"
            >
              check live on CoinGecko
            </a>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
