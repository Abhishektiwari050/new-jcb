import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen text-text-primary">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-brand-black/80 backdrop-blur-[2px] pt-40 pb-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(232,106,47,0.1)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs text-brand-orange uppercase tracking-[0.3em] font-bold mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-[var(--font-display)] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Contact <span className="text-brand-orange">Us</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Our logistics experts are available 24/7 to assist with quotes, tracking, and operational queries.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-surface border border-border-light p-8 text-center hover:border-brand-orange transition-colors">
               <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mx-auto mb-6">
                  <Phone className="w-8 h-8" />
               </div>
               <h3 className="font-[var(--font-display)] font-bold text-xl mb-3">Call Us</h3>
               <p className="text-text-muted mb-4 text-sm">24/7 Dispatch & Support</p>
               <a href="tel:+911234567890" className="text-brand-orange font-bold hover:underline">+91 123 456 7890</a>
            </div>

            <div className="bg-bg-surface border border-border-light p-8 text-center hover:border-brand-orange transition-colors">
               <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mx-auto mb-6">
                  <Mail className="w-8 h-8" />
               </div>
               <h3 className="font-[var(--font-display)] font-bold text-xl mb-3">Email Us</h3>
               <p className="text-text-muted mb-4 text-sm">Sales & General Queries</p>
               <a href="mailto:info@jbscargo.com" className="text-brand-orange font-bold hover:underline">info@jbscargo.com</a>
            </div>

            <div className="bg-bg-surface border border-border-light p-8 text-center hover:border-brand-orange transition-colors">
               <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange mx-auto mb-6">
                  <MapPin className="w-8 h-8" />
               </div>
               <h3 className="font-[var(--font-display)] font-bold text-xl mb-3">Head Office</h3>
               <p className="text-text-muted text-sm">
                  123 Logistics Park,<br/>
                  Andheri East, Mumbai<br/>
                  Maharashtra 400069
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-24 bg-bg-surface border-t border-border-light">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] font-bold text-3xl mb-4">Request a <span className="text-brand-orange">Quote</span></h2>
            <p className="text-text-muted">Fill out the form below and our team will get back to you within 2 hours.</p>
          </div>
          
          <form className="bg-white p-8 border border-border-light shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-3 border border-border-light focus:outline-none focus:border-brand-orange transition-colors bg-bg-surface" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-3 border border-border-light focus:outline-none focus:border-brand-orange transition-colors bg-bg-surface" placeholder="Doe" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-border-light focus:outline-none focus:border-brand-orange transition-colors bg-bg-surface" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 border border-border-light focus:outline-none focus:border-brand-orange transition-colors bg-bg-surface" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-text-primary mb-2">Service Type</label>
              <select className="w-full px-4 py-3 border border-border-light focus:outline-none focus:border-brand-orange transition-colors bg-bg-surface appearance-none">
                <option value="">Select a service...</option>
                <option value="surface">Surface Transportation</option>
                <option value="air">Air Cargo</option>
                <option value="train">Train Cargo</option>
                <option value="custom">Custom Logistics</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-text-primary mb-2">Message or Requirements</label>
              <textarea rows={4} className="w-full px-4 py-3 border border-border-light focus:outline-none focus:border-brand-orange transition-colors bg-bg-surface" placeholder="Please provide details about your shipment..."></textarea>
            </div>

            <button type="button" className="w-full bg-brand-orange hover:bg-[#D15A23] text-white font-bold py-4 px-8 transition-colors uppercase tracking-wider text-sm flex items-center justify-center gap-2 group">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
