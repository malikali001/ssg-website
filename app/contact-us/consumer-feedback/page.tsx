'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, MessageSquareText } from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';

interface FormData {
    date: string;
    siteName: string;
    location: string;
    purposeOfVisit: string;
    securityStaffOnDuty: string;
    visitFrequency: string;
    firstImpression: string;
    staffVisibility: string;
    safetyFeeling: string;
    queryResolution: string;
    securityImportance: string;
    impactScore: string;
    issues: string;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
}

const frequencyOptions = [
    { label: '1–3 Times per Month', value: '3' },
    { label: '4–10 Times per Month', value: '6' },
    { label: 'More than 10 Times a Month', value: '10' },
];

const qualityOptions = [
    { label: 'Poor', value: '0' },
    { label: 'OK', value: '1' },
    { label: 'Good', value: '3' },
    { label: 'Excellent', value: '5' },
];

const impactOptions = Array.from({ length: 21 }, (_, i) => i - 10);

function RatingGroup({
    label,
    name,
    options,
    value,
    onChange,
}: {
    label: string;
    name: string;
    options: { label: string; value: string }[];
    value: string;
    onChange: (name: string, value: string) => void;
}) {
    return (
        <div>
            <label className="block text-sm font-semibold text-[var(--text-main)] mb-3">
                {label}
            </label>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {options.map(option => (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => onChange(name, option.value)}
                        className={`px-2.5 py-2 sm:px-3 sm:py-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                            value === option.value
                                ? 'bg-[var(--signal-red)] text-white border-[var(--signal-red)] shadow-sm'
                                : 'bg-white text-[var(--text-main)] border-[var(--border-color)] hover:border-[var(--signal-red)] hover:text-[var(--signal-red)]'
                        }`}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function ConsumerFeedbackPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState<FormData>({
        date: '',
        siteName: '',
        location: '',
        purposeOfVisit: '',
        securityStaffOnDuty: '',
        visitFrequency: '',
        firstImpression: '',
        staffVisibility: '',
        safetyFeeling: '',
        queryResolution: '',
        securityImportance: '',
        impactScore: '',
        issues: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleRatingChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setErrorMessage('');

        try {
            const res = await fetch('/api/consumer-feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
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
                        Thank You
                    </h1>
                    <p className="text-[var(--text-muted)] mb-8 text-lg">
                        Thank you for assisting us in this survey. Your feedback helps us improve the service we provide.
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
                badge="Feedback"
                title="Consumer"
                subtitle="Feedback"
                description="Thank you for assisting us in this survey. Please be assured that the information recorded on this form will only be used to improve the service we provide."
                imageSrc="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80"
            />

            {/* Form Section */}
            <section className="py-16 md:py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[var(--border-color)]">
                        <div className="grid lg:grid-cols-[300px_1fr]">
                            {/* Sidebar */}
                            <div className="bg-[var(--section-dark)] p-6 sm:p-8 lg:p-10 text-white self-start rounded-2xl">
                                <div>
                                    <div className="flex items-center gap-3 mb-6">
                                        <MessageSquareText className="w-6 h-6 text-[var(--accent-amber)]" />
                                        <h3 className="text-lg font-bold">Your Feedback</h3>
                                    </div>
                                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                                        Your feedback is invaluable in helping us maintain and improve our security services at your site.
                                    </p>
                                    <p className="text-sm text-white/60 leading-relaxed mb-10">
                                        Where your score falls between two categories, please score as 0 (Poor), 1 (OK), 3 (Good) or 5 (Excellent) as appropriate.
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
                                <h2 className="text-2xl font-bold text-[var(--deep-navy)] mb-8">Consumer Feedback</h2>

                                {formStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                        {errorMessage}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Date */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="input-tactical w-full"
                                        />
                                    </div>

                                    {/* Site Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                            Site Name <span className="text-[var(--signal-red)]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="siteName"
                                            value={formData.siteName}
                                            onChange={handleChange}
                                            required
                                            className="input-tactical w-full"
                                        />
                                    </div>

                                    {/* Location */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                            Location <span className="text-[var(--signal-red)]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            required
                                            className="input-tactical w-full"
                                        />
                                    </div>

                                    {/* Purpose of Visit */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                            Purpose of Visit <span className="text-[var(--signal-red)]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="purposeOfVisit"
                                            value={formData.purposeOfVisit}
                                            onChange={handleChange}
                                            required
                                            className="input-tactical w-full"
                                        />
                                    </div>

                                    {/* Security Staff on Duty */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                            Security Staff on Duty <span className="text-[var(--signal-red)]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="securityStaffOnDuty"
                                            value={formData.securityStaffOnDuty}
                                            onChange={handleChange}
                                            required
                                            className="input-tactical w-full"
                                        />
                                    </div>

                                    <hr className="border-[var(--border-color)]" />

                                    {/* Visit Frequency */}
                                    <RatingGroup
                                        label="On average how often would you come here and see our Security on Duty?"
                                        name="visitFrequency"
                                        options={frequencyOptions}
                                        value={formData.visitFrequency}
                                        onChange={handleRatingChange}
                                    />

                                    <hr className="border-[var(--border-color)]" />

                                    <p className="text-sm text-[var(--text-muted)]">
                                        Please answer the following questions. Where your score falls between two categories please score as 0 (Poor), 1 (OK), 3 (Good) or 5 (Excellent) as appropriate.
                                    </p>

                                    {/* First Impression */}
                                    <RatingGroup
                                        label="What was your first impression of our Security? (Were they smart, polite, courteous and friendly?)"
                                        name="firstImpression"
                                        options={qualityOptions}
                                        value={formData.firstImpression}
                                        onChange={handleRatingChange}
                                    />

                                    {/* Staff Visibility */}
                                    <RatingGroup
                                        label="Were our Security staff clearly visible to you?"
                                        name="staffVisibility"
                                        options={qualityOptions}
                                        value={formData.staffVisibility}
                                        onChange={handleRatingChange}
                                    />

                                    {/* Safety Feeling */}
                                    <RatingGroup
                                        label="How safe did you feel whilst visiting this site?"
                                        name="safetyFeeling"
                                        options={qualityOptions}
                                        value={formData.safetyFeeling}
                                        onChange={handleRatingChange}
                                    />

                                    {/* Query Resolution */}
                                    <RatingGroup
                                        label="Did they resolve any queries you may have had in a satisfactory manner?"
                                        name="queryResolution"
                                        options={qualityOptions}
                                        value={formData.queryResolution}
                                        onChange={handleRatingChange}
                                    />

                                    {/* Security Importance */}
                                    <RatingGroup
                                        label="How important is security to you whilst visiting this site?"
                                        name="securityImportance"
                                        options={qualityOptions}
                                        value={formData.securityImportance}
                                        onChange={handleRatingChange}
                                    />

                                    <hr className="border-[var(--border-color)]" />

                                    {/* Impact Score */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-3">
                                            Did our security have a positive or negative impact on you during this visit? (-10 Negative to +10 Positive)
                                        </label>
                                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                                            {impactOptions.map(score => (
                                                <button
                                                    key={score}
                                                    type="button"
                                                    onClick={() => handleRatingChange('impactScore', String(score))}
                                                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg border text-[10px] sm:text-xs font-semibold transition-all ${
                                                        formData.impactScore === String(score)
                                                            ? 'bg-[var(--signal-red)] text-white border-[var(--signal-red)] shadow-sm'
                                                            : score < 0
                                                                ? 'bg-white text-red-500 border-[var(--border-color)] hover:border-red-300'
                                                                : score > 0
                                                                    ? 'bg-white text-green-600 border-[var(--border-color)] hover:border-green-300'
                                                                    : 'bg-white text-[var(--text-muted)] border-[var(--border-color)] hover:border-gray-400'
                                                    }`}
                                                >
                                                    {score > 0 ? `+${score}` : score}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <hr className="border-[var(--border-color)]" />

                                    {/* Issues */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                            Are there any issues you would like to raise with SSG Support Services Group Ltd?
                                        </label>
                                        <textarea
                                            name="issues"
                                            value={formData.issues}
                                            onChange={handleChange}
                                            className="input-tactical w-full min-h-[120px]"
                                        />
                                    </div>

                                    <hr className="border-[var(--border-color)]" />

                                    {/* Contact Details */}
                                    <div>
                                        <p className="text-sm font-semibold text-[var(--text-main)] mb-4">
                                            If you would like us to respond back to you, we will need your contact details.
                                        </p>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Mobile
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={formStatus === 'submitting'}
                                            className="bg-[var(--signal-red)] hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {formStatus === 'submitting' ? 'Submitting...' : 'Submit Feedback'}
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
