import React from "react";
import { LayoutGeneral } from "../../../Layouts/LayoutGeneral";
import "./styles.css";

const Historia = () => {

  const CasaVelezDos = 'https://i.postimg.cc/tJvrzYkB/casa-velez-2.jpg';
  return (
    <LayoutGeneral>
      <div className="p-4 bg-white rounded-lg shadow-lg bg-historia">
        <div className="absolute overlay-historia"></div>
        <div className="relative mb-10 z-30 pt-2">
          <h2 className="text-3xl text-gradient-rose font-bold m-8 text-center drop-shadow-xl">
            Nuestra Historia
          </h2>
          <p className="text-center my-10 mx-48 leading-loose">
            La Jurisdicción de la Cámara de Comercio de Pamplona, fue
            establecida por medio del decreto 74 de 1976, Artículo 27, la cual
            comprende los municipios de Pamplona, Bochalema, Chitagá, Cácota,
            Labateca, Mutiscua, Cucutilla, Pamplonita, Silos y Toledo, en el
            Departamento Norte de Santander.
          </p>
          <div className="flex divider divider-neutral opacity-30 justify-center mx-36"></div>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start bg-gray-100 bg-opacity-70 shadow-lg border rounded m-10 px-28">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 lg:pr-4">
                <img
                  src={CasaVelezDos}
                  alt="Historia de la entidad"
                  className="w-full h-auto rounded-lg mb-4 lg:mb-0"
                />
              </div>
              <div className="w-full lg:w-1/2 lg:pl-4 px-10 py-10">
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
