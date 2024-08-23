import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonGeneral } from "../ButtonGeneral";
// import Ejemplo from "../../Assets/Images/pm-ejemplo.png";
// import EjemploDos from "../../Assets/Images/pm-ejemplo-dos.png";
// import EjemploTres from "../../Assets/Images/pm-ejemplo-tres.png";
// import EjemploCuatro from "../../Assets/Images/pm-ejemplo-cuatro.png";
// import ImgRUP from "../../Assets/Images/personaRup.png";
// import ImgJuridica from "../../Assets/Images/PersonaJuridica.png"
// import ImgTurismo from "../../Assets/Images/RegistroTurismo.png"
import "./styles.css";

const RecordsCard = () => {
  const records = [
    {
      id: 1,
      title: "Registro Vendedores juegos, suerte y azar",
      description: "Formaliza tu negocio y accede a mayores oportunidades.",
      imgSrc: "https://i.postimg.cc/PrFGcGNT/Reg-Mercantil.png",
      link: "/mercantil",
      imgStyles: "absolute w-[19.2rem] md:w-[20.05rem] left-[-0.2rem] md:left-[-9.35rem] top-[-6.5rem] md:top-[-6.74rem] z-20 transform scale-x-[-1] md:scale-x-[1]"
    },
    {
      id: 2,
      title: "Registro Nacional de turismo",
      description: "Compite en licitaciones y proyectos gubernamentales.",
      imgSrc: "https://i.postimg.cc/rp4LxhVc/Reg-Turismo.png",
      link: "/turismo",
      imgStyles: "absolute w-[19.3rem] md:w-[20.1rem] left-[-6.3rem] top-[-6.3rem] md:left-[-3rem] md:top-[-6.4rem] lg:left-[-6.6rem] lg:top-[-6.4rem] z-20 transform scale-x-[1] md:scale-x-[-1] lg:scale-x-[1]"
    },
    {
      id: 3,
      title: "Registro Unico Proponentes",
      description: "Compite en licitaciones y proyectos gubernamentales.",
      imgSrc: "https://i.postimg.cc/bJrF3Qkp/Reg-Proponente.png",
      link: "/proponentes",
      imgStyles: "absolute w-72 md:w-[20.1rem] left-[-6.6rem] top-[-6.5rem] z-20"
    },
    {
      id: 4,
      title: "Registro Entidades Sin Animo de Lucro",
      description: "Impulsa tu causa y accede a beneficios fiscales.",
      imgSrc: "https://i.postimg.cc/65QJY6WM/RegESADL.png",
      link: "/entidades",
      imgStyles: "absolute w-72 md:w-[20.1rem] right-[-9.1rem] top-[-7.1rem] md:right-[-9.15rem] md:top-[-7rem] z-20"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 mt-20 lg:m-0 gap-44 md:gap-x-20 md:gap-y-48 lg:gap-x-28 lg:gap-y-40 lg:grid-cols-4">
      {records.map((record) => (
        <div key={record.id} className="col-span-1 relative">
          <div className="flex transform transition-all duration-300 hover:scale-105 cursor-pointer rounded-lg">
            <div className={record.imgStyles}>
              <img
                src={record.imgSrc}
                alt={record.title}
                className="drop-shadow-xl"
              />
            </div>
            <div className="relative w-[10.2rem] md:w-full bg-opacity-70 backdrop-blur-md fondo-card shadow-xl rounded-sm md:rounded-md overflow-hidden z-10">
              <div className="relative z-10 px-2 md:px-1 py-[0.8rem] md:py-3">
                <div className="flex flex-wrap justify-center content-start sm:mt-3 w-40 h-[10.3rem]">
                  <h2 className="lg:text-base sm:text-sm font-bold text-dorado mb-1 text-center">
                    {record.title}
                  </h2>
                  <p className="mt-1 text-center text-sm text-white">
                    {record.description}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 pointer-events-none"></div>
            </div>
            <div className="absolute left-10 bottom-4 w-auto z-30">
              <NavLink to={record.link}>
                <ButtonGeneral name="Conoce mas" />
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { RecordsCard };
