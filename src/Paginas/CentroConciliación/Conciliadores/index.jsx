import React from "react";
import { LayoutGeneral } from "../../../Layouts/LayoutGeneral";
import { SidebarConciliacion } from "../../../Componentes/SidebarConciliacion";
import "./styles.css";

const CardConciliacion = ({ name, info, backgroundImage, estudios }) => {
  return (
    <div className="conciliacion-card bg-transparent w-72 h-96 m-5">
      <div className="card-inner">
        {/* Parte frontal: Imagen o Degradado */}
        <div
          className={`card-front ${
            backgroundImage
              ? "bg-cover bg-center bg-no-repeat"
              : "card-front-gradient"
          }`}
          style={
            backgroundImage
              ? { backgroundImage: `url(${backgroundImage})` }
              : {}
          }
        ></div>

        {/* Parte trasera con información */}
        <div className="card-back">
          <p className="m-4">{info}</p>
          <span className="font-bold">Estudios Realizados: </span>
          <p className="m-4">{estudios}</p>
        </div>
      </div>
      <p className="title">{name}</p>
    </div>
  );
};

const Conciliadores = () => {
  const conciliadores = [
    {
      name: "Pepito Pérez",
      informacion:
        "Abogado de la Universidad Santo Tomás, abogado litigante, Conciliador en Derecho, adscrito al Centro de Conciliación de la Cámara de Comercio de Pamplona desde el 6 de mayo de 2010 se retiró y nuevamente es Conciliador Activo de este Centro de Conciliación desde el 15 de marzo de 2016.",
      backgroundImage:
        "https://img.freepik.com/foto-gratis/hombre-negocios-brazos-cruzados-sonriendo_1139-677.jpg?t=st=1726003940~exp=1726007540~hmac=42fb7403c00927779662e7436e2f36ff3bd3be2489d4764fbd66869770259c88&w=1060",
        estudios: "Abogado de la Universidad Santo Tomás, Conciliador en Derecho"
    },
    {
      name: "Rosita Rosa",
      informacion:
        "Abogada de la Universidad Cooperativa de Colombia, Conciliadora en Derecho, Especialista en Derecho Administrativo, Conciliadora adscrita al Centro de Conciliación de la Cámara de Comercio de Pamplona desde el año 2012 se retiró y nuevamente es Conciliadora Activa de este Centro de Conciliación desde el 15 de marzo de 2016.",
      backgroundImage:
        "https://img.freepik.com/foto-gratis/empresaria-sonriente-posando-al-aire-libre-brazos-cruzados-copie-espacio_23-2148767055.jpg?t=st=1726003918~exp=1726007518~hmac=d61af6f8650f57e1114080edff5684b8df5e8751f5a86d2ee56eb45484efc7d1&w=996",
        estudios: "Abogada de la Universidad Cooperativa de Colombia, Especialista en Derecho Administrativo, Conciliadora adscrita al Centro de Conciliación de la Cámara de Comercio de Pamplona."
    },
    {
      name: "Clarita Clara",
      informacion:
        "Abogada Titulada, Egresada de la Universidad Santo Tomás de Bucaramanga. Como profesional utilizo los conocimientos teóricos y prácticos adquiridos en mis estudios, para colaborar y contribuir a la eficiencia y desarrollo en el lugar al cual preste mis servicios, procurando un adecuado ambiente de trabajo, que me permita un excelente desempeño de las responsabilidades adquiridas, con actitud para trabajar en forma ordenada, clara y analítica, asimilo órdenes e información con gran rapidez, exactitud y responsabilidad, por ende, me siento en capacidad para realizar y liderar tareas consecuentes a mi carrera de estudio.",
      backgroundImage:
        "https://img.freepik.com/foto-gratis/abogada-retrato-traje-formal-portapapeles_23-2148915797.jpg?t=st=1726003895~exp=1726007495~hmac=add4d4a41461ff387a07491c5275040516cfd7ab306d3bf368a43b560c00f87c&w=360",
        estudios: ""
    },
  ];

  return (
    <LayoutGeneral>
      <SidebarConciliacion>
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
          {conciliadores.map((conciliador, index) => (
            <CardConciliacion
              key={index}
              name={conciliador.name}
              info={conciliador.informacion}
              backgroundImage={conciliador.backgroundImage}
              estudios={conciliador.estudios} // Puedes pasar una imagen específica para cada conciliador si lo deseas
            />
          ))}
        </div>
      </SidebarConciliacion>
    </LayoutGeneral>
  );
};

export { Conciliadores };
