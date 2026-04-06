import type { Metadata } from 'next';
import { Quote } from 'lucide-react';
import PageHero from '@/components/sections/PageHero';

export const metadata: Metadata = {
    title: 'Client Testimonials | SSG UK Ltd',
    description: 'Read what our clients say about SSG UK Ltd. Real feedback from security and facilities management clients across the UK.',
};

const testimonials = [
    {
        quote: 'With reference to Operation Wurlitzer, Camp for Climate Change Demonstration, Axe Drax protest on Saturday, here\u2019s a quick back brief: All of the extra staff provided by Support Services Group arrived promptly on Saturday, in good spirit. All of the officers carried out their assigned task to the highest standard, painting Kingdom and most importantly Drax in a most professional light. We received over 50 protesters at our site, and although the demonstration went very peacefully, we felt confident that all staff in place would have been able to deal with any escalation of protest, in a professional manner, should it have been necessary. Once again thank you for providing the extra support and please pass on to all involved.',
        name: 'D Roffey',
    },
    {
        quote: 'I would like to thank you all for your excellent contributions and efforts throughout these to very demanding days, well done and thanks again for everyone\u2019s efforts in managing the balancing act between the event and the \u201cbusiness as usual\u201d aspects that ran concurrently across all the campuses \u2013 without your hard work, none of which could have run effectively and smoothly. As a Front-of-House Unit you really showed your ability to work collaboratively as a Team, linking in with the whole Team! I would like to give special thanks to SSG Staff who, as always, gave great support and depth to the Security and Front of House Service! Thanks again and well done.',
        name: 'Karen & Scott',
    },
    {
        quote: 'As I was on site this morning I spoke to SSG officer regarding a contract guard at Hull and I must say I was very impressed with who I spoke to whom was very positive i.e. had a \u2018can do approach\u2019 and was extremely professional. Can you please pass on my feedback to that person on my behalf. Job well done!',
        name: 'Jo Creek',
    },
    {
        quote: 'I visited Spondon yesterday and the guard was excellent. I am not sure how often you get positive feedback, people tend to only feedback if it is a complaint but I was very impressed at the responsibility and enthusiasm he showed for the site.',
        name: 'Steve',
    },
    {
        quote: 'I also wanted to thank SSG for their quick response on the problems that arose yesterday and to inform you that Wasseem has already been most impressive today with the things we have covered and helping with a fire evacuation this afternoon.',
        name: 'Debra Lewis',
    },
    {
        quote: 'Could you please pass my regards and a big thank you to Shaz for the big favour and great service which he has provided for us yesterday. I also want to point out every time I spoke with him all issues he sorted out for me were in a great manner and professional way.',
        name: 'Robert',
    },
    {
        quote: 'I just wanted to praise the team from SSG Support Services that have been here to support us for our fresher\u2019s events. They were professional, friendly and really good with our students especially Michael and Amrit. I would in particular like to mention Paul who was here on the 16th and was a great help during the incident with the YMCA man. The whole team worked so well and I would very much like to thank them and hope that we can have these guys again for our future late night events.',
        name: 'Scott Purdy',
    },
    {
        quote: 'The store manager asked Alain Cosgrove to ensure he passed on some excellent comments about the Security Guard called Adam. Adam is keen, caring, helpful with a customer service focus talking to Customers and all the good things that go with. He is not afraid to get his hands dirty and goes beyond the call of duty. When he has to show authority i.e. when a drunk or person on drugs approach he has them moved on.',
        name: 'Alex',
    },
    {
        quote: 'SSG officer whom covering Smith Square last received good feedback last night mobile, thank you again to send him covering Smith Square last night.',
        name: 'Robert',
    },
    {
        quote: 'Hi Asim, I always appreciate your hard work, you always do your best to find a solution. Thank you for that.',
        name: 'Fredric',
        role: 'to SSG Night Controller',
    },
    {
        quote: 'SSG were the successful candidates in securing the Sunderland City Council Security Guarding and keyholding contract commencing from Monday 20th April. The SSG management team were informed mid-February and immediately got down to work making all the necessary transfer arrangements. Although time was not on their side, they managed to transfer all TUPE information from the Incumbent, furnished a Sunderland Office with a key holding cupboard, sourced 3 vehicles, staff uniforms and site assessment instructions were in place for 20th April. All this was done with minimum fuss to the council security team and me. This was quite remarkable undertaking considering the whole country were going through the \u2018lockdown\u2019 situation due to coronavirus. I have found the whole SSG team to be very approachable, available and helpful, and will fit in with the council \u2018style of working\u2019. We are still in the early days of the contract, but I have found the entire SSG operation very refreshing and therefore wouldn\u2019t hesitate to recommend SSG services.',
        name: 'Anthony Lee',
        role: 'Security Compliance and Monitoring Officer',
    },
];

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHero
                badge="Testimonials"
                title="What Our Clients"
                subtitle="Say About Us"
                description="Real feedback from the people we protect. See why organisations across the UK trust SSG with their security and facilities management."
                imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
            />

            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="columns-1 md:columns-2 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="break-inside-avoid rounded-2xl border border-[var(--border-color)] bg-white p-4 sm:p-6 md:p-8 hover:border-[var(--signal-red)] hover:shadow-lg transition-all"
                            >
                                <Quote className="w-8 h-8 text-[var(--signal-red)] opacity-30 mb-4" />
                                <p className="text-[var(--text-main)] text-sm sm:text-[15px] leading-relaxed mb-6">
                                    {t.quote}
                                </p>
                                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
                                    <div className="w-10 h-10 rounded-full bg-[var(--section-dark)] flex items-center justify-center text-white text-sm font-bold">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[var(--deep-navy)]">{t.name}</p>
                                        {t.role && (
                                            <p className="text-xs text-[var(--text-muted)]">{t.role}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
