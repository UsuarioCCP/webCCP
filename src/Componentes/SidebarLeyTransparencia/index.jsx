import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { LayoutGeneral } from "../../Layouts/LayoutGeneral";
import { CardGeneral } from "../../Componentes/CardGeneral";
import { BannerGeneral } from "../../Componentes/BannerGeneral";

const SidebarLeyTransparencia = () => {
  // Array con los elementos del menú
  const menuItems = [
    { name: "Información de la Entidad", to: "info-entidad" },
    { name: "Normatividad", to: "normatividad" },
    { name: "Contratación", to: "contratacion" },
    { name: "Planeación", to: "planeacion" },
    { name: "Tramites", to: "tramites" },
    { name: "Participa", to: "participa" },
    { name: "Datos Abiertos", to: "datos-abiertos" },
    {
      name: "Información Especifica para Grupos de Interes",
      to: "info-grupos-interes",
    },
    {
      name: "Obligación de Reporte de Información Especifica por Parte de la Entidad",
      to: "reporte-entidad",
    },
    { name: "Atención y Servicios a la Ciudadanía", to: "atencion-ciudadania" },
    { name: "Noticias", to: "noticias" },
    // Agrega más elementos aquí según lo necesites
  ];

  const TextBanner =
    "En cumplimiento de la Ley 1712 de 2014, la Cámara de Comercio de Pamplona pone a disposición de los ciudadanos, grupos de valor y organismos de control, la sección de Transparencia y Acceso a la Información Pública, en donde podrán conocer y consultar la información que esta entidad genera, en el desarrollo de su misión y funciones. En este sitio se proporciona y facilita el acceso a la misma en los términos más amplios posibles en el momento. A continuación, haga clíc en clic en la opción que desee de la lista que se encuentra en la parte izquierda.";

  // Contenido por defecto cuando no hay selección
  const defaultContent = (
    <div className="">
      <section className="">
        <h2 className="w-full my-4 text-4xl font-bold leading-tight text-center text-gradient-rose">
          Ley de Transparencia y Acceso a la Información Pública
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient-red-yellow w-96 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
      </section>
      <BannerGeneral
        background="https://i.postimg.cc/yNDpSJP3/fondo-conciliacion.jpg"
        // title="¡Centro Conciliación!"
        description={TextBanner}
        img=""
      />
    </div>
  );

  // Hook para obtener la ruta actual
  const location = useLocation();

  // Comprobación si la ruta actual no coincide con ninguna del menú
  const isDefaultContent = location.pathname === "/ley-transparencia";

  return (
    <div className="flex h-full">
      {/* Columna izquierda - Menú del SidebarLeyTransparencia */}
      <div className="w-1/4 bg-white p-6 border-r border-gray-300">
        <ul className="menu bg-base-200 rounded-box w-full">
          <li className="menu-title font-bold">Ley de Transparencia</li>
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "block text-gradient-rose font-bold bg-gray-300 p-3 rounded-lg shadow-lg"
                    : "block text-gray-700 hover:text-dorado hover:bg-gray-200 transition-all p-3 rounded-lg"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Columna derecha - Contenido dinámico o contenido por defecto */}
      <div className="w-3/4 bg-white p-4">
        {isDefaultContent ? defaultContent : <Outlet />}
      </div>
    </div>
  );
};

export { SidebarLeyTransparencia };
