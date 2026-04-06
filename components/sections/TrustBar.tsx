'use client';

import { motion } from 'framer-motion';

const accreditations = [
    { name: 'SIA Approved Contractor', logo: '/certifications/sia.png' },
    { name: 'ISO 9001', logo: '/certifications/iso9001.png' },
    { name: 'ISO 14001', logo: '/certifications/iso14001.png' },
    { name: 'SafeContractor', logo: '/certifications/safecontractor.png' },
    { name: 'Constructionline', logo: '/certifications/constructionline.png' },
    { name: 'CHAS', logo: '/certifications/chas.png' },
];

export default function TrustBar() {
    return (
        <section className="bg-white px-5 md:px-10 lg:px-16">
            <div className="max-w-[1280px] mx-auto py-10 sm:py-16 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="mb-5">
                            Keeping your commercial premises looking the part
                        </h2>
                        <p className="text-[var(--text-main)] mb-4">
                            When you&apos;re running a business, it&apos;s imperative that everything runs like clockwork. The environment needs to bring the best out of our employees, while visitors and customers should be instantly impressed.
                        </p>
                        <p className="text-[var(--text-main)]">
                            Our integrated facilities management services for commercial customers help you deliver uninterrupted and hassle-free services while we keep everything in perfect working order behind the scenes.
                        </p>
                    </motion.div>

                    {/* Right — Certification Logos Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
                    >
                        {accreditations.map((accred, index) => (
                            <div
                                key={index}
                                className="aspect-square bg-[#F7F7F7] rounded-xl sm:rounded-2xl border border-gray-200/80 flex items-center justify-center p-3 sm:p-5 hover:shadow-md transition-shadow duration-300"
                                title={accred.name}
                            >
                                <img
                                    src={accred.logo}
                                    alt={accred.name}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const fallback = target.nextElementSibling as HTMLElement;
                                        if (fallback) fallback.style.display = 'flex';
                                    }}
                                />
                                <div
                                    className="hidden w-full h-full items-center justify-center text-center text-xs font-bold text-[var(--text-muted)]"
                                >
                                    {accred.name}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
