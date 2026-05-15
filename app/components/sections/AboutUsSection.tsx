"use client";

import { motion } from "framer-motion";
import { TextRevealByWord } from "../TextReveal";
import { CheckCircle2 } from "lucide-react";

export default function AboutUsSection() {
  return (
    <section id="about" className="bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
        >
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Company Profile</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-display)] font-extrabold text-white mt-4">
                Established <span className="text-brand-orange">2023.</span>
            </h2>
        </motion.div>
      </div>
      
      <TextRevealByWord 
        text="JBS Cargo Movers is a professionally managed logistics and cargo service company established in 2023 with the vision of providing reliable, secure, fast, and cost-effective logistics solutions across India. We specialize in Air Cargo, Surface Cargo, Train Cargo, Consolidation Services, and Manpower Solutions."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                  <p className="text-white/50 leading-relaxed">
                      To provide efficient, secure, and value-driven logistics services while maintaining the highest standards of professionalism, operational excellence, and customer satisfaction.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                  <p className="text-white/50 leading-relaxed">
                      To become one of India's most trusted and preferred logistics service providers by delivering innovative, customer-focused, and reliable transportation solutions.
                  </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4">
                    <h3 className="text-xl font-bold text-white">Operational Excellence</h3>
                    <p className="text-white/40 text-sm leading-relaxed">
                        Our operational capabilities are further strengthened through our associated organization, <span className="text-brand-orange font-bold">Move Zen Express Logistics Pvt. Ltd.</span>, which provides additional expertise in transport and logistics management.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                        <p className="text-white/80 font-bold text-sm mb-2 uppercase tracking-tighter">Network</p>
                        <p className="text-3xl font-black text-brand-orange">~100</p>
                        <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-1">Destinations</p>
                    </div>
                    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                        <p className="text-white/80 font-bold text-sm mb-2 uppercase tracking-tighter">Support</p>
                        <p className="text-3xl font-black text-brand-orange">24/7</p>
                        <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-1">Operational Support</p>
                    </div>
                </div>
                
                <div className="pt-4 flex flex-wrap gap-4">
                   {["Delhi NCR", "Mumbai", "Pune", "Bangalore", "Chennai", "Hyderabad"].map((city, i) => (
                     <div key={i} className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                        <CheckCircle2 className="w-3 h-3 text-brand-orange" />
                        <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">{city}</span>
                     </div>
                   ))}
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
