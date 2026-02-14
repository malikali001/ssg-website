'use client';

import ServiceHero from "@/components/services/ServiceHero";
import SectorStats from "@/components/sectors/SectorStats";
import SectorChallenges from "@/components/sectors/SectorChallenges";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { HardHat, ShieldAlert, BadgeCheck, Lock, Hammer, Eye } from 'lucide-react';

export default function ConstructionContent() {
    const stats = [
        { label: "CSCS Qualified", value: "100%", icon: BadgeCheck },
        { label: "Theft Reduction", value: "-92%", icon: ShieldAlert },
        { label: "Sites Secured", value: "50+", icon: Hammer },
        { label: "Response Time", value: "<15m", icon: Lock }
    ];

    const challenges = [
        { title: "Plant & Machinery Theft", description: "High-value assets are prime targets for organized criminal gangs, leading to project delays and insurance hikes." },
        { title: "Health & Safety Risks", description: "Unauthorized access by the public or children can result in severe legal liability and tragic accidents." },
        { title: "Fuel Theft", description: "Rising fuel costs make site storage tanks vulnerable to overnight syphoning." }
    ];

    const solutions = [
        { title: "Biometric Access Control", description: "Turnstile systems with facial recognition or fingerprint scanning to ensure only inducted personnel enter." },
        { title: "Perimeter Detection", description: "PID systems and fence-line monitoring that trigger immediate alerts to our control room." },
        { title: "Mobile Patrols", description: "Randomized out-of-hours checks to verify site integrity and deter loitering." }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Construction Security."
                subtitle="Build Without Risk."
                description="From groundworks to handover, we secure your site against theft, vandalism, and liability. Fully accredited CSCS licensed officers and advanced perimeter technology."
                imageSrc="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <SectorStats
                title="Site"
                subtitle="Metrics"
                stats={stats}
            />

            <SectorChallenges
                title="Risks"
                subtitle="Solutions"
                challenges={challenges}
                solutions={solutions}
            />

            <ServiceCTA />
        </main>
    );
}
