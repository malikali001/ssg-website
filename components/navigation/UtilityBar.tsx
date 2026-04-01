'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function UtilityBar() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="bg-[var(--section-dark)] text-white text-sm">
            <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
                <div className="flex items-center justify-between h-10">
                    {/* Left: Tagline */}
                    <p className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">
                        Specialist security services &ndash; where your safety becomes our priority
                    </p>

                    {/* Right: Search + Client Portal */}
                    <div className="flex items-center gap-4">
                        {/* Search */}
                        <div className="hidden sm:flex items-center">
                            {showSearch ? (
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="bg-white/10 border border-white/20 rounded px-3 py-1 text-xs text-white placeholder-white/50 focus:outline-none focus:border-white/40 w-40"
                                        autoFocus
                                        onBlur={() => setShowSearch(false)}
                                    />
                                </div>
                            ) : (
                                <button
                                    onClick={() => setShowSearch(true)}
                                    className="text-white/70 hover:text-white transition-colors"
                                >
                                    <Search className="w-4 h-4" />
                                </button>
                            )}
                        </div>

                        {/* Portals */}
                        <div className="hidden sm:flex items-center gap-4">
                            <a
                                href="https://portal.thefmcloud.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors duration-200 text-xs font-medium uppercase tracking-wider"
                            >
                                Client Portal
                            </a>
                            <span className="text-white/30">|</span>
                            <a
                                href="https://ssgemployeeportal.thefmcloud.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors duration-200 text-xs font-medium uppercase tracking-wider"
                            >
                                Employee Portal
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
