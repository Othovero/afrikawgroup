"use client";

import { useState } from "react";
import {
  GridIcon,
  FunnelIcon,
  TreeIcon,
  ImageIcon,
  InboxIcon,
  LogOutIcon,
  SettingsIcon,
  ShieldIcon,
} from "@/components/Icons";
import type { SessionUser } from "@/lib/auth";

const NAV = [
  { key: "overview", label: "Overview", icon: GridIcon },
  { key: "funnel", label: "My funnel", icon: FunnelIcon },
  { key: "team", label: "Team", icon: TreeIcon },
  { key: "flyers", label: "Flyers", icon: ImageIcon },
  { key: "enquiries", label: "Enquiries", icon: InboxIcon, badge: 2 },
  { key: "profile", label: "Profile", icon: SettingsIcon },
] as const;

export type NavKey = (typeof NAV)[number]["key"];

export function Sidebar({
  user,
  displayName,
  active,
  onNavigate,
  onSignOut,
}: {
  user: SessionUser;
  /** The editable funnel display name — falls back to the account name until set. */
  displayName: string;
  active: NavKey;
  onNavigate: (k: NavKey) => void;
  onSignOut: () => void;
}) {
  const [open, setOpen] = useState(false);

  const nav = (
    <nav className="flex flex-1 flex-col gap-1">
      {NAV.map(({ key, label, icon: Icon, ...rest }) => {
        const badge = "badge" in rest ? rest.badge : undefined;
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => {
              onNavigate(key);
              setOpen(false);
            }}
            className={`group relative flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm transition-colors ${
              isActive
                ? "bg-[var(--color-accent)]/12 text-[var(--color-accent)]"
                : "text-[var(--color-muted)] hover:bg-white/5 hover:text-[var(--color-parchment)]"
            }`}
          >
            {isActive && (
              <span className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-r-full bg-[var(--color-accent)]" />
            )}
            <Icon width={18} height={18} />
            <span className="flex-1 text-left">{label}</span>
            {badge ? (
              <span className="rounded-full bg-[var(--color-accent)] px-1.5 py-0.5 text-[10px] font-semibold text-[var(--color-ink)]">
                {badge}
              </span>
            ) : null}
          </button>
        );
      })}
    </nav>
  );

  const footer = (
    <div className="mt-auto space-y-3 pt-4">
      <button
        onClick={() => {
          onNavigate("profile");
          setOpen(false);
        }}
        className="w-full rounded-xl border border-[var(--color-panel-border)] bg-black/30 p-3 text-left transition-colors hover:border-[var(--color-accent-deep)]"
      >
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent-soft)] to-[var(--color-accent-deep)] text-xs font-semibold text-[var(--color-ink)]">
            {displayName
              .split(" ")
              .filter(Boolean)
              .map((p) => p[0])
              .slice(0, 2)
              .join("")}
          </div>
          <div className="min-w-0">
            <div className="truncate text-xs text-[var(--color-parchment)]">{displayName}</div>
            <div className="text-[10px] uppercase tracking-wide text-[var(--color-accent)]">
              {user.role}
            </div>
          </div>
        </div>
        <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-[var(--color-muted)]">
          <ShieldIcon width={12} height={12} className="text-emerald-400" />
          2FA active
        </div>
      </button>
      <button
        onClick={onSignOut}
        className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm text-[var(--color-muted)] transition-colors hover:bg-white/5 hover:text-[var(--color-parchment)]"
      >
        <LogOutIcon width={18} height={18} />
        Sign out
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile bar */}
      <div className="sticky top-0 z-30 flex items-center justify-between border-b border-[var(--color-panel-border)] bg-[var(--color-ink)]/90 px-4 py-3 backdrop-blur-xl lg:hidden">
        <span className="font-display text-sm">Afrika Wealth Group</span>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
          className="rounded-lg border border-[var(--color-panel-border)] p-2"
        >
          <span className="block h-0.5 w-4 bg-[var(--color-parchment)]" />
          <span className="mt-1 block h-0.5 w-4 bg-[var(--color-parchment)]" />
          <span className="mt-1 block h-0.5 w-4 bg-[var(--color-parchment)]" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col border-r border-[var(--color-panel-border)] bg-[var(--color-ink-soft)] p-5 lg:hidden">
          <button
            onClick={() => setOpen(false)}
            className="mb-4 self-end text-sm text-[var(--color-muted)]"
          >
            Close
          </button>
          {nav}
          {footer}
        </div>
      )}

      {/* Desktop rail */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-[var(--color-panel-border)] bg-[var(--color-ink-soft)]/60 p-5 backdrop-blur-xl lg:flex">
        <div className="mb-7 flex items-center gap-2.5">
          <img src="/assets/awg-logo.png" alt="Afrika Wealth Group" className="h-9 w-9 rounded-xl object-cover" />
          <div>
            <div className="font-display text-sm leading-tight">Afrika Wealth</div>
            <div className="text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
              Portal
            </div>
          </div>
        </div>
        {nav}
        {footer}
      </aside>
    </>
  );
}
