import React from "react";

const CardGeneral = ({imgUrl, nombre, descripcion, children}) => {
return (
  <div className="flex justify-center max-w-sm rounded overflow-hidden relative group">
    <div
      className="flex m-10 max-w-[300px] h-80 rounded-xl hover:scale-110 duration-700 p-5 relative overflow-hidden shadow-xl"
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay Oscuro */}
      <div className="absolute inset-0 bg-gray-800 opacity-80 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>
      
      {/* Contenido de la Card */}
      <div className="flex flex-wrap justify-center h-80 relative z-10">
        <h2 className="py-2 text-center text-dorado text-lg font-extrabold">{nombre}</h2>
        <p className=" text-center leading-7 text-white text-base font-semibold space-y-4">{descripcion}</p>
        <div className="flex justify-center my-2">
          {children}
        </div>
      </div>
    </div>
  </div>
);
};


export {CardGeneral};