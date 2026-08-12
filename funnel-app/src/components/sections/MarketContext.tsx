import { Container } from "../ui/Container";
import { SectionShell, SectionHeading } from "../ui/SectionShell";
import { Reveal } from "../ui/Reveal";
import { LayersIcon, ChainLinkIcon, CompassIcon, ShieldIcon } from "../Icons";

const classes = [
  { label: "Blockchains", desc: "The base networks themselves." },
  { label: "Exchanges", desc: "Where assets are traded." },
  { label: "Ecosystems", desc: "Protocols and apps built on a chain." },
  { label: "Coins & tokens", desc: "The assets those systems issue." },
];

const fundamentals = [
  {
    icon: LayersIcon,
    label: "Decentralization",
    desc: "A ledger distributed across a network of computers rather than held by one party.",
  },
  {
    icon: ChainLinkIcon,
    label: "Consensus",
    desc: "A majority of the network must agree a transaction is valid before it is recorded.",
  },
  {
    icon: CompassIcon,
    label: "Transparency",
    desc: "Every transaction is verifiable and the record is permanent.",
  },
  {
    icon: ShieldIcon,
    label: "Security",
    desc: "Records are tamper-resistant once written to the chain.",
  },
];

export function MarketContext() {
  return (
    <SectionShell id="trends" tone="base">
      <Container>
        <SectionHeading
          title="Where this sits"
          intro="CaryPact is one protocol inside a much larger market. Some context before the specifics."
        />

        <Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {classes.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-5"
              >
                <div className="font-display text-base text-[var(--color-parchment)]">{c.label}</div>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-muted)]">{c.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-5 text-center">
              <div className="font-display text-2xl text-[var(--color-accent)]">$2.58T</div>
              <div className="mt-1 text-xs text-[var(--color-muted)]">Total crypto market cap</div>
            </div>
            <div className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-5 text-center">
              <div className="font-display text-2xl text-[var(--color-accent)]">$1.87T</div>
              <div className="mt-1 text-xs text-[var(--color-muted)]">Public chain market cap</div>
            </div>
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-center text-xs text-[var(--color-muted)]">
            Market figures as stated in CaryPact's own presentation material, dated 3 July 2026.
            Crypto market capitalisation moves constantly — check a live source such as CoinGecko for
            current numbers.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <h3 className="mt-16 text-center font-display text-xl text-[var(--color-parchment)]">
            What a blockchain actually is
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {fundamentals.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-5"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <Icon width={18} height={18} />
                </div>
                <div className="font-display text-base text-[var(--color-parchment)]">{label}</div>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-muted)]">{desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
