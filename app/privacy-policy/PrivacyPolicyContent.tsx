'use client';

import LegalHero from '@/components/legal/LegalHero';
import TableOfContents from '@/components/legal/TableOfContents';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';

export default function PrivacyPolicyContent() {
    const sections = [
        { id: 'introduction', title: 'Introduction' },
        { id: 'information-we-collect', title: 'Information We Collect' },
        { id: 'how-we-use', title: 'How We Use Your Information' },
        { id: 'legal-basis', title: 'Legal Basis for Processing' },
        { id: 'data-sharing', title: 'Data Sharing & Third Parties' },
        { id: 'data-retention', title: 'Data Retention' },
        { id: 'your-rights', title: 'Your Rights' },
        { id: 'security', title: 'Security Measures' },
        { id: 'contact', title: 'Contact Information' },
    ];

    return (
        <>
            <LegalHero
                title="Privacy Policy"
                lastUpdated="February 2026"
                description="How SSG Support Services Group LTD collects, uses, and protects your personal information in compliance with GDPR and UK data protection laws."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <aside className="lg:col-span-1">
                        <TableOfContents sections={sections} />
                    </aside>

                    <main className="lg:col-span-3">
                        <div className="prose prose-slate max-w-none">
                            {/* Introduction */}
                            <AnimatedSection id="introduction">
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4">
                                    Introduction
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    SSG Support Services Group LTD ("we", "us", "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    <strong>Data Controller:</strong> SSG Support Services Group LTD<br />
                                    <strong>VAT Number:</strong> 217428120<br />
                                    <strong>Registered Office:</strong> [Address to be provided]
                                </p>
                            </AnimatedSection>

                            {/* Information We Collect */}
                            <AnimatedSection id="information-we-collect" delay={0.1}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Information We Collect
                                </h2>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Personal Information</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We may collect the following types of personal information:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li><strong>Contact Information:</strong> Name, email address, phone number, postal address</li>
                                    <li><strong>Business Information:</strong> Company name, job title, business address</li>
                                    <li><strong>Inquiry Details:</strong> Information you provide when requesting quotes or services</li>
                                    <li><strong>Employment Information:</strong> CV, references, qualifications (for job applicants)</li>
                                </ul>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Automatically Collected Information</h3>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages</li>
                                    <li><strong>Cookies:</strong> See our <Link href="/cookie-policy" className="text-signal-red hover:underline">Cookie Policy</Link> for details</li>
                                    <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers</li>
                                </ul>
                            </AnimatedSection>

                            {/* How We Use Your Information */}
                            <AnimatedSection id="how-we-use" delay={0.2}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    How We Use Your Information
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We use your personal information for the following purposes:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li><strong>Service Delivery:</strong> To provide security and facilities management services</li>
                                    <li><strong>Communication:</strong> To respond to inquiries, provide quotes, and send service updates</li>
                                    <li><strong>Contract Management:</strong> To manage contracts and billing</li>
                                    <li><strong>Recruitment:</strong> To process job applications and conduct background checks</li>
                                    <li><strong>Legal Compliance:</strong> To comply with SIA regulations and other legal obligations</li>
                                    <li><strong>Website Improvement:</strong> To analyze usage and improve our website</li>
                                    <li><strong>Marketing:</strong> To send relevant information about our services (with your consent)</li>
                                </ul>
                            </AnimatedSection>

                            {/* Legal Basis for Processing */}
                            <AnimatedSection id="legal-basis" delay={0.3}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Legal Basis for Processing
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Under GDPR, we process your personal data based on the following legal grounds:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li><strong>Contractual Necessity:</strong> Processing necessary to fulfill our contract with you</li>
                                    <li><strong>Legal Obligation:</strong> Compliance with SIA licensing, employment law, and other regulations</li>
                                    <li><strong>Legitimate Interests:</strong> Business operations, fraud prevention, and service improvement</li>
                                    <li><strong>Consent:</strong> Marketing communications and non-essential cookies (where applicable)</li>
                                </ul>
                            </AnimatedSection>

                            {/* Data Sharing & Third Parties */}
                            <AnimatedSection id="data-sharing" delay={0.4}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Data Sharing & Third Parties
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We may share your information with:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li><strong>Service Providers:</strong> IT support, payment processors, background check providers</li>
                                    <li><strong>Regulatory Bodies:</strong> SIA, ICO, and other regulatory authorities as required</li>
                                    <li><strong>Professional Advisors:</strong> Lawyers, accountants, and auditors</li>
                                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                                </ul>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We do not sell your personal information to third parties. All third-party processors are bound by data protection agreements.
                                </p>
                            </AnimatedSection>

                            {/* Data Retention */}
                            <AnimatedSection id="data-retention" delay={0.5}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Data Retention
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We retain personal information for as long as necessary to fulfill the purposes outlined in this policy:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li><strong>Client Data:</strong> Duration of contract plus 6 years (for legal and accounting purposes)</li>
                                    <li><strong>Employee Data:</strong> Duration of employment plus 6 years</li>
                                    <li><strong>Job Applications:</strong> 6 months (unless consent given for longer retention)</li>
                                    <li><strong>Marketing Data:</strong> Until consent is withdrawn or 2 years of inactivity</li>
                                    <li><strong>Website Analytics:</strong> 26 months</li>
                                </ul>
                            </AnimatedSection>

                            {/* Your Rights */}
                            <AnimatedSection id="your-rights" delay={0.6}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Your Rights
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Under GDPR and UK data protection law, you have the following rights:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
                                    <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                                    <li><strong>Right to Erasure:</strong> Request deletion of your data (subject to legal obligations)</li>
                                    <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                                    <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                                    <li><strong>Right to Object:</strong> Object to processing based on legitimate interests</li>
                                    <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for marketing or cookies</li>
                                </ul>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    To exercise any of these rights, please contact us at <a href="mailto:privacy@ssgukltd.com" className="text-signal-red hover:underline">privacy@ssgukltd.com</a>
                                </p>
                            </AnimatedSection>

                            {/* Security Measures */}
                            <AnimatedSection id="security" delay={0.7}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Security Measures
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We implement appropriate technical and organizational measures to protect your personal information:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>SSL/TLS encryption for data transmission</li>
                                    <li>Secure servers with firewall protection</li>
                                    <li>Access controls and authentication procedures</li>
                                    <li>Regular security audits and updates</li>
                                    <li>Staff training on data protection</li>
                                    <li>Incident response procedures</li>
                                </ul>
                            </AnimatedSection>

                            {/* Contact Information */}
                            <AnimatedSection id="contact" delay={0.8}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Contact Information
                                </h2>
                                <div className="bg-deep-navy text-white rounded-xl p-8">
                                    <h3 className="text-2xl font-bold mb-4">Data Protection Contact</h3>
                                    <p className="mb-4 text-slate-200">
                                        For any questions about this Privacy Policy or to exercise your data protection rights:
                                    </p>
                                    <div className="space-y-2 text-slate-200">
                                        <p><strong>Email:</strong> privacy@ssgukltd.com</p>
                                        <p><strong>Phone:</strong> 0800 123 4567</p>
                                        <p><strong>Post:</strong> Data Protection Officer, SSG Support Services Group LTD, [Address]</p>
                                    </div>
                                    <p className="mt-6 text-sm text-slate-300">
                                        You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" className="text-electric-blue hover:underline">ico.org.uk</a>
                                    </p>
                                </div>
                            </AnimatedSection>

                            {/* Related Links */}
                            <div className="mt-12 pt-8 border-t border-slate-200">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Related Policies</h3>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/cookie-policy" className="text-signal-red hover:underline font-semibold">
                                        Cookie Policy
                                    </Link>
                                    <Link href="/terms-and-conditions" className="text-signal-red hover:underline font-semibold">
                                        Terms & Conditions
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
