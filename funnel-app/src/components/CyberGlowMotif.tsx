/**
 * Original abstract cyber-glow background — soft blurred light trails and a
 * faint circuit grid, built from CSS gradients only (no imagery lifted from
 * any reference/moodboard). Intentionally off BOT Chain's exact teal hue —
 * see index.css --color-accent — so the register (dark + glow) reads as
 * "inspired by," not "copied from."
 */
export function CyberGlowMotif({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 10%, rgba(53,195,234,0.28) 0%, transparent 60%)," +
            "radial-gradient(50% 45% at 85% 15%, rgba(99,102,241,0.20) 0%, transparent 60%)," +
            "radial-gradient(55% 40% at 50% 100%, rgba(53,195,234,0.14) 0%, transparent 65%)",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="glowA" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#35c3ea" stopOpacity="0" />
            <stop offset="50%" stopColor="#35c3ea" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#35c3ea" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="glowB" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
          <pattern id="cyberGrid" width="26" height="26" patternUnits="userSpaceOnUse">
            <path d="M26 0H0V26" fill="none" stroke="#35c3ea" strokeOpacity="0.06" strokeWidth="0.5" />
          </pattern>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="1.4" />
          </filter>
        </defs>
        <rect width="800" height="500" fill="url(#cyberGrid)" />
        <g filter="url(#softBlur)">
          <path d="M-50 120 C150 40, 250 220, 450 120 S 750 40, 850 120" stroke="url(#glowA)" strokeWidth="1.5" fill="none" />
          <path d="M-50 340 C200 420, 300 220, 500 320 S 800 420, 900 320" stroke="url(#glowB)" strokeWidth="1.5" fill="none" />
          <path d="M-50 250 C250 150, 400 350, 850 220" stroke="url(#glowA)" strokeWidth="1" fill="none" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}
