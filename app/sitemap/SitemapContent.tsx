'use client';

import LegalHero from '@/components/legal/LegalHero';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { Shield, Wrench, Building2, FileText, Phone, Users, Award } from 'lucide-react';

export default function SitemapContent() {
    const sitemapSections = [
        {
            title: 'Main Pages',
            icon: Building2,
            links: [
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Why SSG', href: '/why-ssg' },
                { name: 'Success Stories', href: '/success-stories' },
                { name: 'Careers', href: '/careers' },
                { name: 'Contact Us', href: '/contact-us' },
            ],
        },
        {
            title: 'Security Solutions',
            icon: Shield,
            links: [
                { name: 'Elite Manned Guarding', href: '/services/security/manned-guarding' },
                { name: 'K9 Security Units', href: '/services/security/k9-units' },
                { name: 'Mobile Security Patrols', href: '/services/security/mobile-patrols' },
                { name: 'Electronic Security', href: '/services/security/electronic-security' },
                { name: 'Concierge Security', href: '/services/security/concierge' },
                { name: 'Key Holding & Response', href: '/services/security/key-holding' },
            ],
        },
        {
            title: 'Facilities Management',
            icon: Wrench,
            links: [
                { name: 'Commercial Cleaning', href: '/services/facilities/commercial-cleaning' },
                { name: 'Waste Management', href: '/services/facilities/waste-management' },
                { name: 'Property Maintenance', href: '/services/facilities/property-maintenance' },
                { name: 'Reception Services', href: '/services/facilities/reception' },
            ],
        },
        {
            title: 'Specialist Sectors',
            icon: Users,
            links: [
                { name: 'Logistics & Distribution', href: '/sectors/logistics' },
                { name: 'Public Sector & Healthcare', href: '/sectors/public-sector' },
                { name: 'Soft Services', href: '/services/soft-services' },
            ],
        },
        {
            title: 'Company Information',
            icon: Award,
            links: [
                { name: 'Awards & Recognition', href: '/awards-recognition' },
                { name: 'Modern Slavery Statement', href: '/modern-slavery-statement' },
            ],
        },
        {
            title: 'Legal & Policies',
            icon: FileText,
            links: [
                { name: 'Privacy Policy', href: '/privacy-policy' },
                { name: 'Cookie Policy', href: '/cookie-policy' },
                { name: 'Terms & Conditions', href: '/terms-and-conditions' },
            ],
        },
    ];

    return (
        <>
            <LegalHero
                title="Site Map"
                lastUpdated="February 2026"
                description="Complete navigation guide to all pages and services on the SSG Support Services Group LTD website."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sitemapSections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <AnimatedSection key={section.title} delay={index * 0.1}>
                                <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 bg-signal-red/10 rounded-lg flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-signal-red" />
                                        </div>
                                        <h2 className="text-xl font-montserrat font-bold text-deep-navy">
                                            {section.title}
                                        </h2>
                                    </div>
                                    <ul className="space-y-2">
                                        {section.links.map((link) => (
                                            <li key={link.href}>
                                                <Link
                                                    href={link.href}
                                                    className="text-slate-600 hover:text-signal-red transition-colors duration-200 flex items-center gap-2 group"
                                                >
                                                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full group-hover:bg-signal-red transition-colors"></span>
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>

                {/* Quick Contact Section */}
                <AnimatedSection delay={0.6}>
                    <div className="mt-16 bg-gradient-to-br from-deep-navy to-slate-900 text-white rounded-2xl p-8 md:p-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-montserrat font-bold mb-4">
                                    Can't Find What You're Looking For?
                                </h3>
                                <p className="text-slate-200 mb-6">
                                    Our team is here to help. Contact us directly for any inquiries about our security and facilities management services.
                                </p>
                                <Link
                                    href="/contact-us"
                                    className="inline-block bg-signal-red hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                                >
                                    Contact Us
                                </Link>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-electric-blue mt-1" />
                                    <div>
                                        <p className="font-semibold">24/7 Emergency Line</p>
                                        <a href="tel:08001234567" className="text-slate-200 hover:text-electric-blue">
                                            0800 123 4567
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-electric-blue mt-1" />
                                    <div>
                                        <p className="font-semibold">General Inquiries</p>
                                        <a href="mailto:info@ssgukltd.com" className="text-slate-200 hover:text-electric-blue">
                                            info@ssgukltd.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Building2 className="w-5 h-5 text-electric-blue mt-1" />
                                    <div>
                                        <p className="font-semibold">SIA Approved Contractor</p>
                                        <p className="text-slate-200 text-sm">
                                            Fully licensed and accredited security services
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Search Tip */}
                <AnimatedSection delay={0.7}>
                    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-bold text-deep-navy mb-2">💡 Quick Tip</h4>
                        <p className="text-slate-700">
                            Use <kbd className="px-2 py-1 bg-white border border-slate-300 rounded text-sm font-mono">Ctrl+F</kbd> (or <kbd className="px-2 py-1 bg-white border border-slate-300 rounded text-sm font-mono">Cmd+F</kbd> on Mac) to search for specific pages on this sitemap.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </>
    );
}
