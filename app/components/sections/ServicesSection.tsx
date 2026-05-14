"use client";

import { motion } from "framer-motion";
import { Plane, Truck, Train, Package, Warehouse, DoorOpen, ArrowRight, Shield, Users } from "lucide-react";
import { PremiumServiceCard } from "../PremiumServiceCard";
import { cn } from "@/lib/utils";

const Skeleton = ({ className, children }: { className?: string; children?: React.ReactNode }) => (
  <div className={cn("flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden", className)}>
    {children}
  </div>
);

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">Our Capabilities</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-display)] font-extrabold text-brand-black leading-tight"
            >
              Comprehensive <br />
              <span className="text-brand-orange">Logistics Solutions.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-black/60 max-w-sm text-lg leading-relaxed"
          >
            From air-speed delivery to secure warehousing, we provide a full spectrum of cargo services tailored for Indian businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <PremiumServiceCard
              key={i}
              index={i}
              title={item.title}
              description={item.description}
              Icon={item.icon}
              bgImage={item.bgImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const items = [
  {
    title: "Air Cargo",
    description: "Expedited next-day delivery across 100+ cities using India's leading airline networks. Perfect for time-sensitive, high-value shipments.",
    icon: Plane,
    bgImage: "/images/air-cargo-v2.png",
  },
  {
    title: "Surface Freight",
    description: "Reliable and cost-effective road transport with a dedicated fleet ensuring safe delivery of bulk and industrial cargo.",
    icon: Truck,
    bgImage: "/images/surface-cargo-v2.png",
  },
  {
    title: "Train Logistics",
    description: "Leverage the power of Indian Railways for heavy-volume long-haul transport. Eco-friendly and highly efficient.",
    icon: Train,
    bgImage: "/images/train-cargo-v2.png",
  },
  {
    title: "Warehousing",
    description: "Strategic storage solutions with advanced inventory management. Safe, secure, and ready for rapid distribution.",
    icon: Warehouse,
    bgImage: "/images/warehouse-v2.png",
  },
  {
    title: "Consolidation",
    description: "Smart groupage services that bundle smaller shipments into full loads, significantly reducing your overall logistics costs.",
    icon: Package,
  },
  {
    title: "Door-to-Door",
    description: "End-to-end logistics where we handle everything from pickup at your origin to final delivery at your customer's doorstep.",
    icon: DoorOpen,
  },
];
