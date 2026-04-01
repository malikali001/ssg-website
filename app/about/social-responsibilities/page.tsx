import type { Metadata } from 'next';
import SocialResponsibilitiesContent from './SocialResponsibilitiesContent';

export const metadata: Metadata = {
    title: 'Social Responsibilities | SSG UK Ltd',
    description: 'SSG Support Services Group is committed to supporting charities, community initiatives and employee wellbeing programmes.',
    keywords: ['Social Responsibility', 'CSR', 'Community', 'Charity', 'SSG'],
};

export default function SocialResponsibilitiesPage() {
    return <SocialResponsibilitiesContent />;
}
