import React from "react";
import { NavLink } from "react-router-dom";
import { HoverButton } from "../HoverButton"
import LogoVUE from "../../Assets/Images/vue-logo.svg"
import './styles.css'

const Header = () => {


 return (
    <header className="sticky top-0 z-50 shadow-lg ">
      <div
      className="navbar bg-white h-[15vh] shadow-lg ">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <NavLink to="/mercantil" className="hover:bg-white">
                  <HoverButton text="Item 1" />
                </NavLink>
              </li>
              <li className="dropdown dropdown-hover mt-2">
                <HoverButton text="Nuestra Entidad" tabIndex={0} role="button"/>
                <ul className=" menu bg-base-100 rounded-box z-[1] w-40 p-2 m-0 shadow">
                  <li>
                    <NavLink to="/institucional/historia">
                      <HoverButton text="Historia" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/institucional/quienes-somos">
                      <HoverButton text="Quienes Somos" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/institucional/politica-calidad">
                      <HoverButton text="Politica de Calidad" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/institucional/jurisdiccion">
                      <HoverButton text="Nuestra Jurisdicción" />
                    </NavLink>
                  </li>
                  
                </ul>
              </li>
              <li><a href="#item3" className="btn-nav">Item 3</a></li>
            </ul>
          </div>
          <div>
            <div className="absolute left-0 top-[-10rem] w-[20rem] h-[20rem] bg-gradient-re border-1 border-white rounded-full opacity-90">0</div>
              <div className="ml-4">
                  <NavLink to="/">
                    <img src="https://i.postimg.cc/9FDdqdpT/Logo-Camara.png" alt="logo camara" className="absolute left-24 w-24 top-1" />
                  </NavLink>
              </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-14">
            {/* Item sin menu */}
            <li>
              <NavLink to="/mercantil" className="hover:bg-white">
                <HoverButton text="Item 1" />
              </NavLink>
            </li>
            {/* Item con menu */}
            <li className="dropdown dropdown-hover mt-2">
              <HoverButton text="Nuestra Entidad" tabIndex={0} role="button"/>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 m-0 shadow">
                <li>
                  <NavLink to="/institucional/historia">
                    <HoverButton text="Historia" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/institucional/quienes-somos">
                    <HoverButton text="Quienes Somos" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/institucional/politica-calidad">
                    <HoverButton text="Politica de Calidad" />
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/institucional/jurisdiccion">
                    <HoverButton text="Nuestra Jurisdicción" />
                  </NavLink>
                </li>
                
              </ul>
            </li>
            <li className="dropdown dropdown-hover mt-2">
              <HoverButton text="Servicio al ciudadano" tabIndex={0} role="button"/>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 m-0 shadow">
                <li><HoverButton text="PQRSF" /></li>
                <li>
                  <NavLink to="/institucional/empleados">
                    <HoverButton text="Directorio Institucional" />
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="dropdown dropdown-hover mt-2">
              <HoverButton text="Centro Conciliación" tabIndex={0} role="button"/>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 m-0 shadow">
                <li><HoverButton text="Conciliadores" /></li>
                <li><HoverButton text="Requisitos y Tarifas" /></li>
                <li><HoverButton text="Reglamento del Centro" /></li>
              </ul>
            </li>
            <li>
              <NavLink to="/mercantil" className="hover:bg-white">
                <HoverButton text="Ley de Transparencia" />
              </NavLink>
            </li>
            
            {/* <li>
              <details>
                <summary className="btn-nav hover:bg-white">
                  <HoverButton text="Parent" />
                </summary>
                <ul className="p-2 ">
                  <li>
                    <NavLink className="hover:bg-white">
                      <HoverButton text="Submenu 1" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="hover:bg-white">
                      <HoverButton text="Submenu 2" />
                    </NavLink>
                  </li>
                </ul>
              </details>
            </li> */}
            
            
          </ul>
        </div>
        <div className="navbar-end">
            <a href="https://www.vue.gov.co/" target="_blank" rel="noreferrer" className=" drop-shadow-2xl m-5">
                <img className="border rounded-md w-56" src="https://i.postimg.cc/VkPZHGCf/vue.webp" alt="VUE" />
            </a>
        </div>
      </div>
    </header>
 )
};

export {Header}