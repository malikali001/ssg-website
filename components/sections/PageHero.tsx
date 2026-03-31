'use client';

import Image from 'next/image';
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
        <section className="bg-white px-5 md:px-10 lg:px-16 pt-3 sm:pt-4 pb-6 sm:pb-8">
            <div className="relative max-w-[1280px] mx-auto h-[460px] sm:h-[520px] md:h-[610px] lg:h-[690px] rounded-xl sm:rounded-2xl overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={imageSrc}
                        alt={`${title} ${subtitle}`.trim()}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>

                {/* White Content Card — pinned left */}
                <div className="absolute top-6 bottom-6 sm:top-8 sm:bottom-8 left-4 sm:left-8 lg:left-12 z-10 w-[calc(100%-2rem)] sm:w-[460px] md:w-[520px] lg:w-[600px]">
                    <div className="relative h-full bg-white/[0.97] backdrop-blur-sm rounded-2xl sm:rounded-3xl flex flex-col justify-center p-5 sm:p-9 lg:p-12 shadow-xl">
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
                                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#C83232] text-white text-xs font-bold tracking-wide mb-5">
                                    {badge}
                                </span>

                                {/* Heading */}
                                <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-extrabold leading-[1.15] tracking-tight mb-1">
                                    {title}
                                </h1>
                                <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] text-[var(--accent-amber)] font-extrabold leading-[1.15] tracking-tight mb-4">
                                    {subtitle}
                                </h2>

                                {/* Description */}
                                <p className="text-[var(--text-main)] mb-4 sm:mb-5 text-[17px] sm:text-[20px] md:text-[22px] leading-relaxed font-medium">
                                    {description}
                                </p>

                                {/* Tagline */}
                                <p className="text-sm sm:text-base font-semibold text-[var(--signal-red)] italic tracking-wide mb-5 sm:mb-7">
                                    Focusing on What Matters
                                </p>

                                {/* CTA */}
                                {ctaLabel && ctaHref && (
                                    <Link
                                        href={ctaHref}
                                        className="inline-flex items-center gap-2 bg-[var(--section-dark)] text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-full font-bold text-sm sm:text-base hover:scale-110 transition-transform duration-300"
                                    >
                                        {ctaLabel}
                                    </Link>
                                )}
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
