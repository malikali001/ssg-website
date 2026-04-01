import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServiceCards from "@/components/sections/ServiceCards";
import SIAApproved from "@/components/sections/SIAApproved";
import StatsBar from "@/components/sections/StatsBar";
import ValuePropositions from "@/components/sections/ValuePropositions";
import CTABanner from "@/components/sections/CTABanner";

import TrustBar from "@/components/sections/TrustBar";

export const metadata: Metadata = {
  title: "SSG UK Ltd | Elite Security Services",
  description: "SSG UK Ltd provides elite, technology-driven security services across the UK. SIA Approved Contractor offering manned guarding, CCTV, reception services and more.",
  openGraph: {
    title: "SSG UK Ltd | Elite Security Services",
    description: "Precision protection and integrated intelligence. Elite security services across the UK.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SIAApproved />
      <StatsBar />
      <ServiceCards />
      <ValuePropositions />
      <CTABanner />

      <TrustBar />
    </main>
  );
}
