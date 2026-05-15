import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Us | JBS Cargo Movers",
  description:
    "Learn about JBS Cargo Movers — India's trusted logistics partner established in 2023. Pan-India air, surface & train cargo services.",
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
