'use client';

import { motion } from 'framer-motion';
import { LucideIcon, ChevronRight } from 'lucide-react';

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
        <section id="capabilities" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[var(--deep-navy)] mb-4">
                        {title} <span className="text-[var(--signal-red)]">{subtitle}</span>
                    </h2>
                    <p className="text-lg text-[var(--text-muted)]">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.4 }}
                                className="group p-6 bg-white rounded-lg border border-[var(--border-color)] hover:border-[var(--signal-red)] transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="w-11 h-11 bg-[var(--section-light)] rounded-lg flex items-center justify-center mb-5 group-hover:bg-[var(--signal-red)] transition-colors duration-300">
                                    <Icon className="w-5 h-5 text-[var(--signal-red)] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-bold text-[var(--deep-navy)] mb-2 group-hover:text-[var(--signal-red)] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-4">
                                    {service.desc}
                                </p>
                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--signal-red)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
