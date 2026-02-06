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
                    <div className="relative aspect-[4/3] rounded-2xl border border-gray-200 shadow-2xl overflow-hidden group">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                            alt="SSG Intelligence Portal Dashboard"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                        {/* Overlay Stats */}
                        <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-lg">
                                <div className="text-signal-red text-2xl font-bold">247</div>
                                <div className="text-slate-600 text-[10px] font-bold uppercase tracking-wider">Active Guards</div>
                            </div>
                            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 border border-white/20 shadow-lg">
                                <div className="text-green-600 text-2xl font-bold">98%</div>
                                <div className="text-slate-600 text-[10px] font-bold uppercase tracking-wider">Compliance</div>
                            </div>
                        </div>
                    </div>
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
