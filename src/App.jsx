import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Paginas/home";
import { NoticiaMercantil } from "./Paginas/NoticiaMercantil";
import { Mercantil } from "./Paginas/mercantil";
// Institucional
import { Historia } from "./Paginas/Institucional/Historia";
import { QuienesSomos } from "./Paginas/Institucional/QuinesSomos";
import { PoliticaCalidad } from "./Paginas/Institucional/PoliticaCalidad";
import { Jurisdiccion } from "./Paginas/Institucional/Jurisdicción";
// Circulo Afliados
import { CirculoAfiliados } from "./Paginas/CirculoAfiliados";
// Centro Conciliación
import { CentroConciliacion } from "./Paginas/CentroConciliación";
import { RequisitosTarifas } from "./Paginas/CentroConciliación/RequisitosTarifas";
import { Conciliadores } from "./Paginas/CentroConciliación/Conciliadores";
import { Reglamento } from "./Paginas/CentroConciliación/Reglamento";

// Ley Transparencia
import { LeyTransparencia } from "./Paginas/Transparencia";
import { InfoEntidad } from "./Paginas/Transparencia/InformacionEntidad";
import { Normatividad } from "./Paginas/Transparencia/Normatividad";
import { Contratacion } from "./Paginas/Transparencia/Contratacion";
import { Planeacion } from "./Paginas/Transparencia/Planeacion";
import { Tramites } from "./Paginas/Transparencia/Tramites";
import { Participa } from "./Paginas/Transparencia/Participa";
import { DatosAbiertos } from "./Paginas/Transparencia/DatosAbiertos";
import { InfoGruposInteres } from "./Paginas/Transparencia/InfoGruposInteres";
import { ReporteEntidad } from "./Paginas/Transparencia/ObligacionReporte";
import { AtencionCiudadania } from "./Paginas/Transparencia/AtencionCiudadania";
import { Noticias } from "./Paginas/Transparencia/Noticias";
//Información entidad
import { VisionMision } from "./Paginas/Transparencia/InformacionEntidad/VisionMision";
import { FuncionesDeberes } from "./Paginas/Transparencia/InformacionEntidad/FuncionesDeberes";
import { Organigrama } from "./Paginas/Transparencia/InformacionEntidad/EstructuraOrganica";
import { MapaProcesos } from "./Paginas/Transparencia/InformacionEntidad/MapaProcesos";
import { Directorioinstitucional } from "./Paginas/Transparencia/InformacionEntidad/DirectorioInstitucional";
import { DirectorioEmpleados } from "./Paginas/Transparencia/InformacionEntidad/DirectorioEmpleados";
import { DirectorioEntidades } from "./Paginas/Transparencia/InformacionEntidad/DirectorioEntidades";
import { DirectorioAgremiaciones } from "./Paginas/Transparencia/InformacionEntidad/DirectorioAgremiaciones";
import { ServiciosEntidad } from "./Paginas/Transparencia/InformacionEntidad/ServiciosEntidad";
import { PorcedimientoDecisiones } from "./Paginas/Transparencia/InformacionEntidad/ProcedimientoDecisiones";
import { PresentacionPQRSF } from "./Paginas/Transparencia/InformacionEntidad/PresentacionPQRSF";
import { CalendarioActividades } from "./Paginas/Transparencia/InformacionEntidad/CalendarioActividades";
import { InformacionDecisiones } from "./Paginas/Transparencia/InformacionEntidad/InformacionDecisiones";
import { AutoridadesVigilantes } from "./Paginas/Transparencia/InformacionEntidad/AutoridadesVigilantes";
import { PublicaciónHV } from "./Paginas/Transparencia/InformacionEntidad/PublicacionHV";

// import { Footer } from './Componentes/Footer';
// import axios from 'axios';
import "./App.css";

function App() {
  const enMantenimiento = process.env.REACT_APP_MODO_MANTENIMIENTO === "true";

  if (enMantenimiento) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        Sitio en mantenimiento.
      </div>
    );
  }

  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/noticia-mercantil" element={<NoticiaMercantil />} />
            <Route path="/mercantil" element={<Mercantil />} />
            {/* Rutas Información institucional */}
            <Route path="/institucional/historia" element={<Historia />} />
            <Route
              path="/institucional/quienes-somos"
              element={<QuienesSomos />}
            />
            <Route
              path="/institucional/politica-calidad"
              element={<PoliticaCalidad />}
            />
            <Route
              path="/institucional/jurisdiccion"
              element={<Jurisdiccion />}
            />
            {/* Ruta Circulo Afiliados */}
            <Route path="/circulo-afiliados" element={<CirculoAfiliados />} />
            {/* Rutas Centro Conciliación */}
            <Route
              path="/centro-conciliacion"
              element={<CentroConciliacion />}
            />
            <Route
              path="/centro-conciliacion/requisitos-tarifas"
              element={<RequisitosTarifas />}
            />
            <Route
              path="/centro-conciliacion/conciliadores"
              element={<Conciliadores />}
            />
            <Route
              path="/centro-conciliacion/reglamento"
              element={<Reglamento />}
            />
            {/* Rutas Ley Trasnparecia */}
            <Route path="/ley-transparencia" element={<LeyTransparencia />}>
              <Route path="normatividad" element={<Normatividad />} />
              <Route path="contratacion" element={<Contratacion />} />
              <Route path="planeacion" element={<Planeacion />} />
              <Route path="tramites" element={<Tramites />} />
              <Route path="participa" element={<Participa />} />
              <Route path="datos-abiertos" element={<DatosAbiertos />} />
              <Route
                path="info-grupos-interes"
                element={<InfoGruposInteres />}
              />
              <Route path="reporte-entidad" element={<ReporteEntidad />} />
              <Route
                path="atencion-ciudadania"
                element={<AtencionCiudadania />}
              />
              <Route path="noticias" element={<Noticias />} />
            </Route>
            {/* Ruta informacion entidad */}
            <Route
              path="/ley-transparencia/info-entidad"
              element={<InfoEntidad />}
            >
              <Route path="vision-mision" element={<VisionMision />} />
              <Route path="funciones" element={<FuncionesDeberes />} />
              <Route path="organigrama" element={<Organigrama />} />
              <Route path="mapa-procesos" element={<MapaProcesos />} />
              <Route
                path="dir-institucional"
                element={<Directorioinstitucional />}
              />
              <Route path="dir-empleados" element={<DirectorioEmpleados />} />
              <Route path="dir-entidades" element={<DirectorioEntidades />} />
              <Route
                path="dir-agremiaciones"
                element={<DirectorioAgremiaciones />}
              />
              <Route path="servicios-entidad" element={<ServiciosEntidad />} />
              <Route
                path="procedimientos-decisiones"
                element={<PorcedimientoDecisiones />}
              />
              <Route
                path="presentacion-pqrsf"
                element={<PresentacionPQRSF />}
              />
              <Route
                path="calendario-actividades"
                element={<CalendarioActividades />}
              />
              <Route
                path="info-decisiones"
                element={<InformacionDecisiones />}
              />
              <Route
                path="autoridades-vigilantes"
                element={<AutoridadesVigilantes />}
              />
              <Route path="publicacion-hv" element={<PublicaciónHV />} />
            </Route>
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
