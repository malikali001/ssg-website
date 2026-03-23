'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
    {
        heading: "UK's trusted\nsecurity partner",
        description:
            "We're on a mission to protect people, property, and peace of mind — because everyone deserves to feel safe, secure, and supported wherever they live, work, or visit.",
        cta: { label: 'Get in Touch to Learn', href: '/contact-us' },
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80',
    },
    {
        heading: 'Expert security\nnationwide',
        description:
            'SIA-approved manned guarding, mobile patrols, K9 units, and concierge services — delivering round-the-clock protection you can trust.',
        cta: { label: 'Explore Security Services', href: '/services/security/manned-guarding' },
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80',
    },
    {
        heading: 'Facilities that\ndeliver results',
        description:
            'From commercial cleaning to property maintenance, we keep your facilities running smoothly so you can focus on what matters most.',
        cta: { label: 'Explore Facilities Services', href: '/services/facilities/commercial-cleaning' },
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);

    const goTo = useCallback(
        (index: number) => {
            setCurrent(index);
        },
        [],
    );

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    }, []);

    // Auto-advance every 6 seconds
    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    const slide = heroSlides[current];

    return (
        <section className="bg-white px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-6 sm:pb-8">
            {/* Rounded image container with side margins */}
            <div className="relative max-w-[1400px] mx-auto h-[420px] sm:h-[500px] md:h-[580px] lg:h-[660px] rounded-xl sm:rounded-2xl overflow-hidden">
                {/* Background Image */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 z-0"
                    >
                        <img
                            src={slide.image}
                            alt="SSG security and facilities services"
                            role="presentation"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* White Content Card — pinned to the left side */}
                <div className="absolute inset-y-0 left-0 right-0 sm:right-auto z-10 flex items-center px-4 sm:pl-10 sm:pr-0 lg:pl-14 py-6 sm:py-8">
                    <div className="relative w-full sm:w-[420px] md:w-[480px] lg:w-[540px]">
                        <div className="bg-white/[0.97] backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-9 lg:p-11 shadow-xl">
                            {/* Dotted pattern inside card */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                                <div className="absolute inset-0 opacity-[0.04]" style={{
                                    backgroundImage: 'radial-gradient(circle, #0C1E33 1px, transparent 1px)',
                                    backgroundSize: '16px 16px',
                                }} />
                            </div>

                            <div className="relative z-10">
                                {/* Badge */}
                                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                                    <span className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#C83232] text-white text-[10px] sm:text-xs font-bold tracking-wide">
                                        SSG Security Services
                                    </span>
                                    <Link href="/services" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[var(--text-muted)] hover:text-[var(--signal-red)] transition-colors">
                                        Find your solution <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                {/* Heading */}
                                <AnimatePresence mode="wait">
                                    <motion.h1
                                        key={`heading-${current}`}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.35 }}
                                        className="font-semibold leading-[1.2] mb-4 whitespace-pre-line"
                                    >
                                        {slide.heading}
                                    </motion.h1>
                                </AnimatePresence>

                                {/* Description */}
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={`desc-${current}`}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.35, delay: 0.08 }}
                                        className="text-[var(--text-main)] mb-5 sm:mb-7 text-sm sm:text-base"
                                    >
                                        {slide.description}
                                    </motion.p>
                                </AnimatePresence>

                                {/* CTA + Arrows Row */}
                                <div className="flex items-center justify-between gap-3">
                                    <Link
                                        href={slide.cta.href}
                                        className="inline-flex items-center gap-2 bg-[var(--section-dark)] text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:scale-110 transition-transform duration-300"
                                    >
                                        {slide.cta.label}
                                    </Link>

                                    {/* Slider Navigation */}
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
                </div>

                {/* Slide Indicator Dots */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                    {heroSlides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-7 bg-[#C83232]' : 'w-2 bg-white/60 hover:bg-white'}`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
