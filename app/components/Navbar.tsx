"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

interface NavbarProps {
  theme?: "light" | "dark";
}

export default function Navbar({ theme = "light" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isDark = theme === "dark";

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
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-brand-black/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        {/* Top Contact Bar */}
        <div className={`hidden lg:block w-full transition-all duration-300 bg-white/50 backdrop-blur-sm border-b border-brand-black/5 ${scrolled ? "h-0 overflow-hidden opacity-0" : `h-10 opacity-100`}`}>
          <div className={`max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-end gap-6 text-xs font-bold ${scrolled || isDark ? "text-white/80" : "text-brand-black/60"}`}>
            <a href="mailto:jbscargomovers@gmail.com" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
              <Mail className="w-3.5 h-3.5" />
              jbscargomovers@gmail.com
            </a>
            <div className={`w-px h-4 ${scrolled || isDark ? "bg-white/20" : "bg-brand-black/20"}`} />
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              <a href="tel:+919582566995" className="hover:text-brand-orange transition-colors">+91 9582566995</a>
              <span>/</span>
              <a href="tel:+919582166995" className="hover:text-brand-orange transition-colors">+91 9582166995</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-20" : "h-24"}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className={`relative transition-all duration-500 flex items-center justify-start overflow-visible ${scrolled ? "h-10 w-24 md:h-12 md:w-28 mt-0" : "h-12 w-28 md:h-16 md:w-36 mt-2"}`}>
                <img 
                   src="/images/logo.png" 
                   alt="JBS Cargo Movers" 
                   className={`h-full w-full object-contain object-left transition-all duration-500 ${scrolled || isDark || isOpen ? "brightness-0 invert" : ""}`}
                   suppressHydrationWarning
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-8 mr-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm transition-colors duration-200 tracking-wide uppercase font-bold ${scrolled || isDark ? "text-white/70 hover:text-brand-orange" : "text-brand-black/60 hover:text-brand-orange"}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              
              <Link
                href="/contact"
                className="clip-btn bg-brand-orange text-white font-[var(--font-display)] font-bold text-xs px-6 py-3 tracking-wider uppercase hover:bg-brand-orange-dark transition-colors shadow-lg shadow-brand-orange/20"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 z-[130] transition-colors duration-300 ${isOpen || scrolled || isDark ? "text-white" : "text-brand-black"}`}
              aria-label="Toggle navigation"
              suppressHydrationWarning
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer - Moved outside nav tag to ensure proper stacking and background visibility */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-[110] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#0C0C0C] z-[120] lg:hidden flex flex-col shadow-2xl border-r border-white/5"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-6 py-8 border-b border-white/5">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <img 
                    src="/images/logo.png" 
                    alt="JBS Logo" 
                    className="h-12 w-40 object-contain object-left origin-left brightness-0 invert" 
                    suppressHydrationWarning
                  />
                </Link>
              </div>

              {/* Mobile Links */}
              <div className="flex-1 px-6 py-10 space-y-4 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-4 text-2xl font-bold text-white/90 hover:text-brand-orange transition-colors border-b border-white/5 last:border-0"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="p-6 mt-auto border-t border-white/5 bg-black/20">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-5 bg-brand-orange text-white text-center font-bold uppercase tracking-widest clip-btn hover:bg-brand-orange-dark transition-all"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
