'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SiaSection() {
    return (
        <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
            <div className="section-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-montserrat font-black text-[--color-deep-navy] mb-2">
                            SSG Support Services Group LTD
                        </h2>
                        <div className="flex items-center gap-3 mb-8">
                            <span className="h-px bg-[--color-signal-red] w-12"></span>
                            <span className="text-lg font-bold text-[--color-text-muted] tracking-wide uppercase">SIA Approved Contractor</span>
                        </div>

                        <div className="space-y-6 text-slate-600 font-medium leading-relaxed text-lg">
                            <p>
                                SSG Support Services Group LTD is specialists in provision of <strong className="text-[--color-deep-navy]">Manned Guarding Security Services</strong>, Door Supervision, Security Guarding, Out of Hours Support, Concierge, Front of House Reception, Retail, Porter, Event Security, Mobile Response, CCTV Monitoring, Key Holding and Alarm Response.
                            </p>
                            <p>
                                SSG is on the <strong className="text-[--color-deep-navy]">(SIA) Approved Contractor Scheme</strong> (Certificate Number: SSGUGRSC01) for the Provision of Security Guarding, Key Holding and Public Space Surveillance (CCTV).
                            </p>

                            <div className="inline-flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm mt-4">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">Audit Score</div>
                                    <div className="text-2xl font-black text-[--color-deep-navy]">
                                        +128 <span className="text-sm font-medium text-slate-400">/ +145</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Logo/Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="bg-white p-12 rounded-3xl shadow-2xl border border-slate-100 relative group max-w-md w-full flex justify-center items-center">
                            {/* Decorative glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-3xl rounded-full group-hover:bg-blue-600/20 transition-all duration-700" />

                            {/* SIA Logo Placeholder / SVG */}
                            {/* Using a clear SVG representation since I don't have the exact image file, or using an img tag if URL is known.
                                Since the user provided an image of the section, I will try to recreate the logo layout or use a high-quality relevant image. 
                                Ideally, this should be the actual SIA logo. I will use a placeholder image for now or a standard SIA logo URL if available.
                                Using a high-quality placeholder for "SIA Approved Contractor"
                            */}
                            <img
                                src="/sia-approved.png"
                                alt="SIA Approved Contractor"
                                className="w-full max-w-[300px] h-auto object-contain relative z-10"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
