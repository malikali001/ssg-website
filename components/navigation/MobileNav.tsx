'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface MobileNavProps {
    onClose: () => void;
}

const menuSections = [
    {
        title: 'Security Services',
        items: [
            { name: 'Manned Guarding', href: '/services/security/manned-guarding' },
            { name: 'K9 Units', href: '/services/security/k9-units' },
            { name: 'Mobile Patrols', href: '/services/security/mobile-patrols' },
            { name: 'Electronic Security', href: '/services/security/electronic-security' },
            { name: 'Concierge Security', href: '/services/security/concierge' },
            { name: 'Key Holding & Alarm Response', href: '/services/security/key-holding' },
        ],
    },
    {
        title: 'Facilities Services',
        items: [
            { name: 'Commercial Cleaning', href: '/services/facilities/commercial-cleaning' },
            { name: 'Waste Management', href: '/services/facilities/waste-management' },
            { name: 'Property Maintenance', href: '/services/facilities/property-maintenance' },
            { name: 'Reception Services', href: '/services/facilities/reception' },
        ],
    },
    {
        title: 'Sectors',
        items: [
            { name: 'Construction', href: '/sectors/construction' },
            { name: 'Retail', href: '/sectors/retail' },
            { name: 'Corporate & Office', href: '/sectors/corporate' },
            { name: 'Healthcare', href: '/sectors/healthcare' },
            { name: 'Education', href: '/sectors/education' },
            { name: 'Hospitality', href: '/sectors/hospitality' },
            { name: 'Logistics & Distribution', href: '/sectors/logistics' },
            { name: 'Public Sector', href: '/sectors/public-sector' },
        ],
    },
    {
        title: 'About Us',
        items: [
            { name: 'About SSG', href: '/about' },
            { name: 'ESG & Compliance', href: '/esg' },
            { name: 'Careers', href: '/careers' },
            { name: 'Awards & Recognition', href: '/awards-recognition' },
        ],
    },
];

export default function MobileNav({ onClose }: MobileNavProps) {
    const [openSection, setOpenSection] = useState<string | null>(null);

    return (
        <div className="lg:hidden fixed inset-0 top-[calc(2.5rem+5rem)] z-30 bg-white overflow-y-auto">
            <div className="px-4 py-4 space-y-1">
                {menuSections.map((section) => (
                    <div key={section.title} className="border-b border-[var(--border-color)]">
                        <button
                            onClick={() => setOpenSection(openSection === section.title ? null : section.title)}
                            className="flex items-center justify-between w-full py-3 text-[var(--text-main)] font-semibold text-base"
                        >
                            {section.title}
                            <ChevronDown className={`w-5 h-5 text-[var(--text-muted)] transition-transform duration-200 ${openSection === section.title ? 'rotate-180' : ''}`} />
                        </button>
                        {openSection === section.title && (
                            <div className="pb-3 pl-4 space-y-1">
                                {section.items.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={onClose}
                                        className="flex items-center justify-between py-2 text-sm text-[var(--text-muted)] hover:text-[var(--deep-navy)] transition-colors"
                                    >
                                        {item.name}
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {/* Direct links */}
                <Link
                    href="/case-studies"
                    onClick={onClose}
                    className="flex items-center justify-between py-3 text-[var(--text-main)] font-semibold text-base border-b border-[var(--border-color)]"
                >
                    Case Studies
                    <ChevronRight className="w-5 h-5 text-[var(--text-muted)]" />
                </Link>

                {/* CTA */}
                <div className="pt-4 space-y-3">
                    <Link
                        href="/contact-us"
                        onClick={onClose}
                        className="block w-full text-center bg-[var(--section-dark)] text-white px-5 py-3 rounded-full font-semibold text-sm hover:scale-110 transition-transform"
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="/get-a-quote"
                        onClick={onClose}
                        className="block w-full text-center btn-primary"
                    >
                        Request a Quote
                    </Link>
                </div>
            </div>
        </div>
    );
}
