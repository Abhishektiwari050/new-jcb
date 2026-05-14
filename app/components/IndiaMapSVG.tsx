"use client";

import React from "react";
import { motion } from "framer-motion";

export const IndiaMapSVG = ({ className }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 600 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M276.5 10.5L285 24L288 38L297 45.5L315 41L330.5 45.5L340.5 54.5L343.5 71L361.5 78.5L372.5 71L387.5 71L399.5 78.5L404 94.5L418 107.5L418 126.5L411.5 137L404 153L391.5 160L381.5 168.5L371.5 178.5L363 197L363 218L355 240.5L346.5 259.5L340.5 281L323.5 291.5L311 306.5L304.5 322L304.5 344L311 364L311 386L297 408L281 432L276.5 457L263 481L253 506.5L245.5 531L245.5 556L230.5 581L221.5 607L221.5 632L213.5 656L205.5 678L191.5 689.5L178.5 678L166 667.5L153 656L143 642L134.5 625L127.5 607L119 588L111.5 569.5L103.5 550.5L95.5 531L87.5 514L87.5 491.5L78.5 470L63 457L50.5 439L44.5 416L50.5 396L63 376L74 358L78.5 334.5L78.5 311.5L87.5 291.5L103.5 272L111.5 251.5L111.5 229L119 208L127.5 186L134.5 166.5L143 145.5L153 126.5L166 107.5L181.5 94.5L197 82.5L213.5 71L230.5 61.5L245.5 50.5L258.5 38L268 24L276.5 10.5Z"
          fill="white"
          fillOpacity="0.05"
          stroke="#0F3460"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Major City Indicators */}
        {[
          { x: 215, y: 160, label: "Delhi", isHQ: true },
          { x: 140, y: 380, label: "Mumbai" },
          { x: 200, y: 520, label: "Bangalore" },
          { x: 380, y: 260, label: "Kolkata" },
          { x: 230, y: 580, label: "Chennai" },
        ].map((city, i) => (
          <g key={city.label}>
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.2 }}
              cx={city.x}
              cy={city.y}
              r={city.isHQ ? 6 : 4}
              fill={city.isHQ ? "#E86A2F" : "#0F3460"}
              className={city.isHQ ? "animate-pulse" : ""}
            />
            {city.isHQ && (
              <motion.circle
                cx={city.x}
                cy={city.y}
                r={12}
                stroke="#E86A2F"
                strokeWidth="1"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </g>
        ))}

        {/* Connectivity Lines radiating from Delhi */}
        {[
          { x: 140, y: 380 }, // Mumbai
          { x: 200, y: 520 }, // Bangalore
          { x: 380, y: 260 }, // Kolkata
          { x: 230, y: 580 }, // Chennai
        ].map((target, i) => (
          <motion.path
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ delay: 2 + i * 0.3, duration: 1.5 }}
            d={`M215 160 Q${(215 + target.x) / 2 + 30} ${(160 + target.y) / 2 - 20} ${target.x} ${target.y}`}
            stroke="#E86A2F"
            strokeWidth="1"
            strokeDasharray="4 4"
            fill="none"
          />
        ))}
      </svg>
    </div>
  );
};
