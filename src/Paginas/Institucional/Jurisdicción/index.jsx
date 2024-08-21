import React, { useState, useRef, useEffect } from "react";
import { LayoutGeneral } from "../../../Layouts/LayoutGeneral";
import { CarouselMunicipios } from "../../../Componentes/CarouselMunicipios";
import { ReactComponent as MapaJurisdiccionSVG } from "../../../Assets/Images/Provincia-Cameral.svg";
import './styles.css'

const municipios = [
  {
    id: "Cucutilla",
    nombre: "Cucutilla",
    descripcion: "Despensa Agricola",
    imagen1: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    imagen2: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    imagen3: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    // otras imágenes...
  },
  {
    id: "Chitaga",
    nombre: "Chitaga",
    descripcion: "Encanto a su paso",
    imagen1: "https://i.postimg.cc/QCd45pQB/Chitaga.jpg",
    imagen2: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    imagen3: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    // otras imágenes...
  },
  {
    id: "Pamplona",
    nombre: "Pamplona",
    descripcion: "Noble, Leal y Valeroza",
    imagen1: "https://i.postimg.cc/PxYh9n9b/PAMPLONA.jpg",
    imagen2: "",
    imagen3: "",
    // otras imágenes...
  },
  {
    id: "Pamplonita",
    nombre: "Pamplonita",
    descripcion: "Maravilla sobrenatural",
    imagen1: "https://i.postimg.cc/nzH0bvwd/Pamplonita.jpg",
    imagen2: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    imagen3: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    // otras imágenes...
  },
  {
    id: "Toledo",
    nombre: "Toledo",
    descripcion: "Tierra del santo cristo",
    imagen1: "https://i.postimg.cc/8cc4sTGM/Toledo.jpg",
    imagen2: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    imagen3: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    // otras imágenes...
  },
  {
    id: "Labateca",
    nombre: "Labateca",
    descripcion: "Tierra prodiga y bendita",
    imagen1: "https://i.postimg.cc/hPwyzQfj/Labateca.jpg",
    imagen2: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    imagen3: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    // otras imágenes...
  },
  {
    id: "Silos",
    nombre: "Silos",
    descripcion: "Terruño de ensueño",
    imagen1: "https://i.postimg.cc/nzH0bvwd/Pamplonita.jpg",
    imagen2: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    imagen3: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    // otras imágenes...
  },
  {
    id: "Cacota",
    nombre: "Cacota",
    descripcion: "Magia y encanto",
    imagen1: "https://i.postimg.cc/Tw9NpkDM/Cacota.jpg",
    imagen2: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    imagen3: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    // otras imágenes...
  },
  {
    id: "Mutiscua",
    nombre: "Mutiscua",
    descripcion: "Conocerla es quererla",
    imagen1: "https://i.postimg.cc/SxMZWQMG/Mutiscua.jpg",
    imagen2: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    imagen3: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    // otras imágenes...
  },
  {
    id: "Bochalema",
    nombre: "Bochalema",
    descripcion: "Paraiso turistico",
    imagen1: "https://i.postimg.cc/YSQsw22S/bochalema.webp",
    imagen2: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    imagen3: "https://i.postimg.cc/pXycLJV4/Cucutilla.jpg",
    // otras imágenes...
  },
  // otros municipios...
];

