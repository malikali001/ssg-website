'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';

export default function GetAQuotePage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => {
            setFormStatus('success');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
    };

    if (formStatus === 'success') {
        return (
            <main className="min-h-screen bg-[var(--section-light)] flex items-center justify-center py-24 px-4">
                <div className="max-w-xl w-full bg-white rounded-lg shadow-xl p-12 text-center border border-[var(--border-color)]">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-montserrat font-bold text-[var(--deep-navy)] mb-4">
                        Request Received
                    </h1>
                    <p className="text-[var(--text-muted)] mb-8 text-lg">
                        Thank you for contacting SSG. Our team will review your requirements and get back to you shortly.
                    </p>
                    <Link
                        href="/"
                        className="btn-primary inline-flex items-center gap-2 px-8 py-3"
                    >
                        Return Home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <PageHero
                badge="Free Quote"
                title="Get a"
                subtitle="Quote"
                description="Tell us your security requirements and our team will get back to you with a tailored solution."
                imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
            />

            {/* Form Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-[var(--border-color)]">
                        <div className="grid md:grid-cols-3">
                            {/* Contact Sidebar */}
                            <div className="bg-[var(--section-light)] p-8 md:p-10 hidden md:flex flex-col justify-between border-r border-[var(--border-color)]">
                                <div>
                                    <h3 className="text-lg font-bold text-[var(--deep-navy)] mb-6">Contact Information</h3>
                                    <div className="space-y-5">
                                        <div className="flex items-start gap-3">
                                            <Phone className="w-4 h-4 text-[var(--signal-red)] mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-0.5">Phone</p>
                                                <p className="text-[var(--text-main)] font-medium text-sm">0208 591 0330</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Mail className="w-4 h-4 text-[var(--signal-red)] mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-0.5">Email</p>
                                                <p className="text-[var(--text-main)] font-medium text-sm">info@ssgukltd.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-4 h-4 text-[var(--signal-red)] mt-1 flex-shrink-0" />
                                            <div>
                                                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold mb-0.5">Head Office</p>
                                                <p className="text-[var(--text-main)] font-medium text-sm">SSG Head Office, Romford, Essex</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <div className="flex items-center gap-2 text-[var(--deep-navy)] font-semibold text-sm">
                                        <ShieldCheck className="w-4 h-4 text-[var(--signal-red)]" />
                                        Trusted Partner
                                    </div>
                                    <p className="text-xs text-[var(--text-muted)] mt-1">
                                        Your data is secure and will only be used to process your enquiry.
                                    </p>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="col-span-2 p-8 md:p-10">
                                <h2 className="text-xl font-bold text-[var(--deep-navy)] mb-6">Enquiry Details</h2>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">Service Required</label>
                                        <select className="input-tactical w-full">
                                            <option>Manned Guarding</option>
                                            <option>K9 Units</option>
                                            <option>Mobile Patrols</option>
                                            <option>Electronic Security</option>
                                            <option>Concierge Services</option>
                                            <option>Key Holding & Alarm Response</option>
                                            <option>Commercial Cleaning</option>
                                            <option>Waste Management</option>
                                            <option>Property Maintenance</option>
                                            <option>Reception Services</option>
                                            <option>Other / Multiple Services</option>
                                        </select>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">Full Name *</label>
                                            <input type="text" required className="input-tactical w-full" placeholder="John Doe" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">Phone *</label>
                                            <input type="tel" required className="input-tactical w-full" placeholder="07123 456789" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">Email *</label>
                                            <input type="email" required className="input-tactical w-full" placeholder="john@example.com" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">Company Name *</label>
                                            <input type="text" required className="input-tactical w-full" placeholder="Company Ltd" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">How can we help?</label>
                                        <textarea className="input-tactical w-full min-h-[100px]" placeholder="Describe your requirements..." />
                                    </div>

                                    <div className="flex items-start gap-3 pt-1">
                                        <input type="checkbox" id="consent" required className="mt-1 w-4 h-4 rounded border-[var(--border-color)]" />
                                        <label htmlFor="consent" className="text-xs text-[var(--text-muted)]">
                                            I consent to SSG collecting my details to contact me regarding this enquiry.
                                        </label>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                        <button
                                            type="submit"
                                            disabled={formStatus === 'submitting'}
                                            className="btn-primary flex-1 py-3 text-center flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {formStatus === 'submitting' ? 'Processing...' : (
                                                <>Request a Quote <ArrowRight className="w-4 h-4" /></>
                                            )}
                                        </button>
                                        <a
                                            href="tel:02085910330"
                                            className="inline-flex items-center justify-center gap-2 border-2 border-[var(--border-color)] text-[var(--deep-navy)] px-6 py-3 rounded-full font-semibold text-sm hover:scale-110 transition-transform"
                                        >
                                            <Phone className="w-4 h-4" />
                                            0208 591 0330
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
