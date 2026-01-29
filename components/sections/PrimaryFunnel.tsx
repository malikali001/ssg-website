'use client';

import Link from 'next/link';
import { Shield, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrimaryFunnel() {
    const services = [
        {
            title: 'Security Solutions',
            description: 'Elite protection services powered by cutting-edge technology',
            href: '/services/security',
            icon: Shield,
            gradient: 'from-signal-red/20 to-transparent',
        },
        {
            title: 'Facilities Management',
            description: 'Comprehensive FM solutions with sustainability at the core',
            href: '/services/facilities',
            icon: Building2,
            gradient: 'from-signal-red/20 to-transparent',
        },
    ];

    return (
        <section className="section-container">
            <div className="grid md:grid-cols-2 gap-8">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <motion.div
                            key={service.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Link
                                href={service.href}
                                className="group block relative bg-gunmetal rounded-lg p-8 md:p-12 h-full border-2 border-transparent hover:border-signal-red transition-all duration-300 overflow-hidden"
                            >
                                {/* Background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    <Icon className="w-16 h-16 text-signal-red mb-6 group-hover:scale-110 transition-transform duration-300" />

                                    <h3 className="text-3xl font-montserrat font-bold mb-4 group-hover:text-signal-red transition-colors duration-300">
                                        {service.title}
                                    </h3>

                                    <p className="text-text-muted text-lg mb-6">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-signal-red font-semibold group-hover:gap-4 transition-all duration-300">
                                        <span>Explore Services</span>
                                        <ArrowRight className="w-5 h-5" />
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
