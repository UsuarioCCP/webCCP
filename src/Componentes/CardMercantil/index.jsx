import React from "react";

const CardMercantil = ({registro, descripcion, children}) => {
    return (
      <div className="flex justify-center">
        <div class="m-12 bg-gray-500 max-w-[300px] rounded-xl hover:bg-gray-700 hover:scale-110 duration-700 p-5">
          <h4 class="py-2 text-center text-white font-bold">{registro}</h4>
          <p class="text-base leading-7 text-white font-semibold space-y-4">{descripcion}</p>
          <p class="text-sm leading-7 text-slate-300 my-5 space-y-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro est numquam ipsa consequatur provident fugiat quaerat cupiditate temporibus cum?</p>
          <div className="flex justify-center my-2">
            {children}
          </div>
        </div>

      </div>
    );
  };

export {CardMercantil};