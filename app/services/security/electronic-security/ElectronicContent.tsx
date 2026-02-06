'use client';

import ServiceHero from "@/components/services/ServiceHero";
import IntelligenceFeature from "@/components/services/IntelligenceFeature";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { Camera, Eye, Wifi, Server, Lock, Bell, Smartphone } from 'lucide-react';

export default function ElectronicContent() {
    const features = [
        { icon: Eye, title: '24/7 Visual Verification', desc: 'Our operators visually confirm intruders before dispatching police or guards.' },
        { icon: Wifi, title: 'Smart Integration', desc: 'Systems that talk to each other—alarms triggering cameras for instant focus.' },
        { icon: Server, title: 'Cloud Redundancy', desc: 'Video footage backed up off-site to prevent tampering or data loss.' }
    ];

    const services = [
        { icon: Camera, title: 'CCTV Systems', desc: 'HD and 4K surveillance with analytics and thermal imaging.' },
        { icon: Lock, title: 'Access Control', desc: 'Biometric, fob, and card systems for door management.' },
        { icon: Bell, title: 'Intruder Alarms', desc: 'Grade 2 and 3 wired and wireless alarm systems.' },
        { icon: Smartphone, title: 'Remote Viewing', desc: 'View your cameras from anywhere via secure mobile app.' },
    ];

    const MonitoringVisual = (
        <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="relative w-80 h-80 bg-slate-950 rounded-full flex items-center justify-center border border-slate-800 shadow-2xl">
                <div className="absolute inset-0 border border-signal-red/20 rounded-full animate-ping duration-[3s]"></div>
                <div className="absolute inset-4 border border-signal-red/40 rounded-full animate-ping delay-75 duration-[3s]"></div>
                <div className="absolute inset-12 border border-signal-red/60 rounded-full animate-ping delay-150 duration-[3s]"></div>

                <div className="relative z-10 w-32 h-32 bg-slate-900 rounded-full flex flex-col items-center justify-center border-2 border-signal-red shadow-[0_0_50px_rgba(227,30,36,0.5)]">
                    <Eye className="w-12 h-12 text-signal-red mb-2" />
                    <div className="text-[10px] font-bold text-white tracking-widest uppercase animate-pulse">Recording</div>
                </div>

                <div className="absolute -right-10 top-10 bg-white p-3 rounded-lg shadow-lg border-l-4 border-signal-red text-xs">
                    <div className="font-bold text-slate-900">NSI Gold</div>
                    <div className="text-slate-500">Monitoring</div>
                </div>
            </div>
        </div>
    );

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Electronic Security."
                subtitle="Always Watching."
                description="Technology never sleeps. Our integrated security systems monitor your assets 24/7, providing instant alerts and verified police response."
                imageSrc="/images/cctv-hero.jpg"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <IntelligenceFeature
                topicTag="Remote Surveillance"
                title="Eyes on."
                subtitle="Threats gone."
                description="A camera is only as good as the person watching it. Our systems feed directly into our NSI Gold Control Room for immediate intervention."
                features={features}
                rightContent={MonitoringVisual}
            />

            <ServiceGrid
                title="System"
                subtitle="Architecture"
                description="Scalable electronic solutions designed to integrate with your physical security measures."
                services={services}
            />

            <ServiceCTA />
        </main>
    );
}
