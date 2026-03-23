'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Stat {
    label: string;
    value: string;
    subtext?: string;
    icon?: LucideIcon;
}

interface SectorStatsProps {
    title: string;
    subtitle: string;
    stats: Stat[];
}

export default function SectorStats({ title, subtitle, stats }: SectorStatsProps) {
    return (
        <section className="relative bg-[var(--section-dark)] overflow-hidden">
            <div className="absolute inset-0 dotted-bg opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-20">
                <div className="text-center mb-12">
                    <h2 className="text-white mb-2">
                        {title} <span className="text-[var(--accent-amber)]">{subtitle}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur border border-white/10 rounded-lg"
                        >
                            {stat.icon && (
                                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent-amber)]/15 mb-4">
                                    <stat.icon className="w-5 h-5 text-[var(--accent-amber)]" />
                                </div>
                            )}
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-xs sm:text-sm font-semibold text-[var(--accent-amber)] uppercase tracking-wider mb-1">{stat.label}</div>
                            {stat.subtext && <div className="text-xs text-white/50">{stat.subtext}</div>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
