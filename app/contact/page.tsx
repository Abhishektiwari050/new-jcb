import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactPageContent from "@/app/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Logistics Experts | JBS Cargo Movers New Delhi",
  description:
    "Get in touch with JBS Cargo Movers for elite logistics solutions. Our New Delhi operational desk is available 24/7 for instant quotes and consignment support.",
  keywords: ["contact cargo movers", "logistics quote India", "JBS Cargo phone number", "New Delhi logistics support"],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar theme="dark" />
      <ContactPageContent />
      <Footer />
    </main>
  );
}
