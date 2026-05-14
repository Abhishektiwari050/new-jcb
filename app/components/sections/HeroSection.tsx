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

const IndiaMap = dynamic(() => import("../IndiaMap").then(mod => mod.IndiaMap), {
  ssr: false,
  loading: () => <div className="w-full h-96 bg-brand-black/5 animate-pulse rounded-3xl" />
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
        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F2EFEA] via-[#F2EFEA]/80 to-transparent pointer-events-none" />
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
              className="font-[var(--font-display)] font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-brand-black leading-[0.95] tracking-tighter"
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
              className="text-brand-black/60 text-lg max-w-md leading-relaxed font-medium"
            >
              Air, surface, train and consolidation cargo — from New Delhi to 100+ destinations across India. Fast, secure, and door-to-door.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="bg-brand-orange text-white font-[var(--font-display)] font-bold text-sm px-10 py-5 tracking-wider uppercase hover:bg-brand-orange-dark transition-all duration-300 flex items-center gap-2 shadow-xl shadow-brand-orange/20 hover:scale-105 active:scale-95"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://wa.me/919582566995"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-brand-black border-2 border-brand-black font-bold text-sm px-10 py-5 tracking-wider uppercase hover:bg-brand-black hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
              >
                WhatsApp Us
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-12 pt-8 border-t border-brand-black/5"
            >
              {[
                { val: "100+", label: "Destinations" },
                { val: "6", label: "Core Services" },
                { val: "15+", label: "Years Exp" },
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

          {/* Right Visual - Interactive Map */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-full relative group"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-brand-orange/10 blur-[120px] rounded-full -z-10 animate-pulse" />
              
              <div className="bg-white/60 backdrop-blur-xl p-6 rounded-[60px] border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative overflow-hidden">
                {/* Hub Connectivity visualization overlay */}
                <div className="absolute inset-0 pointer-events-none z-20">
                   <div className="absolute top-[34%] left-[47%] w-3 h-3 bg-brand-orange/40 rounded-full animate-ping" />
                   <div className="absolute top-[35%] left-[48%] w-1.5 h-1.5 bg-brand-orange rounded-full" />
                </div>

                <div className="mb-6 flex items-center justify-between px-4 pt-4">
                  <div>
                    <h3 className="font-[var(--font-display)] font-black text-2xl text-brand-black tracking-tighter">NETWORK REACH</h3>
                    <p className="text-[10px] text-brand-orange font-bold uppercase tracking-[0.2em]">Pan-India Connectivity</p>
                  </div>
                  <div className="px-4 py-2 bg-brand-black text-white rounded-2xl flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-live-green animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Delhi HQ</span>
                  </div>
                </div>
                
                <div className="px-2 pb-2">
                   <IndiaMap className="w-full h-auto" />
                </div>
              </div>
              
              {/* Floating Trust Tag */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-brand-black/5 flex flex-col gap-1 max-w-[180px]"
              >
                <p className="text-brand-black font-black text-3xl tracking-tighter">100+</p>
                <p className="text-[10px] text-brand-black/40 font-bold uppercase tracking-widest leading-tight">Cities Connected Nationwide</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom transition to white */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-20 pointer-events-none" />
    </section>
  );
}
