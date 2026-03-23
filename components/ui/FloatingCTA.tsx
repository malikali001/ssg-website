import Link from 'next/link';
import { PenLine, Phone } from 'lucide-react';

export default function FloatingCTA() {
    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
            <Link
                href="/get-a-quote"
                className="flex items-center gap-3 bg-[var(--section-dark)] text-white pl-4 pr-5 py-3 rounded-l-full font-semibold text-sm hover:pr-7 transition-all duration-300 shadow-lg"
            >
                <PenLine className="w-5 h-5" />
                Request a Quote
            </Link>
            <a
                href="tel:03338880247"
                className="flex items-center gap-3 bg-[var(--signal-red)] text-white pl-4 pr-5 py-3 rounded-l-full font-semibold text-sm hover:pr-7 transition-all duration-300 shadow-lg"
            >
                <Phone className="w-5 h-5" />
                0333 888 0247
            </a>
        </div>
    );
}
