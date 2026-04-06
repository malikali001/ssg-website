'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ShieldCheck, FileCheck, Lock, RefreshCw, Users, Award, Landmark, Globe, Leaf, HardHat, Heart, BadgeCheck, Accessibility, Eye, LayoutGrid, List, X } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import CertificateModal from '@/components/ui/CertificateModal';

const qualityAccreditations = [
    {
        title: 'SIA Approved Contractor',
        icon: ShieldCheck,
        logo: '/certifications/sia.png',
        certificate: '/certifications/acs-certificate-2026.pdf',
        content: [
            'SSG Support Services Group LTD is specialists in provision of Manned guarding, Door Supervision, Security Guarding, Out of Hours Support, Concierge, Front of House Reception, Retail, Porter, Event Security, Mobile Response, CCTV Monitoring, Key Holding and Alarm Response.',
            'SSG is on the (SIA) Approved Contractor Scheme (Certificate Number: SSSUGRSC01), for the provision of:  BS7499 (Security Guarding & Mobile Patrols), BS7858 (Screening & Vetting), BS7984 (Key Holding & Alarm Response) and BS7958 (Public Space Surveillance \u2013CCTV Monitoring)',
            'SSG has achieved a score of +128 out of +145 at its recent Annual SIA Audit.',
        ],
    },
    {
        title: 'ISO 9001:2015 (Quality Management System)',
        icon: FileCheck,
        logo: '/certifications/iso9001.png',
        certificate: '/certifications/iso-9001-2015.pdf',
        content: [
            'SSG is approved to ISO 9001:2015(UKAS) (Certificate Number: 14234).  This internationally recognised accreditation is certified by ISOQAR (UKAS) and highlights our commitment towards providing our customers with a quality service that is achieved through our operating and business procedures and is implemented via our Quality Management System. The ISO9001 accreditation includes the provision of:',
        ],
        list: [
            'BS7499 Code of Practice of Security Guarding',
            'BS7858 Code of Practice of Screening & Vetting',
            'BS7984 Code of Practice of Key Holding & Alarm Response',
            'BS7958 Code Of Practise of Public Space Surveillance (CCTV)',
            'BS10800 \u2013 Provision Of Security Services',
        ],
    },
    {
        title: 'ISO 27001:2013 (The Information Security Management System)',
        icon: Lock,
        logo: '/certifications/iso27001.jpg',
        certificate: '/certifications/iso-27001-2022.pdf',
        content: [
            'SSG is approved to the ISO 27001:2013 The Information Security Management Systems. (Certificate Number: 14234-EMS-001) (UKAS).',
            'ISO 27001 demonstrates to our existing and potential clients that SSG SUPPORT SERVICES GROUP LTD has established and implemented best-practice information security processes, to ensure the safeguarding of your valuable, sensitive, and confidential information assets.  ISO 27001: The Information Security Management helps us identify the risk to your important information and put in place the appropriate controls and have the ability to differentiate ourselves in the market place whilst maintaining the Confidentiality, Integrity & Availability of both client and our own information.',
        ],
    },
    {
        title: 'ISO 22301:2012 Business Continuity Management System',
        icon: RefreshCw,
        logo: '/certifications/iso22301.jpg',
        certificate: '/certifications/iso-22301-2019.pdf',
        content: [
            'SSG is approved to the ISO 22301:2012 The Business Continuity Management Systems. (Certificate Number: 14234-EMS-001) (UKAS).',
            'The ISO 22301:2012 business continuity standard has been designed to assist SSG in the implementation of a business continuity management system (BCMS) that is appropriate to our needs and meets our stakeholders\u2019 requirements.  SSG SUPPORT SERVICES GROUP LTD BCMS needs are shaped by the following: its size and structure, its stakeholders, and regulatory, industry and organisational factors.',
            'SSG BCMS ensures job continuity and also has the ability to give our clients confidence and reassurance that in the event of the need to invocate the business continuity plan this will have no impact on the service provided to them throughout the contract.',
        ],
    },
    {
        title: 'Community Safety Accreditations Scheme',
        icon: Users,
        logo: '/certifications/cssa.png',
        content: [
            'SSG is one of the few companies, approved as a company suitable to provide staff under the auspices of the Community Safety Accreditations Scheme (CSAS).  CSAS is a voluntary scheme under which Chief constables can choose to accredit employed already working in roles which contribute to maintain and improving community safety with limited but targeted powers. These roles include neighbourhood wardens, hospital security guards, park wardens, shopping mall guards and train guards. SSG works closely with Metropolitan Police to Tackle Anti-Social Behaviour. All CSAS schemes are managed, monitored and assessed at a local level by the Police Chief Constable.',
        ],
    },
    {
        title: 'Avetta',
        icon: Award,
        logo: '/certifications/avetta.png',
        content: [
            'SSG is the member of Avetta. SSG has gone through a rigorous audit to assess their capability, competence and compliance, which demonstrate our compliance and improvement against leading standard of excellence.',
        ],
    },
    {
        title: 'Peninsula',
        icon: Landmark,
        logo: '/certifications/peninsula.png',
        content: [
            'SSG is proud to be a member of Peninsula (Membership Number: SUP094). Being a Peninsula member, SSG has the most trusted HR, employment law and health & safety consultants in the UK, protecting our business. Membership of Peninsula has a range of benefits, including:',
        ],
        list: [
            'Free advice line open 24/7, 365 (HR, Employment Law and Health & Safety)',
            'Bespoke contracts & documents',
            'Free indemnity insurance',
            'Legal representation in tribunals',
        ],
    },
    {
        title: 'Information Commissioner\u2019s Office (Data Protection)',
        icon: Globe,
        content: [
            'SSG is registered with the Information Commissioner\u2019s Office under registration reference : ZA 132086',
        ],
    },
];

