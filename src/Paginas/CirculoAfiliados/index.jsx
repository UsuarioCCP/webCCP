import React, { useState } from "react";
import { LayoutGeneral } from "../../Layouts/LayoutGeneral";
import "./styles.css";

// Botón del ítem
const ItemButton = ({ nombre, onClick, img }) => (
  <div className="group flex flex-col items-center gap-y-3 transition-transform duration-200 hover:scale-105 ">
    <div className="">
      <img
        className="w-56 h-56 mask mask-circle object-cover bg-slate-400 transition-transform duration-300 group-hover:scale-105"
        src={img}
        alt="mask-circulo"
      />
    </div>
    <button
      className="btn btn-md lg:btn-lg flex flex-col items-center gap-2 hover-text-gradient-rose transition-all duration-100"
      onClick={onClick}
    >
      <span className="group-hover:none">{nombre}</span>
    </button>
  </div>
);

// Componente para mostrar el contenido del dropdown
const DropdownContent = ({ content }) => (
  <div className="bg-gray-200 w-full py-5 px-10 relative bottom-0 left-0 right-0 z-50">
    <div className="text-center">
      <h2 className="text-xl font-bold mb-4">Contenido de {content}</h2>
      <p>Aquí va la información relacionada con {content}.</p>
    </div>
  </div>
);

const CirculoAfiliados = () => {
  const [selectedItem, setSelectedItem] = useState(null); // Estado para rastrear el dropdown visible

  const beneficios = [
    {
      nombre: "Asesoria Fortalecimiento Empresarial", modalId: "fortalecimiento", img: "https://i.postimg.cc/0jFDBdxq/asesoria.jpg"},
    { nombre: "Espacios Publicitarios", modalId: "publicidad", img: "https://i.postimg.cc/sgWf7F2c/espacio-publicitario.jpg" },
    { nombre: "Tarifas de Formación Preferencial", modalId: "formacion", img: "https://i.postimg.cc/WpHcp97w/Descuento.jpg" },
    { nombre: "Renovación Express", modalId: "renovacion", img: "https://i.postimg.cc/PrTVjYgQ/Renovacion-express.jpg" },
  ];

  const requisitos = [
    "Contar con al menos dos años consecutivos de matrícula y renovación oportuna en cualquier Cámara de Comercio del país.",
    "Haber ejercido la actividad mercantil de manera continua durante este período.",
    "Haber cumplido de forma permanente con todas las obligaciones inherentes a la calidad de comerciante, incluyendo la renovación puntual de la matrícula mercantil de la empresa y de todos sus establecimientos de comercio, tanto locales como en otras jurisdicciones, en cada período.",
    "Tener debidamente registrados los libros de comercio correspondientes al tipo de empresa (Actas, Libro de Accionistas o Socios).",
  ];

  // Función que muestra el dropdown del beneficio seleccionado
  const handleClick = (nombre) => {
    setSelectedItem(nombre === selectedItem ? null : nombre); // Muestra o esconde el dropdown
  };

  return (
    <LayoutGeneral>
      <section className="leading-normal tracking-normal text-white gradient-rose opacity-90">
        <div className="pt-10">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* <!--Left Col--> */}
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left lg:pl-16">
              {/* <p className="uppercase tracking-loose w-full">texto</p> */}
              <h1 className="my-5 text-5xl font-bold leading-tight">
                Circulo de Afiliados
              </h1>
              <p className="leading-normal text-2xl my-4">
                "Aprovecha los beneficios del registro mercantil: protección
                legal, acceso a créditos y mayor confianza de clientes y
                proveedores. ¡Descubre cómo registrar tu empresa hoy mismo!"
              </p>
              {/* <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Subscribe
                </button> */}
            </div>
            {/* <!--Right Col--> */}
            <div className="w-full md:w-3/5 py-1 justify-items-center text-center">
              <img
                className="object-cover mask mask-squircle w-[28rem] h-[28rem] z-50"
                src="https://img.freepik.com/fotos-premium/confiado-empresario-chocolatero-pie-su-tienda-brazos-cruzados-mirando-camara-ai_154515-11029.jpg?w=1060"
                alt="mascara-circulo"
              />
            </div>
          </div>
        </div>
        {/* <!-- Imagen de hondas o waves --> */}
        {/* <!--Waves Container--> */}
        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            //   xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                href="#gentle-wave"
                x="48"
                y="0"
                fill="rgb(255 255 255 / 5%)"
              ></use>
              <use
                href="#gentle-wave"
                x="48"
                y="3"
                fill="rgb(255 255 255 / 85%)"
              ></use>
              <use
                href="#gentle-wave"
                x="48"
                y="5"
                fill="rgb(255 255 255/ 30%)"
              ></use>
              <use
                href="#gentle-wave"
                x="48"
                y="7"
                fill="rgb(255 255 255 / 95%)"
              ></use>
            </g>
          </svg>
        </div>
        {/* <!--Waves end--> */}
      </section>

      <section className="pt-5">
        <div className="relative flex flex-wrap justify-center">
          <h1 className="my-5 w-3/4 text-center text-3xl font-bold leading-tight">
            Conoce y accede a todos los <span className="text-gradient-rose">beneficios y servicios</span>  que te ofrecemos
            como afiliado a la Cámara de Comercio de Pamplona:
          </h1>
          <div className="flex justify-center bg-white h-96">
            <div className="flex self-center gap-4">
              {beneficios.map((beneficio) => (
                <ItemButton
                  key={beneficio.modalId}
                  nombre={beneficio.nombre}
                  modalId={beneficio.modalId}
                  onClick={() => handleClick(beneficio.nombre)}
                  img={beneficio.img}
                />
              ))}
            </div>
          </div>

          {/* Si hay un item seleccionado, mostramos el dropdown */}
          {selectedItem && <DropdownContent content={selectedItem} />}
        </div>
      </section>

      <section className="leading-normal tracking-normal text-black opacity-90 pb-10">
        <h1 className="my-10 text-gradient-rose text-3xl font-bold leading-tight text-center">
          Requisitos para ser afiliado
        </h1>
        <div className="py-4">
          <div className="w-5/6 px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* <!--Left Col--> */}
            <div className="flex flex-col w-full  md:w-2/6 justify-center items-start text-center md:text-left drop-shadow-2xl">
              <img
                className="w-[30rem] h-[30rem] object-cover object-right mask mask-hexagon-2 z-50 "
                src="https://i.postimg.cc/85Kymzkf/afiliada.jpg"
                alt="afiliada"
              />
            </div>

            {/* <!--Right Col--> */}
            <div className="w-full md:w-4/6 text-center px-10">
              <p className="flex items-center leading-normal text-xl mb-4 ">Para ser afiliado a la Cámara de Comercio de Pamplona, los empresarios deben realizar la solicitud voluntariamente. Ademas deben cumplir con los lineamientos de la Ley 1727 de 2014, entre ellos:</p>
              {/* <p className="uppercase tracking-loose w-full">texto</p> */}
              <ul className="flex flex-col space-y-2">
                {requisitos.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-start leading-normal text-xl mt-4 hover-text-gradient-rose hover:font-semibold transition-colors duration-300"
                  >
                    <i className="fa-regular fa-circle-check m-2 transition-colors duration-75"></i>
                      <span className="ml-2 my-1">{item}</span>
                  </li>
                ))}
              </ul>
              {/* <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Subscribe
                </button> */}
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  );
};

export { CirculoAfiliados };
