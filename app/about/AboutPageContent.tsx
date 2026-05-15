"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/app/components/Navbar";

const IndiaGateIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 90 L90 90" />
    <path d="M20 90 L20 35 L80 35 L80 90" />
    <path d="M35 90 L35 60 C35 45 65 45 65 60 L65 90" />
    <path d="M15 35 L85 35" />
    <path d="M20 25 L80 25" />
    <path d="M30 15 L70 15" />
    <circle cx="30" cy="50" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="70" cy="50" r="2.5" fill="currentColor" stroke="none" />
    <path d="M15 65 L25 65" />
    <path d="M75 65 L85 65" />
  </svg>
);

const GatewayOfIndiaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 90 L90 90" />
    <path d="M15 90 V50 H85 V90" />
    <path d="M35 90 V25" />
    <path d="M65 90 V25" />
    <path d="M15 90 V50" />
    <path d="M85 90 V50" />
    <path d="M35 65 Q50 45 65 65" />
    <path d="M15 75 Q25 65 35 75" />
    <path d="M65 75 Q75 65 85 75" />
    <path d="M35 35 H65" />
    <path d="M35 45 H65" />
    <path d="M15 55 H85" />
    <circle cx="35" cy="20" r="2.5" fill="currentColor" stroke="none" />
    <circle cx="65" cy="20" r="2.5" fill="currentColor" stroke="none" />
  </svg>
);

const BangaloreIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 90 L90 90" />
    <path d="M25 90 V60 H75 V90" />
    <path d="M35 90 V60" />
    <path d="M45 90 V60" />
    <path d="M55 90 V60" />
    <path d="M65 90 V60" />
    <path d="M15 90 V50" />
    <path d="M15 50 Q20 40 25 50 V90" />
    <path d="M75 90 V50" />
    <path d="M75 50 Q80 40 85 50 V90" />
    <path d="M35 60 V45 H65 V60" />
    <path d="M40 45 V35 H60 V45" />
    <path d="M40 35 Q50 20 60 35" />
    <path d="M50 20 V15" />
  </svg>
);

const ChennaiIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 90 H80 V60 H20 V90" />
    <path d="M40 90 V70 H60 V90" />
    <path d="M25 60 H75 L70 50 H30 L25 60" />
    <path d="M30 50 H70 L65 40 H35 L30 50" />
    <path d="M35 40 H65 L60 30 H40 L35 40" />
    <path d="M40 30 H60 L55 20 H45 L40 30" />
    <path d="M45 20 H55 V10 H45 V20" />
    <path d="M42 10 H58" />
    <path d="M48 60 L48 20" />
    <path d="M52 60 L52 20" />
  </svg>
);

const PuneIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 90 L90 90" />
    <path d="M15 90 V45 H40 V90" />
    <path d="M60 90 V45 H85 V90" />
    <path d="M40 90 V50 Q50 35 60 50 V90" />
    <path d="M40 45 H60 V30 H40 V45" />
    <path d="M35 30 H65 V20 H35 V30" />
    <path d="M20 55 V70" />
    <path d="M25 55 V70" />
    <path d="M30 55 V70" />
    <path d="M70 55 V70" />
    <path d="M75 55 V70" />
    <path d="M80 55 V70" />
  </svg>
);

const HyderabadIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 90 L90 90" />
    <path d="M15 90 V40" />
    <path d="M25 90 V40" />
    <path d="M75 90 V40" />
    <path d="M85 90 V40" />
    <path d="M15 40 H25 V30 H15 V40" />
    <path d="M75 40 H85 V30 H75 V40" />
    <path d="M15 30 Q20 15 25 30" />
    <path d="M75 30 Q80 15 85 30" />
    <path d="M25 90 V50 H75 V90" />
    <path d="M40 90 V70 Q50 60 60 70 V90" />
    <path d="M30 60 Q35 50 40 60" />
    <path d="M60 60 Q65 50 70 60" />
  </svg>
);

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
              <div className="space-y-8 text-brand-black/70 text-lg leading-relaxed font-medium">
                <p>
                  JBS Cargo Movers was founded in 2023 by <span className="text-brand-orange font-bold">Lalit Saini</span>, a seasoned logistics expert with years of hands-on experience in cargo and freight operations across India. Built from the ground up in New Delhi, JBS was created with one vision: to make cargo movement across India reliable, secure, fast, and cost-effective — for every business, large or small.
                </p>
                <p className="text-brand-black/50 text-base leading-relaxed">
                  Under Lalit Saini's leadership, JBS has quickly grown into a trusted logistics partner for corporate and commercial clients. We specialise in Air Cargo, Surface Cargo, Train Cargo, Consolidation Services, Door-to-Door Delivery, and Manpower Solutions — serving approximately 100 destinations nationwide through our strong network of airline and logistics partnerships including Blue Dart, Delhivery, Mahindra Logistics, IndiGo Cargo, Air India Cargo, Akasa Air, SpiceJet Cargo, and the Indian Railways Cargo Network.
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

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Operational Edge</h3>
                  <p className="text-white/50 leading-relaxed">
                    Our operational capabilities are driven by a robust internal logistics network and a dedicated fleet, ensuring timely delivery, safety, and operational excellence across all 100+ destinations.
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
              {[
                { name: "Delhi NCR", icon: IndiaGateIcon },
                { name: "Mumbai", icon: GatewayOfIndiaIcon },
                { name: "Pune", icon: PuneIcon },
                { name: "Bangalore", icon: BangaloreIcon },
                { name: "Chennai", icon: ChennaiIcon },
                { name: "Hyderabad", icon: HyderabadIcon },
              ].map((city, i) => (
                <div key={i} className="p-6 bg-white border border-brand-black/5 rounded-2xl text-center group hover:border-brand-orange/30 transition-colors">
                  <city.icon className="w-6 h-6 text-brand-orange mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <span className="font-bold text-brand-black text-sm">{city.name}</span>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
