'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';

const partners = [
    {
        name: 'SSG Foundation',
        image: '/images/social-responsibilities/6-sr.jpg',
        category: 'Foundation',
    },
    {
        name: 'Alzheimer\u2019s Society',
        image: '/images/social-responsibilities/1-rs.jpg',
        category: 'Health & Wellbeing',
    },
    {
        name: 'Macmillan Cancer Support',
        image: '/images/social-responsibilities/3-rs.jpg',
        category: 'Health & Wellbeing',
    },
    {
        name: 'Marie Curie Cancer Care',
        image: '/images/social-responsibilities/8-rs.jpg',
        category: 'Health & Wellbeing',
    },
    {
        name: 'Basildon and Thurrock University Hospital NHS Foundation Trust',
        image: '/images/social-responsibilities/2-rs.jpg',
        category: 'Community',
    },
    {
        name: 'Islamic Relief',
        image: '/images/social-responsibilities/4-rs.jpg',
        category: 'Community',
    },
    {
        name: 'Employee Assistance Programme',
        image: '/images/social-responsibilities/5-rs.jpg',
        category: 'Employee Wellbeing',
    },
    {
        name: 'Employee Welfare',
        image: '/images/social-responsibilities/7-rs.jpg',
        category: 'Employee Wellbeing',
    },
];

export default function SocialResponsibilitiesContent() {
    const [expanded, setExpanded] = useState<number | null>(null);

    return (
        <main className="min-h-screen">
            <PageHero
                badge="Social Responsibilities"
                title="Our Social"
                subtitle="Responsibilities"
                description="Supporting the communities we serve and the people who make SSG what it is."
                imageSrc="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80"
                ctaLabel="Contact Us"
                ctaHref="/contact-us"
            />

            {/* Partner Grid */}
            <section className="bg-white">
                <div className="section-container">
                    <div className="text-center mb-12">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--signal-red)] mb-3">
                            Our Partners & Initiatives
                        </span>
                        <h2 className="font-bold text-[var(--deep-navy)]">
                            Making a <span className="text-[var(--accent-amber)]">Difference</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
                        {partners.map((partner, idx) => (
                            <button
                                key={idx}
                                onClick={() => setExpanded(idx)}
                                className="group bg-white rounded-xl border border-[var(--border-color)] overflow-hidden hover:shadow-xl hover:border-[var(--signal-red)]/20 transition-all duration-300 cursor-pointer"
                            >
                                <div className="aspect-square bg-[var(--section-light)] flex items-center justify-center p-6 sm:p-8">
                                    <Image
                                        src={partner.image}
                                        alt={partner.name}
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <p className="text-sm font-bold text-[var(--deep-navy)] leading-tight mb-1">{partner.name}</p>
                                    <span className="text-[10px] font-medium text-[var(--text-muted)] uppercase tracking-wider">
                                        {partner.category}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expanded Image Overlay */}
            {expanded !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                    onClick={() => setExpanded(null)}
                >
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />
                    <div
                        className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden max-w-lg w-full animate-[scaleIn_0.3s_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-color)]">
                            <div>
                                <h3 className="text-base font-bold text-[var(--deep-navy)]">{partners[expanded].name}</h3>
                                <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{partners[expanded].category}</span>
                            </div>
                            <button
                                onClick={() => setExpanded(null)}
                                className="w-9 h-9 rounded-full bg-[var(--section-light)] flex items-center justify-center hover:bg-[var(--signal-red)] hover:text-white transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="bg-[var(--section-light)] flex items-center justify-center p-10 sm:p-14">
                            <Image
                                src={partners[expanded].image}
                                alt={partners[expanded].name}
                                width={400}
                                height={400}
                                className="w-full max-w-xs object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
