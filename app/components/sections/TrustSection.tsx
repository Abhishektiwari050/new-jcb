"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/app/lib/utils";


const partners = [
  { name: "Reliance", logo: "/images/partners/reliance.png" },
  { name: "Amazon", logo: "/images/partners/amazon.png" },
  { name: "Tata", logo: "/images/partners/tata.png" },
  { name: "Reliance", logo: "/images/partners/reliance.png" },
  { name: "Amazon", logo: "/images/partners/amazon.png" },
  { name: "Tata", logo: "/images/partners/tata.png" },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-12 border-b border-border-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="w-full">
          {/* Partner Marquee */}
          <div className="relative">
            <div className="flex items-center gap-6 mb-4">
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] whitespace-nowrap">
                Trusted By Industry Leaders
              </span>
              <div className="h-px bg-border-light w-full" />
            </div>
            
            <div className="relative overflow-hidden group">
              {/* Gradient Mask */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

              <div className="flex whitespace-nowrap">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="flex items-center gap-16 pr-16"
                >
                  {[...partners, ...partners].map((partner, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center h-12 w-32 flex-shrink-0 bg-black/5 rounded-md border border-black/5 hover:border-brand-orange/30 transition-all duration-500 group"
                    >
                      <span className="font-display font-black text-sm text-brand-black/30 group-hover:text-brand-orange transition-colors uppercase tracking-tight">
                        {partner.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
