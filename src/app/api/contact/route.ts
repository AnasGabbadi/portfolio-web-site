import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  // Honeypot field: real users never fill this in. Bots that auto-fill
  // every input do, so a non-empty value marks the submission as spam.
  website?: string;
}

const LIMITS = {
  name: 100,
  email: 254,
  phone: 20,
  subject: 200,
  message: 5000,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts international formats like "+212 717-458-335" while requiring
// at least 7 digits so garbage/too-short input is rejected.
const PHONE_REGEX = /^\+?[0-9\s\-().]{7,20}$/;
// Strips CR/LF so a crafted field value can't inject extra SMTP/email
// headers via nodemailer's templated strings.
const stripNewlines = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

function hasMinDigits(phone: string, min = 7) {
  return (phone.match(/\d/g) ?? []).length >= min;
}

function isValidPayload(data: Partial<ContactPayload>): data is ContactPayload {
  return (
    typeof data.name === 'string' &&
    data.name.trim().length > 0 &&
    data.name.trim().length <= LIMITS.name &&
    typeof data.email === 'string' &&
    data.email.length <= LIMITS.email &&
    EMAIL_REGEX.test(data.email) &&
    typeof data.phone === 'string' &&
    data.phone.trim().length <= LIMITS.phone &&
    PHONE_REGEX.test(data.phone.trim()) &&
    hasMinDigits(data.phone) &&
    typeof data.subject === 'string' &&
    data.subject.trim().length > 0 &&
    data.subject.trim().length <= LIMITS.subject &&
    typeof data.message === 'string' &&
    data.message.trim().length > 0 &&
    data.message.trim().length <= LIMITS.message
  );
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// In-memory sliding-window rate limiter, keyed by client IP.
// Resets on cold start / redeploy, which is good enough to blunt casual
// abuse on a low-traffic portfolio site without an external dependency.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitStore.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    rateLimitStore.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  rateLimitStore.set(ip, timestamps);
  return false;
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  let data: Partial<ContactPayload>;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  // Silently "succeed" for bots that fill the honeypot field so they don't
  // learn their submission was rejected.
  if (typeof data.website === 'string' && data.website.trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  if (!isValidPayload(data)) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 });
  }

  const name = stripNewlines(data.name);
  const email = stripNewlines(data.email);
  const phone = stripNewlines(data.phone);
  const subject = stripNewlines(data.subject);
  const message = data.message.trim();

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_TO_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_TO_EMAIL) {
    console.error('Contact form: missing SMTP environment variables');
    return NextResponse.json({ error: 'Email service is not configured' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `De : ${name} (${email})\nTelephone : ${phone}\n\n${message}`,
      html: `
        <p><strong>De :</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
        <p><strong>Telephone :</strong> ${escapeHtml(phone)}</p>
        <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form: failed to send email', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
