import type { Metadata } from 'next';
import { GuardsActiveChart, IncidentHeatmap, ComplianceGauge, StatCard, ActivityFeed } from '@/components/dashboards/DashboardWidgets';
import { MapPin, Bell, FileText, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Intelligence Center | SSG UK Ltd',
    description: 'Total estate visibility with real-time GPS tracking, incident monitoring, and compliance reporting.',
    keywords: ['Security Intelligence', 'Real-time Monitoring', 'GPS Tracking', 'Compliance Dashboard'],
};

export default function IntelligenceCenterPage() {
    return (
        <main className="min-h-screen bg-obsidian">
            {/* Hero */}
            <section className="section-container pt-32 pb-12">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h1 className="text-5xl md:text-6xl font-montserrat font-black mb-6">
                        SSG <span className="text-signal-red">Intelligence Center</span>
                    </h1>
                    <p className="text-xl text-text-muted">
                        Total Estate Visibility. The brain behind every contract.
                    </p>
                </div>

                {/* Feature Icons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-signal-red/10 rounded-full mb-3 border-2 border-signal-red/30">
                            <MapPin className="w-8 h-8 text-signal-red" />
                        </div>
                        <div className="text-sm font-semibold">Live GPS Patrols</div>
                    </div>
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-signal-red/10 rounded-full mb-3 border-2 border-signal-red/30">
                            <Bell className="w-8 h-8 text-signal-red" />
                        </div>
                        <div className="text-sm font-semibold">Alarm Monitoring</div>
                    </div>
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-signal-red/10 rounded-full mb-3 border-2 border-signal-red/30">
                            <FileText className="w-8 h-8 text-signal-red" />
                        </div>
                        <div className="text-sm font-semibold">Digital Site Logs</div>
                    </div>
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-signal-red/10 rounded-full mb-3 border-2 border-signal-red/30">
                            <Users className="w-8 h-8 text-signal-red" />
                        </div>
                        <div className="text-sm font-semibold">Staff Management</div>
                    </div>
                </div>
            </section>

            {/* Dashboard */}
            <section className="section-container py-0">
                {/* Top Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <StatCard title="Guards Active" value="247" subtitle="Across all sites" trend="up" />
                    <StatCard title="Incidents Today" value="12" subtitle="3 resolved" trend="down" />
                    <StatCard title="Sites Monitored" value="156" subtitle="UK-wide coverage" />
                    <StatCard title="Response Time" value="8min" subtitle="Average today" trend="down" />
                </div>

                {/* Charts Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                    <GuardsActiveChart />
                    <IncidentHeatmap />
                </div>

                {/* Bottom Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    <ComplianceGauge />
                    <div className="lg:col-span-2">
                        <ActivityFeed />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-container text-center">
                <div className="bg-gunmetal rounded-lg p-12 border border-signal-red/30">
                    <h2 className="text-3xl font-montserrat font-bold mb-4">
                        Ready to Experience <span className="text-signal-red">Total Visibility</span>?
                    </h2>
                    <p className="text-text-muted text-lg mb-8 max-w-2xl mx-auto">
                        Request a demo of the SSG Intelligence Center and see how we power elite security operations.
                    </p>
                    <a href="/quote" className="btn-primary text-lg px-8 py-4 inline-block">
                        Request a Demo
                    </a>
                </div>
            </section>
        </main>
    );
}
