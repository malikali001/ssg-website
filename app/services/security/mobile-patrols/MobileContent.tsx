'use client';

import ServiceHero from "@/components/services/ServiceHero";
import IntelligenceFeature from "@/components/services/IntelligenceFeature";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { Car, MapPin, Clock, Lock, Warehouse, Building } from 'lucide-react';

export default function MobileContent() {
    const features = [
        { icon: Car, title: 'Randomized Patterning', desc: 'Unpredictable patrol routes prevent criminals from timing their attacks.' },
        { icon: MapPin, title: 'GPS Geofencing', desc: 'Digital verification that our officer was physically on your site.' },
        { icon: Clock, title: 'Rapid Alarm Response', desc: 'Guaranteed arrival times for alarm activations and key holding call-outs.' }
    ];

    const services = [
        { icon: Car, title: 'Perimeter Patrols', desc: 'External checks of fencing, gates, and windows.' },
        { icon: Lock, title: 'Lock & Unlock', desc: 'Scheduled opening and closing services for your premises.' },
        { icon: Warehouse, title: 'Vacant Property', desc: 'Regular inspections to comply with insurance requirements.' },
        { icon: Building, title: 'Multi-Site Roaming', desc: 'Shared resource patrols for business parks and estates.' },
    ];

    const CoverageMap = (
        <div className="flex items-center justify-center h-full min-h-[400px] relative">
            <div className="relative w-full max-w-md aspect-square bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 p-8">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mb-4 animate-bounce">
                        <MapPin className="w-10 h-10 text-signal-red" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">Nationwide<br />Coverage</h3>
                    <p className="text-slate-500 mb-6">Local units in every major UK city.</p>

                    <div className="flex gap-2">
                        {['London', 'Manchester', 'Birmingham', 'Leeds'].map(city => (
                            <span key={city} className="text-xs bg-white border border-slate-200 px-2 py-1 rounded text-slate-600">
                                {city}
                            </span>
                        ))}
                    </div>
                    <div className="mt-2 text-xs text-slate-400">+50 more locations</div>
                </div>

                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-signal-red rounded-full animate-ping"></div>
                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-black rounded-full animate-ping delay-75"></div>
                <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-signal-red rounded-full animate-ping delay-150"></div>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-white">
            <ServiceHero
                title="Mobile Security Patrols."
                subtitle="Everywhere You Need Us."
                description="A cost-effective alternative to static guarding. Our high-visibility patrol units provide randomized checks and rapid response across the UK."
                imageSrc="/images/mobile-hero.jpg"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <IntelligenceFeature
                topicTag="Agile Protection"
                title="Routes verified."
                subtitle="Risks managed."
                description="We don't just drive by. Our officers conduct thorough external and internal checks, digitally logging every inspection point for your peace of mind."
                features={features}
                rightContent={CoverageMap}
            />

            <ServiceGrid
                title="Mobile"
                subtitle="Services"
                description="Flexible security solutions designed for businesses that don't require permanent specialized staff."
                services={services}
            />

            <ServiceCTA />
        </main>
    );
}
