import React, { useEffect, useRef, useState } from "react";
import { ScrollMercantil } from "../../Componentes/ScrollMercantil";
import { CardMercantil } from "../../Componentes/CardMercantil";
import "./styles.css";

const Mercantil = () => {
  const headerRef = useRef(null);
  const navContentRef = useRef(null);
  const navActionRef = useRef(null);
  const toToggleRefs = useRef([]);
  const imgRef = useRef(null);

  const [isNaturalOpen, setIsNaturalOpen] = useState(false);
  const [isJuridicaOpen, setIsJuridicaOpen] = useState(false);

  const naturalRef = useRef(null);
  const juridicaRef = useRef(null);

  const toggleNatural = () => {
    setIsNaturalOpen(!isNaturalOpen);
    if (isJuridicaOpen) {
      setIsJuridicaOpen(false); // Cierra Persona Jurídica si está abierta
    }
    setTimeout(() => {
      if (!isNaturalOpen) {
        naturalRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 0);
  };

  const toggleJuridica = () => {
    setIsJuridicaOpen(!isJuridicaOpen);
    if (isNaturalOpen) {
      setIsNaturalOpen(false); // Cierra Persona Natural si está abierta
    }
    setTimeout(() => {
      if (!isJuridicaOpen) {
        juridicaRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const newPos = window.scrollY;

      if (newPos > 10) {
        headerRef.current.classList.add("bg-white");
        navActionRef.current.classList.remove("bg-white");
        navActionRef.current.classList.add("gradient-rose");
        navActionRef.current.classList.remove("text-gray-800");
        navActionRef.current.classList.add("text-white");
        toToggleRefs.current.forEach((element) => {
          element.classList.add("text-gray-800");
          element.classList.remove("text-white");
        });
        headerRef.current.classList.add("shadow");
        navContentRef.current.classList.remove("bg-gray-100");
        navContentRef.current.classList.add("bg-white");
        imgRef.current.classList.remove("grayscale", "saturate-100");
      } else {
        headerRef.current.classList.remove("bg-white");
        navActionRef.current.classList.remove("gradient-rose");
        navActionRef.current.classList.add("bg-white");
        navActionRef.current.classList.remove("text-white");
        navActionRef.current.classList.add("text-gray-800");
        toToggleRefs.current.forEach((element) => {
          element.classList.add("text-white");
          element.classList.remove("text-gray-800");
        });
        headerRef.current.classList.remove("shadow");
        navContentRef.current.classList.remove("bg-white");
        navContentRef.current.classList.add("bg-gray-100");
        imgRef.current.classList.add("grayscale", "saturate-100");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section class="leading-normal tracking-normal text-white gradient-rose">
        {/* <!--Nav--> */}
        <nav
          ref={headerRef}
          id="header"
          className="fixed w-full z-40 top-0 text-white"
        >
          <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div class="pl-4 flex items-center">
              <a
                class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="/"
              >
                {/* <!--Agregar logo Camara --> */}
                <img
                  className="w-20 grayscale saturate-100"
                  ref={imgRef}
                  src="https://i.postimg.cc/9FDdqdpT/Logo-Camara.png"
                  alt="logo camara"
                />
              </a>
            </div>
            {/* <!-- Menu hamburguesa --> */}
            <div class="block lg:hidden pr-4">
              <button
                id="nav-toggle"
                class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                <svg
                  class="fill-current h-6 w-6"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            {/* <!-- Elementos menu --> */}
            <div
              class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
              id="nav-content"
              ref={navContentRef}
            >
              <ul class="list-reset lg:flex justify-end flex-1 items-center">
                <li class="mr-3">
                  <a
                    class="inline-block py-2 px-4 text-black font-bold no-underline"
                    href="/"
                  >
                    Active
                  </a>
                </li>
                <li class="mr-3">
                  <a
                    class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    href="/"
                  >
                    link
                  </a>
                </li>
                <li class="mr-3">
                  <a
                    class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    href="/"
                  >
                    link
                  </a>
                </li>
              </ul>
              <button
                ref={navActionRef}
                id="navAction"
                className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-85 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Action
              </button>
            </div>
          </div>
          <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
        </nav>
        {/* <!--Hero--> */}
        <div class="pt-24">
          <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            {/* <!--Left Col--> */}
            <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left lg:pl-16">
              {/* <p class="uppercase tracking-loose w-full">texto</p> */}
              <h1 class="my-4 text-5xl font-bold leading-tight">
                Formaliza tu negocio y accede a mayores oportunidades.
              </h1>
              <p class="leading-normal text-2xl mb-8">
                "Aprovecha los beneficios del registro mercantil: protección
                legal, acceso a créditos y mayor confianza de clientes y
                proveedores. ¡Descubre cómo registrar tu empresa hoy mismo!"
              </p>
              <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Subscribe
              </button>
            </div>
            {/* <!--Right Col--> */}
            <div class="w-full md:w-3/5 py-6 text-center">
              <img
                class="w-full mask mask-squircle md:w-4/5 z-50"
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
            class="waves"
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
            <g class="parallax">
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

        <section class="bg-white border-b py-8">
          {/* Que es le registro Mercantil */}
          <div class="container max-w-5xl mx-auto my-10">
            <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Que es el registro Mercantil
            </h2>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient-red-yellow w-96 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-5/6 sm:w-1/2 p-6">
                <p class="text-gray-600 mb-4 leading-loose">
                  El Registro Mercantil permite a todos los empresarios ejercer
                  cualquier actividad comercial y acreditar públicamente su
                  calidad de comerciante. Además, el Registro Mercantil les
                  permite a los empresarios tener acceso a información clave
                  para que amplíen su portafolio de posibles clientes y
                  proveedores. La Matrícula Mercantil hace pública la calidad de
                  comerciante, en la medida que hace visible al empresario
                  frente a potenciales clientes que consultan los registros.
                  Contiene información sobre los datos generales de los
                  comerciantes y de las sociedades. Tomado CCBogota
                  <br />
                  <br />
                  Images from:
                  <a class="text-pink-500 underline" href="https://undraw.co/">
                    undraw.co
                  </a>
                </p>
              </div>
              <div class="flex justify-center w-96 sm:w-1/2 p-6">
                <img
                  className="mask mask-circle w-96 object-cover"
                  src="https://img.freepik.com/fotos-premium/hombre-que-sostiene-simbolo-metalico-marca-registrada-imagen-conceptual-ilustracion-propiedad-intelectual-o-proteccion-productos-o-servicios_556904-1921.jpg?w=540"
                  alt=""
                />
              </div>
            </div>

            <div class="flex flex-wrap sm:flex-row my-10">
              {/* Quines deben registrarse */}
              <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              ¿Quienes deben registrarse?
              </h2>
              <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient-red-yellow w-96 opacity-25 my-0 py-0 rounded-t"></div>
              </div>
              <div class="flex justify-center w-full sm:w-1/2 p-6">
                <img
                  className="mask mask-circle w-96 object-cover"
                    src="https://img.freepik.com/foto-gratis/hombre-anteojos-encogiendose-hombros-manos-extendidas-lados-boca-abierta-pie-interrogado-astutamente-sobre-gris-inconsciente_176420-43168.jpg?t=st=1717799522~exp=1717803122~hmac=51751a8bdb13d7f34082f095ebeca5cb60d1d23e7d764a17e871a4f38d527088&w=960"
                    alt=""
                  />
              </div>
              <div class="w-full sm:w-1/2 p-6 mt-6">
                <div class="align-middle">
                  <p class="text-gray-600 mb-4 leading-loose">
                    En el registro mercantil se deben inscribir todos los
                    comerciantes, sean personas naturales o jurídicas, en
                    términos del numeral primero del artículo 28 del código de
                    comercio: «Las personas que ejerzan profesionalmente el
                    comercio y sus auxiliares, tales como los comisionistas,
                    corredores, agentes, representantes de firmas nacionales o
                    extranjeras, quienes lo harán dentro del mes siguiente a la
                    fecha en que inicien actividades.» Se deben inscribir tanto
                    el comerciante como cada uno de los establecimientos de
                    comercio que se tenga. La inscripción se hace en la cámara
                    de comercio con jurisdicción en el sector donde está ubicado
                    el establecimiento de comercio, el negocio, o la empresa.
                    <br />
                    <br />
                    Images from:
                    <a
                      class="text-pink-500 underline"
                      href="https://undraw.co/"
                    >
                      undraw.co
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-b py-8">
          <div className="container lg:w-2/3 mx-auto flex flex-wrap pt-4 ">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Tipos de registros Mercantil
            </h2>
            <div className="w-full mb-4">
              <div className="h-1 mx-auto gradient-red-yellow w-96 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            {/* Persona Natural */}
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink lg:m-5">
              <CardMercantil registro="Persona Natural">
                <div className="flex items-center justify-end">
                  <button
                     className="mx-auto lg:mx-0 hover:underline bg-gradient-rose font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-85 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    onClick={toggleNatural}
                  >
                    {isNaturalOpen ? "Cerrar" : "Conocer más"}
                  </button>
                </div>
              </CardMercantil>
            </div>

          {/* Persona Juridica */}
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink lg:m-5">
              <CardMercantil registro="Persona Juridica">
                <div className="flex items-center justify-end">
                  <button
                    className="mx-auto lg:mx-0 hover:underline bg-gradient-rose font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-85 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                    onClick={toggleJuridica}
                  >
                    {isJuridicaOpen ? "Cerrar" : "Conocer más"}
                  </button>
                </div>
              </CardMercantil>
            </div>
          </div>

          {/*contentino Persona Natural */}
          {isNaturalOpen && (
            <div
              ref={naturalRef}
              className="flex justify-center bg-white text-black my-10"
            >
              <div className="navbar lg:w-2/3 bg-base-300 rounded-box">
                <div className="flex flex-1 justify-center px-2">
                  <div className="flex items-stretch gap-5">
                    {/* Boton modal renovacion */}
                    <div>
                      <button
                        className="btn btn-md lg:btn-lg"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Renovación
                      </button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box max-w-[72rem] h-[80vh]">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            
                            <button className="btn btn-circle btn-ghost absolute right-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </form>
                          <div className="card-body px-4 pt-2 pb-0 m-0">
                            <ScrollMercantil />
                          </div>
                        </div>
                      </dialog>
                    </div>

                    {/* Boton modal cancelación */}
                    <div>
                      <button
                        className="btn btn-md lg:btn-lg"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Cancelación
                      </button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box max-w-[72rem] h-[80vh]">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-circle btn-ghost absolute right-4">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </form>
                          <div className="card-body px-4 pt-2 pb-0 m-0">
                            <ScrollMercantil />
                          </div>
                        </div>
                      </dialog>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* contenido Persona Juridica */}

          {isJuridicaOpen && (
            <div ref={juridicaRef} className="bg-white text-black">
              <h1>Contenido Persona Jurídica</h1>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                  Click to open this one and close others
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
            </div>
          )}
        </section>

        <section class="bg-gray-100 py-8">
          <div class="container mx-auto px-2 pt-4 text-gray-800">
            <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Beneficios
            </h2>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto gradient-red-yellow w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
              <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                  <div class="p-8 text-3xl font-bold text-center border-b-4">
                    Comerciante Matriculado
                  </div>
                  <ul class="w-full text-center text-sm">
                    <li class="border-b py-4">Thing</li>
                    <li class="border-b py-4">Thing</li>
                    <li class="border-b py-4">Thing</li>
                  </ul>
                </div>
                <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                    £0
                    <span class="text-base">for one user</span>
                  </div>
                  <div class="flex items-center justify-center">
                    <button class="mx-auto lg:mx-0 hover:underline gradient-red-yellow text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                  <div class="w-full p-8 text-3xl font-bold text-center">
                    Comerciante Afiliado
                  </div>
                  <div class="h-1 w-full gradient-red-yellow my-0 py-0 rounded-t"></div>
                  <ul class="w-full text-center text-base font-bold">
                    <li class="border-b py-4">Thing</li>
                    <li class="border-b py-4">Thing</li>
                    <li class="border-b py-4">Thing</li>
                    <li class="border-b py-4">Thing</li>
                  </ul>
                </div>
                <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div class="w-full pt-6 text-4xl font-bold text-center">
                    £x.99
                    <span class="text-base">/ per user</span>
                  </div>
                  <div class="flex items-center justify-center">
                    <button class="mx-auto lg:mx-0 hover:underline gradient-red-yellow text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                  <div class="p-8 text-3xl font-bold text-center border-b-4">
                    Pro
                  </div>
                  <ul class="w-full text-center text-sm">
                    <li class="border-b py-4">Thing</li>
                    <li class="border-b py-4">Thing</li>
                    <li class="border-b py-4">Thing</li>
                  </ul>
                </div>
                <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                  <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                    £x.99
                    <span class="text-base">/ per user</span>
                  </div>
                  <div class="flex items-center justify-center">
                    <button class="mx-auto lg:mx-0 hover:underline gradient-red-yellow text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Change the colour #f8fafc to match the previous section colour --> */}
        <svg
          class="wave-top"
          viewBox="0 0 1439 147"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
              <g class="wave" fill="#f8fafc">
                <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
              </g>
              <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    opacity="0.200000003"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <section class="container mx-auto text-center py-6 mb-12">
          <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
            Call to Action
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <h3 class="my-4 text-3xl leading-tight">
            Main Hero Message to sell yourself!
          </h3>
          <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Action!
          </button>
        </section>
      </section>
    </div>
  );
};

export { Mercantil };
