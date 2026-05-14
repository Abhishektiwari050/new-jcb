"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Zap, Target, ArrowUpRight } from "lucide-react";

const reasons = [
  {
    title: "Unmatched Speed",
    desc: "Averaging 98.4% on-time delivery across 1,200+ pin codes. We don't just ship; we race against time.",
    icon: <Zap className="w-8 h-8" />,
    stat: "98.4%",
    label: "On-Time Ratio"
  },
  {
    title: "Military Precision",
    desc: "Every shipment is tracked via military-grade GPS with 1-meter accuracy and real-time environment telemetry.",
    icon: <Target className="w-8 h-8" />,
    stat: "<1m",
    label: "GPS Accuracy"
  },
  {
    title: "Elite Security",
    desc: "Multi-layered security protocols for high-value cargo. IATA approved handling for mission-critical goods.",
    icon: <Shield className="w-8 h-8" />,
    stat: "ZERO",
    label: "Loss incidents"
  },
  {
    title: "Direct Command",
    desc: "Single point of contact for enterprise clients. No bots, no call centers—just direct command line support.",
    icon: <Clock className="w-8 h-8" />,
    stat: "24/7",
    label: "Active Support"
  }
];

export default function WhyJBSSection() {
  return (
    <section className="bg-brand-black py-32 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#111] -skew-x-12 translate-x-32" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.4em]">
                Strategic Advantage
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tighter italic uppercase">
                The JBS <br />
                <span className="text-brand-orange">Protocol.</span>
              </h2>
              <p className="text-white/40 text-lg font-body max-w-md leading-relaxed">
                Logistics is a game of millimeters. We've built an infrastructure where failure isn't an option.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-orange text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest clip-corner hover:bg-white hover:text-brand-black transition-all">
                Download Profile
              </button>
              <button className="border border-white/20 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-widest clip-corner hover:bg-white/10 transition-all">
                Our Fleet
              </button>
            </div>
          </div>

          {/* Right: Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-black p-10 space-y-8 group hover:bg-[#111] transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="text-brand-orange transform group-hover:scale-110 transition-transform">
                    {reason.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-brand-orange transition-colors" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-display font-black text-xl text-white uppercase italic tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="text-xs text-white/40 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="text-3xl font-display font-black text-brand-orange">
                    {reason.stat}
                  </div>
                  <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">
                    {reason.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
