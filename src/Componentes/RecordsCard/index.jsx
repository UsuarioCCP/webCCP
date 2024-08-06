import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonGeneral } from "../ButtonGeneral";
// import ImgMercantil from "../../Assets/Images/personaMercantil.png";
// import ImgRUP from "../../Assets/Images/personaRup.png";
// import ImgJuridica from "../../Assets/Images/PersonaJuridica.png"
import ImgTurismo from "../../Assets/Images/RegistroTurismo.png"
import "./styles.css";

const RecordsCard = () => {
  return (
    <div className="grid md:grid-cols-2 md:gap-x-20 md:gap-y-40 lg:grid-cols-4 gap-20">

      {/* Card uno mercantil */}

      <div className="col-span-1 relative">
        <div className="flex transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer rounded-lg">
          <div className="absolute w-[15rem] left-[-9.2rem] top-[-6.6rem] z-20">
            <img
              src="https://i.postimg.cc/zDsHGJCd/persona-Mercantil.png"
              alt="Persona Mercantil"
              className="drop-shadow-xl"
            />
          </div>
          <div className="relative w-full max-w-[12rem] bg-opacity-70 backdrop-blur-md fondo-card shadow-xl rounded-lg overflow-hidden z-10">
            <div className="relative z-20 p-2 sm:p-3">
              <div className="flex flex-wrap justify-center content-start mt-2 sm:mt-3 w-40 h-40">
                <h2 className=" lg:text-base sm:text-sm font-bold text-dorado mb-1 text-center">
                  Registro Vendedores juegos, suerte y azar
                </h2>
                <p className="mt-1 text-center text-sm text-white">Formaliza tu negocio y accede a mayores oportunidades.</p>
              </div>             
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 pointer-events-none"></div>
          </div>
          <div className="absolute left-10 bottom-4 w-auto z-30">
            <NavLink to="/mercantil">
              <ButtonGeneral name="Conoce mas"/>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Card dos turismo */}
      <div className="col-span-1 relative left-7">
        <div className="flex transform transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer rounded-lg">
          <div className="absolute w-[15rem] left-[-5.9rem] top-[-5.79rem] z-20">
            <img
              src={ImgTurismo} 
              alt="Img RUP"
              className="drop-shadow-xl"
            />
          </div>
          <div className="relative w-full max-w-[12rem] bg-opacity-70 backdrop-blur-md fondo-card shadow-xl rounded-lg overflow-hidden z-10 ">
            <div className="relative z-10 p-2 sm:p-3 ">
              <div className="flex flex-wrap justify-center content-start mt-2 sm:mt-3 w-40 h-40">
                <h2 className="lg:text-base sm:text-sm font-bold text-dorado mb-1 text-center">
                  Registro Nacional de turismo
                </h2>
                <p className="mt-1 text-center text-sm text-white">Compite en licitaciones y proyectos gubernamentales.</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 pointer-events-none "></div>
          </div>
          <div className="absolute left-10 bottom-4 w-auto z-30">
            {/* <button className="relative btn btn-sm transition-transform transform hover:scale-105 hover-gradient-rose z-40">
            Conoce Más
            </button> */}
            <NavLink to="/mercantil">
              <ButtonGeneral name="Conoce mas"/>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Card tres proponente */}
      <div className="col-span-1 relative">
        <div className="flex transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer rounded-lg">
          <div className="absolute w-[15rem] left-[-1.2rem] top-[-5.8rem] z-20">
            <img
              src="https://i.postimg.cc/141Sh7NH/persona-Rup.png" 
              alt="Img RUP"
              className="drop-shadow-xl"
            />
          </div>
          <div className="relative w-full max-w-[12rem] bg-opacity-70 backdrop-blur-md fondo-card shadow-xl rounded-lg overflow-hidden z-10 ">
            <div className="relative z-10 p-2 sm:p-3 ">
              <div className="flex flex-wrap justify-center content-start mt-2 sm:mt-3 w-40 h-40">
                <h2 className="lg:text-base sm:text-sm font-bold text-dorado mb-1 text-center">
                  Registro Unico Proponentes
                </h2>
                <p className="mt-1 text-center text-sm text-white">Compite en licitaciones y proyectos gubernamentales.</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 pointer-events-none "></div>
          </div>
          <div className="absolute left-10 bottom-4 w-auto z-30">
            {/* <button className="relative btn btn-sm transition-transform transform hover:scale-105 hover-gradient-rose z-40">
            Conoce Más
            </button> */}
            <NavLink to="/mercantil">
              <ButtonGeneral name="Conoce mas"/>
            </NavLink>
          </div>
        </div>
      </div>
      


      {/* Card cuatro */}
      <div className="col-span-1 relative">
        <div className="flex transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer rounded-lg">
          <div className="absolute w-[17rem] right-[-8.7rem] top-[-6.8rem] z-20">
            <img
              src="https://i.postimg.cc/fWt0s39t/Persona-Juridica.png"
              alt="Img Juridica"
              className="drop-shadow-xl"
            />
          </div>
          <div className="relative w-full max-w-[12rem] bg-opacity-70 backdrop-blur-md fondo-card shadow-xl rounded-lg overflow-hidden ">
            <div className="relative z-10 p-2 sm:p-3">
              <div className="flex flex-wrap justify-center content-start mt-2 sm:mt-3 w-40 h-40">
                <h2 className="lg:text-base sm:text-sm font-bold text-dorado mb-1 text-center">
                  Registro Entidades Sin Animo de Lucro
                </h2>
                <p className="mt-1 text-center text-sm text-white">Impulsa tu causa y accede a beneficios fiscales.</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 pointer-events-none"></div>
          </div>
          <div className="absolute left-10 bottom-4 w-auto z-30">
            <ButtonGeneral name="Conoce mas"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export { RecordsCard };
