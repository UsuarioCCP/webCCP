import React from "react";
import { LayoutGeneral } from "../../Layouts/LayoutGeneral";
import { CardGeneral } from "../../Componentes/CardGeneral";
import { BannerGeneral } from "../../Componentes/BannerGeneral";

const CentroConciliacion = () => {
  const services = [
    {
      name: "Requisitos y Tarifas",
      description:
        "Obtén la información que necesitas para programar tu audiencia de conciliación",
      href: "/centro-conciliacion/requisitos-tarifas",
      imgUrl: "https://i.postimg.cc/4xd4Zs3J/Tarifas.jpg",
    },
    {
      name: "Conciliadores",
      description: "Conoce los conciliadores que pueden guiar tu proceso",
      href: "/centro-conciliacion/conciliadores",
      imgUrl: "https://i.postimg.cc/wxtRhK84/Conciliadores.jpg",
    },
    {
      name: "Reglamento",
      description:
        "Es indispensable conocer el reglamento que guia la toma de decisiones",
      href: "/centro-conciliacion/reglamento",
      imgUrl: "https://i.postimg.cc/xdN0J5Hh/Reglamento.jpg",
    },
  ];

  const TextBanner = " El Centro de Conciliación es un espacio dedicado a la resolución pacífica de conflictos, ofreciendo a las partes en disputa la posibilidad de llegar a acuerdos justos y satisfactorios sin necesidad de acudir a procesos judiciales. Nuestro equipo de conciliadores altamente capacitados está comprometido en facilitar un diálogo constructivo que permita a todas las partes involucradas encontrar soluciones que beneficien a todos.";

  return (
    <LayoutGeneral>
      <section className="py-8">
        <h2 className="w-full my-8 text-4xl font-bold leading-tight text-center text-gradient-rose">
            Centro Conciliación Cámara de Comercio de Pamplona
        </h2>
        <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient-red-yellow w-96 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
      </section>
      <BannerGeneral
        background="https://i.postimg.cc/yNDpSJP3/fondo-conciliacion.jpg"
        // title="¡Centro Conciliación!"
        description={TextBanner}
        img="https://i.postimg.cc/Wz9RD81B/CENTRO-CONCILIACION-2.png"
      /> 

      <section className="bg-white ">
        <div className="mt-10">
          <h2 className="text-center text-2xl self-center mb-3 font-bold drop-shadow-xl">
            <span className="text-gradient-rose">Accede </span> 
            a la información que necesitas conocer
          </h2>
        </div>
        <div className="container m-auto flex justify-center lg:flex-wrap pt-2 ">
          {/* Requisitos Tarifas */}
          <div className="w-full lg:p-3 flex flex-col md:flex-grow flex-shrink lg:m-5">
            <div className="flex flex-col md:flex-row items-center justify-center">
              {services.map((item) => (
                <CardGeneral
                  nombre={item.name}
                  descripcion={item.description}
                  imgUrl={item.imgUrl}
                >
                  <div key={item.name} className="">
                    <a href={item.href}>
                      <button className="mx-auto lg:mx-0 hover:underline bg-gradient-rose text-white font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-95 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Conoce Mas
                      </button>
                    </a>
                  </div>
                </CardGeneral>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-white px-6 md:py-16 sm:py-8 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <figure className="my-5">
            <blockquote className="text-center text-base md:text-xl font-semibold leading-8 text-gray-900 sm:text-xl sm:leading-9">
              <p>
              Nuestro centro de conciliación está aquí para ayudarte a resolver conflictos de forma amigable y efectiva. Ofrecemos un enfoque justo y neutral para resolver conflictos y alcanzar acuerdos que satisfagan a todas las partes. Con nuestro equipo de expertos, podrás enfrentar y superar cualquier desacuerdo de manera rápida y profesional. ¡Consulta con nosotros y encuentra la solución adecuada!
              </p>
            </blockquote>
            <figcaption className="m-2 md:mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                {/* <div className="font-semibold text-gray-900">Judith Black</div> */}
                <div className="sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative flex flex-wrap justify-center md:rounded-full px-3 py-3 text-sm space-y-2 leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>
                      Horario de atención: Lunes a Viernes, de 8:00 AM a 12:00 M
                      y de 2:00 PM a 6:00 PM.
                    </span>{" "}
                  </div>
                    <br />{" "}
                    <div className="flex ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                    </svg>
                      <span>
                      Puedes visitarnos en nuestra oficina en la carrera 5 5-88
                      Centro, Casa Velez.{" "}
                      </span>
                    </div>{" "}
                    <br />{" "}
                    <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <span>Telefono [número de teléfono].</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-2 size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                    </svg>
                    <span>
                    Correo electronico [correo
                      electrónico].
                    </span>
                       
                    </div>
                  </div>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </LayoutGeneral>
  );
};

export { CentroConciliacion };
