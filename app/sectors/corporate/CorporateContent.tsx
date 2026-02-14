'use client';

import ServiceHero from "@/components/services/ServiceHero";
import SectorStats from "@/components/sectors/SectorStats";
import SectorChallenges from "@/components/sectors/SectorChallenges";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { Building, Users, Key, Briefcase, MinusCircle, UserCheck } from 'lucide-react';

export default function CorporateContent() {
    const stats = [
        { label: "Access Uptime", value: "99.9%", icon: Key },
        { label: "Front of House", value: "5⭐", icon: Users },
        { label: "ISO 27001", value: "Ready", icon: Briefcase },
        { label: "Response", value: "Instant", icon: UserCheck }
    ];

    const challenges = [
        { title: "Tailgating & Unauthorized Entry", description: "Individuals following staff through secure doors, compromising sensitive zones." },
        { title: "Intellectual Property Theft", description: "Corporate espionage or data theft from unsecured server rooms or offices." },
        { title: "Visitor Experience", description: "Balancing strict security protocols with a welcoming environment for clients and partners." }
    ];

    const solutions = [
        { title: "Concierge Security", description: "Dual-role officers who provide five-star reception services while maintaining vigilance." },
        { title: "Smart Access Integration", description: "Mobile-credential access control integrated with HR systems for instant revocation." },
        { title: "Visual Deterrence", description: "Discreet but effective uniform presence in lobbies and critical infrastructure points." }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Corporate Security."
                subtitle="Business Uninterrupted."
                description="Protect your people, property, and reputation. We provide seamless security solutions for corporate headquarters and office environments."
                imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <SectorStats
                title="Office"
                subtitle="Standards"
                stats={stats}
            />

            <SectorChallenges
                title="Threats"
                subtitle="Protection"
                challenges={challenges}
                solutions={solutions}
            />

            <ServiceCTA />
        </main>
    );
}
