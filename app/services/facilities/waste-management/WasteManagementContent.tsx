'use client';

import ServiceHero from "@/components/services/ServiceHero";
import IntelligenceFeature from "@/components/services/IntelligenceFeature";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { Recycle, RefreshCw, BarChart3, Trash2, Truck, Leaf, FileCheck, Ban } from 'lucide-react';

export default function WasteManagementContent() {
    const features = [
        { icon: Ban, title: 'Zero to Landfill', desc: 'Committed to diverting 100% of your waste from landfill sites.' },
        { icon: BarChart3, title: 'Waste Auditing', desc: 'Detailed reporting on your waste streams and carbon footprint reduction.' },
        { icon: RefreshCw, title: 'Circular Economy', desc: 'Turning your waste into resources through responsible recycling partners.' }
    ];

    const services = [
        { icon: Trash2, title: 'General Waste', desc: 'Regular collections for non-recyclable commercial waste.' },
        { icon: Recycle, title: 'Dry Mixed Recycling', desc: 'Simple separation solutions for paper, card, and plastics.' },
        { icon: Truck, title: 'Hazardous Disposal', desc: 'Compliant removal of chemical, medical, and WEEE waste.' },
        { icon: Leaf, title: 'Site Clearances', desc: 'Large scale removal of fly-tipped or construction waste.' },
    ];

    const RecyclingVisual = (
        <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="relative w-80 h-80">
                {/* Rotating Ring */}
                <div className="absolute inset-0 border-4 border-dashed border-green-200 rounded-full animate-spin-slow"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-56 h-56 bg-white rounded-full shadow-2xl flex flex-col items-center justify-center text-center p-6 border-4 border-green-500">
                        <Recycle className="w-16 h-16 text-green-500 mb-2" />
                        <div className="text-3xl font-black text-slate-900">100%</div>
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Diverted from<br />Landfill</div>
                    </div>
                </div>

                {/* Satellites */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center w-24">
                    <Leaf className="w-6 h-6 text-green-500 mb-1" />
                    <span className="text-[10px] font-bold text-slate-600">Eco-Friendly</span>
                </div>

                <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-6 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex flex-col items-center w-24">
                    <FileCheck className="w-6 h-6 text-blue-500 mb-1" />
                    <span className="text-[10px] font-bold text-slate-600">Compliant</span>
                </div>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-white">
            <ServiceHero
                title="Waste Management."
                subtitle="Responsible Disposal."
                description="Sustainable waste solutions that reduce costs and your carbon footprint. We help you achieve zero-to-landfill status through intelligent sorting and recycling."
                imageSrc="/images/office-hero.png"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <IntelligenceFeature
                topicTag="Sustainable Future"
                title="Waste less."
                subtitle="Recycle more."
                description="Effective waste management isn't just about removal; it's about strategy. We analyze your waste streams to implement cost-effective, environmentally sound disposal routes."
                features={features}
                rightContent={RecyclingVisual}
            />

            <ServiceGrid
                title="Waste"
                subtitle="Streams"
                description="Comprehensive collection and disposal services for every type of commercial waste."
                services={services}
            />

            <ServiceCTA />
        </main>
    );
}
