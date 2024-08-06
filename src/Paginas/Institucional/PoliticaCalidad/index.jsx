import React from "react";
import { LayoutGeneral } from "../../../Layouts/LayoutGeneral";
import MapaProcesos from "../../../Assets/Images/mapa-procesos.jpg"
import './styles.css';

const PoliticaCalidad = () => {
  return (
    <LayoutGeneral>
      <div className="p-4 bg-white rounded-lg shadow-lg bg-politica-calidad">
        <div className="absolute overlay-politica-calidad"></div>
        <div className="relative mb-10 z-30 pt-2">
          <h2 className="text-3xl text-gradient-rose font-bold m-8 text-center drop-shadow-xl ">
            Política de Calidad
          </h2>
          <div className="flex divider divider-neutral opacity-5 justify-center mx-36"></div>         
          <div className="flex flex-wrap lg:flex-row justify-center items-center lg:items-start bg-gray-100 bg-opacity-70 shadow-lg border rounded m-10 px-28">
            <p className="text-center my-10 mx-48 leading-loose">
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
