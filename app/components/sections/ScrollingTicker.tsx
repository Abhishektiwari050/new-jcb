"use client";

import { motion } from "framer-motion";

const tickerItems = [
  "24/7 EXPRESS MONITORING",
  "ISO 9001:2015 CERTIFIED",
  "PAN-INDIA COLD CHAIN",
  "ZERO-DAMAGE GUARANTEE",
  "CUSTOMS CLEARANCE EXPERTS",
  "PHARMA-GRADE LOGISTICS"
];

export default function ScrollingTicker() {
  return (
    <div className="w-full bg-brand-orange py-4 overflow-hidden border-y border-white/10 relative z-20">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center"
        >
          {/* Main set */}
          {tickerItems.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="mx-8 text-white font-display font-black text-sm tracking-[0.3em] uppercase italic">
                {item}
              </span>
              <span className="mx-8 w-2 h-2 bg-white/40 rotate-45" />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {tickerItems.map((item, i) => (
            <div key={`dup-${i}`} className="flex items-center">
              <span className="mx-8 text-white font-display font-black text-sm tracking-[0.3em] uppercase italic">
                {item}
              </span>
              <span className="mx-8 w-2 h-2 bg-white/40 rotate-45" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
