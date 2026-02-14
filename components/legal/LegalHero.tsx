'use client';

import { motion } from 'framer-motion';

interface LegalHeroProps {
    title: string;
    lastUpdated: string;
    description?: string;
}

export default function LegalHero({ title, lastUpdated, description }: LegalHeroProps) {
    return (
        <section className="bg-gradient-to-br from-slate-50 to-white py-16 border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-montserrat font-black text-deep-navy mb-4">
                        {title}
                    </h1>
                    <p className="text-slate-500 text-sm mb-2">
                        Last Updated: <span className="font-semibold text-slate-700">{lastUpdated}</span>
                    </p>
                    {description && (
                        <p className="text-lg text-slate-600 mt-4 leading-relaxed">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
