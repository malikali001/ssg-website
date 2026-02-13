'use client';

import Link from 'next/link';
import { Phone, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

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

                    {/* Right: Client Portal & Socials */}
                    <div className="flex items-center gap-6">
                        {/* Social Links */}
                        <div className="hidden sm:flex items-center gap-3 border-r border-slate-700 pr-6 mr-2">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[var(--signal-red)] transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[var(--signal-red)] transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[var(--signal-red)] transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[var(--signal-red)] transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                        </div>

                        <a
                            href="https://portal.thefmcloud.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-[var(--signal-red)] transition-colors duration-200 text-xs font-medium uppercase tracking-wider flex items-center gap-2"
                        >
                            Client Portal [Login]
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
