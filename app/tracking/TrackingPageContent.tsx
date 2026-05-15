"use client";

import { motion } from "framer-motion";
import { Search, Package, Clock, Lock, ArrowRight, Construction } from "lucide-react";
import Link from "next/link";

export default function TrackingPageContent() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="relative py-48 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/transit.png" 
            alt="Tracking Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/80 to-brand-black" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(232,106,47,0.15)_0%,_transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-8"
          >
            <Construction className="w-4 h-4 text-brand-orange" />
            <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">
              System Update in Progress
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-display)] font-black text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter mb-8"
          >
            Tracking <br />
            <span className="text-brand-orange">Coming Soon.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            We are integrating our new high-precision GPS tracking system to provide you with real-time updates for every shipment.
          </motion.p>
        </div>
      </section>

      {/* Coming Soon Details */}
      <section className="py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Clock,
                title: "Live GPS Tracking",
                desc: "Real-time location updates for your cargo across all Indian highways."
              },
              {
                icon: Lock,
                title: "Secure Access",
                desc: "Enterprise-grade encryption for your consignment data and documents."
              },
              {
                icon: Package,
                title: "Direct Updates",
                desc: "Instant WhatsApp and SMS notifications for every milestone reached."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-12 rounded-[48px] border border-brand-black/5 hover:border-brand-orange/20 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors duration-500">
                  <feature.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-black text-brand-black mb-4">{feature.title}</h3>
                <p className="text-brand-black/50 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Manual Support Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-20 bg-brand-black p-12 lg:p-20 rounded-[60px] relative overflow-hidden text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] -mr-48 -mt-48" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Need Live Updates <span className="text-brand-orange">Right Now?</span></h2>
              <p className="text-white/50 text-lg max-w-xl">Our operational desk is active 24/7. Contact us directly for instant status reports on your consignment.</p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-6">
              <Link 
                href="/contact"
                className="bg-brand-orange text-white px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-brand-orange-dark transition-all flex items-center justify-center gap-2"
              >
                Contact Support <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="https://wa.me/919582566995"
                className="bg-white/5 border-2 border-white/10 text-white px-10 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all text-center"
              >
                WhatsApp Ops
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrated Coverage Section */}
      <section className="py-32 bg-white border-t border-brand-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-4 block">
                Network Coverage
              </span>
              <h2 className="font-[var(--font-display)] font-black text-4xl md:text-6xl text-brand-black tracking-tighter mb-8 leading-[1.1]">
                Across The <br />
                <span className="text-brand-orange">Subcontinent.</span>
              </h2>
              <p className="text-brand-black/50 text-lg leading-relaxed mb-10">
                From our strategic hub in New Delhi, we reach the furthest corners of India. 
                Whether it's the mountains of Leh or the ports of Chennai, our network covers over 100+ destinations nationwide.
              </p>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: "100+", sub: "Destinations" },
                  { label: "Pan-India", sub: "Surface · Air · Rail" },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-black text-brand-black">{stat.label}</p>
                    <p className="text-[10px] font-bold text-brand-black/40 uppercase tracking-widest mt-1">{stat.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-black p-12 rounded-[48px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-[80px] -mr-32 -mt-32" />
              <p className="text-brand-orange font-bold uppercase tracking-widest text-[10px] mb-8 relative z-10">Strategic Presence</p>
              <div className="space-y-6 relative z-10">
                <div className="flex flex-wrap gap-3">
                  {["Delhi NCR", "Mumbai", "Pune", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Ahmedabad"].map((city, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 group hover:border-brand-orange/30 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                      <span className="text-white/80 text-xs font-bold uppercase tracking-wider">{city}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/30 text-sm italic font-medium pt-4">
                  + Connecting to major Tier 2 & Tier 3 cities via our multi-modal transport network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
