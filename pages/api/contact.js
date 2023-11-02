import nodemailer from "nodemailer";
import { Resend } from 'resend';


export default async function ContactAPI(req, res){

  const resend = new Resend('re_5hqut7DW_Myci3pCv4hFBSXqUvnGxkx3M');

  const { nome, fone, email, cpf, curso } = req.body;

  const data = {
    nome,
    fone,
    email,
    cpf,
    curso,
  };


try {
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'thomaz639@gmail.com',
    subject: 'Inscrição Vestibular FABE 2024',
    html: `
        <p>Nome: ${nome} </p>
        <p>Fone: ${fone} </p>
        <p>Email: ${email} </p>
        <p>Cpf: ${cpf} </p>
        <p>Curso: ${curso} </p>
  
        `,
  });
    

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error occurred while sending email: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}