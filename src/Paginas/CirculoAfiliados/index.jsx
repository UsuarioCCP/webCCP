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

const CirculoAfiliados = () => {
  const [activeModal, setActiveModal] = useState(null);

  // Función para abrir y cerrar el modal
  const openModal = (modalId) => setActiveModal(modalId);
  const closeModal = () => setActiveModal(null);

  const beneficios = [
    {
      nombre: "Asesoria Fortalecimiento Empresarial",
      modalId: "fortalecimiento",
      img: "https://i.postimg.cc/0jFDBdxq/asesoria.jpg",
      titulo: " 📊 Asesoria Fortalecimiento Empresarial",
      descripcion: 
      <>
          <p>
          Como afiliado, accede a asesoría especializada para hacer crecer tu negocio. Aprovecha nuestro apoyo y recursos para optimizar cada aspecto de tu empresa.
          </p>
          <br />
          <h2 className="font-semibold">💡¿Por qué solicitar nuestra asesoría?</h2>
          <ul className="flex flex-wrap list-disc list-inside">
            <li>
            Diagnóstico Empresarial Personalizado: Identificamos las oportunidades de mejora y diseñamos un plan de acción acorde a las necesidades específicas de tu negocio.
            </li>
            <li>
            Optimización de Procesos: Mejoramos la eficiencia y productividad de tu empresa mediante estrategias comprobadas y prácticas de vanguardia.
            </li>
            <li>
            Optimización de Procesos: Mejoramos la eficiencia y productividad de tu empresa mediante estrategias comprobadas y prácticas de vanguardia.
            </li>
            <li>
            Optimización de Procesos: Mejoramos la eficiencia y productividad de tu empresa mediante estrategias comprobadas y prácticas de vanguardia.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold">
            🌟 ¡Transforma tu negocio con nuestro respaldo!
          </h2>
          Comunícate con nosotros para comenzar tu asesoría personalizada y llevar tu empresa al siguiente nivel.
      </>
    },
    {
      nombre: "Espacios Publicitarios",
      modalId: "publicidad",
      img: "https://i.postimg.cc/sgWf7F2c/espacio-publicitario.jpg",
      titulo: "📢 Espacios Publicitarios en Página Web y Redes Institucionales",
      descripcion: (
        <>
          <p>
            Como afiliado de la Cámara de Comercio de Pamplona, tu negocio puede
            brillar ante una audiencia amplia y diversa. Te ofrecemos la
            oportunidad de promocionar tus productos y servicios en nuestra
            página web oficial y en nuestras redes sociales institucionales.
          </p>
          <br />
          <h2 className="font-semibold">💡¿Por qué anunciarte con nosotros?</h2>
          <ul className="flex flex-wrap list-disc list-inside">
            <li>
              Alcance Amplio y Segmentado: Llega a miles de personas interesadas
              en el comercio local y regional.
            </li>
            <li>
              Confianza y Credibilidad: Asocia tu negocio con una entidad sólida
              y confiable.
            </li>
            <li>
              Visibilidad Constante: Tus productos y servicios con presencia en
              nuestra web y redes sociales.
            </li>
            <li>
              Presencia en todas las Redes Sociales: Aprovecha nuestros canales
              de comunicación en redes sociales, con contenido atractivo y
              diseñado para captar la atención. ¡Tu negocio será visto por un
              público más amplio y segmentado!
            </li>
          </ul>
          <br />
          <h2 className="font-semibold">
            🎯 Beneficios Exclusivos para Afiliados
          </h2>
          <ul className="flex flex-wrap list-disc list-inside">
            <li>
              Promociones Personalizadas: Nos aseguramos de que tu marca tenga
              un lugar destacado, adaptando la publicidad a tus necesidades y
              objetivos comerciales.
            </li>
            <li>
              Mayor Frecuencia de Publicación: Prioridad para ser incluido en
              nuestras campañas y publicaciones en redes.
            </li>
            <li>
              Análisis de Resultados: Te ofrecemos informes sobre el impacto de
              tus anuncios, para que puedas medir su efectividad y seguir
              creciendo.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold">
            🌟 Únete a la Comunidad que Marca la Diferencia
          </h2>
          Contacta con nosotros para aprovechar estos beneficios. Si aún no eres
          afiliado, ¡únete y haz crecer tu negocio con nosotros! 🎉👥💼",
        </>
      ),
    },
    {
      nombre: "Tarifas de Formación Preferencial",
      modalId: "formacion",
      img: "https://i.postimg.cc/WpHcp97w/Descuento.jpg",
      titulo: "🎓 Tarifas de Formación Preferencial",
      descripcion: 
      <>
          <p>
          Como afiliado, disfruta de descuentos exclusivos y prioridad en nuestros programas de formación. Accede a diplomados, seminarios, talleres, ferias, y eventos, diseñados para potenciar tus habilidades y las de tu equipo.
          </p>
          <br />
          <h2 className="font-semibold">💡Aprovecha estos grandes beneficios</h2>
          <ul className="flex flex-wrap list-disc list-inside">
            <li>
            Descuentos Exclusivos: Tarifas preferenciales en todos nuestros programas educativos.
            </li>
            <li>
            Acceso Prioritario: Reserva anticipada para diplomados y eventos destacados.
            </li>
            <li>
            Formación Integral: Amplia oferta de talleres y seminarios en temas clave para tu negocio.
            </li>
            <li>
            Networking y Oportunidades: Participa en ferias y eventos para conectar con otros profesionales.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold">
            🌟 ¡Invierte en tu crecimiento con nuestras tarifas preferenciales!
          </h2>
          Únete a nuestras actividades y aprovecha las ventajas que ofrecemos solo a nuestros afiliados.
      </>
    },
    {
      nombre: "Renovación Express",
      modalId: "renovacion",
      img: "https://i.postimg.cc/PrTVjYgQ/Renovacion-express.jpg",
      titulo: "🚚 Renovación Express",
      descripcion: 
      <>
          <p>
          ¡Renueva tu matrícula mercantil sin complicaciones! Con nuestro servicio exclusivo de Renovación Express, llegamos directamente a tu negocio para hacer la renovación, ahorrándote tiempo y esfuerzo.
          </p>
          <br />
          <h2 className="font-semibold">💡Beneficios solo para ti como Afiliado</h2>
          <ul className="flex flex-wrap list-disc list-inside">
            <li>
            Sin Desplazamientos: Evita el traslado hasta nuestras oficinas; nosotros vamos a tu establecimiento.
            </li>
            <li>
            Ahorra Tiempo: Olvídate de las largas filas y los trámites presenciales.
            </li>
            <li>
            No Cierres tu Negocio: Realiza la renovación sin interrumpir tus actividades diarias.
            </li>
            <li>
            Atención Personalizada: Nuestro equipo te brindará soporte directo para asegurar que todo el proceso sea rápido y sencillo.
            </li>
          </ul>
          <br />
          <h2 className="font-semibold">
            🌟 ¡Aprovecha la comodidad del programa de Renovación Express y mantén tu negocio al día sin perder un minuto!
          </h2>
      </>
    },
  ];

  const requisitos = [
    "Contar con al menos dos años consecutivos de matrícula y renovación oportuna en cualquier Cámara de Comercio del país.",
    "Haber ejercido la actividad mercantil de manera continua durante este período.",
    "Haber cumplido de forma permanente con todas las obligaciones inherentes a la calidad de comerciante, incluyendo la renovación puntual de la matrícula mercantil de la empresa y de todos sus establecimientos de comercio, tanto locales como en otras jurisdicciones, en cada período.",
    "Tener debidamente registrados los libros de comercio correspondientes al tipo de empresa (Actas, Libro de Accionistas o Socios).",
  ];

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
                ¡Únete y descubre todas las ventajas de ser parte de una
                comunidad selecta de empresarios! <br />
                El Círculo de Afiliados de la Cámara de Comercio de Pamplona te
                ofrece la oportunidad de convertirte en un cliente preferencial,
                disfrutando de beneficios exclusivos que te permitirán hacer
                crecer y fortalecer tu negocio.
              </p>
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
            Conoce y accede a todos los{" "}
            <span className="text-gradient-rose">beneficios y servicios</span>{" "}
            que te ofrecemos como afiliado a la Cámara de Comercio de Pamplona:
          </h1>
          <div className="flex justify-center bg-white h-96">
            <div className="flex self-center gap-4">
              {beneficios.map((beneficio) => (
                <ItemButton
                  key={beneficio.modalId}
                  className="btn"
                  onClick={() => openModal(beneficio.modalId)}
                  nombre={beneficio.nombre}
                  img={beneficio.img}
                />
              ))}
            </div>
          </div>

          {/* Overlay que se activa cuando el modal está abierto */}
          {activeModal && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={closeModal} // Cierra el modal al hacer clic en el overlay
            ></div>
          )}

          {/* Dialogs para cada beneficio */}
          {beneficios.map((beneficio) => (
            <dialog
              key={beneficio.modalId}
              id={beneficio.modalId}
              className={`modal flex items-center justify-center z-50  ${
                activeModal === beneficio.modalId ? "block" : "hidden"
              }`}
              open={activeModal === beneficio.modalId}
            >
              <div className="modal-box w-11/12 max-w-5xl border-dorado">
                <h2 className="text-xl text-center font-bold mb-4">
                  {beneficio.titulo}
                </h2>
                <p>{beneficio.descripcion}</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* Cerrar modal con botón */}
                    <button
                      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                      onClick={closeModal}
                    >
                      X
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          ))}
        </div>
      </section>

      <section className="leading-normal tracking-normal text-black opacity-90 pb-10">
        <h1 className="mt-10 text-gradient-rose text-3xl font-bold leading-tight text-center">
          Requisitos para ser afiliado
        </h1>
        <div className="relative isolate overflow-hidden bg-white px-6 md:py-16 sm:py-8 lg:px-8">
          {/* <section className="relative isolate overflow-hidden bg-white px-6 md:py-16 sm:py-8 lg:px-8"> */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
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
              <p className="flex items-center leading-normal text-xl mb-4 ">
                Para ser afiliado a la Cámara de Comercio de Pamplona, los
                empresarios deben realizar la solicitud voluntariamente. Ademas
                deben cumplir con los lineamientos de la Ley 1727 de 2014, entre
                ellos:
              </p>
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
            </div>
          </div>
        </div>
      </section>
    </LayoutGeneral>
  );
};

export { CirculoAfiliados };
