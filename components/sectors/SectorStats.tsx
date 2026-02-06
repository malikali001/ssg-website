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
        <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-montserrat font-black mb-4">
                        {title} <span className="text-signal-red">{subtitle}</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-800/50 backdrop-blur border border-slate-700 p-8 rounded-2xl text-center group hover:border-signal-red/50 transition-colors"
                        >
                            {stat.icon && (
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-signal-red mb-6 mb-6 group-hover:scale-110 transition-transform">
                                    <stat.icon className="w-6 h-6" />
                                </div>
                            )}
                            <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                            <div className="text-sm font-bold text-signal-red uppercase tracking-wider mb-2">{stat.label}</div>
                            {stat.subtext && <div className="text-xs text-slate-400">{stat.subtext}</div>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
