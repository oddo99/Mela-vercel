import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mela Services",
  description: "Consulenze Marketplace, E-commerce, Leads e Advertising",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body
        className={`${exo2.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
