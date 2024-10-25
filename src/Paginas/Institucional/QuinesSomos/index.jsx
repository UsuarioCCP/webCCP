import React, { useEffect, useRef } from "react";
import { LayoutGeneral } from "../../../Layouts/LayoutGeneral";
import { CardFlip } from "../../../Componentes/CardFlip";
// import QuinesSomos from "../../../Assets/Images/Quienes-somos.png";
import "./styles.css";

const ListItem = ({ text, colorClass = "text-primary" }) => {
  return (
    <li className="flex items-center text-base text-body-color dark:text-dark-6">
      <span className={`mr-2.5 ${colorClass}`}>
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_980_24878)">
            <path
              d="M5.03124 19.4375C4.74999 19.4375 4.46874 19.3437 4.24999 19.1875C3.81249 18.875 3.56249 18.3125 3.65624 17.7812L4.46874 12.75L0.968744 9.15625C0.593744 8.78125 0.468744 8.21875 0.624994 7.6875C0.781244 7.1875 1.21874 6.8125 1.71874 6.75L6.56249 5.96875L8.74999 1.375C8.99999 0.875 9.46874 0.5625 9.99999 0.5625C10.5312 0.5625 11.0312 0.875 11.25 1.375L13.4375 5.9375L18.25 6.6875C18.75 6.78125 19.1875 7.125 19.3437 7.625C19.5312 8.15625 19.375 8.71875 19 9.09375L15.5312 12.7187L16.3437 17.7812C16.4375 18.3437 16.2187 18.875 15.75 19.1875C15.3125 19.5 14.7812 19.5312 14.3125 19.2812L9.99999 16.9375L5.68749 19.2812C5.49999 19.4062 5.24999 19.4375 5.03124 19.4375ZM1.96874 8.125C1.96874 8.125 1.96874 8.15625 1.96874 8.1875L5.62499 11.9375C5.84374 12.1562 5.93749 12.5 5.90624 12.8125L5.06249 18.0312C5.06249 18.0312 5.06249 18.0312 5.06249 18.0625L9.56249 15.625C9.84374 15.4687 10.1875 15.4687 10.5 15.625L15 18.0625C15 18.0625 15 18.0625 15 18.0312L14.1562 12.7812C14.0937 12.4688 14.2187 12.1562 14.4375 11.9062L18.0937 8.15625C18.125 8.125 18.0937 8.09375 18.0937 8.09375L13.0625 7.3125C12.75 7.25 12.4687 7.0625 12.3437 6.75L9.99999 2L7.74999 6.78125C7.62499 7.0625 7.34374 7.28125 7.03124 7.34375L1.96874 8.125Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_980_24878">
              <rect width={20} height={20} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      {text}
    </li>
  );
};

const valores = [
  "Lealtad",
  "Resposabilidad",
  "Integridad",
  "Etica",
  "Participación",
  "Honestidad",
];

const principios = [
  {
    Titulo: "Trabajo en equipo",
    Descripción:
      "Interrelación del talento humano en desarrollo de los procesos de la entidad.",
  },
  {
    Titulo: "Mejoramiento Continuo",
    Descripción:
      "Aplicar la actualización permanente de los procesos en pro de lograr la excelencia en el servicio.",
  },
  {
    Titulo: "Talento Humano",
    Descripción:
      "Formación y motivación permanente e integral del talento humano para ser más competitivos.",
  },
  {
    Titulo: "Buena Fe",
    Descripción:
      "Mantener la credibilidad y obrar con transparencia en el desarrollo de nuestras funciones.",
  },
  {
    Titulo: "Igualdad y Respeto",
    Descripción:
      "Fortalecer la Institución fomentando el respeto por la persona humana y brindando igualdad de oportunidades.",
  },
];

