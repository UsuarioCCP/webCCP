import React from "react";

const BannerGeneral = ({ background, title, description, children,img }) => {
  return (
    <div className="relative flex justify-center mb-2 w-11/12 rounded-xl overflow-hidden mx-auto">
      <div
        className="flex flex-col justify-evenly w-full h-[30vh] lg:h-[65vh] border rounded-2xl shadow-xl bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* Overlay Oscuro */}
        <div className="absolute inset-0 z-0 bg-slate-300 opacity-60 rounded-2xl"></div>

        {/* Contenido del Banner */}
        <div className="relative flex justify-center z-10 text-center h-[15vh] lg:h-[50vh] bg-slate-50 bg-opacity-70 m-10 rounded-2xl">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            {title}
          </h2>
          <p className="text-base lg:text-xl lg:w-3/4 lg:leading-loose text-slate-700 self-center lg:font-bold  m-2 lg:m-20">
            {description}
          </p>

          <img className="absolute z-40 w-60 bottom-0 right-0" src={img} alt="img" />
        </div>

        

        {/* Children */}
        {children && <div className="absolute inset-0 z-10">{children}</div>}
      </div>
    </div>
  );
};

export { BannerGeneral };
