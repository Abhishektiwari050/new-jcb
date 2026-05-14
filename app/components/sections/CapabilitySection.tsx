"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Zap, Globe, Cpu, Map, ChevronRight } from "lucide-react";
import { cn } from "@/app/lib/utils";

const capabilities = [
  {
    title: "Pharma Cold Chain",
    desc: "GDP-compliant temperature mapping (+2°C to +8°C) with real-time validation.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Tech-Driven Routing",
    desc: "AI-optimized routes for time-critical JIT industrial deliveries across 28 states.",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "Secure High-Value",
    desc: "Dedicated handling protocols for microchips, luxury goods, and aerospace parts.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "IATA Membership",
    desc: "Seamless air freight connectivity via major Indian hubs with dedicated airport teams.",
    icon: <Globe className="w-5 h-5" />,
  },
];

export default function CapabilitySection() {
  return (
    <section className="bg-white overflow-hidden border-b border-border-light">
      <div className="flex flex-col lg:flex-row min-h-[800px]">
        {/* Visual Asset (Split Left) */}
        <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-auto">
          <Image
            src="/images/global_logistics.png"
            alt="JBS Cargo Modern Fleet"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-black/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-transparent opacity-80" />
          
          {/* Tech Overlay Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute bottom-12 left-12 p-8 bg-white/10 backdrop-blur-2xl border border-white/20 max-w-sm"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-16 h-16 bg-brand-orange flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.3em] mb-1">Live Capability</div>
                <div className="text-lg font-display font-bold text-white tracking-tight leading-none italic">Smart-Track™ Enabled</div>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed italic font-display">
              "We monitor 1,200+ data points per trip to ensure absolute security for every pallet."
            </p>
          </motion.div>
        </div>

        {/* Content Side (Split Right) */}
        <div className="lg:w-1/2 p-12 lg:p-32 flex flex-col justify-center relative">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-0 p-12 text-[15vw] font-display font-black text-brand-black/[0.02] leading-none select-none pointer-events-none">
            70+
          </div>

          <div className="max-w-xl space-y-16 relative z-10">
            <div className="space-y-6">
              <span className="text-[11px] font-bold text-brand-orange uppercase tracking-[0.3em]">
                Section 06 — Operational Reach
              </span>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-black leading-[0.9] tracking-tighter italic">
                Heavy-Duty Capacity. <br />
                Surgical Precision.
              </h2>
              <p className="text-xl text-text-muted font-body leading-relaxed">
                JBS Cargo combines industrial-scale fleet power with high-tech intelligence, creating a supply chain that is both robust and adaptive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group space-y-4"
                >
                  <div className="w-10 h-10 border border-brand-orange/20 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500">
                    {cap.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-lg text-brand-black group-hover:text-brand-orange transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-[13px] text-text-muted leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="group inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-brand-black hover:text-brand-orange transition-colors">
              View Technical Specs
              <div className="w-10 h-px bg-brand-black/20 group-hover:w-16 group-hover:bg-brand-orange transition-all duration-500" />
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
