'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
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
        <section className="bg-white px-5 md:px-10 lg:px-16 pt-3 sm:pt-4 pb-6 sm:pb-8">
            {/* Rounded image container with side margins */}
            <div className="relative max-w-[1280px] mx-auto h-[460px] sm:h-[520px] md:h-[610px] lg:h-[690px] rounded-xl sm:rounded-2xl overflow-hidden">
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
                        <Image
                            src={slide.image}
                            alt="SSG security and facilities services"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* White Content Card — tall, flush left, rounded right */}
                <div className="absolute top-6 bottom-6 sm:top-8 sm:bottom-8 left-4 sm:left-8 lg:left-12 z-10 w-[calc(100%-2rem)] sm:w-[460px] md:w-[520px] lg:w-[600px]">
                    <div className="relative h-full bg-white/[0.97] backdrop-blur-sm rounded-2xl sm:rounded-3xl flex flex-col justify-center p-5 sm:p-9 lg:p-12">
                        {/* Dotted pattern inside card */}
                        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden pointer-events-none">
                            <div className="absolute inset-0 opacity-[0.04]" style={{
                                backgroundImage: 'radial-gradient(circle, #0C1E33 1px, transparent 1px)',
                                backgroundSize: '16px 16px',
                            }} />
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
                            <AnimatePresence mode="wait">
                                <motion.h1
                                    key={`heading-${current}`}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.35 }}
                                    className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold leading-[1.15] mb-5 sm:mb-6 whitespace-pre-line tracking-tight"
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
                                    className="text-[var(--text-main)] mb-6 sm:mb-8 text-[17px] sm:text-[20px] md:text-[22px] leading-relaxed font-medium"
                                >
                                    {slide.description}
                                </motion.p>
                            </AnimatePresence>

                            {/* CTA + Arrows Row */}
                            <div className="flex items-center justify-between gap-3">
                                <Link
                                    href={slide.cta.href}
                                    className="inline-flex items-center gap-2 bg-[var(--section-dark)] text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:scale-110 transition-transform duration-300"
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
