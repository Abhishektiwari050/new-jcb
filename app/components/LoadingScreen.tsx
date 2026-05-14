"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, 20);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-[#FDFBF7] flex flex-col items-center justify-center"
        >
          {/* Logo Container */}
          <div className="relative mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-32"
            >
              <Image
                src="/images/logo.png"
                alt="JBS Logo"
                fill
                sizes="(max-width: 768px) 128px, 128px"
                className="object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Minimalist Progress Bar */}
          <div className="w-48 h-[2px] bg-brand-black/10 rounded-full overflow-hidden mx-auto">
            <motion.div 
              className="h-full bg-brand-orange"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
