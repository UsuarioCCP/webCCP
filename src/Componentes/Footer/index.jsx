import React from "react";
import "./styles.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative z-50">
      <footer className="footer footer-one p-10 text-base-content justify-items-center">
        <nav className="text-white ">
          <h6 className="text-gradient-rose text-lg font-semibold">
            Servicios
          </h6>
          <a className="link link-hover" href="/">
            Branding
          </a>
          <a className="link link-hover" href="/">
            Diseño
          </a>
          <a className="link link-hover " href="/">
            Marketing
          </a>
          <a className="link link-hover" href="/">
            Publicidad
          </a>
        </nav>
        <nav className="text-white">
          <h6 className="text-gradient-rose text-lg font-semibold">Compañía</h6>
          <a className="link link-hover" href="/">
            Sobre nosotros
          </a>
          <a className="link link-hover" href="/">
            Contacto
          </a>
          <a className="link link-hover" href="/">
            Empleos
          </a>
          <a className="link link-hover" href="/">
            Kit de prensa
          </a>
        </nav>
        <nav className="text-white">
          <h6 className="text-gradient-rose text-lg font-semibold">Legal</h6>
          <a className="link link-hover" href="/">
            Términos de uso
          </a>
          <a className="link link-hover" href="/">
            Política de privacidad
          </a>
          <a className="link link-hover" href="/">
            Política de cookies
          </a>
        </nav>
      </footer>
      <footer className="footer items-center px-10 py-2 border-t bg-gray-800 text-white border-base-300 shadow-inner fondo-escheresque">
        <aside className="items-center grid-flow-col text-dorado">
          <img
            src="https://i.postimg.cc/pdGRw85T/LOGO.png"
            alt="logo camara"
            className=" w-12"
          />
          <p className=" font-bold">
            Camará de Comercio Pamplona <br />
            <span className=" italic font-normal">
              Registrando Calidad desde 1943
            </span>
          </p>
        </aside>
        <div className="place-self-center text-dorado">
          <small>
            {" "}
            &copy; <span>{currentYear}</span>, Cámara de Comercio. Todos los
            derechos reservados.
          </small>
          {/* <span class="footer-bottom-links">
                        <a href="#" title="Terms and services">Terms and services</a>
                        <a href="#" title="Privacy Politic">Privacy Politic</a>
                    </span> */}
        </div>
        <nav className="lg:justify-items-center md:place-self-center md:justify-self-end">
          <h2 className="items-center text-dorado font-semibold">Redes Sociales</h2>
          <div className="grid grid-flow-col gap-4">
            <ul className="m-0 flex justify-center space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/p/Camara-de-Comercio-de-Pamplona-100071759633115/"
                  title="facebook Cámara de Comercio de Pamplona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i
                    className="fa-brands fa-facebook-f fa-beat fa-lg icono--redes"
                    style={{ "--fa-animation-duration": "10s" }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/camaradecomerciodepamplona/?hl=es-la"
                  title="instagram Cámara de Comercio de Pamplona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i
                    className="fa-brands fa-instagram fa-beat fa-lg icono--redes"
                    style={{ "--fa-animation-duration": "10s" }}
                  ></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC9q5eGqlVXUos7odaxSAkIQ"
                  title="YouTube Cámara de Comercio de Pamplona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <i
                    className="fa-brands fa-youtube fa-beat fa-lg icono--redes"
                    style={{ "--fa-animation-duration": "10s" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export { Footer };
