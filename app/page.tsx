import HeroSection from "@/components/sections/HeroSection";
import ServiceShowcase from "@/components/sections/ServiceShowcase";
import StatsBar from "@/components/sections/StatsBar";
import ValuePropositions from "@/components/sections/ValuePropositions";
import CTABanner from "@/components/sections/CTABanner";

import TrustBar from "@/components/sections/TrustBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServiceShowcase />
      <StatsBar />
      <ValuePropositions />
      <CTABanner />

      <TrustBar />
    </main>
  );
}
