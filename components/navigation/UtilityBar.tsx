'use client';

export default function UtilityBar() {
    return (
        <div className="bg-[var(--section-dark)] text-white text-sm">
            <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
                <div className="flex items-center justify-between h-10">
                    {/* Timings */}
                    <p className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">
                        Call Centre is open <span className="text-white font-semibold">24 hours a day</span>
                    </p>

                    {/* Portals */}
                    <div className="hidden sm:flex items-center gap-4">
                        <a
                            href="https://portal.thefmcloud.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-white transition-colors duration-200 text-xs font-medium uppercase tracking-wider"
                        >
                            Client Portal
                        </a>
                        <span className="text-white/30">|</span>
                        <a
                            href="https://ssgemployeeportal.thefmcloud.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/80 hover:text-white transition-colors duration-200 text-xs font-medium uppercase tracking-wider"
                        >
                            Employee Portal
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
