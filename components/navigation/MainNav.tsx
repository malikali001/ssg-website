'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import ServiceDropdown from './ServicesMegaMenu';
import SectorsDropdown from './SectorsDropdown';
import AboutDropdown from './AboutDropdown';
import MobileNav from './MobileNav';

const navItems = [
    { key: 'security', label: 'Security Services' },
    { key: 'facilities', label: 'Facilities Services' },
    { key: 'sectors', label: 'Sectors' },
    { key: 'about', label: 'About Us' },
] as const;

type DropdownKey = (typeof navItems)[number]['key'];

export default function MainNav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeDropdown = useCallback(() => setActiveDropdown(null), []);

    return (
        <>
            <nav
                className={`sticky top-0 z-40 transition-all duration-300 bg-white border-b border-[var(--border-color)] ${isScrolled ? 'shadow-md' : ''}`}
                onMouseLeave={closeDropdown}
            >
                <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group">
                            <div className="relative h-12 w-28 sm:h-16 sm:w-38 overflow-hidden rounded-sm">
                                <Image
                                    src="/ssg-logo.jpg"
                                    alt="SSG UK LTD"
                                    width={152}
                                    height={64}
                                    priority
                                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </Link>

                        {/* Center Menu - Desktop */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <div
                                    key={item.key}
                                    className="relative h-16 sm:h-20 flex items-center"
                                    onMouseEnter={() => setActiveDropdown(item.key)}
                                >
                                    <button className={`flex items-center gap-1 px-4 transition-colors duration-200 font-semibold text-[15px] py-2 ${activeDropdown === item.key ? 'text-[var(--signal-red)]' : 'text-[var(--text-main)] hover:text-[var(--signal-red)]'}`}>
                                        {item.label}
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.key ? 'rotate-180' : ''}`} />
                                    </button>
                                </div>
                            ))}

                            {/* Case Studies - no dropdown */}
                            <Link
                                href="/case-studies"
                                className="px-4 text-[var(--text-main)] hover:text-[var(--signal-red)] transition-colors duration-200 font-semibold text-[15px]"
                                onMouseEnter={closeDropdown}
                            >
                                Case Studies
                            </Link>
                        </div>

                        {/* Right: CTA + Mobile Toggle */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="/contact-us"
                                className="hidden sm:inline-flex items-center gap-2 bg-[var(--section-dark)] text-white px-5 py-2.5 sm:px-7 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:scale-110 transition-transform duration-200"
                            >
                                Contact Us
                            </Link>

                            {/* Mobile menu toggle */}
                            <button
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="lg:hidden p-2 text-[var(--text-main)] hover:text-[var(--signal-red)] transition-colors"
                            >
                                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Full-width Mega Menu Dropdowns */}
                {activeDropdown === 'security' && <ServiceDropdown type="security" />}
                {activeDropdown === 'facilities' && <ServiceDropdown type="facilities" />}
                {activeDropdown === 'sectors' && <SectorsDropdown />}
                {activeDropdown === 'about' && <AboutDropdown />}
            </nav>

            {/* Mobile Navigation */}
            {mobileOpen && <MobileNav onClose={() => setMobileOpen(false)} />}
        </>
    );
}
