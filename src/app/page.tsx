"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      fone: String(event.target.fone.value),
      email: String(event.target.email.value),
      cpf: String(event.target.cpf.value),
      curso: String(event.target.curso.value),
    };

    const response = await fetch("/api/route", {
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
          <div className="relative max-h-screen ">
          <div className="h-96  w-full relative">
          <Image
                className="   "
                src={"/banner3.jpg"}
                alt="hero image example"
                
                priority
                layout="fill"
                objectFit="cover"
                objectPosition="left"
              />
              </div>
              <div className="absolute top-0 w-full flex justify-start">
              <div className="ml-20 lg:ml-20 xl:ml-52 mt-5">
      <Image
             
                src={"/logo.png"}
                alt="hero image example"
                height={400}
                width={400}
                priority
              />
</div>
</div>

           

             





            </div>
         
       

      {/* <div className="bg-blue-700 p-2">
        <div className=" container  mx-auto  w-full">
          <div className="flex flex-col md:place-items-center  md:justify-between  md:flex-row gap-9 m-10 ">
            <Link  href="http://fabemarau.edu.br/graduacao/" passHref={true} className="order-first text-white font-bold text-3xl" >
              <h1>Graduação</h1>
            </Link>

            <Link href="http://www.fabemarau.edu.br/pos-graduacao/" passHref={true} className="order-2 text-white font-bold text-3xl">
              <h3>Pós Graduação/MBA</h3>
            </Link>

            <Link href="http://www.fabemarau.edu.br/cursos-de-extensao/" passHref={true} className="order-3 text-white font-bold text-3xl">
              <h2>Extensão</h2>
            </Link>
          </div>
        </div>
      </div> */}
      <div className="bg-blue-700 p-2">
        <div className=" container  mx-auto  w-full">
          <div className="flex flex-col md:place-items-center  md:justify-between  md:flex-row gap-9 m-10 ">
            <Link
              href="http://fabemarau.edu.br/vestibular/"
              passHref={true}
              className="order-first text-white font-bold text-3xl"
            >
              <h1>Transferência</h1>
            </Link>

            <Link
              href="http://www.fabemarau.edu.br/vestibular/"
              passHref={true}
              className="order-2 text-white font-bold text-3xl"
            >
              <h3>Nota do Enem</h3>
            </Link>

            <Link
              href="http://www.fabemarau.edu.br/vestibular/"
              passHref={true}
              className="order-3 text-white font-bold text-3xl"
            >
              <h2>2ª Graduação</h2>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-500 p-2">
        <div className=" container  mx-auto  w-full">
          <div className="  text-center    gap-9 m-10 ">
            <Link
              href="http://fabemarau.edu.br/vestibular-redacao/"
              passHref={true}
              className=" text-white font-bold text-3xl"
            >
              <h1>Envie sua Redação Online</h1>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 p-2">
        <div className=" container  mx-auto  w-full">
          <div className="flex flex-col   md:justify-between   gap-9 m-10 ">
            <div className="order-first text-white font-bold text-4xl mb-5">
              <h1>Nossos Cursos: </h1>
            </div>
            <Link
              href="http://www.fabemarau.edu.br/graduacao-menu/administracao/"
              passHref={true}
              className="order-first text-white font-bold text-2xl"
            >
              <h1>Administração</h1>
            </Link>

            <Link
              href="http://www.fabemarau.edu.br/graduacao-menu/ciencias-contabeis/"
              passHref={true}
              className="order-2 text-white font-bold text-2xl"
            >
              <h3>Ciências Contábeis</h3>
            </Link>

            <Link
              href="http://www.fabemarau.edu.br/graduacao-menu/direito/"
              passHref={true}
              className="order-3 text-white font-bold text-2xl"
            >
              <h2>Direito</h2>
            </Link>
            <Link
              href="http://www.fabemarau.edu.br/graduacao-menu/gestao-do-agronegocio/"
              passHref={true}
              className="order-2 text-white font-bold text-2xl"
            >
              <h3>Gestão do Agronegócio</h3>
            </Link>
            <Link
              href="http://www.fabemarau.edu.br/graduacao-menu/gestao-comercial/"
              passHref={true}
              className="order-2 text-white font-bold text-2xl"
            >
              <h3>Gestão Comercial</h3>
            </Link>
            <Link
              href="http://www.fabemarau.edu.br/graduacao-menu/gestao-de-recursos-humanos/"
              passHref={true}
              className="order-2 text-white font-bold text-2xl"
            >
              <h3>Gestão de Recursos Humanos</h3>
            </Link>
            <Link
              href="http://www.fabemarau.edu.br/graduacao-menu/pedagogia/"
              passHref={true}
              className="order-2 text-white font-bold text-2xl"
            >
              <h3>Pedagogia</h3>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-blue-300 p-2">
        <div className=" container  mx-auto mb-10 w-full ">
          <div>
            <h2 className=" font-bold text-3xl my-10 ml-3">Inscreva-se</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-800" htmlFor="name">
                Nome
              </label>
              <input
                type="text"
                minLength={3}
                maxLength={150}
                required
                className=" p-4 bg-gray-50 border border-gray-100 "
                autoComplete="off"
                id="name"
              />
            </div>
            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-800" htmlFor="fone">
                (DDD)+ Telefone/Whatsapp
              </label>
              <input
                type="text"
                minLength={3}
                maxLength={150}
                required
                className=" p-4 bg-gray-50 border border-gray-100 "
                autoComplete="off"
                id="fone"
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
                className=" p-4 bg-gray-50 border border-gray-100 "
                autoComplete="off"
                id="email"
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
                className=" p-4 bg-gray-50 border border-gray-100 "
                autoComplete="off"
                id="cpf"
              />
            </div>

            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-800">Curso</label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="curso"
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
