'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CTABanner() {
    return (
        <section className="bg-white px-5 md:px-10 lg:px-16">
            <div className="max-w-[1280px] mx-auto py-10 sm:py-16 lg:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="relative overflow-hidden bg-[var(--section-dark)] rounded-[24px] px-6 py-10 sm:px-8 sm:py-14 md:px-16 md:py-20 text-center"
                >
                    <Image
                        src="/dot-image.webp"
                        alt=""
                        fill
                        className="object-cover object-top scale-[1.8] -translate-x-[20%] -translate-y-[15%]"
                    />
                    <div className="relative z-10">
                    <h2 className="text-white mb-4">
                        Ready to secure what matters?
                    </h2>
                    <p className="text-white/70 max-w-xl mx-auto mb-8 text-base sm:text-lg">
                        We&apos;re ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 bg-white text-[var(--deep-navy)] px-7 py-3 rounded-full font-bold text-base hover:scale-110 transition-transform duration-300"
                    >
                        Contact Us
                    </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
