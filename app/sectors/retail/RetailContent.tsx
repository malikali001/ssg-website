'use client';

import ServiceHero from "@/components/services/ServiceHero";
import SectorStats from "@/components/sectors/SectorStats";
import SectorChallenges from "@/components/sectors/SectorChallenges";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { ShoppingBag, Eye, TrendingDown, Users, Search, AlertCircle } from 'lucide-react';

export default function RetailContent() {
    const stats = [
        { label: "Shrinkage", value: "-45%", icon: TrendingDown },
        { label: "Deterrence", value: "High", icon: Eye },
        { label: "Store Detectives", value: "Expert", icon: Search },
        { label: "Staff Safety", value: "100%", icon: Users }
    ];

    const challenges = [
        { title: "Organized Retail Crime", description: "Gangs targeting high-value items with aggressive tactics." },
        { title: "Internal Shrinkage", description: "Staff theft and administrative errors contributing to stock loss." },
        { title: "Abuse of Staff", description: "Frontline workers facing increasing aggression from shoplifters and the public." }
    ];

    const solutions = [
        { title: "Store Detectives", description: "Covert operatives trained to spot and apprehend shoplifters discreetly." },
        { title: "Uniformed Deterrence", description: "High-visibility guards at entrances to reassure staff and deter opportunists." },
        { title: "Body Worn Cameras", description: "Recording interactions to de-escalate aggression and provide evidence for prosecution." }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Retail Security."
                subtitle="Protecting Profits."
                description="Combat shrinkage and keep your customers safe. Our retail security solutions blend loss prevention expertise with exceptional customer service."
                imageSrc="/images/retail-hero.png"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <SectorStats
                title="Retail"
                subtitle="Impact"
                stats={stats}
            />

            <SectorChallenges
                title="Loss"
                subtitle="Prevention"
                challenges={challenges}
                solutions={solutions}
            />

            <ServiceCTA />
        </main>
    );
}
