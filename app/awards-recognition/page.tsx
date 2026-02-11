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
            desc: "Recognising exceptional performance and promise in the security sector. This prestigious award highlights the dedication and innovative approach of young professionals who are shaping the future of the industry.",
            icon: Star,
            color: "text-amber-500",
            bg: "bg-amber-50",
            images: ["https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800"]
        },
        {
            title: "ACS Champion of the Year",
            subtitle: "Security Officer Distinction",
            status: "Finalist",
            desc: "Acknowledging commitment to the Approved Contractor Scheme standards. This recognition serves as a testament to our team's unwavering adherence to industry best practices and operational excellence.",
            icon: Trophy,
            color: "text-[--color-signal-red]",
            bg: "bg-red-50",
            images: [
                "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=800",
                "https://images.unsplash.com/photo-1560250097-9b93dbd96328?auto=format&fit=crop&q=80&w=800"
            ]
        },
        {
            title: "ACS Pacesetters Award 2018",
            subtitle: "Top 15% Benchmarking",
            status: "Winner",
            desc: "Awarded to security companies in the top 15% of the SIA benchmarking. Being part of this elite group demonstrates our consistent delivery of high-quality security services across all sectors.",
            icon: Award,
            color: "text-blue-600",
            bg: "bg-blue-50",
            images: []
        },
        {
            title: "ACS Pacesetters Security Officer Distinction Award 2018",
            subtitle: "Individual Excellence",
            status: "Winner",
            desc: "Celebrating individual excellence and outstanding service delivery. This award honours the security officers who go above and beyond their duty to ensure the safety and security of our clients.",
            icon: Medal,
            color: "text-purple-600",
            bg: "bg-purple-50",
            images: ["https://images.unsplash.com/photo-1546519638-68e109498ee2?auto=format&fit=crop&q=80&w=800"]
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[--color-deep-navy] py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[--color-signal-red]/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

                <div className="section-container relative z-10 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-bold text-sm tracking-wide mb-6 backdrop-blur-sm"
                    >
                        <Trophy className="w-4 h-4 text-amber-400" /> Excellence in Security
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-montserrat font-black mb-6"
                    >
                        Awards & <span className="text-[--color-signal-red]">Recognition</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto font-medium"
                    >
                        Our commitment to quality, compliance, and service excellence has been recognised by leading industry bodies.
                    </motion.p>
                </div>
            </section>

            {/* Awards List */}
            <section className="py-24 bg-slate-50">
                <div className="section-container max-w-6xl">
                    <div className="flex flex-col gap-20">
                        {awards.map((award, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`group relative bg-white border border-slate-100 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Image Section */}
                                <div className="md:w-1/2 relative min-h-[400px] overflow-hidden bg-slate-100">
                                    {award.images.length === 0 ? (
                                        // 0 Images: Decorative Pattern
                                        <div className={`w-full h-full ${award.bg} relative flex items-center justify-center overflow-hidden`}>
                                            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.02)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.02)_50%,rgba(0,0,0,0.02)_75%,transparent_75%,transparent)] bg-[length:24px_24px]" />
                                            <award.icon className={`w-64 h-64 ${award.color} opacity-10 absolute -right-12 -bottom-12 rotate-[-12deg]`} />
                                            <div className="relative z-10 text-center p-8">
                                                <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 rotate-3 group-hover:rotate-6 transition-transform duration-500">
                                                    <award.icon className={`w-12 h-12 ${award.color}`} />
                                                </div>
                                                <span className={`inline-block px-4 py-1.5 ${award.bg} ${award.color} text-sm font-bold rounded-full uppercase tracking-wider border border-current/20`}>
                                                    {award.status}
                                                </span>
                                            </div>
                                        </div>
                                    ) : award.images.length === 1 ? (
                                        // 1 Image: Full Cover
                                        <>
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-20" />
                                            <img
                                                src={award.images[0]}
                                                alt={award.title}
                                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                                            />
                                        </>
                                    ) : (
                                        // 2 Images: Split Grid
                                        <div className="w-full h-full grid grid-cols-2 gap-1 bg-white">
                                            <div className="relative overflow-hidden h-full group/img1">
                                                <div className="absolute inset-0 bg-gradient-to-t from-[--color-deep-navy]/40 to-transparent z-10" />
                                                <img
                                                    src={award.images[0]}
                                                    alt={`${award.title} View 1`}
                                                    className="w-full h-full object-cover transform scale-100 group-hover/img1:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                            <div className="relative overflow-hidden h-full group/img2">
                                                <div className="absolute inset-0 bg-gradient-to-t from-[--color-deep-navy]/40 to-transparent z-10" />
                                                <img
                                                    src={award.images[1]}
                                                    alt={`${award.title} View 2`}
                                                    className="w-full h-full object-cover transform scale-100 group-hover/img2:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:p-14 md:w-1/2 flex flex-col justify-center relative">

                                    {/* Background Icon Watermark */}
                                    <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                        <award.icon className="w-64 h-64" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex flex-wrap items-center gap-3 mb-6">
                                            <span className={`px-4 py-1.5 ${award.bg} ${award.color} text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-2 border border-current/10`}>
                                                <award.icon className="w-4 h-4" />
                                                {award.status}
                                            </span>
                                            {award.title.includes('2018') && (
                                                <span className="px-4 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-full border border-slate-200">
                                                    2018
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-[--color-deep-navy] mb-3 leading-tight">
                                            {award.title}
                                        </h3>

                                        {award.subtitle && (
                                            <p className="text-lg text-[--color-signal-red] font-bold mb-6 flex items-center gap-2">
                                                <span className="h-0.5 w-8 bg-[--color-signal-red] inline-block" />
                                                {award.subtitle}
                                            </p>
                                        )}

                                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                            {award.desc}
                                        </p>

                                        <div className="flex items-center gap-4">
                                            <button className="text-[--color-deep-navy] font-bold text-sm tracking-wide uppercase border-b-2 border-transparent hover:border-[--color-signal-red] transition-all pb-0.5">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href="/get-a-quote"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-[--color-signal-red] hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Work with an Award-Winning Team <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
