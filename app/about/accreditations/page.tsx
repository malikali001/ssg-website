import type { Metadata } from 'next';
import AccreditationsContent from './AccreditationsContent';

export const metadata: Metadata = {
    title: 'Our Accreditations | SSG UK Ltd',
    description: 'SSG accreditations and certifications — SIA Approved, ISO 9001, ISO 27001, ISO 22301, ISO 14001, ISO 45001, Safe Contractor and more.',
    keywords: ['Accreditations', 'ISO 9001', 'SIA Approved', 'ISO 14001', 'ISO 45001', 'SSG'],
};

export default function AccreditationsPage() {
    return <AccreditationsContent />;
}
