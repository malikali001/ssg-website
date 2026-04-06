'use client';

import { useState } from 'react';
import {
    FileText,
    Shield,
    Leaf,
    Heart,
    Users,
    Scale,
    Lock,
    RefreshCw,
    Megaphone,
    BarChart3,
    HardHat,
    Eye,
    Download,
} from 'lucide-react';
import PageHero from '@/components/sections/PageHero';
import CertificateModal from '@/components/ui/CertificateModal';

interface PolicyDocument {
    title: string;
    category: string;
    icon: React.ComponentType<{ className?: string }>;
    file: string;
}

const policies: PolicyDocument[] = [
    {
        title: 'Modern Slavery Policy',
        category: 'Governance',
        icon: Shield,
        file: '/policies/modern-slavery-policy.pdf',
    },
    {
        title: 'Quality Policy',
        category: 'Quality',
        icon: FileText,
        file: '/policies/quality-policy.pdf',
    },
    {
        title: 'Ethical Policy',
        category: 'Governance',
        icon: Scale,
        file: '/policies/ethical-policy.pdf',
    },
    {
        title: 'Business Continuity Management System Policy',
        category: 'Operations',
        icon: RefreshCw,
        file: '/policies/business-continuity-management-system-policy.pdf',
    },
    {
        title: 'Corporate Social Responsibility Policy',
        category: 'Sustainability',
        icon: Users,
        file: '/policies/corporate-social-responsibility-policy.pdf',
    },
    {
        title: 'Environmental Policy',
        category: 'Sustainability',
        icon: Leaf,
        file: '/policies/environmental-policy.pdf',
    },
    {
        title: 'Equality and Diversity Policy',
        category: 'Governance',
        icon: Users,
        file: '/policies/equality-and-diversity-policy.pdf',
    },
    {
        title: 'Health & Safety Policy',
        category: 'Health & Safety',
        icon: Heart,
        file: '/policies/health-safety-policy.pdf',
    },
    {
        title: 'Information Security Management System Policy',
        category: 'Operations',
        icon: Lock,
        file: '/policies/information-security-management-system-policy.pdf',
    },
    {
        title: 'Occupational Health & Safety Policy',
        category: 'Health & Safety',
        icon: HardHat,
        file: '/policies/occupational-health-safety-policy.pdf',
    },
    {
        title: 'Health and Safety Policy Arrangements',
        category: 'Health & Safety',
        icon: Heart,
        file: '/policies/health-and-safety-policy-arrangements.pdf',
    },
    {
        title: 'Health & Safety Policy \u2013 Statement of Intent',
        category: 'Health & Safety',
        icon: Eye,
        file: '/policies/health-safety-policy-statement-of-intent.pdf',
    },
    {
        title: 'Guidelines on Talking to the Media',
        category: 'Operations',
        icon: Megaphone,
        file: '/policies/guidelines-on-talking-to-the-media.pdf',
    },
    {
        title: 'SSG Support Services Group Accounts \u2013 July 2021',
        category: 'Corporate',
        icon: BarChart3,
        file: '/policies/ssg-accounts-july-2021.pdf',
    },
    {
        title: 'Carbon Reduction Plan',
        category: 'Sustainability',
        icon: Leaf,
        file: '/policies/carbon-reduction-plan.pdf',
    },
];

const categories = [...new Set(policies.map(p => p.category))];

export default function PoliciesPage() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalPdf, setModalPdf] = useState('');
    const [modalTitle, setModalTitle] = useState('');

    const filtered = activeCategory
        ? policies.filter(p => p.category === activeCategory)
        : policies;

    const handleView = (policy: PolicyDocument) => {
        setModalPdf(policy.file);
        setModalTitle(policy.title);
        setModalOpen(true);
    };

    return (
        <main className="min-h-screen bg-white">
            <PageHero
                badge="Documents"
                title="Policies &"
                subtitle="Documents"
                description="Access our corporate policies, compliance documents and governance frameworks. All documents are available to view online or download."
                imageSrc="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80"
            />

            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-8 sm:mb-10">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                                activeCategory === null
                                    ? 'bg-[var(--signal-red)] text-white shadow-sm'
                                    : 'bg-[var(--section-light)] text-[var(--text-main)] hover:bg-gray-200'
                            }`}
                        >
                            All Documents
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                                    activeCategory === cat
                                        ? 'bg-[var(--signal-red)] text-white shadow-sm'
                                        : 'bg-[var(--section-light)] text-[var(--text-main)] hover:bg-gray-200'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Document Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filtered.map(policy => {
                            const Icon = policy.icon;
                            return (
                                <div
                                    key={policy.file}
                                    className="group rounded-2xl border border-[var(--border-color)] bg-white p-6 hover:border-[var(--signal-red)] hover:shadow-lg transition-all"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-[var(--section-light)] flex items-center justify-center flex-shrink-0 group-hover:bg-red-50 transition-colors">
                                            <Icon className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--signal-red)] transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-[var(--deep-navy)] leading-snug">
                                                {policy.title}
                                            </h3>
                                            <span className="text-xs text-[var(--text-muted)] mt-1 inline-block">
                                                {policy.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => handleView(policy)}
                                            className="flex-1 text-center px-4 py-2 rounded-lg bg-[var(--section-light)] text-sm font-semibold text-[var(--deep-navy)] hover:bg-[var(--signal-red)] hover:text-white transition-all"
                                        >
                                            View
                                        </button>
                                        <a
                                            href={policy.file}
                                            download
                                            className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--section-light)] text-[var(--text-muted)] hover:bg-[var(--signal-red)] hover:text-white transition-all"
                                            title={`Download ${policy.title}`}
                                        >
                                            <Download className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CertificateModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                pdfSrc={modalPdf}
                title={modalTitle}
            />
        </main>
    );
}
