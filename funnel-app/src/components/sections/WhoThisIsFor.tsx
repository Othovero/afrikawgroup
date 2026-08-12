import { Container } from "../ui/Container";
import { SectionShell, SectionHeading } from "../ui/SectionShell";
import { ChecklistGrid } from "../ui/ChecklistGrid";
import { SearchIcon, LayersIcon, HandshakeIcon, GraduationCapIcon } from "../Icons";

const items = [
  {
    icon: SearchIcon,
    label: "Comfortable doing their own research",
    desc: "CaryPact's own material states this isn't financial advice and no outcome is guaranteed.",
  },
  {
    icon: LayersIcon,
    label: "Interested in how blockchain infrastructure works",
    desc: "Someone who wants to understand a mainnet, wallet, bridge, and exchange — not just buy a token.",
  },
  {
    icon: HandshakeIcon,
    label: "Prefers a direct point of contact",
    desc: "Someone who'd rather ask a person than navigate an app alone.",
  },
  {
    icon: GraduationCapIcon,
    label: "Open to learning before participating",
    desc: "Cary Academy exists as an education step, not just a purchase step.",
  },
];

export function WhoThisIsFor() {
  return (
    <SectionShell id="who-this-is-for" tone="base">
      <Container>
        <SectionHeading title="Who this is for" />
        <ChecklistGrid items={items} />
      </Container>
    </SectionShell>
  );
}
