import type { Metadata } from "next";
import "./globals.css";
import { MessageCircle } from "lucide-react";
import { SmoothScroll } from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://new-jcb.vercel.app"),
  title: "JBS Cargo Movers | Air, Surface & Train Cargo — Pan India Logistics",
  description:
    "JBS Cargo Movers offers Air Cargo, Surface Cargo, Train Cargo, Consolidation and Manpower services across 100+ destinations in India. Fast, reliable, door-to-door. Get a quote today.",
  keywords: [
    "cargo movers",
    "air freight India",
    "JBS Cargo",
    "surface cargo",
    "train freight India",
    "logistics company New Delhi",
  ],
  openGraph: {
    title: "JBS Cargo Movers | Pan India Logistics",
    description: "Fast, reliable, door-to-door logistics services across 100+ destinations in India.",
    url: "https://new-jcb.vercel.app",
    siteName: "JBS Cargo Movers",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "JBS Cargo Movers Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JBS Cargo Movers | Pan India Logistics",
    description: "Fast, reliable, door-to-door logistics services across 100+ destinations in India.",
    images: ["/images/logo.png"],
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
