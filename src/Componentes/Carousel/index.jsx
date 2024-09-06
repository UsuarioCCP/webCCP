import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// import Pamplona from '../../Assets/Images/PAMPLONA.jpg'
// import Pamplona2 from '../../Assets/Images/pamplona2.jpg'
// import Pamplona3 from '../../Assets/Images/pamplona3.jpg'
// import CasaVelez from '../../Assets/Images/casa-velez.jpg'

import { EfectCloud } from '../EfectCloud';

const Carousel = () => {

  const items = [
    { id: "item1", src: "https://img.freepik.com/foto-gratis/sonriendo-camarero-que-muestra-pizarra-muestra-abierta-cafeteria_1170-607.jpg?t=st=1718833917~exp=1718837517~hmac=dafc88be697bab12133d70ec087885fdfe57a1df39b50dba71aa61bea89a8406&w=1060", title: "Bienvenidos a la Cámara de Comercio de Pamplona", text: "Impulsando la generación de oportunidades que potencien el empredimiento y fortalezcan la aceleración empresarial de la región", alt: "Imagen1" },
    { id: "item2", src: "https://img.freepik.com/foto-gratis/zapatero-sonriente-maduro-taller-zapatos_171337-12244.jpg?t=st=1718834005~exp=1718837605~hmac=a6a6fd3f2e58f1b94d204b62a1afee8de1357b6b326e8e3c28816cfa19b68d3c&w=1060", title: "La ciudad de los mil nombres", text: "Pamplona es una ciudad con una rica historia y un futuro prometedor. Únase a nosotros para explorar sus oportunidades.", alt: "Imagen2" },
    { id: "item3", src: "https://img.freepik.com/foto-gratis/empresaria-sonriente-posando-ciudad-brazos-cruzados_23-2148767033.jpg?t=st=1718834039~exp=1718837639~hmac=8847dd015f698e2e5d7e95e12cfab1ba5828aa391c67d1fccd16f4920bfefbfc&w=360", title: "Informate de todos los programas que tenemos para ti", text: "Ofrecemos recursos y apoyo para emprendedores locales, ayudándolos a crecer y prosperar en sus negocios.", alt: "Imagen3" },
    { id: "item4", src: "https://img.freepik.com/foto-gratis/mujer-tiro-medio-sosteniendo-olla-barro_23-2148944979.jpg?t=st=1718834107~exp=1718837707~hmac=c4801688cbe32dd0afcab9dfca1b0b6a73ade8ac845f0f694e75c5e4d06c40e3&w=360", title: "Que esperas para participar", text: "Participe en nuestros eventos y talleres diseñados para fomentar el crecimiento empresarial y la innovación.", alt: "Imagen4" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 2000000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [items.length]);

    return (
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden"> {/* Posición absoluta para ser fondo */}
      <EfectCloud />
      <div className="relative z-5 flex flex-wrap md:flex-nowrap m-0">
        <div className="flex w-full lg:w-auto flex-col lg:flex-row items-center justify-start">
          <div className="flex flex-col md:flex-row md:flex-wrap items-center w-full lg:w-80 m-0 lg:mr-8 mb-8 lg:mb-0 bg-gradient-rose bg-opacity-75 p-4 md:rounded-r-[5rem] h-[80vh]">
            <div className="lg:absolute md:relative lg:left-32 bg-white border-4 border-white rounded-full w-80 lg:w-96 h-80 lg:h-96 shadow-lg">
              <div className="contents rounded-full w-full md:w-[25rem] h-[25rem] overflow-hidden items-center justify-center">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1.5 }}
                  className="rounded-full w-full h-full"
                >
                  <img src={items[currentIndex].src} alt={items[currentIndex].alt} className="rounded-full w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute md:relative flex items-center justify-center w-full md:w-10/12 bottom-0 ">
          <div className="flex flex-wrap content-center justify-center w-full lg:w-3/5 h-[40vh] md:h-[50vh] lg:h-[60vh] mb-2 md:mb-8 lg:mb-0 p-0 md:p-5 rounded-xl backdrop-contrast-[.60]">
            <motion.h1
              key={`title-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1.5 }}
              className="text-4xl lg:text-6xl text-center text-black font-bold mb-4"
            >
              <span className="text-gradient-rose">{items[currentIndex].title}</span>
            </motion.h1>
            <motion.div
              key={`para-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1.5 }}
              className="lg:text-2xl mb-4 text-white font-bold flex flex-wrap justify-center text-center lg:flex-row my-5 drop-shadow-lg gap-4">
              
              <p>{/* Contenido del texto */}
                {items[currentIndex].text}
              </p>
            
              <div className="mt-5">
                <a href="/" className="btn btn-gradient-rose mb-2 lg:mr-2 transition-transform transform hover:scale-105 ">Últimas Noticias</a>
                <a href="/" className="btn btn-white mb-2 lg:mr-2 transition-transform transform hover:scale-105 "><span className='text-gradient-rose'>Próximos Eventos</span></a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </div>
    );
  };

export { Carousel };
