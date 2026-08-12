"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuroraBackdrop } from "@/components/AuroraBackdrop";
import { Sidebar, type NavKey } from "@/components/Sidebar";
import { StatCard } from "@/components/dashboard/StatCard";
import { TrendChart } from "@/components/dashboard/TrendChart";
import { TeamTree } from "@/components/dashboard/TeamTree";
import {
  EnquiriesPanel,
  FlyersPanel,
  FunnelLinkPanel,
} from "@/components/dashboard/Panels";
import { ProfileForm } from "@/components/dashboard/ProfileForm";
import { CursorClickIcon, EyeIcon, InboxIcon, UsersIcon } from "@/components/Icons";
import { getSession, signOut, type SessionUser } from "@/lib/auth";
import { stats } from "@/lib/mockData";
import { isComplete, loadProfile, type FunnelProfile } from "@/lib/profile";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<SessionUser | null>(null);
  const [profile, setProfile] = useState<FunnelProfile | null>(null);
  const [nav, setNav] = useState<NavKey>("overview");

  useEffect(() => {
    const session = getSession();
    if (!session) {
      router.replace("/login");
      return;
    }
    // PRD §4.2 — a member with no funnel set up goes straight to onboarding.
    const saved = loadProfile(session.id);
    if (!isComplete(saved)) {
      router.replace("/onboarding");
      return;
    }
    setUser(session);
    setProfile(saved);
  }, [router]);

  if (!user || !profile) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-panel-border)] border-t-[var(--color-accent)]" />
      </div>
    );
  }

  function handleSignOut() {
    signOut();
    router.replace("/login");
  }

  // Editable funnel name takes over from the account name everywhere in the
  // UI, the moment it's set — this is what makes an onboarding/profile edit
  // "flex" through to the greeting, the sidebar, and the funnel page.
  const displayName = profile.displayName || user.displayName;
  const firstName = displayName.split(" ")[0];

  return (
    <div className="relative min-h-screen lg:flex">
      <AuroraBackdrop className="fixed" />

      <Sidebar
        user={user}
        displayName={displayName}
        active={nav}
        onNavigate={setNav}
        onSignOut={handleSignOut}
      />

      <main className="relative min-w-0 flex-1 px-5 py-7 lg:px-8 lg:py-9">
        <header className="mb-7">
          <p className="text-xs text-[var(--color-muted)]">
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              day: "numeric",
              month: "long",
            })}
          </p>
          <h1 className="mt-1 font-display text-2xl">Welcome back, {firstName}</h1>
        </header>

        {nav === "overview" && (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <StatCard
                icon={EyeIcon}
                label="Funnel views"
                value={stats.viewsTotal.toLocaleString()}
                sub={`${stats.viewsUnique} unique`}
                delta={stats.viewsDelta}
              />
              <StatCard
                icon={CursorClickIcon}
                label="Register clicks"
                value={stats.clicks.toLocaleString()}
                sub={`${stats.ctr}% click-through`}
                delta={stats.clicksDelta}
                accent="#818cf8"
              />
              <StatCard
                icon={UsersIcon}
                label="Team size"
                value={String(stats.teamSize)}
                sub={`${stats.directDownline} direct`}
                accent="#34d399"
              />
              <StatCard
                icon={InboxIcon}
                label="Unread enquiries"
                value={String(stats.enquiriesUnread)}
                sub={`${stats.pendingConfirmations} pending confirmations`}
                accent="#fbbf24"
              />
            </div>

            <div className="grid gap-5 xl:grid-cols-[1.6fr_1fr]">
              <TrendChart />
              <FunnelLinkPanel user={user} profile={profile} onEdit={() => setNav("profile")} />
            </div>

            <div className="grid gap-5 xl:grid-cols-2">
              <TeamTree />
              <EnquiriesPanel />
            </div>

            <FlyersPanel user={user} profile={profile} />
          </div>
        )}

        {nav === "funnel" && (
          <div className="grid gap-5 xl:grid-cols-[1fr_1.4fr]">
            <FunnelLinkPanel user={user} profile={profile} onEdit={() => setNav("profile")} />
            <TrendChart />
          </div>
        )}

        {nav === "team" && (
          <div className="grid gap-5 xl:grid-cols-2">
            <TeamTree />
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
              <StatCard
                icon={UsersIcon}
                label="Direct downline"
                value={String(stats.directDownline)}
                accent="#34d399"
              />
              <StatCard
                icon={UsersIcon}
                label="Pending confirmations"
                value={String(stats.pendingConfirmations)}
                accent="#fbbf24"
              />
            </div>
          </div>
        )}

        {nav === "flyers" && <FlyersPanel user={user} profile={profile} />}

        {nav === "enquiries" && (
          <div className="max-w-2xl">
            <EnquiriesPanel />
          </div>
        )}

        {nav === "profile" && (
          <ProfileForm user={user} profile={profile} onSaved={setProfile} />
        )}

        <footer className="mt-10 border-t border-[var(--color-panel-border)] pt-5 text-[11px] leading-relaxed text-[var(--color-muted)]">
          Demo build — no database connected. All figures are sample data. Referral counts shown
          anywhere in this portal are the portal&apos;s own record and are not verified against
          CaryPact.
        </footer>
      </main>
    </div>
  );
}
