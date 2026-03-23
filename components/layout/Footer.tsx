'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[var(--section-dark)] text-gray-400 font-sans">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
                    {/* Column 1: Logo & Tagline */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1">
                        <Link href="/" className="block mb-4">
                            <div className="relative h-12 w-32 overflow-hidden rounded-sm">
                                <img
                                    src="/ssg-logo.jpg"
                                    alt="SSG UK LTD"
                                    className="h-full w-full object-contain brightness-0 invert"
                                />
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-500">
                            Making people and places the best they can be.
                        </p>
                    </div>

                    {/* Column 2: Security Services */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4">Security Services</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="/services/security/manned-guarding" className="hover:text-white transition-colors">Manned Guarding</Link></li>
                            <li><Link href="/services/security/mobile-patrols" className="hover:text-white transition-colors">Mobile Security Patrols</Link></li>
                            <li><Link href="/services/security/k9-units" className="hover:text-white transition-colors">Guard Dogs Patrols</Link></li>
                            <li><Link href="/services/security/key-holding" className="hover:text-white transition-colors">Key Holding</Link></li>
                            <li><Link href="/services/security/electronic-security" className="hover:text-white transition-colors">Electronic Security</Link></li>
                            <li><Link href="/services/security/concierge" className="hover:text-white transition-colors">Concierge Security</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Facilities Services */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4">Facilities Services</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="/services/facilities/commercial-cleaning" className="hover:text-white transition-colors">Commercial Cleaning</Link></li>
                            <li><Link href="/services/facilities/waste-management" className="hover:text-white transition-colors">Waste Management</Link></li>
                            <li><Link href="/services/facilities/property-maintenance" className="hover:text-white transition-colors">Property Maintenance</Link></li>
                            <li><Link href="/services/facilities/reception" className="hover:text-white transition-colors">Reception Services</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Sectors */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4">Sectors</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="/sectors/retail" className="hover:text-white transition-colors">Retail Security</Link></li>
                            <li><Link href="/sectors/construction" className="hover:text-white transition-colors">Construction Security</Link></li>
                            <li><Link href="/sectors/corporate" className="hover:text-white transition-colors">Corporate & Office</Link></li>
                            <li><Link href="/sectors/healthcare" className="hover:text-white transition-colors">Healthcare</Link></li>
                            <li><Link href="/sectors/logistics" className="hover:text-white transition-colors">Logistics</Link></li>
                            <li><Link href="/sectors/education" className="hover:text-white transition-colors">Education</Link></li>
                        </ul>
                    </div>

                    {/* Column 5: Company */}
                    <div>
                        <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
                        <ul className="space-y-2.5 text-sm">
                            <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/esg" className="hover:text-white transition-colors">ESG & Compliance</Link></li>
                            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/awards-recognition" className="hover:text-white transition-colors">Awards</Link></li>
                            <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                        <div className="text-center md:text-left">
                            &copy; 2026 SSG Support Services Group LTD. All rights reserved.
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
                            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
                            <Link href="/modern-slavery-statement" className="hover:text-white transition-colors">Modern Slavery</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
