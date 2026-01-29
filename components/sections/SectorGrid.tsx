'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, ShoppingCart, Briefcase, Heart, GraduationCap, Hotel } from 'lucide-react';

export default function SectorGrid() {
    const sectors = [
        { name: 'Construction', icon: Building2, href: '/sectors/construction', color: 'from-yellow-500/20' },
        { name: 'Retail', icon: ShoppingCart, href: '/sectors/retail', color: 'from-blue-500/20' },
        { name: 'Corporate', icon: Briefcase, href: '/sectors/corporate', color: 'from-purple-500/20' },
        { name: 'Healthcare', icon: Heart, href: '/sectors/healthcare', color: 'from-red-500/20' },
        { name: 'Education', icon: GraduationCap, href: '/sectors/education', color: 'from-green-500/20' },
        { name: 'Hospitality', icon: Hotel, href: '/sectors/hospitality', color: 'from-pink-500/20' },
    ];

    return (
        <section className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-4">
                    Sectors We <span className="text-signal-red">Protect</span>
                </h2>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                    Tailored security and facilities management solutions for every industry
                </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {sectors.map((sector, index) => {
                    const Icon = sector.icon;
                    return (
                        <motion.div
                            key={sector.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={sector.href}
                                className="group block bg-gunmetal rounded-lg p-8 text-center hover:bg-gradient-to-br hover:from-gunmetal hover:to-obsidian border-2 border-transparent hover:border-signal-red transition-all duration-300"
                            >
                                <Icon className="w-16 h-16 text-text-muted group-hover:text-signal-red mx-auto mb-4 group-hover:scale-110 transition-all duration-300" />
                                <h3 className="text-xl font-montserrat font-bold text-text-main group-hover:text-signal-red transition-colors duration-300">
                                    {sector.name}
                                </h3>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
