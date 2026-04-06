import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const qualityLabels: Record<string, string> = {
    '0': 'Poor',
    '1': 'OK',
    '3': 'Good',
    '5': 'Excellent',
};

const frequencyLabels: Record<string, string> = {
    '3': '1–3 Times per Month',
    '6': '4–10 Times per Month',
    '10': 'More than 10 Times a Month',
};

function formatQuality(value: string | undefined) {
    if (!value) return 'Not answered';
    return qualityLabels[value] || value;
}

function formatFrequency(value: string | undefined) {
    if (!value) return 'Not answered';
    return frequencyLabels[value] || value;
}

function formatImpact(value: string | undefined) {
    if (!value) return 'Not answered';
    const num = Number(value);
    return num > 0 ? `+${num} (Positive)` : num < 0 ? `${num} (Negative)` : '0 (Neutral)';
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            date,
            siteName,
            location,
            purposeOfVisit,
            securityStaffOnDuty,
            visitFrequency,
            firstImpression,
            staffVisibility,
            safetyFeeling,
            queryResolution,
            securityImportance,
            impactScore,
            issues,
            firstName,
            lastName,
            email,
            mobile,
        } = body;

        if (!siteName || !location || !purposeOfVisit || !securityStaffOnDuty) {
            return NextResponse.json(
                { error: 'Please fill in all required fields.' },
                { status: 400 }
            );
        }

        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json(
                { error: 'Email service is not configured. Please contact us directly at info@ssgukltd.com.' },
                { status: 503 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const contactName = [firstName, lastName].filter(Boolean).join(' ') || 'Not provided';

        await resend.emails.send({
            from: process.env.EMAIL_FROM || 'SSG Feedback <onboarding@resend.dev>',
            to: process.env.EMAIL_TO || 'info@ssgukltd.com',
            replyTo: email || undefined,
            subject: `Consumer Feedback — ${siteName}, ${location}`,
            html: `
                <h2>Consumer Feedback</h2>
                <table style="border-collapse:collapse;width:100%;max-width:600px;">
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Date</td><td style="padding:8px;border-bottom:1px solid #eee;">${date || 'Not provided'}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Site Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${siteName}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Location</td><td style="padding:8px;border-bottom:1px solid #eee;">${location}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Purpose of Visit</td><td style="padding:8px;border-bottom:1px solid #eee;">${purposeOfVisit}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Security Staff on Duty</td><td style="padding:8px;border-bottom:1px solid #eee;">${securityStaffOnDuty}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Visit Frequency</td><td style="padding:8px;border-bottom:1px solid #eee;">${formatFrequency(visitFrequency)}</td></tr>
                </table>

                <h3 style="margin-top:24px;">Quality Ratings</h3>
                <table style="border-collapse:collapse;width:100%;max-width:600px;">
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">First Impression</td><td style="padding:8px;border-bottom:1px solid #eee;">${formatQuality(firstImpression)}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Staff Visibility</td><td style="padding:8px;border-bottom:1px solid #eee;">${formatQuality(staffVisibility)}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Safety Feeling</td><td style="padding:8px;border-bottom:1px solid #eee;">${formatQuality(safetyFeeling)}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Query Resolution</td><td style="padding:8px;border-bottom:1px solid #eee;">${formatQuality(queryResolution)}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Security Importance</td><td style="padding:8px;border-bottom:1px solid #eee;">${formatQuality(securityImportance)}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Impact Score</td><td style="padding:8px;border-bottom:1px solid #eee;">${formatImpact(impactScore)}</td></tr>
                </table>

                <h3 style="margin-top:24px;">Additional Information</h3>
                <table style="border-collapse:collapse;width:100%;max-width:600px;">
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;vertical-align:top;">Issues Raised</td><td style="padding:8px;border-bottom:1px solid #eee;">${issues || 'None'}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Contact Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${contactName}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${email || 'Not provided'}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;">Mobile</td><td style="padding:8px;">${mobile || 'Not provided'}</td></tr>
                </table>
            `,
        });

        return NextResponse.json(
            { success: true, message: 'Feedback submitted successfully.' },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
