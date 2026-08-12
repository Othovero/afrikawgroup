"use client";

/**
 * Client-side daily cap — PRD §8 cost note ("worth capping generations per
 * member per day"). No database yet, so this is a per-browser localStorage
 * counter keyed by member + date. Swap point: a `flyers` row count query
 * scoped to `member_id` and `created_at::date = today`.
 */

export const DAILY_CAP = 5;

function todayKey(memberId: string) {
  const d = new Date().toISOString().slice(0, 10);
  return `awg_flyer_count_${memberId}_${d}`;
}

export function getUsedToday(memberId: string): number {
  if (typeof window === "undefined") return 0;
  return Number(localStorage.getItem(todayKey(memberId)) ?? "0");
}

export function remainingToday(memberId: string): number {
  return Math.max(0, DAILY_CAP - getUsedToday(memberId));
}

export function recordGeneration(memberId: string): number {
  const next = getUsedToday(memberId) + 1;
  localStorage.setItem(todayKey(memberId), String(next));
  return next;
}
