import type { Metadata } from "next";
import "./globals.css";
import { MessageCircle } from "lucide-react";
import { SmoothScroll } from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";

export const metadata: Metadata = {
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
    url: "https://jbscargomovers.com", // Adjust to your actual domain
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
        </ThemeProvider>
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919582566995"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </body>
    </html>
  );
}
