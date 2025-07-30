/// <reference types="@cloudflare/workers-types" />
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  website?: string;
  recaptchaToken?: string;
}

// Set your reCAPTCHA secret key in wrangler secrets as RECAPTCHA_SECRET
const RECAPTCHA_VERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify';
const TO_EMAIL = 'contact@devops4noobs.com'; // Your routed address

export async function handleContactRequest(request: Request, env: any): Promise<Response> {
  try {
    const data = (await request.json()) as ContactFormData;
    // Honeypot check
    if (data.website) {
      return new Response(JSON.stringify({ error: 'Spam detected.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
    // reCAPTCHA check
    if (!data.recaptchaToken) {
      return new Response(JSON.stringify({ error: 'Missing reCAPTCHA token.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
    // Verify reCAPTCHA with Google
    const recaptchaRes = await fetch(RECAPTCHA_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${env.RECAPTCHA_SECRET}&response=${data.recaptchaToken}`,
    });
    const recaptchaJson: { success: boolean } = await recaptchaRes.json();
    if (!recaptchaJson.success) {
      return new Response(JSON.stringify({ error: 'Failed reCAPTCHA verification.' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
    // Compose email for MailChannels
    const mailData = {
      personalizations: [{ to: [{ email: TO_EMAIL }] }],
      from: { email: 'contact@devops4noobs.com', name: 'DevOps4Noobs Contact' },
      subject: `Contact Form: ${data.name || 'No Name'}`,
      content: [
        {
          type: 'text/plain',
          value: `Name: ${data.name}\nEmail: ${data.email}\nMessage:\n${data.message}`,
        },
      ],
    };
    const mailRes = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mailData),
    });
    if (!mailRes.ok) {
      return new Response(JSON.stringify({ error: 'Failed to send email.' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
    return new Response(JSON.stringify({ message: 'Message sent successfully.' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message || 'Internal error.' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
