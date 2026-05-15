"use client";

import { motion } from "framer-motion";
import { Shield, Target, Users, Zap, Award, Globe, CheckCircle2 } from "lucide-react";
import Navbar from "@/app/components/Navbar";

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
              Established 2023
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-display)] font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tighter mb-8"
          >
            Saman Ho Koi Bhi, <br />
            <span className="text-brand-orange text-outline">JBS Karega Delivery.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            JBS Cargo Movers is a professionally managed logistics and cargo service company 
            established in 2023 with the vision of providing reliable, secure, fast, and cost-effective 
            logistics solutions across India.
          </motion.p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-[var(--font-display)] font-black text-brand-black leading-tight">
                About <span className="text-brand-orange">JBS Cargo</span> <br />
                Movers.
              </h2>
              <div className="space-y-6 text-brand-black/60 text-lg leading-relaxed">
                <p>
                  Based in New Delhi, we specialize in Air Cargo, Surface Cargo, Train Cargo, Consolidation Services, and Manpower Solutions. We provide complete Door-to-Door cargo movement services through Air, Surface, and Rail transportation modes, ensuring efficient and timely deliveries across approximately 100 destinations nationwide.
                </p>
                <p>
                  With a dedicated team of experienced logistics professionals and strong operational coordination, we offer customized logistics solutions designed to meet the growing demands of corporate and commercial clients.
                </p>
                <p>
                  Our commitment is to provide safe, smooth, and hassle-free cargo transportation services while maintaining the highest standards of professionalism and customer satisfaction.
                </p>
              </div>
              
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   "Fast & Reliable Delivery",
                   "PAN India Connectivity",
                   "Safe & Secure Handling",
                   "24/7 Customer Support",
                   "Economical Pricing",
                   "Customized Solutions"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                     <span className="font-bold text-brand-black text-sm">{item}</span>
                   </div>
                 ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="p-10 bg-brand-black rounded-[40px] text-white space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-[60px] group-hover:bg-brand-orange/40 transition-colors" />
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-white/50 leading-relaxed">
                    To become one of India’s most trusted and preferred logistics service providers by delivering innovative, customer-focused, and reliable transportation solutions.
                  </p>
                </div>

                <div className="w-full h-px bg-white/10" />

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-white/50 leading-relaxed">
                    To provide efficient, secure, and value-driven logistics services while maintaining the highest standards of professionalism, operational excellence, and customer satisfaction.
                  </p>
                </div>

                <div className="w-full h-px bg-white/10" />

                <div className="pt-4">
                   <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">Operational Edge</p>
                   <p className="text-white/70 text-sm leading-relaxed">
                     Our operational capabilities are further strengthened through our associated organization, <span className="text-white font-bold underline decoration-brand-orange underline-offset-4">Move Zen Express Logistics Pvt. Ltd.</span>, which provides additional expertise in transport and logistics management.
                   </p>
                </div>
              </div>

              <div className="p-10 bg-brand-orange/5 border border-brand-orange/10 rounded-[40px]">
                <h3 className="text-xl font-bold text-brand-black mb-4">Client Commitment</h3>
                <p className="text-brand-black/60 leading-relaxed">
                  At JBS Cargo Movers, we believe in building long-term business relationships based on trust, transparency, service quality, and operational efficiency. Our mission is to provide complete peace of mind to our clients through dependable and hassle-free logistics services.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Network Highlights */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-[var(--font-display)] font-black text-brand-black">Our Network & Operations</h2>
              <p className="text-brand-black/40 mt-4">Covering major cities and business hubs across India</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {["Delhi NCR", "Mumbai", "Pune", "Bangalore", "Chennai", "Hyderabad"].map((city, i) => (
                <div key={i} className="p-6 bg-white border border-brand-black/5 rounded-2xl text-center group hover:border-brand-orange/30 transition-colors">
                  <MapPin className="w-6 h-6 text-brand-orange mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-brand-black text-sm">{city}</span>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
