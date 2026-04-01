import type { Metadata } from 'next';
import { Target, Users, Lightbulb, Flame, Zap, MessageCircle } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
    title: 'About Us | SSG UK Ltd',
    description: 'Learn about SSG UK Ltd - elite security and facilities management with a commitment to ESG and compliance excellence.',
    keywords: ['About SSG', 'Security Company UK', 'ESG', 'Compliance', 'SIA Approved'],
};

const spiritValues = [
    {
        title: 'Candour',
        tagline: 'We will be open and honest with ourselves and others.',
        description: 'We value and respect candour, encouraging open and honest feedback recognizing that our reputation and the trust people place in us depends on being honest with ourselves and others.',
        icon: MessageCircle,
        color: 'blue',
    },
    {
        title: 'Collaboration',
        tagline: 'We will work as a team and succeed together.',
        description: 'We put the needs of the team above our own, respect the role others play and work collaboratively to ensure we achieve our vision.',
        icon: Users,
        color: 'green',
    },
    {
        title: 'Opportunity',
        tagline: 'For people to succeed.',
        description: 'We will inspire, support and invest in our people who will share in our success. We will provide the opportunity, inspiration, investment and support to enable our people to realise their full potential because they belong to our family and are core to our success.',
        icon: Lightbulb,
        color: 'amber',
    },
    {
        title: 'Relentless',
        tagline: 'Desire to succeed.',
        description: 'We are driven to be the best. We have a relentless desire to succeed, be the best, and deliver superior services which create long-term value for the business and our customers.',
        icon: Flame,
        color: 'red',
    },
    {
        title: 'Disruptive Innovation',
        tagline: 'We will continually challenge convention.',
        description: 'We will continually challenge the status quo, push boundaries and utilise leading edge technology, to optimize how we work, to deliver superior value-added services.',
        icon: Zap,
        color: 'purple',
    },
];

const missionValues = [
    'A work environment for our employees that encourages good performance and rewards individual achievement.',
    'Listen to all concerned to ensure we get things right, first time, every time.',
    'Never stop seeking new ways of improving our business for the benefit of all those associated with it.',
    'Generate an acceptable return on investment thereby enabling growth and maintaining stability.',
];

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* Hero */}
            <PageHero
                badge="About Us"
                title="SSG Support"
                subtitle="Services Group"
                description="A nationally operating, SIA approved security company passionate about protecting people, property and premises."
                imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
                ctaLabel="Get in Touch"
                ctaHref="/contact-us"
            />

            {/* Company Profile — Focusing on What Matters */}
            <section className="bg-white">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--signal-red)] mb-3">
                                Company Profile &amp; Passion
                            </span>
                            <h2 className="font-bold text-[var(--deep-navy)] mb-4">
                                Focusing on <span className="text-[var(--accent-amber)]">What Matters</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-[var(--text-main)] leading-relaxed">
                            <p>
                                SSG Support Services Group is rapidly expanding within the security manned guarding industry. Our nationwide operations and workforce is supported by the 24/7 SSG control team based in London to ensure the quality of service surpasses client expectations.
                            </p>
                            <p>
                                We understand the importance within the retail, corporate and commercial industry of balancing essential security needs with the highest levels of customer care and staff protection, providing a secure and friendly environment.
                            </p>
                            <p>
                                Our workforces are the day to day ambassadors of SSG. Therefore we have invested heavily in selecting, vetting, training and retaining the right SIA trained security officers to share initiatives with our clients by offering services that add value, remove costs and improve productivity.
                            </p>
                            <p>
                                SSG are proud of our distinctive culture and core values that have cascaded through the organisation. The entire workforce is passionate on how we conduct our business and help develop positive relationships with all staff and clients. Our carefully-developed business strategy makes sure we offer high quality security services at competitive rates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="relative bg-[var(--section-dark)] overflow-hidden">
                <div className="absolute inset-0 dotted-bg opacity-20" />
                <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 py-16 lg:py-24">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--accent-amber)]/15 mb-5">
                                <Target className="w-7 h-7 text-[var(--accent-amber)]" />
                            </div>
                            <h2 className="font-bold text-white mb-4">
                                Mission Statement
                            </h2>
                        </div>

                        <div className="space-y-6 text-white/80 leading-relaxed text-center">
                            <p>
                                SSG Support Services Group Ltd is driven by a desire to provide a quality of service to all clients that can be considered in best in class.
                            </p>
                            <p>
                                We will motivate and reward our staff to ensure they all focus on the aspects of service that contribute to our success.
                            </p>
                        </div>

                        <div className="mt-10 bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8">
                            <p className="text-white font-semibold text-center mb-6">
                                Our Security Officers will provide security of the highest order to deter crime and prevent incidents of damage, loss or harm to the people, property or premises that they protect.
                            </p>
                            <p className="text-white/60 text-sm text-center mb-6">
                                To achieve our mission we must implement and follow business values and work ethics:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {missionValues.map((value, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                                        <div className="w-6 h-6 rounded-full bg-[var(--accent-amber)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <span className="text-[var(--accent-amber)] text-xs font-bold">{idx + 1}</span>
                                        </div>
                                        <p className="text-white/80 text-sm leading-relaxed">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The SSG Spirit */}
            <section className="bg-[var(--section-light)]">
                <div className="section-container">
                    <div className="text-center mb-12">
                        <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--signal-red)] mb-3">
                            Our Core Values
                        </span>
                        <h2 className="font-bold text-[var(--deep-navy)]">
                            The SSG <span className="text-[var(--accent-amber)]">Spirit</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
                        {spiritValues.map((val, idx) => {
                            const Icon = val.icon;
                            const colorMap: Record<string, { bg: string; text: string }> = {
                                blue: { bg: 'bg-blue-500/10', text: 'text-blue-600' },
                                green: { bg: 'bg-green-500/10', text: 'text-green-600' },
                                amber: { bg: 'bg-amber-500/10', text: 'text-amber-600' },
                                red: { bg: 'bg-red-500/10', text: 'text-red-600' },
                                purple: { bg: 'bg-purple-500/10', text: 'text-purple-600' },
                            };
                            const colors = colorMap[val.color];
                            return (
                                <div
                                    key={idx}
                                    className={`bg-white rounded-xl p-6 sm:p-7 border border-[var(--border-color)] hover:shadow-lg transition-all duration-300 ${idx === 4 ? 'sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none' : ''}`}
                                >
                                    <div className={`inline-flex items-center justify-center w-12 h-12 ${colors.bg} rounded-full mb-5`}>
                                        <Icon className={`w-6 h-6 ${colors.text}`} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[var(--deep-navy)] mb-1">{val.title}</h3>
                                    <p className="text-sm font-semibold text-[var(--signal-red)] mb-3">{val.tagline}</p>
                                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{val.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Accreditations */}
            <section className="bg-[var(--section-light)] border-y border-[var(--border-color)] py-12">
                <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16 text-center">
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