const environmentalAccreditations = [
    {
        title: 'ISO 14001:2015 Environmental Management System',
        icon: Leaf,
        logo: '/certifications/iso14001.png',
        certificate: '/certifications/iso-14001-2015.pdf',
        content: [
            'SSG is approved to ISO 14001:2015 Environmental Management System standard. (Certificate Number: 14234-EMS-001) (UKAS). We\u2019re committed to providing our customers with a high-quality service whilst reducing the impact of our activities on the environment. Our EMS programme focuses on the environmental issues closely aligned with our business and geared towards improved environmental performance throughout all our offices.',
        ],
    },
];

const healthSafetyAccreditations = [
    {
        title: 'ISO 45001:2018 Occupational Health and Safety Management Systems',
        icon: HardHat,
        logo: '/certifications/iso45001.jpg',
        certificate: '/certifications/iso-45001-2018.pdf',
        content: [
            'SSG is approved to the ISO 45001:2018 Occupational Health and Safety Management Systems. (UKAS)(Certificate Number: 14234-EMS-001). which shows our commitment and dedication to providing safe working conditions for our staff.',
        ],
    },
    {
        title: 'RoSPA',
        icon: Heart,
        logo: '/certifications/rospa.png',
        content: [
            'SSG Support Services Group LTD is is a RoSPA member. RoSPA is committed to preventing accidents, all the while seeking to strike the right balance between prescription and individual choice. RoSPA is the UK\u2019s second largest health & safety organisation after the HSE.',
        ],
    },
    {
        title: 'Safe Contractor',
        icon: BadgeCheck,
        logo: '/certifications/safecontractor.png',
        content: [
            'SSG Support Services Group LTD is Safe contractor Plus accredited and is committed to the safety of its staff and clients at all times. Safe Contractor are dedicated to promoting higher standards of competence and compliance through the provision of relevant industry specific and tailored health and safety Environment, Quality , Equality and Diversity assessments for all professions and sectors.',
            'Safe Contractor Plus has been designed to enable us to collect insights into a social, ethical and sustainable practices and hassle free.',
            'Safe Contractor Plus is enable us to:',
        ],
        list: [
            'Review the corporate social responsibility (CSR) values of your contractor base',
            'Ensure SSG CSR values are underpinned by those of your contractors',
            'Take any necessary actions to protect you brand and develop a culture of responsible business',
            'Demonstrate compliance with ISO 9001 and ISO 14001',
            'Centralise your contractor ethical, sustainable and compliance data into one place',
        ],
    },
    {
        title: 'Disability Confident Committed',
        icon: Accessibility,
        logo: '/certifications/disability-confident.png',
        content: [
            'SSG Support Services Group LTD DCS032384 is Disability Confident Committed.',
            'Disability Confident organisations play a leading role in changing attitudes for the better. They\u2019re changing behaviour and cultures in their own businesses, networks and communities, and reaping the benefits of inclusive recruitment practices.',
            'As a Disability Confident Committed Employer we have committed to:',
        ],
        list: [
            'ensure our recruitment process is inclusive and accessible',
            'communicating and promoting vacancies',
            'Offering an interview to disabled people who meet the minimum criteria for the job',
            'Anticipating and providing reasonable adjustments as required',
            'supporting any existing employee who acquires a disability or long term health condition, enabling them to stay at work',
            'At least one activity that will make a difference for disabled people',
        ],
        footer: 'Period of award: 09/06/2022 to 05/06/2025\nIssue date: 09/06/2022',
    },
];

interface Accreditation {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    logo?: string;
    certificate?: string;
    content: string[];
    list?: string[];
    footer?: string;
}

