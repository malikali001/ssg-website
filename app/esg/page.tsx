import type { Metadata } from 'next';
import Link from 'next/link';
import {
    Leaf, Users, Scale, BarChart3, FileText,
    ShieldCheck, Globe, Heart, Recycle,
    Zap, Award, CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
    title: 'ESG & Compliance | SSG UK Ltd',
    description: 'Environmental, Social, and Governance at SSG UK Ltd. Our commitment to sustainability, social responsibility, and ethical leadership.',
    keywords: ['ESG', 'Sustainability', 'Social Responsibility', 'Governance', 'Compliance', 'Net Zero', 'SIA Approved'],
};

export default function ESGPage() {
    return (
        <main className="min-h-screen bg-[--color-obsidian]">
            {/* 1. Introduction: What ESG Means for SSG */}
            <section className="relative bg-black py-32 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        alt="Global ESG Connection"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 section-container text-center">
                    <div className="inline-block px-5 py-2 rounded-full bg-[--color-signal-red]/10 border border-[--color-signal-red]/30 text-[--color-signal-red] font-bold text-sm tracking-wider mb-8 animate-slide-up">
                        ENVIRONMENTAL • SOCIAL • GOVERNANCE
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-black text-white mb-8 animate-slide-up animation-delay-200 drop-shadow-lg leading-tight">
                        What ESG Means <br /> for <span className="text-[--color-signal-red]">SSG</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto animate-slide-up animation-delay-400 font-medium leading-relaxed">
                        ESG stands for Environmental, Social, and Governance — key areas that show how responsibly a business operates beyond financial performance. At SSG, ESG reflects how we protect people, treat our workforce and communities, and run our business with integrity.
                    </p>
                </div>
            </section>

            {/* 2. Environmental Commitment */}
            <section className="section-container">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative transform transition-transform duration-500 hover:scale-[1.01] border border-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
                                alt="Sustainability features"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[--color-deep-navy]/80 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-600 text-white text-xs font-bold mb-3 uppercase tracking-wide">
                                    TARGET 2040
                                </div>
                                <div className="font-montserrat font-bold text-3xl mb-2">Net Zero Commitment</div>
                                <p className="text-slate-200">Accelerating our journey to a sustainable future.</p>
                            </div>
                        </div>

                        {/* Floating Metric Card */}
                        <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-slide-up animation-delay-600 hidden md:block">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Recycle className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-[--color-deep-navy] text-lg">Zero Landfill</div>
                                    <div className="text-xs text-green-600 font-bold uppercase tracking-wider">Goal Achieved</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="inline-flex items-center gap-2 text-green-600 font-bold mb-4 tracking-wide uppercase text-sm">
                            <Globe className="w-5 h-5" /> Environmental Stewardship
                        </div>
                        <h2 className="text-4xl md:text-5xl font-montserrat font-black text-[--color-deep-navy] mb-6 leading-tight">
                            Minimizing Our <span className="text-green-600">Footprint</span>
                        </h2>
                        <p className="text-[--color-text-main] text-lg mb-8 leading-relaxed font-medium">
                            We recognize our responsibility to the planet. Our environmental strategy focuses on tangible, measurable actions that reduce impact across all operations, from our vehicle fleet to our office supplies.
                        </p>

                        <ul className="space-y-8">
                            <li className="flex gap-5 group">
                                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center shrink-0 shadow-sm border border-green-100 group-hover:bg-green-100 transition-colors">
                                    <Zap className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[--color-deep-navy] text-xl mb-2">Energy Efficiency</h4>
                                    <p className="text-slate-600 leading-relaxed">Optimizing energy use in our offices and operations, transitioning to LED lighting and smart monitoring systems.</p>
                                </div>
                            </li>
                            <li className="flex gap-5 group">
                                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center shrink-0 shadow-sm border border-green-100 group-hover:bg-green-100 transition-colors">
                                    <Recycle className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[--color-deep-navy] text-xl mb-2">Waste Management</h4>
                                    <p className="text-slate-600 leading-relaxed">Strict recycling protocols and partnership with licensed waste carriers to ensure responsible disposal.</p>
                                </div>
                            </li>
                            <li className="flex gap-5 group">
                                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center shrink-0 shadow-sm border border-green-100 group-hover:bg-green-100 transition-colors">
                                    <Leaf className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[--color-deep-navy] text-xl mb-2">Carbon Reduction</h4>
                                    <p className="text-slate-600 leading-relaxed">Transitioning to electric fleet vehicles and reducing travel through digital operational management.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. Social Responsibility */}
            <section className="bg-[--color-gunmetal] py-20">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                        <div className="order-2 lg:order-1">
                            <div className="inline-flex items-center gap-2 text-blue-600 font-bold mb-4 tracking-wide uppercase text-sm">
                                <Users className="w-5 h-5" /> Social Responsibility
                            </div>
                            <h2 className="text-4xl md:text-5xl font-montserrat font-black text-[--color-deep-navy] mb-6 leading-tight">
                                People First, <span className="text-blue-600">Always</span>
                            </h2>
                            <p className="text-[--color-text-main] text-lg mb-10 leading-relaxed font-medium">
                                Our business is built on people. We are dedicated to creating a supportive, inclusive environment where our team and communities thrive. We invest in potential.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Heart, title: "Wellbeing", desc: "Comprehensive health & safety training, mental health support, and employee assistance." },
                                    { icon: Users, title: "Diversity", desc: "Fostering a culture of equality where every individual is respected, valued, and heard." },
                                    { icon: Globe, title: "Community", desc: "Active engagement in local CSR initiatives, charity support, and local recruitment." },
                                    { icon: CheckCircle2, title: "Ethical Labour", desc: "Strict adherence to fair labour practices and Living Wage standards." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-bold text-[--color-deep-navy] text-lg mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative group">
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-[1.01] relative">
                                <img
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                                    alt="Diverse team working together"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[--color-deep-navy]/40 to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Governance & Compliance */}
            {/* 4. Governance & Compliance */}
            <section className="bg-[--color-deep-navy] py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5" />

                <div className="section-container relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 text-[--color-signal-red] font-bold mb-6 tracking-wide uppercase text-sm">
                        <Scale className="w-5 h-5" /> Governance & Compliance
                    </div>
                    <h2 className="text-4xl md:text-5xl font-montserrat font-black text-white mb-8">
                        Integrity in Action
                    </h2>
                    <p className="text-slate-200 text-xl max-w-3xl mx-auto leading-relaxed mb-16">
                        Strong governance is the backbone of our trust. We operate with full transparency, accountability, and adherence to the highest regulatory standards.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1: Code of Ethics */}
                        <div className="bg-white rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group text-left">
                            <div className="w-14 h-14 rounded-xl bg-[--color-signal-red]/10 flex items-center justify-center mb-6 group-hover:bg-[--color-signal-red] transition-colors duration-300 border border-[--color-signal-red]/20">
                                <ShieldCheck className="w-7 h-7 text-[--color-signal-red] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-[--color-deep-navy] mb-4 font-montserrat">Code of Ethics</h3>
                            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                                Zero-tolerance policy for corruption and bribery. We maintain strict anti-corruption measures and clear reporting channels.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-[--color-text-main] font-bold">
                                    <div className="w-2 h-2 rounded-full bg-[--color-signal-red]" />
                                    <span>Anti-Bribery Policy</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-[--color-text-main] font-bold">
                                    <div className="w-2 h-2 rounded-full bg-[--color-signal-red]" />
                                    <span>Whistleblowing Channel</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-[--color-text-main] font-bold">
                                    <div className="w-2 h-2 rounded-full bg-[--color-signal-red]" />
                                    <span>Ethical Trading</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2: Certifications */}
                        <div className="bg-white rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group text-left">
                            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 border border-blue-100">
                                <Award className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-[--color-deep-navy] mb-4 font-montserrat">Certifications</h3>
                            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                                Recognized excellence through industry-leading accreditations and standards.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-default shadow-sm text-center">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> ISO 9001
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-default shadow-sm text-center">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> ISO 14001
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-default shadow-sm text-center">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> ISO 45001
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[--color-signal-red]/5 border border-[--color-signal-red]/20 text-xs font-bold text-[--color-signal-red] hover:bg-[--color-signal-red]/10 transition-colors cursor-default shadow-sm text-center">
                                    <Award className="w-3.5 h-3.5 text-[--color-signal-red]" /> SIA Approved
                                </span>
                            </div>
                        </div>

                        {/* Card 3: Legal Compliance */}
                        <div className="bg-white rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group text-left">
                            <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300 border border-purple-100">
                                <FileText className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-2xl font-bold text-[--color-deep-navy] mb-4 font-montserrat">Legal Compliance</h3>
                            <p className="text-slate-600 leading-relaxed mb-6 font-medium">
                                Full adherence to all relevant laws, ensuring secure and responsible operations.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                                    <span className="text-sm font-bold text-[--color-deep-navy]">Modern Slavery Act</span>
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                                    <span className="text-sm font-bold text-[--color-deep-navy]">GDPR Compliant</span>
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                </div>
                                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                                    <span className="text-sm font-bold text-[--color-deep-navy]">Industry Regulations</span>
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Performance Metrics & Reporting */}
            <section className="bg-white border-b border-slate-100 py-20">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <div className="inline-flex items-center gap-2 text-purple-600 font-bold mb-4 tracking-wide uppercase text-sm">
                                <BarChart3 className="w-5 h-5" /> Performance & Metrics
                            </div>
                            <h2 className="text-4xl md:text-5xl font-montserrat font-black text-[--color-deep-navy] mb-6 leading-tight">
                                Measuring Our <span className="text-purple-600">Impact</span>
                            </h2>
                            <p className="text-[--color-text-main] text-lg mb-10 leading-relaxed font-medium">
                                We believe in transparency. We track and monitor Key Performance Indicators (KPIs) to ensure we are meeting our ESG goals and continuously improving.
                            </p>

                            <div className="space-y-8">
                                <div className="bg-[--color-gunmetal] p-8 rounded-2xl border border-slate-200">
                                    <h4 className="font-bold text-[--color-deep-navy] mb-3 flex justify-between items-end">
                                        <span className="text-lg">Customer Satisfaction</span>
                                        <span className="text-3xl font-black text-purple-600">98%</span>
                                    </h4>
                                    <div className="w-full bg-slate-300 rounded-full h-3 mb-2">
                                        <div className="bg-purple-600 h-3 rounded-full shadow-lg shadow-purple-200" style={{ width: '98%' }}></div>
                                    </div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">Based on annual client surveys</p>
                                </div>
                                <div className="bg-[--color-gunmetal] p-8 rounded-2xl border border-slate-200">
                                    <h4 className="font-bold text-[--color-deep-navy] mb-3 flex justify-between items-end">
                                        <span className="text-lg">SIA Audit Score</span>
                                        <span className="text-3xl font-black text-purple-600">Top 5%</span>
                                    </h4>
                                    <div className="w-full bg-slate-300 rounded-full h-3 mb-2">
                                        <div className="bg-purple-600 h-3 rounded-full shadow-lg shadow-purple-200" style={{ width: '95%' }}></div>
                                    </div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">Consistently ranking in the top tier</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[--color-deep-navy] rounded-3xl p-10 md:p-12 text-white shadow-2xl flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

                            <h3 className="text-3xl font-bold mb-8 font-montserrat relative z-10">Annual Highlights</h3>
                            <ul className="space-y-6 relative z-10">
                                {[
                                    "Launched new Electric Vehicle fleet transition plan",
                                    "Achieved ISO 45001 Health & Safety Certification",
                                    "Expanded local apprenticeship program by 150%",
                                    "Zero reportable environmental incidents across all sites"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center shrink-0 border border-purple-600/30">
                                            <CheckCircle2 className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <span className="text-slate-200 text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Policies & Legal Compliance Documents */}
            <section className="bg-[--color-gunmetal] py-24">
                <div className="section-container text-center">
                    <div className="inline-flex items-center gap-2 text-slate-500 font-bold mb-4 tracking-wide uppercase text-sm">
                        <FileText className="w-5 h-5" /> Documentation
                    </div>
                    <h2 className="text-3xl md:text-5xl font-montserrat font-black text-[--color-deep-navy] mb-12">
                        Policy & Compliance <span className="text-[--color-signal-red]">Documents</span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 text-left max-w-5xl mx-auto">
                        {[
                            'Modern Slavery Policy',
                            'Environmental Policy',
                            'Equality & Diversity Policy',
                            'Corporate Social Responsibility Policy',
                            'Health & Safety Policy',
                            'Ethical Trading Policy',
                            'Information Security Policy',
                            'Quality Policy'
                        ].map((policy, index) => (
                            <div key={index} className="group bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:border-[--color-signal-red] transition-all duration-300 flex items-center justify-between cursor-pointer hover:shadow-md transform hover:-translate-y-1">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[--color-gunmetal] group-hover:bg-red-50 flex items-center justify-center transition-colors border border-slate-100">
                                        <FileText className="w-6 h-6 text-slate-400 group-hover:text-[--color-signal-red] transition-colors" />
                                    </div>
                                    <span className="font-bold text-[--color-deep-navy] group-hover:text-[--color-signal-red] transition-colors text-lg">{policy}</span>
                                </div>
                                <div className="px-3 py-1 bg-[--color-gunmetal] rounded text-xs font-bold text-slate-500 group-hover:bg-[--color-signal-red] group-hover:text-white transition-colors uppercase">
                                    PDF
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 max-w-2xl mx-auto">
                        <p className="text-slate-500 mb-8 text-lg font-medium">
                            These documents represent our formal commitment to ESG standards. Verification of certifications and detailed audit reports are available upon request.
                        </p>
                        <Link href="/quote" className="btn-primary inline-flex items-center gap-2 shadow-xl shadow-red-500/20 px-8 py-4 text-lg">
                            Request Full Compliance Pack
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
