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
        <section className="section-container bg-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 shadow-2xl p-8 flex items-center justify-center overflow-hidden">
                        {/* Placeholder for 3D tablet mockup */}
                        <div className="text-center relative z-10 w-full">
                            <div className="w-full h-64 bg-deep-navy rounded-lg border border-gray-700 shadow-xl flex items-center justify-center mb-6 transform rotate-x-6 transition-transform hover:rotate-0 duration-500">
                                <div className="text-white font-montserrat font-bold text-2xl tracking-widest">
                                    INTELLIGENCE<br /><span className="text-signal-red">PORTAL</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                                <div className="bg-white/90 backdrop-blur rounded-lg p-4 border border-gray-200 shadow-lg">
                                    <div className="text-signal-red text-3xl font-bold">247</div>
                                    <div className="text-gray-500 text-xs font-semibold uppercase">Active Guards</div>
                                </div>
                                <div className="bg-white/90 backdrop-blur rounded-lg p-4 border border-gray-200 shadow-lg">
                                    <div className="text-green-500 text-3xl font-bold">98%</div>
                                    <div className="text-gray-500 text-xs font-semibold uppercase">Compliance</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-0 opacity-50" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl -z-0 opacity-50" />
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-signal-red/5 blur-3xl -z-10" />
                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-6 text-deep-navy">
                        Security, <span className="text-signal-red">Supercharged by Intelligence.</span>
                    </h2>

                    <p className="text-xl text-text-muted mb-8 leading-relaxed">
                        Standard support is reactive. <span className="font-semibold text-deep-navy">SSG is proactive.</span> Through our Intelligence Portal, we provide real-time data, transparent reporting, and predictive risk analysis, giving you total visibility over your estate.
                    </p>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-10">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-signal-red" />
                                    </div>
                                    <span className="text-deep-navy font-semibold">{feature.text}</span>
                                </div>
                            );
                        })}
                    </div>

                    <Link
                        href="/portals/intelligence"
                        className="btn-primary inline-flex items-center gap-2 shadow-lg shadow-red-500/20 px-8 py-4 text-lg"
                    >
                        <span>See the Portal in Action</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
