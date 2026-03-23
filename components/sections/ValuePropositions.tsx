'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
    {
        title: 'Highly Vetted And Trained Personnel',
        description:
            'Every SSG officer undergoes rigorous vetting, SIA licensing, and continuous training. Our professionals combine discipline with expertise, ensuring clients receive reliable, trustworthy, and highly skilled protection at all times.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        alt: 'Security personnel training and vetting',
    },
    {
        title: '24/7 Rapid Response And Support',
        description:
            'Our dedicated teams are on standby around the clock, ready to respond within minutes. With clear escalation protocols and direct coordination with authorities, SSG ensures immediate action and client reassurance.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
        alt: 'Security team rapid response operations',
    },
    {
        title: 'Data-Driven Security For Complete Peace',
        description:
            'Leveraging advanced analytics, real-time monitoring, and incident reporting, we deliver measurable security outcomes. SSG transforms raw data into actionable insights, ensuring safer environments and long-term peace of mind.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
        alt: 'Data analytics and security monitoring',
    },
];

export default function ValuePropositions() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
                <div className="bg-[#F7F7F7] rounded-xl sm:rounded-2xl border border-gray-200/80 p-5 sm:p-8 md:p-12 lg:p-14">
                    {/* Centered Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-center mb-8 sm:mb-10"
                    >
                        <h2 className="mb-3">
                            We secure what you value
                        </h2>
                        <p className="text-[var(--text-main)] max-w-xl mx-auto">
                            We provide security solutions to protect what matters most to you.
                        </p>
                    </motion.div>

                    {/* Image + Items Layout */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="h-full"
                        >
                            <div className="rounded-xl overflow-hidden h-full min-h-[250px] sm:min-h-[350px] lg:min-h-[400px] relative">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={activeIndex}
                                        src={items[activeIndex].image}
                                        alt={items[activeIndex].alt}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full h-full object-cover absolute inset-0"
                                    />
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        {/* Items */}
                        <motion.div
                            initial={{ opacity: 0, x: 15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-col justify-center space-y-2"
                        >
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onClick={() => setActiveIndex(index)}
                                    className={`cursor-pointer border-l-[3px] transition-all duration-300 pl-4 sm:pl-6 py-4 sm:py-5 ${
                                        activeIndex === index
                                            ? 'border-l-[var(--deep-navy)]'
                                            : 'border-l-gray-300'
                                    }`}
                                >
                                    <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                                        activeIndex === index
                                            ? 'text-[var(--deep-navy)]'
                                            : 'text-[var(--text-muted)]'
                                    }`}>
                                        {item.title}
                                    </h3>
                                    <p className={`mt-3 text-sm md:text-base leading-relaxed transition-colors duration-300 ${
                                        activeIndex === index
                                            ? 'text-[var(--text-main)]'
                                            : 'text-[var(--text-muted)]'
                                    }`}>
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
