import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Logistics Services | JBS Cargo Movers",
  description:
    "Explore our full range of logistics solutions including Air, Surface, and Train Cargo, Warehousing, and Door-to-Door delivery.",
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
