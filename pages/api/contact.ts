import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/app/components/email-template";

const resend = new Resend('re_5hqut7DW_Myci3pCv4hFBSXqUvnGxkx3M');
export default async (req: NextApiRequest, res: NextApiResponse) => {
 
  
  try{
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: "thomaz639@gmail.com",
      subject: `${req.body.nome} FABE 2024`,
      html: `${req.body.nome} ${req.body.fone} ${req.body.email} ${req.body.cpf} ${req.body.curso}`,
    })

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};