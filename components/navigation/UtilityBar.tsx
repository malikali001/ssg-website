'use client';

export default function UtilityBar() {
    return (
        <div className="bg-[var(--section-dark)] text-white text-sm">
            <div className="max-w-[1280px] mx-auto px-5 md:px-10 lg:px-16">
                <div className="flex items-center justify-between h-10">
                    {/* Left */}
                    <div className="flex items-center gap-3 sm:gap-5">
                        <p className="text-white/80 text-xs sm:text-sm font-medium tracking-wide">
                            Call Centre: <span className="text-white font-semibold">24/7 Open</span>
                        </p>
                        <span className="text-white/20 hidden sm:inline">|</span>
                        <a
                            href="https://www.mi5.gov.uk/threat-levels"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium tracking-wide"
                        >
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            <span className="text-white/80">Current Threat Level:</span>
                            <span className="text-amber-400 font-semibold uppercase">Substantial</span>
                        </a>
                    </div>

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
