'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const sectors = [
    {
        name: 'Corporate & Office',
        href: '/sectors/corporate',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    },
    {
        name: 'Retail Security',
        href: '/sectors/retail',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
    },
    {
        name: 'Construction',
        href: '/sectors/construction',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    },
    {
        name: 'Logistics & Distribution',
        href: '/sectors/logistics',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    },
    {
        name: 'Healthcare',
        href: '/sectors/healthcare',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    },
    {
        name: 'Education',
        href: '/sectors/education',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80',
    },
];

export default function SectorGrid() {
    return (
        <section id="sectors" className="section-container bg-[var(--section-light)]">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-center mb-12"
            >
                <h2 className="font-bold mb-4">
                    Tailored Protection for Every Sector
                </h2>
                <p className="text-[var(--text-main)] max-w-2xl mx-auto">
                    Our solutions address industry-specific challenges with specialist expertise.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {sectors.map((sector, index) => (
                    <motion.div
                        key={sector.href}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                    >
                        <Link
                            href={sector.href}
                            className="group relative block aspect-[4/3] rounded-lg overflow-hidden"
                        >
                            {/* Background Image */}
                            <img
                                src={sector.image}
                                alt={sector.name}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                                <h3 className="text-white font-bold text-lg">
                                    {sector.name}
                                </h3>
                                <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-[var(--accent-amber)] group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
