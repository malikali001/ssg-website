'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function GetAQuotePage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
    };

    if (formStatus === 'success') {
        return (
            <main className="min-h-screen bg-slate-50 flex items-center justify-center py-24 px-4">
                <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-12 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-montserrat font-black text-[--color-deep-navy] mb-4">
                        Request Received
                    </h1>
                    <p className="text-slate-600 mb-8 text-lg">
                        Thank you for contacting SSG. Our team will review your requirements and get back to you shortly with a tailored quote.
                    </p>
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--signal-red)] hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                    >
                        Return Home
                    </a>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[--color-deep-navy] py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[--color-signal-red]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

                <div className="section-container relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-montserrat font-black mb-6">
                        Get a <span className="text-[--color-signal-red]">Quote</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                        Tell us your security requirements and our team will get back to you with a tailored solution.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 md:py-24 -mt-10">
                <div className="section-container max-w-4xl">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                        <div className="grid md:grid-cols-3">

                            {/* Contact Sidebar (Desktop) */}
                            <div className="bg-[--color-gunmetal] p-8 md:p-12 hidden md:flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-[--color-deep-navy] mb-6">Contact Information</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <Phone className="w-5 h-5 text-[--color-signal-red] mt-1" />
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Phone</p>
                                                <p className="text-slate-700 font-medium">0800 123 4567</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Mail className="w-5 h-5 text-[--color-signal-red] mt-1" />
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Email</p>
                                                <p className="text-slate-700 font-medium">info@ssg-net.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <MapPin className="w-5 h-5 text-[--color-signal-red] mt-1" />
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Head Office</p>
                                                <p className="text-slate-700 font-medium">
                                                    SSG Head Office,<br />
                                                    London, UK
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <div className="flex items-center gap-2 text-[--color-deep-navy] font-bold">
                                        <ShieldCheck className="w-5 h-5 text-[--color-signal-red]" />
                                        <span>Trusted Partner</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">
                                        Your data is secure and will only be used to process your enquiry.
                                    </p>
                                </div>
                            </div>

                            {/* Main Form */}
                            <div className="col-span-2 p-8 md:p-12">
                                <h2 className="text-2xl font-bold text-[--color-deep-navy] mb-8">Enquiry Details</h2>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[--color-signal-red] focus:ring-0 outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                                            <input
                                                type="text"
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[--color-signal-red] focus:ring-0 outline-none transition-all"
                                                placeholder="Company Ltd"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[--color-signal-red] focus:ring-0 outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[--color-signal-red] focus:ring-0 outline-none transition-all"
                                                placeholder="07123 456789"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                                        <select
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[--color-signal-red] focus:ring-0 outline-none transition-all"
                                        >
                                            <option>Manned Guarding</option>
                                            <option>Door Supervision</option>
                                            <option>CCTV Monitoring</option>
                                            <option>Mobile Patrols</option>
                                            <option>Concierge Services</option>
                                            <option>Cleaning & Facilities</option>
                                            <option>Other / Multiple Services</option>
                                        </select>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Site Location</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[--color-signal-red] focus:ring-0 outline-none transition-all"
                                                placeholder="City or Postcode"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate-700 mb-2">Start Date (Optional)</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[--color-signal-red] focus:ring-0 outline-none transition-all"
                                                placeholder="ASAP or Date"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-slate-700 mb-2">Message / Requirements</label>
                                        <textarea
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[--color-signal-red] focus:ring-0 outline-none transition-all min-h-[120px]"
                                            placeholder="Please describe your security needs..."
                                        ></textarea>
                                    </div>

                                    <div className="flex items-start gap-3 pt-2">
                                        <input
                                            type="checkbox"
                                            id="consent"
                                            required
                                            className="mt-1 w-4 h-4 text-[--color-signal-red] border-slate-300 rounded focus:ring-[--color-signal-red]"
                                        />
                                        <label htmlFor="consent" className="text-sm text-slate-500">
                                            I consent to SSG collecting my details to contact me regarding this enquiry. I understand I can unsubscribe at any time.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'submitting'}
                                        className="w-full py-4 bg-[var(--signal-red)] hover:bg-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {formStatus === 'submitting' ? (
                                            <>Processing...</>
                                        ) : (
                                            <>Request a Quote <ArrowRight className="w-5 h-5" /></>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
