'use client';

import ServiceHero from "@/components/services/ServiceHero";
import ServiceGrid from "@/components/services/ServiceGrid";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";
import { Sparkles, Trash2, Wrench, Monitor } from 'lucide-react';

export default function SoftServicesContent() {
    const services = [
        { icon: Sparkles, title: 'Commercial Cleaning', desc: 'Deep cleaning, sanitization, and daily office maintenance to high standards.' },
        { icon: Trash2, title: 'Waste Management', desc: 'Sustainable disposal and recycling solutions for commercial premises.' },
        { icon: Wrench, title: 'Property Maintenance', desc: 'Reactive and planned preventative maintenance for building fabrics.' },
        { icon: Monitor, title: 'Reception Services', desc: 'Front-of-house concierge and reception management.' },
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Soft Services."
                subtitle="Facility Excellence."
                description="Beyond security, we maintain the operational excellence of your working environment. Cleaning, maintenance, and concierge services delivered with the same SSG precision."
                imageSrc="https://images.unsplash.com/photo-1581578731117-10d52b4d80cd?auto=format&fit=crop&q=80"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <ServiceGrid
                title="Facilities"
                subtitle="Management"
                description="Integrated soft services to streamline your supplier base and improve service delivery."
                services={services}
            />

            <ServiceCTA />
        </main>
    );
}
