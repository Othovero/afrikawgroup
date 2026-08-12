import { Container } from "../ui/Container";
import { SectionShell, SectionHeading } from "../ui/SectionShell";
import { Reveal } from "../ui/Reveal";
import { StatChip } from "../ui/StatChip";

/** Daily emission split, as published. Percentages sum to 100. */
const allocation = [
  { pct: 42, label: "Hashrate mining", color: "#35c3ea" },
  { pct: 35, label: "Active reward pool", color: "#818cf8" },
  { pct: 18, label: "PoS output", color: "#34d399" },
  { pct: 3, label: "DAO", color: "#fbbf24" },
  { pct: 2, label: "Foundation", color: "#f472b6" },
];

const RADIUS = 70;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function AllocationDonut() {
  let offset = 0;
  return (
    <svg viewBox="0 0 200 200" className="mx-auto h-56 w-56 -rotate-90">
      {allocation.map((a) => {
        const dash = (a.pct / 100) * CIRCUMFERENCE;
        const el = (
          <circle
            key={a.label}
            cx="100"
            cy="100"
            r={RADIUS}
            fill="none"
            stroke={a.color}
            strokeWidth="26"
            strokeDasharray={`${dash} ${CIRCUMFERENCE - dash}`}
            strokeDashoffset={-offset}
          />
        );
        offset += dash;
        return el;
      })}
    </svg>
  );
}

export function WhatIsCaryPact() {
  return (
    <SectionShell id="what-is-carypact" tone="panel">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <SectionHeading align="left" title="What is CaryPact" />
            <div className="space-y-4 text-[var(--color-parchment)]/90 leading-relaxed">
              <p>
                CaryPact is described by its team as the first ecosystem protocol built on BOT
                Chain — confirmed on BOT Chain's own roadmap as its first flagship protocol. Its
                stated purpose is to tokenize, verify, and trade physical compute power as a
                decentralized asset.
              </p>
              <p>
                Participation works in three steps: hashrate is purchased (a $100 minimum, priced at
                $1 per hashrate unit), that hashrate generates CA daily through a mining formula, and
                the resulting CA can be withdrawn, staked, or moved across BOT Chain, BNB Chain, and
                ETH Chain.
              </p>
              <p>
                CA is paid out daily at 12:00pm GMT+8. Selling CA carries a 5% slippage under the
                protocol's rules — 1.8% back to liquidity, 3.2% to nodes and the DAO.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <StatChip value="CA" label="Token name" />
              <StatChip value="210M" label="Total token supply" />
              <StatChip value="40,000 / day" label="Daily emission" />
              <StatChip value="~22 yrs" label="Full emission timeline" />
            </div>
            <p className="mt-4 text-center text-xs text-[var(--color-muted)]">
              Emission reduces 10% every two years until complete.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <h3 className="mt-16 text-center font-display text-xl text-[var(--color-parchment)]">
            Where the 40,000 daily CA goes
          </h3>
          <div className="mx-auto mt-8 grid max-w-3xl items-center gap-8 md:grid-cols-[auto_1fr]">
            <AllocationDonut />
            <div className="space-y-3">
              {allocation.map((a) => (
                <div key={a.label} className="flex items-center gap-3">
                  <span
                    className="h-3 w-3 shrink-0 rounded-sm"
                    style={{ backgroundColor: a.color }}
                  />
                  <span className="font-display text-base text-[var(--color-parchment)]">
                    {a.pct}%
                  </span>
                  <span className="text-sm text-[var(--color-muted)]">{a.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
