import nodemailer from "nodemailer";

import 'dotenv/config'
require('dotenv').config()

export default async function ContactAPI(req, res){
  const { nome, fone, email, cpf, curso } = req.body;

  const data = {
    nome,
    fone,
    email,
    cpf,
    curso,
  };
  
const pwdr = process.env.PWDR;


  const transport = nodemailer.createTransport({
    
    host: "smtp.kinghost.net",
    port: 587,
    secure: false,
    auth: {
      user: "saga@sagapc.com.br",
      pass: (`${pwdr}`),
    },
  });
    

   
  

  try {
const mail = await transport.sendMail({
        from: "saga@sagapc.com.br",
        to: "thomaz639@gmail.com",
        subject: "Inscrição Vestibular FABE 2024",
        html: `
        <p>Nome: ${nome} </p>
        <p>Fone: ${fone} </p>
        <p>Email: ${email} </p>
        <p>Cpf: ${cpf} </p>
        <p>Curso: ${curso} </p>
  
        `,
      });


    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "could not send the email" 
});
  }

}