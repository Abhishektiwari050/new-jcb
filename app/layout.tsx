import type { Metadata } from "next";
import "./globals.css";
import { MessageCircle } from "lucide-react";
import { SmoothScroll } from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://jbscargomovers.com"),
  title: {
    default: "JBS Cargo Movers | Elite Logistics & Pan-India Cargo Services",
    template: "%s | JBS Cargo Movers",
  },
  description:
    "Professional Air, Surface, and Train Cargo services across India. JBS Cargo Movers provides fast, reliable, and door-to-door delivery with 24/7 support. Serving 100+ destinations from New Delhi.",
  keywords: [
    "JBS Cargo Movers",
    "best cargo services in India",
    "air cargo Delhi",
    "surface transport India",
    "train freight services",
    "door to door cargo delivery",
    "logistics companies in Delhi",
    "cheap cargo movers",
    "reliable freight forwarders",
    "Indian logistics network",
    "Move Zen Express Logistics",
    "cargo movers New Delhi",
    "interstate cargo shipping",
    "cargo services near me",
    "packers and movers Delhi",
    "logistics companies in Dwarka",
    "cargo delivery near IGI Airport",
    "best logistics in Delhi NCR",
    "Gurugram cargo movers",
    "Noida logistics services",
  ],
  authors: [{ name: "JBS Cargo Movers" }],
  creator: "JBS Cargo Movers",
  publisher: "JBS Cargo Movers",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JBS Cargo Movers | Elite Pan-India Logistics",
    description: "Fast, secure, and door-to-door logistics services across 100+ destinations in India. Trust JBS for your cargo needs.",
    url: "https://jbscargomovers.com",
    siteName: "JBS Cargo Movers",
    images: [
      {
        url: "/images/og-image.png", // We should create this or use logo
        width: 1200,
        height: 630,
        alt: "JBS Cargo Movers - Shipping Across India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JBS Cargo Movers | Pan India Logistics",
    description: "Real-time updates and fast delivery for your cargo across India. Air, Surface, and Train solutions.",
    images: ["/images/og-image.png"],
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

import { ThemeProvider } from "./components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Plus+Jakarta+Sans:wght@500;600;700&family=Share+Tech+Mono&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LogisticsBusiness",
              "name": "JBS Cargo Movers",
              "image": "https://jbscargomovers.com/images/logo.png",
              "@id": "https://jbscargomovers.com",
              "url": "https://jbscargomovers.com",
              "telephone": "+91-9582566995",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "New Delhi",
                "addressLocality": "New Delhi",
                "postalCode": "110001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.6139,
                "longitude": 77.2090
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/jbscargomovers",
                "https://www.instagram.com/jbscargomovers"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "description": "JBS Cargo Movers offers elite Air, Surface, and Train Cargo services across India with 100+ destinations nationwide."
            })
          }}
        />
      </head>
      <body 
        className="antialiased bg-brand-black selection:bg-brand-orange selection:text-white"
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <LoadingScreen />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
