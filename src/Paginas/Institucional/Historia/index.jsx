import React from "react";
import { LayoutGeneral } from "../../../Layouts/LayoutGeneral";
import "./styles.css";

const Historia = () => {

  // const CasaVelezDos = 'https://i.postimg.cc/tJvrzYkB/casa-velez-2.jpg';
  return (
    <LayoutGeneral>
      <div className="p-4 bg-white rounded-lg shadow-lg bg-historia">
        <div className="fixed overlay-historia w-full h-lvh"></div>
        <div className="relative mb-10 z-30 pt-2">
          <h2 className="w-full m-8 my-2 text-4xl font-bold leading-tight text-center text-gradient-rose drop-shadow-xl">
            Nuestra Historia
          </h2>
          <div className="text-center my-10 mx-2 lg:mx-48 text-gray-900 sm:text-xl sm:leading-9">
              <p>
                El Centro de Conciliación es un espacio dedicado a la resolución
                pacífica de conflictos, ofreciendo a las partes en disputa la
                posibilidad de llegar a acuerdos justos y satisfactorios sin
                necesidad de acudir a procesos judiciales. (cambiar el texto)
              </p>
          </div>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient-red-yellow w-2/3 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start bg-gray-100 bg-opacity-70 shadow-lg border rounded lg:m-10 lg:px-20">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/3 ">
                <img
                  src="https://i.postimg.cc/tJvrzYkB/casa-velez-2.jpg"
                  alt="Historia de la entidad"
                  className="w-full h-auto rounded-lg mb-4 lg:mb-0"
                />
              </div>
              <div className="w-full lg:w-2/3 p-5 lg:px-10 lg:py-10 font-normal text-gray-900 sm:text-xl sm:leading-normal">
                <p className="text-justify p-2">
                  La Cámara de Comercio de Pamplona fue fundada gracias a la
                  iniciativa de los comerciantes locales y la destacada gestión
                  del empresario Eladio Mantilla. El 10 de marzo de 1943, bajo
                  el decreto No. 518, se oficializó su creación durante el
                  mandato del presidente de la República, el doctor Alfonso
                  López Pumarejo, y con la colaboración del doctor Santiago
                  Rivas Camacho, entonces Ministro de la Economía Nacional.
                </p>
                <p className="text-justify p-2 mt-4">
                  La jurisdicción de la Cámara de Comercio de Pamplona se
                  estableció a través del decreto 74 de 1976, Artículo 27,
                  abarcando los municipios de Pamplona, Bochalema, Chitagá,
                  Cácota, Labateca, Mutiscua, Pamplonita, Silos y Toledo en el
                  Departamento de Norte de Santander.
                </p>
                <p className="text-justify p-2 mt-4">
                  Durante más de 78 años, la Cámara ha sido líder en la región,
                  demostrando un fuerte compromiso y sentido de pertenencia.
                  Hemos contribuido significativamente al desarrollo del sector
                  comercial y empresarial en toda nuestra área de influencia.
                </p>
                <p className="text-justify p-2 mt-4">
                  Conscientes de los constantes cambios del entorno, hemos
                  dirigido todos nuestros esfuerzos hacia la implementación de
                  procesos de mejora continua. Esto nos ha permitido identificar
                  y satisfacer las necesidades y expectativas de nuestros
                  comerciantes, fortaleciendo nuestros vínculos y posibilitando
                  una proyección tanto nacional como internacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutGeneral>
  );
};
export { Historia };
