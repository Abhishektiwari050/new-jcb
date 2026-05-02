import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/HeroSection";
import AboutUsSection from "./components/sections/AboutUsSection";
import ServicesSection from "./components/sections/ServicesSection";
import PartnersSection from "./components/sections/PartnersSection";
import StatsSection from "./components/sections/StatsSection";
import CustomersSection from "./components/sections/CustomersSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-text-primary">
      <Navbar />
      
      {/* 1. Hero */}
      <HeroSection />
      
      {/* 2. About Us */}
      <AboutUsSection />
      
      {/* 3. Services Grid */}
      <ServicesSection />
      
      {/* 4. Partners Marquee */}
      <PartnersSection />
      
      {/* 5. Statistics Counters */}
      <StatsSection />
      
      {/* 6. Customers Marquee */}
      <CustomersSection />
      
      {/* 7. Footer */}
      <Footer />
    </main>
  );
}
