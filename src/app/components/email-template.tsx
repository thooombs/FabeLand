import * as React from 'react';


interface EmailTemplateProps {
  nome: string;
  fone: string;
  email: string;
  cpf: string;
  curso: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nome, fone, email, cpf, curso
}) => (
  <div>
    <h1>    <p>Nome: {nome} </p>
          <p>Fone: {fone} </p>
          <p>Email: ${email} </p>
          <p>Cpf: ${cpf} </p>
          <p>Curso: ${curso} </p></h1>
  </div>
);
