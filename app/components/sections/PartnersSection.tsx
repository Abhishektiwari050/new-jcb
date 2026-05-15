"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  { name: "Blue Dart Express", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Blue_Dart_Express_logo.svg" },
  { name: "Delhivery Ltd.", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Delhivery_Logo_%282019%29.png" },
  { name: "Mahindra Logistics", logo: "https://upload.wikimedia.org/wikipedia/commons/7/70/MAHINDRA_LOGISTICS_LOGO.jpg" },
  { name: "IndiGo Cargo", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/IndiGo_Airlines_logo.svg" },
  { name: "Air India Cargo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Air_India_2023.svg" },
  { name: "Akasa Air Cargo", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Akasa_Air_logo.svg" },
  { name: "SpiceJet Cargo", logo: "https://upload.wikimedia.org/wikipedia/en/9/9c/SpiceJet_logo.svg" },
  { name: "Indian Railways", logo: "https://upload.wikimedia.org/wikipedia/fr/e/ed/Indian_Railway.png" },
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        {/* Header */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-display)] font-extrabold text-2xl text-brand-black tracking-tight uppercase"
          >
            Our Business Partners
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-12 h-1 bg-brand-orange mx-auto my-3"
          />
          <p className="text-brand-black/40 text-xs font-bold uppercase tracking-widest mt-4">
            Strengthening our logistics network with industry leaders
          </p>
        </div>
      </div>

      {/* Logo Marquee — Full Width */}
      <div className="relative w-full">
        <div className="flex animate-[ticker_10s_linear_infinite] lg:animate-[ticker_20s_linear_infinite] whitespace-nowrap gap-8 transform-gpu will-change-transform py-4">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex items-center justify-center min-w-[220px] h-28 px-10 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-brand-black/5 hover:border-brand-orange/30 transition-all group"
            >
              <div className="relative w-full h-14">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  sizes="220px"
                  className="object-contain transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
