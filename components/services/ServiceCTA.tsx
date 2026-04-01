'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function ServiceCTA() {
    return (
        <section className="relative bg-[var(--section-dark)] overflow-hidden">
            <div className="absolute inset-0 dotted-bg opacity-30" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center py-12 sm:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-white mb-4">
                        Connect with Your SSG Team
                    </h2>
                    <p className="text-white/60 mb-10 max-w-2xl mx-auto text-base sm:text-lg">
                        Ready to discuss your security and facilities requirements? Our experienced team is here to help design the right solution for you.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/get-a-quote"
                            className="btn-primary px-8 py-3.5 text-base"
                        >
                            Request a Quote
                        </Link>
                        <a
                            href="tel:02085910330"
                            className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-semibold text-base hover:scale-110 transition-transform duration-300"
                        >
                            <Phone className="w-4 h-4" />
                            0208 591 0330
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
