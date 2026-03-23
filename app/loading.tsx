export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-gray-200 border-t-[var(--signal-red)] rounded-full animate-spin" />
                <p className="text-sm text-[var(--text-muted)] font-medium">Loading...</p>
            </div>
        </div>
    );
}
