import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutPageContent from "@/app/about/AboutPageContent";

export const metadata: Metadata = {
  title: "About JBS Cargo Movers | Professional Logistics Since 2023",
  description:
    "Learn about JBS Cargo Movers — India's trusted logistics partner. Founded by Lalit Saini, we provide professional Air, Surface, and Train Cargo services across 100+ destinations nationwide.",
  keywords: ["Lalit Saini JBS Cargo", "JBS Cargo history", "logistics partners India"],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-text-primary">
      <Navbar theme="dark" />
      <div>
        <AboutPageContent />
        <Footer />
      </div>
    </main>
  );
}
