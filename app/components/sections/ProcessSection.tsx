"use client";

import React from "react";
import { CardStack } from "../CardStack";
import { Package, Truck, CheckCircle, Search } from "lucide-react";
import { motion } from "framer-motion";

const content = [
  {
    title: "Doorstep Pickup",
    description:
      "Schedule a pickup through our portal or WhatsApp. Our professional team arrives at your location, performs basic QC, and secures your Saman for transit.",
    content: (
      <div className="h-full w-full bg-brand-orange/10 flex items-center justify-center overflow-hidden">
        <img 
          src="/images/pickup.png" 
          alt="Doorstep Pickup" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
    ),
  },
  {
    title: "Smart Consolidation",
    description:
      "Your cargo is brought to our central New Delhi hub. Here, we consolidate shipments based on destination and urgency to ensure cost-efficiency and maximum safety.",
    content: (
      <div className="h-full w-full flex items-center justify-center bg-brand-black/5 overflow-hidden">
        <img 
          src="/images/consolidation.png" 
          alt="Smart Consolidation" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
    ),
  },
  {
    title: "Rapid Transit",
    description:
      "Depending on your choice (Air, Surface, or Rail), your cargo is dispatched via our priority channels. Real-time GPS tracking keeps you informed every mile of the way.",
    content: (
      <div className="h-full w-full bg-brand-orange/10 flex items-center justify-center overflow-hidden">
        <img 
          src="/images/transit.png" 
          alt="Rapid Transit" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
    ),
  },
  {
    title: "Safe Delivery",
    description:
      "Our last-mile delivery fleet ensures your cargo reaches the recipient's doorstep safely. Digital proof of delivery is updated instantly on our system.",
    content: (
      <div className="h-full w-full bg-white flex items-center justify-center overflow-hidden">
        <img 
          src="/images/delivery.png" 
          alt="Safe Delivery" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-[#FDFBF7]">
      {/* Section header — stays in normal flow */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">
            Our Method
          </span>
        </motion.div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-display)] font-extrabold text-brand-black">
          How We Move <br />
          <span className="text-brand-orange">Your Saman.</span>
        </h2>
      </div>

      {/* Stacking cards — uses the full width with padding */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <CardStack items={content} />
      </div>
    </section>
  );
}
