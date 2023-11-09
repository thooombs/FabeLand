"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { unstable_getImgProps as getImgProps } from 'next/image'

const estadosDoBrasil = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

export default function Form() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [cel, setCel] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [log, setLog] = useState("");
  const [comp, setComp] = useState("");
  const [bairro, setBairro] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  const [fone, setFone] = useState("");
  const [curso, setCurso] = useState("");
  const [isSmall, setisSmall] = useState(true)


  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      nome: String(event.target.nome.value),
      sexo: String(event.target.sexo.value),
      cpf: String(event.target.cpf.value),
      rg: String(event.target.rg.value),
      cel: String(event.target.cel.value),
      email: String(event.target.email.value),
      cep: String(event.target.cep.value),
      log: String(event.target.log.value),
      comp: String(event.target.comp.value),
      bairro: String(event.target.bairro.value),
      city: String(event.target.city.value),
      uf: String(event.target.uf.value),
      fone: String(event.target.fone.value),
      curso: String(event.target.curso.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      // reset the form
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }

  return (
    <main>
      <div className="container  mx-auto ">

      <div className="bg-blue-400  ">
      <Link
              href="/"
              passHref={true}
              className=" text-white font-bold text-3xl"
            >
              <h1>Voltar</h1>
            </Link>
      </div>
  
      </div>

  

      <div className="bg-white p-2">
        <div className=" container  mx-auto mb-10 w-full ">
          <div>
            <h2 className=" font-bold text-3xl my-10 ml-3">Inscreva-se</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-800" htmlFor="nome">
                Nome
              </label>
              <input
                type="text"
                minLength={3}
                maxLength={150}
                required
                className=" p-4 bg-gray-50 border border-gray-900  rounded"
                autoComplete="off"
                id="nome"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
            </div>

                

            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-800" htmlFor="cpf">
                CPF
              </label>
              <input
                type="text"
                minLength={5}
                maxLength={11}
                required
                className=" p-4 bg-gray-50 border border-gray-900 "
                autoComplete="off"
                id="cpf"
                value={cpf}
                onChange={(e) => {
                  setCpf(e.target.value);
                }}
              />
            </div>

            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-800" htmlFor="cel">
                (DDD)+ Celular/Whatsapp
              </label>
              <input
                type="text"
                minLength={3}
                maxLength={150}
                required
                className=" p-4 bg-gray-50 border border-gray-900 "
                autoComplete="off"
                id="cel"
                value={cel}
                onChange={(e) => {
                  setCel(e.target.value);
                }}
              />
            </div>

            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-800" htmlFor="email">
                Email
              </label>
              <input
                minLength={5}
                maxLength={150}
                required
                className=" p-4 bg-gray-50 border border-gray-900 "
                autoComplete="off"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
           
            
            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-800" htmlFor="city">
                Cidade
              </label>
              <input
                minLength={5}
                maxLength={150}
                required
                className=" p-4 bg-gray-50 border border-gray-900 "
                autoComplete="off"
                id="city"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>

          

          

          

            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-800">Curso</label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="curso"
                  value={curso}
                  onChange={(e) => {
                    setCurso(e.target.value);
                  }}
                >
                  <option>Administração</option>
                  <option>Ciências Contábeis</option>
                  <option>Gestão do Agronegócio</option>
                  <option>Gestão Comercial</option>
                  <option>Gestão de Recursos Humanos</option>
                  <option>Pedagogia</option>
                  <option>Administração</option>
                  <option>Direito</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 w-40 bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div>
        <footer className="bg-white">
          <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
            <nav className="flex justify-center space-x-10" aria-label="Footer">
              <div>
                <Image
                  src={"/fabe.png"}
                  className="flex justify-center space-x-10"
                  alt="hero image example"
                  height={100}
                  width={100}
                  priority
                ></Image>
              </div>
            </nav>

            <p className="mt-10 text-center text-xs leading-5 text-gray-500">
              &copy; 2023 FABE Marau, Todos direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
