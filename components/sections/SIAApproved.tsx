'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SIAApproved() {
    return (
        <section className="bg-white px-5 md:px-10 lg:px-16">
            <div className="max-w-[1280px] mx-auto py-10 sm:py-16 lg:py-20">
                <div className="bg-white rounded-[24px] overflow-hidden border border-gray-200/80 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center p-8 sm:p-10 lg:p-14">
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        >
                            <h2 className="text-[var(--deep-navy)] mb-3">
                                SSG Support Services Group LTD
                            </h2>
                            <p className="text-[var(--signal-red)] text-lg sm:text-xl font-bold mb-6">
                                SIA Approved Contractor
                            </p>

                            <div className="space-y-4 text-[var(--text-muted)] text-[15px] sm:text-base leading-relaxed">
                                <p>
                                    SSG Support Services Group LTD is specialists in provision of Manned guarding Security Services, Door Supervision, Security Guarding, Out of Hours Support, Concierge, Front of House Reception, Retail, Porter, Event Security, Mobile Response, CCTV Monitoring, Key Holding and Alarm Response.
                                </p>
                                <p>
                                    SSG is on the (SIA) Approved Contractor Scheme (Certificate Number: SSGUGRSC01) for the Provision of Security Guarding, Key Holding and Public Space Surveillance (CCTV).
                                </p>
                                <p className="text-[var(--deep-navy)] font-semibold">
                                    SSG has achieved a score of +128 out of +145 at its recent Annual SIA Audit.
                                </p>
                            </div>
                        </motion.div>

                        {/* SIA Badge Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="flex justify-center lg:justify-end"
                        >
                            <Image
                                src="/sia-approved.png"
                                alt="SIA Approved Contractor"
                                width={240}
                                height={240}
                                className="w-[180px] sm:w-[220px] lg:w-[240px] h-auto object-contain"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
