'use client';

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main className="min-h-screen bg-[var(--section-light)] flex items-center justify-center py-24 px-4">
            <div className="max-w-xl w-full text-center">
                <p className="text-[var(--signal-red)] font-semibold text-sm uppercase tracking-wider mb-4">
                    Something went wrong
                </p>
                <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-[var(--deep-navy)] mb-4">
                    Unexpected Error
                </h1>
                <p className="text-[var(--text-muted)] text-lg mb-8">
                    We apologise for the inconvenience. Please try again or contact us if the issue persists.
                </p>
                <button
                    onClick={reset}
                    className="bg-[var(--section-dark)] text-white px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
                >
                    Try Again
                </button>
            </div>
        </main>
    );
}
