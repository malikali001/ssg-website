'use client';

import { Award, Trophy, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AwardsPreview() {
    const awards = [
        {
            title: "UK OSPA Awards 2018",
            subtitle: "Outstanding Young Security Professional",
            status: "Finalist",
            icon: Star,
            color: "text-amber-500",
            bg: "bg-amber-50",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=500"
        },
        {
            title: "ACS Champion of the Year",
            status: "Finalist",
            icon: Trophy,
            color: "text-[--color-signal-red]",
            bg: "bg-red-50",
            image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=500"
        },
        {
            title: "ACS Pacesetters Award",
            status: "Winner",
            icon: Award,
            color: "text-blue-600",
            bg: "bg-blue-50",
            image: "https://images.unsplash.com/photo-1546519638-68e109498ee2?auto=format&fit=crop&q=80&w=500"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[--color-signal-red]/5 rounded-full blur-3xl -mr-32 -mb-32 pointer-events-none" />

            <div className="section-container relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <span className="text-[--color-signal-red] font-bold tracking-wider uppercase text-sm">Excellence</span>
                        <h2 className="text-3xl md:text-5xl font-montserrat font-black text-[--color-deep-navy] mt-2">
                            Awards & <span className="text-[--color-signal-red]">Recognition</span>
                        </h2>
                    </div>
                    <div className="md:text-right">
                        <Link
                            href="/awards-recognition"
                            className="hidden md:inline-flex items-center gap-2 text-[--color-deep-navy] font-bold hover:text-[--color-signal-red] transition-colors group"
                        >
                            View All Awards <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {awards.map((award, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-slate-100 hover:-translate-y-1 group overflow-hidden flex flex-col"
                        >
                            <div className="h-48 relative overflow-hidden shrink-0">
                                <div className="absolute top-0 right-0 p-4 z-10">
                                    <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                        {award.status}
                                    </span>
                                </div>
                                <img
                                    src={award.image}
                                    alt={award.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[--color-deep-navy]/80 to-transparent opacity-60" />
                            </div>

                            <div className="p-8 flex-grow flex flex-col relative">
                                <div className={`absolute -top-6 left-6 w-12 h-12 ${award.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                                    <award.icon className={`w-6 h-6 ${award.color}`} />
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-xl font-bold text-[--color-deep-navy] mb-2 leading-tight">
                                        {award.title}
                                    </h3>
                                    {award.subtitle && (
                                        <p className="text-sm text-[--color-signal-red] font-bold">
                                            {award.subtitle}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/awards-recognition"
                        className="inline-flex items-center gap-2 text-[--color-deep-navy] font-bold hover:text-[--color-signal-red] transition-colors"
                    >
                        View All Awards <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
