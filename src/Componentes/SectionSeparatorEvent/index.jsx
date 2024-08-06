import React from 'react';
import './styles.css';

const SectionSeparatorEvent = () => {
  return (
    <div className="relative flex justify-center mb-2 ">
      <div className="flex w-11/12 rounded-xl bg-gradient-rose">
        <div className="flex flex-col justify-evenly w-full h-[26vh] border rounded-xl shadow-xl  bg-baner-separador-dos">
          <h2 className=" text-4xl font-extrabold text-gradient-rose ">¡Registra tu empresa hoy mismo!</h2>
          <p className="text-xl font-semibold">Haz crecer tu negocio de manera formal y segura</p>
          {/* <img src="https://i.postimg.cc/15XP1rj5/BANNER.png" alt="" className=' w-full h-[30vh] border rounded-xl shadow-xl object-cover' /> Ajusta la altura según necesites */}
        </div>
      </div>
    </div>
  );
};

export {SectionSeparatorEvent};