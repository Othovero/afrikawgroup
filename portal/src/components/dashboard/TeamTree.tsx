"use client";

import { useState } from "react";
import { downline, type DownlineNode } from "@/lib/mockData";

function Node({ node, depth = 0 }: { node: DownlineNode; depth?: number }) {
  const [open, setOpen] = useState(true);
  const hasChildren = !!node.children?.length;

  return (
    <div className={depth > 0 ? "ml-4 border-l border-[var(--color-panel-border)] pl-4" : ""}>
      <div className="flex items-center gap-3 py-2">
        {hasChildren ? (
          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[var(--color-panel-border)] text-[10px] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            aria-label={open ? "Collapse" : "Expand"}
          >
            {open ? "−" : "+"}
          </button>
        ) : (
          <span className="h-5 w-5 shrink-0" />
        )}

        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent-soft)] to-[var(--color-accent-deep)] text-[10px] font-semibold text-[var(--color-ink)]">
          {node.name
            .split(" ")
            .map((p) => p[0])
            .slice(0, 2)
            .join("")}
        </div>

        <div className="min-w-0 flex-1">
          <div className="truncate text-sm text-[var(--color-parchment)]">{node.name}</div>
          <div className="text-[11px] text-[var(--color-muted)]">Joined {node.joinedAt}</div>
        </div>

        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide ${
            node.status === "active"
              ? "bg-emerald-500/12 text-emerald-400"
              : "bg-amber-500/12 text-amber-400"
          }`}
        >
          {node.status}
        </span>
      </div>

      {hasChildren && open && (
        <div>
          {node.children!.map((c) => (
            <Node key={c.id} node={c} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export function TeamTree() {
  return (
    <div className="rounded-2xl border border-[var(--color-panel-border)] bg-[var(--color-panel)] p-5">
      <div className="mb-1 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-base">Team</h3>
          <p className="mt-0.5 text-xs text-[var(--color-muted)]">Direct and level 2</p>
        </div>
      </div>

      <div className="mt-3">
        {downline.map((n) => (
          <Node key={n.id} node={n} />
        ))}
      </div>

      {/* PRD §F4 / §7 — non-negotiable labelling */}
      <p className="mt-4 rounded-xl border border-amber-500/25 bg-amber-500/[0.07] px-3 py-2.5 text-[11px] leading-relaxed text-amber-200/80">
        Portal record — not verified against CaryPact. This reflects who registered through your
        link on this portal, not CaryPact&apos;s own ledger.
      </p>
    </div>
  );
}
