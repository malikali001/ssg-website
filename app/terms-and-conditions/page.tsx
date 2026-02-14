import { Metadata } from 'next';
import TermsContent from './TermsContent';

export const metadata: Metadata = {
    title: 'Terms & Conditions | SSG Support Services Group LTD',
    description: 'Terms and conditions governing the use of the SSG Support Services Group LTD website and services.',
    keywords: 'terms and conditions, legal, website terms, SSG',
};

export default function TermsAndConditionsPage() {
    return <TermsContent />;
}
