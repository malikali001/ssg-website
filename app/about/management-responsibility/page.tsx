import type { Metadata } from 'next';
import { ShieldCheck, UserCheck, FileCheck, ClipboardList, Megaphone, CalendarCheck, Fingerprint, Building, HardHat, MessageSquare } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
    title: 'Management Responsibility | SSG UK Ltd',
    description: 'SSG UK Ltd management responsibility framework — quality management, customer focus, planning, and ISO 9001 compliance.',
    keywords: ['Management Responsibility', 'Quality Management', 'ISO 9001', 'SSG'],
};

const managementResponsibilities = [
    {
        title: 'Commitment',
        icon: ShieldCheck,
        content: 'The Chief Executive Officer is committed to the quality management system and its implementation throughout the organisation and supports the Quality Management Representative in all aspects. The Chief Executive Officer promotes and champions a culture for communicating throughout the organisation the importance of meeting customer as well as statutory and regulatory requirements.',
    },
    {
        title: 'Customer Focus',
        icon: UserCheck,
        content: 'The Sales Manager is responsible for securing new business and ensuring the requirements of the Client comply with the objectives of SSG. The Operations Director is responsible for ensuring Customer requirements are determined during initial site surveys and documented in the Assignment Instructions. The Directors and Management are jointly responsible for ensuring Customer satisfaction is enhanced wherever possible.',
    },
    {
        title: 'Quality Policy',
        icon: FileCheck,
        content: 'The Chief Executive Officer is responsible for the creation, content, implementation and communication of the Quality Policy. The Managing Director is responsible for ensuring the Quality Policy is appropriate, includes a commitment to continual improvement, provides a framework for the quality objectives and is reviewed for continuing suitability.',
    },
    {
        title: 'Planning',
        icon: ClipboardList,
        content: 'The Chief Executive Officer is responsible for establishing Quality Objectives at relevant levels and functions within the organisation. The Screening Manager acting as the Quality Management Representative is responsible for the maintenance and implementation of the quality management system, supported by the Directors and delegating where appropriate to others. The Directors are jointly responsible for ensuring the Quality Management Representative is made aware of any changes to the business that are to be reflected in the quality management system are also communicated during management review meetings to other levels of management. The Directors are responsible for ensuring the planning of product realisation considers the quality objectives of the company. The Chief Executive Officer is responsible for planning staff deployment that meets the work loads of the business to ensure all client requirements are met and their needs fulfilled.',
    },
    {
        title: 'Responsibility, Authority & Communication',
        icon: Megaphone,
        content: 'The Directors are responsible for ensuring all other senior members of staff are aware of their responsibilities and authorities. Appropriate documentation and training provides evidence of this. The Operations Director is responsible for ensuring all Security Officers are aware of their responsibility and authority. Appropriate documentation and training provides this. The Quality Management Representative is fully aware of the requirements of the position as documented within ISO 9001:2015. The Operations Director is responsible for communicating to the Client any post contract activities and requirements documenting where required.',
    },
    {
        title: 'Management Review',
        icon: CalendarCheck,
        content: 'The Quality Management Representative is responsible for scheduling and chairing Management Review meetings that comply with the requirements of ISO 9001. Meetings will be attended by all Directors, management and internal auditors. The output from the meeting will satisfy the requirements of ISO 9001:2000 and will be documented via detailed minutes which will identify persons responsible for implementing and actions identified. It is the Quality Management Representatives responsibility to ensure any required interim meetings are set at appropriate times.',
    },
    {
        title: 'Identification and Traceability',
        icon: Fingerprint,
        content: 'The Operations Director is responsible for ensuring the organisations policy on Identification and Traceability is maintained. All clients shall be uniquely identified and recorded. All employees shall be uniquely identified and carry a personal Identification Card. Unique Reference Numbers and/or Code words will be utilised in emergency procedures. All quality documentation and records will be identified with the name or subject of the record or event and be traceable via effective filing and storage systems. All visitors to the company offices will be identified, recorded and traceable from entries made within the visitors book.',
    },
    {
        title: 'Infrastructure',
        icon: Building,
        content: 'The Chief Executive Officer ensures the infrastructure is maintained with adequate resources provided to operate the business efficiently. The Operations Manager is responsible for ensuring all other standards and codes of practice appropriate to the services provided by the organisation and referred to in the quality manual are adhered to.',
    },
    {
        title: 'Work Environment',
        icon: HardHat,
        content: 'The Operations Director operating with a team of management in the organisation tree document will ensure the work environment is maintained in accordance with BS 7499 and is also responsible for ensuring the Health and Safety Policy as authorised by the Chief Executive Officer and associated legislation is adhered to.',
    },
    {
        title: 'Customer Communication',
        icon: MessageSquare,
        content: 'Status of the Contract review procedure. Any events which may effect the delivery of service to clients. Procedure for clients to report any complaints. Before takeover or acquisition of any security contracts from another provider. Response to all queries following tender or quotation process.',
    },
];

export default function ManagementResponsibilityPage() {
    return (
        <main className="min-h-screen">
            <PageHero
                badge="Quality Management"
                title="Management"
                subtitle="Responsibility"
                description="Our quality management framework ensures accountability, compliance and continuous improvement at every level of the organisation."
                imageSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
                ctaLabel="Contact Us"
                ctaHref="/contact-us"
            />

            <section className="bg-white">
                <div className="section-container">
                    <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
                        {managementResponsibilities.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-[var(--section-light)] rounded-xl p-6 sm:p-7 border border-[var(--border-color)] hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="inline-flex items-center justify-center w-10 h-10 bg-[var(--signal-red)]/10 rounded-full flex-shrink-0">
                                            <Icon className="w-5 h-5 text-[var(--signal-red)]" />
                                        </div>
                                        <h3 className="text-base font-bold text-[var(--deep-navy)]">{item.title}</h3>
                                    </div>
                                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{item.content}</p>
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
