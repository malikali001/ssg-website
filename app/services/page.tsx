import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Building2, ArrowRight } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
    title: 'Our Services | SSG UK Ltd',
    description: 'Elite security solutions and comprehensive facilities management services across the UK.',
    keywords: ['Security Services', 'Facilities Management', 'UK Security', 'FM Services'],
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <PageHero
                badge="Our Services"
                title="Our"
                subtitle="Services"
                description="Choose your path to comprehensive protection and operational excellence."
                imageSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
            />
            <section className="section-container">

                {/* Two Main Service Categories */}
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Security Solutions */}
                    <Link
                        href="/services/security"
                        className="group relative bg-gunmetal rounded-lg p-12 border-2 border-transparent hover:border-signal-red transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-signal-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10">
                            <Shield className="w-20 h-20 text-signal-red mb-6 group-hover:scale-110 transition-transform duration-300" />

                            <h2 className="text-4xl font-montserrat font-bold mb-4 group-hover:text-signal-red transition-colors duration-300">
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
                            </ul>

                            <div className="flex items-center gap-2 text-signal-red font-semibold group-hover:gap-4 transition-all duration-300">
                                <span>Explore Security Services</span>
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </Link>

                    {/* Facilities Management */}
                    <Link
                        href="/services/facilities"
                        className="group relative bg-gunmetal rounded-lg p-12 border-2 border-transparent hover:border-signal-red transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-signal-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10">
                            <Building2 className="w-20 h-20 text-signal-red mb-6 group-hover:scale-110 transition-transform duration-300" />

                            <h2 className="text-4xl font-montserrat font-bold mb-4 group-hover:text-signal-red transition-colors duration-300">
                                Facilities Management
                            </h2>

                            <p className="text-text-muted text-lg mb-6">
                                Sustainable, comprehensive FM solutions for modern workplaces
                            </p>

                            <ul className="space-y-3 mb-8 text-text-main">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-signal-red rounded-full" />
                                    Commercial Cleaning
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-signal-red rounded-full" />
                                    Waste Management
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-signal-red rounded-full" />
                                    Property Maintenance
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-signal-red rounded-full" />
                                    Concierge Services
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-signal-red rounded-full" />
                                    Eco-Friendly Solutions
                                </li>
                            </ul>

                            <div className="flex items-center gap-2 text-signal-red font-semibold group-hover:gap-4 transition-all duration-300">
                                <span>Explore FM Services</span>
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
