'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
    {
        title: 'Security Systems',
        description: 'Advanced security systems safeguard properties with smart, reliable protection solutions.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
        href: '/services/security',
    },
    {
        title: 'Security Services',
        description: 'Comprehensive security services protect businesses, assets, and people effectively.',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
        href: '/services/facilities',
    },
    {
        title: 'Facilities Services',
        description: 'Professional facilities management keeping properties with smart, reliable protection solutions.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        href: '/portals/intelligence',
    },
];

export default function ServiceShowcase() {
    return (
        <section id="services" className="bg-white">
            <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.href}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Link
                                href={cat.href}
                                className="group block bg-white border border-gray-200/80 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
                            >
                                {/* Image */}
                                <div className="aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        width={800}
                                        height={500}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-[var(--deep-navy)] group-hover:text-[var(--signal-red)] transition-colors">
                                            {cat.title}
                                        </h3>
                                        <div className="w-8 h-8 rounded-full bg-[var(--section-dark)] flex items-center justify-center group-hover:bg-[var(--signal-red)] transition-colors flex-shrink-0">
                                            <ArrowUpRight className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                    <p className="text-[var(--text-main)] text-[15px] leading-relaxed">
                                        {cat.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
