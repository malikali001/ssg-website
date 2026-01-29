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
            className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'header-blur shadow-lg' : 'bg-obsidian'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className="text-2xl font-montserrat font-black tracking-wider">
                            <span className="text-signal-red">SSG</span>
                            <span className="text-text-main ml-2">UK LTD</span>
                        </div>
                    </Link>

                    {/* Center Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('services')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1 text-text-main hover:text-signal-red transition-colors duration-200 font-medium">
                                Services
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            {activeDropdown === 'services' && <ServicesMegaMenu />}
                        </div>

                        {/* Sectors Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('sectors')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="flex items-center gap-1 text-text-main hover:text-signal-red transition-colors duration-200 font-medium">
                                Sectors
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            {activeDropdown === 'sectors' && <SectorsDropdown />}
                        </div>

                        <Link
                            href="/case-studies"
                            className="text-text-main hover:text-signal-red transition-colors duration-200 font-medium"
                        >
                            Case Studies
                        </Link>

                        <Link
                            href="/about"
                            className="text-text-main hover:text-signal-red transition-colors duration-200 font-medium"
                        >
                            About
                        </Link>

                        <Link
                            href="/careers"
                            className="text-text-main hover:text-signal-red transition-colors duration-200 font-medium"
                        >
                            Careers
                        </Link>
                    </div>

                    {/* CTA Button */}
                    <Link href="/quote" className="btn-primary">
                        GET A QUOTE
                    </Link>
                </div>
            </div>
        </nav>
    );
}
