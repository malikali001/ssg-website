'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface FeatureItem {
    icon: LucideIcon;
    title: string;
    desc: string;
}

interface IntelligenceFeatureProps {
    topicTag?: string;
    title: string;
    subtitle: string;
    description: string;
    features: FeatureItem[];
    rightContent: ReactNode;
}

export default function IntelligenceFeature({
    topicTag = "SSG Intelligence Portal",
    title,
    subtitle,
    description,
    features,
    rightContent
}: IntelligenceFeatureProps) {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Feature Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-red-100 text-signal-red text-xs font-bold uppercase tracking-wider">
                                {topicTag}
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-montserrat font-black text-slate-900 mb-6">
                            {title} <br />
                            <span className="text-signal-red">{subtitle}</span>
                        </h2>
                        <p className="text-xl text-slate-500 mb-8 leading-relaxed">
                            {description}
                        </p>

                        <div className="space-y-6">
                            {features.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.1) }}
                                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="bg-red-50 p-3 rounded-lg text-signal-red">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-slate-900 font-bold text-lg mb-1">{item.title}</h4>
                                        <p className="text-slate-500 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Content (Mockup/Map/etc) */}
                    <div>
                        {rightContent}
                    </div>
                </div>
            </div>
        </section>
    );
}
