'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Truck, Building2, GraduationCap, Heart } from 'lucide-react';

export default function IndustriesGrid() {
    const industries = [
        {
            name: 'Logistics & Distribution',
            description: 'Gatehouse and yard management.',
            icon: Truck,
            href: '/sectors/logistics'
        },
        {
            name: 'Public Sector & Healthcare',
            description: 'Compliance and sensitive guarding.',
            icon: Heart,
            href: '/sectors/public-sector'
        },
        {
            name: 'Soft Services',
            description: 'Professional cleaning and FM.',
            icon: GraduationCap,
            href: '/services/soft-services'
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industries.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                        >
                            <Link href={item.href} className="block group h-full">
                                <div className="bg-white rounded-2xl p-10 shadow-sm border border-slate-100 group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:border-blue-200 transition-all duration-500 h-full flex flex-col items-center text-center">
                                    <motion.div
                                        className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300"
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                    >
                                        <item.icon className="w-8 h-8 text-deep-navy group-hover:text-blue-600 transition-colors duration-300" strokeWidth={1.5} />
                                    </motion.div>

                                    <h3 className="text-xl font-montserrat font-bold text-deep-navy mb-3 group-hover:text-blue-600 transition-colors">
                                        {item.name}
                                    </h3>

                                    <p className="text-slate-500 font-medium leading-relaxed">
                                        {item.description}
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
