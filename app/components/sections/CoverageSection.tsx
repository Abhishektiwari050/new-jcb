"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndiaMap } from "../IndiaMap";

export default function CoverageSection() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">
              Network
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-display)] font-extrabold text-brand-black"
          >
            Pan-India <span className="text-brand-orange">Connectivity.</span>
          </motion.h2>
          <p className="text-brand-black/40 mt-6 max-w-2xl mx-auto text-lg">
            Our hub-and-spoke model ensures seamless movement of goods across
            100+ destinations. From our central Delhi hub to every corner of
            India.
          </p>
        </div>

        {/* Map — in normal flow */}
        <div className="flex justify-center mb-16" suppressHydrationWarning>
          <IndiaMap className="w-full max-w-3xl h-auto" />
        </div>

        {/* Stats — in normal flow below map */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "100+", sub: "Destinations" },
            { label: "24/7", sub: "Support" },
            { label: "Real-time", sub: "Tracking" },
            { label: "Express", sub: "Delivery" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#FDFBF7] p-6 rounded-2xl border border-brand-orange/10 text-center hover:shadow-lg hover:border-brand-orange/30 transition-all duration-300 group"
            >
              <p className="text-3xl md:text-4xl font-black text-brand-orange group-hover:scale-110 transition-transform duration-300">
                {stat.label}
              </p>
              <p className="text-[11px] font-bold text-brand-black/40 uppercase tracking-widest mt-2">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
