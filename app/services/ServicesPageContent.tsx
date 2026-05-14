"use client";

import { motion } from "framer-motion";
import { 
  Plane, 
  Truck, 
  Train, 
  Package, 
  Warehouse, 
  DoorOpen,
  ArrowRight,
  Cpu,
  BarChart3,
  ShieldCheck,
  Clock4
} from "lucide-react";
import { PremiumServiceCard } from "../components/PremiumServiceCard";
import Navbar from "@/app/components/Navbar";

const detailedServices = [
  {
    title: "Air Cargo",
    description: "Next-day delivery across India using premium airline space. Priority handling for urgent and high-value freight.",
    features: ["Next-Day Delivery", "Real-time Tracking", "Temperature Controlled", "Door-to-Airport"],
    icon: Plane,
    color: "bg-blue-50"
  },
  {
    title: "Surface Freight",
    description: "Full Truck Load (FTL) and Less than Truck Load (LTL) road transport with specialized hub-to-hub network.",
    features: ["GPS Tracked Fleet", "Direct Routes", "Bulk Industrial Cargo", "Scheduled Departures"],
    icon: Truck,
    color: "bg-green-50"
  },
  {
    title: "Train Logistics",
    description: "Economical long-haul transport leveraging the extensive Indian Railways network for large scale movements.",
    features: ["High Volume Capacity", "Eco-friendly Transit", "Station-to-Station", "Inter-modal Sync"],
    icon: Train,
    color: "bg-purple-50"
  }
];

export default function ServicesPageContent() {
  return (
    <div>
      {/* Hero Header */}
      <section className="relative py-48 bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/air-cargo.png" 
            alt="Air Cargo Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_rgba(232,106,47,0.2)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">
                Our Capabilities
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-[var(--font-display)] font-black text-5xl md:text-7xl text-white leading-tight tracking-tighter mb-8"
            >
              Moving Your World, <br />
              <span className="text-brand-orange text-outline">Without Limits.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/50 text-xl leading-relaxed"
            >
              From complex pharmaceutical chains to heavy machinery, our specialized 
              logistics infrastructure ensures your cargo is never out of reach.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PremiumServiceCard
              index={0}
              title="Air Cargo"
              description="Premium expedited shipping using India's leading airline networks for critical and high-value cargo."
              Icon={Plane}
              bgImage="/images/air-cargo-v2.png"
            />
            <PremiumServiceCard
              index={1}
              title="Surface Freight"
              description="Reliable hub-to-hub road transport with specialized vehicles for bulk and industrial shipments."
              Icon={Truck}
              bgImage="/images/surface-cargo-v2.png"
            />
            <PremiumServiceCard
              index={2}
              title="Train Logistics"
              description="High-volume স্টেশন-to-স্টেশন logistics leveraging the massive scale of Indian Railways."
              Icon={Train}
              bgImage="/images/train-cargo-v2.png"
            />
            <PremiumServiceCard
              index={3}
              title="Warehousing"
              description="Strategic storage solutions with real-time inventory management and secure distribution hubs."
              Icon={Warehouse}
              bgImage="/images/warehouse-v2.png"
            />
            <PremiumServiceCard
              index={4}
              title="Consolidation"
              description="Smart groupage services reducing costs by bundling smaller shipments into optimized loads."
              Icon={Package}
            />
            <PremiumServiceCard
              index={5}
              title="Door-to-Door"
              description="Seamless end-to-end logistics handling everything from origin pickup to final destination delivery."
              Icon={DoorOpen}
            />
          </div>
        </div>
      </section>

      {/* Deep Dive Specs */}
      <section className="py-32 bg-brand-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-[var(--font-display)] font-black text-white mb-6 leading-tight">
                  Advanced <br />
                  <span className="text-brand-orange">Fleet & Tech.</span>
                </h2>
                <p className="text-white/40 text-lg">
                  We invest in the latest tracking and environmental technology to 
                  ensure your cargo is handled with precision.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Cpu, title: "SIM Tracking", desc: "Real-time location updates via advanced SIM-based tracking." },
                  { icon: BarChart3, title: "Data Loggers", desc: "Automated temperature and humidity logs for sensitive cargo." },
                  { icon: ShieldCheck, title: "SLA Control", desc: "99.8% on-time performance monitored by dedicated ops." },
                  { icon: Clock4, title: "24/7 Monitoring", desc: "Round-the-clock visibility through our central dashboard." }
                ].map((tech, i) => (
                  <div key={i} className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/20 flex items-center justify-center">
                      <tech.icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <h4 className="text-white font-bold">{tech.title}</h4>
                    <p className="text-white/30 text-xs leading-relaxed">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 space-y-8">
                <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-6">Fleet Specifications</h3>
                <div className="space-y-6">
                  {[
                    { label: "GPS Reefers", detail: "14ft, 17ft, 20ft, 24ft, 32ft" },
                    { label: "Dry Containers", detail: "Multi-size high-cube options" },
                    { label: "Express Vans", detail: "Dedicated last-mile delivery fleet" },
                    { label: "Heavy Flatbeds", detail: "Specialized for ODC cargo" }
                  ].map((spec, i) => (
                    <div key={i} className="flex items-center justify-between group">
                      <span className="text-white/50 text-sm font-medium">{spec.label}</span>
                      <div className="h-px bg-white/10 flex-1 mx-4 group-hover:bg-brand-orange/30 transition-colors" />
                      <span className="text-white font-bold text-sm">{spec.detail}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                   <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-2xl p-6">
                      <p className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">Customized Logistics</p>
                      <p className="text-white/60 text-sm">Need a specialized setup? We design custom transit models for pharmaceuticals and high-value tech.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
