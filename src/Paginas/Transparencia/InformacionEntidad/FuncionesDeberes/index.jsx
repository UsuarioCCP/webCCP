import { useState } from "react";

// import QuinesSomos from "../../../Assets/Images/Quienes-somos.png";

const funcionesYDeberes = [
  {
    id: 1,
    titulo: "Servir de órgano consultivo del Gobierno Nacional",
    descripcion:
      "Estudiar los asuntos que el Gobierno someta a su consideración y rendir informes sobre la industria, el comercio y otras ramas.",
  },
  {
    id: 2,
    titulo: "Promover investigaciones y estudios",
    descripcion:
      "Adelantar investigaciones y estudios jurídicos, financieros y socioeconómicos que contribuyan al desarrollo de la comunidad.",
  },
  {
    id: 3,
    titulo: "Llevar los registros públicos",
    descripcion:
      "Certificar sobre los actos y documentos inscritos en los registros públicos encomendados por la ley.",
  },
  {
    id: 4,
    titulo: "Recopilar la costumbre mercantil",
    descripcion:
      "Investigar y certificar las prácticas comerciales observadas de forma pública y reiterada dentro de su jurisdicción.",
  },
  {
    id: 5,
    titulo: "Crear centros de arbitraje y conciliación",
    descripcion:
      "Ofrecer servicios de solución de conflictos mediante métodos alternos como arbitraje y conciliación.",
  },
  {
    id: 6,
    titulo: "Promover eventos empresariales",
    descripcion:
      "Organizar ferias, exposiciones y eventos que sean de interés para la comunidad empresarial en su jurisdicción.",
  },
  {
    id: 7,
    titulo: "Participar en centros de eventos y ferias",
    descripcion:
      "Contribuir a la creación de centros de eventos y convenciones que beneficien a la comunidad empresarial.",
  },
];

const FuncionesDeberes = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
      <div className="">
        <div className="fixed overlay-vision-mision z-10 w-3/4 h-lvh"></div>
        <div className="relative z-20 pt-2">
          <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gradient-rose drop-shadow-xl">
            Funciones y Deberes
          </h2>
          <div className="text-center my-10 mx-2 lg:mx-48 font-normal text-gray-900 sm:text-xl sm:leading-9">
            <p>
              Las Cámaras de Comercio ejercen las funciones señaladas en el
              artículo 86 del Código de Comercio, y el artículo 4 del Decreto
              2042 de 2014, compilado en el Decreto 1074 de 2015 y demás normas
              legales y reglamentarias.
            </p>
          </div>

          <div className="flex justify-center max-w-7xl mx-auto p-4">
            <div className="space-y-4 w-5/6">
              {funcionesYDeberes.map((item, index) => (
                <div
                  key={item.id}
                  className="border border-gray-300 rounded-lg shadow-sm p-4"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    <div className="flex items-center space-x-3">
                      <i
                        className={`fa-regular fa-circle-check text-2xl transition-transform duration-300 ${
                          activeIndex === index
                            ? "text-rose-500"
                            : "text-gray-600"
                        }`}
                      ></i>
                      <h3 className="text-xl font-medium">{item.titulo}</h3>
                    </div>
                    <i
                      className={`fa-solid fa-chevron-down transition-transform transform ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    ></i>
                  </div>
                  {activeIndex === index && (
                    <p className="mt-4 text-gray-700">{item.descripcion}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export { FuncionesDeberes };
