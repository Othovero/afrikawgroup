export function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] px-5 py-4 text-center">
      <div className="font-display text-2xl md:text-3xl text-[var(--color-gold)]">{value}</div>
      <div className="mt-1 text-xs md:text-sm text-[var(--color-muted)]">{label}</div>
    </div>
  );
}
