'use client';

import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const COLORS = ['#E31E24', '#F3F4F6', '#9CA3AF', '#1A1D23'];

export function GuardsActiveChart() {
    const data = [
        { time: '00:00', guards: 145 },
        { time: '04:00', guards: 132 },
        { time: '08:00', guards: 198 },
        { time: '12:00', guards: 247 },
        { time: '16:00', guards: 265 },
        { time: '20:00', guards: 223 },
        { time: '23:59', guards: 187 },
    ];

    return (
        <div className="bg-gunmetal rounded-lg p-6 border border-text-muted/10">
            <h3 className="text-xl font-montserrat font-bold mb-4">Guards Active (24h)</h3>
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorGuards" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#E31E24" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#E31E24" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1A1D23" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#1A1D23', border: '1px solid #E31E24' }}
                        labelStyle={{ color: '#F3F4F6' }}
                    />
                    <Area type="monotone" dataKey="guards" stroke="#E31E24" fillOpacity={1} fill="url(#colorGuards)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export function IncidentHeatmap() {
    const data = [
        { sector: 'Retail', incidents: 12 },
        { sector: 'Corporate', incidents: 5 },
        { sector: 'Healthcare', incidents: 3 },
        { sector: 'Construction', incidents: 18 },
        { sector: 'Education', incidents: 7 },
    ];

    return (
        <div className="bg-gunmetal rounded-lg p-6 border border-text-muted/10">
            <h3 className="text-xl font-montserrat font-bold mb-4">Incidents by Sector (Today)</h3>
            <ResponsiveContainer width="100%" height={200}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1A1D23" />
                    <XAxis dataKey="sector" stroke="#9CA3AF" angle={-45} textAnchor="end" height={80} />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#1A1D23', border: '1px solid #E31E24' }}
                        labelStyle={{ color: '#F3F4F6' }}
                    />
                    <Bar dataKey="incidents" fill="#E31E24" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export function ComplianceGauge() {
    const data = [
        { name: 'Compliant', value: 98 },
        { name: 'Remaining', value: 2 },
    ];

    return (
        <div className="bg-gunmetal rounded-lg p-6 border border-text-muted/10">
            <h3 className="text-xl font-montserrat font-bold mb-4">Compliance Status</h3>
            <div className="flex items-center justify-center">
                <div className="relative">
                    <ResponsiveContainer width={180} height={180}>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                startAngle={180}
                                endAngle={0}
                                innerRadius={60}
                                outerRadius={80}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 0 ? '#E31E24' : '#1A1D23'} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-4xl font-montserrat font-black text-signal-red">98%</div>
                            <div className="text-xs text-text-muted">Compliant</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function StatCard({ title, value, subtitle, trend }: { title: string; value: string; subtitle: string; trend?: 'up' | 'down' }) {
    return (
        <div className="bg-gunmetal rounded-lg p-6 border border-text-muted/10">
            <div className="text-text-muted text-sm mb-2">{title}</div>
            <div className="text-4xl font-montserrat font-black text-signal-red mb-1">{value}</div>
            <div className="text-text-muted text-xs">{subtitle}</div>
            {trend && (
                <div className={`text-xs mt-2 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                    {trend === 'up' ? '↑' : '↓'} vs last week
                </div>
            )}
        </div>
    );
}

export function ActivityFeed() {
    const activities = [
        { time: '14:23', event: 'Patrol completed - Site Alpha', status: 'success' },
        { time: '14:15', event: 'Incident reported - Site Beta', status: 'warning' },
        { time: '14:02', event: 'Guard check-in - Site Gamma', status: 'success' },
        { time: '13:45', event: 'Alarm cleared - Site Delta', status: 'success' },
        { time: '13:30', event: 'Maintenance request - Site Epsilon', status: 'info' },
    ];

    const statusColors = {
        success: 'bg-green-500',
        warning: 'bg-yellow-500',
        info: 'bg-blue-500',
    };

    return (
        <div className="bg-gunmetal rounded-lg p-6 border border-text-muted/10">
            <h3 className="text-xl font-montserrat font-bold mb-4">Live Activity Feed</h3>
            <div className="space-y-3">
                {activities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-obsidian/50 rounded">
                        <div className={`w-2 h-2 rounded-full mt-1.5 ${statusColors[activity.status as keyof typeof statusColors]}`} />
                        <div className="flex-1">
                            <div className="text-text-main text-sm">{activity.event}</div>
                            <div className="text-text-muted text-xs">{activity.time}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
