import type { Metadata } from "next";
import { jsonLdScript } from "@/lib/jsonLd";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getPublishedTestimonials } from "@/lib/testimonials";
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
    default: "Saints Services Ltd | SIA-Licensed Security Guards & Facilities Management UK",
    template: "%s | Saints Services Ltd",
  },
  description:
    "Nationwide SIA-licensed security guards, event safety stewards, retail loss prevention, and commercial facilities operations across the UK.",
  keywords: [
    "SIA Security Guards UK",
    "Manned Guarding",
    "Event Safety Stewards",
    "Retail Loss Prevention",
    "Commercial Facilities Cleaning",
  ],
  authors: [{ name: "Saints Services Ltd" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Saints Services Ltd | Security & Facilities Management",
    description:
      "24/7 SIA-licensed security guard deployments and commercial facilities management in the UK.",
    url: "https://www.saintsservices.co.uk",
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

const baseJsonLd = {
  "@context": "https://schema.org",
  // "SecurityService" isn't an official schema.org type, so it alone wouldn't
  // qualify this entity for Google's review-snippet eligibility; kept for
  // descriptiveness alongside the real "LocalBusiness" type.
  "@type": ["LocalBusiness", "SecurityService"],
  "name": "Saints Services Ltd",
  "url": "https://www.saintsservices.co.uk",
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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const testimonials = await getPublishedTestimonials();

  const jsonLd =
    testimonials.length === 0
      ? baseJsonLd
      : {
          ...baseJsonLd,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: (
              testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
            ).toFixed(1),
            reviewCount: testimonials.length,
            bestRating: 5,
            worstRating: 1,
          },
          review: testimonials.map((t) => ({
            "@type": "Review",
            author: {
              "@type": "Person",
              name: t.author_name,
              ...(t.organization && {
                worksFor: { "@type": "Organization", name: t.organization },
              }),
            },
            datePublished: t.created_at,
            reviewBody: t.quote,
            reviewRating: {
              "@type": "Rating",
              ratingValue: t.rating,
              bestRating: 5,
              worstRating: 1,
            },
          })),
        };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
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
          <ScrollToTopButton />
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}