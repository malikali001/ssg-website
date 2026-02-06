'use client';

import Link from 'next/link';
import { Shield, Eye, Car, Key, Camera, UserCheck, Smartphone } from 'lucide-react';
import { Sparkles, Trash2, Wrench, Users, Monitor } from 'lucide-react';

export default function ServicesMegaMenu() {
    const securityServices = [
        { name: 'Manned Guarding', href: '/services/security/manned-guarding', icon: Shield },
        { name: 'K9 Units', href: '/services/security/k9-units', icon: Shield },
        { name: 'Mobile Patrols', href: '/services/security/mobile-patrols', icon: Car },
        { name: 'Electronic Security', href: '/services/security/electronic-security', icon: Camera },
        { name: 'Concierge Security', href: '/services/security/concierge', icon: UserCheck },
        { name: 'Key Holding', href: '/services/security/key-holding', icon: Key },
    ];

    const facilitiesServices = [
        { name: 'Commercial Cleaning', href: '/services/facilities/commercial-cleaning', icon: Sparkles },
        { name: 'Waste Management', href: '/services/facilities/waste-management', icon: Trash2 },
        { name: 'Property Maintenance', href: '/services/facilities/property-maintenance', icon: Wrench },
        { name: 'Reception Services', href: '/services/facilities/reception', icon: Monitor },
    ];

    return (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white border border-slate-200 rounded-xl shadow-2xl p-8 animate-fade-in z-50">
            <div className="grid grid-cols-2 gap-10">
                {/* Security Solutions */}
                <div>
                    <h3 className="text-signal-red font-montserrat font-bold text-lg mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Security Solutions
                    </h3>
                    <div className="space-y-2">
                        {securityServices.map((service) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 group border border-transparent hover:border-slate-100"
                                >
                                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-signal-red transition-colors" />
                                    <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                                        {service.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* Facilities Management */}
                <div>
                    <h3 className="text-deep-navy font-montserrat font-bold text-lg mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Facilities Management
                    </h3>
                    <div className="space-y-2">
                        {facilitiesServices.map((service) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    key={service.href}
                                    href={service.href}
                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 group border border-transparent hover:border-slate-100"
                                >
                                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-deep-navy transition-colors" />
                                    <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                                        {service.name}
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom highlight */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    24/7 Control Room Active
                </span>
                <Link href="/contact" className="text-signal-red font-bold hover:underline">
                    Book a Free Site Audit →
                </Link>
            </div>
        </div>
    );
}
