import React from "react";

const VisionMision = () => {
    return(
        <div>
      <div className="bg-quienes-somos">
        <div className="fixed overlay-quienes-somos z-10 w-full h-svh"></div>
        <div className="relative z-20 pt-2">
          <h2 className="w-full m-8 my-2 text-4xl font-bold leading-tight text-center text-gradient-rose drop-shadow-xl">
            ¿Vision y Mision?
          </h2>
          <div className="text-center my-10 mx-2 lg:mx-48 font-normal text-gray-900 sm:text-xl sm:leading-9">
              <p>
                Descubre cómo desde la Cámara de Comercio de Pamplona trabajamos
              para impulsar el crecimiento económico y empresarial de nuestra
              región
              </p>
          </div>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient-red-yellow w-2/3 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="grid justify-items-center grid-cols-1 lg:grid-cols-5">
            <div className="col-span-2 lg:my-2 h-auto">
              <figure className="flex flex-wrap justify-center mt-20">
                <img
                  className="content-end rotate-90 sm:rotate-0 w-80 sm:w-full "
                  src="https://i.postimg.cc/mktmS0Kz/Quienes-somos.png"
                  alt=""
                />
              </figure>
              <div className="">
                {/* Valores */}
                <div className=" flex flex-wrap justify-center py-8 sm:py-2 values-list">
                  <h2 className="text-center text-2xl text-gradient-rose font-semibold leading-8 text-gray-900 mb-7">
                    Valores Institucionales
                  </h2>
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="inner flex" ref={innerRef}>
                      {valores.map((valor, index) => (
                        <ListItem
                          key={index}
                          text={valor}
                          colorClass="text-red-700"
                        />
                      ))}
                    </div>
                    <div className="fade"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3">
              <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start">
                <div className="justify-center w-80 lg:w-full">
                  {/* <div className="w-full lg:pr-4 my-10">
                    <img src="ruta/a/tu/imagen-vision.jpg" alt="Visión" className="w-full h-auto rounded-lg mb-4 lg:mb-0" />
                  </div> */}
                  <div className="w-full lg:w-5/6">
                    <div className="bg-gray-100 bg-opacity-70 shadow-lg border rounded my-4 py-5 px-10">
                      <h3 className="text-2xl text-gradient-rose font-semibold mb-2">
                        Misión
                      </h3>
                      <p className="text-justify text-gray-900 sm:text-normal sm:leading-7 ">
                        Somos una organización privada, gremial, Sin Ánimo de
                        Lucro, depositaria de fe pública, dedicada a la
                        prestación eficiente de los servicios del Registro Único
                        Empresarial y Social (RUES), así como a la gestión,
                        apoyo y desarrollo de programas y proyectos para la
                        generación de oportunidades para potenciar el
                        Emprendimiento, el Fortalecimiento y la Aceleración
                        empresarial de la Región, apoyados en la tecnología e
                        infraestructura adecuada, con un equipo humano
                        capacitado y comprometido que actúa con principios y
                        valores Corporativos.
                      </p>
                    </div>
                    <div className="bg-gray-100 bg-opacity-70 shadow-lg border rounded my-8 py-5 px-10">
                      <h3 className="text-2xl text-gradient-rose font-semibold mb-2">
                        Visión
                      </h3>
                      <p className="text-justify text-gray-900 sm:text-normal sm:leading-7">
                        Para el año 2026 seremos reconocidos como la
                        Organización gremial líder en el desarrollo integral de
                        nuestra región, mediante el acompañamiento de proyectos
                        de emprendimiento, fortalecimiento y aceleración
                        empresarial; enmarcados en una política de modernización
                        de los servicios registrales, el mejoramiento continuo y
                        una cultura organizacional de calidad.
                      </p>
                    </div>
                    <div className="bg-gray-100 bg-opacity-70 shadow-lg border rounded my-8 py-5 px-10">
                      <h3 className="text-2xl text-gradient-rose font-semibold mb-2">
                        Proposito MEGA
                      </h3>
                      <p className="text-justify text-gray-900 sm:text-normal sm:leading-7">
                        Aumentar la satisfacción del cliente a través de la
                        aplicación eficaz del Sistema de Gestión de Calidad de
                        los Servicios Registrales, incluidos los procesos para
                        la mejora continua, asegurando la conformidad de los
                        requisitos del cliente, los legales y los reglamentarios
                        aplicables; a su vez potenciar el Emprendimiento, el
                        Fortalecimiento y la Aceleración empresarial de la
                        Región, siendo generadores de Desarrollo y Calidad de
                        vida de la población.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
};

export { VisionMision };