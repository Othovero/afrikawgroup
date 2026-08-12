export function QualifierBar({ sponsorName }: { sponsorName: string }) {
  return (
    <div className="bg-[var(--color-ink-soft)] border-b border-[var(--color-panel-border)] text-[var(--color-muted)] text-xs md:text-sm">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 py-2.5 text-center">
        This page is run by an independent Afrika Wealth Group member — not an official CaryPact
        or BOT Chain page.
        <span className="hidden md:inline"> Hosted by {sponsorName}.</span>
      </div>
    </div>
  );
}
