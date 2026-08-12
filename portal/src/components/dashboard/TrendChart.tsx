"use client";

import { useState } from "react";
import { viewsTrend } from "@/lib/mockData";

const W = 640;
const H = 200;
const PAD = { top: 16, right: 8, bottom: 26, left: 8 };

function buildPath(values: number[], max: number, close = false) {
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;
  const step = innerW / (values.length - 1);
  const pts = values.map((v, i) => {
    const x = PAD.left + i * step;
    const y = PAD.top + innerH - (v / max) * innerH;
    return [x, y] as const;
  });

  // Smooth with mid-point quadratic curves
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const [px, py] = pts[i - 1];
    const [cx, cy] = pts[i];
    const mx = (px + cx) / 2;
    d += ` Q ${px} ${py} ${mx} ${(py + cy) / 2} T ${cx} ${cy}`;
  }
  if (close) {
    d += ` L ${pts[pts.length - 1][0]} ${PAD.top + innerH} L ${pts[0][0]} ${PAD.top + innerH} Z`;
  }
  return { d, pts };
}

export function TrendChart() {
  const [hover, setHover] = useState<number | null>(null);
  const views = viewsTrend.map((d) => d.views);
  const clicks = viewsTrend.map((d) => d.clicks);
  const max = Math.max(...views) * 1.15;

  const viewsLine = buildPath(views, max);
  const viewsArea = buildPath(views, max, true);
  const clicksLine = buildPath(clicks, max);

  return (
    <div className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-5">
      <div className="mb-1 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-display text-base">Funnel traffic</h3>
          <p className="mt-0.5 text-xs text-[var(--color-muted)]">Last 7 days</p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-[var(--color-muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--color-viz-1)]" /> Views
          </span>
          <span className="flex items-center gap-1.5 text-[var(--color-muted)]">
            <span className="h-2 w-2 rounded-full bg-[var(--color-viz-2)]" /> Clicks
          </span>
        </div>
      </div>

      <div className="relative mt-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="viewsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#35c3ea" stopOpacity="0.34" />
              <stop offset="100%" stopColor="#35c3ea" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[0.25, 0.5, 0.75, 1].map((f) => {
            const y = PAD.top + (H - PAD.top - PAD.bottom) * (1 - f);
            return (
              <line
                key={f}
                x1={PAD.left}
                x2={W - PAD.right}
                y1={y}
                y2={y}
                stroke="#212831"
                strokeWidth="1"
              />
            );
          })}

          <path d={viewsArea.d} fill="url(#viewsFill)" />
          <path d={viewsLine.d} fill="none" stroke="#35c3ea" strokeWidth="2" />
          <path
            d={clicksLine.d}
            fill="none"
            stroke="#818cf8"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {viewsLine.pts.map(([x, y], i) => (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r={hover === i ? 5 : 3}
                fill="#060709"
                stroke="#35c3ea"
                strokeWidth="2"
              />
              <rect
                x={x - 20}
                y={0}
                width={40}
                height={H}
                fill="transparent"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              />
            </g>
          ))}
        </svg>

        <div className="mt-1 flex justify-between px-1 text-[11px] text-[var(--color-muted)]">
          {viewsTrend.map((d, i) => (
            <span key={d.label} className={hover === i ? "text-[var(--color-accent)]" : ""}>
              {d.label}
            </span>
          ))}
        </div>

        {hover !== null && (
          <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 rounded-lg border border-[var(--color-panel-border)] bg-black/90 px-3 py-2 text-xs shadow-xl">
            <div className="font-display">{viewsTrend[hover].label}</div>
            <div className="mt-1 text-[var(--color-viz-1)]">{viewsTrend[hover].views} views</div>
            <div className="text-[var(--color-viz-2)]">{viewsTrend[hover].clicks} clicks</div>
          </div>
        )}
      </div>
    </div>
  );
}
