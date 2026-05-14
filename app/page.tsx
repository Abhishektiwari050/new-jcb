import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutUsSection from "./components/sections/AboutUsSection";
import ServicesSection from "./components/sections/ServicesSection";
import PartnersSection from "./components/sections/PartnersSection";
import StatsSection from "./components/sections/StatsSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import ProcessSection from "./components/sections/ProcessSection";
import CTASection from "./components/sections/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F2EFEA]">
      <Navbar />

      {/* Hero with 3D Belt */}
      <HeroSection />

      {/* Partners Marquee */}
      <PartnersSection />

      {/* Service Cards */}
      <ServicesSection />

      {/* Statistics Strip */}
      <StatsSection />

      {/* Sticky Scroll Process */}
      <ProcessSection />



      {/* Why Choose Us — Ticker */}
      <WhyChooseUsSection />

      {/* Testimonials Carousel */}
      <TestimonialsSection />

      {/* Contact / Quote Form */}
      <ContactSection />

      {/* CTA Banner */}
      <CTASection />

      <Footer />
    </main>
  );
}
