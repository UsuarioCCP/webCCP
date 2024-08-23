import React from 'react';
import './styles.css';

const SectionSeparator = () => {
  return (
    <div className="relative flex justify-center mb-2">
      <div className="flex w-11/12 rounded-xl bg-gradient-rose">
        <div className="flex flex-col justify-evenly w-full h-[15vh] lg:h-[25vh] border rounded-xl shadow-xl  bg-baner-separador">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">¡Registra tu empresa hoy mismo!</h2>
          <p className="text-lg lg:text-2xl font-semibold">Haz crecer tu negocio de manera formal y segura</p>
          {/* <img src="https://i.postimg.cc/15XP1rj5/BANNER.png" alt="" className=' w-full h-[30vh] border rounded-xl shadow-xl object-cover' /> Ajusta la altura según necesites */}
        </div>
      </div>
    </div>
  );
};

export {SectionSeparator};

// ¡Registra tu empresa hoy mismo!
// Haz crecer tu negocio de manera formal y segura