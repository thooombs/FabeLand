import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/app/components/email-template";
import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const RESEND_API_KEY = process.env.RESEND_API_KEY

export default async function POST() {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'hello world',
      html: '<strong>it works!</strong>',
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return NextResponse.json(data);
  }
}