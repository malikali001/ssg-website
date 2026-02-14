'use client';

import LegalHero from '@/components/legal/LegalHero';
import TableOfContents from '@/components/legal/TableOfContents';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';

export default function CookiePolicyContent() {
    const sections = [
        { id: 'what-are-cookies', title: 'What Are Cookies' },
        { id: 'how-we-use', title: 'How We Use Cookies' },
        { id: 'types-of-cookies', title: 'Types of Cookies' },
        { id: 'managing-cookies', title: 'Managing Cookies' },
        { id: 'third-party', title: 'Third-Party Cookies' },
        { id: 'updates', title: 'Policy Updates' },
    ];

    return (
        <>
            <LegalHero
                title="Cookie Policy"
                lastUpdated="February 2026"
                description="Information about how SSG Support Services Group LTD uses cookies and similar technologies on our website."
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <aside className="lg:col-span-1">
                        <TableOfContents sections={sections} />
                    </aside>

                    <main className="lg:col-span-3">
                        <div className="prose prose-slate max-w-none">
                            {/* What Are Cookies */}
                            <AnimatedSection id="what-are-cookies">
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4">
                                    What Are Cookies
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Cookies help us understand how you use our website, remember your preferences, and improve your browsing experience.
                                </p>
                            </AnimatedSection>

                            {/* How We Use Cookies */}
                            <AnimatedSection id="how-we-use" delay={0.1}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    How We Use Cookies
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We use cookies for the following purposes:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li><strong>Essential Operations:</strong> To enable core website functionality</li>
                                    <li><strong>Performance & Analytics:</strong> To understand how visitors use our site</li>
                                    <li><strong>User Preferences:</strong> To remember your settings and preferences</li>
                                    <li><strong>Security:</strong> To protect against fraudulent activity</li>
                                    <li><strong>Marketing:</strong> To deliver relevant content (with your consent)</li>
                                </ul>
                            </AnimatedSection>

                            {/* Types of Cookies */}
                            <AnimatedSection id="types-of-cookies" delay={0.2}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Types of Cookies We Use
                                </h2>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Essential Cookies</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    These cookies are necessary for the website to function and cannot be switched off. They include:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>Session management cookies</li>
                                    <li>Security cookies</li>
                                    <li>Load balancing cookies</li>
                                </ul>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Analytics Cookies</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    These cookies help us understand how visitors interact with our website:
                                </p>
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b border-slate-200">
                                                <th className="text-left py-2 font-bold text-slate-900">Cookie Name</th>
                                                <th className="text-left py-2 font-bold text-slate-900">Purpose</th>
                                                <th className="text-left py-2 font-bold text-slate-900">Duration</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-slate-600">
                                            <tr className="border-b border-slate-100">
                                                <td className="py-2">_ga</td>
                                                <td className="py-2">Google Analytics - User identification</td>
                                                <td className="py-2">2 years</td>
                                            </tr>
                                            <tr className="border-b border-slate-100">
                                                <td className="py-2">_gid</td>
                                                <td className="py-2">Google Analytics - Session identification</td>
                                                <td className="py-2">24 hours</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2">_gat</td>
                                                <td className="py-2">Google Analytics - Throttle request rate</td>
                                                <td className="py-2">1 minute</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Functional Cookies</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    These cookies enable enhanced functionality and personalization:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>Language preferences</li>
                                    <li>Region selection</li>
                                    <li>User interface customization</li>
                                </ul>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Marketing Cookies</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    These cookies track your browsing activity to deliver relevant advertisements (only with your consent):
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>Advertising network cookies</li>
                                    <li>Social media cookies</li>
                                    <li>Retargeting cookies</li>
                                </ul>
                            </AnimatedSection>

                            {/* Managing Cookies */}
                            <AnimatedSection id="managing-cookies" delay={0.3}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Managing Cookie Preferences
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    You can control and manage cookies in several ways:
                                </p>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-6">Browser Settings</h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Most browsers allow you to:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li>View and delete cookies</li>
                                    <li>Block third-party cookies</li>
                                    <li>Block cookies from specific sites</li>
                                    <li>Block all cookies</li>
                                    <li>Delete all cookies when you close your browser</li>
                                </ul>

                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
                                    <h4 className="font-bold text-deep-navy mb-2">Browser-Specific Instructions:</h4>
                                    <ul className="space-y-2 text-slate-700">
                                        <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                                        <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                                        <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                                        <li><strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
                                    </ul>
                                </div>

                                <p className="text-slate-600 leading-relaxed mb-4">
                                    <strong>Note:</strong> Blocking all cookies may affect your ability to use certain features of our website.
                                </p>
                            </AnimatedSection>

                            {/* Third-Party Cookies */}
                            <AnimatedSection id="third-party" delay={0.4}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Third-Party Cookies
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We use the following third-party services that may set cookies:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                                    <li><strong>Google Maps:</strong> Location services and mapping</li>
                                    <li><strong>Social Media Platforms:</strong> Social sharing and embedded content</li>
                                </ul>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    These third parties have their own privacy policies. We recommend reviewing them:
                                </p>
                                <ul className="list-disc pl-6 mb-4 text-slate-600 space-y-2">
                                    <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-signal-red hover:underline">Google Privacy Policy</a></li>
                                </ul>
                            </AnimatedSection>

                            {/* Updates */}
                            <AnimatedSection id="updates" delay={0.5}>
                                <h2 className="text-3xl font-montserrat font-bold text-deep-navy mb-4 mt-12">
                                    Updates to This Policy
                                </h2>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business practices. We will notify you of any significant changes by posting a notice on our website.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Please check this page periodically for updates. The "Last Updated" date at the top of this policy indicates when it was last revised.
                                </p>
                            </AnimatedSection>

                            {/* Contact */}
                            <AnimatedSection delay={0.6}>
                                <div className="bg-deep-navy text-white rounded-xl p-8 mt-12">
                                    <h3 className="text-2xl font-bold mb-4">Questions About Cookies?</h3>
                                    <p className="mb-4 text-slate-200">
                                        If you have any questions about our use of cookies, please contact us:
                                    </p>
                                    <div className="space-y-2 text-slate-200">
                                        <p><strong>Email:</strong> privacy@ssgukltd.com</p>
                                        <p><strong>Phone:</strong> 0800 123 4567</p>
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