const MapComponent = ({ onMunicipioClick }) => {
  const svgRef = useRef(null);
  const [hoveredMunicipio, setHoveredMunicipio] = useState(null);

  useEffect(() => {
    municipios.forEach((municipio) => {
      const municipioElement = svgRef.current.getElementById(municipio.id);
      if (municipioElement) {
        const originalFill = municipioElement.style.fill;
        const originalStroke = municipioElement.style.stroke;
        municipioElement.style.position = "relative";

        municipioElement.classList.add(
          "transition-transform",
          "duration-500",
          "ease-in-out",
          "cursor-pointer",
          "origin-left"
        );

        const handleMouseEnter = () => {
          municipioElement.style.fill = "#be264c";
          municipioElement.style.stroke = "#d1b980";
          municipioElement.classList.add("scale-105");
          municipioElement.style.zIndex = "50";
          setHoveredMunicipio(municipio);
        };

        const handleMouseLeave = () => {
          municipioElement.style.fill = originalFill;
          municipioElement.style.stroke = originalStroke;
          municipioElement.classList.remove("scale-105");
          setHoveredMunicipio(null); // Limpia el municipio cuando se quita el hover
        };

        const handleClick = () => {
          // Restaurar todos los municipios a su estilo original
          municipios.forEach((m) => {
            const elem = svgRef.current.getElementById(m.id);
            if (elem) {
              elem.style.fill = originalFill;
              elem.style.stroke = originalStroke;
              elem.classList.remove("scale-105");
            }
          });
          // Abrir el modal
          onMunicipioClick(municipio);
        };

        municipioElement.addEventListener("mouseenter", handleMouseEnter);
        municipioElement.addEventListener("mouseleave", handleMouseLeave);
        municipioElement.addEventListener("click", handleClick);

        return () => {
          municipioElement.removeEventListener("mouseenter", handleMouseEnter);
          municipioElement.removeEventListener("mouseleave", handleMouseLeave);
          municipioElement.removeEventListener("click", handleClick);
        };
      }
    });
  }, [onMunicipioClick]);

  return (
    <div className="relative">
      <div className="w-5/6 md:w-full">
        <MapaJurisdiccionSVG ref={svgRef} width="130%" height="auto" />
      </div>
      {hoveredMunicipio && (
        <div className="absolute z-20 text-white font-semibold bg-gradient-rose px-5 py-1 rounded-md pointer-events-none top-16 lg:top-20 left-48 md:left-60 translate-y-4">
          {hoveredMunicipio.nombre}
        </div>
      )}
    </div>
  );
};

const Jurisdiccion = () => {
  const [selectedMunicipio, setSelectedMunicipio] = useState(null);

  const handleMunicipioClick = (municipio) => {
    setSelectedMunicipio(municipio);
  };

  const closeModal = () => {
    setSelectedMunicipio(null);
  };

  return (
    <LayoutGeneral>
      <div className="px-4 bg-white rounded-lg shadow-lg bg-jurisdiccion">
        <div className="fixed overlay-jurisdiccion w-full h-svh"></div>
        <div className="relative z-30 pt-2">
          <h2 className="text-3xl text-gradient-rose font-bold m-8 text-center drop-shadow-xl">
            Nuestra Jusrisdicción
          </h2>
          <p className="text-center mt-5 lg:mx-48 leading-loose">
            La Jurisdicción de la Cámara de Comercio de Pamplona, fue
            establecida por medio del decreto 74 de 1976, Artículo 27, la cual
            comprende los municipios de Pamplona, Bochalema, Chitagá, Cácota,
            Labateca, Mutiscua, Cucutilla, Pamplonita, Silos y Toledo, en el
            Departamento Norte de Santander.
          </p>
          <div className="flex divider divider-neutral opacity-30 justify-center mx-5 lg:mx-36"></div>
          <div className="relative flex justify-center w-full h-auto">
            <MapComponent onMunicipioClick={handleMunicipioClick}  />
          </div>
        </div>
        {selectedMunicipio && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <article className="bg-gradient-rose rounded-lg p-[1px] shadow-xl w-full max-w-lg">
              <div className="bg-white p-8 rounded-lg shadow-lg relative">
                <button
                  className="absolute z-10 p-2 top-0 right-0 text-gray-600 hover:text-gray-800 focus:outline-none text-3xl"
                  onClick={closeModal}
                >
                  &times;
                </button>
                <div className="card bg-base-100 shadow-xl">
                  <figure className="w-full">
                    {selectedMunicipio.imagen1 && (
                      <img
                        src={selectedMunicipio.imagen1}
                        alt={selectedMunicipio.nombre}
                        className="w-full h-48 object-cover"
                      />
                    )}
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{selectedMunicipio.nombre}</h2>
                    <p>{selectedMunicipio.descripcion}</p>
                  </div>
                  <CarouselMunicipios
                    images={[
                      selectedMunicipio.imagen1,
                      selectedMunicipio.imagen2,
                      selectedMunicipio.imagen3,
                    ].filter((img) => img)}
                  />
                </div>
              </div>
            </article>
          </div>
        )}
      </div>
    </LayoutGeneral>
  );
};

export { Jurisdiccion };
