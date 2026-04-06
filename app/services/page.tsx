import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ArrowRight } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
    title: 'Our Services | SSG UK Ltd',
    description: 'Elite security solutions and reception services across the UK.',
    keywords: ['Security Services', 'UK Security', 'Reception Services'],
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <PageHero
                badge="Our Services"
                title="Security &"
                subtitle="Reception Services"
                description="SIA approved manned guarding, mobile patrols, concierge and professional front-of-house services tailored to your needs."
                imageSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
            />
            <section className="section-container">

                {/* Service Category */}
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/services/security/manned-guarding"
                        className="group relative bg-gunmetal rounded-lg p-6 sm:p-8 md:p-12 border-2 border-transparent hover:border-signal-red transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-signal-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10">
                            <Shield className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-signal-red mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" />

                            <h2 className="font-bold mb-4 group-hover:text-signal-red transition-colors duration-300">
                                Security Solutions
                            </h2>

                            <p className="text-text-muted text-lg mb-6">
                                Elite protection services powered by the SSG Intelligence Center
                            </p>

                            <ul className="space-y-3 mb-8 text-text-main">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-signal-red rounded-full" />
                                    Manned Guarding
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-signal-red rounded-full" />
                                    K9 Units
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-signal-red rounded-full" />
                                    Mobile Patrols
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-signal-red rounded-full" />
                                    Key Holding & Alarm Response
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-signal-red rounded-full" />
                                    24/7 CCTV Monitoring
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-signal-red rounded-full" />
                                    Reception Services
                                </li>
                            </ul>

                            <div className="flex items-center gap-2 text-signal-red font-semibold group-hover:gap-4 transition-all duration-300">
                                <span>Explore Security Services</span>
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
