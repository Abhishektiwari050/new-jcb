"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const customers = [
  { name: "Tata Motors", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Tata_Motors_Logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "Cipla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Cipla_logo.svg" },
  { name: "Mahindra", logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Mahindra_logo.svg" },
  { name: "Dr Reddy's", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Dr_reddys_logo_%281%29.jpg" },
  { name: "Godrej", logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Godrej_Logo.svg" },
  { name: "Asian Paints", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Asian_Paints_Logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "HUL", logo: "https://upload.wikimedia.org/wikipedia/en/b/b2/Hindustan_Unilever_Logo.svg" },
  { name: "Reliance Industries", logo: "https://upload.wikimedia.org/wikipedia/en/0/0e/Reliance_Industries.svg" },
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

          <div className="flex animate-[ticker_50s_linear_infinite] whitespace-nowrap gap-10 transform-gpu will-change-transform">
            {[...customers, ...customers, ...customers].map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex items-center justify-center min-w-[160px] h-20 px-6 bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.02)] border border-border-light hover:border-brand-orange/20 hover:shadow-[0_10px_25px_rgba(0,0,0,0.05)] transition-all group"
              >
                <div className="relative w-full h-10">
                  <Image
                    src={logo.logo}
                    alt={logo.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 160px"
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
