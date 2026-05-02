"use client";

import { motion } from "framer-motion";
import { Plane, Ship, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: <Plane className="w-8 h-8" />,
    image: "/images/domestic_air_freight.png",
    title: "Domestic Air Freight",
    description:
      "JBS Cargo, a domestic IATA approved cargo agency offers and handles all types of Air cargo movement across the country. We have strategically placed offices to ensure wide network connectivity.",
    href: "/services",
  },
  {
    icon: <Plane className="w-8 h-8" />,
    image: "/images/intl_air_freight.png",
    title: "International Air Freight",
    description:
      "With years of Global networking and experienced personnel, we have developed long term relationships with all the leading airlines along with a strong client base.",
    href: "/services",
  },
  {
    icon: <Ship className="w-8 h-8" />,
    image: "/images/ocean_freight.png",
    title: "International Ocean Freight",
    description:
      "We offer a wide spectrum of services that are customized to meet the freight requirements of clients, delivering efficiency and effectiveness with every logistic intervention.",
    href: "/services",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    image: "/images/global_logistics.png",
    title: "Global Logistics",
    description:
      "With its core business competencies in Air freight and logistics solutions, we provide efficient, trusted & personalised services to a large array of clientele 24x7.",
    href: "/services",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-brand-black/80 py-20 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-display)] font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-16 h-1 bg-brand-orange mx-auto my-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/80 text-sm font-medium tracking-wide uppercase"
          >
            Our Services
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image Box */}
              <div className="relative w-full h-48 bg-brand-black/5 overflow-hidden flex items-center justify-center text-brand-orange/20">
                <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute top-4 left-4 z-20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-[var(--font-display)] font-bold text-lg text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Read More Button */}
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-bold text-xs uppercase tracking-wider py-3 px-4 clip-btn hover:bg-brand-orange-dark transition-colors"
                >
                  Read More
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
