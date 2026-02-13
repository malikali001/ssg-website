import { Metadata } from 'next';
import { awards } from '@/data/awards';
import AwardBlock from '@/components/ui/AwardBlock';

export const metadata: Metadata = {
    title: 'Awards & Recognition | SSG',
    description: 'Recognizing excellence, leadership, and industry impact. Explore the awards and accolades earned by SSG and its team.',
};

export default function AwardsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 bg-white overflow-hidden border-b border-slate-100">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-white pointer-events-none" />
                <div className="section-container relative z-10 text-center max-w-4xl mx-auto">
                    <span className="text-[--color-signal-red] font-bold tracking-wider uppercase text-sm mb-4 block">
                        Excellence
                    </span>
                    <h1 className="text-4xl md:text-6xl font-montserrat font-black text-[--color-deep-navy] mb-6 leading-tight">
                        Awards & <span className="text-[--color-signal-red]">Recognition</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                        Recognizing excellence, leadership, and industry impact.
                    </p>
                </div>
            </section>

            {/* Awards List */}
            <section className="py-16 md:py-24">
                <div className="section-container">
                    <div className="space-y-12">
                        {awards.map((award) => (
                            <AwardBlock key={award.id} award={award} layout="default" />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
