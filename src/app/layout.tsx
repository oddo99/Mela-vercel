import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { GTMPageView } from "@/components/analytics/GTMPageView";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/seo/JsonLd";
import { Suspense } from "react";

const exo2 = Exo_2({
  variable: "--font-exo-2",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mela.services'),
  title: {
    default: 'Mela Services | Consulenza Marketplace, E-commerce e Advertising',
    template: '%s | Mela Services',
  },
  description: 'Agenzia specializzata in Marketplace, E-commerce, Lead Generation e Advertising. Esperti Amazon, Shopify e strategie digitali per far crescere il tuo business online.',
  keywords: ['marketplace', 'amazon', 'e-commerce', 'shopify', 'advertising', 'lead generation', 'digital marketing', 'consulenza'],
  authors: [{ name: 'Mela Services' }],
  creator: 'Mela Services',
  publisher: 'Mela Services',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://mela.services',
    siteName: 'Mela Services',
    title: 'Mela Services | Consulenza Marketplace, E-commerce e Advertising',
    description: 'Agenzia specializzata in Marketplace, E-commerce, Lead Generation e Advertising. Esperti Amazon, Shopify e strategie digitali.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mela Services - Consulenza Digital Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mela Services | Consulenza Marketplace, E-commerce e Advertising',
    description: 'Agenzia specializzata in Marketplace, E-commerce, Lead Generation e Advertising.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TVLCC8WK');`
          }}
        />
        {/* JSON-LD Structured Data */}
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body
        className={`${exo2.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVLCC8WK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#FFD700] focus:text-[#0B223A] focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          Vai al contenuto principale
        </a>

        {/* GTM PageView Tracker */}
        <Suspense fallback={null}>
          <GTMPageView />
        </Suspense>

        <div id="main-content">
          {children}
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
