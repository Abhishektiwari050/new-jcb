"use client";

import { motion } from "framer-motion";
import { TextRevealByWord } from "../TextReveal";

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
            <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Our Heritage</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-display)] font-extrabold text-white mt-4">
                Redefining Logistics <br />
                Since <span className="text-brand-orange">2009.</span>
            </h2>
        </motion.div>
      </div>
      
      <TextRevealByWord 
        text="Founded in 2009, JBS Cargo Movers has grown from a local courier service in New Delhi to a Pan-India logistics powerhouse. We specialize in speed, safety, and scale, ensuring that whether it's a small parcel or a massive industrial shipment, your Saman is delivered with precision and care."
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
            >
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                <p className="text-white/50 leading-relaxed">
                    To be India's most trusted and technologically advanced cargo partner, bridging the gap between businesses and their customers across every pin code in the country.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
            >
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <p className="text-3xl font-black text-brand-orange">15+</p>
                    <p className="text-white/40 text-xs uppercase mt-2">Years of Service</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <p className="text-3xl font-black text-brand-orange">100k+</p>
                    <p className="text-white/40 text-xs uppercase mt-2">Happy Deliveries</p>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
