"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe, MessageSquare, Clock } from "lucide-react";
import ContactSection from "../components/sections/ContactSection";
import Navbar from "@/app/components/Navbar";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Our Ops",
    details: ["+91 9582566995", "+91 9582166995"],
    sub: "Available 24/7 for urgent cargo."
  },
  {
    icon: Mail,
    title: "Email Support",
    details: ["jbscargomovers@gmail.com"],
    sub: "Quotes within 4 business hours."
  },
  {
    icon: MapPin,
    title: "Headquarters",
    details: ["V.P.O. Shahabad Mohammadpur", "New Delhi – 110061"],
    sub: "Central hub for all operations."
  }
];

export default function ContactPageContent() {
  return (
    <div>
      {/* Hero Header */}
      <section className="relative py-48 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/train-cargo.png" 
            alt="Contact Background" 
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
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">
              24/7 Response
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-display)] font-black text-5xl md:text-7xl lg:text-8xl text-white leading-tight tracking-tighter mb-8"
          >
            Let's Start <br />
            <span className="text-brand-orange">Shipping.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Our logistics experts are ready to handle your specialized cargo needs. 
            Get in touch for custom quotes or real-time operational support.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {contactMethods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[40px] border border-brand-black/5 hover:border-brand-orange/30 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-500 mb-8">
                  <method.icon className="w-7 h-7 text-brand-orange group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-black text-brand-black mb-4">{method.title}</h3>
                <div className="space-y-1 mb-4">
                  {method.details.map((detail, j) => (
                    <p key={j} className="text-brand-black font-bold">{detail}</p>
                  ))}
                </div>
                <p className="text-brand-black/40 text-xs font-bold uppercase tracking-widest">{method.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Integration of main contact form section */}
          <div className="bg-white rounded-[60px] border border-brand-black/5 overflow-hidden shadow-sm">
             <ContactSection />
          </div>
        </div>
      </section>

      {/* Quick Help Strip */}
      <section className="py-16 bg-brand-orange text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-2xl font-black">4-Hour SLA</p>
                <p className="text-white/70 font-medium tracking-wide">On all custom quote requests received during business hours.</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-2xl font-black">Direct WhatsApp</p>
                <p className="text-white/70 font-medium tracking-wide">Chat with our fleet managers instantly for live updates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
