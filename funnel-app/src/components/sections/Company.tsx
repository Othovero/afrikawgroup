import { Container } from "../ui/Container";
import { SectionShell, SectionHeading } from "../ui/SectionShell";
import { Reveal } from "../ui/Reveal";
import { BuildingIcon } from "../Icons";

const investors = ["NIX Foundation", "Gemhead Capital", "Alpha Capital"];

export function Company() {
  return (
    <SectionShell id="company" tone="panel">
      <Container>
        <SectionHeading
          title="Company"
          intro="Who's behind BOT Chain and CaryPact, per BOT Chain's own materials and official site."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)]">
                <BuildingIcon />
              </div>
              <div className="font-display text-lg text-[var(--color-parchment)]">Founder</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                Mr. Johnson Zhao is credited as founder of CoinStore Exchange, founder of BOT
                Chain, and founder of the CaryPact Protocol.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)]">
                <BuildingIcon />
              </div>
              <div className="font-display text-lg text-[var(--color-parchment)]">Investors</div>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-[var(--color-muted)]">
                {investors.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
              <a
                href="https://botchain.ai"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-xs text-[var(--color-teal)] underline underline-offset-2"
              >
                Verified on botchain.ai
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </SectionShell>
  );
}
