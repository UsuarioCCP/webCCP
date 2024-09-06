import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SidebarLeyTransparencia = () => {
  // Array con los elementos del menú
  const menuItems = [
    { name: 'Información de la Entidad', to: 'info-entidad' },
    { name: 'Normatividad', to: 'normatividad' },
    { name: 'Contratación', to: 'contratacion' },
    { name: 'Planeación', to: 'planeacion' },
    { name: 'Tramites', to: 'tramites' },
    { name: 'Participa', to: 'participa' },
    { name: 'Datos Abiertos', to: 'datos-abiertos' },
    { name: 'Información Especifica para Grupos de Interes', to: 'info-grupos-interes' },
    { name: 'Obligación de Reporte de Información Especifica por Parte de la Entidad', to: 'reporte-entidad' },
    { name: 'Atención y Servicios a la Ciudadanía', to: 'atencion-ciudadania' },
    { name: 'Noticias', to: 'noticias' },
    // Agrega más elementos aquí según lo necesites
  ];

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
      <div className="w-3/4 bg-white p-8">
        <Outlet />
      </div>
    </div>
  );
};

export { SidebarLeyTransparencia };

