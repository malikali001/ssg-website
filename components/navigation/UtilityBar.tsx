'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function UtilityBar() {
    return (
        <div className="bg-gunmetal border-b border-text-muted/10 text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-10">
                    {/* Left: 24/7 Control Room */}
                    <a
                        href="tel:+442012345678"
                        className="flex items-center gap-2 text-text-muted hover:text-signal-red transition-colors duration-200"
                    >
                        <Phone className="w-4 h-4" />
                        <span className="hidden sm:inline">24/7 National Control Room:</span>
                        <span className="font-semibold text-text-main">+44 20 1234 5678</span>
                    </a>

                    {/* Right: Portal Links */}
                    <div className="flex items-center gap-4 md:gap-6">
                        <Link
                            href="/portals/intelligence"
                            className="text-text-muted hover:text-signal-red transition-colors duration-200"
                        >
                            Intelligence Center
                        </Link>
                        <Link
                            href="/portals/client"
                            className="text-text-muted hover:text-signal-red transition-colors duration-200"
                        >
                            Client Portal
                        </Link>
                        <Link
                            href="/portals/employee"
                            className="text-text-muted hover:text-signal-red transition-colors duration-200 hidden sm:inline"
                        >
                            Employee Portal
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
