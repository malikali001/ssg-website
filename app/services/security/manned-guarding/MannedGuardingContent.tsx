'use client';

import ServiceHero from "@/components/services/ServiceHero";
import IntelligenceFeature from "@/components/services/IntelligenceFeature";
import IntelligencePhoneMockup from "@/components/services/IntelligencePhoneMockup";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { ShieldCheck, Eye, DoorOpen, Users, Radio, Car, Building, HardHat, Activity, Smartphone, Shield } from 'lucide-react';

export default function MannedGuardingContent() {
    const features = [
        { icon: Activity, title: 'Live Incident Reporting', desc: 'Instant alerts with photo evidence and GPS timestamps.' },
        { icon: Smartphone, title: 'NFC Patrol Verification', desc: 'Guaranteed presence checks at critical checkpoints.' },
        { icon: Shield, title: 'Predictive Risk Analysis', desc: 'Data-driven insights to prevent breaches before they happen.' }
    ];

    const services = [
        { icon: ShieldCheck, title: 'Static Guarding', desc: 'Visible deterrence and rapid response at fixed positions.' },
        { icon: DoorOpen, title: 'Access Control', desc: 'Strict entry management for staff, visitors, and vehicles.' },
        { icon: Radio, title: 'Concierge Security', desc: 'Front-of-house professionals blending service with safety.' },
        { icon: Car, title: 'Mobile Patrols', desc: 'Randomized perimeter checks with GPS-verified routing.' },
        { icon: Eye, title: 'CCTV Monitoring', desc: 'Proactive surveillance from our 24/7 NSI Gold control room.' },
        { icon: Users, title: 'Event Security', desc: 'Crowd management and VIP close protection.' },
        { icon: Building, title: 'Key Holding', desc: 'Secure key management and verified alarm response.' },
        { icon: HardHat, title: 'Construction Security', desc: 'Site safety enforcement and asset protection.' },
    ];

    return (
        <main className="min-h-screen bg-white">
            <ServiceHero
                title="Elite Manned Guarding."
                subtitle="Intelligent Protection."
                description="We don't just supply guards; we provide highly trained security professionals backed by data-driven intelligence to protect your people, assets, and reputation."
                imageSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <IntelligenceFeature
                title="Smart Guards."
                subtitle="Smarter Data."
                description="Our officers aren't just standing guard—they are connected nodes in a live intelligence network. Through our proprietary portal, every patrol, incident, and observation is logged in real-time."
                features={features}
                rightContent={<IntelligencePhoneMockup />}
            />

            <ServiceGrid
                title="Comprehensive"
                subtitle="Protection"
                description="From corporate headquarters to industrial estates, our officers are adaptable, authoritative, and rigorously trained."
                services={services}
            />

            <ServiceCTA />
        </main>
    );
}
