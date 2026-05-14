"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-bg-white relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="font-[var(--font-display)] font-extrabold text-3xl sm:text-4xl text-brand-black tracking-tight mb-4">
                Get in Touch
              </h2>
              <div className="w-16 h-1 bg-brand-orange mb-6" />
              <p className="text-text-secondary text-lg">
                Share your shipment details and our team will reach out within 4 business hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center rounded-xl flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <p className="text-sm text-text-hint font-medium uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-text-primary font-medium text-lg">+91 9582566995 / +91 9582166995</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center rounded-xl flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <p className="text-sm text-text-hint font-medium uppercase tracking-wider mb-1">Email</p>
                  <p className="text-text-primary font-medium text-lg">jbscargomovers@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center rounded-xl flex-shrink-0">
                  <Globe className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <p className="text-sm text-text-hint font-medium uppercase tracking-wider mb-1">Website</p>
                  <p className="text-text-primary font-medium text-lg">www.jbscargomovers.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-orange/10 flex items-center justify-center rounded-xl flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <p className="text-sm text-text-hint font-medium uppercase tracking-wider mb-1">Address</p>
                  <p className="text-text-primary font-medium text-lg max-w-xs">Plot No. 6, Street No. 5, V.P.O. Shahabad Mohammadpur, New Delhi – 110061</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border-light">
              {submitted ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-live-green/10 text-live-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-[var(--font-display)] font-bold text-2xl text-brand-black">Thank you</h3>
                  <p className="text-text-secondary">Our team will contact you within 4 business hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-brand-orange font-medium text-sm hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form suppressHydrationWarning onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-text-primary">Your Name</label>
                      <input suppressHydrationWarning required type="text" className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all bg-surface-light/50" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-text-primary">Phone Number</label>
                      <input suppressHydrationWarning required type="tel" className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all bg-surface-light/50" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service-type" className="text-sm font-medium text-text-primary">Service Type</label>
                    <select 
                      suppressHydrationWarning
                      id="service-type"
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all bg-surface-light/50 text-text-primary"
                    >
                      <option value="">Select a service</option>
                      <option value="air">Air Cargo</option>
                      <option value="surface">Surface Cargo</option>
                      <option value="train">Train Cargo</option>
                      <option value="consolidation">Consolidation</option>
                      <option value="door">Door-to-Door</option>
                      <option value="manpower">Manpower</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-text-primary">Origin City</label>
                      <input suppressHydrationWarning required type="text" className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all bg-surface-light/50" placeholder="e.g. New Delhi" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-text-primary">Destination City</label>
                      <input suppressHydrationWarning required type="text" className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all bg-surface-light/50" placeholder="e.g. Mumbai" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-text-primary">Approximate Weight or Volume</label>
                    <input suppressHydrationWarning required type="text" className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all bg-surface-light/50" placeholder="e.g. 500 KG / 2 CBM" />
                  </div>

                  <button 
                    suppressHydrationWarning
                    type="submit"
                    className="w-full bg-brand-orange text-white font-bold tracking-wider uppercase py-4 rounded-lg mt-4 hover:bg-brand-orange-dark transition-colors clip-btn-sm"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
