'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface Challenge {
    title: string;
    description: string;
}

interface Solution {
    title: string;
    description: string;
}

interface SectorChallengesProps {
    title: string;
    subtitle: string;
    challenges: Challenge[];
    solutions: Solution[];
}

export default function SectorChallenges({ title, subtitle, challenges, solutions }: SectorChallengesProps) {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-signal-red font-bold tracking-widest uppercase text-sm">Industry Challenges</span>
                    <h2 className="text-4xl font-montserrat font-black text-slate-900 mt-2">
                        {title} <span className="text-slate-400">vs</span> <span className="text-signal-red">{subtitle}</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 relative">
                    {/* Center Arrow (Desktop) */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="bg-slate-900 rounded-full p-4 shadow-xl border-4 border-white">
                            <ArrowRight className="w-8 h-8 text-white" />
                        </div>
                    </div>

                    {/* Challenges Column */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                                <XCircle className="w-5 h-5 text-signal-red" />
                            </span>
                            Wait Common Pain Points
                        </h3>
                        <div className="space-y-6">
                            {challenges.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 bg-slate-50 rounded-xl border-l-4 border-red-200"
                                >
                                    <h4 className="font-bold text-slate-700 mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3 lg:justify-end">
                            <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                            </span>
                            The SSG Solution
                        </h3>
                        <div className="space-y-6">
                            {solutions.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-6 bg-slate-900 rounded-xl border-l-4 border-signal-red text-white"
                                >
                                    <h4 className="font-bold mb-2">{item.title}</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
