"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Truck, Users, Briefcase, Globe2 } from "lucide-react";

const stats = [
  { value: 1545, suffix: "", label: "Projects Done", icon: <Briefcase className="w-8 h-8" /> },
  { value: 850, suffix: "", label: "Clients Worldwide", icon: <Globe2 className="w-8 h-8" /> },
  { value: 70, suffix: "", label: "Owned Vehicles", icon: <Truck className="w-8 h-8" /> },
  { value: 200, suffix: "", label: "People In Team", icon: <Users className="w-8 h-8" /> },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
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
    <div ref={ref} className="font-[var(--font-display)] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-2">
      {count}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative bg-brand-orange/80 py-20 overflow-hidden backdrop-blur-[2px]">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-4"
            >
              <div className="text-white/80 mb-6 flex justify-center">
                {stat.icon}
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-white font-medium uppercase tracking-wider text-sm mt-4">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
