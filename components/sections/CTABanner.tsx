'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTABanner() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="bg-[var(--section-dark)] rounded-2xl px-8 py-14 md:px-16 md:py-20 text-center"
                >
                    <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-montserrat font-bold text-white mb-4">
                        Ready to secure what matters?
                    </h2>
                    <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
                        We&apos;re ready to deliver the best experiences, productivity, practices, resilience and outcomes and we look forward to connecting with you and your team.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 bg-white text-[var(--deep-navy)] px-7 py-3 rounded-full font-semibold text-sm hover:scale-110 transition-transform duration-300"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
