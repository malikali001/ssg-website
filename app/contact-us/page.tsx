import type { Metadata } from 'next';
import OfficeLocations from '@/components/sections/OfficeLocations';
import { Mail, Phone, MapPin, ClipboardCheck, MessageSquareText, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
    title: 'Contact Us | SSG UK Ltd',
    description: 'Get in touch with SSG UK Ltd. Visit our offices in Romford and Sunderland, or contact us for your security and facilities management needs.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <PageHero
                badge="Contact Us"
                title="Get in Touch"
                subtitle="With Our Team"
                description="Speak to our security specialists about protecting your people, property and premises nationwide."
                imageSrc="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80"
            />

            {/* Contact Info Row */}
            <section className="bg-[var(--section-light)] border-b border-[var(--border-color)] py-10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <a href="tel:02085910330" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-white border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--signal-red)] transition-colors shadow-sm">
                                <Phone className="w-5 h-5 text-[var(--signal-red)]" />
                            </div>
                            <div>
                                <span className="block text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">Call Us 24/7</span>
                                <span className="text-lg font-bold text-[var(--deep-navy)]">0208 591 0330</span>
                            </div>
                        </a>
                        <a href="mailto:info@ssgukltd.com" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-white border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--signal-red)] transition-colors shadow-sm">
                                <Mail className="w-5 h-5 text-[var(--signal-red)]" />
                            </div>
                            <div>
                                <span className="block text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">Email Us</span>
                                <span className="text-lg font-bold text-[var(--deep-navy)]">info@ssgukltd.com</span>
                            </div>
                        </a>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white border border-[var(--border-color)] flex items-center justify-center shadow-sm">
                                <MapPin className="w-5 h-5 text-[var(--signal-red)]" />
                            </div>
                            <div>
                                <span className="block text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">Head Office</span>
                                <span className="text-lg font-bold text-[var(--deep-navy)]">Romford, Essex</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feedback Forms */}
            <section className="bg-white py-12 border-b border-[var(--border-color)]">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                    <Link
                        href="/contact-us/customer-satisfaction"
                        className="flex items-center gap-6 p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--section-light)] hover:border-[var(--signal-red)] transition-all group"
                    >
                        <div className="w-14 h-14 rounded-full bg-white border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--signal-red)] transition-colors shadow-sm flex-shrink-0">
                            <ClipboardCheck className="w-6 h-6 text-[var(--signal-red)]" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[var(--deep-navy)] mb-1">Customer Satisfaction Questionnaire</h3>
                            <p className="text-sm text-[var(--text-muted)]">
                                Help us improve our services by completing our customer satisfaction questionnaire.
                            </p>
                        </div>
                    </Link>

                    <Link
                        href="/contact-us/consumer-feedback"
                        className="flex items-center gap-6 p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--section-light)] hover:border-[var(--signal-red)] transition-all group"
                    >
                        <div className="w-14 h-14 rounded-full bg-white border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--signal-red)] transition-colors shadow-sm flex-shrink-0">
                            <MessageSquareText className="w-6 h-6 text-[var(--signal-red)]" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[var(--deep-navy)] mb-1">Consumer Feedback</h3>
                            <p className="text-sm text-[var(--text-muted)]">
                                Share your experience with our on-site security staff and help us maintain high standards.
                            </p>
                        </div>
                    </Link>

                    <Link
                        href="/contact-us/report-incident"
                        className="flex items-center gap-6 p-6 sm:p-8 rounded-2xl border border-[var(--border-color)] bg-[var(--section-light)] hover:border-[var(--signal-red)] transition-all group"
                    >
                        <div className="w-14 h-14 rounded-full bg-white border border-[var(--border-color)] flex items-center justify-center group-hover:border-[var(--signal-red)] transition-colors shadow-sm flex-shrink-0">
                            <ShieldAlert className="w-6 h-6 text-[var(--signal-red)]" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[var(--deep-navy)] mb-1">Report an Incident / Accident</h3>
                            <p className="text-sm text-[var(--text-muted)]">
                                Security officers can report incidents and accidents using our secure online form.
                            </p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Office Locations */}
            <OfficeLocations />
        </main>
    );
}
