"use client";

import { motion } from "framer-motion";
import { 
  Laptop, 
  Stethoscope, 
  Zap, 
  Plane, 
  ShoppingBag, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";

const industries = [
  {
    title: "Technology & IT",
    desc: "Precision handling for high-value servers, networking gear, and critical data center hardware.",
    icon: <Laptop className="w-8 h-8" />,
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Healthcare & Pharma",
    desc: "GDP-certified cold chain logistics for life-saving biologicals, vaccines, and medical devices.",
    icon: <Stethoscope className="w-8 h-8" />,
    color: "from-emerald-500/20 to-transparent"
  },
  {
    title: "Automotive",
    desc: "Just-in-time (JIT) delivery for assembly lines, spare parts, and specialized industrial components.",
    icon: <Zap className="w-8 h-8" />,
    color: "from-orange-500/20 to-transparent"
  },
  {
    title: "Aerospace",
    desc: "AOG (Aircraft on Ground) support with mission-critical parts movement across global hubs.",
    icon: <Plane className="w-8 h-8" />,
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Retail & Lifestyle",
    desc: "Omnichannel fulfillment and reverse logistics for global brands and high-street retailers.",
    icon: <ShoppingBag className="w-8 h-8" />,
    color: "from-pink-500/20 to-transparent"
  },
  {
    title: "Defense & Strategic",
    desc: "Secure, vetted logistics for sensitive strategic equipment with 100% mission reliability.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "from-red-500/20 to-transparent"
  }
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-32 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Content */}
          <div className="space-y-12 lg:sticky lg:top-32">
            <div className="space-y-6">
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.4em]">
                Sector Expertise
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-brand-black leading-[0.9] tracking-tighter">
                Industry-Specific <br />
                Intelligence.
              </h2>
              <p className="text-brand-black/50 text-lg font-body max-w-md leading-relaxed">
                Generic logistics is for generic businesses. We provide specialized handling protocols for sectors where error is not an option.
              </p>
            </div>

            <div className="pt-8">
              <button className="group flex items-center gap-4 text-brand-black">
                <div className="w-12 h-12 bg-brand-orange text-white flex items-center justify-center clip-logo group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-widest">Explore Solutions</div>
                  <div className="text-xs text-brand-black/40">Custom protocols for your sector</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right: List */}
          <div className="space-y-4">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-[#F8F8F8] p-10 border border-black/5 flex flex-col sm:flex-row gap-8 items-start sm:items-center hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 cursor-pointer"
              >
                <div className="w-16 h-16 bg-white border border-black/5 flex items-center justify-center text-brand-orange shadow-sm group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 clip-corner">
                  {industry.icon}
                </div>
                
                <div className="flex-1 space-y-2">
                  <h3 className="font-display font-black text-2xl text-brand-black tracking-tight uppercase italic">
                    {industry.title}
                  </h3>
                  <p className="text-xs text-brand-black/40 leading-relaxed max-w-sm">
                    {industry.desc}
                  </p>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-brand-orange" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
