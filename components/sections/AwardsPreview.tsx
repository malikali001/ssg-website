'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { awards } from '@/data/awards';
import AwardBlock from '@/components/ui/AwardBlock';

export default function AwardsPreview() {
    // Select featured awards, limit to 3
    const featuredAwards = awards.filter(a => a.featured).slice(0, 3);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--signal-red)]/5 rounded-full blur-3xl -mr-32 -mb-32 pointer-events-none" />

            <div className="section-container relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-[var(--signal-red)] font-bold tracking-wider uppercase text-sm">Excellence</span>
                        <h2 className="text-3xl md:text-5xl font-montserrat font-black text-[var(--deep-navy)] mt-2">
                            Awards & <span className="text-[var(--signal-red)]">Recognition</span>
                        </h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {featuredAwards.map((award, idx) => (
                        <motion.div
                            key={award.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <AwardBlock award={award} layout="compact" />
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/awards-recognition"
                        className="inline-flex items-center gap-2 text-[var(--deep-navy)] font-bold hover:text-[var(--signal-red)] transition-colors group px-8 py-4 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-md"
                    >
                        View All Awards <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
