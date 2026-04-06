'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/sections/PageHero';

interface FormData {
    employeePin: string;
    siteNumber: string;
    siteName: string;
    postCode: string;
    dateOfIncident: string;
    timeOfIncident: string;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    shiftStartTime: string;
    shiftFinishTime: string;
    policeIncidentNumber: string;
    policeOfficerCAD: string;
    detailsOfIncident: string;
    actionTaken: string;
    peopleInformed: string;
    witness1FirstName: string;
    witness1LastName: string;
    witness1Email: string;
    witness1Mobile: string;
    witness1Statement: string;
    witness2FirstName: string;
    witness2LastName: string;
    witness2Email: string;
    witness2Mobile: string;
    witness2Statement: string;
    confirmTruthfulness: string;
}

export default function ReportIncidentPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState<FormData>({
        employeePin: '',
        siteNumber: '',
        siteName: '',
        postCode: '',
        dateOfIncident: '',
        timeOfIncident: '',
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        shiftStartTime: '',
        shiftFinishTime: '',
        policeIncidentNumber: '',
        policeOfficerCAD: '',
        detailsOfIncident: '',
        actionTaken: '',
        peopleInformed: '',
        witness1FirstName: '',
        witness1LastName: '',
        witness1Email: '',
        witness1Mobile: '',
        witness1Statement: '',
        witness2FirstName: '',
        witness2LastName: '',
        witness2Email: '',
        witness2Mobile: '',
        witness2Statement: '',
        confirmTruthfulness: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setErrorMessage('');

        try {
            const res = await fetch('/api/report-incident', {
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
                        Report Submitted
                    </h1>
                    <p className="text-[var(--text-muted)] mb-8 text-lg">
                        Your incident/accident report has been submitted successfully. Our team will review the details and follow up as necessary.
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
                badge="Incident Report"
                title="Report an"
                subtitle="Incident / Accident"
                description="Please complete this form to report an incident or accident. All information will be handled confidentially."
                imageSrc="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
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
                                        <ShieldAlert className="w-6 h-6 text-[var(--accent-amber)]" />
                                        <h3 className="text-lg font-bold">Incident Report</h3>
                                    </div>
                                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                                        Please enter your four digit employee pin number and site number, then complete all relevant sections of this form.
                                    </p>
                                    <p className="text-sm text-white/60 leading-relaxed mb-10">
                                        All reports are treated confidentially and will be reviewed by management promptly.
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
                                <h2 className="text-2xl font-bold text-[var(--deep-navy)] mb-8">Report an Incident / Accident</h2>

                                {formStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                                        {errorMessage}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Employee Pin & Site Number */}
                                    <div>
                                        <h3 className="text-base font-bold text-[var(--deep-navy)] mb-4 pb-2 border-b border-[var(--border-color)]">
                                            Employee Verification
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Employee Pin Number
                                                </label>
                                                <input
                                                    type="text"
                                                    name="employeePin"
                                                    value={formData.employeePin}
                                                    onChange={handleChange}
                                                    maxLength={4}
                                                    pattern="\d{4}"
                                                    inputMode="numeric"
                                                    placeholder="4 digit pin"
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Site Number
                                                </label>
                                                <input
                                                    type="text"
                                                    name="siteNumber"
                                                    value={formData.siteNumber}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Site Details */}
                                    <div>
                                        <h3 className="text-base font-bold text-[var(--deep-navy)] mb-4 pb-2 border-b border-[var(--border-color)]">
                                            Site Details
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Site Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="siteName"
                                                    value={formData.siteName}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Post Code
                                                </label>
                                                <input
                                                    type="text"
                                                    name="postCode"
                                                    value={formData.postCode}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Date of Incident
                                                </label>
                                                <input
                                                    type="date"
                                                    name="dateOfIncident"
                                                    value={formData.dateOfIncident}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Time of Incident
                                                </label>
                                                <input
                                                    type="time"
                                                    name="timeOfIncident"
                                                    value={formData.timeOfIncident}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Security Officer Details */}
                                    <div>
                                        <h3 className="text-base font-bold text-[var(--deep-navy)] mb-4 pb-2 border-b border-[var(--border-color)]">
                                            Security Officer Details
                                        </h3>
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

                                    {/* Shift Details */}
                                    <div>
                                        <h3 className="text-base font-bold text-[var(--deep-navy)] mb-4 pb-2 border-b border-[var(--border-color)]">
                                            Shift Details
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Shift Start Time
                                                </label>
                                                <input
                                                    type="time"
                                                    name="shiftStartTime"
                                                    value={formData.shiftStartTime}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Shift Finish Time
                                                </label>
                                                <input
                                                    type="time"
                                                    name="shiftFinishTime"
                                                    value={formData.shiftFinishTime}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Police Details */}
                                    <div>
                                        <h3 className="text-base font-bold text-[var(--deep-navy)] mb-4 pb-2 border-b border-[var(--border-color)]">
                                            Police Details
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Police Incident Number
                                                </label>
                                                <input
                                                    type="text"
                                                    name="policeIncidentNumber"
                                                    value={formData.policeIncidentNumber}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Police Officer CAD Number
                                                </label>
                                                <input
                                                    type="text"
                                                    name="policeOfficerCAD"
                                                    value={formData.policeOfficerCAD}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Incident Details */}
                                    <div>
                                        <h3 className="text-base font-bold text-[var(--deep-navy)] mb-4 pb-2 border-b border-[var(--border-color)]">
                                            Incident Details
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Details of Incident
                                                </label>
                                                <textarea
                                                    name="detailsOfIncident"
                                                    value={formData.detailsOfIncident}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full min-h-[120px]"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    Action Taken
                                                </label>
                                                <textarea
                                                    name="actionTaken"
                                                    value={formData.actionTaken}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full min-h-[100px]"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    People Informed
                                                </label>
                                                <textarea
                                                    name="peopleInformed"
                                                    value={formData.peopleInformed}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full min-h-[80px]"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Witness 1 Details */}
                                    <div>
                                        <h3 className="text-base font-bold text-[var(--deep-navy)] mb-4 pb-2 border-b border-[var(--border-color)]">
                                            Witness 1 Details
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="witness1FirstName"
                                                    value={formData.witness1FirstName}
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
                                                    name="witness1LastName"
                                                    value={formData.witness1LastName}
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
                                                    name="witness1Email"
                                                    value={formData.witness1Email}
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
                                                    name="witness1Mobile"
                                                    value={formData.witness1Mobile}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                Witness Statement 1
                                            </label>
                                            <textarea
                                                name="witness1Statement"
                                                value={formData.witness1Statement}
                                                onChange={handleChange}
                                                className="input-tactical w-full min-h-[100px]"
                                            />
                                        </div>
                                    </div>

                                    {/* Witness 2 Details */}
                                    <div>
                                        <h3 className="text-base font-bold text-[var(--deep-navy)] mb-4 pb-2 border-b border-[var(--border-color)]">
                                            Witness 2 Details
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="witness2FirstName"
                                                    value={formData.witness2FirstName}
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
                                                    name="witness2LastName"
                                                    value={formData.witness2LastName}
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
                                                    name="witness2Email"
                                                    value={formData.witness2Email}
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
                                                    name="witness2Mobile"
                                                    value={formData.witness2Mobile}
                                                    onChange={handleChange}
                                                    className="input-tactical w-full"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-[var(--text-main)] mb-1.5">
                                                Witness Statement 2
                                            </label>
                                            <textarea
                                                name="witness2Statement"
                                                value={formData.witness2Statement}
                                                onChange={handleChange}
                                                className="input-tactical w-full min-h-[100px]"
                                            />
                                        </div>
                                    </div>

                                    {/* Confirmation */}
                                    <div>
                                        <h3 className="text-base font-bold text-[var(--deep-navy)] mb-4 pb-2 border-b border-[var(--border-color)]">
                                            Security Officer Signature and Confirmation of Truthfulness
                                        </h3>
                                        <div className="flex flex-wrap gap-3 sm:gap-4">
                                            <button
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, confirmTruthfulness: 'Yes' }))}
                                                className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg border text-sm font-semibold transition-all ${
                                                    formData.confirmTruthfulness === 'Yes'
                                                        ? 'bg-[var(--signal-red)] text-white border-[var(--signal-red)] shadow-sm'
                                                        : 'bg-white text-[var(--text-main)] border-[var(--border-color)] hover:border-[var(--signal-red)] hover:text-[var(--signal-red)]'
                                                }`}
                                            >
                                                Yes
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, confirmTruthfulness: 'No' }))}
                                                className={`flex-1 sm:flex-none px-6 py-2.5 rounded-lg border text-sm font-semibold transition-all ${
                                                    formData.confirmTruthfulness === 'No'
                                                        ? 'bg-[var(--signal-red)] text-white border-[var(--signal-red)] shadow-sm'
                                                        : 'bg-white text-[var(--text-main)] border-[var(--border-color)] hover:border-[var(--signal-red)] hover:text-[var(--signal-red)]'
                                                }`}
                                            >
                                                No
                                            </button>
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={formStatus === 'submitting'}
                                            className="bg-[var(--signal-red)] hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {formStatus === 'submitting' ? 'Submitting...' : 'Submit Report'}
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
