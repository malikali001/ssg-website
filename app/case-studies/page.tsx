'use client';

import ServiceHero from "@/components/services/ServiceHero";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import ServiceCTA from "@/components/services/ServiceCTA";
import TrustBar from "@/components/sections/TrustBar";

export default function CaseStudiesPage() {
    const cases = [
        {
            title: "Eliminating Shrinkage at Major Retail Park",
            client: "National Retail Chain",
            sector: "Retail",
            summary: "Implementing a data-driven store detective strategy that identified internal theft rings and reduced stock loss significantly within 3 months.",
            imageSrc: "/images/retail-hero.jpg",
            stats: [
                { label: "Shrinkage", value: "-45%" },
                { label: "Recovery", value: "£1.2M" }
            ],
            link: "/contact"
        },
        {
            title: "Securing a £500M Infrastructure Project",
            client: "Tier 1 Contractor",
            sector: "Construction",
            summary: "Deploying biometric access control and perimeter detection for a high-risk city center development, ensuring 100% CSCS compliance.",
            imageSrc: "/images/construction-hero.jpg",
            stats: [
                { label: "Incidents", value: "0" },
                { label: "Compliance", value: "100%" }
            ],
            link: "/contact"
        },
        {
            title: "Visitor Management for HQ Redesign",
            client: "FinTech Corp",
            sector: "Corporate",
            summary: "Replacing legacy systems with a seamless digital concierge experience, improving visitor flow and front-of-house security.",
            imageSrc: "/images/corporate-hero.jpg",
            stats: [
                { label: "Check-in", value: "30s" },
                { label: "Satisfaction", value: "5/5" }
            ],
            link: "/contact"
        },
        {
            title: "Example: Hospital A&E Security",
            client: "NHS Trust",
            sector: "Healthcare",
            summary: "Providing conflict management trained officers to support clinical staff in a high-pressure A&E department.",
            imageSrc: "/images/healthcare-hero.jpg",
            stats: [
                { label: "Assaults", value: "-60%" },
                { label: "Support", value: "24/7" }
            ],
            link: "/contact"
        }
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            <ServiceHero
                title="Success Stories."
                subtitle="Proven Results."
                description="Real-world examples of how SSG Security delivers operational excellence and measurable value across diverse sectors."
                imageSrc="/images/hero-office.jpg"
            />

            <div className="relative z-20">
                <TrustBar />
            </div>

            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {cases.map((study, idx) => (
                        <CaseStudyCard key={idx} {...study} />
                    ))}
                </div>
            </section>

            <ServiceCTA />
        </main>
    );
}
