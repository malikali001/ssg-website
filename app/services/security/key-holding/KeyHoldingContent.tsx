'use client';

import ServiceHero from "@/components/services/ServiceHero";
import IntelligenceFeature from "@/components/services/IntelligenceFeature";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { Key, ShieldAlert, Clock, Moon, Lock, FileCheck, Phone, MapPin } from 'lucide-react';

export default function KeyHoldingContent() {
    const features = [
        { icon: Clock, title: 'Rapid Response', desc: 'Guaranteed attendance times to alarm activations, 24/7/365.' },
        { icon: ShieldAlert, title: 'Risk Transfer', desc: 'We face the danger so your staff don\'t have to. Full liability coverage.' },
        { icon: FileCheck, title: 'BS 7984 Compliant', desc: 'Service delivered in strict accordance with British Standards for Key Holding.' }
    ];

    const services = [
        { icon: Key, title: 'Secure Key Storage', desc: 'Keys stored in unmarked, ballistic-rated local vaults.' },
        { icon: ShieldAlert, title: 'Alarm Response', desc: 'Immediate dispatch upon intruder, fire, or panic alarm triggers.' },
        { icon: Lock, title: 'Locks & Unlocks', desc: 'Scheduled opening and closing of your premises to suit business hours.' },
        { icon: Moon, title: 'Out of Hours Entry', desc: 'Granting access to contractors or emergency services when you aren\'t there.' },
    ];

    // Smart Key Visualization
    const SmartKeyVisual = (
        <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="relative w-80 h-80 flex items-center justify-center">
                {/* Outer Ring */}
                <div className="absolute inset-0 border-2 border-dashed border-slate-200 rounded-full animate-spin-slow"></div>

                {/* Central Shield */}
                <div className="relative z-10 w-48 h-48 bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col items-center justify-center p-6 transform hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 text-signal-red">
                        <Key className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-black text-slate-900 leading-none mb-1">21<span className="text-sm align-top text-slate-400">mins</span></div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Avg. Response</div>
                    </div>

                    {/* Status Indicator */}
                    <div className="absolute -bottom-4 bg-slate-900 text-white text-xs px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Keys Secure
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-0 right-10 bg-white p-2 rounded-lg shadow-lg border border-slate-100 flex gap-2 items-center animate-bounce-custom">
                    <ShieldAlert className="w-4 h-4 text-signal-red" />
                    <span className="text-xs font-bold text-slate-700">Alarm Triggered</span>
                </div>

                <div className="absolute bottom-10 left-0 bg-white p-2 rounded-lg shadow-lg border border-slate-100 flex gap-2 items-center animate-bounce-custom delay-150">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold text-slate-700">Unit Dispatched</span>
                </div>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Key Holding & Response."
                subtitle="Zero Risk. Total Peace of Mind."
                description="Protect your staff from out-of-hours call-out risks. Our SIA-licensed officers hold your keys securely and respond to alarms 24/7."
                imageSrc="/images/keyholding-hero.jpg"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <IntelligenceFeature
                topicTag="BS 7984 Certified"
                title="We hold the key."
                subtitle="You hold the control."
                description="Don't put your employees in harm's way. Our professional key holding service ensures that a trained Security Officer is the first responder to any site activation."
                features={features}
                rightContent={SmartKeyVisual}
            />

            <ServiceGrid
                title="Response"
                subtitle="Services"
                description="A complete solution for managing access and emergency response for your commercial property."
                services={services}
            />

            <ServiceCTA />
        </main>
    );
}
