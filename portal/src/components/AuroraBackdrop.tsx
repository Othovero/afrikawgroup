/**
 * Ambient background — layered radial glows plus a faint grid. Pure CSS/SVG,
 * matching the funnel site's cyber palette (#35c3ea family).
 */
export function AuroraBackdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 45% at 12% 8%, rgba(53,195,234,0.22) 0%, transparent 62%)," +
            "radial-gradient(48% 42% at 88% 12%, rgba(129,140,248,0.18) 0%, transparent 62%)," +
            "radial-gradient(60% 45% at 50% 102%, rgba(53,195,234,0.12) 0%, transparent 65%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="portalGrid" width="34" height="34" patternUnits="userSpaceOnUse">
            <path
              d="M34 0H0V34"
              fill="none"
              stroke="#35c3ea"
              strokeOpacity="0.05"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#portalGrid)" />
      </svg>
    </div>
  );
}
