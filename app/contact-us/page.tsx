import type { Metadata } from 'next';
import OfficeLocations from '@/components/sections/OfficeLocations';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us | SSG UK Ltd',
    description: 'Get in touch with SSG UK Ltd. Visit our offices in Romford and Sunderland, or contact us for your security and facilities management needs.',
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-[--color-deep-navy] py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[--color-signal-red]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

                <div className="section-container relative z-10 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm tracking-wide mb-6 backdrop-blur-sm">
                        <MessageSquare className="w-4 h-4 text-amber-400" /> Get in Touch
                    </div>
                    <h1 className="text-4xl md:text-6xl font-montserrat font-black mb-6">
                        Contact <span className="text-[--color-signal-red]">SSG UK Ltd</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                        We're here to help with all your security and facilities management requirements.
                    </p>
                </div>
            </section>

            {/* Quick Contact Bar */}
            <section className="bg-[--color-gunmetal] py-12 border-b border-white/5">
                <div className="section-container">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-[--color-deep-navy]">
                        <a href="tel:02085910330" className="flex items-center gap-3 hover:text-[--color-signal-red] transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-[--color-signal-red] group-hover:text-[--color-signal-red] transition-colors shadow-sm">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <span className="block text-xs text-slate-500 uppercase tracking-wider font-bold">Call Us 24/7</span>
                                <span className="text-lg font-bold">0208 591 0330</span>
                            </div>
                        </a>
                        <a href="mailto:info@ssgukltd.com" className="flex items-center gap-3 hover:text-[--color-signal-red] transition-colors group">
                            <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-[--color-signal-red] group-hover:text-[--color-signal-red] transition-colors shadow-sm">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <span className="block text-xs text-slate-500 uppercase tracking-wider font-bold">Email Us</span>
                                <span className="text-lg font-bold">info@ssgukltd.com</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            <OfficeLocations />

            {/* Map Placeholder or Additional Info could go here */}
        </main>
    );
}
