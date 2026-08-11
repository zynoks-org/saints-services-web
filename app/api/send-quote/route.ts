import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

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
});

// Common security headers for API responses
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
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || '127.0.0.1';
    const { success: rateLimitSuccess } = await ratelimit.limit(`ratelimit_${ip}`);

    if (!rateLimitSuccess) {
      return NextResponse.json(
        { success: false, error: 'Too many quote requests submitted. Please wait a few minutes and try again.' },
        { status: 429, headers: apiHeaders }
      );
    }

    const body = await request.json();
    const parseResult = quoteSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        { success: false, error: parseResult.error.issues[0].message },
        { status: 400, headers: apiHeaders }
      );
    }

    const { name, phone, email, company, service, details } = parseResult.data;
    const recipientEmail = 'saintsservicesltd@gmail.com';

    const { data, error } = await resend.emails.send({
      from: 'Saints Services Dispatch <dispatch@mail.saintsservices.co.uk>',
      to: [recipientEmail],
      replyTo: email,
      subject: `⚡ New Lead: ${service} — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Dispatch Lead</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #070d1e; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
            
            <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #070d1e; padding: 40px 10px;">
              <tr>
                <td align="center">
                  
                  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #0b1329; border-radius: 20px; border: 1px solid #1e293b; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
                    
                    <tr>
                      <td style="padding: 32px 32px 24px 32px; background-color: #0b1329; border-bottom: 3px solid #f59e0b;">
                        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td>
                              <span style="display: inline-block; background-color: #1e293b; color: #f59e0b; border: 1px solid #334155; font-family: monospace; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 6px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
                                ⚡ DISPATCH_ALERT // NEW_INQUIRY
                              </span>
                              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">
                                Saints Services Ltd
                              </h1>
                              <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 13px; font-weight: 500;">
                                Operational Control Room & Client Lead Desk
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 32px;">
                        
                        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #162038; border: 1px solid #1e293b; border-radius: 12px; margin-bottom: 24px;">
                          <tr>
                            <td style="padding: 16px 20px;">
                              <div style="font-size: 11px; font-family: monospace; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">
                                Requested Service Scope
                              </div>
                              <div style="font-size: 18px; font-weight: 800; color: #f59e0b;">
                                ${service}
                              </div>
                            </td>
                          </tr>
                        </table>

                        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                          
                          <tr>
                            <td width="50%" style="padding-bottom: 20px; padding-right: 10px; vertical-align: top;">
                              <div style="font-size: 11px; font-family: monospace; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                                Client Name
                              </div>
                              <div style="font-size: 15px; font-weight: 700; color: #ffffff;">
                                ${name}
                              </div>
                            </td>
                            <td width="50%" style="padding-bottom: 20px; padding-left: 10px; vertical-align: top;">
                              <div style="font-size: 11px; font-family: monospace; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                                Company / Venue
                              </div>
                              <div style="font-size: 15px; font-weight: 700; color: #ffffff;">
                                ${company || 'N/A'}
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td width="50%" style="padding-bottom: 20px; padding-right: 10px; vertical-align: top;">
                              <div style="font-size: 11px; font-family: monospace; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                                Email Address
                              </div>
                              <div>
                                <a href="mailto:${email}" style="font-size: 14px; font-weight: 700; color: #38bdf8; text-decoration: none;">
                                  ${email}
                                </a>
                              </div>
                            </td>
                            <td width="50%" style="padding-bottom: 20px; padding-left: 10px; vertical-align: top;">
                              <div style="font-size: 11px; font-family: monospace; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                                Direct Phone
                              </div>
                              <div>
                                <a href="tel:${phone}" style="font-size: 14px; font-weight: 700; color: #38bdf8; text-decoration: none;">
                                  ${phone}
                                </a>
                              </div>
                            </td>
                          </tr>

                        </table>

                        <div style="margin-top: 10px;">
                          <div style="font-size: 11px; font-family: monospace; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                            Site Details / Postcode / Special Instructions
                          </div>
                          <div style="background-color: #070d1e; border: 1px solid #1e293b; border-radius: 12px; padding: 18px; font-size: 14px; line-height: 1.6; color: #cbd5e1; font-weight: 500; white-space: pre-wrap;">${details || 'No additional site specifications provided.'}</div>
                        </div>

                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 20px 32px; background-color: #070d1e; border-top: 1px solid #1e293b; text-align: center;">
                        <p style="margin: 0; font-size: 12px; color: #64748b; font-family: monospace; font-weight: 600;">
                          Saints Services Ltd • 20 Wenlock Road, London, N1 7GU
                        </p>
                        <p style="margin: 6px 0 0 0; font-size: 11px; color: #475569;">
                          Automated submission captured via Next.js client portal.
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
      return NextResponse.json({ success: false, error }, { status: 400, headers: apiHeaders });
    }

    return NextResponse.json({ success: true, data }, { headers: apiHeaders });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500, headers: apiHeaders }
    );
  }
}