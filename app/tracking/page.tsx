import { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrackingPageContent from "./TrackingPageContent";

export const metadata: Metadata = {
  title: "Track Shipment | Real-time Cargo Tracking Coming Soon",
  description:
    "Stay tuned for our high-precision GPS tracking system. In the meantime, contact our operational desk for instant status reports on your JBS Cargo consignments.",
  keywords: ["track shipment JBS", "cargo tracking India", "consignment status", "GPS logistics tracking"],
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
