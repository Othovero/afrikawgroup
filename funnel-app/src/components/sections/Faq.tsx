import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "../ui/Container";
import { SectionShell, SectionHeading } from "../ui/SectionShell";
import { Reveal } from "../ui/Reveal";
import { ChevronDownIcon } from "../Icons";
import type { SponsorTokens } from "../../types";

function buildFaq(tokens: SponsorTokens) {
  return [
    {
      q: "What is CaryPact?",
      a: "CaryPact describes itself as the first ecosystem protocol on BOT Chain, designed to tokenize, verify, and trade access to compute power.",
    },
    {
      q: "What is BOT Chain?",
      a: "A Layer-1 blockchain with its own mainnet, wallet, bridge, and exchange, and a native coin, BOT.",
    },
    {
      q: "Is this financial advice?",
      a: "No. CaryPact's own material states it is a community-driven project, that participation involves risk, that its information is for general knowledge only, and that no specific outcome is guaranteed.",
    },
    {
      q: "Is there a cost to use this page or join the Group?",
      a: "No — this page and the Afrika Wealth Group community itself carry no cost. CaryPact's own hashrate purchase has a stated $100 minimum entry, and BOT Chain's card and mining-server products have their own separate stated prices — those are CaryPact/BOT Chain product costs, not a cost of using this page.",
    },
    {
      q: "Is there a team or referral component to this?",
      a: `Yes. CaryPact's compensation structure includes a rewards component tied to referring other participants on top of its mining and staking mechanics. The specifics of that structure are available directly from your sponsor, ${tokens.sponsor_name}, rather than published on this public page.`,
    },
    {
      q: "How do I get started?",
      a: `Message ${tokens.sponsor_name} on WhatsApp with questions, or register directly using the link on this page.`,
    },
  ];
}

export function Faq({ tokens }: { tokens: SponsorTokens }) {
  const items = buildFaq(tokens);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionShell id="faq" tone="panel">
      <Container>
        <SectionHeading title="Frequently asked questions" />
        <div className="mx-auto max-w-2xl divide-y divide-[var(--color-panel-border)] rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)]">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.03}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium text-[var(--color-parchment)]">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-[var(--color-gold)]"
                    >
                      <ChevronDownIcon width={18} height={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--color-muted)]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </SectionShell>
  );
}
