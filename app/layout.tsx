import type { Metadata } from "next";
import "./globals.css";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "JBS Cargo Movers — Specialist Cargo & Logistics",
  description:
    "India's specialist cargo movers. Air & Surface, Pharma, Cold Chain, Food & FMCG, Textiles, Airport Cargo, Automotive logistics. 28+ states, 70+ vehicles, 24/7 operations.",
  keywords: [
    "cargo movers",
    "air freight India",
    "cold chain logistics",
    "pharma freight",
    "JBS Cargo",
    "surface cargo",
    "FMCG logistics",
  ],
  openGraph: {
    title: "JBS Cargo Movers — Specialist Cargo & Logistics",
    description:
      "India's specialist cargo movers covering Air & Surface, Pharma, Cold Chain, and more across 28+ states.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body 
        className="antialiased relative bg-fixed bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url('/images/hero_bg.png')" }}
      >
        {children}
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/911234567890"
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
