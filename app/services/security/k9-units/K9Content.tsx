'use client';

import ServiceHero from "@/components/services/ServiceHero";
import IntelligenceFeature from "@/components/services/IntelligenceFeature";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { ShieldCheck, Search, Zap, Skull, Shield } from 'lucide-react';

export default function K9Content() {
    const features = [
        { icon: ShieldCheck, title: 'NASDU Certified Teams', desc: 'Fully qualified handlers and dogs meeting National Association of Security Dog Users standards.' },
        { icon: Zap, title: 'Rapid Deployment', desc: 'Quick response units available nationwide for emergency security breaches.' },
        { icon: Search, title: 'Specialist Detection', desc: 'Training for drugs, explosives, and pyrotechnics detection.' }
    ];

    const services = [
        { icon: Shield, title: 'General Purpose Patrol', desc: 'Visual deterrent and protection for large perimeters.' },
        { icon: Search, title: 'Drug Detection', desc: 'Proactive searching for illicit substances at events or workplaces.' },
        { icon: Skull, title: 'Explosive Detection', desc: 'Specialized units for high-threat environments and counter-terrorism.' },
        { icon: Zap, title: 'Response Units', desc: 'Emergency support for alarm activations and hostile situations.' },
    ];

    const NasduBadge = (
        <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="relative w-64 h-64 bg-slate-900 rounded-full flex items-center justify-center border-4 border-signal-red shadow-2xl">
                <div className="text-center p-6">
                    <div className="text-4xl font-black text-white mb-2">NASDU</div>
                    <div className="text-sm font-bold text-slate-400 tracking-widest uppercase">Certified</div>
                    <div className="mt-4 text-xs text-slate-500">National Association of<br />Security Dog Users</div>
                </div>
                <div className="absolute -bottom-4 bg-signal-red text-white px-6 py-2 rounded-full font-bold shadow-lg">
                    Level 2 & 3
                </div>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Elite K9 Units."
                subtitle="Unmatched Detection."
                description="When visual presence isn't enough. Our NASDU-certified dog units provide an impenetrable layer of security for high-risk sites and events."
                imageSrc="/images/k9-hero.jpg"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <IntelligenceFeature
                topicTag="Specialist Protection"
                title="Senses Sharp."
                subtitle="Standards High."
                description="A trained K9 unit offers detection capabilities that no electronic system can match. We strictly adhere to BS 8517 codes of practice."
                features={features}
                rightContent={NasduBadge}
            />

            <ServiceGrid
                title="K9 Operational"
                subtitle="Capabilities"
                description="Versatile canine teams trained for specific operational environments."
                services={services}
            />

            <ServiceCTA />
        </main>
    );
}
