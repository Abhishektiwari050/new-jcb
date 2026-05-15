"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle2, MessageCircle } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import ContactSection from "../components/sections/ContactSection";

export default function ContactPageContent() {
  return (
    <main className="bg-white min-h-screen">
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
              Contact JBS
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-display)] font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tighter mb-8"
          >
            Let's Get Your <br />
            <span className="text-brand-orange text-outline">Cargo Moving.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Our logistics experts are available across India to provide safe, smooth, 
            and hassle-free transportation services.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Registered Office */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] border border-brand-black/5 bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-8">
                <MapPin className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-xl font-black text-brand-black mb-4">Registered Office</h3>
              <p className="text-brand-black/60 leading-relaxed font-medium">
                Plot No. 6, Street No. 5, V.P.O. Shahabad Mohammadpur, <br />
                New Delhi – 110061
              </p>
            </motion.div>

            {/* Direct Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] border border-brand-black/5 bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-8">
                <Phone className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-xl font-black text-brand-black mb-4">Call Us</h3>
              <div className="space-y-2">
                <a href="tel:+919582566995" className="block text-brand-black font-bold text-lg hover:text-brand-orange transition-colors">+91 9582566995</a>
                <a href="tel:+919582166995" className="block text-brand-black font-bold text-lg hover:text-brand-orange transition-colors">+91 9582166995</a>
              </div>
            </motion.div>

            {/* Email & Web */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="p-10 rounded-[40px] border border-brand-black/5 bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-8">
                <Mail className="w-7 h-7 text-brand-orange" />
              </div>
              <h3 className="text-xl font-black text-brand-black mb-4">Online</h3>
              <div className="space-y-2">
                <a href="mailto:jbscargomovers@gmail.com" className="block text-brand-black font-bold hover:text-brand-orange transition-colors">jbscargomovers@gmail.com</a>
                <a href="https://www.jbscargomovers.com" className="block text-brand-black font-bold hover:text-brand-orange transition-colors text-sm">www.jbscargomovers.com</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="pb-32">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="bg-brand-black rounded-[60px] overflow-hidden">
               <ContactSection />
            </div>
         </div>
      </section>

      {/* Service Areas Section for Local SEO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Serving Your Neighborhood</span>
            <h2 className="text-4xl md:text-5xl font-[var(--font-display)] font-black text-brand-black mt-4">
              Cargo Services <span className="text-brand-orange">Near You.</span>
            </h2>
            <p className="text-brand-black/50 mt-6 max-w-2xl mx-auto font-medium">
              We provide doorstep pickup and delivery across the entire Delhi NCR region.
              Our local network ensures your cargo moves fast from your location.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Dwarka", "IGI Airport", "Shahabad Mohammadpur", "Gurugram", 
              "Noida", "South Delhi", "West Delhi", "North Delhi",
              "East Delhi", "Rohini", "Janakpuri", "Vasant Kunj",
              "Faridabad", "Ghaziabad", "Manesar", "Aerocity"
            ].map((area, i) => (
              <div key={i} className="flex items-center gap-3 p-6 bg-[#FDFBF7] rounded-2xl border border-brand-black/5 hover:border-brand-orange/30 transition-colors group">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange group-hover:scale-150 transition-transform" />
                <span className="text-brand-black font-bold text-sm tracking-tight">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-brand-orange/5 border border-brand-orange/10 rounded-[32px] text-center">
            <p className="text-brand-black/70 font-medium italic text-sm">
              Don't see your area? We cover the entire Delhi NCR and provide Pan-India movement from our New Delhi hub.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats/Commitment */}
      <section className="py-24 bg-[#FDFBF7] border-t border-brand-black/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
           <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-6">Our Commitment</p>
           <h2 className="text-4xl font-[var(--font-display)] font-black text-brand-black mb-12">"Saman Ho Koi Bhi, JBS Karega Delivery"</h2>
           <div className="flex flex-wrap justify-center gap-12">
              <div className="flex items-center gap-3">
                 <CheckCircle2 className="w-6 h-6 text-brand-orange" />
                 <span className="font-bold text-brand-black">PAN India Connectivity</span>
              </div>
              <div className="flex items-center gap-3">
                 <CheckCircle2 className="w-6 h-6 text-brand-orange" />
                 <span className="font-bold text-brand-black">Dedicated Support</span>
              </div>
              <div className="flex items-center gap-3">
                 <CheckCircle2 className="w-6 h-6 text-brand-orange" />
                 <span className="font-bold text-brand-black">Safe & Secure Handling</span>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
}
