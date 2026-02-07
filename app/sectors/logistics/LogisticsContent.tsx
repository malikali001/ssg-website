'use client';

import ServiceHero from "@/components/services/ServiceHero";
import SectorStats from "@/components/sectors/SectorStats";
import SectorChallenges from "@/components/sectors/SectorChallenges";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { Truck, Package, ShieldCheck, Warehouse, Clock, AlertTriangle } from 'lucide-react';

export default function LogisticsContent() {
    const stats = [
        { label: "TAPA Certified", value: "Ready", icon: ShieldCheck },
        { label: "Loss Reduction", value: "-45%", icon: AlertTriangle },
        { label: "Vehicles Checked", value: "10k+", icon: Truck },
        { label: "Gatehouse Ops", value: "24/7", icon: Clock }
    ];

    const challenges = [
        { title: "Cargo Theft", description: "High-value goods in transit or storage are prime targets for organized crime." },
        { title: "Unauthorized Access", description: "Busy yards with constant vehicle movement are vulnerable to infiltration." },
        { title: "Internal Shrinkage", description: "Employee theft and pilferage can significantly impact margins." }
    ];

    const solutions = [
        { title: "Gatehouse Management", description: "Strict access control, vehicle logging, and seal integrity checks." },
        { title: "Yard Marshals", description: "Ensuring safe vehicle movement and preventing unauthorized loitering." },
        { title: "Search Procedures", description: "Randomized vehicle and staff searches to deter and detect theft." }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Logistics Security."
                subtitle="Secure Supply Chain."
                description="Protecting your assets from the distribution center to the final mile. comprehensive security for warehouses, haulage, and logistics hubs."
                imageSrc="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <SectorStats
                title="Supply Chain"
                subtitle="Metrics"
                stats={stats}
            />

            <SectorChallenges
                title="Logistics"
                subtitle="Risks & Solutions"
                challenges={challenges}
                solutions={solutions}
            />

            <ServiceCTA />
        </main>
    );
}
