'use client';

export default function GlobalError({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="en">
            <body>
                <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 1rem', fontFamily: 'system-ui, sans-serif' }}>
                    <div style={{ maxWidth: '32rem', width: '100%', textAlign: 'center' }}>
                        <p style={{ color: '#dc2626', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                            Critical Error
                        </p>
                        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#0a1628', marginBottom: '1rem' }}>
                            Something Went Wrong
                        </h1>
                        <p style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '2rem' }}>
                            We apologise for the inconvenience. Please try again.
                        </p>
                        <button
                            onClick={reset}
                            style={{ backgroundColor: '#0a1628', color: '#fff', padding: '0.75rem 2rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.875rem', border: 'none', cursor: 'pointer' }}
                        >
                            Try Again
                        </button>
                    </div>
                </main>
            </body>
        </html>
    );
}
