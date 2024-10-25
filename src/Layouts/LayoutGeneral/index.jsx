
import { useEffect } from 'react';
// import { Header } from "../../Componentes/Header";
import HeaderDos from "../../Componentes/HeaderDos";
import { Breadcrumb } from "../../Componentes/BreadCrumb";
import { Aside } from '../../Componentes/Aside';
import { Footer } from "../../Componentes/Footer";

const LayoutGeneral = ({children}) => {

    //efecto para reiniciar la posicion de scroll cuando se abandona la pagina
useEffect(() => {
    // Al montar el componente, desplázate al inicio de la página
    window.scrollTo(0, 0);
  }, []);
  
    return(
        <div className="leading-normal tracking-normal">
            {/* <Header /> */}
            <HeaderDos />
            <Breadcrumb />
            <div className="relative">
                <Aside/>
            </div>
            <section className="bg-white shadow-lg ">
                <div className="relative">
                    {children}
                </div>
            </section>
            <Footer />
        </div>
    )
}

export {LayoutGeneral};