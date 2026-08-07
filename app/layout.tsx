import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saintsservices.co.uk"),
  title: {
    default: "Saints Services Ltd | SIA Manned Guarding & Security Solutions UK",
    template: "%s | Saints Services Ltd",
  },
  description:
    "Nationwide SIA-licensed security operations across the UK. Specialist manned guarding, door supervision, event safety management, keyholding, and 24/7 mobile alarm response.",
  keywords: [
    "SIA Security UK",
    "Manned Guarding London",
    "Door Supervision & Venues",
    "Event Security Services",
    "Keyholding & Alarm Response",
    "Saints Services Ltd",
  ],
  authors: [{ name: "Saints Services Ltd" }],
  creator: "Saints Services Ltd",
  openGraph: {
    title: "Saints Services Ltd | SIA Security Solutions UK",
    description:
      "24/7 SIA-licensed manned guarding, door supervision, event security, keyholding, and rapid alarm response across the UK.",
    url: "https://www.saintsservices.co.uk",
    siteName: "Saints Services Ltd",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/why-us.png",
        width: 1200,
        height: 630,
        alt: "Saints Services Ltd Operational Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saints Services Ltd | SIA Security Solutions UK",
    description:
      "24/7 SIA-licensed manned guarding, door supervision, event security, keyholding, and rapid alarm response across the UK.",
    images: ["/images/why-us.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "tZ91dXD0WghMbZLWkajOQRZbtl-sxFGv2LvvpxW_B9A",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  "name": "Saints Services Ltd",
  "url": "https://www.saintsservices.co.uk",
  "telephone": "+447412733920",
  "email": "info@saintsservices.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "20 Wenlock Road",
    "addressLocality": "London",
    "postalCode": "N1 7GU",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5305,
    "longitude": -0.0917
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "££"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-slate-100 dark:bg-[#040914] text-slate-900 dark:text-white selection:bg-[#f59e0b] selection:text-[#0f172a] transition-colors duration-300"
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
          storageKey="saints-theme"
        >
          {/* Global Header */}
          <Header />

          {/* Page Content Container */}
          <div className="flex-1">
            {children}
          </div>

          {/* Global Footer */}
          <Footer />

          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}