import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#fbfbfc] text-[var(--text-main)] font-['Inter',sans-serif]">
            {/* Company Info & Framework Partner Banner */}
            <div className="bg-[var(--section-dark)]">
                <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
                            <div className="space-y-1 text-xs text-white/60">
                                <p>Registered in England &amp; Wales — Company House Number <span className="text-white/90 font-semibold">09675743</span></p>
                                <p>VAT Number: <span className="text-white/90 font-semibold">217428120</span></p>
                            </div>
                        </div>
                        <a
                            href="https://www.nationalframeworkpartnership.co.uk/supplier/ssg-support-services-group-ltd/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 hover:opacity-80 transition-opacity"
                        >
                            <Image
                                src="/nfp-badge.png"
                                alt="National Framework Partnership - Framework Partner"
                                width={180}
                                height={56}
                                className="h-11 w-auto object-contain"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 py-10 sm:py-14">
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
                            Focusing on What Matters.
                        </p>
                    </div>

                    {/* Column 2: Security Services */}
                    <div>
                        <h4 className="text-[var(--deep-navy)] font-semibold text-sm sm:text-base mb-3 sm:mb-4">Security Services</h4>
                        <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-[15px]">
                            <li><Link href="/services/security/manned-guarding" className="hover:text-[var(--signal-red)] transition-colors">Manned Guarding</Link></li>
                            <li><Link href="/services/security/mobile-patrols" className="hover:text-[var(--signal-red)] transition-colors">Mobile Security Patrols</Link></li>
                            <li><Link href="/services/security/k9-units" className="hover:text-[var(--signal-red)] transition-colors">Guard Dogs Patrols</Link></li>
                            <li><Link href="/services/security/key-holding" className="hover:text-[var(--signal-red)] transition-colors">Key Holding</Link></li>
                            <li><Link href="/services/security/electronic-security" className="hover:text-[var(--signal-red)] transition-colors">Electronic Security</Link></li>
                            <li><Link href="/services/security/concierge" className="hover:text-[var(--signal-red)] transition-colors">Concierge Security</Link></li>
                            <li><Link href="/services/facilities/reception" className="hover:text-[var(--signal-red)] transition-colors">Reception Services</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Sectors */}
                    <div>
                        <h4 className="text-[var(--deep-navy)] font-semibold text-sm sm:text-base mb-3 sm:mb-4">Sectors</h4>
                        <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-[15px]">
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
                        <h4 className="text-[var(--deep-navy)] font-semibold text-sm sm:text-base mb-3 sm:mb-4">Company</h4>
                        <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-[15px]">
                            <li><Link href="/about" className="hover:text-[var(--signal-red)] transition-colors">About Us</Link></li>
                            <li><Link href="/contact-us" className="hover:text-[var(--signal-red)] transition-colors">Contact Us</Link></li>
                            <li><Link href="/careers" className="hover:text-[var(--signal-red)] transition-colors">Careers</Link></li>
                            <li><Link href="/case-studies" className="hover:text-[var(--signal-red)] transition-colors">Case Studies</Link></li>
                            <li><Link href="/testimonials" className="hover:text-[var(--signal-red)] transition-colors">Testimonials</Link></li>
                            <li><Link href="/awards-recognition" className="hover:text-[var(--signal-red)] transition-colors">Awards</Link></li>
                            <li><Link href="/esg" className="hover:text-[var(--signal-red)] transition-colors">ESG & Compliance</Link></li>
                            <li><Link href="/policies" className="hover:text-[var(--signal-red)] transition-colors">Policies & Documents</Link></li>
                        </ul>
                    </div>

                    {/* Column 6: Get In Touch */}
                    <div>
                        <h4 className="text-[var(--deep-navy)] font-semibold text-sm sm:text-base mb-3 sm:mb-4">Get In Touch</h4>
                        <ul className="space-y-2 sm:space-y-2.5 text-sm sm:text-[15px]">
                            <li><Link href="/get-a-quote" className="hover:text-[var(--signal-red)] transition-colors">Get a Quote</Link></li>
                            <li><Link href="/contact-us/customer-satisfaction" className="hover:text-[var(--signal-red)] transition-colors">Customer Satisfaction</Link></li>
                            <li><Link href="/contact-us/consumer-feedback" className="hover:text-[var(--signal-red)] transition-colors">Consumer Feedback</Link></li>
                            <li><Link href="/contact-us/report-incident" className="hover:text-[var(--signal-red)] transition-colors">Report an Incident</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200">
                <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 py-6">
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
