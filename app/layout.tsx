import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saintsservices.co.uk"),
  title: {
    default: "Saints Services Ltd | SIA Security & Facilities Management UK",
    template: "%s | Saints Services Ltd",
  },
  description:
    "Nationwide SIA-licensed manned guarding, event safety stewards, retail loss prevention, and commercial facilities cleaning operations across the UK.",
  keywords: [
    "SIA Security UK",
    "Manned Guarding",
    "Event Safety Stewards",
    "Retail Loss Prevention",
    "Commercial Facilities Cleaning",
  ],
  authors: [{ name: "Saints Services Ltd" }],
  openGraph: {
    title: "Saints Services Ltd | Security & Facilities Management",
    description:
      "24/7 SIA-licensed manned guarding and commercial facilities management in the UK.",
    url: "https://saintsservices.co.uk",
    siteName: "Saints Services Ltd",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "tZ91dXD0WghMbZLWkajOQRZbtl-sxFGv2LvvpxW_B9A",
  },
};

// Structured Data (Schema.org / JSON-LD for Search Engines)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  "name": "Saints Services Ltd",
  "url": "https://saintsservices.co.uk",
  "telephone": "07412733920",
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
        className="min-h-full flex flex-col bg-[#040914] text-white selection:bg-[#f59e0b] selection:text-[#0f172a]"
      >
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
          storageKey="saints-theme"
        >
          {children}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}