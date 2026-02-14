import { Metadata } from 'next';
import PrivacyPolicyContent from './PrivacyPolicyContent';

export const metadata: Metadata = {
    title: 'Privacy Policy | SSG Support Services Group LTD',
    description: 'Learn how SSG Support Services Group LTD collects, uses, and protects your personal information in compliance with GDPR and UK data protection laws.',
    keywords: 'privacy policy, GDPR, data protection, personal information, SSG',
};

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyContent />;
}
