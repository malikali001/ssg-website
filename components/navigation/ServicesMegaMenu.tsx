'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
    Shield, Car, Camera, UserCheck, Key, Dog,
    Monitor, ArrowUpRight
} from 'lucide-react';

const securityServices = [
    { name: 'Manned Guarding', href: '/services/security/manned-guarding', icon: Shield },
    { name: 'K9 Units', href: '/services/security/k9-units', icon: Dog },
    { name: 'Mobile Patrols', href: '/services/security/mobile-patrols', icon: Car },
    { name: 'Electronic Security', href: '/services/security/electronic-security', icon: Camera },
    { name: 'Concierge Security', href: '/services/security/concierge', icon: UserCheck },
    { name: 'Key Holding & Alarm Response', href: '/services/security/key-holding', icon: Key },
    { name: 'Reception Services', href: '/services/facilities/reception', icon: Monitor },
];

const config = {
    heading: 'Expert security services delivering outstanding protection outcomes.',
    description: 'Our mission is to make people and places safer, smarter, and stronger every day.',
    services: securityServices,
    card: {
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
        title: 'Security Services',
        description: 'Comprehensive security services protect businesses, assets, and people effectively.',
        href: '/services/security',
    },
};

export default function ServiceDropdown() {
    const { heading, description, services, card } = config;

    return (
        <div className="w-full bg-white border-b border-[var(--border-color)] shadow-lg animate-fade-in">
            <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 py-10">
                <div className="flex gap-10">
                    {/* Left Side - Heading + Services Grid */}
                    <div className="flex-1 min-w-0">
                        <h3 className="text-2xl md:text-[1.7rem] font-bold text-[var(--deep-navy)] leading-snug mb-3 max-w-lg">
                            {heading}
                        </h3>
                        <p className="text-[var(--text-muted)] text-sm mb-6 max-w-lg">
                            {description}
                        </p>

                        {/* Divider */}
                        <div className="border-t border-[var(--border-color)] mb-8" />

                        {/* 2-Column Services Grid */}
                        <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                            {services.map((service) => {
                                const Icon = service.icon;
                                return (
                                    <Link
                                        key={service.href}
                                        href={service.href}
                                        className="flex items-center gap-3 group"
                                    >
                                        <Icon className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--signal-red)] transition-colors flex-shrink-0" />
                                        <span className="text-[15px] font-medium text-[var(--text-main)] group-hover:text-[var(--signal-red)] transition-colors">
                                            {service.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Side - Image Card */}
                    <div className="hidden lg:block w-[320px] flex-shrink-0">
                        <Link href={card.href} className="block group">
                            <div className="rounded-2xl overflow-hidden border border-[var(--border-color)] bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        width={600}
                                        height={450}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-lg font-bold text-[var(--deep-navy)]">
                                            {card.title}
                                        </h4>
                                        <div className="w-8 h-8 rounded-full bg-[var(--section-dark)] flex items-center justify-center group-hover:bg-[var(--signal-red)] transition-colors">
                                            <ArrowUpRight className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
