"use client";

import { motion } from "framer-motion";
import {
  Zap,
  MapPin,
  Shield,
  Headphones,
  IndianRupee,
  Settings2,
  Clock,
  Network,
  BadgeCheck,
} from "lucide-react";

const advantages = [
  { icon: Zap, text: "Fast & Reliable Delivery" },
  { icon: MapPin, text: "PAN India Cargo Connectivity" },
  { icon: Shield, text: "Safe & Secure Cargo Handling" },
  { icon: Headphones, text: "Dedicated Customer Support" },
  { icon: IndianRupee, text: "Economical & Competitive Pricing" },
  { icon: Settings2, text: "Customised Logistics Solutions" },
  { icon: BadgeCheck, text: "Professional Logistics Management" },
  { icon: Clock, text: "Timely & Committed Deliveries" },
  { icon: Network, text: "Strong Transportation Network — Blue Dart, Delhivery, Mahindra Logistics and major airline cargo partners" },
];

export default function WhyChooseUsSection() {
  // Double the array for seamless infinite scroll
  const tickerItems = [...advantages, ...advantages, ...advantages];

  return (
    <section className="py-24 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">
                Our Edge
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-display)] font-extrabold text-brand-black"
            >
              Why Choose <span className="text-brand-orange">JBS.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-black/50 max-w-sm text-lg leading-relaxed"
          >
            Trusted by businesses across India, with core hubs in Delhi NCR, Mumbai, Pune, Bangalore, Chennai, and Hyderabad.
          </motion.p>
        </div>
      </div>

      {/* Mobile Grid / Desktop Ticker */}
      <div className="lg:hidden px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {advantages.map((item, i) => (
            <motion.div
              key={`mob-${i}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-5 bg-white border border-brand-black/5 rounded-2xl"
            >
              <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-brand-orange" />
              </div>
              <span className="font-bold text-brand-black text-sm tracking-tight leading-snug">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scrolling Ticker — Desktop Only */}
      <div className="hidden lg:block space-y-4">
        {/* Row 1 (left to right) */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10" />
          <div className="flex animate-[ticker_25s_linear_infinite] whitespace-nowrap gap-4 transform-gpu will-change-transform">
            {tickerItems.map((item, i) => (
              <div
                key={`r1-${i}`}
                className="flex items-center gap-3 px-6 py-4 bg-white border border-brand-black/5 rounded-2xl min-w-fit hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-bold text-brand-black text-sm tracking-wide">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (right to left) */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10" />
          <div className="flex animate-[tickerReverse_30s_linear_infinite] whitespace-nowrap gap-4 transform-gpu will-change-transform">
            {[...tickerItems].reverse().map((item, i) => (
              <div
                key={`r2-${i}`}
                className="flex items-center gap-3 px-6 py-4 bg-white border border-brand-black/5 rounded-2xl min-w-fit hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-bold text-brand-black text-sm tracking-wide">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
