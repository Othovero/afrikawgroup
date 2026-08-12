import { Container } from "../ui/Container";
import { SectionShell, SectionHeading } from "../ui/SectionShell";
import { Reveal } from "../ui/Reveal";

const steps = [
  {
    title: "Acquire hashrate",
    desc: "Minimum entry $100, priced at $1 per hashrate unit.",
  },
  {
    title: "Hashrate generates CA daily",
    desc: "Via a network-wide mining formula.",
  },
  {
    title: "Choose what to do with it",
    desc: "Withdraw, stake, or move it across BOT Chain, BNB Chain, and ETH Chain.",
  },
];

export function HowItWorks() {
  return (
    <SectionShell id="how-it-works" tone="deep">
      <Container>
        <SectionHeading
          title="How it works"
          intro="Three steps describe participation. No step below implies an outcome."
        />

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-[var(--color-gold-deep)] to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="relative text-center md:text-left">
                <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-gold-deep)] bg-[var(--color-ink)] font-display text-lg text-[var(--color-gold)] md:mx-0">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-lg text-[var(--color-parchment)]">{s.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--color-muted)]">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-16 max-w-2xl text-center text-sm leading-relaxed text-[var(--color-muted)]">
            Both the mining and staking formulas divide a fixed daily pool by total network
            participation, so an individual's share shrinks as more participants join. Try it
            yourself in the calculator below.
          </p>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
