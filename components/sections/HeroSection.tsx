'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 w-full h-full z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-gunmetal to-obsidian animate-gradient-shift" />
                <div className="absolute inset-0 grid-bg opacity-30" />
            </div>

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/60 to-obsidian/80 z-[1]" />

            {/* Content */}
            <div className="relative z-10 section-container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-black mb-6 text-balance">
                        Precision Protection.
                        <br />
                        <span className="text-signal-red">Integrated Intelligence.</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-12"
                >
                    SSG UK Ltd provides elite, technology-driven security and facilities management across the UK.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/quote" className="btn-primary text-lg px-8 py-4">
                        Request a Quote
                    </Link>
                    <Link href="/services" className="btn-secondary text-lg px-8 py-4">
                        Our Services
                    </Link>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-text-muted/30 rounded-full flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-signal-red rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
