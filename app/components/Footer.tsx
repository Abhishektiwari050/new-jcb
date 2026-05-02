"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "Domestic Air Freight", href: "/services" },
    { label: "International Air Freight", href: "/services" },
    { label: "International Ocean Freight", href: "/services" },
    { label: "Global Logistics", href: "/services" },
  ],
  information: [
    { label: "About Us", href: "/about" },
    { label: "Coverage", href: "/#coverage" },
    { label: "Careers", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
  ],
  usefulLinks: [
    { label: "Tracking", href: "/tracking" },
    { label: "Client Login", href: "/login" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-black/60 text-white pt-20 pb-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Column 1 — About/Logo */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-brand-orange clip-logo flex items-center justify-center">
                <span className="font-[var(--font-display)] font-extrabold text-white text-xs">
                  JBS
                </span>
              </div>
              <span className="font-[var(--font-display)] font-extrabold text-lg">
                JBS Cargo
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              JBS Cargo, a domestic IATA approved cargo agency offers and handles all types of Air cargo movement across the country.
            </p>
          </div>

          {/* Column 2 — Services */}
          <div className="space-y-6">
            <h3 className="font-[var(--font-display)] font-bold text-lg tracking-wide border-b border-brand-orange/30 inline-block pb-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-brand-orange transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Information */}
          <div className="space-y-6">
            <h3 className="font-[var(--font-display)] font-bold text-lg tracking-wide border-b border-brand-orange/30 inline-block pb-2">
              Information
            </h3>
            <ul className="space-y-3">
              {footerLinks.information.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-brand-orange transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Useful Links */}
          <div className="space-y-6">
            <h3 className="font-[var(--font-display)] font-bold text-lg tracking-wide border-b border-brand-orange/30 inline-block pb-2">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-brand-orange transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Contact */}
          <div className="space-y-6">
            <h3 className="font-[var(--font-display)] font-bold text-lg tracking-wide border-b border-brand-orange/30 inline-block pb-2">
              Our Contacts
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-brand-orange" />
                <span>
                  Mumbai, Maharashtra<br />
                  India — 400001
                </span>
              </div>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-brand-orange transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-brand-orange" />
                <span>+91 123 456 7890</span>
              </a>
              <a
                href="mailto:info@jbscargo.com"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-brand-orange transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-brand-orange" />
                <span>info@jbscargo.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} JBS Cargo Movers. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm">
            Designed to spec.
          </div>
        </div>
      </div>
    </footer>
  );
}
