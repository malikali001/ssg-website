import { Metadata } from 'next';
import ModernSlaveryContent from './ModernSlaveryContent';

export const metadata: Metadata = {
    title: 'Modern Slavery Statement | SSG Support Services Group LTD',
    description: 'SSG Support Services Group LTD\'s commitment to preventing modern slavery and human trafficking in our business and supply chains.',
    keywords: 'modern slavery, human trafficking, ethical business, compliance, SSG',
};

export default function ModernSlaveryStatementPage() {
    return <ModernSlaveryContent />;
}
