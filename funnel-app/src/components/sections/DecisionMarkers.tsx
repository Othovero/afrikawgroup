import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { TrendingUpIcon, BuildingIcon, PackageIcon, GiftIcon, GraduationCapIcon } from "../Icons";

const markers = [
  {
    icon: TrendingUpIcon,
    label: "Trends",
    desc: "BOT Chain network activity, live: 19.3M+ blocks, 1.27M+ wallet addresses, 14.5M+ transactions (11 Aug 2026).",
    href: "https://scan.botchain.ai",
    external: true,
  },
  {
    icon: BuildingIcon,
    label: "Company",
    desc: "Founder, and investors NIX Foundation, Gemhead Capital, Alpha Capital.",
    href: "#company",
  },
  {
    icon: PackageIcon,
    label: "Product",
    desc: "CaryPact compute-power tokenization, BOT Card, BOT Mining Server.",
    href: "#product",
  },
  {
    icon: GiftIcon,
    label: "Reward Plan",
    desc: "Mining and staking mechanics, plus a referral-based team component.",
    href: "#how-it-works",
  },
  {
    icon: GraduationCapIcon,
    label: "Education",
    desc: "Cary Academy, CaryPact's training and talent arm.",
    href: "#what-is-carypact",
  },
];

export function DecisionMarkers() {
  return (
    <section className="py-14 md:py-16">
      <Container>
        <Reveal>
          <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Five things worth understanding before you decide
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {markers.map(({ icon: Icon, label, desc, href, external }, i) => (
            <Reveal key={label} delay={i * 0.05}>
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="group flex h-full flex-col rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-5 transition-colors hover:border-[var(--color-teal-deep)]"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)]">
                  <Icon width={18} height={18} />
                </div>
                <div className="font-display text-sm text-[var(--color-parchment)] group-hover:text-[var(--color-teal-soft)]">
                  {label}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-muted)]">{desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
