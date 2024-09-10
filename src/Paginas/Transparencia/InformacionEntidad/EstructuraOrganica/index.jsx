import React from "react";

const Organigrama = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      {/* Background Overlay */}
      <div className="fixed overlay-vision-mision z-10 w-3/4 h-lvh bg-white opacity-50"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gradient-rose drop-shadow-xl">
          Organigrama
        </h2>

        {/* Description */}
        <div className="text-center my-10 mx-4 lg:mx-48 font-normal text-gray-900 sm:text-xl sm:leading-9">
          <p>
            A continuación se presenta el organigrama de la Cámara de Comercio,
            donde se detallan las diferentes áreas y sus respectivas
            responsabilidades dentro de la organización.
          </p>
        </div>

        {/* Image Container */}
        <div className="flex justify-center items-center">
          <div className="shadow-lg rounded-lg overflow-hidden bg-white">
            <img
              src="https://camarapamplona.org.co/camara2/sites/default/files/organigrama.jpg"
              alt="Organigrama de la Cámara de Comercio"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Additional Content (if needed) */}
        <div className="text-center mt-12">
          <p className="text-gray-700">
            El organigrama muestra la estructura de la Cámara de Comercio,
            facilitando la comprensión de sus áreas funcionales y
            responsabilidades clave.
          </p>
        </div>
      </div>
    </div>
  );
};

export { Organigrama };