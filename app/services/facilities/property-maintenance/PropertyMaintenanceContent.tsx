'use client';

import ServiceHero from "@/components/services/ServiceHero";
import IntelligenceFeature from "@/components/services/IntelligenceFeature";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { Wrench, Clock, ClipboardCheck, Hammer, PaintBucket, Zap, Ruler, HardHat } from 'lucide-react';

export default function PropertyMaintenanceContent() {
    const features = [
        { icon: Clock, title: 'Reactive Repairs', desc: '24/7 emergency response for leaks, electrical faults, and structural damage.' },
        { icon: ClipboardCheck, title: 'Planned Maintenance', desc: 'Scheduled compliance checks and servicing to prevent costly failures.' },
        { icon: Ruler, title: 'Project Management', desc: 'End-to-end oversight of refurbishments and fit-out projects.' }
    ];

    const services = [
        { icon: Wrench, title: 'General Repairs', desc: 'Plumbing, joinery, and handyman services for daily wear and tear.' },
        { icon: Zap, title: 'Electrical Works', desc: 'NICEIC certified testing, installation, and maintenance.' },
        { icon: PaintBucket, title: 'Painting & Decorating', desc: 'Internal and external revitalization for commercial properties.' },
        { icon: Hammer, title: 'Refurbishment', desc: 'Office fit-outs and structural alterations managed by experts.' },
    ];

    const MaintenanceVisual = (
        <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="relative w-80 bg-white rounded-xl shadow-2xl border-t-8 border-signal-red overflow-hidden">
                <div className="bg-slate-50 p-6 border-b border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                            <HardHat className="w-5 h-5 text-signal-red" />
                            <span className="font-bold text-slate-900">Job #4092</span>
                        </div>
                        <span className="bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded uppercase">In Progress</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900">HVAC Servicing</h3>
                    <p className="text-xs text-slate-500">Unit 4, North Wing</p>
                </div>

                <div className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                            <ClipboardCheck className="w-3 h-3 text-green-600" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-900">Site Risk Assessment</p>
                            <p className="text-[10px] text-slate-400">Completed 08:30 AM</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                            <Wrench className="w-3 h-3 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-900">Filter Replacement</p>
                            <p className="text-[10px] text-slate-400">Technician Assigned</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-slate-900 text-white flex justify-between items-center text-xs">
                    <span className="text-slate-400">ETA Completion</span>
                    <span className="font-bold">2 Hours</span>
                </div>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Property Maintenance."
                subtitle="Built to Last."
                description="Preserve the value of your assets. Our multi-skilled tradespeople provide proactive maintenance and reactive repairs to keep your business running smoothly."
                imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <IntelligenceFeature
                topicTag="Total Care"
                title="Fix it fast."
                subtitle="Fix it right."
                description="Downtime costs money. Whether it's a leaking pipe or a full office refurbishment, our responsive team ensures minimal disruption to your daily operations."
                features={features}
                rightContent={MaintenanceVisual}
            />

            <ServiceGrid
                title="Maintenance"
                subtitle="Trades"
                description="Expert services covering every aspect of building fabric and systems care."
                services={services}
            />

            <ServiceCTA />
        </main>
    );
}
