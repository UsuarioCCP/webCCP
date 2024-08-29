import React from "react";
import { Header } from "../../Componentes/Header";
import { Aside } from '../../Componentes/Aside';
import { Footer } from "../../Componentes/Footer";


const LayoutGeneral = ({children}) => {
    return(
        <div className="leading-normal tracking-normal">
            <Header />
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