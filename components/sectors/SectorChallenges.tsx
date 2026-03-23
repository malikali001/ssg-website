'use client';

import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle } from 'lucide-react';

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
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[var(--deep-navy)] mb-2">
                        {title} <span className="text-[var(--accent-amber)]">{subtitle}</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Challenges */}
                    <div>
                        <h3 className="text-lg font-bold text-[var(--deep-navy)] mb-6 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-[var(--accent-amber)]" />
                            Industry Challenges
                        </h3>
                        <div className="space-y-4">
                            {challenges.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                                    className="p-5 bg-[var(--section-light)] rounded-lg border-l-3 border-[var(--accent-amber)]"
                                >
                                    <h4 className="font-bold text-[var(--deep-navy)] mb-1 text-sm">{item.title}</h4>
                                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-lg font-bold text-[var(--deep-navy)] mb-6 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            The SSG Solution
                        </h3>
                        <div className="space-y-4">
                            {solutions.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                                    className="p-5 bg-[var(--section-dark)] rounded-lg border-l-3 border-[var(--signal-red)] text-white"
                                >
                                    <h4 className="font-bold mb-1 text-sm">{item.title}</h4>
                                    <p className="text-sm text-white/60 leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
