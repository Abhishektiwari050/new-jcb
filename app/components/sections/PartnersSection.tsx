"use client";

import { motion } from "framer-motion";

const partners = [
  "Emirates SkyCargo",
  "Qatar Airways Cargo",
  "Lufthansa Cargo",
  "Singapore Airlines",
  "Cathay Pacific",
  "Air India Cargo",
  "Maersk",
  "MSC",
  "DHL Aviation",
  "FedEx",
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-16 overflow-hidden border-t border-border-light/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-display)] font-extrabold text-2xl text-text-primary tracking-tight uppercase"
          >
            Our Partners
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-12 h-1 bg-brand-orange mx-auto my-3"
          />
        </div>

        {/* Logo Marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-[ticker_40s_linear_infinite] whitespace-nowrap gap-12">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[160px] h-20 px-6 bg-surface-light border border-border-light/40 hover:border-brand-orange/50 transition-colors"
              >
                <span className="font-[var(--font-display)] font-bold text-sm text-text-primary/40 tracking-wider hover:text-brand-orange transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
