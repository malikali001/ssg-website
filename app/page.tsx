import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import PrimaryFunnel from "@/components/sections/PrimaryFunnel";
import TheEdge from "@/components/sections/TheEdge";
import SectorGrid from "@/components/sections/SectorGrid";
import WhySSG from "@/components/sections/WhySSG";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBar />
      <PrimaryFunnel />
      <TheEdge />
      <SectorGrid />
      <WhySSG />
    </main>
  );
}
