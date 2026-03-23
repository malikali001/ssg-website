'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    description: string;
    imageSrc?: string;
    breadcrumbs?: { label: string; href?: string }[];
}

export default function ServiceHero({
    title,
    subtitle,
    description,
    imageSrc = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80',
    breadcrumbs = [],
}: ServiceHeroProps) {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 pt-4 pb-8">
            <div className="relative max-w-[1400px] mx-auto h-[420px] md:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={imageSrc}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* White Content Card — pinned left */}
                <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-6 sm:pl-10 lg:pl-14 py-8">
                    <div className="relative w-[320px] sm:w-[400px] md:w-[460px] lg:w-[520px]">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/[0.97] backdrop-blur-sm rounded-2xl p-7 sm:p-9 lg:p-11 shadow-xl"
                        >
                            {/* Dotted pattern */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                                <div className="absolute inset-0 opacity-[0.04]" style={{
                                    backgroundImage: 'radial-gradient(circle, #0C1E33 1px, transparent 1px)',
                                    backgroundSize: '16px 16px',
                                }} />
                            </div>

                            <div className="relative z-10">
                                {/* Breadcrumbs */}
                                {breadcrumbs.length > 0 && (
                                    <div className="mb-4">
                                        <Breadcrumbs items={breadcrumbs} dark={false} />
                                    </div>
                                )}

                                {/* Heading */}
                                <h1 className="font-semibold leading-[1.2] mb-1">
                                    {title}
                                </h1>
                                <h2 className="text-[var(--accent-amber)] font-semibold leading-[1.2] mb-4">
                                    {subtitle}
                                </h2>

                                {/* Description */}
                                <p className="text-[var(--text-main)] mb-7">
                                    {description}
                                </p>

                                {/* CTAs */}
                                <div className="flex flex-wrap gap-3">
                                    <Link
                                        href="/get-a-quote"
                                        className="inline-flex items-center gap-2 bg-[var(--section-dark)] text-white px-6 py-3 rounded-full font-semibold text-sm hover:scale-110 transition-transform duration-300"
                                    >
                                        Request a Quote
                                    </Link>
                                    <Link
                                        href="/contact-us"
                                        className="inline-flex items-center gap-2 border border-gray-300 text-[var(--deep-navy)] px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-110 transition-transform duration-300"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
