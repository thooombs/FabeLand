import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/app/components/email-template";



const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try { 
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "maronibruuna@gmail.com",
      subject: `${req.body.nome} - Nova Inscrição FABE`,
      html: `nome: ${req.body.nome} <br/>
      
      cpf:  ${req.body.cpf} <br/>
      
      celular:  ${req.body.cel} <br/>
      email:  ${req.body.email} <br/>
      
      cidade:  ${req.body.city} <br/>
     
      curso:  ${req.body.curso}`
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};