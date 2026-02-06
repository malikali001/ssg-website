'use client';

import ServiceHero from "@/components/services/ServiceHero";
import IntelligenceFeature from "@/components/services/IntelligenceFeature";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { Users, Phone, CalendarCheck, Monitor, Coffee, Printer, BadgeCheck, Smile } from 'lucide-react';

export default function ReceptionContent() {
    const features = [
        { icon: Smile, title: 'First Impressions', desc: 'Impeccably presented staff trained in corporate hospitality.' },
        { icon: Monitor, title: 'Visitor Management', desc: 'Digital check-in systems to track guests and notify hosts instantly.' },
        { icon: Phone, title: 'Switchboard Support', desc: 'Professional call handling and message taking for your business.' }
    ];

    const services = [
        { icon: Users, title: 'Front of House', desc: 'Welcoming guests and managing the reception area.' },
        { icon: CalendarCheck, title: 'Meeting Room Mgmt', desc: 'Booking coordination and preparation of conference spaces.' },
        { icon: BadgeCheck, title: 'Access Admin', desc: 'Issuing visitor passes and maintaining security logs.' },
        { icon: Coffee, title: 'Hospitality', desc: 'Refreshment service for meetings and waiting areas.' },
        { icon: Printer, title: 'Admin Support', desc: 'Mail sorting, courier management, and general office assistance.' },
    ];

    const CheckInVisual = (
        <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="relative w-72 h-[500px] bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl border-4 border-slate-800">
                {/* Tablet Screen */}
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative flex flex-col">
                    {/* Header */}
                    <div className="bg-deep-navy p-6 pt-10 text-white text-center">
                        <div className="text-xl font-montserrat font-bold mb-1">Welcome</div>
                        <p className="text-xs text-slate-300">Please sign in to continue</p>
                    </div>

                    {/* Form UI */}
                    <div className="flex-1 p-6 flex flex-col justify-center space-y-4">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase">Full Name</label>
                            <div className="h-10 bg-slate-50 rounded-lg border border-slate-200 w-full animate-pulse"></div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase">Company</label>
                            <div className="h-10 bg-slate-50 rounded-lg border border-slate-200 w-full"></div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase">Host</label>
                            <div className="h-10 bg-slate-50 rounded-lg border border-slate-200 w-full"></div>
                        </div>

                        <div className="pt-4">
                            <div className="h-12 bg-signal-red rounded-xl shadow-lg shadow-red-200 flex items-center justify-center text-white font-bold text-sm">
                                Notify Host
                            </div>
                        </div>
                    </div>

                    {/* Success Popover (Floating) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 bg-white/95 backdrop-blur rounded-xl shadow-xl p-4 text-center border border-slate-100 animate-bounce-custom">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <BadgeCheck className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="text-sm font-bold text-slate-900">Sign In Complete</div>
                        <div className="text-[10px] text-slate-500">Host Notified</div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Reception Services."
                subtitle="Excellence in Hospitality."
                description="The first interaction defines your brand. Our reception and concierge teams provide a seamless, professional welcome that leaves a lasting impression."
                imageSrc="/images/reception-hero.jpg"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <IntelligenceFeature
                topicTag="Visitor Experience"
                title="Warm Welcome."
                subtitle="Seamless entry."
                description="We blend five-star hospitality with efficient building management. Our staff are trained to represent your brand values while ensuring smooth operations at the front desk."
                features={features}
                rightContent={CheckInVisual}
            />

            <ServiceGrid
                title="Concierge"
                subtitle="Duties"
                description="More than just a greeting. A comprehensive front-of-house solution for corporate offices."
                services={services}
            />

            <ServiceCTA />
        </main>
    );
}
