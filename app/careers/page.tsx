import type { Metadata } from 'next';
import CareersContent from './CareersContent';

export const metadata: Metadata = {
    title: 'Careers | SSG UK Ltd',
    description: 'Join SSG UK Ltd. Explore security career opportunities including Security Officer, Door Supervisor, CCTV Operator, and more across the UK.',
    keywords: ['Security Careers', 'SIA Jobs', 'Security Officer Jobs UK', 'SSG Careers'],
    openGraph: {
        title: 'Careers | SSG UK Ltd',
        description: 'Build your career in professional security with SSG UK Ltd.',
        type: 'website',
    },
};

export default function CareersPage() {
    return <CareersContent />;
}
