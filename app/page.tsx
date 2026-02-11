import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import PrimaryFunnel from "@/components/sections/PrimaryFunnel";
import TheEdge from "@/components/sections/TheEdge";
import SectorGrid from "@/components/sections/SectorGrid";
import WhySSG from "@/components/sections/WhySSG";
import AwardsPreview from "@/components/sections/AwardsPreview";
import SiaSection from "@/components/sections/SiaSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBar />
      <IndustriesGrid />
      <PrimaryFunnel />
      <TheEdge />
      <SectorGrid />
      <SiaSection />
      <AwardsPreview />
      <WhySSG />
    </main>
  );
}
