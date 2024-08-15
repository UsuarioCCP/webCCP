import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Paginas/home';
import { Mercantil } from './Paginas/mercantil';
import { Employee } from './Paginas/Institucional/Empleados';
import { Historia } from './Paginas/Institucional/Historia';
import { QuienesSomos } from './Paginas/Institucional/QuinesSomos';
import { PoliticaCalidad } from './Paginas/Institucional/PoliticaCalidad';
import { Jurisdiccion } from './Paginas/Institucional/Jurisdicción';

// import { Footer } from './Componentes/Footer';
// import axios from 'axios';
import './App.css';

function App() {

  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mercantil" element={<Mercantil />} />
            <Route path="/institucional/empleados" element={<Employee />} />
            <Route path="/institucional/historia" element={<Historia />} />
            <Route path="/institucional/quienes-somos" element={<QuienesSomos />} />
            <Route path="/institucional/politica-calidad" element={<PoliticaCalidad />} />
            <Route path="/institucional/jurisdiccion" element={<Jurisdiccion />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

