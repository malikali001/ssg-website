'use client';

import ServiceHero from "@/components/services/ServiceHero";
import IntelligenceFeature from "@/components/services/IntelligenceFeature";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { UserCheck, Shield, MessageSquare, Coffee, Building, Users, BadgeCheck, Lock } from 'lucide-react';

export default function ConciergeContent() {
    const features = [
        { icon: UserCheck, title: 'Vetted Professionals', desc: 'Officers selected for emotional intelligence and immaculate presentation.' },
        { icon: MessageSquare, title: 'Communication Hub', desc: 'Acting as the central point of contact for building management and visitors.' },
        { icon: Shield, title: 'Discreet Protection', desc: 'Security monitoring that blends seamlessly into the reception environment.' }
    ];

    const services = [
        { icon: UserCheck, title: 'Front of House', desc: 'Greeting visitors, managing badges, and providing first impressions.' },
        { icon: Building, title: 'Access Management', desc: 'Controlling entry points and verifying visitor credentials.' },
        { icon: Coffee, title: 'Tenant Services', desc: 'Handling mail, deliveries, and resident inquiries with care.' },
        { icon: Shield, title: 'Conflict Resolution', desc: 'De-escalating situations professionally without disrupting the environment.' },
    ];

    const ConciergeVisual = (
        <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="relative w-72 h-96 bg-white rounded-xl shadow-2xl border border-slate-100 p-8 flex flex-col items-center text-center rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-24 h-24 bg-slate-100 rounded-full mb-6 overflow-hidden border-2 border-slate-200">
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400">
                        <Users className="w-12 h-12" />
                    </div>
                </div>
                <div className="w-full border-b border-slate-100 pb-4 mb-4">
                    <h3 className="text-xl font-bold text-slate-900">Sarah Jenkins</h3>
                    <div className="text-xs text-signal-red font-bold uppercase tracking-wider">Head Concierge</div>
                </div>

                <div className="space-y-3 w-full">
                    <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-2 rounded">
                        <BadgeCheck className="w-4 h-4 text-green-500" />
                        <span>SIA Licensed</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-2 rounded">
                        <MessageSquare className="w-4 h-4 text-blue-500" />
                        <span>First Aid Trained</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600 bg-slate-50 p-2 rounded">
                        <Lock className="w-4 h-4 text-slate-500" />
                        <span>Fire Marshal</span>
                    </div>
                </div>

                <div className="mt-auto pt-6 text-[10px] text-slate-400 uppercase tracking-widest">
                    SSG Elite Services
                </div>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-white">
            <ServiceHero
                title="Concierge Security."
                subtitle="Service Meets Safety."
                description="The face of your building, the guardians of your people. Our concierge security officers provide a seamless blend of five-star hospitality and vigilant protection."
                imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <IntelligenceFeature
                topicTag="Hospitality Focus"
                title="Warm Welcome."
                subtitle="Secure Entry."
                description="Security doesn't have to be intimidating. Our concierge officers are trained to provide an exceptional visitor experience while maintaining strict access control protocols."
                features={features}
                rightContent={ConciergeVisual}
            />

            <ServiceGrid
                title="Concierge"
                subtitle="Duties"
                description="Enhancing the tenant and visitor experience through professional, multi-skilled security personnel."
                services={services}
            />

            <ServiceCTA />
        </main>
    );
}
