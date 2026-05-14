"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Package, MapPin, Clock, CheckCircle2, Truck, Plane } from "lucide-react";
import Navbar from "@/app/components/Navbar";

export default function TrackingPageContent() {
  const [trackingId, setTrackingId] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState<null | any>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;
    
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setResult({
        id: trackingId,
        status: "In Transit",
        origin: "New Delhi (DEL)",
        destination: "Mumbai (BOM)",
        eta: "Oct 24, 2026",
        history: [
          { status: "In Transit", location: "Bhiwandi Hub", time: "Oct 22, 10:45 AM", current: true },
          { status: "Arrived at Hub", location: "Bhiwandi Sorting Facility", time: "Oct 22, 08:30 AM", current: false },
          { status: "Dispatched", location: "New Delhi Central Hub", time: "Oct 21, 11:15 PM", current: false },
          { status: "Shipment Picked Up", location: "Okhla Phase III", time: "Oct 21, 04:20 PM", current: false },
        ]
      });
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div>
      {/* Hero Header */}
      <section className="relative py-48 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/surface-cargo.png" 
            alt="Tracking Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/80 to-brand-black" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(232,106,47,0.15)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-[10px] text-brand-orange font-bold uppercase tracking-widest">
              Live Logistics
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-display)] font-black text-5xl md:text-7xl text-white tracking-tighter mb-12"
          >
            Track Your <span className="text-brand-orange text-outline">Saman.</span>
          </motion.h1>

          {/* Search Bar */}
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto relative group"
          >
            <input 
              type="text" 
              placeholder="Enter Consignment Number (e.g. JBS123456)"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="w-full bg-white/5 border-2 border-white/10 rounded-[32px] px-10 py-8 text-white font-bold text-xl outline-none focus:border-brand-orange transition-all placeholder:text-white/20 shadow-2xl group-hover:bg-white/[0.08]"
            />
            <button 
              type="submit"
              disabled={isSearching}
              className="absolute right-4 top-4 bottom-4 px-10 bg-brand-orange text-white rounded-[24px] font-black uppercase tracking-widest text-xs hover:bg-brand-orange-dark transition-all disabled:opacity-50 flex items-center gap-2"
            >
              {isSearching ? "Searching..." : <><Search className="w-4 h-4" /> Track</>}
            </button>
          </motion.form>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {!result && !isSearching && (
              <motion.div 
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 opacity-30"
              >
                <Package className="w-24 h-24 mx-auto mb-6 text-brand-black" />
                <p className="font-bold uppercase tracking-widest text-sm">Enter your ID above to start tracking</p>
              </motion.div>
            )}

            {isSearching && (
              <motion.div 
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center py-20"
              >
                <div className="w-16 h-16 border-4 border-brand-orange/20 border-t-brand-orange rounded-full animate-spin mb-6" />
                <p className="font-bold text-brand-black/40">Fetching shipment data...</p>
              </motion.div>
            )}

            {result && !isSearching && (
              <motion.div 
                key="result"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Status Card */}
                <div className="bg-white p-10 rounded-[40px] border border-brand-black/5 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-8">
                    <div>
                      <p className="text-brand-black/40 text-xs font-bold uppercase tracking-widest mb-2">Shipment ID</p>
                      <h2 className="text-3xl font-black text-brand-black">{result.id}</h2>
                    </div>
                    <div className="bg-live-green/10 px-6 py-3 rounded-full border border-live-green/20">
                      <span className="text-live-green font-black uppercase tracking-widest text-sm">{result.status}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 pt-12 border-t border-brand-black/5">
                    <div>
                      <p className="text-brand-black/40 text-xs font-bold uppercase tracking-widest mb-2">Origin</p>
                      <p className="text-brand-black font-black flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-orange" /> {result.origin}</p>
                    </div>
                    <div>
                      <p className="text-brand-black/40 text-xs font-bold uppercase tracking-widest mb-2">Destination</p>
                      <p className="text-brand-black font-black flex items-center gap-2"><MapPin className="w-4 h-4 text-brand-orange" /> {result.destination}</p>
                    </div>
                    <div>
                      <p className="text-brand-black/40 text-xs font-bold uppercase tracking-widest mb-2">Estimated Arrival</p>
                      <p className="text-brand-black font-black flex items-center gap-2"><Clock className="w-4 h-4 text-brand-orange" /> {result.eta}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="bg-white p-10 rounded-[40px] border border-brand-black/5 shadow-sm overflow-hidden relative">
                   <h3 className="text-xl font-black text-brand-black mb-10">Shipment Timeline</h3>
                   <div className="space-y-12 relative">
                      {/* Vertical Line */}
                      <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-brand-black/5" />
                      
                      {result.history.map((item: any, i: number) => (
                        <div key={i} className="flex gap-8 relative z-10">
                           <div className={`w-6 h-6 rounded-full border-4 bg-white shrink-0 mt-1 transition-all ${item.current ? "border-brand-orange scale-125" : "border-brand-black/10"}`} />
                           <div className="flex-1">
                              <div className="flex flex-wrap items-center justify-between gap-4 mb-1">
                                 <h4 className={`font-black text-lg ${item.current ? "text-brand-black" : "text-brand-black/40"}`}>{item.status}</h4>
                                 <span className="text-xs font-bold text-brand-black/30 uppercase tracking-wider">{item.time}</span>
                              </div>
                              <p className="text-brand-black/40 text-sm font-medium">{item.location}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
