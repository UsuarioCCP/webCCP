import React from "react";
import { LayoutGeneral } from "../../../Layouts/LayoutGeneral";
import MapaProcesos from "../../../Assets/Images/mapa-procesos.jpg"
import './styles.css';

const PoliticaCalidad = () => {
  return (
    <LayoutGeneral>
      <div className="p-4 bg-white rounded-lg shadow-lg bg-politica-calidad">
        <div className="fixed overlay-politica-calidad w-full h-lvh"></div>
        <div className="relative mb-10 z-30 pt-2">
          <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gradient-rose drop-shadow-xl">
            Política de Calidad
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient-red-yellow w-2/3 opacity-25 my-0 py-0 rounded-t"></div>
          </div>      
          <div className="flex flex-wrap lg:flex-row justify-center items-center lg:items-start bg-gray-100 bg-opacity-70 shadow-lg border rounded m-10 px-28">
            <p className="text-center my-10 mx-48 lg:m-16  text-gray-900 sm:text-xl sm:leading-8">
              La Cámara de Comercio de Pamplona como entidad depositaria de fe
              pública, dedicada a la prestación de servicios del Registro único
              empresarial y social (RUES), y la ejecución de programas y proyectos
              que benefician al sector productivo, generando espacios de
              conciliación, establece como compromiso brindar un servicio
              eficiente, eficaz, oportuno y veraz para cumplir con las necesidades
              y expectativas de las partes interesadas; apoyados en: las
              competencias del personal, el mejoramiento de las capacidades
              tecnológicas e infraestructura adecuada a los servicios prestados;
              sobre la base de la implementación de un sistema integral de
              gestión, para cumplir con los objetivos estratégicos y la
              optimización de recursos orientados a promover la cultura de la
              mejora continua, mitigando el impacto ambiental de las actividades
              derivadas del servicio, proporcionando un ambiente y condiciones de
              trabajo seguros y saludables, de conformidad con los requisitos
              legales.
            </p>
            <div className="flex justify-center mt-4">
              <img
                src={MapaProcesos}
                alt="Mapa de procesos"
                className="w-[34rem] pb-10"
              />
            </div>
          </div>
        </div>
      </div>
    </LayoutGeneral>
  );
};

export { PoliticaCalidad };
