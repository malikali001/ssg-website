'use client';

import ServiceHero from "@/components/services/ServiceHero";
import IntelligenceFeature from "@/components/services/IntelligenceFeature";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { Sparkles, Leaf, CheckCircle, SprayCan, Building, Brush, Recycle, Droplets } from 'lucide-react';

export default function CommercialCleaningContent() {
    const features = [
        { icon: Leaf, title: 'Eco-Friendly Products', desc: 'Sustainable cleaning solutions that protect your staff and the environment.' },
        { icon: CheckCircle, title: 'CQC Compliance', desc: 'Medical-grade cleaning standards for healthcare and clinical environments.' },
        { icon: Sparkles, title: 'Deep Clean Assurance', desc: 'Rigorous auditing processes to maintain hygiene standards.' }
    ];

    const services = [
        { icon: Building, title: 'Office Cleaning', desc: 'Daily maintenance for corporate workspaces and HQs.' },
        { icon: SprayCan, title: 'Industrial Cleaning', desc: 'Specialized sanitation for factories and warehouses.' },
        { icon: Brush, title: 'Deep Cleaning', desc: 'Intensive revitalization for carpets, upholstery, and floors.' },
        { icon: Recycle, title: 'Clinical Cleaning', desc: 'Sterile environment management for surgeries and labs.' },
    ];

    const HygieneVisual = (
        <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="relative w-80 h-96 bg-white rounded-2xl shadow-xl border border-blue-50 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50"></div>

                {/* Animated Sparkles */}
                <div className="absolute top-10 right-10">
                    <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
                </div>
                <div className="absolute bottom-20 left-8">
                    <Sparkles className="w-6 h-6 text-blue-300 animate-pulse delay-300" />
                </div>

                <div className="relative z-10 p-8 flex flex-col h-full">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                        <Droplets className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-black text-slate-900 mb-2">Hygiene<br />Certified</h3>
                    <p className="text-slate-500 text-sm mb-6">Audit Score</p>

                    <div className="mt-auto">
                        <div className="flex items-end gap-2 mb-2">
                            <span className="text-5xl font-black text-slate-900">98</span>
                            <span className="text-xl font-bold text-slate-400 mb-1">%</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[98%] rounded-full"></div>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-xs font-bold text-green-600 bg-green-50 p-2 rounded-lg inline-flex">
                            <CheckCircle className="w-3 h-3" />
                            Passed Inspection
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Commercial Cleaning."
                subtitle="Immaculate Standards."
                description="Create a pristine environment for your business. Our sustainable, high-spec cleaning services ensure your premises reflect your professional excellence."
                imageSrc="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <IntelligenceFeature
                topicTag="Hygiene Excellence"
                title="More than clean."
                subtitle="Clinically safe."
                description="We don't just wipe surfaces; we engineer safe environments. From daily office maintenance to specialized deep cleans, our standards are rigorous and audited."
                features={features}
                rightContent={HygieneVisual}
            />

            <ServiceGrid
                title="Cleaning"
                subtitle="Solutions"
                description="Tailored cleaning schedules designed to minimize disruption and maximize hygiene."
                services={services}
            />

            <ServiceCTA />
        </main>
    );
}
