import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ssgukltd.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/about',
        '/contact-us',
        '/get-a-quote',
        '/careers',
        '/case-studies',
        '/awards-recognition',
        '/esg',
        '/services',
        '/services/security/manned-guarding',
        '/services/security/mobile-patrols',
        '/services/security/k9-units',
        '/services/security/key-holding',
        '/services/security/electronic-security',
        '/services/security/concierge',
        '/services/facilities/reception',
        '/services/soft-services',
        '/sectors/retail',
        '/sectors/construction',
        '/sectors/corporate',
        '/sectors/healthcare',
        '/sectors/logistics',
        '/sectors/education',
        '/sectors/hospitality',
        '/sectors/public-sector',
        '/privacy-policy',
        '/terms-and-conditions',
        '/cookie-policy',
        '/modern-slavery-statement',
    ];

    return routes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route.startsWith('/services') || route.startsWith('/sectors') ? 0.8 : 0.6,
    }));
}
