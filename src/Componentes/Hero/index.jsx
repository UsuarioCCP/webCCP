import React from "react";
import { Carousel } from '../Carousel'; // Asegúrate de ajustar la ruta según tu estructura de archivos
// import { motion } from "framer-motion";

const Hero = () => {
    return (
    <section className="relative h-[80vh] flex items-center justify-center text-white shadow-2xl">
      {/* <Carousel items={items} currentIndex={currentIndex} /> El carrusel con los elementos */}
      <div className="w-full h-full">
        <img src="https://i.postimg.cc/j26W7Bg1/Pamplona-Colombia.png" alt="Pamplona Colombia" className="w-full h-full object-cover object-center" 
        />
      </div>
      <Carousel />
    </section>
  );
};

export { Hero };
