'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BarChart3, ShieldCheck } from 'lucide-react';

interface CaseStudyCardProps {
    title: string;
    client: string;
    sector: string;
    summary: string;
    imageSrc: string;
    stats: { label: string; value: string }[];
    link: string;
}

export default function CaseStudyCard({
    title,
    client,
    sector,
    summary,
    imageSrc,
    stats,
    link
}: CaseStudyCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
                <img
                    src={imageSrc}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-widest border border-white">
                    {sector}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                    <div className="text-signal-red font-bold text-sm mb-1 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        {client}
                    </div>
                    <h3 className="text-2xl font-montserrat font-black text-slate-900 leading-tight group-hover:text-signal-red transition-colors">
                        {title}
                    </h3>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {summary}
                </p>

                {/* Micro Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8 py-4 border-y border-slate-100">
                    {stats.map((stat, idx) => (
                        <div key={idx}>
                            <div className="text-xl font-black text-slate-900">{stat.value}</div>
                            <div className="text-xs text-slate-400 font-bold uppercase">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <Link
                    href={link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-signal-red transition-colors"
                >
                    Read Full Study <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </motion.div>
    );
}
