import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import PrimaryFunnel from "@/components/sections/PrimaryFunnel";
import TheEdge from "@/components/sections/TheEdge";
import SectorGrid from "@/components/sections/SectorGrid";
import WhySSG from "@/components/sections/WhySSG";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBar />
      <IndustriesGrid />
      <PrimaryFunnel />
      <TheEdge />
      <SectorGrid />
      <WhySSG />
    </main>
  );
}
