"use client";

import { motion } from "framer-motion";

const customers = [
  "Tata Motors",
  "Wipro",
  "Cipla",
  "Mahindra",
  "Dr Reddy's",
  "Godrej",
  "Asian Paints",
  "Infosys",
  "HUL",
  "Reliance",
];

export default function CustomersSection() {
  return (
    <section className="bg-bg-surface py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-text-muted uppercase tracking-[0.3em] mb-10 font-medium"
        >
          Trusted by India&apos;s leading brands
        </motion.p>

        {/* Logo Marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-surface to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-surface to-transparent z-10" />

          <div className="flex animate-[ticker_40s_linear_infinite] whitespace-nowrap gap-16">
            {[...customers, ...customers].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center min-w-[140px] h-16 px-6 bg-white/60 border border-border-light rounded-lg hover:border-brand-orange/50 transition-colors"
              >
                <span className="font-[var(--font-display)] font-bold text-sm text-text-primary/40 tracking-wide hover:text-brand-orange transition-colors">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
