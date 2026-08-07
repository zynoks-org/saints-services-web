import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, company, service, details } = body;

    const recipientEmail = 'SaintsServicesLTD@gmail.com';

    const data = await resend.emails.send({
      from: 'Saints Services Dispatch <onboarding@resend.dev>',
      to: [recipientEmail],
      replyTo: email || undefined,
      subject: `⚡ New Lead: ${service || 'Operational Quote Request'} — ${name || 'Inquiry'}`,
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
                  
                  <!-- Main Email Container -->
                  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #0b1329; border-radius: 20px; border: 1px solid #1e293b; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);">
                    
                    <!-- Header Section -->
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

                    <!-- Body Content -->
                    <tr>
                      <td style="padding: 32px;">
                        
                        <!-- Service Scope Badge Box -->
                        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #162038; border: 1px solid #1e293b; border-radius: 12px; margin-bottom: 24px;">
                          <tr>
                            <td style="padding: 16px 20px;">
                              <div style="font-size: 11px; font-family: monospace; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">
                                Requested Service Scope
                              </div>
                              <div style="font-size: 18px; font-weight: 800; color: #f59e0b;">
                                ${service || 'General Operational Enquiry'}
                              </div>
                            </td>
                          </tr>
                        </table>

                        <!-- Client Specs Grid -->
                        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                          
                          <!-- Row 1: Name & Company -->
                          <tr>
                            <td width="50%" style="padding-bottom: 20px; padding-right: 10px; vertical-align: top;">
                              <div style="font-size: 11px; font-family: monospace; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                                Client Name
                              </div>
                              <div style="font-size: 15px; font-weight: 700; color: #ffffff;">
                                ${name || 'N/A'}
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

                          <!-- Row 2: Email & Phone -->
                          <tr>
                            <td width="50%" style="padding-bottom: 20px; padding-right: 10px; vertical-align: top;">
                              <div style="font-size: 11px; font-family: monospace; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                                Email Address
                              </div>
                              <div>
                                <a href="mailto:${email}" style="font-size: 14px; font-weight: 700; color: #38bdf8; text-decoration: none;">
                                  ${email || 'N/A'}
                                </a>
                              </div>
                            </td>
                            <td width="50%" style="padding-bottom: 20px; padding-left: 10px; vertical-align: top;">
                              <div style="font-size: 11px; font-family: monospace; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">
                                Direct Phone
                              </div>
                              <div>
                                <a href="tel:${phone}" style="font-size: 14px; font-weight: 700; color: #38bdf8; text-decoration: none;">
                                  ${phone || 'N/A'}
                                </a>
                              </div>
                            </td>
                          </tr>

                        </table>

                        <!-- Details & Requirements Box -->
                        <div style="margin-top: 10px;">
                          <div style="font-size: 11px; font-family: monospace; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                            Site Details / Postcode / Special Instructions
                          </div>
                          <div style="background-color: #070d1e; border: 1px solid #1e293b; border-radius: 12px; padding: 18px; font-size: 14px; line-height: 1.6; color: #cbd5e1; font-weight: 500; white-space: pre-wrap;">${details || 'No additional site specifications provided.'}</div>
                        </div>

                      </td>
                    </tr>

                    <!-- Footer Section -->
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

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Resend API error:', error);
    return NextResponse.json(
      { success: false, error: (error as Error).message }, 
      { status: 500 }
    );
  }
}