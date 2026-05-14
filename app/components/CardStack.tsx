"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const CardStack = ({
  items,
}: {
  items: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <motion.div
      ref={containerRef}
      className="relative"
      style={{ height: `${items.length * 100}vh` }}
    >
      {/* This sticky wrapper acts as a fixed viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-5xl mx-auto h-[480px]">
          {items.map((item, i) => (
            <StackCard
              key={i}
              i={i}
              total={items.length}
              title={item.title}
              description={item.description}
              content={item.content}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const StackCard = ({
  i,
  total,
  title,
  description,
  content,
  progress,
}: {
  i: number;
  total: number;
  title: string;
  description: string;
  content?: React.ReactNode;
  progress: MotionValue<number>;
}) => {
  // Each card occupies a slice of the total scroll
  const cardStart = i / total;
  const cardEnd = (i + 1) / total;
  const cardMid = (cardStart + cardEnd) / 2;

  // Card slides up from below → lands in center → gets pushed up by next card
  // For the first card, it starts visible (no slide-in needed)
  const y = useTransform(progress, (v) => {
    if (i === 0) {
      // First card: starts at center, then gets pushed slightly as next cards arrive
      if (v < cardEnd) return 0;
      return -(v - cardEnd) * total * 40; // slight upward push
    }

    // Other cards: slide up from below into position
    if (v < cardStart) {
      return 600; // below viewport
    }
    if (v < cardMid) {
      // Sliding in: cardStart → cardMid maps to 600 → 0
      const t = (v - cardStart) / (cardMid - cardStart);
      return 600 * (1 - t);
    }
    if (v < cardEnd) {
      return 0; // settled in place
    }
    // After this card's section, push it up slightly
    return -(v - cardEnd) * total * 40;
  });

  // Scale: card is full size when active, shrinks slightly when next card arrives
  const scale = useTransform(progress, (v) => {
    if (v < cardStart) return 0.9;
    if (v < cardMid) {
      const t = (v - cardStart) / (cardMid - cardStart);
      return 0.9 + 0.1 * t;
    }
    if (v < cardEnd) return 1;
    // Shrink as next card comes in
    const overrun = (v - cardEnd) * total;
    return Math.max(0.88, 1 - overrun * 0.06);
  });

  // Opacity: fade in, stay visible, then reduce when pushed back
  const opacity = useTransform(progress, (v) => {
    if (v < cardStart) return 0;
    if (v < cardMid) {
      const t = (v - cardStart) / (cardMid - cardStart);
      return t;
    }
    if (v < cardEnd) return 1;
    // Reduce opacity slightly when pushed back
    const overrun = (v - cardEnd) * total;
    return Math.max(0.4, 1 - overrun * 0.3);
  });

  // z-index: later cards are on top
  const zIndex = i + 1;

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex,
      }}
      className="absolute inset-0 rounded-[32px] bg-white border border-brand-black/5 overflow-hidden origin-top shadow-2xl"
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Text content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center p-8 lg:p-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-orange text-white font-black text-xl shrink-0">
              {i + 1}
            </span>
            <h3 className="text-2xl lg:text-3xl font-black text-brand-black font-[var(--font-display)]">
              {title}
            </h3>
          </div>
          <p className="text-base lg:text-lg text-brand-black/50 leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* Visual content */}
        <div className="w-full lg:w-[55%] h-full bg-[#F2EFEA]">
          {content}
        </div>
      </div>
    </motion.div>
  );
};
