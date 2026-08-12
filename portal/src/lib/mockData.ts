/**
 * Static demo data standing in for the tables in PRD §6.3. No database yet —
 * these shapes match the eventual Postgres rows so the swap is mechanical.
 */

export interface TrendPoint {
  label: string;
  views: number;
  clicks: number;
}

export const viewsTrend: TrendPoint[] = [
  { label: "Mon", views: 42, clicks: 9 },
  { label: "Tue", views: 61, clicks: 14 },
  { label: "Wed", views: 55, clicks: 11 },
  { label: "Thu", views: 88, clicks: 23 },
  { label: "Fri", views: 74, clicks: 18 },
  { label: "Sat", views: 119, clicks: 31 },
  { label: "Sun", views: 96, clicks: 25 },
];

export interface DownlineNode {
  id: string;
  name: string;
  status: "active" | "pending";
  joinedAt: string;
  children?: DownlineNode[];
}

export const downline: DownlineNode[] = [
  {
    id: "m1",
    name: "Kagiso Motsepe",
    status: "active",
    joinedAt: "2026-07-28",
    children: [
      { id: "m1a", name: "Lerato Dube", status: "active", joinedAt: "2026-08-02" },
      { id: "m1b", name: "Sipho Nkosi", status: "pending", joinedAt: "2026-08-09" },
    ],
  },
  {
    id: "m2",
    name: "Naledi Khumalo",
    status: "active",
    joinedAt: "2026-08-01",
    children: [{ id: "m2a", name: "Tebogo Sithole", status: "active", joinedAt: "2026-08-06" }],
  },
  { id: "m3", name: "Amogelang Pule", status: "pending", joinedAt: "2026-08-10" },
];

export interface Enquiry {
  id: string;
  name: string;
  contact: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export const enquiries: Enquiry[] = [
  {
    id: "e1",
    name: "Gaone Tau",
    contact: "+267 71 234 567",
    message: "Saw your page — can you explain how the hashrate purchase actually works?",
    isRead: false,
    createdAt: "2026-08-11T09:12:00Z",
  },
  {
    id: "e2",
    name: "Mpho Selepe",
    contact: "mpho.s@example.com",
    message: "Is there a session in Gaborone this month? I'd like to attend before deciding.",
    isRead: false,
    createdAt: "2026-08-10T16:40:00Z",
  },
  {
    id: "e3",
    name: "Refilwe Moeng",
    contact: "+267 72 998 100",
    message: "What's the minimum to start and what are the ongoing costs?",
    isRead: true,
    createdAt: "2026-08-09T11:05:00Z",
  },
];

export interface Flyer {
  id: string;
  template: string;
  createdAt: string;
  accent: string;
}

export const flyers: Flyer[] = [
  { id: "f1", template: "Invitation", createdAt: "2026-08-10", accent: "#35c3ea" },
  { id: "f2", template: "Just registered", createdAt: "2026-08-08", accent: "#818cf8" },
  { id: "f3", template: "Webinar", createdAt: "2026-08-05", accent: "#34d399" },
  { id: "f4", template: "Milestone", createdAt: "2026-08-02", accent: "#fbbf24" },
];

export const stats = {
  viewsTotal: 535,
  viewsUnique: 388,
  viewsDelta: 12.4,
  clicks: 131,
  clicksDelta: 8.1,
  ctr: 24.5,
  enquiriesUnread: 2,
  directDownline: 3,
  teamSize: 6,
  pendingConfirmations: 2,
};
