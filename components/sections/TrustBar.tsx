'use client';

import Image from 'next/image';

export default function TrustBar() {
    // Placeholder for accreditation logos
    const accreditations = [
        { name: 'SIA Approved Contractor', logo: '/logos/sia.svg' },
        { name: 'ISO 9001', logo: '/logos/iso-9001.svg' },
        { name: 'ISO 14001', logo: '/logos/iso-14001.svg' },
        { name: 'SafeContractor', logo: '/logos/safecontractor.svg' },
        { name: 'Constructionline', logo: '/logos/constructionline.svg' },
        { name: 'CHAS', logo: '/logos/chas.svg' },
    ];

    return (
        <section className="bg-gunmetal border-y border-text-muted/10 py-8 overflow-hidden">
            <div className="relative">
                {/* Scrolling container */}
                <div className="flex animate-scroll-left">
                    {/* First set */}
                    <div className="flex items-center gap-12 px-6">
                        {accreditations.map((accred, index) => (
                            <div
                                key={`first-${index}`}
                                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                            >
                                <div className="text-text-muted text-sm font-semibold text-center">
                                    {accred.name}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="flex items-center gap-12 px-6">
                        {accreditations.map((accred, index) => (
                            <div
                                key={`second-${index}`}
                                className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                            >
                                <div className="text-text-muted text-sm font-semibold text-center">
                                    {accred.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
