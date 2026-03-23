'use client';

import Link from 'next/link';

interface PageHeroProps {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    ctaLabel?: string;
    ctaHref?: string;
    children?: React.ReactNode;
}

export default function PageHero({
    badge,
    title,
    subtitle,
    description,
    imageSrc,
    ctaLabel,
    ctaHref,
}: PageHeroProps) {
    return (
        <section className="bg-white px-4 sm:px-6 lg:px-8 pt-4 pb-8">
            <div className="relative max-w-[1400px] mx-auto h-[400px] md:h-[460px] lg:h-[500px] rounded-2xl overflow-hidden">
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
                    <div className="relative w-[320px] sm:w-[400px] md:w-[450px] lg:w-[500px]">
                        <div className="bg-white/[0.97] backdrop-blur-sm rounded-2xl p-7 sm:p-9 lg:p-11 shadow-xl">
                            {/* Dotted pattern */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                                <div className="absolute inset-0 opacity-[0.04]" style={{
                                    backgroundImage: 'radial-gradient(circle, #0C1E33 1px, transparent 1px)',
                                    backgroundSize: '16px 16px',
                                }} />
                            </div>

                            <div className="relative z-10">
                                {/* Badge */}
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C83232] text-white text-xs font-bold tracking-wide mb-5">
                                    {badge}
                                </span>

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

                                {/* CTA */}
                                {ctaLabel && ctaHref && (
                                    <Link
                                        href={ctaHref}
                                        className="inline-flex items-center gap-2 bg-[var(--section-dark)] text-white px-6 py-3 rounded-full font-semibold text-sm hover:scale-110 transition-transform duration-300"
                                    >
                                        {ctaLabel}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
