import { Container } from "../ui/Container";
import { SectionShell, SectionHeading } from "../ui/SectionShell";
import { Reveal } from "../ui/Reveal";
import { PackageIcon, WalletIcon } from "../Icons";

const cardTiers = [
  { name: "BOT Basic", price: "Free registration", benefit: "Crypto wallet" },
  { name: "BOT Lite", price: "USD 179", benefit: "1 offshore bank account, 1 physical debit card" },
  {
    name: "BOT Pro",
    price: "USD 279",
    benefit: "1 virtual account, 1 virtual card, 1 offshore bank account, 1 premium metal card",
  },
  {
    name: "BOT Premium",
    price: "USD 599",
    benefit: "5 virtual cards, 1 offshore bank account, 1 premium metal card",
  },
];

export function Products() {
  return (
    <SectionShell id="product" tone="base">
      <Container>
        <SectionHeading
          title="Product"
          intro="What's actually being built and sold — prices only, no outcome implied."
        />

        <Reveal>
          <div className="mb-3 flex items-center gap-2 text-[var(--color-teal)]">
            <PackageIcon width={20} height={20} />
            <span className="font-display text-lg text-[var(--color-parchment)]">
              CaryPact — compute-power tokenization
            </span>
          </div>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed text-[var(--color-muted)]">
            Hashrate purchased at $1 per unit, $100 minimum entry — see{" "}
            <a href="#how-it-works" className="text-[var(--color-teal)] underline underline-offset-2">
              How it works
            </a>{" "}
            for the mechanism.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-3 flex items-center gap-2 text-[var(--color-teal)]">
            <WalletIcon width={20} height={20} />
            <span className="font-display text-lg text-[var(--color-parchment)]">BOT Card</span>
          </div>
          <div className="mb-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {cardTiers.map((tier) => (
              <div
                key={tier.name}
                className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-5"
              >
                <div className="font-display text-base text-[var(--color-parchment)]">{tier.name}</div>
                <div className="mt-1 text-sm text-[var(--color-teal)]">{tier.price}</div>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">{tier.benefit}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-3 flex items-center gap-2 text-[var(--color-teal)]">
            <PackageIcon width={20} height={20} />
            <span className="font-display text-lg text-[var(--color-parchment)]">BOT Mining Server</span>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-5">
              <div className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Server price</div>
              <div className="mt-1 font-display text-xl text-[var(--color-teal)]">$3,980</div>
              <p className="mt-1 text-xs text-[var(--color-muted)]">
                Base price steps down by rank, from 3,600 USDT at V0 to 3,000 USDT at V10.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-5">
              <div className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Maintenance fee</div>
              <div className="mt-1 font-display text-xl text-[var(--color-teal)]">70 USDT / month</div>
              <p className="mt-1 text-xs text-[var(--color-muted)]">
                Ongoing cost, payable regardless of output.
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-5">
              <div className="text-xs uppercase tracking-wide text-[var(--color-muted)]">Farm locations</div>
              <div className="mt-1 text-sm text-[var(--color-parchment)]">Malaysia, Thailand, Mongolia</div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-[var(--color-panel-border)] bg-black/20 p-5">
            <div className="text-sm text-[var(--color-parchment)]">How server output is calculated</div>
            <p className="mt-2 font-mono text-xs text-[var(--color-muted)]">
              Daily BOT = (your server hashrate ÷ total network server hashrate) × 6,000 BOT
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[var(--color-muted)]">
              BOT emits 8,000 per day: 6,000 (75%) to mining servers, 2,000 (25%) to a rank reward
              pool that only pays rank holders who also own a server. As with CA mining, the pool is
              fixed — more servers on the network means a smaller share each.
            </p>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}
