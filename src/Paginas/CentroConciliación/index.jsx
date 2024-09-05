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
            background="https://i.postimg.cc/T2sLQgzc/fondo-conciliacion.jpg"
            // title="¡Centro Conciliación!"
            description={TextBanner}
        />
      <section className="bg-white ">
        <div className="container lg:w-2/3 mx-auto flex lg:flex-wrap pt-4 ">
          {/* Requisitos Tarifas */}
          <div className="w-full md:w-1/3 p-6 flex flex-grow flex-shrink lg:m-5">
            <div className="flex sm:flex-col sm:flex-grow md:flex-row items-center justify-end">
              {services.map((item) => (
                <CardGeneral
                  nombre={item.name}
                  descripcion={item.description}
                  imgUrl={item.imgUrl}
                >
                  <div key={item.name} className="">
                    <a href="/requisitos-tarifas">
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

      {/* <section className="flex justify-center bg-white border-b py-8">
        <div className="flex w-2/3 m-5">
          <p className="">
            El Centro de Conciliación es un espacio dedicado a la resolución
            pacífica de conflictos, ofreciendo a las partes en disputa la
            posibilidad de llegar a acuerdos justos y satisfactorios sin
            necesidad de acudir a procesos judiciales. Nuestro equipo de
            conciliadores altamente capacitados está comprometido en facilitar
            un diálogo constructivo que permita a todas las partes involucradas
            encontrar soluciones que beneficien a todos.
          </p>
        </div>
      </section> */}

      <section className="relative isolate overflow-hidden bg-white px-6 md:py-16 sm:py-8 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          {/* <img
            alt=""
            src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
            className="mx-auto h-12"
          /> */}
          <figure className="my-5">
            <blockquote className="text-center text-base md:text-xl font-semibold leading-8 text-gray-900 sm:text-xl sm:leading-9">
              <p>
              Nuestro centro de conciliación está aquí para ayudarte a resolver conflictos de forma amigable y efectiva. Ofrecemos un enfoque justo y neutral para resolver conflictos y alcanzar acuerdos que satisfagan a todas las partes. Con nuestro equipo de expertos, podrás enfrentar y superar cualquier desacuerdo de manera rápida y profesional. ¡Consulta con nosotros y encuentra la solución adecuada!
              </p>
            </blockquote>
            <figcaption className="m-2 md:mt-10">
              {/* <img
                alt=""
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="mx-auto h-10 w-10 rounded-full"
              /> */}
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                {/* <div className="font-semibold text-gray-900">Judith Black</div> */}
                <div className="sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative flex flex-wrap justify-center md:rounded-full px-3 py-3 text-sm space-y-2 leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span>
                      Horario de atención: Lunes a Viernes, de 8:00 AM a 12:00 M
                      y de 2:00 PM a 6:00 PM.
                    </span>{" "}
                    <br />{" "}
                    <span>
                      Puedes visitarnos en nuestra oficina en la carrera 5 5-88
                      Centro, Casa Velez.{" "}
                    </span>{" "}
                    <br />{" "}
                    <span>
                      Telefono [número de teléfono]. Correo electronico [correo
                      electrónico].
                    </span>
                    {/* <a href="/" className="font-semibold text-indigo-600">
                        <span aria-hidden="true" className="absolute inset-0" />
                        Read more <span aria-hidden="true">&rarr;</span>
                    </a> */}
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
