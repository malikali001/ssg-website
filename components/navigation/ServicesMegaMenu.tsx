'use client';

import Link from 'next/link';
import { Shield, Eye, Car, Key, Camera } from 'lucide-react';
import { Sparkles, Trash2, Wrench, Users } from 'lucide-react';

export default function ServicesMegaMenu() {
    const securityServices = [
        { name: 'Manned Guarding', href: '/services/security/manned-guarding', icon: Shield },
        { name: 'K9 Units', href: '/services/security/k9-units', icon: Shield },
        { name: 'Mobile Patrols', href: '/services/security/mobile-patrols', icon: Car },
        { name: 'Key Holding', href: '/services/security/key-holding', icon: Key },
        { name: 'CCTV Monitoring', href: '/services/security/cctv-monitoring', icon: Camera },
    ];

    const facilitiesServices = [
        { name: 'Commercial Cleaning', href: '/services/facilities/commercial-cleaning', icon: Sparkles },
        { name: 'Waste Management', href: '/services/facilities/waste-management', icon: Trash2 },
        { name: 'Property Maintenance', href: '/services/facilities/property-maintenance', icon: Wrench },
        { name: 'Concierge Services', href: '/services/facilities/concierge', icon: Users },
    ];

    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-gunmetal border border-text-muted/20 rounded-lg shadow-2xl p-6 animate-fade-in">
            <div className="grid grid-cols-2 gap-8">
                {/* Security Solutions */}
                <div>
                    <h3 className="text-signal-red font-montserrat font-bold text-lg mb-4">
                        Security Solutions
                    </h3>
                    <div className="space-y-2">
                        {securityServices.map((service) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="flex items-center gap-3 p-2 rounded hover:bg-obsidian transition-colors duration-200 group"
                                >
                                    <Icon className="w-5 h-5 text-text-muted group-hover:text-signal-red transition-colors" />
                                    <span className="text-text-main group-hover:text-signal-red transition-colors">
                                        {service.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Facilities Management */}
                <div>
                    <h3 className="text-signal-red font-montserrat font-bold text-lg mb-4">
                        Facilities Management
                    </h3>
                    <div className="space-y-2">
                        {facilitiesServices.map((service) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="flex items-center gap-3 p-2 rounded hover:bg-obsidian transition-colors duration-200 group"
                                >
                                    <Icon className="w-5 h-5 text-text-muted group-hover:text-signal-red transition-colors" />
                                    <span className="text-text-main group-hover:text-signal-red transition-colors">
                                        {service.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
