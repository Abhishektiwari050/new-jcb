"use client";

import React from "react";
import dynamic from "next/dynamic";
import type { StateData } from "@vishalvoid/react-india-map";

const ReactIndiaMap = dynamic(() => import("@vishalvoid/react-india-map").then(mod => mod.IndiaMap), {
  ssr: false,
});

export const IndiaMap = ({ className }: { className?: string }) => {
  const mapStyle = {
    backgroundColor: "#ffffff",
    hoverColor: "#FDFBF7",
    strokeColor: "#0F3460",
    strokeWidth: 0.5,
    tooltipConfig: {
      backgroundColor: "rgba(15, 52, 96, 0.95)",
      textColor: "#ffffff",
    },
  };

  // We highlight states where JBS has major hub activity
  const stateData: StateData[] = [
    {
      id: "IN-DL", // Delhi
      customData: {
        hub: "Central Hub / Head Office",
        connectivity: "Direct Flights to 80+ Cities",
        status: "Active - 24/7",
      },
    },
    {
      id: "IN-MH", // Maharashtra (Mumbai)
      customData: {
        hub: "West Zone Regional Hub",
        connectivity: "Major Port & Air Connectivity",
        status: "Active",
      },
    },
    {
      id: "IN-KA", // Karnataka (Bangalore)
      customData: {
        hub: "South Zone Regional Hub",
        connectivity: "High-Tech Logistics Network",
        status: "Active",
      },
    },
    {
      id: "IN-WB", // West Bengal (Kolkata)
      customData: {
        hub: "East Zone Regional Hub",
        connectivity: "Gateway to North-East",
        status: "Active",
      },
    },
    {
      id: "IN-TN", // Tamil Nadu (Chennai)
      customData: {
        hub: "South-East Hub",
        connectivity: "Coastal & Rail Network",
        status: "Active",
      },
    },
    {
      id: "IN-UP", // Uttar Pradesh (Lucknow)
      customData: {
        capacity: "400+ tons/day",
        status: "Active",
      },
    },
  ];

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={className}>
        <div className="w-full aspect-[4/5] bg-brand-orange/5 animate-pulse rounded-[40px]" />
      </div>
    );
  }

  return (
    <div 
      className={`relative ${className} group`}
      suppressHydrationWarning
    >
      <ReactIndiaMap
        mapStyle={mapStyle}
        stateData={stateData}
      />
      
      {/* Legend / Info */}
      <div className="absolute bottom-4 right-4 z-20 pointer-events-none hidden md:block">
        <div className="bg-brand-black text-white p-4 rounded-2xl shadow-2xl border border-white/10 scale-90 origin-bottom-right">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-orange mb-2">Network Hubs</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <p className="text-[10px] font-black">Delhi HQ Operational</p>
          </div>
        </div>
      </div>
    </div>
  );
};
