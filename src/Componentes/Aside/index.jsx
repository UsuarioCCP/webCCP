import { ButtonFloat } from "../ButtonFloat";
import { NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { HoverButton } from "../HoverButton";
import "./styles.css";

// 📌 Estructura del menú con sub-submenús
const menuItems = [
  {
    text: "Compra tus certificados",
    link: "/noticia-mercantil",
  },
  {
    text: "Consulta Códigos CIIU",
    link: "/noticia-mercantil",
  },
  {
    text: "Consulta Homonimia",
    link: "/noticia-mercantil",
  },
  {
    text: "Estado de Trámite",
    subMenu: [
      {
        name: "Registral",
        href: "/institucional/historia",
      },
      {
        name: "PQRSF",
        href: "/institucional/quienes-somos",
        subMenu: [
          { name: "Anonimas", href: "/pqrsf/radicacion" },
          { name: "Generales", href: "/pqrsf/seguimiento" },
        ],
      },
    ],
  },
];

// 📌 Función recursiva para renderizar menús y submenús con hover independiente
const renderMenu = (items) => {
  return (
    <ul className="flex flex-col space-y-1 pl-4">
      {items.map((item, index) => (
        <li key={index} className="relative group">
          {item.subMenu ? (
            <details>
              <summary>
                <HoverButton text={item.name || item.text} />
              </summary>
              <div className="ml-4 mt-1 border-l border-gray-400 pl-2">
                {renderMenu(item.subMenu)} {/* 🔁 Renderizado recursivo */}
              </div>
            </details>
          ) : (
            <NavLink 
              to={item.href || item.link}
            >              
              <HoverButton text={item.name || item.text} />
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};

const Aside = () => {
  return (
    <div className="fixed flex flex-col right-0 top-32 lg:top-36 z-50 h-auto gap-10">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <ButtonFloat drawerId="my-drawer-4" />
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

          <ul className="menu p-3 w-full md:w-80 min-h-full bg-base-200 text-base-content">
            <li className="flex justify-end">
              <label htmlFor="my-drawer-4" className="btn btn-circle">
                <XMarkIcon className="h-6 w-6" />
              </label>
            </li>
            {renderMenu(menuItems)} {/* 🔁 Llama a la función recursiva */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Aside };