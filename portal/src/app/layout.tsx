import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afrika Wealth Group — Member Portal",
  description: "Member portal for Afrika Wealth Group funnels, team and flyers.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
