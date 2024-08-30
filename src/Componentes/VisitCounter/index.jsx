import React, { useState, useEffect } from 'react';

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Haz una solicitud a la API de counter.dev para obtener el número de visitas
    fetch('https://api.counter.dev/32e92ede-5b93-4132-aac2-e0eb12465c59') // Reemplaza con tu ID de counter.dev
      .then(response => response.json())
      .then(data => {
        setVisitCount(data.total); // Asigna el total de visitas a la variable de estado
      });
  }, []);

  return (
      <div className="stats shadow">
        <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">Total Visitas: {visitCount}</div>
            <div className="stat-desc">21% more than last month</div>
        </div>
    </div>
  );
};

export {VisitCounter};
