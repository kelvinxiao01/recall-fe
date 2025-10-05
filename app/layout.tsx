import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recall - AI-Powered Callback System",
  description: "Never miss a call again. Automated callback system for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
