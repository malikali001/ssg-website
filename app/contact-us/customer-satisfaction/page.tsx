'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ClipboardCheck } from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';

interface FormData {
    date: string;
    completedBy: string;
    clientName: string;
    overallService: string;
    serviceComparison: string;
    healthSafety: string;
    seniorManagement: string;
    recommend: string;
    communication: string;
    comments: string;
}

const ratingOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const comparisonOptions = ['Worse', 'The Same', 'Far Better', 'N/A'];
const recommendOptions = ['Yes', 'No'];
const communicationOptions = ['Poorly', 'Very Good', 'Excellent'];

function RatingGroup({
    label,
    name,
    options,
    value,
    onChange,
}: {
    label: string;
    name: string;
    options: string[];
    value: string;
    onChange: (name: string, value: string) => void;
}) {
    const isNumeric = options.every(o => !isNaN(Number(o)));

    return (
        <div>
            <label className="block text-sm font-semibold text-[var(--text-main)] mb-3">
                {label}
            </label>
            <div className={`flex flex-wrap gap-1.5 sm:gap-2 ${isNumeric ? '' : 'sm:gap-3'}`}>
                {options.map(option => (
                    <button
                        key={option}
                        type="button"
                        onClick={() => onChange(name, option)}
                        className={`px-2.5 py-2 sm:px-3 sm:py-2.5 rounded-lg border text-xs sm:text-sm font-medium transition-all ${
                            value === option
                                ? 'bg-[var(--signal-red)] text-white border-[var(--signal-red)] shadow-sm'
                                : 'bg-white text-[var(--text-main)] border-[var(--border-color)] hover:border-[var(--signal-red)] hover:text-[var(--signal-red)]'
                        } ${isNumeric ? 'min-w-[36px] sm:min-w-[44px] text-center' : ''}`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function CustomerSatisfactionPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState<FormData>({
        date: '',
        completedBy: '',
        clientName: '',
        overallService: '',
        serviceComparison: '',
        healthSafety: '',
        seniorManagement: '',
        recommend: '',
        communication: '',
        comments: '',
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
            const res = await fetch('/api/customer-satisfaction', {
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
                        Thank you for taking the time to complete our customer satisfaction questionnaire. Your feedback helps us improve our services.
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
                title="Customer Satisfaction"
                subtitle="Questionnaire"
                description="To assist us in monitoring and measuring customer satisfaction and to implement improvements, we would appreciate if you would complete this form."
                imageSrc="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1200&q=80"
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
                                        <ClipboardCheck className="w-6 h-6 text-[var(--accent-amber)]" />
                                        <h3 className="text-lg font-bold">Your Feedback</h3>
                                    </div>
                                    <p className="text-sm text-white/80 leading-relaxed mb-10">
                                        Thank you for taking the time to complete our customer satisfaction questionnaire. Your responses help us deliver better services and identify areas for improvement.
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
                                <h2 className="text-2xl font-bold text-[var(--deep-navy)] mb-8">Customer Satisfaction Questionnaire</h2>

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

                                    {/* Completed By */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                            Completed By <span className="text-[var(--signal-red)]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="completedBy"
                                            value={formData.completedBy}
                                            onChange={handleChange}
                                            required
                                            className="input-tactical w-full"
                                        />
                                    </div>

                                    {/* Client's Name */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                            Client&apos;s Name <span className="text-[var(--signal-red)]">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="clientName"
                                            value={formData.clientName}
                                            onChange={handleChange}
                                            required
                                            className="input-tactical w-full"
                                        />
                                    </div>

                                    <hr className="border-[var(--border-color)]" />

                                    {/* Overall Service Rating */}
                                    <RatingGroup
                                        label="How do you rate the overall service provided by ourselves? 1 being poor, 10 being excellent."
                                        name="overallService"
                                        options={ratingOptions}
                                        value={formData.overallService}
                                        onChange={handleRatingChange}
                                    />

                                    {/* Service Comparison */}
                                    <RatingGroup
                                        label="How does our service compare with existing or previously used contractors providing a similar service? If none used record N/A."
                                        name="serviceComparison"
                                        options={comparisonOptions}
                                        value={formData.serviceComparison}
                                        onChange={handleRatingChange}
                                    />

                                    {/* Health & Safety Rating */}
                                    <RatingGroup
                                        label="How do you rate our approach towards health and safety? 1 being poor, 10 being excellent."
                                        name="healthSafety"
                                        options={ratingOptions}
                                        value={formData.healthSafety}
                                        onChange={handleRatingChange}
                                    />

                                    {/* Senior Management Rating */}
                                    <RatingGroup
                                        label="How do you rate the effectiveness, professionalism and support of our senior management? 1 being poor, 10 being excellent."
                                        name="seniorManagement"
                                        options={ratingOptions}
                                        value={formData.seniorManagement}
                                        onChange={handleRatingChange}
                                    />

                                    {/* Would You Recommend */}
                                    <RatingGroup
                                        label="Would you recommend our services?"
                                        name="recommend"
                                        options={recommendOptions}
                                        value={formData.recommend}
                                        onChange={handleRatingChange}
                                    />

                                    {/* Communication */}
                                    <RatingGroup
                                        label="How well do we communicate with you?"
                                        name="communication"
                                        options={communicationOptions}
                                        value={formData.communication}
                                        onChange={handleRatingChange}
                                    />

                                    <hr className="border-[var(--border-color)]" />

                                    {/* Further Comments */}
                                    <div>
                                        <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                            Please be encouraged to write any further comments that you feel could improve the service we offer you.
                                        </label>
                                        <textarea
                                            name="comments"
                                            value={formData.comments}
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
                                            {formStatus === 'submitting' ? 'Submitting...' : 'Submit Questionnaire'}
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
