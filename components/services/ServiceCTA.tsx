'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceCTA() {
    return (
        <section id="audit" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white mb-6">
                        Is your current security <br />
                        <span className="text-signal-red">leaving you exposed?</span>
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Don't wait for an incident to reveal your vulnerabilities. Book a complimentary, no-obligation site risk assessment with our senior security consultants.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/contact-us"
                            className="w-full sm:w-auto bg-signal-red hover:bg-red-600 text-white font-bold py-5 px-10 rounded-lg shadow-lg shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
                        >
                            Request Free Site Audit
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a
                            href="tel:08001234567"
                            className="w-full sm:w-auto text-white font-bold py-5 px-10 rounded-lg border border-slate-700 hover:border-white hover:bg-white/5 transition-all duration-300 text-lg flex items-center justify-center"
                        >
                            Call 0800 123 4567
                        </a>
                    </div>

                    <p className="mt-8 text-sm text-slate-500">
                        Compliance Assured: ISO 9001 • ACS Approved • SafeContractor
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
