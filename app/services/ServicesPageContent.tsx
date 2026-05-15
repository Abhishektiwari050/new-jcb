"use client";

import { motion } from "framer-motion";
import { 
  Plane, 
  Truck, 
  Train, 
  Package, 
  DoorOpen,
  Users,
  CheckCircle2
} from "lucide-react";
import Navbar from "@/app/components/Navbar";

const services = [
  {
    title: "Air Cargo Services",
    description: "Fast and secure air freight solutions for urgent and time-sensitive shipments across India.",
    icon: Plane,
    color: "bg-blue-50/50"
  },
  {
    title: "Surface Cargo Services",
    description: "Reliable and economical transportation solutions through express and dedicated surface cargo movement.",
    icon: Truck,
    color: "bg-green-50/50"
  },
  {
    title: "Train Cargo Services",
    description: "Efficient railway cargo solutions for commercial and bulk consignments with cost-effective operations.",
    icon: Train,
    color: "bg-orange-50/50"
  },
  {
    title: "Consolidation Services",
    description: "Cargo consolidation solutions to optimize transportation costs and improve delivery efficiency.",
    icon: Package,
    color: "bg-purple-50/50"
  },
  {
    title: "Door-to-Door Delivery",
    description: "Complete pickup and delivery support from origin to destination with safe handling and timely delivery.",
    icon: DoorOpen,
    color: "bg-red-50/50"
  },
  {
    title: "Manpower Services",
    description: "Professional manpower support for warehouse handling, logistics operations, loading-unloading, and distribution activities.",
    icon: Users,
    color: "bg-emerald-50/50"
  }
];

export default function ServicesPageContent() {
  return (
    <div>
      <Navbar theme="dark" />
      {/* Hero Header */}
      <section className="relative py-32 bg-brand-black overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero_bg.png" 
            alt="Services Background" 
            className="w-full h-full object-cover opacity-40 grayscale-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/80 to-brand-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(232,106,47,0.15)_0%,_transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            className="font-[var(--font-display)] font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tighter mb-8"
          >
            Logistics Solved. <br />
            <span className="text-brand-orange text-outline text-[4vw]">Nationwide Delivery.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-xl leading-relaxed max-w-3xl mx-auto"
          >
            We provide complete Door-to-Door cargo movement services through Air, Surface, 
            and Rail transportation modes, ensuring efficient and timely deliveries.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group p-10 rounded-[40px] border border-brand-black/5 hover:border-brand-orange/30 hover:shadow-2xl transition-all duration-500 bg-white relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors duration-500">
                  <service.icon className="w-8 h-8 text-brand-orange group-hover:text-white transition-colors duration-500" />
                </div>
                
                <h3 className="text-2xl font-black text-brand-black mb-4">{service.title}</h3>
                <p className="text-brand-black/50 leading-relaxed text-sm mb-8">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest">
                  <span>Learn More</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}
