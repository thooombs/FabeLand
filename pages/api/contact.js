import nodemailer from "nodemailer";



export default async function ContactAPI(req, res){

  const { nome, fone, email, cpf, curso } = req.body;

  const data = {
    nome,
    fone,
    email,
    cpf,
    curso,
  };


  
  const PASSWORD = process.env.NEXT_EMAIL_PASSWORD;


  const transporter  = nodemailer.createTransport({
   
    host: "smtp.kinghost.net",
    port: 587,
    secure: false,
    auth: {
      user: "saga@sagapc.com.br",
      pass: PASSWORD,
    },
  });
    
  
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
            reject(error);
        } else {
            console.log("Server is ready to take our messages");
            resolve(success);
        }
    });
});
   


try {
const mailData  = transporter.sendMail({
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
    

    console.log('Message sent: %s', info.messageId);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error occurred while sending email: ', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}