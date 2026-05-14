"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function ContactCTASection() {
  return (
    <section id="contact" className="bg-brand-black py-32 relative overflow-hidden">
      {/* Dark Map Background Overlay */}
      <div className="absolute inset-0 grayscale invert opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black z-10" />
        <div className="w-full h-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/82.4788,23.1765,4,0/1280x800?access_token=pk.eyJ1IjoiYWJoaXNoZWt0aXdhcmkiLCJhIjoiY2x0eHpxZ2Z4MHBseTJpbmpxZ2Z4MHBseSJ9.your_token')] bg-cover bg-center" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Branding & Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-[10px] font-bold text-brand-orange uppercase tracking-[0.4em]">
                Strategic Partnership
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tighter uppercase italic">
                Ready to <br />
                <span className="text-brand-orange">Command?</span>
              </h2>
              <p className="text-white/40 text-xl font-body max-w-md leading-relaxed">
                Connect with our mission control for custom enterprise logistics protocols and express routing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange clip-corner">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Immediate Command</div>
                  <div className="text-lg font-display font-black text-white tracking-tight">+91 91523 00411</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-brand-orange clip-corner">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-[9px] font-bold text-white/30 uppercase tracking-widest">Ops Coordination</div>
                  <div className="text-lg font-display font-black text-white tracking-tight">sales@jbscargo.in</div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-live-green rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest italic">Operations active in 1,200+ pin codes</span>
              </div>
            </div>
          </div>

          {/* Right: Floating Contact Form */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-12 clip-corner shadow-2xl relative"
            >
              {/* Form Decorative Element */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-orange clip-logo -z-10 animate-spin-slow opacity-20" />
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[9px] font-bold text-brand-black/40 uppercase tracking-widest">Your Name</label>
                    <input 
                      id="name"
                      type="text" 
                      className="w-full bg-[#F8F8F8] border-none p-4 text-sm font-body focus:ring-2 focus:ring-brand-orange transition-all"
                      placeholder="Commander Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[9px] font-bold text-brand-black/40 uppercase tracking-widest">Email Address</label>
                    <input 
                      id="email"
                      type="email" 
                      className="w-full bg-[#F8F8F8] border-none p-4 text-sm font-body focus:ring-2 focus:ring-brand-orange transition-all"
                      placeholder="ops@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-[9px] font-bold text-brand-black/40 uppercase tracking-widest">Service Protocol</label>
                  <select id="service" className="w-full bg-[#F8F8F8] border-none p-4 text-sm font-body focus:ring-2 focus:ring-brand-orange transition-all appearance-none">
                    <option>Domestic Air Freight</option>
                    <option>Express Surface</option>
                    <option>FTL / Bulk Movement</option>
                    <option>Pharma Cold Chain</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[9px] font-bold text-brand-black/40 uppercase tracking-widest">Mission Details</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-[#F8F8F8] border-none p-4 text-sm font-body focus:ring-2 focus:ring-brand-orange transition-all resize-none"
                    placeholder="Briefly describe your logistics challenge..."
                  />
                </div>

                <button className="w-full bg-brand-black text-white p-5 text-[10px] font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-brand-orange transition-all group clip-corner">
                  Initiate Protocol <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Float Stats */}
            <div className="absolute -bottom-8 -left-8 bg-brand-orange p-6 clip-corner shadow-xl hidden md:block">
              <div className="text-3xl font-display font-black text-white leading-none tracking-tighter italic">60m</div>
              <div className="text-[8px] font-bold text-white/60 uppercase tracking-widest mt-1">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
