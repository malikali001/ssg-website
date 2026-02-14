'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceItem {
    icon: LucideIcon;
    title: string;
    desc: string;
}

interface ServiceGridProps {
    title: string;
    subtitle: string;
    description: string;
    services: ServiceItem[];
}

export default function ServiceGrid({ title, subtitle, description, services }: ServiceGridProps) {
    return (
        <section id="capabilities" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-montserrat font-black text-slate-900 mb-4">
                        {title} <span className="text-signal-red">{subtitle}</span>
                    </h2>
                    <p className="text-lg text-slate-500">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.03 }}
                                className="group p-8 bg-white rounded-xl border border-slate-200 hover:border-signal-red transition-all duration-300 hover:shadow-2xl hover:shadow-signal-red/10"
                            >
                                <motion.div
                                    className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-signal-red transition-colors duration-300"
                                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Icon className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors duration-300" />
                                </motion.div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-signal-red transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
