import React from "react";

// Datos de las entidades
const agremiaciones = [
  {
    id: 1,
    name: "Confederación Colombiana de Cámaras de Comercio – Confecámaras",
    logoUrl: "https://i.postimg.cc/jjsN4Rk3/Logo-Confecamaras.png",
    websiteUrl: "https://confecamaras.org.co/directorio-de-camaras",
  },
];

// Componente principal que maneja todo
const DirectorioAgremiaciones = () => {
    return(
        
    <div className="container w-3/4 mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Directorio Agremiaciones
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
        {agremiaciones.map((agremiacion) => (
          <a
            href={agremiacion.websiteUrl}
            target="_blank"
            rel="noopener noreferrer" // Protege contra ataques de seguridad
            className="text-black rounded-lg z-10 underline:none"
          >
            <div
              key={agremiacion.id}
              className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-2 hover:bg-gray-100 transition duration-300"
            >
              <img
                src={agremiacion.logoUrl}
                alt={`${agremiacion.name} logo`}
                className="w-full h-20 object-contain"
              />
              {/* <div className="flex-1">
                <h3 className="text-lg font-semibold">{entity.name}</h3>
              </div> */}
            </div>
          </a>
        ))}
      </div>
    </div>

    );
};

export { DirectorioAgremiaciones };

// 