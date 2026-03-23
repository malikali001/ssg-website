'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const items = [
    {
        title: 'Highly Vetted And Trained Personnel',
        description:
            'Every SSG officer undergoes rigorous vetting, SIA licensing, and continuous training. Our professionals combine discipline with expertise, ensuring clients receive reliable, trustworthy, and highly skilled protection at all times.',
    },
    {
        title: '24/7 Rapid Response And Support',
        description:
            'Our dedicated teams are on standby around the clock, ready to respond within minutes. With clear escalation protocols and direct coordination with authorities, SSG ensures immediate action and client reassurance.',
    },
    {
        title: 'Data-Driven Security For Complete Peace',
        description:
            'Leveraging advanced analytics, real-time monitoring, and incident reporting, we deliver measurable security outcomes. SSG transforms raw data into actionable insights, ensuring safer environments and long-term peace of mind.',
    },
];

export default function ValuePropositions() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="bg-[#F7F7F7] rounded-2xl border border-gray-200/80 p-8 md:p-12 lg:p-14">
                    {/* Centered Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl lg:text-[2.1rem] font-montserrat font-bold text-[var(--deep-navy)] mb-3">
                            We secure what you value
                        </h2>
                        <p className="text-[var(--text-muted)] text-sm md:text-base max-w-xl mx-auto">
                            We provide security solutions to protect what matters most to you.
                        </p>
                    </motion.div>

                    {/* Image + Accordion Layout */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="aspect-[4/3] rounded-xl overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                                    alt="Security operations"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Accordion Items */}
                        <motion.div
                            initial={{ opacity: 0, x: 15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-col justify-center"
                        >
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`border-t border-gray-300 ${index === items.length - 1 ? 'border-b' : ''}`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                        className="w-full text-left py-5 flex items-start justify-between gap-4"
                                    >
                                        <h3 className={`text-base md:text-lg font-montserrat font-semibold transition-colors ${openIndex === index ? 'text-[var(--deep-navy)]' : 'text-[var(--text-muted)]'}`}>
                                            {item.title}
                                        </h3>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 pb-5' : 'max-h-0'}`}
                                    >
                                        <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
