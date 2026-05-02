"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Title with small underline */}
            <div className="space-y-2">
              <h2 className="font-[var(--font-display)] font-extrabold text-3xl sm:text-4xl text-brand-black tracking-tight">
                About Us
              </h2>
              <div className="w-12 h-1 bg-brand-orange" />
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                JBS Cargo was incorporated with an aim to aggregate India's
                fragmented freight industry. Prior to JBS, our founders have
                been working in the industry for more than a decade.
              </p>
              <p>
                Realising the operation intensive nature of the logistics industry, 
                we consistently aim at optimising business processes through SOPs 
                and technology with changing dynamics.
              </p>
              <p>
                Over a period of years, with an extensive network, we have been
                consistently delivering in servicing our customers and have become
                one of the most reliable and trusted freight service consolidators
                in the country, thereby creating a niche in the industry.
              </p>
            </div>
          </motion.div>

          {/* Right Visual (Image Collage) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Circular Background Container */}
            <div className="relative w-full aspect-square max-w-[500px] mx-auto rounded-full bg-surface-light border border-border-default overflow-hidden">
              {/* Globe/Grid pattern background */}
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(12,12,12,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(12,12,12,0.1) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              
              {/* Main composition image */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white shadow-inner bg-brand-black/5">
                <Image 
                  src="/images/about_us_logistics.png" 
                  alt="JBS Cargo Global Logistics" 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              {/* Decorative rings */}
              <div className="absolute inset-0 border-[8px] border-white/50 rounded-full" />
              <div className="absolute -inset-4 border border-brand-orange/20 rounded-full animate-[spin_20s_linear_infinite]" />
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-brand-orange text-white p-6 clip-btn shadow-lg">
              <span className="font-[var(--font-display)] font-bold text-2xl">24/7</span>
              <p className="text-xs tracking-wider uppercase opacity-80 mt-1">Support</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
