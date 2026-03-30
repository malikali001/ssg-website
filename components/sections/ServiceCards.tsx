'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardItem {
    title: string;
    description: string;
    image: string;
    href: string;
}

const services: ServiceCardItem[] = [
    {
        title: 'Manned Guarding',
        description: 'Advanced security systems safeguard properties with smart, reliable protection solutions.',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
        href: '/services/security/manned-guarding',
    },
    {
        title: 'Electronic Security',
        description: 'Advanced security systems safeguard properties with smart, reliable protection solutions.',
        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
        href: '/services/security/electronic-security',
    },
    {
        title: 'Mobile Patrols',
        description: 'Advanced security systems safeguard properties with smart, reliable protection solutions.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
        href: '/services/security/mobile-patrols',
    },
    {
        title: 'K9 Security Units',
        description: 'Advanced security systems safeguard properties with smart, reliable protection solutions.',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
        href: '/services/security/k9-units',
    },
    {
        title: 'Key Holding',
        description: 'Advanced security systems safeguard properties with smart, reliable protection solutions.',
        image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=80',
        href: '/services/security/key-holding',
    },
    {
        title: 'Concierge Security',
        description: 'Advanced security systems safeguard properties with smart, reliable protection solutions.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        href: '/services/security/concierge',
    },
    {
        title: 'Reception Services',
        description: 'Professional front-of-house concierge and reception management for your premises.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
        href: '/services/facilities/reception',
    },
];

function ServiceCard({ service, index }: { service: ServiceCardItem; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
        >
            <Link
                href={service.href}
                className="block rounded-[16px] overflow-hidden"
            >
                {/* Image — edge-to-edge, flush with card */}
                <Image
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={533}
                    className="w-full h-[280px] object-cover block"
                />

                {/* White text area — overlaps image bottom */}
                <div className="relative z-[2] -mt-[36px] bg-white rounded-t-[24px] pt-[24px] px-[24px] pb-[24px]">
                    <div className="flex justify-between items-start">
                        <h3 className="text-[22px] font-bold text-[#1a1a1a] leading-[1.25] max-w-[75%]">
                            {service.title}
                        </h3>
                        <div className="w-[42px] h-[42px] min-w-[42px] rounded-full bg-[#1e2a3a] flex items-center justify-center mt-[4px]">
                            <ArrowUpRight className="w-[18px] h-[18px] text-white" />
                        </div>
                    </div>
                    <p className="mt-[14px] text-[15px] font-normal text-[#6b7280] leading-[1.5]">
                        {service.description}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}

export default function ServiceCards() {
    return (
        <section className="bg-white px-5 md:px-10 lg:px-16">
            <div className="max-w-[1280px] mx-auto py-10 sm:py-16 lg:py-20">
                {/* Rounded gray container */}
                <div className="bg-[#F2F2F3] rounded-[24px] px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-18 lg:px-12 lg:py-20">
                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="mb-10 sm:mb-12"
                    >
                        <h2 className="mb-4 max-w-[750px]">
                            Specialist security services – where your safety becomes our priority
                        </h2>
                        <p className="text-[var(--text-muted)] max-w-2xl text-base sm:text-lg">
                            Find out more about our people, technology and ESG initiatives for your sector.
                        </p>
                    </motion.div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
                        {services.map((service, index) => (
                            <ServiceCard key={service.href} service={service} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
