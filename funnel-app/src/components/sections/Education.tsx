import { Container } from "../ui/Container";
import { SectionShell, SectionHeading } from "../ui/SectionShell";
import { Reveal } from "../ui/Reveal";
import { GraduationCapIcon, UsersIcon } from "../Icons";

/** Self-reported network figures from CaryPact's own presentation material.
 *  Labelled as such on the page — no independent source was found. */
const networkStats = [
  ["55+", "Countries"],
  ["15", "Languages"],
  ["350,000+", "Users"],
  ["1,300+", "Studios"],
  ["200+", "Operation centres"],
  ["1,500+", "Offices"],
];

export function Education() {
  return (
    <SectionShell id="education" tone="base">
      <Container>
        <SectionHeading
          title="Education & community"
          intro="CaryPact runs a training arm and an in-person event programme alongside the protocol."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                <GraduationCapIcon />
              </div>
              <div className="font-display text-lg text-[var(--color-parchment)]">Cary Academy</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                CaryPact's educational foundation, described in its material as the ecosystem's
                &ldquo;talent engine&rdquo; — ongoing training for participants rather than a one-off
                onboarding step.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                <UsersIcon />
              </div>
              <div className="font-display text-lg text-[var(--color-parchment)]">Events</div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                In-person training and summits across Africa and Asia, including a Bangkok event
                dated 12 May 2026 and the BOT Chain Global Consensus Summit in Hong Kong. Ask your
                sponsor what's scheduled next in your region.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-10 grid grid-cols-3 gap-3 md:grid-cols-6">
            {networkStats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] px-3 py-4 text-center"
              >
                <div className="font-display text-lg text-[var(--color-accent)]">{value}</div>
                <div className="mt-1 text-[11px] leading-tight text-[var(--color-muted)]">{label}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-[var(--color-muted)]">
            Network figures self-reported by CaryPact in its own presentation material. No
            independent verification of these numbers was available.
          </p>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
