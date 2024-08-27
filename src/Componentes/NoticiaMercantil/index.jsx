import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const NoticiaMercantil = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [months, setMonths] = useState([]);
  const detailsRef = useRef(null); // Referencia para el contenedor de detalles

  useEffect(() => {
    const sheetUrl = process.env.REACT_APP_NOTICE_MERCANTIL_SHEET_URL;

    axios.get(sheetUrl)
      .then(response => {
        const parsedData = response.data.split('\n').slice(1).map(row => {
          const cols = row.split(',');
          return {
            mes: cols[0],
            matricula: cols[1],
            nombre: cols[2],
            nit: cols[3],
            estado: cols[4],
            libro: cols[5],
            registro: cols[6],
            fecha: cols[7],
            acto: cols[8],
            noticia: cols[9],
            url: cols[10],
          };
        });

        const uniqueMonths = Array.from(new Set(parsedData.map(record => record.mes)))
          .sort((a, b) => new Date(Date.parse(a + " 1, 2024")) - new Date(Date.parse(b + " 1, 2024")));

        setMonths(uniqueMonths);
        setData(parsedData);

        const currentMonth = new Date().toLocaleString('default', { month: 'long' });
        setSelectedMonth(currentMonth);
        filterDataByMonth(currentMonth, parsedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filterDataByMonth = (month, data) => {
    const filtered = data.filter(record => record.mes === month);
    setFilteredData(filtered);
    setSelectedRecord(null); // Reiniciar el registro seleccionado cuando cambie el mes
  };

  const handleRecordClick = (record) => {
    setSelectedRecord(record);
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    filterDataByMonth(month, data); // Filtrar datos para el mes seleccionado
  };

  const pdfUrl = filteredData.length > 0 ? filteredData[0].url : null;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Selecciona un mes</h2>
      <div className="mb-4">
        {months.map(month => (
          <button
            key={month}
            className={`px-4 py-2 mr-2 ${selectedMonth === month ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleMonthChange(month)}
          >
            {month}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Noticia Mercantil {selectedMonth} </h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((record, index) => (
          <li
            key={index}
            onClick={() => handleRecordClick(record)}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition duration-300">
            <p className="text-xl font-semibold text-blue-600">{record.matricula}</p>
          </li>
        ))}
      </ul>

      {selectedRecord && (
        <div
          className="bg-white shadow-lg rounded-lg p-6 mt-6"
          ref={detailsRef}
        >
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
            <p><span className="font-semibold">Noticia:</span> {selectedRecord.noticia}</p>
          </div>
        </div>
      )}

      {pdfUrl && (
        <div className="mt-6">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Descargar PDF de {selectedMonth}
          </a>
        </div>
      )}
    </div>
  );
};

export { NoticiaMercantil };
