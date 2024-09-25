import { useState } from "react";
import { LayoutGeneral } from "../../../Layouts/LayoutGeneral";
import { SidebarConciliacion } from "../../../Componentes/SidebarConciliacion";

const funcionesYDeberes = [
  {
    id: 1,
    titulo: "Solicitud",
    descripcion:
      "La solicitud debe ir dirigida al centro de conciliación de la Cámara de Comercio de Pamplona.",
  },
  {
    id: 2,
    titulo: "Solicitud mediante apoderado",
    descripcion:
      "Si se presenta la solicitud mediante apoderado, el poder debe ser dirigido al centro de conciliación de la Cámara de Comercio de Pamplona y debidamente autenticado.",
  },
  {
    id: 3,
    titulo: "Parametros para presentar la solicitud de manera escrita",
    descripcion:
      "A. Enunciar de manera clara y precisa los hechos motivo de conciliación.\nB. Enunciar claramente lo que se pretende conciliar o acuerdo al que se pretende llegar.\nC. Al momento de notificar, se debe exponer el nombre, cédula, teléfono, dirección, ciudad, tanto de la parte convocante como de la parte convocada.\nD. Aportar las pruebas que consideren necesarias la solicitud de conciliación.\nE. Copia de la solicitud de conciliación para traslado a todos los convocados y el conciliador.",
  },
];

const tarifasVigentes = [
  { id:1,
    cuantia:"De 0 hasta $9.421.471",  
    cuantiaUVT:"De 0 UVT hasta 200.18 UVT",
    tarifa:"$353.458 + $67.157",
    tarifaUVT:"7.51 UVT",
    valorTotal:"$420.615", 
  },
  { id:2,
    cuantia:"De $9.421.942 hasta $15.310.244",  
    cuantiaUVT:"De 200.19 UVT hasta 325.30 UVT",
    tarifa:"$510.184 + $96.935",
    tarifaUVT:"10.84 UVT",
    valorTotal:"$607.119", 
  },
  { id:3,
    cuantia:"De $15.310.715 hasta $20.020.980",  
    cuantiaUVT:"De 325.31 UVT hasta 425.39 UVT",
    tarifa:"$600.078 + $114.015",
    tarifaUVT:"12.75 UVT",
    valorTotal:"$714.093", 
  },
  { id:4,
    cuantia:"De $20.021.451 hasta $41.219.527",  
    cuantiaUVT:"De 425.40 UVT hasta 875.80 UVT",
    tarifa:"$824.578 + $156.670",
    tarifaUVT:"17.52 UVT",
    valorTotal:"$981.248", 
  },
  { id:5,
    cuantia:"De $41.219.997 hasta $61.240.036",  
    cuantiaUVT:"De 875.81 UVT hasta 1301.18 UVT",
    tarifa:"$981.305 + $186.448",
    tarifaUVT:"20.85 UVT",
    valorTotal:"$1.167.753", 
  },
  { id:6,
    cuantia:"Más de $61.240.507",  
    cuantiaUVT:"Más de 1301.19 UVT",
    tarifa:"3.5% + IVA 19%",
    tarifaUVT:"",
    valorTotal:"", 
  },
];

const formatDescription = (text) => {
  const lines = text.split('\n');
  const listItems = [];
  let currentList = [];

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    const listPattern = /^[A-Z]\./;

    if (listPattern.test(trimmedLine)) {
      // Si la línea comienza con el patrón de lista
      if (currentList.length > 0) {
        listItems.push(<li key={listItems.length}>{currentList.join(' ')}</li>);
        currentList = [];
      }
      currentList.push(trimmedLine.replace(listPattern, '').trim());
    } else {
      // Si no es parte de una lista, añadir el contenido actual de la lista
      if (currentList.length > 0) {
        listItems.push(<li key={listItems.length}>{currentList.join(' ')}</li>);
        currentList = [];
      }
      listItems.push(<p key={listItems.length} className="mt-4 text-gray-700">{trimmedLine}</p>);
    }
  });

  if (currentList.length > 0) {
    listItems.push(<li key={listItems.length}>{currentList.join(' ')}</li>);
  }

  return <ul className="flex flex-wrap list-disc pl-8 space-y-2">{listItems}</ul>;
};

const RequisitosTarifas = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <LayoutGeneral>
      <SidebarConciliacion>
        <div className="mb-10">
          {/* <div className="fixed overlay-vision-mision z-10 w-3/4 h-lvh"></div> */}
          <div className="relative z-20 pt-2 mb-5">
            <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gradient-rose drop-shadow-xl">
              Requisitos Solicitud Conciliación
            </h2>
            <div className="text-center my-10 mx-2 lg:mx-48 font-normal text-gray-900 sm:text-xl sm:leading-9">
              <p>
                Para presentar la solicitud de conciliación al centro de conciliación de la Cámara de Comercio de Pamplona, se deben cumplir con los siguientes requisitos:
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
                      <div className="mt-4">
                        {formatDescription(item.descripcion)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="flex items-center">
              <h2 className="w-full my-5 text-4xl font-bold leading-tight text-center text-gradient-rose drop-shadow-xl">
                Tarifas de conciliación <span>2024</span>
              </h2>
              <img className="w-52" src="https://i.postimg.cc/Wz9RD81B/CENTRO-CONCILIACION-2.png" alt="logo-conciliación" />
            </div>

            <div className="w-2/3 overflow-x-auto">

            <table className="table border my-5 border-gray-800">
              {/* head */}
              <thead>
                <tr className="bg-red-100">
                  <th className="font-semibold text-lg border border-gray-700">CUANTIA</th>
                  <th className="font-semibold text-lg border border-gray-700">TARIFA + IVA (19%)</th>
                  <th className="font-semibold text-lg border border-gray-700">VALOR TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {tarifasVigentes.map((item, index) => (
                  <tr key={item.id} className={index % 2 === 0 ? "bg-base-200 border border-gray-800" : ""}>
                    <td className="border border-gray-700">{item.cuantia} <br /> {item.cuantiaUVT}</td>
                    <td className="border border-gray-700">{item.tarifa} <br /> {item.tarifaUVT}</td>
                    <td className="border border-gray-700">{item.valorTotal || "N/A"}</td> {/* Mostrar "N/A" si no hay valor total */}
                  </tr>
                ))}
              </tbody>
            </table>

            </div>
          </div>

        </div>
      </SidebarConciliacion>
    </LayoutGeneral>
  );
};

export { RequisitosTarifas };
