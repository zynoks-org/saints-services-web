import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { put } from '@vercel/blob';

const resend = new Resend(process.env.RESEND_API_KEY);

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '10 m'),
  analytics: true,
});

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: z.string().min(6, 'Please provide a valid phone number').max(30),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().max(100).optional().nullable(),
  service: z.string().min(1, 'Service selection is required'),
  details: z.string().max(3000, 'Details exceed maximum allowed character limit').optional().nullable(),
  // Honeypot: real users never see or fill this field (hidden via CSS). Bots that
  // auto-fill every input in a form will populate it, which flags them below.
  website: z.string().max(200).optional().nullable(),
  // Timestamp (ms) the form was rendered client-side, used to reject submissions
  // that complete faster than a human could plausibly fill the form.
  formRenderedAt: z.number().optional().nullable(),
});

const MIN_HUMAN_FILL_TIME_MS = 2000;
const MAX_CV_FILE_SIZE = 10 * 1024 * 1024;
const ALLOWED_CV_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

// Escape HTML characters to prevent XSS / formatting corruption in email clients
function escapeHtml(str: string | null | undefined): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const apiHeaders = {
  'Cache-Control': 'no-store, max-age=0, must-revalidate',
  'Pragma': 'no-cache',
  'Access-Control-Allow-Origin': 'https://www.saintsservices.co.uk',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: apiHeaders,
  });
}

