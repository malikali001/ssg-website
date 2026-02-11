'use client';

import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export default function OfficeLocations() {
    const offices = [
        {
            name: "Head Office / Registered Office",
            address: "Unit 5, Stanton Gate, 49 Mawney Road, ROMFORD RM7 7HL",
            phone: "0208 591 0330",
            email: "info@ssgukltd.com",
            images: [
                "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", // Standard office placeholder
                "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
            ],
            type: "Head Office"
        },
        {
            name: "Sunderland Office",
            address: "Sunderland Office, Moorside Park, 7 Camberwell Way, Sunderland, SR3 3XN",
            phone: "0191 564 0300",
            email: "info@ssgukltd.com",
            images: [
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", // Building placeholder
                "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800"
            ],
            type: "Regional Office"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="section-container max-w-6xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-montserrat font-black mb-4 text-[--color-deep-navy]"
                    >
                        Our <span className="text-[--color-signal-red]">Offices</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-[--color-text-muted] max-w-2xl mx-auto"
                    >
                        Nation-wide coverage with our strategically located regional offices.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    {offices.map((office, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 group flex flex-col"
                        >
                            {/* Image Area */}
                            <div className="h-64 relative overflow-hidden">
                                <span className={`absolute top-4 left-4 z-20 px-4 py-1.5 ${idx === 0 ? 'bg-[--color-signal-red]' : 'bg-[--color-deep-navy]'} text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg`}>
                                    {office.type}
                                </span>
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={office.images[0]}
                                    alt={office.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content Area */}
                            <div className="p-8 md:p-10 flex flex-col flex-grow bg-slate-50/50">
                                <h3 className="text-2xl font-bold text-[--color-deep-navy] mb-6 min-h-[64px] flex items-center">
                                    {office.name}
                                </h3>

                                <div className="space-y-6 flex-grow">
                                    <div className="flex items-start gap-4 group/item">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover/item:border-[--color-signal-red] transition-colors">
                                            <MapPin className="w-5 h-5 text-[--color-signal-red]" />
                                        </div>
                                        <p className="text-slate-600 leading-relaxed pt-1">
                                            {office.address}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover/item:border-[--color-signal-red] transition-colors">
                                            <Phone className="w-5 h-5 text-[--color-signal-red]" />
                                        </div>
                                        <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-slate-600 font-medium hover:text-[--color-deep-navy] transition-colors pt-1">
                                            {office.phone}
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-4 group/item">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-slate-100 group-hover/item:border-[--color-signal-red] transition-colors">
                                            <Mail className="w-5 h-5 text-[--color-signal-red]" />
                                        </div>
                                        <a href={`mailto:${office.email}`} className="text-slate-600 font-medium hover:text-[--color-deep-navy] transition-colors pt-1">
                                            {office.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-slate-200">
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-3 bg-white border-2 border-[#0F172A] text-[#0F172A] font-bold rounded-xl hover:bg-[#E31E24] hover:border-[#E31E24] hover:text-white transition-all flex items-center justify-center gap-2 group/btn"
                                    >
                                        <Navigation className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
