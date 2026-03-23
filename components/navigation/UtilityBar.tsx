'use client';

import { useState } from 'react';
import { Phone, Globe, ChevronDown, Search } from 'lucide-react';

const locations = ['Romford', 'Sunderland', 'London', 'Manchester'];

export default function UtilityBar() {
    const [selectedLocation, setSelectedLocation] = useState(locations[0]);
    const [showLocations, setShowLocations] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="bg-[var(--section-dark)] text-white text-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-10">
                    {/* Left: Location + Phone */}
                    <div className="flex items-center gap-3 sm:gap-6">
                        {/* Location Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setShowLocations(!showLocations)}
                                className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-200"
                            >
                                <Globe className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">{selectedLocation}</span>
                                <ChevronDown className="w-3 h-3" />
                            </button>
                            {showLocations && (
                                <div className="absolute top-full left-0 mt-1 bg-white border border-[var(--border-color)] rounded shadow-lg z-50 min-w-[140px]">
                                    {locations.map((loc) => (
                                        <button
                                            key={loc}
                                            onClick={() => { setSelectedLocation(loc); setShowLocations(false); }}
                                            className={`block w-full text-left px-4 py-2 text-sm transition-colors ${selectedLocation === loc ? 'bg-[var(--section-light)] text-[var(--deep-navy)] font-semibold' : 'text-[var(--text-main)] hover:bg-[var(--section-light)]'}`}
                                        >
                                            {loc}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Phone */}
                        <a
                            href="tel:+442012345678"
                            className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-200"
                        >
                            <Phone className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">24/7 Control Room:</span>
                            <span className="font-semibold text-xs sm:text-sm">+44 20 1234 5678</span>
                        </a>
                    </div>

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

                        {/* Client Portal */}
                        <a
                            href="https://portal.thefmcloud.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:block text-white/80 hover:text-white transition-colors duration-200 text-xs font-medium uppercase tracking-wider"
                        >
                            Client Portal
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