export async function POST(request: Request) {
  try {
    // Rely on true Vercel real IP first to prevent X-Forwarded-For spoofing
    const ip =
      request.headers.get('x-real-ip') ||
      request.headers.get('x-forwarded-for')?.split(',').slice(-1)[0]?.trim() ||
      '127.0.0.1';

    const { success: rateLimitSuccess } = await ratelimit.limit(`ratelimit_${ip}`);

    if (!rateLimitSuccess) {
      return NextResponse.json(
        { success: false, error: 'Too many quote requests submitted. Please wait a few minutes and try again.' },
        { status: 429, headers: apiHeaders }
      );
    }

    const contentType = request.headers.get('content-type') || '';
    let cvFile: File | null = null;
    let parsedBody: z.infer<typeof quoteSchema>;

    if (contentType.includes('multipart/form-data')) {
      const form = await request.formData();
      const raw = {
        name: form.get('name')?.toString() || '',
        phone: form.get('phone')?.toString() || '',
        email: form.get('email')?.toString() || '',
        company: form.get('company')?.toString() || '',
        service: form.get('service')?.toString() || '',
        details: form.get('details')?.toString() || '',
        website: form.get('website')?.toString() || '',
        formRenderedAt: form.get('formRenderedAt') ? Number(form.get('formRenderedAt')) : undefined,
      };

      const parseResult = quoteSchema.safeParse(raw);
      if (!parseResult.success) {
        return NextResponse.json(
          { success: false, error: parseResult.error.issues[0].message },
          { status: 400, headers: apiHeaders }
        );
      }
      parsedBody = parseResult.data;

      const uploaded = form.get('cvFile');
      if (uploaded instanceof File && uploaded.size > 0) {
        if (uploaded.size > MAX_CV_FILE_SIZE) {
          return NextResponse.json(
            { success: false, error: 'CV file exceeds the 10MB size limit.' },
            { status: 400, headers: apiHeaders }
          );
        }
        if (!ALLOWED_CV_TYPES.includes(uploaded.type)) {
          return NextResponse.json(
            { success: false, error: 'CV must be a PDF, DOC, or DOCX file.' },
            { status: 400, headers: apiHeaders }
          );
        }
        cvFile = uploaded;
      }
    } else {
      const body = await request.json();
      const parseResult = quoteSchema.safeParse(body);

      if (!parseResult.success) {
        return NextResponse.json(
          { success: false, error: parseResult.error.issues[0].message },
          { status: 400, headers: apiHeaders }
        );
      }
      parsedBody = parseResult.data;
    }

    const { name, phone, email, company, service, details, website, formRenderedAt } = parsedBody;

    // Bot signals: a filled honeypot or an implausibly fast submission both
    // indicate a script, not a person. Return a fake success instead of an
    // error so scripts don't learn what tripped the check and adapt.
    const honeypotTripped = !!website && website.trim().length > 0;
    const submittedTooFast =
      typeof formRenderedAt === 'number' && Date.now() - formRenderedAt < MIN_HUMAN_FILL_TIME_MS;

    if (honeypotTripped || submittedTooFast) {
      return NextResponse.json({ success: true }, { headers: apiHeaders });
    }

    // Sanitize values for safe HTML rendering
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeService = escapeHtml(service);
    const safeDetails = escapeHtml(details);

    // Careers submissions tag their `service` field with a "CAREERS:" prefix
    // (see app/careers/page.tsx) — the only signal distinguishing a job
    // application from a client quote request on this shared endpoint.
    const isJobApplication = service.startsWith('CAREERS:');
    const recipientEmail = isJobApplication
      ? 'saintsservicesltd@gmail.com'
      : 'info@saintsservices.co.uk';

    const kindLabel = isJobApplication ? 'Job Application' : 'Client Enquiry';
    const heading = isJobApplication ? 'New job application received' : 'New enquiry received';
    const serviceFieldLabel = isJobApplication ? 'Position applied for' : 'Service requested';
    const displayService = isJobApplication ? safeService.replace(/^CAREERS:\s*/, '') : safeService;
    const nameFieldLabel = isJobApplication ? 'Applicant' : 'Name';

    let cvBuffer: Buffer | null = null;
    if (cvFile) {
      cvBuffer = Buffer.from(await cvFile.arrayBuffer());
      // Private, token-gated archival copy — not linked from the email since a
      // private-store URL 403s for the recipient. The real MIME attachment below
      // is what the recipient actually opens.
      await put(`careers-cvs/${Date.now()}-${cvFile.name}`, cvBuffer, {
        access: 'private',
        contentType: cvFile.type,
      });
    }

    const { data, error } = await resend.emails.send({
      from: 'Saints Services Dispatch <dispatch@mail.saintsservices.co.uk>',
      to: [recipientEmail],
      replyTo: email,
      subject: `New ${kindLabel}: ${displayService} — ${safeName}`,
      attachments: cvFile && cvBuffer ? [{ filename: cvFile.name, content: cvBuffer }] : undefined,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New ${kindLabel}</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #eef0f4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">

            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #eef0f4; padding: 32px 12px;">
              <tr>
                <td align="center">

                  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; table-layout: fixed; background-color: #ffffff;">

                    <tr>
                      <td style="padding: 36px 40px 20px 40px;">
                        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td style="vertical-align: middle;">
                              <img src="https://snlwjfavn5e79gpo.public.blob.vercel-storage.com/Web/saintsserviceslogo.png" width="28" height="28" alt="Saints Services" style="display: inline-block; vertical-align: middle; border: 0;">
                              <span style="font-size: 15px; font-weight: 800; color: #0b1329; letter-spacing: 0.5px; text-transform: uppercase; vertical-align: middle; margin-left: 10px;">Saints Services</span>
                            </td>
                            <td align="right" style="font-family: 'Courier New', monospace; font-size: 10px; font-weight: 700; letter-spacing: 1px; color: #8a92a3; text-transform: uppercase; vertical-align: middle;">
                              ${kindLabel}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 0 40px;">
                        <div style="height: 3px; background-color: #f59e0b; width: 48px;"></div>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 28px 40px 8px 40px;">
                        <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #0b1329; letter-spacing: -0.3px;">
                          ${heading}
                        </h1>
                        <p style="margin: 6px 0 0 0; font-size: 13px; color: #6b7385;">
                          Submitted via saintsservices.co.uk
                        </p>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 20px 40px 4px 40px;">
                        <div style="font-family: 'Courier New', monospace; font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #8a92a3; margin-bottom: 4px;">
                          ${serviceFieldLabel}
                        </div>
                        <div style="font-size: 18px; font-weight: 800; color: #b45309; word-break: break-word; overflow-wrap: anywhere;">
                          ${displayService}
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 24px 40px 0 40px;">
                        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="table-layout: fixed;">

                          <tr>
                            <td width="50%" style="padding: 14px 0; border-top: 1px solid #e7e9ef; vertical-align: top; word-break: break-word; overflow-wrap: anywhere;">
                              <div style="font-family: 'Courier New', monospace; font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #8a92a3; margin-bottom: 4px;">
                                ${nameFieldLabel}
                              </div>
                              <div style="font-size: 14px; font-weight: 700; color: #0b1329;">
                                ${safeName}
                              </div>
                            </td>
                            <td width="50%" style="padding: 14px 0 14px 24px; border-top: 1px solid #e7e9ef; vertical-align: top; word-break: break-word; overflow-wrap: anywhere;">
                              <div style="font-family: 'Courier New', monospace; font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #8a92a3; margin-bottom: 4px;">
                                Company / Venue
                              </div>
                              <div style="font-size: 14px; font-weight: 700; color: #0b1329;">
                                ${safeCompany || 'N/A'}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td width="50%" style="padding: 14px 0; border-top: 1px solid #e7e9ef; vertical-align: top; word-break: break-word; overflow-wrap: anywhere;">
                              <div style="font-family: 'Courier New', monospace; font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #8a92a3; margin-bottom: 4px;">
                                Email
                              </div>
                              <div>
                                <a href="mailto:${safeEmail}" style="font-size: 14px; font-weight: 700; color: #0b6bcb; text-decoration: none;">
                                  ${safeEmail}
                                </a>
                              </div>
                            </td>
                            <td width="50%" style="padding: 14px 0 14px 24px; border-top: 1px solid #e7e9ef; vertical-align: top; word-break: break-word; overflow-wrap: anywhere;">
                              <div style="font-family: 'Courier New', monospace; font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #8a92a3; margin-bottom: 4px;">
                                Phone
                              </div>
                              <div>
                                <a href="tel:${safePhone}" style="font-size: 14px; font-weight: 700; color: #0b6bcb; text-decoration: none;">
                                  ${safePhone}
                                </a>
                              </div>
                            </td>
                          </tr>

                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 24px 40px 8px 40px;">
                        <div style="font-family: 'Courier New', monospace; font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #8a92a3; margin-bottom: 8px;">
                          ${isJobApplication ? 'Application Details' : 'Enquiry Details'}
                        </div>
                        <div style="background-color: #f7f8fb; border: 1px solid #e7e9ef; padding: 16px 18px; font-size: 13.5px; line-height: 1.65; color: #3c4256; white-space: pre-wrap; word-break: break-word; overflow-wrap: anywhere;">${safeDetails || 'No additional details provided.'}</div>
                      </td>
                    </tr>

                    ${cvFile ? `
                    <tr>
                      <td style="padding: 4px 40px 8px 40px;">
                        <div style="font-size: 12px; color: #6b7385; font-weight: 600;">
                          CV attached to this email — see attachments.
                        </div>
                      </td>
                    </tr>
                    ` : ''}

                    <tr>
                      <td style="padding: 32px 40px 36px 40px; border-top: 1px solid #e7e9ef;">
                        <p style="margin: 0; font-size: 11px; color: #9aa1b1;">
                          Saints Services Ltd &middot; 20 Wenlock Road, London, N1 7GU
                        </p>
                        <p style="margin: 4px 0 0 0; font-size: 11px; color: #b7bcc8;">
                          Automated notification &mdash; reply directly to respond to the ${isJobApplication ? 'applicant' : 'client'}.
                        </p>
                      </td>
                    </tr>

                  </table>

                </td>
              </tr>
            </table>

          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend delivery error:', error);
      return NextResponse.json({ success: false, error: 'Failed to send inquiry.' }, { status: 400, headers: apiHeaders });
    }

    return NextResponse.json({ success: true, data: { id: data?.id } }, { headers: apiHeaders });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again later.' },
      { status: 500, headers: apiHeaders }
    );
  }
}