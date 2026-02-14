'use client';

import LegalHero from '@/components/legal/LegalHero';
import TableOfContents from '@/components/legal/TableOfContents';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';

export default function TermsContent() {
    const sections = [
        { id: 'acceptance', title: 'Acceptance of Terms' },
        { id: 'use-of-website', title: 'Use of Website' },
        { id: 'intellectual-property', title: 'Intellectual Property' },
        { id: 'user-responsibilities', title: 'User Responsibilities' },
        { id: 'limitation-liability', title: 'Limitation of Liability' },
        { id: 'governing-law', title: 'Governing Law' },
        { id: 'changes', title: 'Changes to Terms' },
        { id: 'contact', title: 'Contact Information' },
    ];

    return (
        <>
            <LegalHero
                title="Terms & Conditions"
                lastUpdated="February 2026"
                description="Terms and conditions governing the use of the SSG Support Services Group LTD website and services."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <aside className="lg:col-span-1">
                        <TableOfContents sections={sections} />
                    </aside>

                    <main className="lg:col-span-3">
                        <div className="prose prose-slate max-w-none">
                            {/* Acceptance of Terms */}
                            <AnimatedSection id="acceptance">
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4">
                                    Acceptance of Terms
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    By accessing and using the SSG Support Services Group LTD website (the "Website"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this Website.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    These terms apply to all visitors, users, and others who access or use the Website.
                                </p>
                            </AnimatedSection>

                            {/* Use of Website */}
                            <AnimatedSection id="use-of-website" delay={0.1}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Use of Website
                                </h2>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Permitted Use</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    You may use this Website for lawful purposes only. You agree not to use the Website:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>In any way that breaches applicable local, national, or international law</li>
                                    <li>To transmit any unlawful, harmful, or offensive material</li>
                                    <li>To attempt to gain unauthorized access to any part of the Website</li>
                                    <li>To interfere with or disrupt the Website or servers</li>
                                    <li>For any commercial purposes without our express written consent</li>
                                </ul>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Account Security</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    If you create an account on our Website, you are responsible for:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>Maintaining the confidentiality of your login credentials</li>
                                    <li>All activities that occur under your account</li>
                                    <li>Notifying us immediately of any unauthorized use</li>
                                </ul>
                            </AnimatedSection>

                            {/* Intellectual Property */}
                            <AnimatedSection id="intellectual-property" delay={0.2}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Intellectual Property
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    All content on this Website, including but not limited to text, graphics, logos, images, and software, is the property of SSG Support Services Group LTD or its content suppliers and is protected by UK and international copyright laws.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    You may not:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>Reproduce, duplicate, copy, or resell any part of the Website</li>
                                    <li>Modify or create derivative works from Website content</li>
                                    <li>Use any SSG trademarks, logos, or service marks without permission</li>
                                    <li>Remove any copyright or proprietary notices</li>
                                </ul>
                            </AnimatedSection>

                            {/* User Responsibilities */}
                            <AnimatedSection id="user-responsibilities" delay={0.3}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    User Responsibilities
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    When using our Website, you agree to:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>Provide accurate and complete information when requested</li>
                                    <li>Update your information to keep it current</li>
                                    <li>Comply with all applicable laws and regulations</li>
                                    <li>Respect the rights and privacy of other users</li>
                                    <li>Not engage in any automated data collection or scraping</li>
                                </ul>
                            </AnimatedSection>

                            {/* Limitation of Liability */}
                            <AnimatedSection id="limitation-liability" delay={0.4}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Limitation of Liability
                                </h2>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Website Availability</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    While we strive to ensure the Website is available 24/7, we do not guarantee uninterrupted access. The Website may be unavailable due to:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>Scheduled maintenance</li>
                                    <li>Technical issues or emergencies</li>
                                    <li>Factors beyond our reasonable control</li>
                                </ul>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Information Accuracy</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We make reasonable efforts to ensure information on the Website is accurate, but we do not warrant:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>The accuracy, completeness, or timeliness of any information</li>
                                    <li>That the Website will be error-free or virus-free</li>
                                    <li>That defects will be corrected</li>
                                </ul>

                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
                                    <h4 className="font-bold text-deep-navy mb-2">Disclaimer:</h4>
                                    <p className="text-slate-700">
                                        To the fullest extent permitted by law, SSG Support Services Group LTD excludes all liability for any loss or damage arising from your use of this Website, including but not limited to direct, indirect, incidental, or consequential damages.
                                    </p>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Service Contracts</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    These Terms and Conditions relate to the use of our Website only. Separate terms and conditions apply to our security and facilities management services, which will be provided in writing when you engage our services.
                                </p>
                            </AnimatedSection>

                            {/* Governing Law */}
                            <AnimatedSection id="governing-law" delay={0.5}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Governing Law
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. You irrevocably submit to the exclusive jurisdiction of the courts of England and Wales.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Any disputes arising from these terms or your use of the Website will be resolved in the courts of England and Wales.
                                </p>
                            </AnimatedSection>

                            {/* Changes to Terms */}
                            <AnimatedSection id="changes" delay={0.6}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Changes to Terms
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the Website.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Your continued use of the Website after any changes constitutes acceptance of the new terms. We recommend reviewing this page periodically for updates.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    The "Last Updated" date at the top of this page indicates when these terms were last revised.
                                </p>
                            </AnimatedSection>

                            {/* Contact Information */}
                            <AnimatedSection id="contact" delay={0.7}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Contact Information
                                </h2>
                                <div className="bg-deep-navy text-white rounded-xl p-8">
                                    <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
                                    <p className="mb-4 text-slate-200">
                                        If you have any questions about these Terms and Conditions, please contact us:
                                    </p>
                                    <div className="space-y-2 text-slate-200">
                                        <p><strong>Company:</strong> SSG Support Services Group LTD</p>
                                        <p><strong>VAT Number:</strong> 217428120</p>
                                        <p><strong>Email:</strong> info@ssgukltd.com</p>
                                        <p><strong>Phone:</strong> 0800 123 4567</p>
                                        <p><strong>Address:</strong> [Head Office Address]</p>
                                    </div>
                                </div>
                            </AnimatedSection>

                            {/* Related Links */}
                            <div className="mt-12 pt-8 border-t border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Related Policies</h3>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/privacy-policy" className="text-signal-red hover:underline font-semibold">
                                        Privacy Policy
                                    </Link>
                                    <Link href="/cookie-policy" className="text-signal-red hover:underline font-semibold">
                                        Cookie Policy
                                    </Link>
                                    <Link href="/modern-slavery-statement" className="text-signal-red hover:underline font-semibold">
                                        Modern Slavery Statement
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
