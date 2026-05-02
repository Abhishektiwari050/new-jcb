"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Tracking", href: "/tracking" },
  { label: "Contact Us", href: "/contact" },
  { label: "Login", href: "/login" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-black/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        {/* Top Contact Bar (Hides on scroll for a cleaner sticky nav) */}
        <div className={`hidden lg:block w-full border-b border-white/10 transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100"}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-end gap-6 text-xs text-white/80 font-medium">
            <a href="mailto:info@jbscargo.in" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
              <Mail className="w-3.5 h-3.5" />
              info@jbscargo.in
            </a>
            <div className="w-px h-4 bg-white/20" />
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +91 123 456 7890
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-brand-orange clip-logo" />
                <span className="absolute inset-0 flex items-center justify-center font-[var(--font-display)] font-extrabold text-white text-sm tracking-wider">
                  JBS
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-[var(--font-display)] font-extrabold text-white text-lg tracking-wide group-hover:text-brand-orange transition-colors">
                  JBS
                </span>
                <span className="text-[10px] text-text-hint tracking-[0.25em] uppercase -mt-1">
                  Cargo Movers
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-brand-orange transition-colors duration-200 tracking-wide uppercase font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-brand-black z-50 lg:hidden flex flex-col"
              >
                {/* Mobile Header */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
                  <Link
                    href="/"
                    className="font-[var(--font-display)] font-extrabold text-white text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    JBS<span className="text-brand-orange">.</span>
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/60 hover:text-white"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Links */}
                <div className="flex-1 px-6 py-8 space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-4 text-lg text-white/80 hover:text-brand-orange transition-colors border-b border-white/5 font-medium tracking-wide"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
