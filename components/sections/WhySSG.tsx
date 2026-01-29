'use client';

import { motion } from 'framer-motion';
import { Clock, ShieldCheck, MapPinned } from 'lucide-react';

export default function WhySSG() {
    const features = [
        {
            icon: Clock,
            title: '15min Average Response',
            description: 'Rapid deployment capability across the UK',
        },
        {
            icon: ShieldCheck,
            title: '100% Vetted Staff',
            description: 'Complete compliance assurance and background checks',
        },
        {
            icon: MapPinned,
            title: 'National Coverage',
            description: 'UK-wide service delivery with local expertise',
        },
    ];

    return (
        <section className="section-container bg-gunmetal/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-4">
                    Why Choose <span className="text-signal-red">SSG</span>
                </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="text-center p-6 rounded-lg hover:bg-white/50 transition-colors duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-signal-red/10 rounded-full mb-6 border-2 border-signal-red/30">
                                <Icon className="w-10 h-10 text-signal-red" />
                            </div>

                            <h3 className="text-2xl font-montserrat font-bold mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-text-muted">
                                {feature.description}
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
