'use client';

import { Award as AwardIcon, Trophy, Star, Medal } from 'lucide-react';
import { Award } from '@/data/awards';

interface AwardBlockProps {
    award: Award;
    layout?: 'default' | 'compact'; // compact for homepage, default for full page
}

export default function AwardBlock({ award, layout = 'default' }: AwardBlockProps) {
    const hasOwnerImage = !!award.ownerImage;
    const hasAwardImage = !!award.awardImage;

    // Determine layout variations
    const isFullContent = hasOwnerImage && hasAwardImage;
    const isOwnerOnly = hasOwnerImage && !hasAwardImage;
    const isAwardOnly = !hasOwnerImage && hasAwardImage;
    const isTextOnly = !hasOwnerImage && !hasAwardImage;

    if (layout === 'compact') {
        return (
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="h-48 relative overflow-hidden shrink-0 bg-slate-50 group-hover:bg-slate-100 transition-colors">
                    <div className="absolute top-0 right-0 p-4 z-10">
                        <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wider">
                            {award.category}
                        </span>
                    </div>
                    {isFullContent ? (
                        <div className="flex h-full">
                            <div className="w-1/2 relative">
                                <img src={award.awardImage} alt={award.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                            </div>
                            <div className="w-1/2 relative">
                                <img src={award.ownerImage} alt="Recipient" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                            </div>
                        </div>
                    ) : hasOwnerImage || hasAwardImage ? (
                        <div className={`relative h-full w-full ${!hasOwnerImage ? 'bg-slate-50' : ''}`}>
                            <img
                                src={hasOwnerImage ? award.ownerImage : award.awardImage}
                                alt={award.title}
                                className={`w-full h-full transform group-hover:scale-105 transition-transform duration-700 ${hasOwnerImage ? 'object-cover object-top' : 'object-contain p-4'
                                    }`}
                            />
                            {hasOwnerImage && <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />}
                        </div>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-50 relative overflow-hidden text-slate-200">
                            <Trophy className="w-32 h-32 absolute -bottom-8 -right-8 rotate-12 opacity-20 text-[--color-signal-red]" />
                            <AwardIcon className="w-16 h-16 text-[--color-signal-red] opacity-60 relative z-10" />
                        </div>
                    )}
                </div>
                <div className="p-6 flex-grow flex flex-col">
                    <div className="mb-2">
                        <span className="text-xs font-bold text-[--color-signal-red] uppercase tracking-wider">{award.organization}</span>
                        <span className="mx-2 text-slate-300">•</span>
                        <span className="text-xs font-medium text-slate-500">{award.year}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[--color-deep-navy] mb-3 group-hover:text-[--color-signal-red] transition-colors line-clamp-2">
                        {award.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3">
                        {award.description}
                    </p>
                </div>
            </div>
        );
    }

    // Default Layout (Full Page)
    return (
        <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className={`grid md:grid-cols-12 gap-0 ${isFullContent ? '' : ''}`}>

                {/* Image Section Logic */}
                {isFullContent && (
                    <>
                        <div className="md:col-span-4 relative h-64 md:h-auto min-h-[300px] bg-slate-50">
                            <img
                                src={award.awardImage}
                                alt={award.title}
                                className="w-full h-full object-contain absolute inset-0 p-4"
                            />
                            {/* Gradient removed as it obscures contained images */}
                        </div>
                        <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">
                                            {award.category}
                                        </span>
                                        <span className="text-sm font-semibold text-slate-500">{award.year}</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[--color-deep-navy] mb-4">
                                        {award.title}
                                    </h3>
                                    <p className="text-lg font-medium text-[--color-signal-red] mb-6">
                                        {award.organization}
                                    </p>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        {award.description}
                                    </p>
                                </div>
                                <div className="relative h-64 md:h-full min-h-[250px] rounded-xl overflow-hidden">
                                    <img src={award.ownerImage} alt="Recipient" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            {(award.aboutAward || award.whyEarned) && (
                                <div className="mt-8 pt-8 border-t border-slate-100 grid md:grid-cols-2 gap-8">
                                    {award.aboutAward && (
                                        <div>
                                            <h4 className="text-sm font-bold text-[--color-deep-navy] uppercase tracking-wider mb-2">About the Award</h4>
                                            <p className="text-sm text-slate-500 leading-relaxed">{award.aboutAward}</p>
                                        </div>
                                    )}
                                    {award.whyEarned && (
                                        <div>
                                            <h4 className="text-sm font-bold text-[--color-deep-navy] uppercase tracking-wider mb-2">Why It Was Earned</h4>
                                            <p className="text-sm text-slate-500 leading-relaxed">{award.whyEarned}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </>
                )}

                {(isOwnerOnly || isAwardOnly) && (
                    <>
                        <div className={`md:col-span-4 relative h-64 md:h-auto min-h-[300px] ${isAwardOnly ? 'order-last md:order-last' : ''} bg-slate-50`}>
                            <img
                                src={isOwnerOnly ? award.ownerImage : award.awardImage}
                                alt={award.title}
                                className={`w-full h-full absolute inset-0 ${isOwnerOnly ? 'object-cover object-top' : 'object-contain p-4'}`}
                            />
                        </div>
                        <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full uppercase tracking-wider border border-slate-200">
                                    {award.category}
                                </span>
                                <span className="text-sm font-semibold text-slate-500">{award.year}</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[--color-deep-navy] mb-2">
                                {award.title}
                            </h3>
                            <p className="text-lg font-medium text-[--color-signal-red] mb-6">
                                {award.organization}
                            </p>
                            <p className="text-slate-600 mb-8 leading-relaxed max-w-2xl">
                                {award.description}
                            </p>
                            {(award.aboutAward || award.whyEarned) && (
                                <div className="grid md:grid-cols-2 gap-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
                                    {award.aboutAward && (
                                        <div>
                                            <h4 className="text-sm font-bold text-[--color-deep-navy] uppercase tracking-wider mb-2">About the Award</h4>
                                            <p className="text-sm text-slate-500 leading-relaxed">{award.aboutAward}</p>
                                        </div>
                                    )}
                                    {award.whyEarned && (
                                        <div>
                                            <h4 className="text-sm font-bold text-[--color-deep-navy] uppercase tracking-wider mb-2">Why It Was Earned</h4>
                                            <p className="text-sm text-slate-500 leading-relaxed">{award.whyEarned}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </>
                )}

                {isTextOnly && (
                    <div className="md:col-span-12 p-8 md:p-12 text-center max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full uppercase tracking-wider border border-slate-200">
                                {award.category}
                            </span>
                            <span className="w-1 h-1 bg-slate-300 rounded-full" />
                            <span className="text-sm font-semibold text-slate-500">{award.year}</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-[--color-deep-navy] mb-4">
                            {award.title}
                        </h3>
                        <p className="text-xl text-[--color-signal-red] font-medium mb-8">
                            {award.organization}
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                            {award.description}
                        </p>
                        {(award.aboutAward || award.whyEarned) && (
                            <div className="grid md:grid-cols-2 gap-8 text-left p-8 bg-slate-50 rounded-2xl border border-slate-100">
                                {award.aboutAward && (
                                    <div>
                                        <h4 className="text-sm font-bold text-[--color-deep-navy] uppercase tracking-wider mb-2">About the Award</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{award.aboutAward}</p>
                                    </div>
                                )}
                                {award.whyEarned && (
                                    <div>
                                        <h4 className="text-sm font-bold text-[--color-deep-navy] uppercase tracking-wider mb-2">Why It Was Earned</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{award.whyEarned}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
