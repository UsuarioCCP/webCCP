import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarConciliacion = ({children}) => {
  // Array con los elementos del menú
  const menuItems = [
    { name: 'Requisitos y Tarifas', to: '/centro-conciliacion/requisitos-tarifas' },
    { name: 'Conciliadores', to: '/centro-conciliacion/conciliadores' },
    { name: 'Reglamento del Centro', to: '/centro-conciliacion/reglamento' },
    // Agrega más elementos aquí según lo necesites
  ];

  return (
    <div className="flex h-full ">
      {/* Columna izquierda - Menú del SidebarLeyTransparencia */}
      <div className="w-1/4 bg-white p-6 border-r border-gray-300 ">
        <ul className="menu bg-base-200 rounded-box w-full gap-y-5 ">
        <li className="menu-title font-bold my-5">Información de la Entidad</li>
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? 'block text-gradient-rose font-bold bg-gray-300 p-3 rounded-lg shadow-lg'
                    : 'block text-gray-700 hover:text-dorado hover:bg-gray-200 transition-all p-3 rounded-lg'
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Columna derecha - Contenido dinámico */}
      <div className="w-3/4 bg-white mx-5 p-2">
        {children}
      </div>
    </div>
  );
};

export { SidebarConciliacion };
