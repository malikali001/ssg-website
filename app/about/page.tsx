import type { Metadata } from 'next';
import { Shield, Award, Leaf, Users, Scale, Heart } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About Us | SSG UK Ltd',
    description: 'Learn about SSG UK Ltd - elite security and facilities management with a commitment to ESG and compliance excellence.',
    keywords: ['About SSG', 'Security Company UK', 'ESG', 'Compliance', 'SIA Approved'],
};

export default function AboutPage() {
    const accreditations = [
        { name: 'SIA Approved Contractor', description: 'Security Industry Authority accreditation', logo: '/certifications/sia.png' },
        { name: 'ISO 9001', description: 'Quality Management System', logo: '/certifications/iso9001.png' },
        { name: 'ISO 14001', description: 'Environmental Management System', logo: '/certifications/iso14001.png' },
        { name: 'SafeContractor', description: 'Health & Safety compliance', logo: '/certifications/safecontractor.png' },
        { name: 'Constructionline', description: 'Pre-qualification service', logo: '/certifications/constructionline.png' },
        { name: 'CHAS', description: 'Contractors Health and Safety Assessment', logo: '/certifications/chas.png' },
    ];

    return (
        <main className="min-h-screen">
            {/* Hero */}
            <section className="section-container pt-32">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-5xl md:text-6xl font-montserrat font-black mb-6">
                        About <span className="text-[--color-signal-red]">SSG UK Ltd</span>
                    </h1>
                    <p className="text-xl text-[--color-text-muted]">
                        Elite security and facilities management powered by technology and driven by excellence
                    </p>
                </div>
            </section>

            {/* Our History */}
            <section className="section-container bg-[--color-gunmetal]/30">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-montserrat font-bold mb-8">Our History</h2>
                    <div className="space-y-6 text-[--color-text-muted] text-lg">
                        <p>
                            Founded with a vision to revolutionize the security and facilities management industry,
                            SSG UK Ltd has grown from a regional security provider to a national leader in integrated
                            protection services.
                        </p>
                        <p>
                            Our journey has been defined by continuous innovation, from implementing the SSG Intelligence
                            Center to pioneering sustainable facilities management practices. We've built our reputation
                            on precision, reliability, and an unwavering commitment to our clients' success.
                        </p>
                        <p>
                            Today, we protect over 150 sites across the UK, employing cutting-edge technology and
                            highly-trained personnel to deliver unparalleled service quality.
                        </p>
                    </div>
                </div>
            </section>

            {/* ESG Section */}
            <section className="section-container">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-4">
                        Our <span className="text-[--color-signal-red]">ESG</span> Commitment
                    </h2>
                    <p className="text-xl text-[--color-text-muted] max-w-3xl mx-auto">
                        Environmental, Social, and Governance excellence is at the heart of everything we do
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Environmental */}
                    <div className="bg-[--color-gunmetal] rounded-lg p-8 border border-[--color-text-muted]/10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-full mb-6 border-2 border-green-500/30">
                            <Leaf className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-montserrat font-bold mb-4">Environmental</h3>
                        <ul className="space-y-3 text-[--color-text-muted]">
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[--color-signal-red] rounded-full mt-2" />
                                <span>Commitment to Net Zero by 2040</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[--color-signal-red] rounded-full mt-2" />
                                <span>Carbon reduction plans across all operations</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[--color-signal-red] rounded-full mt-2" />
                                <span>Eco-friendly cleaning chemicals and sustainable practices</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[--color-signal-red] rounded-full mt-2" />
                                <span>Waste reduction and recycling programs</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="bg-[--color-gunmetal] rounded-lg p-8 border border-[--color-text-muted]/10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-full mb-6 border-2 border-blue-500/30">
                            <Heart className="w-8 h-8 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-montserrat font-bold mb-4">Social</h3>
                        <ul className="space-y-3 text-[--color-text-muted]">
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[--color-signal-red] rounded-full mt-2" />
                                <span>Social Value initiatives supporting local communities</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[--color-signal-red] rounded-full mt-2" />
                                <span>Employee wellbeing and development programs</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[--color-signal-red] rounded-full mt-2" />
                                <span>Diversity and inclusion commitment</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[--color-signal-red] rounded-full mt-2" />
                                <span>Living wage employer</span>
                            </li>
                        </ul>
                    </div>

                    {/* Governance */}
                    <div className="bg-[--color-gunmetal] rounded-lg p-8 border border-[--color-text-muted]/10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-full mb-6 border-2 border-purple-500/30">
                            <Scale className="w-8 h-8 text-purple-500" />
                        </div>
                        <h3 className="text-2xl font-montserrat font-bold mb-4">Governance</h3>
                        <ul className="space-y-3 text-[--color-text-muted]">
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[--color-signal-red] rounded-full mt-2" />
                                <span>Ethical business practices and transparency</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[--color-signal-red] rounded-full mt-2" />
                                <span>Robust compliance frameworks</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[--color-signal-red] rounded-full mt-2" />
                                <span>Anti-corruption and modern slavery policies</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[--color-signal-red] rounded-full mt-2" />
                                <span>Regular audits and certifications</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Compliance & Accreditations */}
            <section className="section-container bg-[--color-gunmetal]/30">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-montserrat font-black mb-4">
                        Compliance & <span className="text-[--color-signal-red]">Accreditations</span>
                    </h2>
                    <p className="text-xl text-[--color-text-muted] max-w-3xl mx-auto">
                        Certified excellence across every aspect of our operations
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {accreditations.map((accred, index) => (
                        <div key={index} className="bg-[--color-obsidian] rounded-lg p-8 border border-[--color-signal-red]/20 hover:border-[--color-signal-red]/40 transition-all duration-300 hover:scale-105">
                            <div className="flex flex-col items-center text-center gap-4">
                                <div className="w-32 h-32 flex items-center justify-center bg-white rounded-lg p-4">
                                    <img
                                        src={accred.logo}
                                        alt={accred.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-montserrat font-bold text-lg mb-2">{accred.name}</h3>
                                    <p className="text-[--color-text-muted] text-sm">{accred.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-[--color-text-muted] mb-6">
                        All certificates available for download upon request
                    </p>
                    <a href="/quote" className="btn-primary">
                        Request Compliance Documentation
                    </a>
                </div>
            </section>
        </main>
    );
}
