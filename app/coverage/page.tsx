import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoverageSection from "../components/sections/CoverageSection";
import CTASection from "../components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Coverage | JBS Cargo Movers",
  description:
    "Check our Pan-India network. Shipping from New Delhi to over 100+ destinations nationwide via Air, Surface, and Rail.",
};

export default function CoveragePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar theme="dark" />
      
      {/* Hero Header for Coverage */}
      <section className="relative py-48 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_rgba(232,106,47,0.15)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
           <div className="max-w-3xl">
              <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
                Network Map
              </span>
              <h1 className="font-[var(--font-display)] font-black text-5xl md:text-7xl text-white leading-tight tracking-tighter mb-8">
                Across The <br />
                <span className="text-brand-orange">Subcontinent.</span>
              </h1>
              <p className="text-white/40 text-xl leading-relaxed">
                From our strategic hub in New Delhi, we reach the furthest corners of India. 
                Whether it's the mountains of Leh or the ports of Chennai, your cargo is within our range.
              </p>
           </div>
        </div>
      </section>

      <div className="bg-white">
        <CoverageSection />
      </div>

      <div className="py-20">
         <CTASection />
      </div>

      <Footer />
    </main>
  );
}
