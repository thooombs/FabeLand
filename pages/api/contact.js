import nodemailer from "nodemailer";
import { Resend } from 'resend';


import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';


export default async function ContactAPI() {

  const resend = new Resend('re_5hqut7DW_Myci3pCv4hFBSXqUvnGxkx3M');

  const { nome, fone, email, cpf, curso } = req.body;

  const data = {
    nome,
    fone,
    email,
    cpf,
    curso,
  };





const RESEND_API_KEY = 're_5hqut7DW_Myci3pCv4hFBSXqUvnGxkx3M';


  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({ 

      from: 'onboarding@resend.dev',
      to: 'thomaz639@gmail.com',
      subject: 'Inscrição Vestibular FABE 2024',
      html: `
          <p>Nome: ${nome} </p>
          <p>Fone: ${fone} </p>
          <p>Email: ${email} </p>
          <p>Cpf: ${cpf} </p>
          <p>Curso: ${curso} </p>
    
          `
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return NextResponse.json(data);
  }
}
