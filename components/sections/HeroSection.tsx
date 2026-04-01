'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
    '/images/Gemini_Generated_Image_lfoqt6lfoqt6lfoq.png',
    '/images/Gemini_Generated_Image_8mmsg78mmsg78mms.png',
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % heroImages.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="bg-white px-5 md:px-10 lg:px-16 pt-3 sm:pt-4 pb-6 sm:pb-8">
            <div className="relative max-w-[1280px] mx-auto h-[460px] sm:h-[520px] md:h-[610px] lg:h-[690px] rounded-xl sm:rounded-2xl overflow-hidden">
                {/* Sliding Background Images */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 z-0"
                    >
                        <Image
                            src={heroImages[current]}
                            alt="SSG security and facilities services"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Fixed Content Card */}
                <div className="absolute top-6 bottom-6 sm:top-8 sm:bottom-8 left-4 sm:left-8 lg:left-12 z-10 w-[calc(100%-2rem)] sm:w-[460px] md:w-[520px] lg:w-[600px]">
                    <div className="relative h-full bg-white/[0.97] backdrop-blur-sm rounded-2xl sm:rounded-3xl flex flex-col justify-center p-5 sm:p-9 lg:p-12">
                        {/* Dotted pattern */}
                        <div className="absolute left-0 bottom-0 w-full h-1/2 rounded-2xl sm:rounded-3xl overflow-hidden pointer-events-none">
                            <Image
                                src="/dotted-image.webp"
                                alt=""
                                fill
                                className="object-cover object-center scale-[3]"
                            />
                        </div>

                        <div className="relative z-10">
                            {/* Badge */}
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
                                <span className="inline-flex items-center px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-[#C83232] text-white text-xs sm:text-sm font-bold tracking-wide">
                                    SSG Security Services
                                </span>
                                <Link href="/services" className="hidden sm:inline-flex items-center gap-1 text-[15px] font-semibold text-[var(--text-muted)] hover:text-[var(--signal-red)] transition-colors">
                                    Find your solution <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Heading */}
                            <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold leading-[1.15] mb-5 sm:mb-6 tracking-tight">
                                {"UK's trusted"}<br />security partner
                            </h1>

                            {/* Description */}
                            <p className="text-[var(--text-main)] mb-4 sm:mb-5 text-[17px] sm:text-[20px] md:text-[22px] leading-relaxed font-medium">
                                We&apos;re on a mission to protect people, property, and peace of mind — because everyone deserves to feel safe, secure, and supported wherever they live, work, or visit.
                            </p>

                            {/* Tagline */}
                            <p className="text-sm sm:text-base font-semibold text-[var(--signal-red)] italic tracking-wide mb-5 sm:mb-7">
                                Focusing on What Matters
                            </p>

                            {/* CTA + Arrows */}
                            <div className="flex items-center justify-between gap-3">
                                <Link
                                    href="/contact-us"
                                    className="inline-flex items-center gap-2 bg-[var(--section-dark)] text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:scale-110 transition-transform duration-300"
                                >
                                    Get in Touch to Learn
                                </Link>

                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={prev}
                                        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--signal-red)] hover:text-[var(--signal-red)] transition-colors"
                                        aria-label="Previous slide"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={next}
                                        className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--signal-red)] hover:text-[var(--signal-red)] transition-colors"
                                        aria-label="Next slide"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide Indicator Dots */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                    {heroImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-7 bg-[#C83232]' : 'w-2 bg-white/60 hover:bg-white'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
