"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-28 overflow-hidden bg-brand-orange">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,_white_0%,_transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,_white_0%,_transparent_50%)]" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="font-[var(--font-display)] font-black text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Ready to Ship <br />
            Your Saman?
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Get a competitive quote in minutes. Our team is standing by to handle
            your cargo with the speed, safety, and scale you deserve.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="bg-white text-brand-orange font-[var(--font-display)] font-bold text-sm px-10 py-5 tracking-wider uppercase hover:bg-brand-black hover:text-white transition-all duration-300 flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919582566995"
              className="bg-transparent text-white border-2 border-white/40 font-bold text-sm px-10 py-5 tracking-wider uppercase hover:bg-white hover:text-brand-orange transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
