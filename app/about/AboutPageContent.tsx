"use client";

import { motion } from "framer-motion";
import { Shield, Target, Users, Zap, Award, Globe } from "lucide-react";
import Navbar from "@/app/components/Navbar";

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Every shipment is handled with the highest standards of safety and security protocols."
  },
  {
    icon: Target,
    title: "Precision",
    description: "Our hub-and-spoke model ensures pinpoint accuracy in routing and deliveries."
  },
  {
    icon: Zap,
    title: "Velocity",
    description: "Time-critical shipments delivered with the fastest transit times in the industry."
  },
  {
    icon: Users,
    title: "Customer Centric",
    description: "Dedicated support team available 24/7 to solve your logistics challenges."
  }
];

export default function AboutPageContent() {
  return (
    <div>
      <Navbar theme="dark" />
      {/* Hero Section */}
      <section className="relative py-48 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(232,106,47,0.15)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">
              Established 2009
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-display)] font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tighter mb-8"
          >
            Logistics With <br />
            <span className="text-brand-orange">Integrity.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            JBS Cargo Movers has evolved from a local New Delhi courier to a nationwide 
            logistics powerhouse. We don't just move Saman; we move your business forward.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-[var(--font-display)] font-black text-brand-black leading-tight">
                Our <span className="text-brand-orange">Journey</span> <br />
                Across India.
              </h2>
              <div className="space-y-6 text-brand-black/60 text-lg leading-relaxed">
                <p>
                  Founded in 2009 by logistics veterans, JBS Cargo Movers was born out of a 
                  desire to solve the complex fragmented shipping landscape in India. We saw 
                  businesses struggling with unreliable transit times and lack of transparency.
                </p>
                <p>
                  We started with two small vans in New Delhi. Today, we manage a massive multi-modal 
                  network involving 70+ specialized vehicles, 200+ logistics professionals, and 
                  dedicated cargo space with every major Indian airline.
                </p>
                <p>
                  Our commitment remains the same: whether it's a 1kg medical kit or a 10-ton 
                  industrial turbine, it gets there on time, every time.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-8 pt-8">
                <div>
                  <p className="text-4xl font-black text-brand-orange leading-none">15+</p>
                  <p className="text-[10px] font-bold text-brand-black/40 uppercase tracking-widest mt-2">Years of Service</p>
                </div>
                <div className="w-px h-12 bg-brand-black/5 hidden sm:block" />
                <div>
                  <p className="text-4xl font-black text-brand-orange leading-none">100+</p>
                  <p className="text-[10px] font-bold text-brand-black/40 uppercase tracking-widest mt-2">Active Hubs</p>
                </div>
                <div className="w-px h-12 bg-brand-black/5 hidden sm:block" />
                <div>
                  <p className="text-4xl font-black text-brand-orange leading-none">1M+</p>
                  <p className="text-[10px] font-bold text-brand-black/40 uppercase tracking-widest mt-2">Tons Moved</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-square bg-brand-orange/5 rounded-[60px] border border-brand-orange/10 overflow-hidden relative shadow-2xl">
                <img 
                  src="/images/warehouse.png" 
                  alt="Modern Warehouse" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent opacity-60" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-brand-black/5 max-w-[240px] z-10">
                <Award className="w-10 h-10 text-brand-orange mb-4" />
                <p className="font-[var(--font-display)] font-black text-brand-black text-lg leading-tight">ISO 9001:2015</p>
                <p className="text-brand-black/40 text-xs font-bold uppercase mt-1">Certified Operations</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-[var(--font-display)] font-black text-brand-black">
              The JBS <span className="text-brand-orange">Standard.</span>
            </h2>
            <p className="text-brand-black/40 mt-6 max-w-2xl mx-auto text-lg">
              Our core values guide every pickup, every transit, and every delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[32px] border border-brand-black/5 hover:border-brand-orange/30 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-500 mb-8">
                  <value.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-black text-brand-black mb-4">{value.title}</h3>
                <p className="text-brand-black/50 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
