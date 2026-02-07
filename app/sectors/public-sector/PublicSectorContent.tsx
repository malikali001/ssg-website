'use client';

import ServiceHero from "@/components/services/ServiceHero";
import SectorStats from "@/components/sectors/SectorStats";
import SectorChallenges from "@/components/sectors/SectorChallenges";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { Users, Landmark, HeartPulse, Shield, Lock, Activity, Stethoscope } from 'lucide-react';

export default function PublicSectorContent() {
    const stats = [
        { label: "Public Safety", value: "Priority", icon: Users },
        { label: "CQC Compliant", value: "Yes", icon: Activity },
        { label: "Response", value: "Rapid", icon: Shield },
        { label: "Patient Care", value: "Safe", icon: HeartPulse }
    ];

    const challenges = [
        { title: "Public Access & Vulnerability", description: "Balancing open access for the community while safeguarding children, the elderly, and at-risk individuals." },
        { title: "Clinical Aggression", description: "A&E departments and public facing desks frequently face violence from distressed or intoxicated individuals." },
        { title: "Diverse Threats", description: "Managing anti-social behavior, protest activity, and targeted threats against officials and staff." }
    ];

    const solutions = [
        { title: "Concierge & Bedside Watch", description: "From front-of-house customer service to 1-on-1 monitoring of high-risk patients supporting clinical staff." },
        { title: "Mobile Patrols", description: "Flexible coverage for parks, council estates, and dispersed government properties." },
        { title: "Conflict Management", description: "Specialized training to de-escalate volatile situations in both public and clinical settings." }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Public Sector & Healthcare."
                subtitle="Community First."
                description="Secure environments for government, education, and healthcare. We protect the institutions that serve the public with sensitivity, strength, and clinical awareness."
                imageSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <SectorStats
                title="Public"
                subtitle="Trust"
                stats={stats}
            />

            <SectorChallenges
                title="Sector"
                subtitle="Challenges"
                challenges={challenges}
                solutions={solutions}
            />

            <ServiceCTA />
        </main>
    );
}
