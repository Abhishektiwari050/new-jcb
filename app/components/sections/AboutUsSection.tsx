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
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <p className="text-white/60 text-lg leading-relaxed font-medium">
                JBS Cargo Movers was founded in 2023 by <span className="text-brand-orange font-bold">Lalit Saini</span>, a seasoned logistics expert with years of hands-on experience in cargo and freight operations across India. Built from the ground up in New Delhi, JBS was created with one vision: to make cargo movement across India reliable, secure, fast, and cost-effective — for every business, large or small.
              </p>
              <p className="text-white/40 text-base leading-relaxed">
                Under Lalit Saini's leadership, JBS has quickly grown into a trusted logistics partner for corporate and commercial clients. We specialise in Air Cargo, Surface Cargo, Train Cargo, Consolidation Services, Door-to-Door Delivery, and Manpower Solutions — serving approximately 100 destinations nationwide through our strong network of airline and logistics partnerships including Blue Dart, Delhivery, Mahindra Logistics, IndiGo Cargo, Air India Cargo, Akasa Air, SpiceJet Cargo, and the Indian Railways Cargo Network.
              </p>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] group hover:border-brand-orange/30 transition-all">
                <p className="text-white/40 font-bold text-xs mb-2 uppercase tracking-widest">Network</p>
                <p className="text-5xl font-black text-brand-orange">100+</p>
                <p className="text-white/60 text-sm font-medium mt-1">Destinations Nationwide</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-[32px] group hover:border-brand-orange/30 transition-all">
                <p className="text-white/40 font-bold text-xs mb-2 uppercase tracking-widest">Service</p>
                <p className="text-5xl font-black text-brand-orange">24/7</p>
                <p className="text-white/60 text-sm font-medium mt-1">Operational Support</p>
              </div>
            </div>
            
            <div className="p-8 bg-brand-orange/5 border border-brand-orange/10 rounded-[32px]">
              <p className="text-brand-orange font-bold uppercase tracking-widest text-[10px] mb-6">Strategic Presence</p>
              <div className="flex flex-wrap gap-3">
                 {["Delhi NCR", "Mumbai", "Pune", "Bangalore", "Chennai", "Hyderabad"].map((city, i) => (
                   <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 group hover:border-brand-orange/50 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      <span className="text-white/80 text-xs font-bold uppercase tracking-wider">{city}</span>
                   </div>
                 ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
