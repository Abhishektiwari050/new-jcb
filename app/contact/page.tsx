import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactPageContent from "@/app/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | JBS Cargo Movers",
  description:
    "Get in touch with JBS Cargo Movers. Our logistics experts are available 24/7 for quotes, tracking, and operational support.",
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
