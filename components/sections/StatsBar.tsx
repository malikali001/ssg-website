'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck, Users, Handshake, Eye } from 'lucide-react';

const stats = [
    { value: '125+', label: 'Projects successfully delivered nationwide', icon: ShieldCheck },
    { value: '150+', label: 'Highly trained security professionals', icon: Users },
    { value: '30+', label: 'Long-term, satisfied client partnerships', icon: Handshake },
    { value: '35+', label: 'Industries and sectors we protect', icon: Eye },
];

export default function StatsBar() {
    return (
        <section className="bg-white px-5 md:px-10 lg:px-16">
            <div className="relative overflow-hidden max-w-[1280px] mx-auto py-10 sm:py-16 lg:py-20">
                    <Image
                        src="/commitment-section-dotted-image.webp"
                        alt=""
                        fill
                        className="object-cover"
                    />
                <div className="relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="mb-4">
                        Trusted Security. Proven Results.
                    </h2>
                    <p className="text-[var(--text-main)] max-w-2xl mx-auto">
                        Dedicated to safeguarding people, property, and progress with unmatched protection and professionalism.
                    </p>
                </motion.div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-white rounded-xl sm:rounded-2xl border border-gray-200/80 p-4 sm:p-7 md:p-9 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
                            >
                                {/* Icon in circle */}
                                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-[1.5px] border-[var(--section-dark)] flex items-center justify-center mb-3 sm:mb-6">
                                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-[#C83232]" strokeWidth={1.8} />
                                </div>

                                {/* Stat number */}
                                <div className="text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] font-extrabold text-[#C83232] leading-none mb-2 sm:mb-3">
                                    {stat.value}
                                </div>

                                {/* Description */}
                                <p className="text-[var(--text-main)] text-sm sm:text-base leading-snug font-medium">
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
                </div>
            </div>
        </section>
    );
}