function AccreditationCard({ item, onViewCertificate }: { item: Accreditation; onViewCertificate: (pdf: string, title: string) => void }) {
    const Icon = item.icon;
    return (
        <div className="bg-[var(--section-light)] rounded-xl p-6 sm:p-7 border border-[var(--border-color)] hover:shadow-lg transition-all duration-300">
            <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-[var(--signal-red)]/10 rounded-full flex-shrink-0">
                        <Icon className="w-5 h-5 text-[var(--signal-red)]" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--deep-navy)]">{item.title}</h3>
                </div>
                {item.logo && (
                    <Image
                        src={item.logo}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0"
                    />
                )}
            </div>
            <div className="space-y-3">
                {item.content.map((para, i) => (
                    <p key={i} className="text-[var(--text-muted)] text-sm leading-relaxed">{para}</p>
                ))}
                {item.list && (
                    <ul className="space-y-2 text-[var(--text-muted)] text-sm pl-1">
                        {item.list.map((li, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-[var(--signal-red)] rounded-full mt-1.5 flex-shrink-0" />
                                <span>{li}</span>
                            </li>
                        ))}
                    </ul>
                )}
                {item.footer && (
                    <p className="text-xs text-[var(--text-muted)] italic pt-2 border-t border-[var(--border-color)]">
                        {item.footer.split('\n').map((line, i) => (
                            <span key={i}>{line}{i === 0 && <br />}</span>
                        ))}
                    </p>
                )}
                {item.certificate && (
                    <button
                        onClick={() => onViewCertificate(item.certificate!, item.title)}
                        className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-[var(--signal-red)] hover:gap-3 transition-all cursor-pointer"
                    >
                        <Eye className="w-4 h-4" />
                        View Certificate
                    </button>
                )}
            </div>
        </div>
    );
}

