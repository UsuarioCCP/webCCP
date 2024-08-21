import React from "react";
import { ButtonFloat } from "../ButtonFloat";
import './styles.css'

const Aside = () => {
  return (
    <div className="fixed flex flex-col right-0 lg:top-40 z-50 h-52 gap-10">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <ButtonFloat drawerId="my-drawer-4" />
        </div> 

        <div className="drawer-side">
          <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu self-start p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Close button */} 
            <li className="flex justify-end">
              <label htmlFor="my-drawer-4" className="btn btn-sm btn-circle">✕</label>
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
