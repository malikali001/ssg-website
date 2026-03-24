'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
    HardHat, ShoppingBag, Building2, Stethoscope,
    GraduationCap, Hotel, Truck, Landmark, ArrowUpRight
} from 'lucide-react';

const sectors = [
    { name: 'Construction', href: '/sectors/construction', icon: HardHat },
    { name: 'Retail', href: '/sectors/retail', icon: ShoppingBag },
    { name: 'Corporate & Office', href: '/sectors/corporate', icon: Building2 },
    { name: 'Healthcare', href: '/sectors/healthcare', icon: Stethoscope },
    { name: 'Education', href: '/sectors/education', icon: GraduationCap },
    { name: 'Hospitality', href: '/sectors/hospitality', icon: Hotel },
    { name: 'Logistics & Distribution', href: '/sectors/logistics', icon: Truck },
    { name: 'Public Sector', href: '/sectors/public-sector', icon: Landmark },
];

export default function SectorsDropdown() {
    return (
        <div className="w-full bg-white border-b border-[var(--border-color)] shadow-lg animate-fade-in">
            <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 py-10">
                <div className="flex gap-10">
                    {/* Left Side */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-2xl md:text-[1.7rem] font-bold text-[var(--deep-navy)] leading-snug mb-3 max-w-lg">
                            Trusted protection across every sector.
                        </h3>
                        <p className="text-[var(--text-muted)] text-sm mb-6 max-w-lg">
                            Tailored security and facilities solutions for the unique challenges of your industry.
                        </p>

                        <div className="border-t border-[var(--border-color)] mb-8" />

                        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                            {sectors.map((sector) => {
                                const Icon = sector.icon;
                                return (
                                    <Link
                                        key={sector.href}
                                        href={sector.href}
                                        className="flex items-center gap-3 group"
                                    >
                                        <Icon className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--signal-red)] transition-colors flex-shrink-0" />
                                        <span className="text-[15px] font-medium text-[var(--text-main)] group-hover:text-[var(--signal-red)] transition-colors">
                                            {sector.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side - Image Card */}
                    <div className="hidden lg:block w-[320px] flex-shrink-0">
                        <Link href="/sectors/construction" className="block group">
                            <div className="rounded-2xl overflow-hidden border border-[var(--border-color)] bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80"
                                        alt="Sectors"
                                        width={600}
                                        height={450}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-lg font-bold text-[var(--deep-navy)]">
                                            Our Sectors
                                        </h4>
                                        <div className="w-8 h-8 rounded-full bg-[var(--section-dark)] flex items-center justify-center group-hover:bg-[var(--signal-red)] transition-colors">
                                            <ArrowUpRight className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                        Industry-specific security delivering measurable results across all sectors.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
