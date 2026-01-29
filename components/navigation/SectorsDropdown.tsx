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
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[320px] bg-gunmetal border border-text-muted/20 rounded-lg shadow-2xl p-4 animate-fade-in">
            <div className="grid grid-cols-2 gap-2">
                {sectors.map((sector) => {
                    const Icon = sector.icon;
                    return (
                        <Link
                            key={sector.href}
                            href={sector.href}
                            className="flex flex-col items-center gap-2 p-4 rounded hover:bg-obsidian transition-all duration-200 group"
                        >
                            <Icon className="w-8 h-8 text-text-muted group-hover:text-signal-red transition-colors" />
                            <span className="text-sm text-text-main group-hover:text-signal-red transition-colors text-center">
                                {sector.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
