import { Resend } from "resend";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "@/app/components/email-template";

const resend = new Resend("re_5hqut7DW_Myci3pCv4hFBSXqUvnGxkx3M");
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const data = await resend.emails.send({
      from: "FABE LP <onboarding@resend.dev>",
      to: "thomaz639@gmail.com",
      subject: `${req.body.nome} - Nova Inscrição FABE`,
      html: `nome: ${req.body.nome} <br/>
      sexo:  ${req.body.sexo} <br/>
      cpf:  ${req.body.cpf} <br/>
      rg:   ${req.body.rg} <br/>
      celular:  ${req.body.cel} <br/>
      email:  ${req.body.email} <br/>
      cep:  ${req.body.cep} <br/>
      logradouro:   ${req.body.log} <br/>
      complemento:  ${req.body.comp}
      bairro:  ${req.body.bairro} <br/>
      cidade:  ${req.body.city} <br/>
      UF:   ${req.body.UF} <br/>
      fone:  ${req.body.fone} <br/>
      curso:  ${req.body.curso}`
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
