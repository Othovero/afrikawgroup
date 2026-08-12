import type { ComponentType, SVGProps } from "react";
import { ArrowUpIcon } from "@/components/Icons";

export function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  delta,
  accent = "var(--color-accent)",
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  sub?: string;
  delta?: number;
  accent?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-5 transition-colors hover:border-[var(--color-accent-deep)]">
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-[0.12] blur-2xl transition-opacity group-hover:opacity-25"
        style={{ background: accent }}
      />
      <div className="relative flex items-start justify-between">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-xl"
          style={{ background: `color-mix(in srgb, ${accent} 14%, transparent)`, color: accent }}
        >
          <Icon width={17} height={17} />
        </div>
        {typeof delta === "number" && (
          <span className="flex items-center gap-0.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
            <ArrowUpIcon width={11} height={11} />
            {delta}%
          </span>
        )}
      </div>
      <div className="relative mt-4">
        <div className="font-display text-2xl leading-none">{value}</div>
        <div className="mt-1.5 text-xs text-[var(--color-muted)]">{label}</div>
        {sub && <div className="mt-0.5 text-[11px] text-[var(--color-muted)]/70">{sub}</div>}
      </div>
    </div>
  );
}
