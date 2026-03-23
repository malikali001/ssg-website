import { Metadata } from 'next';
import SitemapContent from './SitemapContent';

export const metadata: Metadata = {
    title: 'Site Map | SSG Support Services Group LTD',
    description: 'Complete navigation guide to all pages and services on the SSG Support Services Group LTD website.',
    keywords: 'sitemap, navigation, site structure, SSG',
};

export default function SitemapPage() {
    return <SitemapContent />;
}
