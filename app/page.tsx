import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServiceCards from "@/components/sections/ServiceCards";
import StatsBar from "@/components/sections/StatsBar";
import ValuePropositions from "@/components/sections/ValuePropositions";
import CTABanner from "@/components/sections/CTABanner";

import TrustBar from "@/components/sections/TrustBar";

export const metadata: Metadata = {
  title: "SSG UK Ltd | Elite Security & Facilities Management",
  description: "SSG UK Ltd provides elite, technology-driven security and facilities management across the UK. SIA Approved Contractor offering manned guarding, CCTV, cleaning and more.",
  openGraph: {
    title: "SSG UK Ltd | Elite Security & Facilities Management",
    description: "Precision protection and integrated intelligence. Elite security and FM services across the UK.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsBar />
      <ServiceCards />
      <ValuePropositions />
      <CTABanner />

      <TrustBar />
    </main>
  );
}
