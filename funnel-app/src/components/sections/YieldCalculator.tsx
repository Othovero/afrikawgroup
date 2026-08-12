import { useMemo, useState } from "react";
import { Container } from "../ui/Container";
import { SectionShell, SectionHeading } from "../ui/SectionShell";
import { Reveal } from "../ui/Reveal";
import { pricing, caToUsdt } from "../../data/pricing";

type Mode = "mining" | "staking";
type Duration = "Flexible" | "30" | "90" | "180" | "360";

const durations: Duration[] = ["Flexible", "30", "90", "180", "360"];

function fmt(n: number, max = 2) {
  return n.toLocaleString("en-US", { maximumFractionDigits: max });
}

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-xs text-[var(--color-muted)]">
        <span>{label}</span>
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          className="w-32 rounded-md border border-[var(--color-panel-border)] bg-black/30 px-2 py-1 text-right text-[var(--color-parchment)] outline-none focus:border-[var(--color-accent)]"
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--color-accent)]"
      />
    </div>
  );
}

export function YieldCalculator() {
  const [mode, setMode] = useState<Mode>("mining");
  const [duration, setDuration] = useState<Duration>("Flexible");

  const [hashrate, setHashrate] = useState(1000);
  const [totalHashrate, setTotalHashrate] = useState(1_000_000);
  const [staked, setStaked] = useState(5000);
  const [totalStaked, setTotalStaked] = useState(5_000_000);

  /** What the participant puts in, expressed in USDT.
   *  Mining: hashrate is priced at $1 = 1 unit, so units map 1:1 to USDT.
   *  Staking: staked CA valued at the CA price snapshot. */
  const investmentUsdt = mode === "mining" ? hashrate : staked * pricing.ca.usd;

  const dailyCA = useMemo(() => {
    if (mode === "mining") {
      return totalHashrate > 0 ? (hashrate / totalHashrate) * 16_800 : 0;
    }
    return totalStaked > 0 ? (staked / totalStaked) * 7_200 : 0;
  }, [mode, hashrate, totalHashrate, staked, totalStaked]);

  const share = mode === "mining" ? hashrate / (totalHashrate || 1) : staked / (totalStaked || 1);

  const periods = [
    { label: "Daily", days: 1 },
    { label: "Monthly", days: 30 },
    { label: "Yearly", days: 365 },
  ];

  /** Mining's daily formula is static (a fixed pool share × days, no restaking
   *  mechanic in the source material). Staking auto-compounds daily per the
   *  protocol's published Reward Plan — each day's CA yield is added back to
   *  the staked balance before the next day's pool share is calculated. */
  const periodCA = useMemo(() => {
    return (days: number) => {
      if (mode === "mining") return dailyCA * days;
      if (totalStaked <= 0) return 0;
      let balance = staked;
      let earned = 0;
      for (let d = 0; d < days; d++) {
        const dailyEarn = (balance / totalStaked) * 7_200;
        balance += dailyEarn;
        earned += dailyEarn;
      }
      return earned;
    };
  }, [mode, dailyCA, staked, totalStaked]);

  return (
    <SectionShell id="calculator" tone="deep">
      <Container>
        <SectionHeading
          title="Yield calculator"
          intro="Adjust the inputs to see how the protocol's published formulas respond."
        />

        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-6 md:p-8">
            <div className="mb-6 flex justify-center gap-2">
              {(["mining", "staking"] as Mode[]).map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={`rounded-full px-6 py-2 text-sm font-medium capitalize transition-colors ${
                    mode === m
                      ? "bg-[var(--color-accent)] text-[var(--color-ink)]"
                      : "border border-[var(--color-panel-border)] text-[var(--color-muted)] hover:text-[var(--color-parchment)]"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {mode === "mining" ? (
              <div className="space-y-5">
                <Field
                  label="Your hashrate (units, $1 per unit)"
                  value={hashrate}
                  onChange={setHashrate}
                  min={100}
                  max={100_000}
                  step={100}
                />
                <Field
                  label="Total network hashrate (units)"
                  value={totalHashrate}
                  onChange={setTotalHashrate}
                  min={100_000}
                  max={10_000_000}
                  step={10_000}
                />
              </div>
            ) : (
              <div className="space-y-5">
                <Field
                  label="Your staked CA"
                  value={staked}
                  onChange={setStaked}
                  min={0}
                  max={500_000}
                  step={500}
                />
                <Field
                  label="Total network staked CA"
                  value={totalStaked}
                  onChange={setTotalStaked}
                  min={500_000}
                  max={50_000_000}
                  step={50_000}
                />
                <div>
                  <div className="mb-2 text-xs text-[var(--color-muted)]">Staking term</div>
                  <div className="flex flex-wrap gap-2">
                    {durations.map((d) => (
                      <button
                        key={d}
                        onClick={() => setDuration(d)}
                        className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                          duration === d
                            ? "border-[var(--color-accent)] bg-[var(--color-accent)]/15 text-[var(--color-accent)]"
                            : "border-[var(--color-panel-border)] text-[var(--color-muted)] hover:text-[var(--color-parchment)]"
                        }`}
                      >
                        {d === "Flexible" ? "Flexible" : `${d} days`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* What you're putting in */}
            <div className="mt-7 rounded-2xl border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/[0.07] p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-sm text-[var(--color-muted)]">
                  {mode === "mining" ? "You're putting in" : "Value of what you're staking"}
                </span>
                <span className="font-display text-2xl text-[var(--color-accent)]">
                  {fmt(investmentUsdt)} USDT
                </span>
              </div>
              <p className="mt-2 text-xs text-[var(--color-muted)]">
                {mode === "mining"
                  ? `${fmt(hashrate)} hashrate units at $1 per unit. Minimum entry is $100.`
                  : `${fmt(staked)} CA valued at $${pricing.ca.usd} per CA (${pricing.asOf}). CA's price moves, so this figure moves with it.`}
              </p>
            </div>

            <div className="mt-4 text-center text-xs text-[var(--color-muted)]">
              Your share of the pool:{" "}
              <span className="text-[var(--color-accent)]">{(share * 100).toFixed(4)}%</span>
            </div>

            {/* Output */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {periods.map((p) => {
                const ca = periodCA(p.days);
                return (
                  <div
                    key={p.label}
                    className="rounded-2xl border border-[var(--color-panel-border)] bg-black/30 p-4 text-center"
                  >
                    <div className="text-xs uppercase tracking-wide text-[var(--color-muted)]">
                      {p.label}
                    </div>
                    <div className="mt-2 font-display text-lg text-[var(--color-accent)]">
                      {fmt(ca)} CA
                    </div>
                    <div className="mt-1 text-xs text-[var(--color-muted)]">
                      ≈ {caToUsdt(ca)} USDT
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 space-y-3 text-xs leading-relaxed text-[var(--color-muted)]">
              <p>
                Daily output uses the protocol's published formula as-is, holding today's network
                size and today's CA price fixed for the whole period. In reality both move: as more
                participants join, the fixed daily pool splits further and the same holding
                produces less.
                {mode === "staking"
                  ? " Monthly and yearly auto-compound daily — each day's CA yield is added back to your staked balance before the next day's pool share is calculated, matching the protocol's published \"Daily Automatic Compounding\" feature. Fixed terms (30/90/180/360 days) also carry a yield-rate multiplier on top of this; the exact per-term rates aren't shown here, so all terms above use the flexible base rate."
                  : " Monthly and yearly are the daily figure × 30 and × 365 — mining's daily formula is static and doesn't compound."}
              </p>
              <p>
                CA valued at ${pricing.ca.usd} ({pricing.asOf}) from{" "}
                <a
                  href={pricing.ca.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-accent)] underline underline-offset-2"
                >
                  {pricing.ca.source}
                </a>
                . {pricing.ca.liquidityNote}
              </p>
              <p>
                Selling CA carries a 5% slippage under the protocol's published rules — 1.8% returns
                to liquidity, 3.2% goes to nodes and the DAO. Figures above are before that.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
