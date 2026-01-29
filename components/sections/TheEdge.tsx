'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Activity, FileText, Bell, ArrowRight } from 'lucide-react';

export default function TheEdge() {
    const features = [
        { icon: MapPin, text: 'Live GPS Guard Patrols' },
        { icon: Activity, text: 'Incident Heat-maps' },
        { icon: FileText, text: 'Digital Site Logs' },
        { icon: Bell, text: 'Real-time Alarm Monitoring' },
    ];

    return (
        <section className="section-container bg-gunmetal/30">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-gunmetal to-obsidian rounded-lg border border-signal-red/30 p-8 flex items-center justify-center">
                        {/* Placeholder for 3D tablet mockup */}
                        <div className="text-center">
                            <div className="w-full h-64 bg-obsidian rounded-lg border border-text-muted/20 flex items-center justify-center mb-4">
                                <div className="text-signal-red font-montserrat font-bold text-2xl">
                                    INTELLIGENCE<br />CENTER
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-obsidian/50 rounded p-3 border border-signal-red/20">
                                    <div className="text-signal-red text-2xl font-bold">247</div>
                                    <div className="text-text-muted text-xs">Guards Active</div>
                                </div>
                                <div className="bg-obsidian/50 rounded p-3 border border-signal-red/20">
                                    <div className="text-signal-red text-2xl font-bold">98%</div>
                                    <div className="text-text-muted text-xs">Compliance</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-signal-red/10 blur-3xl -z-10" />
                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-6">
                        The SSG <span className="text-signal-red">Intelligence Center</span>
                    </h2>

                    <p className="text-xl text-text-muted mb-8">
                        Real-time visibility, GPS tracking, and instant compliance reporting.
                        The brain behind every contract.
                    </p>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-3 bg-obsidian/50 rounded border border-text-muted/10"
                                >
                                    <Icon className="w-5 h-5 text-signal-red flex-shrink-0" />
                                    <span className="text-text-main text-sm">{feature.text}</span>
                                </div>
                            );
                        })}
                    </div>

                    <Link
                        href="/portals/intelligence"
                        className="inline-flex items-center gap-2 text-signal-red font-semibold text-lg hover:gap-4 transition-all duration-300"
                    >
                        <span>Explore Intelligence Center</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
