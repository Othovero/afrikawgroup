"use client";

/**
 * Mock auth — no database, no network. Everything lives in memory plus a
 * sessionStorage token so a refresh doesn't dump you back to the login page.
 *
 * Swap points for the real build (PRD §6.1, Supabase Auth):
 *   signIn()        -> supabase.auth.signInWithPassword()
 *   verifyMfa()     -> supabase.auth.mfa.challengeAndVerify()
 *   getSession()    -> supabase.auth.getSession()
 *   signOut()       -> supabase.auth.signOut()
 * The shapes below deliberately mirror what those return so the UI doesn't
 * change when the real client is wired in.
 */

export type Role = "owner" | "admin" | "member";
export type MemberStatus = "pending" | "active" | "suspended";

export interface SessionUser {
  id: string;
  email: string;
  displayName: string;
  role: Role;
  status: MemberStatus;
  referralCode: string;
  slug: string;
  mfaEnrolled: boolean;
}

interface MockAccount extends SessionUser {
  password: string;
  /** Any 6 digits are accepted in mock mode; this is the "nice" one to show. */
  totp: string;
}

const ACCOUNTS: MockAccount[] = [
  {
    id: "usr_owner",
    email: "owner@afrikawealth.group",
    password: "portal123",
    totp: "123456",
    displayName: "Bakang Radit",
    role: "owner",
    status: "active",
    referralCode: "AWG-OWNER",
    slug: "bakang-r",
    mfaEnrolled: true,
  },
  {
    id: "usr_member",
    email: "thandiwe@afrikawealth.group",
    password: "portal123",
    totp: "654321",
    displayName: "Thandiwe Mokoena",
    role: "member",
    status: "active",
    referralCode: "AWG-7F2K",
    slug: "thandiwe-m",
    mfaEnrolled: true,
  },
];

const SESSION_KEY = "awg_portal_session";
const PENDING_KEY = "awg_portal_pending_mfa";

function toSessionUser(a: MockAccount): SessionUser {
  const { password: _password, totp: _totp, ...rest } = a;
  void _password;
  void _totp;
  return rest;
}

function delay(ms = 550) {
  return new Promise((res) => setTimeout(res, ms));
}

export type SignInResult =
  | { ok: true; mfaRequired: true }
  | { ok: false; error: string };

/** Step 1 — email + password. Always hands off to the MFA step on success. */
export async function signIn(email: string, password: string): Promise<SignInResult> {
  await delay();
  const account = ACCOUNTS.find(
    (a) => a.email.toLowerCase() === email.trim().toLowerCase()
  );
  if (!account || account.password !== password) {
    return { ok: false, error: "Email or password is incorrect." };
  }
  if (account.status === "suspended") {
    return { ok: false, error: "This account is suspended. Contact an admin." };
  }
  sessionStorage.setItem(PENDING_KEY, account.id);
  return { ok: true, mfaRequired: true };
}

export function getPendingMfaEmail(): string | null {
  if (typeof window === "undefined") return null;
  const id = sessionStorage.getItem(PENDING_KEY);
  return ACCOUNTS.find((a) => a.id === id)?.email ?? null;
}

export type MfaResult = { ok: true; user: SessionUser } | { ok: false; error: string };

/**
 * Step 2 — TOTP. Mock mode accepts any 6-digit code so the flow is
 * demonstrable without an authenticator app enrolled.
 */
export async function verifyMfa(code: string): Promise<MfaResult> {
  await delay(650);
  const id = typeof window !== "undefined" ? sessionStorage.getItem(PENDING_KEY) : null;
  const account = ACCOUNTS.find((a) => a.id === id);
  if (!account) return { ok: false, error: "Session expired. Sign in again." };
  if (!/^\d{6}$/.test(code)) {
    return { ok: false, error: "Enter the 6-digit code from your authenticator app." };
  }
  const user = toSessionUser(account);
  sessionStorage.removeItem(PENDING_KEY);
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return { ok: true, user };
}

export function getSession(): SessionUser | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SessionUser;
  } catch {
    return null;
  }
}

export function signOut() {
  sessionStorage.removeItem(SESSION_KEY);
  sessionStorage.removeItem(PENDING_KEY);
}

/** Shown on the login screen — there is no signup path without a database. */
export const DEMO_CREDENTIALS = ACCOUNTS.map((a) => ({
  email: a.email,
  password: a.password,
  role: a.role,
}));
