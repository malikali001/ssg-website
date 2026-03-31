'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
    Building, Leaf, Briefcase, Award, ClipboardList, ArrowUpRight
} from 'lucide-react';

const items = [
    { name: 'About SSG', href: '/about', icon: Building },
    { name: 'Management Responsibility', href: '/about/management-responsibility', icon: ClipboardList },
    { name: 'Our Accreditations', href: '/about/accreditations', icon: Award },
    { name: 'ESG & Compliance', href: '/esg', icon: Leaf },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Awards & Recognition', href: '/awards-recognition', icon: Award },
];

export default function AboutDropdown() {
    return (
        <div className="w-full bg-white border-b border-[var(--border-color)] shadow-lg animate-fade-in">
            <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 py-10">
                <div className="flex gap-10">
                    {/* Left Side */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-2xl md:text-[1.7rem] font-bold text-[var(--deep-navy)] leading-snug mb-3 max-w-lg">
                            Get to know SSG UK Ltd.
                        </h3>
                        <p className="text-[var(--text-muted)] text-sm mb-6 max-w-lg">
                            Our people, our values, and our commitment to excellence in security and facilities management.
                        </p>

                        <div className="border-t border-[var(--border-color)] mb-8" />

                        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                            {items.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center gap-3 group"
                                    >
                                        <Icon className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--signal-red)] transition-colors flex-shrink-0" />
                                        <span className="text-[15px] font-medium text-[var(--text-main)] group-hover:text-[var(--signal-red)] transition-colors">
                                            {item.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side - Image Card */}
                    <div className="hidden lg:block w-[320px] flex-shrink-0">
                        <Link href="/about" className="block group">
                            <div className="rounded-2xl overflow-hidden border border-[var(--border-color)] bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <Image
                                        src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80"
                                        alt="About SSG"
                                        width={600}
                                        height={450}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-lg font-bold text-[var(--deep-navy)]">
                                            About Us
                                        </h4>
                                        <div className="w-8 h-8 rounded-full bg-[var(--section-dark)] flex items-center justify-center group-hover:bg-[var(--signal-red)] transition-colors">
                                            <ArrowUpRight className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                        Learn about our mission, values, and the team behind SSG UK Ltd.
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
