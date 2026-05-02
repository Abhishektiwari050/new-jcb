import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/sections/ServicesSection";

export default function ServicesPage() {
  return (
    <main className="min-h-screen text-text-primary">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-brand-black/80 backdrop-blur-[2px] pt-40 pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(232,106,47,0.1)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs text-brand-orange uppercase tracking-[0.3em] font-bold mb-4 block">
            Capabilities
          </span>
          <h1 className="font-[var(--font-display)] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Comprehensive <span className="text-brand-orange">Logistics</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            From temperature-controlled pharma shipments to heavy surface freight, we have the specialized infrastructure to deliver.
          </p>
        </div>
      </section>

      {/* Services List - Reuse homepage component but it will display naturally here */}
      <div className="pt-8">
        <ServicesSection />
      </div>

      {/* Deep Dive / Extra Details */}
      <section className="py-24 bg-brand-black/90 backdrop-blur-[2px] text-white">
         <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
               <div>
                  <h3 className="font-[var(--font-display)] font-bold text-2xl mb-4 text-brand-orange">Fleet Capabilities</h3>
                  <ul className="space-y-4 text-white/70">
                     <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"/> GPS-Tracked Reefers (14ft, 17ft, 20ft, 24ft, 32ft)</li>
                     <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"/> Ambient & Dry Containers</li>
                     <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"/> Dedicated FMCG Delivery Vans</li>
                     <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"/> Open Trucks for heavy machinery</li>
                  </ul>
               </div>
               <div>
                  <h3 className="font-[var(--font-display)] font-bold text-2xl mb-4 text-brand-orange">Technology Integration</h3>
                  <ul className="space-y-4 text-white/70">
                     <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"/> Real-time SIM & GPS Tracking</li>
                     <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"/> Automated Temperature Data Loggers</li>
                     <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"/> Client Dashboard for Shipment Visibility</li>
                     <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-brand-orange"/> Electronic Proof of Delivery (ePOD)</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