function AccreditationSection({ title, color, items, onViewCertificate }: { title: string; color: string; items: Accreditation[]; onViewCertificate: (pdf: string, title: string) => void }) {
    return (
        <div>
            <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-8 rounded-full ${color}`} />
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--deep-navy)]">{title}</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                {items.map((item, idx) => (
                    <AccreditationCard key={idx} item={item} onViewCertificate={onViewCertificate} />
                ))}
            </div>
        </div>
    );
}

const allCertificates: (Accreditation & { category: string })[] = [
    ...qualityAccreditations.map((a) => ({ ...a, category: 'Quality' as const })),
    ...environmentalAccreditations.map((a) => ({ ...a, category: 'Environmental' as const })),
    ...healthSafetyAccreditations.map((a) => ({ ...a, category: 'Health & Safety' as const })),
].filter((a) => a.logo || a.certificate);

function CertificateListView({ items, onViewCertificate }: { items: typeof allCertificates; onViewCertificate: (pdf: string, title: string) => void }) {
    const [expanded, setExpanded] = useState<number | null>(null);
    const expandedRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (expanded !== null && expandedRef.current) {
            expandedRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [expanded]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setExpanded(null);
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, []);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 max-w-6xl mx-auto">
            {items.map((item, idx) => {
                const isExpanded = expanded === idx;
                const Icon = item.icon;

                return (
                    <div
                        key={idx}
                        ref={isExpanded ? expandedRef : undefined}
                        className={`transition-all duration-500 ease-in-out ${
                            isExpanded
                                ? 'col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 row-span-2'
                                : ''
                        }`}
                    >
                        {!isExpanded ? (
                            <button
                                onClick={() => setExpanded(idx)}
                                className="w-full bg-white rounded-xl border border-[var(--border-color)] p-5 sm:p-6 flex flex-col items-center gap-3 hover:shadow-lg hover:border-[var(--signal-red)]/20 transition-all duration-300 cursor-pointer group"
                            >
                                {item.logo ? (
                                    <Image
                                        src={item.logo}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--signal-red)]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-8 h-8 text-[var(--signal-red)]" />
                                    </div>
                                )}
                                <p className="text-xs sm:text-sm font-semibold text-[var(--deep-navy)] text-center leading-tight">
                                    {item.title}
                                </p>
                                <span className="text-[10px] font-medium text-[var(--text-muted)] uppercase tracking-wider">
                                    {item.category}
                                </span>
                            </button>
                        ) : (
                            <div className="bg-white rounded-2xl border border-[var(--border-color)] shadow-xl overflow-hidden animate-[fadeIn_0.3s_ease-out]">
                                <div className="flex flex-col md:flex-row">
                                    {/* Left — Image */}
                                    <div className="md:w-1/3 bg-[var(--section-light)] flex items-center justify-center p-8 sm:p-10">
                                        {item.logo ? (
                                            <Image
                                                src={item.logo}
                                                alt={item.title}
                                                width={200}
                                                height={200}
                                                className="w-32 h-32 sm:w-40 sm:h-40 object-contain animate-[scaleIn_0.4s_ease-out]"
                                            />
                                        ) : (
                                            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[var(--signal-red)]/10 flex items-center justify-center animate-[scaleIn_0.4s_ease-out]">
                                                <Icon className="w-16 h-16 text-[var(--signal-red)]" />
                                            </div>
                                        )}
                                    </div>
                                    {/* Right — Content */}
                                    <div className="flex-1 p-6 sm:p-8">
                                        <div className="flex items-start justify-between gap-4 mb-4">
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--signal-red)] mb-1 block">
                                                    {item.category}
                                                </span>
                                                <h3 className="text-lg font-bold text-[var(--deep-navy)]">{item.title}</h3>
                                            </div>
                                            <button
                                                onClick={() => setExpanded(null)}
                                                className="w-8 h-8 rounded-full bg-[var(--section-light)] flex items-center justify-center hover:bg-[var(--signal-red)] hover:text-white transition-colors flex-shrink-0 cursor-pointer"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <div className="space-y-3 mb-5">
                                            {item.content.map((para, i) => (
                                                <p key={i} className="text-[var(--text-muted)] text-sm leading-relaxed">{para}</p>
                                            ))}
                                            {item.list && (
                                                <ul className="space-y-2 text-[var(--text-muted)] text-sm pl-1">
                                                    {item.list.map((li, i) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <div className="w-1.5 h-1.5 bg-[var(--signal-red)] rounded-full mt-1.5 flex-shrink-0" />
                                                            <span>{li}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        {item.certificate && (
                                            <button
                                                onClick={() => onViewCertificate(item.certificate!, item.title)}
                                                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--signal-red)] hover:gap-3 transition-all cursor-pointer"
                                            >
                                                <Eye className="w-4 h-4" />
                                                View Certificate
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default function AccreditationsContent() {
    const [modal, setModal] = useState<{ pdf: string; title: string } | null>(null);
    const [view, setView] = useState<'card' | 'list'>('card');

    const handleViewCertificate = (pdf: string, title: string) => {
        setModal({ pdf, title });
    };

    return (
        <main className="min-h-screen">
            <PageHero
                badge="Accreditations"
                title="Our"
                subtitle="Accreditations"
                description="SSG has an established Integrated Quality Management System that is routinely audited by accredited certification bodies."
                imageSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
                ctaLabel="Contact Us"
                ctaHref="/contact-us"
            />

            {/* Intro + View Toggle */}
            <section className="bg-white">
                <div className="section-container">
                    <div className="max-w-4xl mx-auto text-center mb-8">
                        <p className="text-[var(--text-main)] leading-relaxed">
                            SSG has an established Integrated Quality Management System that is routinely audited by accredited certification bodies.  This independent audit process confirms that our business meets the requirements of our approvals and enable us to effectively achieve our planned results to deliver customer satisfaction. We can proudly say that, we are among UK 15 manned guarding companies who has achieved and implement fully integrated management system.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="inline-flex items-center bg-[var(--section-light)] rounded-lg p-1 border border-[var(--border-color)]">
                            <button
                                onClick={() => setView('card')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${
                                    view === 'card'
                                        ? 'bg-white text-[var(--deep-navy)] shadow-sm'
                                        : 'text-[var(--text-muted)] hover:text-[var(--deep-navy)]'
                                }`}
                            >
                                <LayoutGrid className="w-4 h-4" />
                                Detailed
                            </button>
                            <button
                                onClick={() => setView('list')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${
                                    view === 'list'
                                        ? 'bg-white text-[var(--deep-navy)] shadow-sm'
                                        : 'text-[var(--text-muted)] hover:text-[var(--deep-navy)]'
                                }`}
                            >
                                <List className="w-4 h-4" />
                                Certificates
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {view === 'card' ? (
                <section className="bg-white">
                    <div className="section-container pt-0">
                        <div className="max-w-6xl mx-auto space-y-16">
                            <AccreditationSection
                                title="Quality"
                                color="bg-[var(--signal-red)]"
                                items={qualityAccreditations}
                                onViewCertificate={handleViewCertificate}
                            />
                            <AccreditationSection
                                title="Environmental"
                                color="bg-green-500"
                                items={environmentalAccreditations}
                                onViewCertificate={handleViewCertificate}
                            />
                            <AccreditationSection
                                title="Health & Safety"
                                color="bg-blue-500"
                                items={healthSafetyAccreditations}
                                onViewCertificate={handleViewCertificate}
                            />
                        </div>
                    </div>
                </section>
            ) : (
                <section className="bg-[var(--section-light)]">
                    <div className="section-container">
                        <CertificateListView items={allCertificates} onViewCertificate={handleViewCertificate} />
                    </div>
                </section>
            )}

            {/* Certificate Modal */}
            <CertificateModal
                isOpen={modal !== null}
                onClose={() => setModal(null)}
                pdfSrc={modal?.pdf ?? ''}
                title={modal?.title ?? ''}
            />
        </main>
    );
}
