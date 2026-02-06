'use client';

import ServiceHero from "@/components/services/ServiceHero";
import SectorStats from "@/components/sectors/SectorStats";
import SectorChallenges from "@/components/sectors/SectorChallenges";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { HeartPulse, Shield, Activity, Stethoscope, Lock, Users } from 'lucide-react';

export default function HealthcareContent() {
    const stats = [
        { label: "CQC Compliant", value: "Yes", icon: Activity },
        { label: "Patient Care", value: "Safe", icon: HeartPulse },
        { label: "Access Control", value: "Strict", icon: Lock },
        { label: "Staff Support", value: "24/7", icon: Stethoscope }
    ];

    const challenges = [
        { title: "Aggressive Behavior", description: "A&E departments and wards frequently face violence from intoxicated or distressed individuals." },
        { title: "Controlled Drugs", description: "Pharmacy and storage areas holding high-value narcotics require strict anti-theft measures." },
        { title: "Vulnerable Patients", description: "Ensuring patients with dementia or mental health issues remain within safe zones." }
    ];

    const solutions = [
        { title: "Bedside Watch", description: "Specialist officers trained to monitor high-risk patients 1-on-1, supporting clinical staff." },
        { title: "Conflict Management", description: "Advanced de-escalation training to handle aggression without disrupting medical care." },
        { title: "Access Zoning", description: "Strict control of public vs clinical areas to prevent unauthorized wandering." }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Healthcare Security."
                subtitle="Clinical Safety."
                description="Supporting the NHS and private healthcare providers. Our officers are trained to manage aggression and protect vulnerable patients in clinical settings."
                imageSrc="/images/healthcare-hero.png"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <SectorStats
                title="Clinical"
                subtitle="Standards"
                stats={stats}
            />

            <SectorChallenges
                title="Care"
                subtitle="Protection"
                challenges={challenges}
                solutions={solutions}
            />

            <ServiceCTA />
        </main>
    );
}
