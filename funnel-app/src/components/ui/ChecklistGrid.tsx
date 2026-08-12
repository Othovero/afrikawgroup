import type { ComponentType, SVGProps } from "react";
import { Reveal } from "./Reveal";

export interface ChecklistItem {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  desc: string;
}

export function ChecklistGrid({ items }: { items: ChecklistItem[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map(({ icon: Icon, label, desc }, i) => (
        <Reveal key={label} delay={i * 0.06}>
          <div className="flex gap-4 rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
              <Icon />
            </div>
            <div>
              <div className="font-display text-lg text-[var(--color-parchment)]">{label}</div>
              <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">{desc}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
