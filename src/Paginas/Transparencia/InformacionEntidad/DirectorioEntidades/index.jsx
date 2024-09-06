import React from "react";

// Datos de las entidades
const entities = [
  {
    id: 1,
    name: "Superintendencia Sociedades",
    logoUrl:
      "https://i.postimg.cc/7hVb6zqx/Logo-Super-Sociedades.png", // Ruta del logo
    websiteUrl: "https://www.supersociedades.gov.co/",
  },
  {
    id: 2,
    name: "Confecamaras",
    logoUrl: "https://i.postimg.cc/jjsN4Rk3/Logo-Confecamaras.png",
    websiteUrl: "https://confecamaras.org.co/",
  },
  {
    id: 3,
    name: "Banco Agrario de Colombia",
    logoUrl: "/path-to-logo/logo3.png",
    websiteUrl: "https://www.entidad3.com",
  },
];

// Componente principal que maneja todo
const DirectorioEntidades = () => {
  return (
    <div className="container w-3/4 mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Entidades Asociadas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
        {entities.map((entity) => (
          <a
            href={entity.websiteUrl}
            target="_blank"
            rel="noopener noreferrer" // Protege contra ataques de seguridad
            className="text-black rounded-lg z-10 underline:none"
          >
            <div
              key={entity.id}
              className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-2 hover:bg-gray-100 transition duration-300"
            >
              <img
                src={entity.logoUrl}
                alt={`${entity.name} logo`}
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

export { DirectorioEntidades };
