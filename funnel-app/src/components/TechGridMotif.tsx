/**
 * Original glowing circuit/line-grid motif in BOT Chain's teal register —
 * built from scratch with CSS/SVG, not copied from the brand guideline or
 * official site. Used only on sections presenting BOT Chain/CaryPact's own
 * material, so it reads as "here's their content" rather than blurring into
 * AWG's own gold identity (Requirements §1 — page stays visibly independent).
 */
export function TechGridMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tealLine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0" />
          <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
        </linearGradient>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#2dd4bf" strokeOpacity="0.08" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="200" fill="url(#grid)" />
      <path d="M0 60 C100 20, 150 100, 250 60 S 400 20, 400 60" stroke="url(#tealLine)" strokeWidth="1" fill="none" />
      <path d="M0 140 C120 180, 180 100, 280 140 S 400 180, 400 140" stroke="url(#tealLine)" strokeWidth="1" fill="none" />
      <path d="M0 100 C150 60, 250 140, 400 100" stroke="url(#tealLine)" strokeWidth="0.6" fill="none" />
    </svg>
  );
}
