'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Building2, ShoppingCart, Briefcase, Heart, GraduationCap, Hotel } from 'lucide-react';

export default function SectorGrid() {
    const sectors = [
        { name: 'Corporate & Office', icon: Briefcase, href: '/sectors/corporate', description: 'Professional, suit-and-tie security.', color: 'from-blue-900/40' },
        { name: 'Retail & Leisure', icon: ShoppingCart, href: '/sectors/retail', description: 'Loss prevention and public safety.', color: 'from-blue-800/40' },
        { name: 'Construction & Infrastructure', icon: Building2, href: '/sectors/construction', description: 'CCTV, perimeter, and logistics.', color: 'from-blue-700/40' },
        { name: 'Logistics & Distribution', icon: Hotel, href: '/sectors/logistics', description: 'Gatehouse and yard management.', color: 'from-blue-600/40' },
        { name: 'Public Sector & Healthcare', icon: Heart, href: '/sectors/public', description: 'Compliance and sensitive guarding.', color: 'from-blue-500/40' },
        { name: 'Soft Services', icon: GraduationCap, href: '/sectors/cleaning', description: 'Professional cleaning and FM.', color: 'from-blue-400/40' },
    ];

    return (
        <section id="sectors" className="section-container bg-slate-50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-4 text-deep-navy">
                    Tailored by <span className="text-signal-red">Sector</span>
                </h2>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                    Security is not one-size-fits-all. We understand the unique challenges of your industry.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                className="group relative block h-full bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-signal-red/30 transition-all duration-300"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                <div className="relative p-8 flex flex-col items-center text-center h-full">
                                    <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-sm">
                                        <Icon className="w-8 h-8 text-deep-navy group-hover:text-signal-red transition-colors duration-300" />
                                    </div>

                                    <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-3">
                                        {sector.name}
                                    </h3>

                                    <p className="text-gray-500 text-sm group-hover:text-deep-navy/80 transition-colors">
                                        {sector.description}
                                    </p>

                                    <div className="mt-6 text-signal-red font-semibold text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                                        View Solutions <span className="text-lg">→</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
