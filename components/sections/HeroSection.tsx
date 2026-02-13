'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5;
        }
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 w-full h-full z-0 bg-black">
                {/* Hero Video */}
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 section-container text-center pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-black mb-6 text-balance text-white leading-tight">
                        Smarter Security.
                        <br />
                        <span className="text-white">Seamless Facilities.</span>
                        <br />
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="text-signal-red inline-block mt-2"
                        >
                            Total Support.
                        </motion.span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 font-medium"
                >
                    Integrating elite personnel with real-time intelligence to protect your assets and elevate your environment across the UK.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link href="#sectors" className="btn-primary text-lg px-8 py-4 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300">
                        Explore Our Solutions
                    </Link>
                    <button
                        onClick={() => window.open('https://www.youtube.com/watch?v=Z4F3AXvrLKo', '_blank')}
                        className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-deep-navy flex items-center gap-3 group"
                    >
                        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-deep-navy/10 group-hover:text-deep-navy transition-colors">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </span>
                        Watch Our Story
                    </button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={() => {
                        const nextSection = document.getElementById('trust-bar');
                        if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
                        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1.5 h-1.5 bg-electric-blue rounded-full"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
