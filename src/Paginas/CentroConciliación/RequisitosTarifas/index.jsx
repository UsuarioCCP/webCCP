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
            <h2 className="w-full my-5 text-4xl font-bold leading-tight text-center text-gradient-rose drop-shadow-xl">
              Tarifas de conciliación <span>2024</span>
            </h2>
            <div className="w-2/3 overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Rango</th>
                    <th>Valor</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className="bg-base-200">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                </tr>
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
