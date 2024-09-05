import React from "react";

const BannerGeneral = ({ background, title, description, children }) => {
    return (
        <div className="relative flex justify-center mb-2 w-11/12 rounded-xl overflow-hidden mx-auto">
        <div
          className="flex flex-col justify-evenly w-full h-[30vh] lg:h-[50vh] border rounded-2xl shadow-xl bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          {/* Overlay Oscuro */}
          <div className="absolute inset-0 z-0 bg-neutral-700 opacity-60"></div>
  
          {/* Contenido del Banner */}
          <div className="relative flex justify-center z-10 text-center h-[15vh] lg:h-[40vh]">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">
              {title}
            </h2>
            <p className="text-base lg:text-xl lg:w-3/4 lg:leading-loose text-white self-center lg:font-bold m-2 lg:m-10">
              {description}
            </p>
          </div>
          
          {/* Children */}
          {children && (
            <div className="absolute inset-0 z-10">
              {children}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export { BannerGeneral };
  