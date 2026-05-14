"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Truck, Users, Briefcase, Globe2 } from "lucide-react";

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Destinations",
    icon: <Globe2 className="w-7 h-7" />,
  },
  {
    value: 6,
    suffix: "",
    label: "Core Services",
    icon: <Briefcase className="w-7 h-7" />,
  },
  {
    value: 8,
    suffix: "",
    label: "Airline Partners",
    icon: <Users className="w-7 h-7" />,
  },
  {
    value: 24,
    suffix: "/7",
    label: "Operations",
    icon: <Truck className="w-7 h-7" />,
  },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div
      ref={ref}
      className="font-[var(--font-display)] font-black text-5xl sm:text-6xl lg:text-7xl text-white leading-none"
    >
      {count}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative bg-brand-black py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-brand-orange/60 mb-6 flex justify-center group-hover:text-brand-orange group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="w-8 h-0.5 bg-brand-orange/30 mx-auto my-4" />
              <p className="text-white/50 font-bold uppercase tracking-wider text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
