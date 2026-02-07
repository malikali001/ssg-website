'use client';

import { Award, Trophy, Star, Medal, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AwardsPage() {
    const awards = [
        {
            title: "UK OSPA Awards 2018",
            subtitle: "Outstanding Young Security Professional",
            status: "Finalist",
            desc: "Recognising exceptional performance and promise in the security sector.",
            icon: Star,
            color: "text-amber-500",
            bg: "bg-amber-50",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "ACS Champion of the Year",
            subtitle: "",
            status: "Finalist",
            desc: "Acknowledging commitment to the Approved Contractor Scheme standards.",
            icon: Trophy,
            color: "text-[--color-signal-red]",
            bg: "bg-red-50",
            image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "ACS Pacesetters Award 2018",
            subtitle: "",
            status: "Winner",
            desc: "Awarded to security companies in the top 15% of the SIA benchmarking.",
            icon: Award,
            color: "text-blue-600",
            bg: "bg-blue-50",
            image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "ACS Pacesetters Security Officer Distinction Award 2018",
            subtitle: "",
            status: "Winner",
            desc: "Celebrating individual excellence and outstanding service delivery.",
            icon: Medal,
            color: "text-purple-600",
            bg: "bg-purple-50",
            image: "https://images.unsplash.com/photo-1546519638-68e109498ee2?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[--color-deep-navy] py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[--color-signal-red]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

                <div className="section-container relative z-10 text-center text-white">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm tracking-wide mb-6 backdrop-blur-sm">
                        <Trophy className="w-4 h-4 text-amber-400" /> Excellence in Security
                    </div>
                    <h1 className="text-4xl md:text-6xl font-montserrat font-black mb-6">
                        Awards & <span className="text-[--color-signal-red]">Recognition</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto font-medium">
                        Our commitment to quality, compliance, and service excellence has been recognised by leading industry bodies.
                    </p>
                </div>
            </section>

            {/* Awards List */}
            <section className="py-24">
                <div className="section-container max-w-5xl">
                    <div className="grid gap-12">
                        {awards.map((award, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-white border border-slate-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden flex flex-col md:flex-row"
                            >
                                {/* Image Section */}
                                <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={award.image}
                                        alt={award.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center relative bg-white">
                                    <div className={`absolute top-0 right-0 p-4 opacity-5 pointer-events-none`}>
                                        <award.icon className="w-48 h-48" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex flex-wrap items-center gap-3 mb-6">
                                            <span className={`px-4 py-1.5 ${award.bg} ${award.color} text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-2`}>
                                                <award.icon className="w-4 h-4" />
                                                {award.status}
                                            </span>
                                            {award.title.includes('2018') && (
                                                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                                                    2018
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold text-[--color-deep-navy] mb-3 leading-tight">
                                            {award.title}
                                        </h3>

                                        {award.subtitle && (
                                            <p className="text-lg text-[--color-signal-red] font-bold mb-4">
                                                {award.subtitle}
                                            </p>
                                        )}

                                        <p className="text-slate-600 text-lg leading-relaxed">
                                            {award.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            href="/get-a-quote"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[--color-signal-red] hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                        >
                            Work with an Award-Winning Team <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
