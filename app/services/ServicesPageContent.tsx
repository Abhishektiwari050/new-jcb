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
      <section className="relative py-48 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(232,106,47,0.15)_0%,_transparent_70%)]" />
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
      <section className="py-32 bg-white">
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

      {/* Why Choose Us Highlight */}
      <section className="py-24 bg-brand-black text-white">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <h2 className="text-4xl font-[var(--font-display)] font-black mb-8">
                    Why Choose <span className="text-brand-orange">JBS.</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                     {[
                       "Fast & Reliable Delivery Services",
                       "PAN India Cargo Connectivity",
                       "Safe & Secure Cargo Handling",
                       "Dedicated Customer Support",
                       "Economical & Competitive Pricing",
                       "Customized Logistics Solutions",
                       "Professional Logistics Management",
                       "Timely & Committed Deliveries"
                     ].map((benefit, i) => (
                       <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5" />
                          <span className="text-white/70 text-sm font-medium">{benefit}</span>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="bg-white/5 border border-white/10 p-12 rounded-[40px]">
                  <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4">Our Commitment</p>
                  <p className="text-xl text-white/80 leading-relaxed font-medium">
                    "Saman Ho Koi Bhi, JBS Karega Delivery"
                  </p>
                  <p className="text-white/40 mt-6 leading-relaxed">
                    At JBS Cargo Movers, we offer customized logistics solutions designed to meet 
                    the growing demands of corporate and commercial clients.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
