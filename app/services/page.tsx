import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesPageContent from "@/app/services/ServicesPageContent";

export const metadata: Metadata = {
  title: "Cargo Services & Solutions | Air, Surface, Train & Consolidation",
  description:
    "Comprehensive logistics solutions: Air Cargo, Surface Cargo, Train Cargo, and specialized Consolidation services. Fast, secure, and cost-effective delivery across India.",
  keywords: ["air cargo services", "surface transport", "rail freight India", "consolidation services", "logistics solutions"],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar theme="dark" />
      <ServicesPageContent />
      <Footer />
    </main>
  );
}
