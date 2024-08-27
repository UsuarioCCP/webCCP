import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Prueba = () => {
  const [data, setData] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);

  useEffect(() => {
    // URL de la hoja de cálculo publicada en la web
    const sheetUrl = process.env.REACT_APP_NOTICE_MERCANTIL_SHEET_URL;
    console.log('Sheet URL:', sheetUrl);

    axios.get(sheetUrl)
      .then(response => {
        // Convierte el CSV a JSON
        const parsedData = response.data.split('\n').slice(1).map(row => {
          const cols = row.split(',');
          return {
            matricula: cols[0],
            nombre: cols[1],
            nit: cols[2],
            estado: cols[3],
            libro: cols[4],
            registro: cols[5],
            fecha: cols[6],
            acto: cols[7],
            noticia: cols[8],
            // Agrega más columnas según sea necesario
          };
        });
        setData(parsedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleRecordClick = (record) => {
    setSelectedRecord(record);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Registros</h2>
      
      {/* Lista de matrículas */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((record, index) => (
          <li
            key={index}
            onClick={() => handleRecordClick(record)}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition duration-300"
          >
            <p className="text-xl font-semibold text-blue-600">{record.matricula}</p>
          </li>
        ))}
      </ul>

      {/* Detalles del registro seleccionado */}
      {selectedRecord && (
        <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Detalles del registro {selectedRecord.matricula}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p><span className="font-semibold">Nombre:</span> {selectedRecord.nombre}</p>
            <p><span className="font-semibold">Nit:</span> {selectedRecord.nit}</p>
            <p><span className="font-semibold">Estado:</span> {selectedRecord.estado}</p>
            <p><span className="font-semibold">Libro:</span> {selectedRecord.libro}</p>
            <p><span className="font-semibold">Registro:</span> {selectedRecord.registro}</p>
            <p><span className="font-semibold">Fecha:</span> {selectedRecord.fecha}</p>
            <p><span className="font-semibold">Acto:</span> {selectedRecord.acto}</p>
            <p><span className="font-semibold">Noticia:</span> {selectedRecord.noticia}</p>
            {/* Añade más detalles según sea necesario */}
          </div>
        </div>
      )}

      {/* Sección de descarga de PDFs */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Descargar Archivos PDF</h2>
      <ul className="list-disc pl-5">
        <li>
          <a
            href="https://dl.dropboxusercontent.com/TU_ENLACE_DROPBOX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Descargar PDF de Enero
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/uc?export=download&id=TU_ID_GOOGLE_DRIVE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Descargar PDF de Febrero
          </a>
        </li>
        {/* Añade más enlaces de descarga según sea necesario */}
      </ul>
    </div>
  );
};

export { Prueba };
