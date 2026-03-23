'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    dark?: boolean;
}

export default function Breadcrumbs({ items, dark = true }: BreadcrumbsProps) {
    const linkColor = dark ? 'text-white/60 hover:text-white' : 'text-[var(--text-muted)] hover:text-[var(--deep-navy)]';
    const separatorColor = dark ? 'text-white/40' : 'text-[var(--text-muted)]/50';
    const activeColor = dark ? 'text-white/90 font-medium' : 'text-[var(--deep-navy)] font-medium';

    return (
        <nav className="flex items-center gap-1.5 text-sm mb-4">
            <Link href="/" className={`${linkColor} transition-colors`}>
                Home
            </Link>
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-1.5">
                    <ChevronRight className={`w-3.5 h-3.5 ${separatorColor}`} />
                    {item.href ? (
                        <Link href={item.href} className={`${linkColor} transition-colors`}>
                            {item.label}
                        </Link>
                    ) : (
                        <span className={activeColor}>{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
}
