import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
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


      {/* Statistics Strip — (Moved up for immediate impact) */}
      <StatsSection />

      {/* Partners Marquee — (Moved up for brand trust) */}
      <PartnersSection />

      {/* Service Cards */}
      <ServicesSection />

      {/* Sticky Scroll Process */}
      <ProcessSection />

      {/* Why Choose Us — 9 Points */}
      <WhyChooseUsSection />

      {/* Testimonials Carousel — Real Reviews */}
      <TestimonialsSection />





      <Footer />
    </main>
  );
}
