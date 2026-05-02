import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-white text-text-primary">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-bg-hero pt-40 pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(232,106,47,0.1)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs text-brand-orange uppercase tracking-[0.3em] font-bold mb-4 block">
            Our Heritage
          </span>
          <h1 className="font-[var(--font-display)] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Pioneering Logistics <span className="text-brand-orange">Since 2010</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            From a single-truck operation to a nationwide logistics powerhouse, JBS Cargo Movers has redefined specialist freight in India.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-[var(--font-display)] font-bold text-3xl lg:text-4xl">
                The JBS Story
              </h2>
              <div className="space-y-6 text-text-body leading-relaxed">
                <p>
                  Established in 2010, JBS Cargo Movers began with a vision to bridge the gap in specialist, temperature-controlled, and time-critical logistics across the Indian subcontinent.
                </p>
                <p>
                  We recognized that standard freight services weren't equipped to handle the rigorous demands of the pharmaceutical, FMCG, and high-value electronics sectors. By investing heavily in a robust cold-chain fleet and state-of-the-art tracking infrastructure, we've become the trusted partner for India's leading brands.
                </p>
                <p>
                  Today, with a fleet of over 70 dedicated vehicles, a team of 200+ logistics professionals, and an expanding air freight division, we deliver not just cargo, but peace of mind.
                </p>
              </div>
            </div>
            
            {/* Visual */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 bg-bg-surface rounded-lg border border-border-light flex items-center justify-center p-6 text-center">
                  <div>
                    <h3 className="font-[var(--font-display)] font-bold text-3xl text-brand-orange mb-2">10M+</h3>
                    <p className="text-sm font-medium uppercase tracking-wider text-text-muted">Tons Delivered</p>
                  </div>
                </div>
                <div className="h-48 bg-brand-black rounded-lg border border-border-light flex items-center justify-center p-6 text-center">
                   <div>
                    <h3 className="font-[var(--font-display)] font-bold text-3xl text-white mb-2">99.8%</h3>
                    <p className="text-sm font-medium uppercase tracking-wider text-white/50">SLA Met</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-48 bg-brand-orange rounded-lg border border-border-light flex items-center justify-center p-6 text-center">
                   <div>
                    <h3 className="font-[var(--font-display)] font-bold text-3xl text-white mb-2">ISO</h3>
                    <p className="text-sm font-medium uppercase tracking-wider text-white/80">Certified</p>
                  </div>
                </div>
                <div className="h-64 bg-bg-surface rounded-lg border border-border-light flex items-center justify-center p-6 text-center">
                   <div>
                    <h3 className="font-[var(--font-display)] font-bold text-3xl text-brand-orange mb-2">24/7</h3>
                    <p className="text-sm font-medium uppercase tracking-wider text-text-muted">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
