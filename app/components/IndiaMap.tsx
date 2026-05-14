"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { StateData } from "@vishalvoid/react-india-map";

const ReactIndiaMap = dynamic(() => import("@vishalvoid/react-india-map").then(mod => mod.IndiaMap), {
  ssr: false,
  loading: () => <div className="w-full aspect-[4/5] bg-brand-orange/5 animate-pulse rounded-3xl" />
});

export const IndiaMap = ({ className }: { className?: string }) => {
  const mapStyle = {
    backgroundColor: "#FDFBF7",
    hoverColor: "#E86A2F",
    strokeColor: "#0F3460",
    strokeWidth: 0.5,
    tooltipConfig: {
      backgroundColor: "#0F3460",
      textColor: "#ffffff",
    },
  };

  // We highlight states where JBS has major hub activity
  const stateData: StateData[] = [
    {
      id: "IN-DL", // Delhi
      customData: {
        hub: "Central National Hub",
        capacity: "1000+ tons/day",
        status: "Active",
      },
    },
    {
      id: "IN-MH", // Maharashtra (Mumbai)
      customData: {
        hub: "West Zone Hub",
        capacity: "800+ tons/day",
        status: "Active",
      },
    },
    {
      id: "IN-KA", // Karnataka (Bangalore)
      customData: {
        hub: "South Zone Hub",
        capacity: "600+ tons/day",
        status: "Active",
      },
    },
    {
      id: "IN-WB", // West Bengal (Kolkata)
      customData: {
        hub: "East Zone Hub",
        capacity: "500+ tons/day",
        status: "Active",
      },
    },
    {
      id: "IN-TN", // Tamil Nadu (Chennai)
      customData: {
        hub: "Port Connectivity Hub",
        capacity: "450+ tons/day",
        status: "Active",
      },
    },
    {
      id: "IN-UP", // Uttar Pradesh (Lucknow)
      customData: {
        hub: "North-Central Hub",
        capacity: "400+ tons/day",
        status: "Active",
      },
    },
  ];

  return (
    <div className={`relative ${className} group`}>
      <div className="absolute inset-0 bg-brand-orange/5 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative z-10 p-8 bg-white/50 backdrop-blur-sm rounded-[40px] border border-brand-black/5 shadow-2xl">
        <ReactIndiaMap
          mapStyle={mapStyle}
          stateData={stateData}
        />
      </div>
      
      {/* Legend / Info */}
      <div className="absolute bottom-12 right-12 z-20 pointer-events-none hidden md:block">
        <div className="bg-brand-black text-white p-6 rounded-3xl shadow-2xl border border-white/10">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-orange mb-3">Live Network</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <p className="text-xs font-black">Active Hubs Operational</p>
            </div>
            <div className="flex items-center gap-2 opacity-50">
              <div className="w-2 h-2 rounded-full bg-white/20" />
              <p className="text-xs font-bold">Expansion Zone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
