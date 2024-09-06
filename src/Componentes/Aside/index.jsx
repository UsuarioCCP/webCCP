import React from "react";
import { ButtonFloat } from "../ButtonFloat";
import './styles.css'

const Aside = () => {
  return (
    <div className="fixed flex flex-col right-0 lg:top-36 z-50 h-auto gap-10">
      <div className="drawer drawer-end ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <ButtonFloat drawerId="my-drawer-4" />
        </div> 

        <div className="drawer-side ">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu self-start p-4 w-full md:w-80 min-h-full bg-base-200 text-base-content">
            {/* Close button */} 
            <li className="flex justify-end">
              <label htmlFor="my-drawer-4" className="btn btn-circle ">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
            </li>
            {/* Sidebar content here */}
            <li className="item mx-5 text-lg"><span>Consulta Homonimia</span></li>
            <li className="item mx-5 text-lg"><span>Tramites Registrales</span></li>
            <li className="item mx-5 text-lg"><span>services</span></li>
            <li className="item mx-5 text-lg"><span>contact</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Aside };
