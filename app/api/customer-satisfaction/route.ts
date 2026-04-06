import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            date,
            completedBy,
            clientName,
            overallService,
            serviceComparison,
            healthSafety,
            seniorManagement,
            recommend,
            communication,
            comments,
        } = body;

        if (!completedBy || !clientName) {
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

        await resend.emails.send({
            from: process.env.EMAIL_FROM || 'SSG Feedback <onboarding@resend.dev>',
            to: process.env.EMAIL_TO || 'info@ssgukltd.com',
            subject: `Customer Satisfaction Questionnaire from ${clientName}`,
            html: `
                <h2>Customer Satisfaction Questionnaire</h2>
                <table style="border-collapse:collapse;width:100%;max-width:600px;">
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Date</td><td style="padding:8px;border-bottom:1px solid #eee;">${date || 'Not provided'}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Completed By</td><td style="padding:8px;border-bottom:1px solid #eee;">${completedBy}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Client Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${clientName}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Overall Service Rating</td><td style="padding:8px;border-bottom:1px solid #eee;">${overallService || 'Not rated'}/10</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Service Comparison</td><td style="padding:8px;border-bottom:1px solid #eee;">${serviceComparison || 'Not answered'}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Health & Safety Rating</td><td style="padding:8px;border-bottom:1px solid #eee;">${healthSafety || 'Not rated'}/10</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Senior Management Rating</td><td style="padding:8px;border-bottom:1px solid #eee;">${seniorManagement || 'Not rated'}/10</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Would Recommend</td><td style="padding:8px;border-bottom:1px solid #eee;">${recommend || 'Not answered'}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Communication</td><td style="padding:8px;border-bottom:1px solid #eee;">${communication || 'Not answered'}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Further Comments</td><td style="padding:8px;">${comments || 'No comments provided'}</td></tr>
                </table>
            `,
        });

        return NextResponse.json(
            { success: true, message: 'Questionnaire submitted successfully.' },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
