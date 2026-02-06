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
        <section id="trust-bar" className="relative -mt-20 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-lg border border-white/20 p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-200">

                    {/* Power Numbers */}
                    <div className="grid grid-cols-2 gap-6 pr-0 lg:pr-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-deep-navy font-montserrat">24/7</div>
                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mt-1">National Coverage</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-deep-navy font-montserrat">15+</div>
                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mt-1">Years Excellence</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-deep-navy font-montserrat">100%</div>
                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mt-1">SIA ACS Approved</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-deep-navy font-montserrat">ISO</div>
                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mt-1">9001 & 14001</div>
                        </div>
                    </div>

                    {/* Accreditations */}
                    <div className="flex flex-wrap justify-center items-center gap-8 pl-0 lg:pl-8 pt-8 lg:pt-0">
                        {accreditations.slice(0, 4).map((accred, index) => (
                            <div
                                key={index}
                                className="w-24 h-12 relative grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                                title={accred.name}
                            >
                                {/* Using text for now as logos might not exist in correct paths yet, or use placeholders */}
                                {/* In a real scenario, use Image component. For now, text representation or simple div if images missing */}
                                <div className="w-full h-full flex items-center justify-center border border-gray-200 rounded bg-gray-50 text-xs text-center font-bold text-gray-400">
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
