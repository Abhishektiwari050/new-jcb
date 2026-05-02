"use client";

import { motion } from "framer-motion";
import { ArrowRight, Plane, Truck, Shield } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-brand-black/80" />

      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(232,106,47,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(232,106,47,0.1)_0%,_transparent_50%)]" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Decorative Elements */}
      <div className="absolute top-32 right-[15%] w-2 h-2 rounded-full bg-brand-orange/40 animate-[float_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-40 right-[25%] w-1.5 h-1.5 rounded-full bg-brand-orange/30 animate-[float_5s_ease-in-out_infinite_1s]" />
      <div className="absolute top-[45%] left-[10%] w-1 h-1 rounded-full bg-brand-orange/20 animate-[float_6s_ease-in-out_infinite_2s]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 rounded-full bg-live-green animate-[livepulse_2s_ease-in-out_infinite]" />
              <span className="text-xs text-white/60 font-medium tracking-wide uppercase">
                Shipping Nationwide — 24/7
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-[var(--font-display)] font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] tracking-tight"
            >
              One of India's leading
              <br />
              <span className="text-brand-orange">Air Freight</span>
              <br />
              Consolidators
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/50 text-lg max-w-md leading-relaxed"
            >
              We cover all aspects of the supply chain from Freight consolidation,
              Freight forwarding, Customs brokerage, Warehousing, and Courier services.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/about"
                className="clip-btn bg-brand-orange text-white font-[var(--font-display)] font-bold text-sm px-8 py-4 tracking-wider uppercase hover:bg-brand-orange-dark transition-colors duration-200 flex items-center gap-2"
              >
                About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 text-white font-medium text-sm px-8 py-4 tracking-wider uppercase hover:border-brand-orange hover:text-brand-orange transition-colors duration-200"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-8 pt-4"
            >
              {[
                { val: "28+", label: "States" },
                { val: "70+", label: "Vehicles" },
                { val: "200+", label: "Team" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-[var(--font-display)] font-extrabold text-2xl text-brand-orange">
                    {stat.val}
                  </p>
                  <p className="text-xs text-white/40 uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:block relative"
          >
            {/* Main Card */}
            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              {/* Route Visualization */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs uppercase tracking-widest">
                    Live Tracking
                  </span>
                  <span className="w-2 h-2 rounded-full bg-live-green animate-[livepulse_2s_ease-in-out_infinite]" />
                </div>

                {/* Route Lines */}
                {[
                  { from: "Mumbai", to: "Delhi", mode: "Air", time: "4h 30m" },
                  {
                    from: "Chennai",
                    to: "Bangalore",
                    mode: "Surface",
                    time: "6h 15m",
                  },
                  {
                    from: "Kolkata",
                    to: "Hyderabad",
                    mode: "Air",
                    time: "3h 45m",
                  },
                ].map((route, i) => (
                  <div
                    key={route.from}
                    className="bg-white/5 rounded-xl p-4 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                          {route.mode === "Air" ? (
                            <Plane className="w-4 h-4 text-brand-orange" />
                          ) : (
                            <Truck className="w-4 h-4 text-brand-orange" />
                          )}
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">
                            {route.from} → {route.to}
                          </p>
                          <p className="text-white/30 text-xs">
                            {route.mode} Freight
                          </p>
                        </div>
                      </div>
                      <span className="text-brand-orange text-xs font-medium">
                        {route.time}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-brand-orange rounded-full"
                        style={{ width: `${60 + i * 15}%` }}
                      />
                      <div
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full animate-[dotpulse_2s_ease-in-out_infinite]"
                        style={{ left: `${58 + i * 15}%` }}
                      />
                    </div>
                  </div>
                ))}

                {/* Bottom Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  {[
                    {
                      icon: <Shield className="w-4 h-4" />,
                      label: "Insured",
                      value: "100%",
                    },
                    {
                      icon: <Truck className="w-4 h-4" />,
                      label: "On Time",
                      value: "99.2%",
                    },
                    {
                      icon: <Plane className="w-4 h-4" />,
                      label: "Routes",
                      value: "500+",
                    },
                  ].map((s) => (
                    <div key={s.label} className="text-center space-y-1">
                      <div className="text-brand-orange flex justify-center">
                        {s.icon}
                      </div>
                      <p className="text-white font-bold text-lg">{s.value}</p>
                      <p className="text-white/30 text-[10px] uppercase tracking-wider">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-brand-orange text-white px-5 py-3 rounded-xl shadow-lg shadow-brand-orange/20">
              <p className="font-[var(--font-display)] font-bold text-sm">
                15+ Years
              </p>
              <p className="text-[10px] text-white/70">of Excellence</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-hero to-transparent" />
    </section>
  );
}
