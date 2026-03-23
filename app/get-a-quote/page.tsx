'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';

const services = [
    'Fire Marshal Services',
    'Guard Dogs Patrols',
    'Lock & Unlock Services',
    'Key-holding Alarm Response',
    'Manned Security Guarding',
    'Remote CCTV Monitoring Services',
    'Security Reception Services',
];

interface FormData {
    fullName: string;
    phone: string;
    email: string;
    company: string;
    message: string;
}

export default function GetAQuotePage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        phone: '',
        email: '',
        company: '',
        message: '',
    });

    const toggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service)
                ? prev.filter(s => s !== service)
                : [...prev, service]
        );
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setErrorMessage('');

        try {
            const res = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    services: selectedServices,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong.');
            }

            setFormStatus('success');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err) {
            setFormStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        }
    };

    if (formStatus === 'success') {
        return (
            <main className="min-h-screen bg-[var(--section-light)] flex items-center justify-center py-24 px-4">
                <div className="max-w-xl w-full bg-white rounded-lg shadow-xl p-12 text-center border border-[var(--border-color)]">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h1 className="text-3xl font-montserrat font-bold text-[var(--deep-navy)] mb-4">
                        Request Received
                    </h1>
                    <p className="text-[var(--text-muted)] mb-8 text-lg">
                        Thank you for contacting SSG. Our team will review your requirements and get back to you shortly.
                    </p>
                    <Link
                        href="/"
                        className="btn-primary inline-flex items-center gap-2 px-8 py-3"
                    >
                        Return Home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <PageHero
                badge="Free Quote"
                title="Get a Quote"
                subtitle=""
                description="Tell us your security requirements and our team will get back to you with a tailored solution."
                imageSrc="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80"
            />

            {/* Form Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[var(--border-color)]">
                        <div className="grid lg:grid-cols-[300px_1fr]">
                            {/* Contact Sidebar */}
                            <div className="bg-[var(--section-dark)] p-6 sm:p-8 lg:p-10 text-white self-start rounded-2xl">
                                <div>
                                    <p className="text-sm text-white/80 leading-relaxed mb-10">
                                        You can request a free no-obligation quotation from SSG below. If you are able to provide detailed information on your business and the services you need at this time it will greatly accelerate the quoting process.
                                    </p>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-[var(--accent-amber)] mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-sm text-white">Registered Office</p>
                                                <p className="text-sm text-white/70 mt-0.5">
                                                    SSG Head Office<br />
                                                    Romford, Essex
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Mail className="w-5 h-5 text-[var(--accent-amber)] mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-sm text-white">Email</p>
                                                <p className="text-sm text-white/70 mt-0.5">info@ssgukltd.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3">
                                            <Phone className="w-5 h-5 text-[var(--accent-amber)] mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-sm text-white">Phone</p>
                                                <p className="text-sm text-white/70 mt-0.5">0208 591 0330</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="p-5 sm:p-8 lg:p-10 bg-[#f7f7f7]">
                                <h2 className="text-2xl font-bold text-[var(--deep-navy)] mb-8">Get A Quote</h2>

                                {formStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                        {errorMessage}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Service Checkboxes */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-3">Select Your Service</label>
                                        <div className="space-y-2.5">
                                            {services.map(service => (
                                                <label key={service} className="flex items-center gap-3 cursor-pointer group">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedServices.includes(service)}
                                                        onChange={() => toggleService(service)}
                                                        className="w-4 h-4 rounded border-gray-300 text-[var(--signal-red)] focus:ring-[var(--signal-red)]"
                                                    />
                                                    <span className="text-sm text-[var(--text-main)] group-hover:text-[var(--deep-navy)]">
                                                        {service}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                            Full Name <span className="text-[var(--signal-red)]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="input-tactical w-full"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                            Phone <span className="text-[var(--signal-red)]">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="input-tactical w-full"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                            Email <span className="text-[var(--signal-red)]">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="input-tactical w-full"
                                        />
                                    </div>

                                    {/* Company Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                            Company Name <span className="text-[var(--signal-red)]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            required
                                            className="input-tactical w-full"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                            How can we help
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="input-tactical w-full min-h-[120px]"
                                        />
                                    </div>

                                    {/* Submit */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={formStatus === 'submitting'}
                                            className="bg-[var(--signal-red)] hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {formStatus === 'submitting' ? 'Processing...' : 'Submit'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
