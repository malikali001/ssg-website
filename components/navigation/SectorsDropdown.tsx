'use client';

import Link from 'next/link';
import { Building2, ShoppingCart, Briefcase, Heart, GraduationCap, Hotel } from 'lucide-react';

export default function SectorsDropdown() {
    const sectors = [
        { name: 'Construction', href: '/sectors/construction', icon: Building2 },
        { name: 'Retail', href: '/sectors/retail', icon: ShoppingCart },
        { name: 'Corporate', href: '/sectors/corporate', icon: Briefcase },
        { name: 'Healthcare', href: '/sectors/healthcare', icon: Heart },
        { name: 'Education', href: '/sectors/education', icon: GraduationCap },
        { name: 'Hospitality', href: '/sectors/hospitality', icon: Hotel },
    ];

    return (
        <div className="w-[350px] bg-white border border-slate-200 rounded-xl shadow-2xl p-4 animate-fade-in z-50">
            <div className="grid grid-cols-2 gap-2">
                {sectors.map((sector) => {
                    const Icon = sector.icon;
                    return (
                        <Link
                            key={sector.href}
                            href={sector.href}
                            className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200 group"
                        >
                            <Icon className="w-8 h-8 text-slate-400 group-hover:text-signal-red transition-colors" />
                            <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors text-center">
                                {sector.name}
                            </span>
                        </Link>
                    );
                })}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                <Link href="/case-studies" className="text-xs font-bold text-signal-red hover:underline uppercase tracking-wide">
                    View Case Studies →
                </Link>
            </div>
        </div>
    );
}
