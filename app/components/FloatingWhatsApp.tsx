"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919582566995"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[9999] w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center group"
      title="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
      <MessageCircle className="w-8 h-8 relative z-10" fill="currentColor" />
      
      {/* Tooltip */}
      <div className="absolute right-20 bg-white text-brand-black px-4 py-2 rounded-xl text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-brand-black/5">
        Chat with us on WhatsApp
      </div>
    </motion.a>
  );
}
