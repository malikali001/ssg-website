'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Briefcase, Shield, Users, GraduationCap, CheckCircle2,
    ArrowRight, MapPin, Clock, FileText, ChevronRight,
    Award, Heart, ShieldCheck, Star
} from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-[--color-obsidian]">
            {/* 1. Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
                {/* Background Image/Video Placeholder */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
                        alt="Security professional on duty"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="relative z-10 section-container text-center pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[--color-signal-red]/20 border border-[--color-signal-red]/40 text-[--color-signal-red] font-bold text-sm tracking-wide mb-6 backdrop-blur-sm">
                            <Briefcase className="w-4 h-4" /> WE ARE HIRING
                        </div>
                        <h1 className="text-5xl md:text-7xl font-montserrat font-black text-white mb-8 leading-tight drop-shadow-2xl">
                            Build Your Career in <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[--color-signal-red] to-red-600">
                                Professional Security
                            </span>
                        </h1>
                        <p className="text-xl text-slate-100 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                            Join a stable, professional employer that values integrity and invests in your growth.
                            Secure your future with SSG.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#open-roles"
                                className="px-8 py-4 bg-[--color-signal-red] hover:bg-red-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-[--color-signal-red]/40 hover:-translate-y-1 flex items-center gap-2"
                            >
                                <Users className="w-5 h-5" /> View Open Roles
                            </a>
                            <a
                                href="#application-form"
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/20 transition-all flex items-center gap-2"
                            >
                                Apply Now <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Why Work at SSG */}
            <section className="py-24 bg-white">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-montserrat font-black text-[--color-deep-navy] mb-6">
                            Why Choose <span className="text-[--color-signal-red]">SSG?</span>
                        </h2>
                        <p className="text-slate-700 text-lg max-w-3xl mx-auto font-medium">
                            We don't just hire security; we build careers. We provide the stability, support, and training you need to succeed in the industry.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Stable Contracts",
                                desc: "Long-term work with a reputable, financially secure employer.",
                                color: "text-blue-600", bg: "bg-blue-50"
                            },
                            {
                                icon: Star,
                                title: "Professional Management",
                                desc: "Work under experienced leaders who understand the security sector.",
                                color: "text-purple-600", bg: "bg-purple-50"
                            },
                            {
                                icon: GraduationCap,
                                title: "Career Progression",
                                desc: "Clear pathways from Officer to Supervisor and Management roles.",
                                color: "text-[--color-signal-red]", bg: "bg-red-50"
                            },
                            {
                                icon: Heart,
                                title: "Inclusive Culture",
                                desc: "An equal opportunities employer that values diversity and respect.",
                                color: "text-green-600", bg: "bg-green-50"
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <item.icon className={`w-7 h-7 ${item.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-[--color-deep-navy] mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm font-bold">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Roles We Hire For */}
            <section id="open-roles" className="py-24 bg-[--color-gunmetal] relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
                <div className="section-container">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <span className="text-[--color-signal-red] font-bold tracking-wider uppercase text-sm">Opportunities</span>
                            <h2 className="text-3xl md:text-5xl font-montserrat font-black text-[--color-deep-navy] mt-2">
                                Roles We <span className="text-[--color-signal-red]">Hire For</span>
                            </h2>
                        </div>
                        <p className="text-slate-700 max-w-md font-bold">
                            Join our team across various sectors including Corporate, Retail, Logistics, and Events.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Security Officer",
                                loc: "Nationwide", type: "Full-time / Part-time",
                                desc: "Front-line security professionals for corporate and commercial sites."
                            },
                            {
                                title: "Door Supervisor",
                                loc: "London / Manchester", type: "Shift Work",
                                desc: "Ensure safety and order at licensed venues and events."
                            },
                            {
                                title: "CCTV Operator",
                                loc: "Control Centre", type: "Full-time",
                                desc: "Monitor surveillance systems and coordinate response teams."
                            },
                            {
                                title: "Mobile Patrol Officer",
                                loc: "Various Regions", type: "Full-time",
                                desc: "Conduct mobile inspections and alarm response duties."
                            },
                            {
                                title: "Site Supervisor",
                                loc: "Key Locations", type: "Full-time",
                                desc: "Lead on-site teams and liase with client management."
                            },
                            {
                                title: "K9 Handler",
                                loc: "Specialist Sites", type: "Contract",
                                desc: "Specialist dog handling for high-security environments."
                            }
                        ].map((role, idx) => (
                            <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:border-[--color-signal-red] transition-all group flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-slate-50 rounded-lg group-hover:bg-red-50 transition-colors">
                                        <Briefcase className="w-6 h-6 text-slate-400 group-hover:text-[--color-signal-red]" />
                                    </div>
                                    <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase tracking-wide">
                                        {role.type}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-[--color-deep-navy] mb-2">{role.title}</h3>
                                <div className="flex items-center gap-2 text-slate-600 text-sm mb-4 font-bold">
                                    <MapPin className="w-4 h-4" /> {role.loc}
                                </div>
                                <p className="text-slate-700 text-sm mb-6 flex-grow font-medium">{role.desc}</p>
                                <a href="#application-form" className="w-full py-3 rounded-lg border-2 border-slate-100 hover:border-[--color-signal-red] hover:text-[--color-signal-red] text-slate-700 font-bold text-center transition-all">
                                    Apply Now
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Requirements */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

                <div className="section-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-8 text-white">
                                What We <span className="text-[--color-signal-red]">Look For</span>
                            </h2>
                            <p className="text-slate-200 text-lg mb-10 leading-relaxed font-medium">
                                We maintain high standards. To join the SSG team, you must meet our core requirements ensuring professionalism and compliance across strict industry regulations.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Valid SIA Licence", desc: "Required for all operational roles (DS, SG, CCTV)." },
                                    { title: "Right to Work in the UK", desc: "Full documentation and 5-year vetting check." },
                                    { title: "Professional Conduct", desc: "Strong communication skills and simplified integrity." },
                                    { title: "Flexibility", desc: "Willingness to work shifts, including nights and weekends." }
                                ].map((req, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="w-6 h-6 rounded-full bg-[--color-signal-red] flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">{req.title}</h4>
                                            <p className="text-slate-300 text-sm font-medium">{req.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 relative">
                            {/* Mock Card */}
                            <div className="absolute top-4 right-4 animate-pulse">
                                <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
                                    VETTING PASS
                                </div>
                            </div>

                            <div className="text-center py-8">
                                <ShieldCheck className="w-20 h-20 text-slate-500 mx-auto mb-6 opacity-50" />
                                <h3 className="text-2xl font-bold text-white mb-2">BS 7858 Vetting</h3>
                                <p className="text-slate-300 text-sm max-w-xs mx-auto font-medium">
                                    All candidates undergo rigorous screening to British Standards, ensuring the highest level of trust.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="p-4 bg-white/5 rounded-xl text-center">
                                    <div className="text-2xl font-black text-[--color-signal-red] mb-1">5 Year</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">History Check</div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-xl text-center">
                                    <div className="text-2xl font-black text-blue-400 mb-1">DBS</div>
                                    <div className="text-xs text-slate-400 uppercase tracking-wider font-bold">Enhanced Check</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Training & Process */}
            <section className="py-24 bg-white">
                <div className="section-container">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-montserrat font-black text-[--color-deep-navy] mb-6">
                            Your Journey to <span className="text-[--color-signal-red]">Employment</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-slate-100 z-0">
                            <div className="h-full w-full bg-gradient-to-r from-transparent via-[--color-signal-red]/20 to-transparent" />
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: "01", title: "Apply Online", desc: "Complete the simple form below." },
                                { step: "02", title: "Screening", desc: "We review your licence & experience." },
                                { step: "03", title: "Interview", desc: "Meet the team and discuss the role." },
                                { step: "04", title: "Onboarding", desc: "Induction, uniform, and deployment." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white pt-8 text-center bg-white">
                                    <div className="w-24 h-24 mx-auto bg-[--color-gunmetal] rounded-full flex items-center justify-center border-8 border-white shadow-xl mb-6 relative">
                                        <span className="text-3xl font-black text-[--color-signal-red]">{item.step}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[--color-deep-navy] mb-2">{item.title}</h3>
                                    <p className="text-slate-600 text-sm max-w-[200px] mx-auto font-bold">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Training Highlight Box */}
                    <div className="mt-20 bg-[--color-gunmetal] rounded-2xl p-8 md:p-12 border border-slate-200 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-16 h-16 bg-[--color-deep-navy] rounded-xl flex items-center justify-center shrink-0">
                            <GraduationCap className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-grow text-center md:text-left">
                            <h3 className="text-2xl font-bold text-[--color-deep-navy] mb-2">We Invest in You</h3>
                            <p className="text-slate-700 font-medium">
                                Successful candidates receive site-specific induction, ongoing upskilling (First Aid, Fire Marshal), and opportunities for career advancement into supervisory roles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Application Form */}
            <section id="application-form" className="py-24 bg-[--color-deep-navy] relative">
                <div className="section-container max-w-4xl text-center">
                    <div className="inline-block p-3 rounded-full bg-white/10 mb-6">
                        <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-montserrat font-black text-white mb-6">
                        Ready to Join Us?
                    </h2>
                    <p className="text-slate-100 text-lg mb-12 font-medium">
                        Complete the form below to start your application. Please ensure you have your SIA licence details ready.
                    </p>

                    <div className="bg-white rounded-3xl p-8 md:p-12 text-left shadow-2xl">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-[--color-deep-navy] mb-2">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[--color-signal-red] focus:ring-0 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[--color-deep-navy] mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[--color-signal-red] focus:ring-0 outline-none transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-[--color-deep-navy] mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[--color-signal-red] focus:ring-0 outline-none transition-all" placeholder="07123 456789" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[--color-deep-navy] mb-2">Role Applying For</label>
                                    <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[--color-signal-red] focus:ring-0 outline-none transition-all">
                                        <option>Security Officer</option>
                                        <option>Door Supervisor</option>
                                        <option>CCTV Operator</option>
                                        <option>Mobile Patrol</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-[--color-deep-navy] mb-2">SIA Licence Number</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[--color-signal-red] focus:ring-0 outline-none transition-all" placeholder="16-digit number" />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-[--color-deep-navy] mb-2">Experience Summary & CV</label>
                                <textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[--color-signal-red] focus:ring-0 outline-none transition-all min-h-[120px]" placeholder="Briefly describe your experience..."></textarea>
                                <div className="mt-2 text-xs text-slate-500">* Please email your full CV to jobs@ssg-net.com after submitting this form.</div>
                            </div>

                            <button type="button" className="w-full py-4 bg-[--color-signal-red] hover:bg-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg">
                                Submit Application
                            </button>

                            <p className="text-center text-xs text-slate-400 mt-4">
                                By submitting this form, you agree to our Privacy Policy and GDPR terms regarding candidate data retention.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
