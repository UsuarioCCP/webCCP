import React from "react";

const BannerGeneral = ({ background, title, description, children, imagen, icon }) => {
  return (
    <div className="relative flex justify-center self-center mb-2 w-11/12 rounded-xl overflow-hidden mx-auto">
      <div
        className="flex self-center w-full h-[30vh] lg:h-[65vh] border rounded-2xl shadow-xl bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* Overlay claro */}
        <div className="absolute inset-0 z-0 bg-slate-300 opacity-60 rounded-2xl"></div>

        {/* Contenido del Banner */}
        <div className="w-full flex flex-wrap justify-center z-10 text-center h-[15vh] lg:h-[55vh] bg-slate-50 bg-opacity-70 m-10 rounded-2xl">
          <div className="flex h-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">
              {title}
            </h2>
            <p className="text-base lg:text-xl lg:leading-loose text-slate-700 self-center lg:font-bold lg:mx-16 lg:my-2">
              {description}
            </p>
          </div>

          {/* Renderiza la imagen solo si 'img' está presente */}
          {imagen && (
            <img className="flex w-52" src={imagen} alt="Optional image" />
          )}
          {icon && (
            <i className={`${icon} text-5xl`}></i> 
          )}

        </div>
        {/* Children */}
        {children && <div className="absolute inset-0 z-10">{children}</div>}
      </div>
    </div>
  );
};

export { BannerGeneral };
