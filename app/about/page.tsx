import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Building2, Monitor, ChevronRight, Leaf, Heart, Scale, Award, Clock, MapPin } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
    title: 'About Us | SSG UK Ltd',
    description: 'Learn about SSG UK Ltd - elite security and facilities management with a commitment to ESG and compliance excellence.',
    keywords: ['About SSG', 'Security Company UK', 'ESG', 'Compliance', 'SIA Approved'],
};

const serviceCategories = [
    {
        title: 'Security Services',
        description: 'SIA-approved manned guarding, mobile patrols, K9 units, and electronic security.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
        href: '/services/security',
    },
    {
        title: 'Facilities Services',
        description: 'Commercial cleaning, waste management, property maintenance, and reception.',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
        href: '/services/facilities',
    },
    {
        title: 'Intelligence & Technology',
        description: 'Real-time guard tracking, incident reporting, and predictive risk analytics.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
        href: '/portals/intelligence',
    },
];

const stats = [
    { value: '150+', label: 'Sites Secured', icon: Shield },
    { value: '15+', label: 'Years Excellence', icon: Clock },
    { value: '24/7', label: 'National Coverage', icon: MapPin },
    { value: '100%', label: 'SIA Approved', icon: Award },
];

const narrativeBlocks = [
    {
        title: 'Security with Purpose',
        description: 'Founded with a vision to revolutionize the security and facilities management industry, SSG UK Ltd has grown from a regional security provider to a national leader in integrated protection services.',
        secondParagraph: 'Our journey has been defined by continuous innovation, from implementing the SSG Intelligence Center to pioneering sustainable facilities management practices. We\'ve built our reputation on precision, reliability, and an unwavering commitment to our clients\' success.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        href: '/portals/intelligence',
    },
    {
        title: 'People at the Heart',
        description: 'Our 150+ highly trained professionals are the foundation of everything we do. Every team member is SIA-licensed, thoroughly vetted, and continuously trained to the highest industry standards.',
        secondParagraph: 'We are a proud Living Wage employer, investing in our people because we know that motivated, well-supported staff deliver exceptional service. Our employee development programs ensure continuous growth and career progression.',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
        href: '/careers',
    },
    {
        title: 'Built on Trust and Integrity',
        description: 'SSG operates with full transparency and accountability. Our ISO 9001 and ISO 14001 certifications, combined with SIA ACS Approved Contractor status, demonstrate our commitment to quality and compliance.',
        secondParagraph: 'Our ESG initiatives ensure we deliver social value alongside operational excellence — from reducing environmental impact to supporting local communities across the UK.',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
        href: '/esg',
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <PageHero
                badge="About Us"
                title="About"
                subtitle="SSG UK Ltd"
                description="Our mission is to make people and places safer, smarter, and stronger every day."
                imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
                ctaLabel="Get in Touch"
                ctaHref="/contact-us"
            />

            {/* Service Category Cards */}
            <section className="section-container bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
                    {serviceCategories.map((cat) => (
                        <Link
                            key={cat.href}
                            href={cat.href}
                            className="group block bg-white border border-[var(--border-color)] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-2 text-[var(--deep-navy)] group-hover:text-[var(--signal-red)] transition-colors">
                                    {cat.title}
                                </h3>
                                <p className="text-[var(--text-muted)] text-sm mb-3">{cat.description}</p>
                                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--signal-red)] group-hover:gap-2 transition-all">
                                    Learn More <ChevronRight className="w-4 h-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="relative bg-[var(--section-dark)] overflow-hidden">
                <div className="absolute inset-0 dotted-bg opacity-30" />
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <h2 className="font-bold text-white text-center mb-10">
                        Trusted Security. Proven Results.
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {stats.map((stat, idx) => {
                            const Icon = stat.icon;
                            return (
                                <div key={idx} className="text-center">
                                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[var(--accent-amber)]/15 mb-3">
                                        <Icon className="w-5 h-5 text-[var(--accent-amber)]" />
                                    </div>
                                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-xs sm:text-sm text-white/60 font-medium uppercase tracking-wide">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Narrative Blocks */}
            {narrativeBlocks.map((block, index) => {
                const isReversed = index % 2 !== 0;
                const bgColor = index % 2 === 0 ? 'bg-white' : 'bg-[var(--section-light)]';
                return (
                    <section key={index} className={bgColor}>
                        <div className="section-container">
                            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                <div className={isReversed ? 'lg:order-2' : ''}>
                                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                                        <img src={block.image} alt={block.title} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className={isReversed ? 'lg:order-1' : ''}>
                                    <h2 className="font-bold mb-6 text-[var(--deep-navy)]">
                                        {block.title}
                                    </h2>
                                    <p className="text-[var(--text-main)] leading-relaxed mb-4">{block.description}</p>
                                    <p className="text-[var(--text-main)] leading-relaxed mb-6">{block.secondParagraph}</p>
                                    <Link href={block.href} className="arrow-link text-sm">
                                        Find out more <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* ESG Section */}
            <section className="section-container bg-white">
                <div className="text-center mb-12">
                    <h2 className="font-bold mb-4">
                        Our <span className="text-[var(--accent-amber)]">ESG</span> Commitment
                    </h2>
                    <p className="text-[var(--text-main)] max-w-3xl mx-auto">
                        Environmental, Social, and Governance excellence at the heart of everything we do.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
                    <div className="bg-[var(--section-light)] rounded-lg p-5 sm:p-7 border border-[var(--border-color)]">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-full mb-5">
                            <Leaf className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Environmental</h3>
                        <ul className="space-y-2 text-[var(--text-muted)] text-sm">
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[var(--signal-red)] rounded-full mt-1.5 flex-shrink-0" /><span>Net Zero commitment by 2040</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[var(--signal-red)] rounded-full mt-1.5 flex-shrink-0" /><span>Carbon reduction plans across all operations</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[var(--signal-red)] rounded-full mt-1.5 flex-shrink-0" /><span>Eco-friendly practices and waste reduction</span></li>
                        </ul>
                    </div>
                    <div className="bg-[var(--section-light)] rounded-lg p-7 border border-[var(--border-color)]">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-full mb-5">
                            <Heart className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Social</h3>
                        <ul className="space-y-2 text-[var(--text-muted)] text-sm">
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[var(--signal-red)] rounded-full mt-1.5 flex-shrink-0" /><span>Community support initiatives</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[var(--signal-red)] rounded-full mt-1.5 flex-shrink-0" /><span>Employee wellbeing and development</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[var(--signal-red)] rounded-full mt-1.5 flex-shrink-0" /><span>Living Wage employer, diversity commitment</span></li>
                        </ul>
                    </div>
                    <div className="bg-[var(--section-light)] rounded-lg p-7 border border-[var(--border-color)]">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-full mb-5">
                            <Scale className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Governance</h3>
                        <ul className="space-y-2 text-[var(--text-muted)] text-sm">
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[var(--signal-red)] rounded-full mt-1.5 flex-shrink-0" /><span>Ethical business practices and transparency</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[var(--signal-red)] rounded-full mt-1.5 flex-shrink-0" /><span>Robust compliance frameworks</span></li>
                            <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 bg-[var(--signal-red)] rounded-full mt-1.5 flex-shrink-0" /><span>Anti-corruption and modern slavery policies</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Accreditations */}
            <section className="bg-[var(--section-light)] border-y border-[var(--border-color)] py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-6">
                        Accreditations & Certifications
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10">
                        {['SIA Approved', 'ISO 9001', 'ISO 14001', 'SafeContractor', 'Constructionline'].map((name, i) => (
                            <div key={i} className="h-12 px-4 flex items-center justify-center border border-[var(--border-color)] rounded bg-white text-xs font-bold text-[var(--text-muted)] grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all">
                                {name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
