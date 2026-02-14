'use client';

import LegalHero from '@/components/legal/LegalHero';
import TableOfContents from '@/components/legal/TableOfContents';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';

export default function ModernSlaveryContent() {
    const sections = [
        { id: 'introduction', title: 'Introduction' },
        { id: 'our-business', title: 'Our Business & Supply Chains' },
        { id: 'policies', title: 'Policies & Due Diligence' },
        { id: 'risk-assessment', title: 'Risk Assessment' },
        { id: 'training', title: 'Training & Awareness' },
        { id: 'effectiveness', title: 'Effectiveness Measurement' },
        { id: 'approval', title: 'Approval & Sign-off' },
    ];

    return (
        <>
            <LegalHero
                title="Modern Slavery Statement"
                lastUpdated="February 2026"
                description="SSG Support Services Group LTD's commitment to preventing modern slavery and human trafficking in our business and supply chains."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Table of Contents - Sticky Sidebar */}
                    <aside className="lg:col-span-1">
                        <TableOfContents sections={sections} />
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-3">
                        <div className="prose prose-slate max-w-none">
                            {/* Introduction */}
                            <AnimatedSection id="introduction">
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4">
                                    Introduction
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    This statement is made pursuant to Section 54(1) of the Modern Slavery Act 2015 and constitutes SSG Support Services Group LTD's slavery and human trafficking statement for the financial year ending 31st December 2025.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    SSG Support Services Group LTD is committed to preventing slavery and human trafficking in our corporate activities and to ensuring that our supply chains are free from slavery and human trafficking. We have a zero-tolerance approach to modern slavery and are committed to acting ethically and with integrity in all our business dealings and relationships.
                                </p>
                            </AnimatedSection>

                            {/* Our Business & Supply Chains */}
                            <AnimatedSection id="our-business" delay={0.1}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Our Business & Supply Chains
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    SSG Support Services Group LTD is a leading provider of integrated security and facilities management services across the United Kingdom. As an SIA Approved Contractor, we deliver comprehensive solutions including:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>Elite manned guarding and K9 security units</li>
                                    <li>Mobile security patrols and key holding services</li>
                                    <li>Electronic security and CCTV monitoring</li>
                                    <li>Concierge and reception services</li>
                                    <li>Commercial cleaning and waste management</li>
                                    <li>Property maintenance and soft services</li>
                                </ul>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Our supply chains include recruitment agencies, uniform suppliers, equipment manufacturers, cleaning product suppliers, and technology providers. We work with carefully selected partners who share our commitment to ethical business practices.
                                </p>
                            </AnimatedSection>

                            {/* Policies & Due Diligence */}
                            <AnimatedSection id="policies" delay={0.2}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Policies & Due Diligence
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We have implemented robust policies and procedures to identify and prevent modern slavery in our operations:
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Recruitment & Employment</h3>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>Comprehensive right-to-work checks for all employees</li>
                                    <li>Verification of identity documents and employment history</li>
                                    <li>Fair and transparent employment contracts</li>
                                    <li>Competitive wages exceeding National Living Wage requirements</li>
                                    <li>Regular employee welfare checks and support systems</li>
                                </ul>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Supplier Due Diligence</h3>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>Pre-qualification questionnaires for all new suppliers</li>
                                    <li>Contractual obligations requiring compliance with Modern Slavery Act</li>
                                    <li>Regular audits of high-risk suppliers</li>
                                    <li>Whistleblowing mechanisms for reporting concerns</li>
                                    <li>Termination rights for non-compliance</li>
                                </ul>
                            </AnimatedSection>

                            {/* Risk Assessment */}
                            <AnimatedSection id="risk-assessment" delay={0.3}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Risk Assessment
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We have identified the following areas as potentially higher risk for modern slavery:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li><strong>Recruitment Agencies:</strong> We conduct enhanced due diligence on all recruitment partners and require evidence of their modern slavery compliance</li>
                                    <li><strong>Cleaning Supply Chains:</strong> We audit suppliers of cleaning products and equipment to ensure ethical sourcing</li>
                                    <li><strong>Uniform Manufacturing:</strong> We verify the manufacturing locations and working conditions of our uniform suppliers</li>
                                    <li><strong>Subcontracted Services:</strong> All subcontractors must demonstrate compliance with our modern slavery standards</li>
                                </ul>
                            </AnimatedSection>

                            {/* Training & Awareness */}
                            <AnimatedSection id="training" delay={0.4}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Training & Awareness
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We are committed to building awareness of modern slavery risks throughout our organization:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>Mandatory modern slavery awareness training for all management staff</li>
                                    <li>Specific training for procurement and HR teams on identifying red flags</li>
                                    <li>Regular briefings on modern slavery indicators for operational staff</li>
                                    <li>Clear reporting procedures and confidential whistleblowing channels</li>
                                    <li>Annual refresher training to maintain awareness</li>
                                </ul>
                            </AnimatedSection>

                            {/* Effectiveness Measurement */}
                            <AnimatedSection id="effectiveness" delay={0.5}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Effectiveness Measurement
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We measure the effectiveness of our efforts through:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>Annual review of supplier compliance and audit results</li>
                                    <li>Tracking of training completion rates across the organization</li>
                                    <li>Monitoring of whistleblowing reports and investigation outcomes</li>
                                    <li>Regular review of recruitment and employment practices</li>
                                    <li>Continuous improvement based on lessons learned and best practices</li>
                                </ul>
                            </AnimatedSection>

                            {/* Approval & Sign-off */}
                            <AnimatedSection id="approval" delay={0.6}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Approval & Sign-off
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    This statement has been approved by the Board of Directors of SSG Support Services Group LTD and will be reviewed annually.
                                </p>
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mt-6">
                                    <p className="text-slate-900 font-semibold mb-2">Signed:</p>
                                    <p className="text-slate-700 mb-4">[Director Name]</p>
                                    <p className="text-slate-900 font-semibold mb-2">Position:</p>
                                    <p className="text-slate-700 mb-4">Director, SSG Support Services Group LTD</p>
                                    <p className="text-slate-900 font-semibold mb-2">Date:</p>
                                    <p className="text-slate-700">February 2026</p>
                                </div>
                            </AnimatedSection>

                            {/* Contact Information */}
                            <AnimatedSection delay={0.7}>
                                <div className="bg-deep-navy text-white rounded-xl p-8 mt-12">
                                    <h3 className="text-2xl font-bold mb-4">Report a Concern</h3>
                                    <p className="mb-4 text-slate-200">
                                        If you have any concerns about modern slavery in our business or supply chains, please contact us immediately:
                                    </p>
                                    <div className="space-y-2 text-slate-200">
                                        <p><strong>Email:</strong> compliance@ssgukltd.com</p>
                                        <p><strong>Phone:</strong> 0800 123 4567</p>
                                        <p><strong>Address:</strong> SSG Support Services Group LTD, Head Office</p>
                                    </div>
                                    <p className="mt-4 text-sm text-slate-300">
                                        All reports will be treated confidentially and investigated thoroughly.
                                    </p>
                                </div>
                            </AnimatedSection>

                            {/* Related Links */}
                            <div className="mt-12 pt-8 border-t border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Related Policies</h3>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/privacy-policy" className="text-signal-red hover:underline font-semibold">
                                        Privacy Policy
                                    </Link>
                                    <Link href="/terms-and-conditions" className="text-signal-red hover:underline font-semibold">
                                        Terms & Conditions
                                    </Link>
                                    <Link href="/cookie-policy" className="text-signal-red hover:underline font-semibold">
                                        Cookie Policy
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
