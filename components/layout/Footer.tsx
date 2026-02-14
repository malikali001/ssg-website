'use client';

import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Phone, Mail, MapPin, ArrowUp, CheckCircle, Instagram } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-950 text-gray-300 font-sans relative">
            {/* Tier 1: The "Ready to Secure" CTA (Pre-Footer) */}
            <div className="bg-deep-navy py-12 px-4 shadow-xl relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-white mb-2">
                            Ready to upgrade your site's security and efficiency?
                        </h3>
                        <p className="text-blue-200 text-lg">
                            Get a tailored solution from the UK's elite protection specialists.
                        </p>
                    </div>
                    <Link
                        href="/get-a-quote"
                        className="bg-signal-red hover:bg-red-600 text-white font-bold py-4 px-8 rounded shadow-lg shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        Request a Site Survey
                    </Link>
                </div>
            </div>

            {/* Tier 2: The Main Navigation (4 Columns) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: The Identity */}
                    <div className="space-y-6">
                        <Link href="/" className="block">
                            {/* In a real app, use the actual white logo image */}
                            <div className="text-3xl font-montserrat font-black text-white tracking-tighter">
                                SSG<span className="text-signal-red">.</span>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Professional. Reliable. Intelligent. Providing nationwide support services for over 15 years.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-signal-red hover:text-white transition-colors duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-signal-red hover:text-white transition-colors duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-signal-red hover:text-white transition-colors duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-signal-red hover:text-white transition-colors duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Our Services */}
                    <div>
                        <h4 className="text-white font-montserrat font-bold text-lg mb-6">Our Services</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Security Excellence', href: '/services/security' },
                                { name: 'Professional Cleaning', href: '/services/cleaning' },
                                { name: 'Facilities Management', href: '/services/fm' },
                                { name: 'Intelligence & Tech', href: '/services/intelligence' },
                                { name: 'K9 Services', href: '/services/k9' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-signal-red transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-signal-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Sectors */}
                    <div>
                        <h4 className="text-white font-montserrat font-bold text-lg mb-6">Sectors</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Corporate & Retail', href: '/sectors/corporate' },
                                { name: 'Construction & Logistics', href: '/sectors/construction' },
                                { name: 'Public Sector', href: '/sectors/public-sector' },
                                { name: 'Healthcare & Education', href: '/sectors/healthcare' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-signal-red transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-signal-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: 24/7 Support */}
                    <div className="bg-white/5 p-6 rounded-lg border border-white/10 relative overflow-hidden group hover:border-signal-red/30 transition-colors duration-300">
                        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Phone className="w-24 h-24 text-white" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <h4 className="text-white font-montserrat font-bold text-lg">24/7 Control Room</h4>
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                            </div>

                            <a href="tel:08001234567" className="block text-2xl font-bold text-white hover:text-signal-red transition-colors mb-6 font-montserrat">
                                0800 123 4567
                            </a>

                            <div className="space-y-4 text-sm">
                                <a href="mailto:info@ssg-services.co.uk" className="flex items-center gap-3 hover:text-white transition-colors">
                                    <Mail className="w-4 h-4 text-signal-red" />
                                    info@ssg-services.co.uk
                                </a>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-signal-red mt-1 shrink-0" />
                                    <span>
                                        SSG Head Office,<br />
                                        123 Business Park,<br />
                                        London, UK
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tier 3: The Trust & Compliance Bar */}
            <div className="border-y border-white/5 bg-black/20 overflow-hidden py-8">
                <div className="flex animate-scroll-left gap-12 px-4 min-w-max">
                    {[
                        'SIA ACS Approved Contractor',
                        'ISO 9001 Certified',
                        'ISO 14001 Certified',
                        'SafeContractor Approved',
                        'Cyber Essentials',
                        'Living Wage Employer'
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 group cursor-default">
                            <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center group-hover:bg-signal-red/20 transition-colors">
                                <CheckCircle className="w-6 h-6 text-gray-500 group-hover:text-signal-red" />
                            </div>
                            <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">{item}</span>
                        </div>
                    ))}
                    {/* Duplicate for seamless scroll effect if needed, though simple map here for layout */}
                    {[
                        'SIA ACS Approved Contractor',
                        'ISO 9001 Certified',
                        'ISO 14001 Certified',
                        'SafeContractor Approved',
                        'Cyber Essentials',
                        'Living Wage Employer'
                    ].map((item, i) => (
                        <div key={`dup-${i}`} className="flex items-center gap-3 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 group cursor-default">
                            <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center group-hover:bg-signal-red/20 transition-colors">
                                <CheckCircle className="w-6 h-6 text-gray-500 group-hover:text-signal-red" />
                            </div>
                            <span className="text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tier 4: The Legal Sub-Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <div className="text-center md:text-left">
                        &copy; 2026 SSG Support Services Group LTD. All rights reserved.
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/modern-slavery-statement" className="hover:text-signal-red transition-colors">Modern Slavery Statement</Link>
                        <Link href="/privacy-policy" className="hover:text-signal-red transition-colors">Privacy Policy</Link>
                        <Link href="/cookie-policy" className="hover:text-signal-red transition-colors">Cookie Policy</Link>
                        <Link href="/terms-and-conditions" className="hover:text-signal-red transition-colors">Terms & Conditions</Link>
                        <Link href="/sitemap" className="hover:text-signal-red transition-colors">Site Map</Link>
                    </div>
                </div>
            </div>

            {/* Back to Top */}
            <button
                onClick={scrollToTop}
                className="absolute bottom-8 right-8 p-3 bg-signal-red text-white rounded-lg shadow-lg hover:bg-red-600 transition-colors duration-300 group"
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
        </footer>
    );
}
