"use client";

import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import dynamic from "next/dynamic";

// Import CargoBelt3D dynamically for performance
const CargoBelt3D = dynamic(() => import("../CargoBelt3D"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-[#F2EFEA]" />
});

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Get scroll velocity
  const scrollVelocity = useVelocity(scrollY);

  // Smooth the velocity so it doesn't jump
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  // Map velocity to a speed factor (0 to 1 range for boost)
  // Higher velocity = more boost. We use absolute value because scrolling up or down should both boost.
  const velocityFactor = useTransform(smoothVelocity, [-3000, 0, 3000], [1, 0, 1]);

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen overflow-hidden bg-[#F2EFEA]">
      {/* 3D Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full">
          <CargoBelt3D
            isBackground={true}
            scrollProgress={velocityFactor}
          />
        </div>
        {/* Readability overlay removed per user request for clearer 3D visibility */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-56 pb-20 w-full min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-12 max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-xs text-brand-orange font-bold tracking-wide uppercase">
                Shipping Nationwide — 24/7
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-[var(--font-display)] font-black text-4xl xs:text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-brand-black leading-[0.95] tracking-tighter"
            >
              Saman Ho Koi Bhi,
              <br />
              <span className="text-brand-orange">JBS Karega Delivery.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-brand-black/60 text-base md:text-lg max-w-md leading-relaxed font-medium"
            >
              Air, surface, train and consolidation cargo — from New Delhi to 100+ destinations across India. Fast, secure, and door-to-door.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="bg-brand-orange text-white font-[var(--font-display)] font-bold text-sm px-10 py-5 tracking-wider uppercase hover:bg-brand-orange-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-brand-orange/20 hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://wa.me/919582566995"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-black border-2 border-brand-black font-bold text-sm px-10 py-5 tracking-wider uppercase hover:bg-brand-black hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
              >
                WhatsApp Us
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-between sm:justify-start gap-4 sm:gap-12 pt-8 border-t border-brand-black/5"
            >
              {[
                { val: "100+", label: "Destinations" },
                { val: "6", label: "Core Services" },
                { val: "2023", label: "Established" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-[var(--font-display)] font-black text-3xl text-brand-black">
                    {stat.val}
                  </p>
                  <p className="text-[10px] text-brand-black/40 uppercase font-bold tracking-widest mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual - Floating Trust Card */}
          <div className="hidden lg:flex flex-col items-end justify-center relative">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-2xl shadow-brand-black/5 w-80 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-orange rounded-2xl flex items-center justify-center shadow-lg shadow-brand-orange/30">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-brand-black font-black text-xl leading-tight">Secured</p>
                  <p className="text-brand-black/40 text-xs font-bold uppercase tracking-wider">100% Insured</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-2 bg-brand-black/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "99.8%" }}
                    transition={{ duration: 2, delay: 1.5 }}
                    className="h-full bg-brand-orange"
                  />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-brand-black font-black text-3xl">99.8%</p>
                    <p className="text-brand-black/30 text-[10px] font-bold uppercase">SLA Met</p>
                  </div>
                  <div className="text-right">
                    <p className="text-brand-orange font-black text-xl italic tracking-tighter">PREMIUM</p>
                    <p className="text-brand-black/30 text-[10px] font-bold uppercase whitespace-nowrap">Service Level</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Live Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-6 mr-8 bg-live-green/10 border border-live-green/20 px-4 py-2 rounded-full flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-live-green animate-pulse" />
              <span className="text-[10px] text-live-green font-bold uppercase tracking-widest">System Online</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom transition to white */}
    </section>
  );
}
