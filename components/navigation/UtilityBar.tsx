'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function UtilityBar() {
    return (
        <div className="bg-gunmetal border-b border-text-muted/10 text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-10">
                    {/* Left: 24/7 Control Room */}
                    <div className="flex items-center gap-6">
                        <a
                            href="tel:+442012345678"
                            className="flex items-center gap-2 text-slate-500 hover:text-signal-red transition-colors duration-200"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="hidden sm:inline">24/7 Control Room:</span>
                            <span className="font-semibold text-slate-900 hover:text-signal-red transition-colors">+44 20 1234 5678</span>
                        </a>
                    </div>

                    {/* Right: Client Portal */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/portals/client"
                            className="text-slate-500 hover:text-signal-red transition-colors duration-200 text-xs font-medium uppercase tracking-wider"
                        >
                            Client Portal [Login]
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
