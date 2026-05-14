import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrackingPageContent from "./TrackingPageContent";

export const metadata: Metadata = {
  title: "Track Shipment | JBS Cargo Movers",
  description:
    "Real-time tracking for your JBS Cargo shipments. Enter your consignment number to get live status updates.",
};

export default function TrackingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar theme="dark" />
      <TrackingPageContent />
      <Footer />
    </main>
  );
}
