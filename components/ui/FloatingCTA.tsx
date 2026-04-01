import Link from 'next/link';
import { PenLine, Phone } from 'lucide-react';

export default function FloatingCTA() {
    return (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
            <Link
                href="/get-a-quote"
                className="flex items-center gap-2 sm:gap-3 bg-[var(--section-dark)] text-white pl-3 pr-3 sm:pl-4 sm:pr-5 py-2.5 sm:py-3 rounded-l-full font-semibold text-xs sm:text-sm hover:pr-4 sm:hover:pr-7 transition-all duration-300 shadow-lg"
            >
                <PenLine className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Request a Quote</span>
                <span className="sm:hidden">Quote</span>
            </Link>
            <a
                href="tel:02085910330"
                className="flex items-center gap-2 sm:gap-3 bg-[var(--signal-red)] text-white pl-3 pr-3 sm:pl-4 sm:pr-5 py-2.5 sm:py-3 rounded-l-full font-semibold text-xs sm:text-sm hover:pr-4 sm:hover:pr-7 transition-all duration-300 shadow-lg"
            >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">0208 591 0330</span>
                <span className="sm:hidden">Call</span>
            </a>
        </div>
    );
}
