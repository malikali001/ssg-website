'use client';

import ServiceHero from "@/components/services/ServiceHero";
import SectorStats from "@/components/sectors/SectorStats";
import SectorChallenges from "@/components/sectors/SectorChallenges";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { Wine, Sparkles, UserCheck, Music, Shield, Moon } from 'lucide-react';

export default function HospitalityContent() {
    const stats = [
        { label: "Guest Experience", value: "Premium", icon: Sparkles },
        { label: "Door Supervision", value: "SIA", icon: UserCheck },
        { label: "Events Covered", value: "500+", icon: Music },
        { label: "Night Safety", value: "Active", icon: Moon }
    ];

    const challenges = [
        { title: "Guest Intoxication", description: "Managing behavior at bars and clubs while maintaining a fun atmosphere." },
        { title: "Crowd Control", description: "Ensuring safe capacity limits and movement flows during high-volume events." },
        { title: "Brand Reputation", description: "Security staff are often the first face guests see; poor presentation reflects on the venue." }
    ];

    const solutions = [
        { title: "SIA Door Supervisors", description: "Immaculately presented staff who balance strict entry policies with a warm welcome." },
        { title: "Event Planning", description: "Pre-event risk assessments and crowd management strategies for large gatherings." },
        { title: "VIP Protection", description: "Discreet close protection for high-profile guests in hotels and venues." }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Hospitality Security."
                subtitle="Secure Experience."
                description="Protecting your guests and your license. We provide door supervision and event security that enhances the customer experience rather than hindering it."
                imageSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <SectorStats
                title="Venue"
                subtitle="Metrics"
                stats={stats}
            />

            <SectorChallenges
                title="Atmosphere"
                subtitle="Control"
                challenges={challenges}
                solutions={solutions}
            />

            <ServiceCTA />
        </main>
    );
}
