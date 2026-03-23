import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Get a Quote | SSG UK Ltd',
    description: 'Request a free, no-obligation security or facilities management quote from SSG UK Ltd. Tell us your requirements and we will respond promptly.',
    keywords: ['Security Quote', 'Facilities Management Quote', 'SSG Quote', 'Free Security Quote UK'],
    openGraph: {
        title: 'Get a Quote | SSG UK Ltd',
        description: 'Request a free security or facilities management quote from SSG UK Ltd.',
        type: 'website',
    },
};

export default function GetAQuoteLayout({ children }: { children: React.ReactNode }) {
    return children;
}
