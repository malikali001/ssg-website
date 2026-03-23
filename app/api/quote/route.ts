import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { fullName, email, phone, company, services, message } = body;

        if (!fullName || !email || !phone || !company) {
            return NextResponse.json(
                { error: 'Please fill in all required fields.' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Please provide a valid email address.' },
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

        const selectedServices = Array.isArray(services) && services.length > 0
            ? services.join(', ')
            : 'None specified';

        await resend.emails.send({
            from: process.env.EMAIL_FROM || 'SSG Quote <onboarding@resend.dev>',
            to: process.env.EMAIL_TO || 'info@ssgukltd.com',
            replyTo: email,
            subject: `New Quote Request from ${fullName} — ${company}`,
            html: `
                <h2>New Quote Request</h2>
                <table style="border-collapse:collapse;width:100%;max-width:600px;">
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${fullName}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${email}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;">${phone}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${company}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Services</td><td style="padding:8px;border-bottom:1px solid #eee;">${selectedServices}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px;">${message || 'No message provided'}</td></tr>
                </table>
            `,
        });

        return NextResponse.json(
            { success: true, message: 'Quote request received successfully.' },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
