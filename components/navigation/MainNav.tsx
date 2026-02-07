'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import ServicesMegaMenu from './ServicesMegaMenu';
import SectorsDropdown from './SectorsDropdown';

export default function MainNav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 z-40 transition-all duration-300 bg-white border-b border-slate-100 ${isScrolled ? 'shadow-sm' : ''
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group">
                        <div className="relative h-16 w-38 overflow-hidden rounded-sm">
                            <img
                                src="/ssg-logo.jpg"
                                alt="SSG UK LTD"
                                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                    </Link>

                    {/* Center Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {/* Services Dropdown */}
                        <div
                            className="relative group h-20 flex items-center"
                            onMouseEnter={() => setActiveDropdown('services')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1 text-slate-900 hover:text-signal-red transition-colors duration-200 font-medium py-2">
                                Services
                                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                            </button>
                            {activeDropdown === 'services' && (
                                <div className="absolute top-full left-0 pt-2">
                                    <ServicesMegaMenu />
                                </div>
                            )}
                        </div>

                        {/* Sectors Dropdown */}
                        <div
                            className="relative group h-20 flex items-center"
                            onMouseEnter={() => setActiveDropdown('sectors')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1 text-slate-900 hover:text-signal-red transition-colors duration-200 font-medium py-2">
                                Sectors
                                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                            </button>
                            {activeDropdown === 'sectors' && (
                                <div className="absolute top-full left-0 pt-2">
                                    <SectorsDropdown />
                                </div>
                            )}
                        </div>

                        <Link
                            href="/esg"
                            className="text-slate-900 hover:text-signal-red transition-colors duration-200 font-medium"
                        >
                            ESG & Compliance
                        </Link>

                        <Link
                            href="/careers"
                            className="text-slate-900 hover:text-signal-red transition-colors duration-200 font-medium"
                        >
                            Careers
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <Link href="/get-a-quote" className="btn-primary flex items-center gap-2 shadow-lg shadow-red-500/20">
                        Get a Quote
                    </Link>
                </div>
            </div>
        </nav>
    );
}
