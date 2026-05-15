"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Preet Saini",
    company: "Commercial Client",
    role: "Verified Business Owner",
    review:
      "JBS Cargo Movers Made My shipping experience easy and stress-free. From the moment I contacted them for a quote to the final delivery of my shipment, their team was professional, efficient, and well-mannered.",
    initials: "PS",
  },
  {
    name: "Negi",
    company: "Business Partner",
    role: "Verified User",
    review:
      "Very professional work ethic. Service are upto mark and delivery time is as per pre defined schedule. Staff was cooperative and handled our cargo with great care.",
    initials: "N",
  },
  {
    name: "Elizabeth",
    company: "Corporate Client",
    role: "Regular Shipper",
    review:
      "I've used several cargo companies before, but JBS CARGO MOVERS is by far the best. Their air cargo service is exceptionally fast and reliable. High-level professionalism and transparency in pricing.",
    initials: "E",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const t = testimonials[current];

  return (
    <section className="py-16 bg-brand-black text-white overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-display)] font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight"
          >
            What Our Clients <span className="text-brand-orange">Say.</span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative min-h-[320px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-center"
            >
              {/* Large quote icon */}
              <Quote className="w-16 h-16 text-brand-orange/20 mx-auto mb-8" />

              {/* Review text */}
              <p className="text-xl md:text-2xl text-white/70 italic leading-relaxed max-w-3xl mx-auto mb-12 font-medium">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Stars */}
              <div className="flex gap-1 justify-center mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-5 h-5 fill-brand-orange text-brand-orange"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-brand-orange/20 border-2 border-brand-orange/40 flex items-center justify-center">
                  <span className="text-brand-orange font-black text-lg">
                    {t.initials}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-[var(--font-display)] font-bold text-lg">
                    {t.name}
                  </p>
                  <p className="text-brand-orange text-sm font-medium">
                    {t.role}
                  </p>
                  <p className="text-white/30 text-xs">{t.company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-orange hover:bg-brand-orange/10 transition-all duration-300"
            aria-label="Previous testimonial"
            suppressHydrationWarning
          >
            <ChevronLeft className="w-5 h-5 text-white/60" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-brand-orange"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
                suppressHydrationWarning
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-brand-orange hover:bg-brand-orange/10 transition-all duration-300"
            aria-label="Next testimonial"
            suppressHydrationWarning
          >
            <ChevronRight className="w-5 h-5 text-white/60" />
          </button>
        </div>
      </div>
    </section>
  );
}
