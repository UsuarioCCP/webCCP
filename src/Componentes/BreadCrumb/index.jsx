import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Si estamos en la página de inicio, no mostrar el breadcrumb
  if (pathnames.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" className="relative z-40 h-0 left-0 top-0 flex flex-col items-start w-full">
      <ol className="list-none p-0 m-0 flex text-sm text-gray-600">
        <li className="flex items-center">
          <NavLink 
            to="/" 
            end
            className="hover:font-bold transition-colors duration-200 text-gray-600"
            style={({ isActive }) => isActive ? { color: 'var(--dorado)', fontWeight: 'bold' } : {}}
          >
            Home
          </NavLink>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <li key={to} className="flex items-center">
              <span className="mx-1 text-gray-400">/</span> {/* Separador */}
              <NavLink 
                to={to} 
                end
                className="hover:text-dorado hover:font-bold transition-colors duration-200 text-gray-600"
                style={({ isActive }) => isActive ? { color: 'var(--dorado)', fontWeight: 'bold' } : {}}
              >
                {value.charAt(0).toUpperCase() + value.slice(1)}
              </NavLink>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export { Breadcrumb };
