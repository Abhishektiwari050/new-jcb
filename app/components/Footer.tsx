"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  MessageCircle,
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
    { label: "Coverage", href: "/coverage" },
    { label: "Tracking", href: "/tracking" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white text-brand-black pt-12 pb-8 border-t border-brand-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-10 relative z-10">
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

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://wa.me/919582566995"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-black/5 flex items-center justify-center text-brand-black hover:bg-brand-orange hover:text-white transition-all duration-300 group"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://www.justdial.com/Delhi/Jbs-Cargo-Movers-South-West-Delhidelhi-110061-Shahbad-Mohammadpur/011PXX11-XX11-250304143253-J2F3_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-black/5 flex items-center justify-center text-brand-black hover:bg-brand-orange hover:text-white transition-all duration-300 group"
                title="Justdial"
              >
                <span className="text-[12px] font-black group-hover:scale-110 transition-transform">JD</span>
              </a>
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
            © 2026 JBS Cargo Movers. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-brand-black/20 text-xs font-bold uppercase tracking-widest">
              Designed & Built by
            </span>
            <a href="https://vistar.tech" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity group">
              <img src="/images/vistar-logo.svg" alt="Vistar Tech" className="h-5 w-auto transition-all duration-300" />
              <span className="text-brand-black/40 text-[10px] font-black uppercase tracking-tighter group-hover:text-brand-black transition-colors">Vistar.tech</span>
            </a>
          </div>
        </div>
      </div>

      {/* Large Background Brand Name */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden pointer-events-none select-none">
        <h2 className="text-[20vw] font-black text-brand-black/[0.015] leading-none whitespace-nowrap tracking-tighter uppercase text-center">
          JBS CARGO MOVERS
        </h2>
      </div>
    </footer>
  );
}
