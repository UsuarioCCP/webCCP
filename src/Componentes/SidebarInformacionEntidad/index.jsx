import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SidebarInformacionEntidad = () => {
  // Array con los elementos del menú
  const menuItems = [
    { name: 'Visión y Misión', to: 'vision-mision' },
    { name: 'Funciones y Deberes', to: 'funciones' },
    { name: 'Organigrama', to: 'organigrama' },
    { name: 'Mapas y Cartas Descriptivas de los Procesos', to: 'mapa-procesos' },
    { name: 'Directorio Institucional', to: 'dir-institucional' },
    { name: 'Directorio Empleados y Contratistas', to: 'dir-empleados' },
    { name: 'Directorio Entidades', to: 'dir-entidades' },
    { name: 'Directorio Agremiaciones', to: 'dir-agremiaciones' },
    { name: 'Servicios al Publico', to: 'servicios-al-publico' },
    { name: 'Procedimientos para la toma de decisiones', to: 'procedimientos-decisiones' },
    { name: 'Mecanismo de Presentación PQRSF', to: 'presentacion-pqrsf' },
    { name: 'Calendario Actividades', to: 'calendario-actividades' },
    { name: 'Información Sobre Decisiones que Pueden Afectar al Público', to: 'info-decisiones' },
    { name: 'Entes y Autoridades que nos Vigilan', to: 'autoridades-vigilantes' },
    { name: 'Publicación de Hojas de Vida', to: 'publicacion-hv' },
    // Agrega más elementos aquí según lo necesites
  ];

  return (
    <div className="flex h-full">
      {/* Columna izquierda - Menú del SidebarLeyTransparencia */}
      <div className="w-1/4 bg-white p-6 border-r border-gray-300">
        <ul className="menu bg-base-200 rounded-box w-full">
        <li className="menu-title font-bold">Información de la Entidad</li>
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
      <div className="w-3/4 bg-white p-2">
        <Outlet />
      </div>
    </div>
  );
};

export { SidebarInformacionEntidad };
