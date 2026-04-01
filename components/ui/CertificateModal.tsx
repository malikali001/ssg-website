'use client';

import { useEffect, useCallback, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface CertificateModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfSrc: string;
    title: string;
}

export default function CertificateModal({ isOpen, onClose, pdfSrc, title }: CertificateModalProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [numPages, setNumPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pdfDocRef = useRef<any>(null);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        },
        [onClose],
    );

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, handleKeyDown]);

    // Load PDF
    useEffect(() => {
        if (!isOpen || !pdfSrc) return;

        let cancelled = false;

        async function loadPdf() {
            setLoading(true);
            setCurrentPage(1);

            const pdfjsLib = await import('pdfjs-dist');
            pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

            const loadingTask = pdfjsLib.getDocument(pdfSrc);
            const pdf = await loadingTask.promise;

            if (cancelled) return;

            pdfDocRef.current = pdf;
            setNumPages(pdf.numPages);
            setLoading(false);
        }

        loadPdf();

        return () => {
            cancelled = true;
        };
    }, [isOpen, pdfSrc]);

    // Render current page
    useEffect(() => {
        if (!pdfDocRef.current || !canvasRef.current || !containerRef.current || loading) return;

        async function renderPage() {
            const pdf = pdfDocRef.current!;
            const page = await pdf.getPage(currentPage);

            const container = containerRef.current!;
            const canvas = canvasRef.current!;
            const ctx = canvas.getContext('2d')!;

            const containerWidth = container.clientWidth;
            const viewport = page.getViewport({ scale: 1 });
            const scale = (containerWidth - 48) / viewport.width;
            const scaledViewport = page.getViewport({ scale: Math.min(scale, 2) });

            canvas.width = scaledViewport.width;
            canvas.height = scaledViewport.height;

            await page.render({
                canvasContext: ctx,
                viewport: scaledViewport,
            }).promise;
        }

        renderPage();
    }, [currentPage, loading]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative z-10 w-full max-w-4xl h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-color)]">
                    <h3 className="text-base font-bold text-[var(--deep-navy)] truncate pr-4">{title}</h3>
                    <button
                        onClick={onClose}
                        className="flex-shrink-0 w-9 h-9 rounded-full bg-[var(--section-light)] flex items-center justify-center hover:bg-[var(--signal-red)] hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* PDF Canvas */}
                <div ref={containerRef} className="flex-1 overflow-auto bg-gray-100 flex justify-center">
                    {loading ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="w-8 h-8 border-3 border-[var(--signal-red)] border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : (
                        <div className="py-6">
                            <canvas ref={canvasRef} className="shadow-lg rounded" />
                        </div>
                    )}
                </div>

                {/* Page Navigation */}
                {numPages > 1 && !loading && (
                    <div className="flex items-center justify-center gap-4 px-5 py-3 border-t border-[var(--border-color)]">
                        <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="w-8 h-8 rounded-full bg-[var(--section-light)] flex items-center justify-center hover:bg-[var(--signal-red)] hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-[var(--section-light)] disabled:hover:text-current"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-sm font-medium text-[var(--text-muted)]">
                            Page {currentPage} of {numPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage((p) => Math.min(numPages, p + 1))}
                            disabled={currentPage === numPages}
                            className="w-8 h-8 rounded-full bg-[var(--section-light)] flex items-center justify-center hover:bg-[var(--signal-red)] hover:text-white transition-colors disabled:opacity-30 disabled:hover:bg-[var(--section-light)] disabled:hover:text-current"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
