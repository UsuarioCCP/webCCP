import { useState, useEffect, useCallback } from "react";

const NewsAfiliados = () => {
  const currentYear = new Date().getFullYear();
  const destacados = [
    {
      titulo: "Categoría Compromiso Social y Sostenibilidad",
      descripcion:
        "Anudando con PAO, de Angelica Paola Delgado Arenas y Agropecuaria Latorre SAS, de Carlos Andres Latorre Araque",
      imagenUrl: "https://via.placeholder.com/600x400",
    },
    {
      titulo: "Categoría Empresa de Mayor Crecimiento Empresarial",
      descripcion:
        "Ips Codigo Azul Medicina en su Hogar, de Nancy Hernandez Sanabria",
      imagenUrl: "https://via.placeholder.com/600x400",
    },
    {
      titulo: "Categoria Mejor Proyecto Emprendedor",
      descripcion:
        "Endulzate: Postres y Gelatina de Mildred Carolina Villamizar Suarez",
      imagenUrl: "https://via.placeholder.com/600x400",
    },
    {
      titulo: "Categoría Mejor Empresa Innovadora",
      descripcion:
        "Escuela de Transformación interior GELVA SAS de Rosangela Casto Salazar",
      imagenUrl: "https://via.placeholder.com/600x400",
    },
    {
      titulo: "Promoción del Comercio Local",
      descripcion:
        "DECOARTE RICORDIS de Jose Ricardo Parada Delgado",
      imagenUrl: "https://via.placeholder.com/600x400",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Usamos useCallback para memorizar la función y evitar recreaciones en cada render
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex < destacados.length - 1 ? prevIndex + 1 : 0
    );
  }, [destacados.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 20000);

    return () => clearInterval(interval);
  }, [nextSlide]); // Se mantiene estable gracias a useCallback

  return (
    <div className="overflow-hidden h-lvh bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-indigo-600">
            Encuentro de Afiliados 
            <span> {currentYear}</span>
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Celebrando a nuestros empresarios destacados
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Revive los mejores momentos de nuestro encuentro anual, donde
            honramos el esfuerzo y dedicación de nuestros afiliados.
          </p>
        </div>
        <div className="mt-12 relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10"
          >
            &#8249;
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 5)}%)`,
                width: `${(destacados.length / 3) * 100}%`,
              }}
            >
              {destacados.map((destacado, index) => (
                <div
                  key={index}
                  className="shrink-0 w-full md:w-1/5 flex-none px-4"
                >
                  <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center h-full">
                    <img
                      src={destacado.imagenUrl}
                      alt={destacado.titulo}
                      className="w-full h-60 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {destacado.titulo}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {destacado.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 z-10"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export { NewsAfiliados };