const QuienesSomos = () => {
  const innerRef = useRef(null);

  useEffect(() => {
    const inner = innerRef.current;
    const items = inner.innerHTML;
    inner.innerHTML += items; // Duplicate the items for seamless animation
  }, []);

  return (
    <LayoutGeneral>
      <div className="bg-quienes-somos">
        <div className="fixed overlay-quienes-somos z-10 w-full h-lvh"></div>
        <div className="relative z-20 pt-2">
          <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gradient-rose drop-shadow-xl">
            ¿Quienes Somos?
          </h2>
          {/* <p className="text-center">
            Descubre cómo desde la Cámara de Comercio de Pamplona trabajamos
            para impulsar el crecimiento económico y empresarial de nuestra
            región
          </p> */}
          <div className="text-center my-10 mx-2 lg:mx-48 font-normal text-gray-900 sm:text-xl sm:leading-9">
              <p>
                Descubre cómo desde la Cámara de Comercio de Pamplona trabajamos
              para impulsar el crecimiento económico y empresarial de nuestra
              región
              </p>
          </div>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient-red-yellow w-2/3 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="grid justify-items-center grid-cols-1 lg:grid-cols-5">
            <div className="col-span-2 lg:my-2 h-auto">
              <figure className="flex flex-wrap justify-center mt-20">
                <img
                  className="content-end rotate-90 sm:rotate-0 w-80 sm:w-full "
                  src="https://i.postimg.cc/mktmS0Kz/Quienes-somos.png"
                  alt=""
                />
              </figure>
              <div className="">
                {/* Valores */}
                <div className=" flex flex-wrap justify-center py-8 sm:py-2 values-list">
                  <h2 className="text-center text-2xl text-gradient-rose font-semibold leading-8 text-gray-900 mb-7">
                    Valores Institucionales
                  </h2>
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="inner flex" ref={innerRef}>
                      {valores.map((valor, index) => (
                        <ListItem
                          key={index}
                          text={valor}
                          colorClass="text-red-700"
                        />
                      ))}
                    </div>
                    <div className="fade"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3">
              <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
                <div className="justify-center w-80 lg:w-full">
                  {/* <div className="w-full lg:pr-4 my-10">
                    <img src="ruta/a/tu/imagen-vision.jpg" alt="Visión" className="w-full h-auto rounded-lg mb-4 lg:mb-0" />
                  </div> */}
                  <div className="w-full lg:w-5/6">
                    <div className="bg-gray-100 bg-opacity-70 shadow-lg border rounded my-4 py-5 px-10">
                      {/* <h3 className="text-2xl text-gradient-rose font-semibold mb-2">
                        Misión
                      </h3>
                      <p className="text-justify text-gray-900 sm:text-normal sm:leading-7 ">
                        Somos una organización privada, gremial, Sin Ánimo de
                        Lucro, depositaria de fe pública, dedicada a la
                        prestación eficiente de los servicios del Registro Único
                        Empresarial y Social (RUES), así como a la gestión,
                        apoyo y desarrollo de programas y proyectos para la
                        generación de oportunidades para potenciar el
                        Emprendimiento, el Fortalecimiento y la Aceleración
                        empresarial de la Región, apoyados en la tecnología e
                        infraestructura adecuada, con un equipo humano
                        capacitado y comprometido que actúa con principios y
                        valores Corporativos.
                      </p> */}
                      <h3 className="text-2xl text-gradient-rose font-semibold mb-2">
                        Naturaleza
                      </h3>
                      <p className="text-justify text-gray-900 sm:text-normal sm:leading-7 ">
                      La Cámara de Comercio de Pamplona, es una entidad privada sin ánimo de lucro, de carácter corporativo y gremial, sujetas en la ejecución de todos los actos de administración, gestión y contratación al  derecho privado, las cuales tenemos como fines defender y estimular los intereses generales del empresariado en Colombia, y llevar los registros mercantil, de las entidades sin ánimo del lucro y el registro único de proponentes delegados legalmente, sin que formen parte integrante de la administración pública ni al régimen legal aplicable a las entidades que forman parte de la misma.
                      </p>
                    </div>

                    {/* <div className="bg-gray-100 bg-opacity-70 shadow-lg border rounded my-8 py-5 px-10">
                      <h3 className="text-2xl text-gradient-rose font-semibold mb-2">
                        Visión
                      </h3>
                      <p className="text-justify text-gray-900 sm:text-normal sm:leading-7">
                        Para el año 2026 seremos reconocidos como la
                        Organización gremial líder en el desarrollo integral de
                        nuestra región, mediante el acompañamiento de proyectos
                        de emprendimiento, fortalecimiento y aceleración
                        empresarial; enmarcados en una política de modernización
                        de los servicios registrales, el mejoramiento continuo y
                        una cultura organizacional de calidad.
                      </p>
                    </div> */}

                    <div className="bg-gray-100 bg-opacity-70 shadow-lg border rounded my-8 py-5 px-10">
                      <h3 className="text-2xl text-gradient-rose font-semibold mb-2">
                        Proposito MEGA
                      </h3>
                      <p className="text-justify text-gray-900 sm:text-normal sm:leading-7">
                        Aumentar la satisfacción del cliente a través de la
                        aplicación eficaz del Sistema de Gestión de Calidad de
                        los Servicios Registrales, incluidos los procesos para
                        la mejora continua, asegurando la conformidad de los
                        requisitos del cliente, los legales y los reglamentarios
                        aplicables; a su vez potenciar el Emprendimiento, el
                        Fortalecimiento y la Aceleración empresarial de la
                        Región, siendo generadores de Desarrollo y Calidad de
                        vida de la población.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Principios */}
          <div className="grid bg-white shadow-lg border rounded  py-5 px-10 ">
            <h3 className="text-2xl text-center text-gradient-rose font-semibold">
              Principios Institucionales
            </h3>
            <div className="flex justify-center my-16">
              <div className="flex flex-wrap gap-10">
                {principios.map((principio, index) => (
                  <div key={index}>
                    <CardFlip
                      textOne={principio.Titulo}
                      textTwo={principio.Descripción}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutGeneral>
  );
};

export { QuienesSomos };
