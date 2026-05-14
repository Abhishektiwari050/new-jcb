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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-black/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        {/* Top Contact Bar */}
        <div className={`hidden lg:block w-full border-b transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : `h-10 opacity-100 ${isDark ? "border-white/10" : "border-brand-black/10"}`}`}>
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
          <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-20" : "h-32"}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className={`relative transition-all duration-500 flex items-center justify-start overflow-visible ${scrolled ? "h-12 w-28 mt-0" : "h-16 w-36 mt-2"}`}>
                <img 
                   src="/images/logo.png" 
                   alt="JBS Cargo Movers" 
                   className={`h-full w-full object-contain object-left transition-all duration-500 ${
                     scrolled || isDark ? "invert-[1] hue-rotate-180 brightness-125" : "mix-blend-multiply"
                   }`}
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
              className={`lg:hidden p-2 ${scrolled || isDark ? "text-white" : "text-brand-black"}`}
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
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <img 
                      src="/images/logo.png" 
                      alt="JBS Logo" 
                      className="h-12 w-40 object-contain object-left origin-left invert-[1] hue-rotate-180 brightness-125" 
                    />
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/60 hover:text-white"
                    aria-label="Close menu"
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
