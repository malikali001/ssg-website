import { Metadata } from 'next';
import CookiePolicyContent from './CookiePolicyContent';

export const metadata: Metadata = {
    title: 'Cookie Policy | SSG Support Services Group LTD',
    description: 'Learn about how SSG Support Services Group LTD uses cookies and similar technologies on our website.',
    keywords: 'cookie policy, cookies, tracking, analytics, SSG',
};

export default function CookiePolicyPage() {
    return <CookiePolicyContent />;
}
