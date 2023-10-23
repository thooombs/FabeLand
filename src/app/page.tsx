import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main>
      <div className=" ">
        <Image
          src={"/banner.png"}
          alt="hero image example"
          height={676}
          width={1920}
          priority
        />
      </div>
      <div className="bg-blue-700 p-2">
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
      </div>
      <div className="bg-blue-900 p-2">
        <div className=" container  mx-auto  w-full">
          <div className="flex flex-col   md:justify-between   gap-9 m-10 ">
          <div   className="order-first text-white font-bold text-4xl mb-5">
              <h1>Nossos Cursos: </h1>
            </div>
            <Link href="http://www.fabemarau.edu.br/graduacao-menu/administracao/" passHref={true} className="order-first text-white font-bold text-2xl">
              <h1>Administração</h1>
            </Link>

            <Link href="http://www.fabemarau.edu.br/graduacao-menu/ciencias-contabeis/" passHref={true} className="order-2 text-white font-bold text-2xl">
              <h3>Ciências Contábeis</h3>
            </Link>

            <Link href="http://www.fabemarau.edu.br/graduacao-menu/direito/" passHref={true} className="order-3 text-white font-bold text-2xl">
              <h2>Direito</h2>
            </Link>
            <Link href="http://www.fabemarau.edu.br/graduacao-menu/gestao-do-agronegocio/" passHref={true} className="order-2 text-white font-bold text-2xl">
              <h3>Gestão do Agronegócio</h3>
            </Link>
            <Link href="http://www.fabemarau.edu.br/graduacao-menu/gestao-comercial/" passHref={true} className="order-2 text-white font-bold text-2xl">
              <h3>Gestão Comercial</h3>
            </Link>
            <Link href="http://www.fabemarau.edu.br/graduacao-menu/gestao-de-recursos-humanos/" passHref={true} className="order-2 text-white font-bold text-2xl">
              <h3>Gestão de Recursos Humanos</h3>
            </Link>
            <Link href="http://www.fabemarau.edu.br/graduacao-menu/pedagogia/" passHref={true} className="order-2 text-white font-bold text-2xl">
              <h3>Pedagogia</h3>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
