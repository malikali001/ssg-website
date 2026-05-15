import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[var(--section-light)] flex items-center justify-center py-24 px-4">
            <div className="max-w-xl w-full text-center">
                <p className="text-[var(--signal-red)] font-semibold text-sm uppercase tracking-wider mb-4">
                    Error 404
                </p>
                <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-montserrat font-bold text-[var(--deep-navy)] mb-4">
                    Page Not Found
                </h1>
                <p className="text-[var(--text-muted)] text-lg mb-8">
                    The page you are looking for does not exist or has been moved.
                </p>
                <div className="flex items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="bg-[var(--section-dark)] text-white px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
                    >
                        Return Home
                    </Link>
                    <Link
                        href="/contact-us"
                        className="border border-[var(--border-color)] text-[var(--text-main)] px-8 py-3 rounded-full font-semibold text-sm hover:border-[var(--signal-red)] hover:text-[var(--signal-red)] transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </main>
    );
}
