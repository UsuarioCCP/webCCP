import React, { useState, useEffect, useRef, useMemo } from "react";

const NewsCard = ({ selectedCategory }) => {
  const news = useMemo(() => [
    { id: "new1", category: "economia", src: "https://i.postimg.cc/9XKx0vYG/new1.png", title: "Aportando ideas al plan de desarrollo 2024 - 2027", notice: "Carlos Humberto Solano Espinosa Presidente Ejecutivo y Claudia Constanza Eugenio Remolina miembro de la Junta Directiva de la Cámara de Comercio de Pamplona junto con algunos Honorables Concejales de la ciudad de Pamplona analizaron las proyecciones para el tejido empresarial para el Plan de Desarrollo 2024 – 2027. Durante este espacio de diálogo los cabildantes, Jorge Mauricio Cañas Peláez, Johanna Rodríguez rincón, Juan Manuel López Jerez, Omar Alberto Barajas Estupiñán quienes hacen parte de la Comisión Accidental que estudian el Plan de desarrollo, junto con los concejales Juan Carlos Cáceres, Carlos Fernando Sánchez Gómez, consideraron temas fundamentales para el sector comercial como: estatuto de rentas y el fortaleciendo económico, social y cultural del municipio.", fecha: "2024-02-01" },
    { id: "new2", category: "emprendimiento", src: "https://i.postimg.cc/TPzp1RKZ/new2.png", title: "Articulación Cámara de Comercio de Pamplona,ISER y ProColombia", notice: "La articulación entre la Cámara de Comercio  de  Pamplona, PROCOLOMBIA  e  Instituto  Superior de Educación Rural - ISER para fortalecer procesos de crecimiento empresarial. Carlos Humberto  Solano  Espinosa  presidente  ejecutivo de la Cámara de  Comercio de Pamplona, José Javier Bustos rector del ISER y el equipo de docentes  y  administrativos, presentan las potencialidades que tiene la jurisdicción Cameral a Carolin Aponte, asesora de ProColombia. 'Este espacio permite  fortalecer  las  líneas  de  empresas con potencialidad exportadora  en  el  sector urbano  y  rural para obtener  resultados a mediano y largo  plazo,  de  acuerdo  al avance   de   los   empresarios'.   Manifestó   Solano   Espinosa, Directivo Cameral.Este año, ofertaremos de nuevo el programa de internacionalización para que  nuestros  empresarios  sigan  mejorando  sus productos y procesos, con el firme propósito de avanzar en el camino de vender a nivel mundial", fecha: "2024-02-01" },
    { id: "new3", category: "emprendimiento", src: "https://i.postimg.cc/cCwfr5dm/mega.png", title: "Trayectoria MEGA", notice: "La Cámara de Comercio de Bogotá  y la Camara de Comercio de Pamplona han unido esfuerzo para traer nuevamente a nuestro territorio programa Empresas en #TrayectoriaMega el cual busca crear una comunidad de empresarios que piense en grande y logre metas #MEGA en torno a una Colombia cada vez más competitiva. El programa empresas en trayectoria MEGA, es un programa que le permite a las empresas aplicar metodología de empresarios para empresarios que contribuyen al crecimiento sobresaliente de las organizaciones participantes, por medio de Formación, Mentoría y Conversaciones poderosas.", fecha: "2024-11-24" },
    { id: "new4", category: "regional", src: "https://i.postimg.cc/5jdprVk8/new4.png", title: "Construcción de la cartografía social", notice: "Carlos Humberto Solano Espinosa Presidente Ejecutivo de la Cámara de Comercio de Pamplona participa de la construcción de la Cartografía Social con los vendedores ambulantes que se realizan en la UNAD Pamplona. Durante esta jornada se escucharán las situaciones reales que se viven en el entorno en donde se desarrolla el trabajo diario de cada vendedor ambulante que participa en esta jornada. Este proceso es articulado con la Secretaría de Gobierno, oficina de infancia y adolescencia, Planeación, Espacio Público, la Inspección de Policía Municipal de la Administración Municipal de Pamplona, la Cámara de Comercio de Pamplona y la Universidad Nacional Abierta y a Distancia UNAD. La entidad Cameral es un eje dinamizador de la economía de Pamplona y la provincia, apoyando cada proceso que incentive el comercio y el emprendimiento de la ciudad Mitrada y la jurisdicción.", fecha: "2024-10-05" },
    { id: "new5", category: "economia", src: "https://i.postimg.cc/8znw8M31/new5.png", title: "Visita a afiliados camerales", notice: "Esta jornada de ampliación de afiliados, se realizará en alianza estratégica con los jóvenes de trabajo social del programa de Administración de Empresas de la facultad de Ciencias Económicas y empresariales de la Universidad de Pamplona. Carlos Humberto Solano Espinosa, Presidente Ejecutivo, Yudy Parra Peñaloza, Jefe de Promoción y Desarrollo y German Andrés Daza López de la unidad de afiliados de la Cámara Comercio de Pamplona, brindaron la información fundamental al momento de abordar cada uno de los comerciantes que se encuentran en la base de datos de potenciales afiliados de la ciudad mitrada. Es de recordar que los comerciantes registrados son los que cumplieron con la obligación de inscribirse en la cámara de comercio al momento de crear su empresa o registrarse como comerciante persona natural y los comerciantes afiliados son los que deciden pertenecer a la unidad de afiliados con el fin de obtener servicios y beneficios exclusivos. Adicionalmente es un proceso adicional y voluntario.", fecha: "2024-09-10" },
    { id: "new6", category: "emprendimiento", src: "https://i.postimg.cc/XNzPFZ4B/new6.png", title: "Turismo sostenible 2024", notice: "Empresarios y emprendedores turísticos de Pamplona y la jurisdicción de la Cámara De Comercio De Pamplona participan en el taller de formación 'Ruta sostenible: Provincia de Pamplona'. Carlos Humberto Solano Espinosa Presidente Ejecutivo y Yudy Parra Peñaloza jefe de Promoción y Desarrollo de la Cámara de Comercio de Pamplona participan de la jornada que incentiva y prepara a los operadores turísticos para seguir avanzando en este sector tan importante para la economía de la región. En esta sesión que se realiza en la UNAD Pamplona con la participación de empresarios turísticos de Bochalema, Cácota, Pamplonita, Mutiscua, Toledo y Pamplona. La Cámara De Comercio De Pamplona realizó socialización del Registro Nacional de Turismo a cargo de la Dra. Milady Vega, directora de Registros Públicos y Conciliación y el ingeniero Oscar Mauricio Mendoza Ortiz en el marco del taller de formación 'Ruta sostenible: Provincia de Pamplona' con la presencia de empresarios y emprendedores turísticos de Pamplona y la jurisdicción Cameral.", fecha: "2024-08-02" },
    { id: "new7", category: "regional", src: "https://i.postimg.cc/SN4gccHs/new7.png", title: "ProColombia y Global Ingenios S.A.S", notice: "José Javier Parada de la empresa Global Ingeos S.A.S, enfocada en el cultivo de hierbas aromáticas, dio a conocer la trayectoria empresarial, sus productos y sus proyecciones en el mercado regional, nacional y a largo plazo Internacional a la dra. Carolin Aponte, asesora de ProColombia. Javier, comentó 'Esta alianza entre ProColombia y Cámara de Comercio de Pamplona es fundamental debido a que estamos buscando encontrar oportunidades para ampliar el mercado'. En la asesoría por parte de ProColombia se tuvieron en cuenta las oportunidades y planes de mejora que pueden obtener sus productos. Desde la nuestra entidad Cameral, seguimos impulsando el progreso de nuestros empresarios y emprendedores en esta ruta de internacionalización.", fecha: "2024-02-01" },
    { id: "new8", category: "economia", src: "https://i.postimg.cc/hGmd9Ypk/casa-velez.jpg", title: "Noticia numero 4", notice: "Participe en nuestros eventos y talleres diseñados para fomentar el crecimiento empresarial y la innovación.", fecha: "2024-07-25" }
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedNews, setSelectedNews] = useState(null);
  const intervalRef = useRef(null);

  const filteredNews = useMemo(() => {
    return selectedCategory === "lo_ultimo"
      ? [...news].sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
      : news.filter(item => item.category === selectedCategory);
  }, [selectedCategory, news]);

  useEffect(() => {
    setCurrentIndex(0);
    setSelectedNews(filteredNews[0] || null);
  }, [filteredNews]);

  useEffect(() => {
    if (filteredNews.length > 0) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % filteredNews.length);
      }, 25000);
    }

    return () => clearInterval(intervalRef.current);
  }, [filteredNews.length]);

  useEffect(() => {
    setSelectedNews(filteredNews[currentIndex] || null);
  }, [currentIndex, filteredNews]);

  const handleNewsClick = (index) => {
    setSelectedNews(filteredNews[index]);
    setCurrentIndex(index);
  };

  return (
    <div className="grid grid-col-1 lg:grid-cols-2 gap-4 justify-items-center place-content-center mb-5">
      {/* Carousel */}
      <div className="col-span-1">
        <div className="h-[80vh] w-full lg:w-11/12 carousel carousel-vertical rounded-box shadow-2xl">
          {/* Selected News Card */}
          {selectedNews && (
            <div className="grid content-evenly justify-items-center h-[80vh] col-span-2 p-2 lg:p-4 border border-gray-300 rounded-md bg-white shadow-lg">
              <h2 className="text-2xl font-bold mb-2 ">{selectedNews.title}</h2>
              <img src={selectedNews.src} alt={selectedNews.title} className="w-full h-64 object-cover mb-4" />
              <p className="text-gray-700 mb-2">{selectedNews.fecha}</p>
              <p className="text-gray-700 overflow-y-scroll leading-relaxed text-justify py-2 pr-5">{selectedNews.notice}</p>
            </div>
          )}
        </div>
      </div>

      {/* News card */}
      <div className="col-span-1 overflow-y-scroll h-[80vh] shadow-2xl w-11/12 md:w-full ">
        {filteredNews.map((item, index) => (
          <div
            key={item.id}
            className={`card card-side w-full h-28 shadow-md border border-gray-300 rounded-md p-2.5 mb-2.5 bg-white cursor-pointer ${
              index === currentIndex ? 'bg-gray-200' : ''
            }`}
            onClick={() => handleNewsClick(index)}
          >
            <div className="w-32">
              <img src={item.src} alt="News" className="w-[7rem] h-full object-cover" />
            </div>
            <div className="card-body w-60 p-1 gap-1">
              <div className="stat-desc">{item.fecha}</div>
              <h2 className="text-sm font-semibold text-ellipsis overflow-hidden truncate">{item.title}</h2>
              <div className="flex flex-nowrap card-actions">
                <p className="text-sm text-ellipsis overflow-hidden truncate">{item.notice}</p>
                <button className="btn btn-sm btn-gradient-rose hover-gradient-rose">Ver más</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { NewsCard };
