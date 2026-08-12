import { Container } from "../ui/Container";
import { SectionShell, SectionHeading } from "../ui/SectionShell";
import { Reveal } from "../ui/Reveal";

/** V0–V10 ladder exactly as published in the source deck. Personal and
 *  sub-leg volume are the qualifying requirements; the staking % is the
 *  rank's share rate. */
const ranks = [
  { rank: "V0", personal: "300 USDT", subLeg: "3,000 USDT", pct: "—", daily: "—" },
  { rank: "V1", personal: "500 USDT", subLeg: "10,000 USDT", pct: "6%", daily: "~40 u" },
  { rank: "V2", personal: "1,000 USDT", subLeg: "30,000 USDT", pct: "10%", daily: "~60 u" },
  { rank: "V3", personal: "1,500 USDT", subLeg: "80,000 USDT", pct: "13%", daily: "~120 u" },
  { rank: "V4", personal: "2,000 USDT", subLeg: "200,000 USDT", pct: "16%", daily: "~240 u" },
  { rank: "V5", personal: "3,000 USDT", subLeg: "500,000 USDT", pct: "19%", daily: "~1,000 u" },
  { rank: "V6", personal: "4,000 USDT", subLeg: "1.6M USDT", pct: "22%", daily: "~4,500 u" },
  { rank: "V7", personal: "5,000 USDT", subLeg: "5M USDT", pct: "24%", daily: "~12K u" },
  { rank: "V8", personal: "10,000 USDT", subLeg: "2 × V7 legs", pct: "26%", daily: "~30K u" },
  { rank: "V9", personal: "15,000 USDT", subLeg: "2 × V8 legs", pct: "28%", daily: "~80K u" },
  { rank: "V10", personal: "20,000 USDT", subLeg: "2 × V9 legs", pct: "30%", daily: "~200K u" },
];

const streams = [
  {
    kind: "Passive",
    title: "Static mining",
    desc: "Your hashrate's share of a fixed 16,800 CA daily pool. No expiry.",
  },
  {
    kind: "Passive",
    title: "Static staking",
    desc: "Your stake's share of the PoS pool, which draws from a 7,200 CA daily output, a 1.8% sell-slippage reflow, and undistributed dynamic rewards. Earnings auto-compound daily back into your stake, and locking in a fixed 30/90/180/360-day term lifts your daily rate up to 2.5x over the flexible rate.",
  },
  {
    kind: "Active",
    title: "Dynamic team rewards",
    desc: "Half the Active Reward Pool (7,000 CA/day) split by sub-leg hashrate share. Activates once your sub-leg reaches 3,000 USDT of volume.",
  },
  {
    kind: "Active",
    title: "Dynamic rank rewards",
    desc: "The other half of the Active Reward Pool, distributed across the V0–V10 ladder below. V7–V10 also receive a 3% DAO dividend.",
  },
];

export function RewardStructure() {
  return (
    <SectionShell id="reward-plan" tone="panel">
      <Container>
        <SectionHeading
          title="Reward plan"
          intro="CaryPact publishes four reward streams — two that run off what you hold, two that run off team volume."
        />

        <div className="mb-12 grid gap-4 md:grid-cols-2">
          {streams.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-6">
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] uppercase tracking-wider ${
                    s.kind === "Passive"
                      ? "bg-[var(--color-accent)]/15 text-[var(--color-accent)]"
                      : "bg-white/10 text-[var(--color-muted)]"
                  }`}
                >
                  {s.kind}
                </span>
                <div className="mt-3 font-display text-lg text-[var(--color-parchment)]">{s.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="font-display text-xl text-[var(--color-parchment)]">Rank ladder — V0 to V10</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
            Rank is earned on two axes: your own purchase volume, and the volume of your weaker
            ("sub") leg. The percentage is the rank's share rate on staking rewards. Note how steeply
            the sub-leg requirement climbs — it is the binding constraint at every level from V3 up.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--color-panel-border)]">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-black/40 text-xs uppercase tracking-wide text-[var(--color-muted)]">
                <tr>
                  <th className="px-4 py-3 font-medium">Rank</th>
                  <th className="px-4 py-3 font-medium">Personal volume</th>
                  <th className="px-4 py-3 font-medium">Sub-leg volume</th>
                  <th className="px-4 py-3 text-right font-medium">Share rate</th>
                  <th className="px-4 py-3 text-right font-medium">Indicative daily</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-panel-border)] bg-[var(--color-panel)]">
                {ranks.map((r) => (
                  <tr key={r.rank}>
                    <td className="px-4 py-2.5 font-display text-[var(--color-accent)]">{r.rank}</td>
                    <td className="px-4 py-2.5 text-[var(--color-parchment)]/85">{r.personal}</td>
                    <td className="px-4 py-2.5 text-[var(--color-parchment)]/85">{r.subLeg}</td>
                    <td className="px-4 py-2.5 text-right text-[var(--color-parchment)]/85">{r.pct}</td>
                    <td className="px-4 py-2.5 text-right text-[var(--color-parchment)]/85">{r.daily}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 rounded-2xl border border-[var(--color-panel-border)] bg-black/20 p-5 text-xs leading-relaxed text-[var(--color-muted)]">
            <p>
              Two of these streams depend on recruiting other participants, not on the protocol's
              output alone. The indicative daily figures are quoted in USDT-equivalent units as
              published in CaryPact's material — they are illustrations of the model at a given
              network size, not a rate anyone is entitled to. What an individual actually receives
              is a share of a fixed pool, so it moves with total network volume and with the CA
              price.
            </p>
            <p className="mt-3">
              The Active Reward Pool is 35% of the 40,000 CA daily emission (14,000 CA/day), split
              evenly between team and rank rewards.
            </p>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
