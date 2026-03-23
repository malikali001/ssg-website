'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const insights = [
    {
        title: 'Monitored vs Unmonitored Alarm...',
        category: 'Industry News',
        date: '21 Jan, 2026',
        author: 'Admin',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80',
        href: '/case-studies',
        excerpt: 'Recent UK crime data sho...',
    },
    {
        title: 'Top 7 Workforce Management Sys...',
        category: 'Industry News',
        date: '01 Jan, 2026',
        author: 'Admin',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80',
        href: '/case-studies',
        excerpt: 'A workforce management s...',
    },
    {
        title: 'See Threats Before They Happen...',
        category: 'Industry News',
        date: '23 Dec, 2025',
        author: 'Admin',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80',
        href: '/case-studies',
        excerpt: 'They also work faster th...',
    },
    {
        title: 'Mobile Security Patrols Tailor...',
        category: 'Industry News',
        date: '19 Dec, 2025',
        author: 'Admin',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&q=80',
        href: '/case-studies',
        excerpt: 'This means no matter wha...',
    },
];

export default function InsightsCarousel() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
                {/* Centered Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-10"
                >
                    <h2 className="mb-3">
                        SSG insights & expert blogs
                    </h2>
                    <p className="text-[var(--text-main)] mb-6">
                        Learn more about our people, innovation and ESG actions.
                    </p>
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 bg-[var(--section-dark)] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:scale-110 transition-transform duration-300"
                    >
                        View all Blogs & Posts
                    </Link>
                </motion.div>

                {/* 2x2 Grid of horizontal blog cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    {insights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            <Link
                                href={item.href}
                                className="group flex gap-4 items-start"
                            >
                                {/* Thumbnail */}
                                <div className="w-28 h-24 md:w-36 md:h-28 rounded-xl overflow-hidden flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <span className="text-xs font-semibold text-[#C83232] uppercase tracking-wide">
                                        {item.category}
                                    </span>
                                    <h3 className="font-bold text-[var(--deep-navy)] text-[15px] mt-1 mb-1 group-hover:text-[var(--signal-red)] transition-colors leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-[var(--text-muted)] text-xs leading-relaxed mb-2">
                                        {item.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                                        <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-[8px] font-bold text-gray-500">A</span>
                                        </div>
                                        <span>{item.author}</span>
                                        <span className="text-gray-300">|</span>
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
