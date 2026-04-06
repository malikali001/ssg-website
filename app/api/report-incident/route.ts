import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function witnessSection(
    num: number,
    firstName: string,
    lastName: string,
    email: string,
    mobile: string,
    statement: string,
) {
    const name = [firstName, lastName].filter(Boolean).join(' ') || 'Not provided';
    if (!firstName && !lastName && !statement) return '';

    return `
        <h3 style="margin-top:24px;">Witness ${num} Details</h3>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${email || 'Not provided'}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Mobile</td><td style="padding:8px;border-bottom:1px solid #eee;">${mobile || 'Not provided'}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Statement</td><td style="padding:8px;">${statement || 'Not provided'}</td></tr>
        </table>
    `;
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            employeePin,
            siteNumber,
            siteName,
            postCode,
            dateOfIncident,
            timeOfIncident,
            firstName,
            lastName,
            email,
            mobile,
            shiftStartTime,
            shiftFinishTime,
            policeIncidentNumber,
            policeOfficerCAD,
            detailsOfIncident,
            actionTaken,
            peopleInformed,
            witness1FirstName,
            witness1LastName,
            witness1Email,
            witness1Mobile,
            witness1Statement,
            witness2FirstName,
            witness2LastName,
            witness2Email,
            witness2Mobile,
            witness2Statement,
            confirmTruthfulness,
        } = body;

        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json(
                { error: 'Email service is not configured. Please contact us directly at info@ssgukltd.com.' },
                { status: 503 }
            );
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const officerName = [firstName, lastName].filter(Boolean).join(' ') || 'Unknown';

        const witness1Html = witnessSection(1, witness1FirstName, witness1LastName, witness1Email, witness1Mobile, witness1Statement);
        const witness2Html = witnessSection(2, witness2FirstName, witness2LastName, witness2Email, witness2Mobile, witness2Statement);

        await resend.emails.send({
            from: process.env.EMAIL_FROM || 'SSG Incidents <onboarding@resend.dev>',
            to: process.env.EMAIL_TO || 'info@ssgukltd.com',
            replyTo: email || undefined,
            subject: `Incident Report — ${siteName || 'Unknown Site'} — ${officerName}`,
            html: `
                <h2>Incident / Accident Report</h2>

                <h3>Employee Verification</h3>
                <table style="border-collapse:collapse;width:100%;max-width:600px;">
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Employee Pin</td><td style="padding:8px;border-bottom:1px solid #eee;">${employeePin || 'Not provided'}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Site Number</td><td style="padding:8px;border-bottom:1px solid #eee;">${siteNumber || 'Not provided'}</td></tr>
                </table>

                <h3 style="margin-top:24px;">Site Details</h3>
                <table style="border-collapse:collapse;width:100%;max-width:600px;">
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Site Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${siteName || 'Not provided'}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Post Code</td><td style="padding:8px;border-bottom:1px solid #eee;">${postCode || 'Not provided'}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Date of Incident</td><td style="padding:8px;border-bottom:1px solid #eee;">${dateOfIncident || 'Not provided'}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Time of Incident</td><td style="padding:8px;border-bottom:1px solid #eee;">${timeOfIncident || 'Not provided'}</td></tr>
                </table>

                <h3 style="margin-top:24px;">Security Officer Details</h3>
                <table style="border-collapse:collapse;width:100%;max-width:600px;">
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${officerName}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;">${email || 'Not provided'}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Mobile</td><td style="padding:8px;border-bottom:1px solid #eee;">${mobile || 'Not provided'}</td></tr>
                </table>

                <h3 style="margin-top:24px;">Shift Details</h3>
                <table style="border-collapse:collapse;width:100%;max-width:600px;">
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Shift Start</td><td style="padding:8px;border-bottom:1px solid #eee;">${shiftStartTime || 'Not provided'}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Shift Finish</td><td style="padding:8px;border-bottom:1px solid #eee;">${shiftFinishTime || 'Not provided'}</td></tr>
                </table>

                <h3 style="margin-top:24px;">Police Details</h3>
                <table style="border-collapse:collapse;width:100%;max-width:600px;">
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Police Incident Number</td><td style="padding:8px;border-bottom:1px solid #eee;">${policeIncidentNumber || 'Not provided'}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;">Police Officer CAD Number</td><td style="padding:8px;border-bottom:1px solid #eee;">${policeOfficerCAD || 'Not provided'}</td></tr>
                </table>

                <h3 style="margin-top:24px;">Incident Details</h3>
                <table style="border-collapse:collapse;width:100%;max-width:600px;">
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;vertical-align:top;">Details of Incident</td><td style="padding:8px;border-bottom:1px solid #eee;">${detailsOfIncident || 'Not provided'}</td></tr>
                    <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;vertical-align:top;">Action Taken</td><td style="padding:8px;border-bottom:1px solid #eee;">${actionTaken || 'Not provided'}</td></tr>
                    <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">People Informed</td><td style="padding:8px;">${peopleInformed || 'Not provided'}</td></tr>
                </table>

                ${witness1Html}
                ${witness2Html}

                <h3 style="margin-top:24px;">Confirmation</h3>
                <table style="border-collapse:collapse;width:100%;max-width:600px;">
                    <tr><td style="padding:8px;font-weight:bold;">Confirmed Truthfulness</td><td style="padding:8px;">${confirmTruthfulness || 'Not confirmed'}</td></tr>
                </table>
            `,
        });

        return NextResponse.json(
            { success: true, message: 'Incident report submitted successfully.' },
            { status: 200 }
        );
    } catch {
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
