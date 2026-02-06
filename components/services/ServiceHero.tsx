'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    description: string;
    imageSrc?: string;
}

export default function ServiceHero({
    title = "Elite Manned Guarding.",
    subtitle = "Intelligent Protection.",
    description = "Deploying highly trained security specialists integrated with real-time intelligence for complete peace of mind.",
    imageSrc = "/images/guard-hero.jpg" // Placeholder
}: ServiceHeroProps) {
    return (
        <section className="relative min-h-[90vh] bg-white flex items-center overflow-hidden">
            <div className="flex flex-col lg:flex-row w-full h-full">

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-20 z-10 bg-white">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <h1 className="text-5xl lg:text-7xl font-montserrat font-black text-slate-900 leading-tight mb-6">
                            {title}
                            <br />
                            <span className="text-signal-red">{subtitle}</span>
                        </h1>
                        <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                            {description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#audit"
                                className="bg-signal-red hover:bg-red-600 text-white font-bold py-4 px-8 rounded shadow-lg shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Request Site Audit
                            </Link>
                            <Link
                                href="#capabilities"
                                className="border-2 border-slate-200 hover:border-signal-red text-slate-900 hover:text-signal-red font-bold py-4 px-8 rounded transition-all duration-300"
                            >
                                View Capabilities
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen bg-slate-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent z-10 lg:w-32" />
                    {/* Placeholder for actual image */}
                    <img
                        src={imageSrc}
                        alt="Security Professional"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
