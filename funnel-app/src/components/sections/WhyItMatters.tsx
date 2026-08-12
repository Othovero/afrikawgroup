import { Container } from "../ui/Container";
import { SectionShell, SectionHeading } from "../ui/SectionShell";
import { ChecklistGrid } from "../ui/ChecklistGrid";
import { ChainLinkIcon, CompassIcon, GraduationCapIcon, UsersIcon } from "../Icons";

const items = [
  {
    icon: ChainLinkIcon,
    label: "Built on real infrastructure",
    desc: "A mainnet, explorer, bridge, wallet, and exchange sit under the protocol — not just a token.",
  },
  {
    icon: CompassIcon,
    label: "A defined participation path",
    desc: "Buy hashrate, generate CA, then choose to hold, stake, or move it across chains.",
  },
  {
    icon: GraduationCapIcon,
    label: "An education arm",
    desc: "Cary Academy is positioned as CaryPact's ongoing training and talent program.",
  },
  {
    icon: UsersIcon,
    label: "Independently introduced",
    desc: "This page is run by an Afrika Wealth Group member who can walk you through it directly.",
  },
];

export function WhyItMatters() {
  return (
    <SectionShell id="why-it-matters" tone="panel">
      <Container>
        <SectionHeading title="Why it matters" />
        <ChecklistGrid items={items} />
      </Container>
    </SectionShell>
  );
}
