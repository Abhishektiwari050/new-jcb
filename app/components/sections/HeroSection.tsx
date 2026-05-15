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
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full -translate-y-24 md:translate-y-0 scale-[1.15] md:scale-100">
          <CargoBelt3D
            isBackground={true}
            scrollProgress={velocityFactor}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 md:pt-32 pb-20 md:pb-6 w-full min-h-screen flex flex-col justify-between items-center">
        {/* Top Content: Text */}
        <div className="w-full flex flex-col items-center">
          <div className="space-y-6 md:space-y-8 max-w-4xl text-center flex flex-col items-center">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-[var(--font-display)] font-black text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-brand-black leading-[1.1] md:leading-[0.95] tracking-tighter"
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
              className="text-brand-black/70 text-sm md:text-lg max-w-xl mx-auto leading-relaxed font-bold md:font-medium p-2 md:p-0"
            >
              Air, surface, train and consolidation cargo — from New Delhi to 100+ destinations across India. Fast, secure, and door-to-door.
            </motion.p>
          </div>
        </div>

        {/* Bottom Content: CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto mb-4 md:mb-0"
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
      </div>

      {/* Bottom transition to white */}
    </section>
  );
}
