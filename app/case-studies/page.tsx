import type { Metadata } from 'next';
import CaseStudiesContent from './CaseStudiesContent';

export const metadata: Metadata = {
    title: 'Case Studies | SSG UK Ltd',
    description: 'Real-world success stories showcasing how SSG delivers measurable security results across retail, construction, corporate, and healthcare sectors.',
    keywords: ['Security Case Studies', 'SSG Success Stories', 'Security Results UK'],
    openGraph: {
        title: 'Case Studies | SSG UK Ltd',
        description: 'Proven results across diverse sectors. See how SSG Security delivers operational excellence.',
        type: 'website',
    },
};

export default function CaseStudiesPage() {
    return <CaseStudiesContent />;
}
