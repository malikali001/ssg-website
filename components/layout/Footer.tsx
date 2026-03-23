'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#fbfbfc] text-[var(--text-main)] font-['Inter',sans-serif]">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10">
                    {/* Column 1: Logo & Tagline */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1">
                        <Link href="/" className="block mb-4">
                            <div className="relative h-12 w-32 overflow-hidden rounded-sm">
                                <Image
                                    src="/ssg-logo.jpg"
                                    alt="SSG UK LTD"
                                    width={128}
                                    height={48}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                            Making people and places the best they can be.
                        </p>
                    </div>

                    {/* Column 2: Security Services */}
                    <div>
                        <h4 className="text-[var(--deep-navy)] font-semibold text-[13px] sm:text-[15px] mb-3 sm:mb-4">Security Services</h4>
                        <ul className="space-y-2 sm:space-y-2.5 text-[13px] sm:text-[14px]">
                            <li><Link href="/services/security/manned-guarding" className="hover:text-[var(--signal-red)] transition-colors">Manned Guarding</Link></li>
                            <li><Link href="/services/security/mobile-patrols" className="hover:text-[var(--signal-red)] transition-colors">Mobile Security Patrols</Link></li>
                            <li><Link href="/services/security/k9-units" className="hover:text-[var(--signal-red)] transition-colors">Guard Dogs Patrols</Link></li>
                            <li><Link href="/services/security/key-holding" className="hover:text-[var(--signal-red)] transition-colors">Key Holding</Link></li>
                            <li><Link href="/services/security/electronic-security" className="hover:text-[var(--signal-red)] transition-colors">Electronic Security</Link></li>
                            <li><Link href="/services/security/concierge" className="hover:text-[var(--signal-red)] transition-colors">Concierge Security</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Facilities Services */}
                    <div>
                        <h4 className="text-[var(--deep-navy)] font-semibold text-[13px] sm:text-[15px] mb-3 sm:mb-4">Facilities Services</h4>
                        <ul className="space-y-2 sm:space-y-2.5 text-[13px] sm:text-[14px]">
                            <li><Link href="/services/facilities/commercial-cleaning" className="hover:text-[var(--signal-red)] transition-colors">Commercial Cleaning</Link></li>
                            <li><Link href="/services/facilities/waste-management" className="hover:text-[var(--signal-red)] transition-colors">Waste Management</Link></li>
                            <li><Link href="/services/facilities/property-maintenance" className="hover:text-[var(--signal-red)] transition-colors">Property Maintenance</Link></li>
                            <li><Link href="/services/facilities/reception" className="hover:text-[var(--signal-red)] transition-colors">Reception Services</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Sectors */}
                    <div>
                        <h4 className="text-[var(--deep-navy)] font-semibold text-[13px] sm:text-[15px] mb-3 sm:mb-4">Sectors</h4>
                        <ul className="space-y-2 sm:space-y-2.5 text-[13px] sm:text-[14px]">
                            <li><Link href="/sectors/retail" className="hover:text-[var(--signal-red)] transition-colors">Retail Security</Link></li>
                            <li><Link href="/sectors/construction" className="hover:text-[var(--signal-red)] transition-colors">Construction Security</Link></li>
                            <li><Link href="/sectors/corporate" className="hover:text-[var(--signal-red)] transition-colors">Corporate & Office</Link></li>
                            <li><Link href="/sectors/healthcare" className="hover:text-[var(--signal-red)] transition-colors">Healthcare</Link></li>
                            <li><Link href="/sectors/logistics" className="hover:text-[var(--signal-red)] transition-colors">Logistics</Link></li>
                            <li><Link href="/sectors/education" className="hover:text-[var(--signal-red)] transition-colors">Education</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Company */}
                    <div>
                        <h4 className="text-[var(--deep-navy)] font-semibold text-[13px] sm:text-[15px] mb-3 sm:mb-4">Company</h4>
                        <ul className="space-y-2 sm:space-y-2.5 text-[13px] sm:text-[14px]">
                            <li><Link href="/contact-us" className="hover:text-[var(--signal-red)] transition-colors">Contact Us</Link></li>
                            <li><Link href="/about" className="hover:text-[var(--signal-red)] transition-colors">About Us</Link></li>
                            <li><Link href="/esg" className="hover:text-[var(--signal-red)] transition-colors">ESG & Compliance</Link></li>
                            <li><Link href="/careers" className="hover:text-[var(--signal-red)] transition-colors">Careers</Link></li>
                            <li><Link href="/awards-recognition" className="hover:text-[var(--signal-red)] transition-colors">Awards</Link></li>
                            <li><Link href="/case-studies" className="hover:text-[var(--signal-red)] transition-colors">Case Studies</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-[13px] text-[var(--text-muted)]">
                        <div className="text-center md:text-left">
                            &copy; 2026 SSG Support Services Group LTD. All rights reserved.
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/privacy-policy" className="hover:text-[var(--signal-red)] transition-colors">Privacy Policy</Link>
                            <Link href="/terms-and-conditions" className="hover:text-[var(--signal-red)] transition-colors">Terms & Conditions</Link>
                            <Link href="/cookie-policy" className="hover:text-[var(--signal-red)] transition-colors">Cookie Policy</Link>
                            <Link href="/modern-slavery-statement" className="hover:text-[var(--signal-red)] transition-colors">Modern Slavery</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
