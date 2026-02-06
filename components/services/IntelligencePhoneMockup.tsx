'use client';

import { motion } from 'framer-motion';
import { Shield, Activity } from 'lucide-react';

export default function IntelligencePhoneMockup() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
        >
            {/* Blob Background */}
            <div className="absolute inset-0 bg-red-500/5 blur-3xl rounded-full transform scale-110" />

            {/* Phone Frame */}
            <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-4 shadow-2xl border-8 border-slate-900">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative flex flex-col">
                    {/* Status Bar */}
                    <div className="h-8 bg-slate-100 flex items-center justify-between px-6">
                        <span className="text-[10px] font-bold text-slate-400">9:41</span>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 rounded-full bg-slate-300" />
                            <div className="w-3 h-3 rounded-full bg-slate-300" />
                        </div>
                    </div>

                    {/* Header */}
                    <div className="p-6 bg-slate-900 text-white pb-8">
                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold tracking-widest text-xs">SSG COMMAND</span>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-signal-red animate-pulse" />
                                <span className="text-xs font-bold text-signal-red">LIVE</span>
                            </div>
                        </div>
                        <h3 className="font-montserrat font-bold text-xl">Site Overview</h3>
                        <p className="text-slate-400 text-xs">Unit 4, Global Logistics Park</p>
                    </div>

                    {/* Feed */}
                    <div className="flex-1 bg-slate-50 p-4 space-y-3 overflow-hidden">
                        {/* Item 1 */}
                        <div className="bg-white p-3 rounded-lg border-l-4 border-signal-red shadow-sm">
                            <div className="flex justify-between mb-1">
                                <span className="text-xs font-bold text-slate-900">Perimeter Breach Attempt</span>
                                <span className="text-[10px] text-slate-400">2m ago</span>
                            </div>
                            <p className="text-xs text-slate-500 mb-2">Motion detected at North Gate. Officer deployed.</p>
                            <div className="flex items-center gap-2 text-[10px] text-signal-red font-bold">
                                <Shield className="w-3 h-3" />
                                Resolving...
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="bg-white p-3 rounded-lg border-l-4 border-green-500 shadow-sm">
                            <div className="flex justify-between mb-1">
                                <span className="text-xs font-bold text-slate-900">Patrol Verified</span>
                                <span className="text-[10px] text-slate-400">15m ago</span>
                            </div>
                            <p className="text-xs text-slate-500">NFC Tag #402 scanned (Warehouse B).</p>
                        </div>

                        {/* Item 3 */}
                        <div className="bg-white p-3 rounded-lg border-l-4 border-blue-500 shadow-sm opacity-60">
                            <div className="flex justify-between mb-1">
                                <span className="text-xs font-bold text-slate-900">Shift Started</span>
                                <span className="text-[10px] text-slate-400">1h ago</span>
                            </div>
                            <p className="text-xs text-slate-500">Officer J. Smith clocked in.</p>
                        </div>
                    </div>

                    {/* Floating Action Button */}
                    <div className="absolute bottom-6 right-6">
                        <div className="w-12 h-12 bg-signal-red rounded-full shadow-lg shadow-red-500/30 flex items-center justify-center text-white">
                            <Activity className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
