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
    { label: "Air Cargo Services", href: "/services" },
    { label: "Surface Cargo Services", href: "/services" },
    { label: "Train Cargo Services", href: "/services" },
    { label: "Consolidation Services", href: "/services" },
    { label: "Door-to-Door Delivery", href: "/services" },
    { label: "Manpower Services", href: "/services" },
  ],
  information: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/contact" },
    { label: "Contact Us", href: "/contact" },
  ],
  usefulLinks: [
    { label: "Tracking", href: "/tracking" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white text-brand-black pt-20 pb-8 border-t border-brand-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 relative z-10">
          {/* Column 1 — Logo & Tagline */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center mb-4 gap-3">
              <img
                src="/images/logo.png"
                alt="JBS Logo"
                className="h-14 w-auto object-contain object-left"
              />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter leading-none">JBS CARGO</span>
                <span className="text-[10px] font-bold text-brand-orange tracking-widest uppercase mt-1">Movers</span>
              </div>
            </div>
            <p className="text-brand-black/50 text-sm leading-relaxed font-medium">
              Saman Ho Koi Bhi, JBS Karega Delivery.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-live-green animate-pulse" />
              <span className="text-[10px] text-live-green font-bold uppercase tracking-widest">
                Operations Active
              </span>
            </div>
          </div>
          
          {/* Column 2 — Services */}
          <div className="space-y-5">
            <h3 className="font-[var(--font-display)] font-bold text-sm tracking-wider uppercase text-brand-black/80">
              Our Services
            </h3>
            <div className="w-8 h-0.5 bg-brand-orange" />
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-brand-black/50 hover:text-brand-orange transition-colors font-medium"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Information */}
          <div className="space-y-5">
            <h3 className="font-[var(--font-display)] font-bold text-sm tracking-wider uppercase text-brand-black/80">
              Information
            </h3>
            <div className="w-8 h-0.5 bg-brand-orange" />
            <ul className="space-y-3">
              {footerLinks.information.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-brand-black/50 hover:text-brand-orange transition-colors font-medium"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Useful Links */}
          <div className="space-y-5">
            <h3 className="font-[var(--font-display)] font-bold text-sm tracking-wider uppercase text-brand-black/80">
              Useful Links
            </h3>
            <div className="w-8 h-0.5 bg-brand-orange" />
            <ul className="space-y-3">
              {footerLinks.usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-brand-black/50 hover:text-brand-orange transition-colors font-medium"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Contact */}
          <div className="space-y-5">
            <h3 className="font-[var(--font-display)] font-bold text-sm tracking-wider uppercase text-brand-black/80">
              Contact Us
            </h3>
            <div className="w-8 h-0.5 bg-brand-orange" />
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-brand-black/50 font-medium">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-orange" />
                <span>
                  Plot No. 6, Street No. 5, V.P.O. Shahabad
                  <br />
                  Mohammadpur, New Delhi – 110061
                </span>
              </div>
              <a
                href="tel:+919582566995"
                className="flex items-center gap-3 text-sm text-brand-black/50 hover:text-brand-orange transition-colors font-medium"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-brand-orange" />
                <span>+91 9582566995 / 9582166995</span>
              </a>
              <a
                href="mailto:jbscargomovers@gmail.com"
                className="flex items-center gap-3 text-sm text-brand-black/50 hover:text-brand-orange transition-colors font-medium"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-brand-orange" />
                <span>jbscargomovers@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-black/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-brand-black/30 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} JBS Cargo Movers. All Rights Reserved.
          </p>
          <p className="text-brand-black/20 text-xs font-bold uppercase tracking-widest">
            Designed & Built with precision.
          </p>
        </div>
      </div>

      {/* Large Background Brand Name */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none">
        <h2 className="text-[20vw] font-black text-brand-black/[0.18] leading-none whitespace-nowrap tracking-tighter uppercase text-center">
          JBS CARGO MOVERS
        </h2>
      </div>
    </footer>
  );
}
