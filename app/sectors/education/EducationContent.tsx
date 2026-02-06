'use client';

import ServiceHero from "@/components/services/ServiceHero";
import SectorStats from "@/components/sectors/SectorStats";
import SectorChallenges from "@/components/sectors/SectorChallenges";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { GraduationCap, ShieldCheck, Heart, Users, School, Lock } from 'lucide-react';

export default function EducationContent() {
    const stats = [
        { label: "DBS Enhanced", value: "100%", icon: ShieldCheck },
        { label: "Safeguarding", value: "Level 3", icon: Heart },
        { label: "Campuses", value: "20+", icon: School },
        { label: "Student Safety", value: "Priority", icon: GraduationCap }
    ];

    const challenges = [
        { title: "Campus Permeability", description: "Multiple entry points on large campuses make it difficult to track who is on site." },
        { title: "Student Welfare", description: "Protecting students from external threats, substance abuse, and anti-social behavior." },
        { title: "Asset Protection", description: "Expensive IT equipment and laboratories are high-value targets for theft." }
    ];

    const solutions = [
        { title: "Safeguarding Officers", description: "Security staff trained specifically in child protection and vulnerable adult care." },
        { title: "Zoned Access Control", description: "Lockdown capabilities for specific buildings or wings during emergencies." },
        { title: "Friendly Presence", description: "Uniforms and demeanor adapted to be approachable for students while deterring threats." }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Education Security."
                subtitle="Safe Learning."
                description="Creating secure environments for schools, colleges, and universities. Our officers are DBS enhanced checked and safeguarding trained."
                imageSrc="/images/education-hero.jpg"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <SectorStats
                title="Campus"
                subtitle="Metrics"
                stats={stats}
            />

            <SectorChallenges
                title="Safety"
                subtitle="Strategy"
                challenges={challenges}
                solutions={solutions}
            />

            <ServiceCTA />
        </main>
    );
}
