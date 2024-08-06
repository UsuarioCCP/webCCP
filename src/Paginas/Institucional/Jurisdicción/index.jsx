import React, {useState} from 'react';
import { LayoutGeneral } from '../../../Layouts/LayoutGeneral';
import { CarouselMunicipios } from '../../../Componentes/CarouselMunicipios';
import './styles.css';

const Jurisdiccion = () => {

  const MapaJurisdiccion = 'https://i.postimg.cc/ZqCy9HDB/Provincia-Cameral.png';
  const FondoMuncipio = 'https://i.postimg.cc/W36dJyjn/fondo-municipio.jpg';

  const [selectedMunicipio, setSelectedMunicipio] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const municipios = [
    {
      nombre: 'Cucutilla',
      descripcion: 'Noble, cordial y trabajadora',
      economia:'La agricultura es su principal renglón económico con productos como el plátano, la caña panelera, el café y el fique, siendo el principal productor del departamento de este último producto.',
      lineCoords: { x1: -25, y1: 70, x2: 110, y2: 120 },
      imagen1: 'https://i.postimg.cc/pXycLJV4/Cucutilla.jpg',
      imagen2: '',
      imagen3: '',
      imagen4: '',
      imagen5: '',
      imagen6: '',
    },
    {
      nombre: 'Bochalema',
      descripcion: 'Paraiso turistico',
      economia:'',
      lineCoords: { x1: 80, y1: 65, x2: 128, y2: 108 },
      imagen1: 'https://i.postimg.cc/YSQsw22S/bochalema.webp',
      imagen2: '',
      imagen3: '',
      imagen4: '',
      imagen5: '',
      imagen6: '',
    },
    {
      nombre: 'Pamplonita',
      descripcion: 'La tierra del santo cristo',
      economia:'',
      lineCoords: { x1: 220, y1: 60, x2: 135, y2: 125 },
      imagen1: 'https://i.postimg.cc/nzH0bvwd/Pamplonita.jpg',
      imagen2: '',
      imagen3: '',
      imagen4: '',
      imagen5: '',
      imagen6: '',
    },
    {
      nombre: 'Labateca',
      descripcion: 'Tierra prodiga y bendita',
      economia:'',
      lineCoords: { x1: 320, y1: 70, x2: 150, y2: 150 },
      imagen1: 'https://i.postimg.cc/hPwyzQfj/Labateca.jpg',
      imagen2: '',
      imagen3: '',
      imagen4: '',
      imagen5: '',
      imagen6: '',
    },
    {
      nombre: 'Pamplona',
      descripcion: 'La ciudad de los mil titulos',
      economia:'',
      lineCoords: { x1: -25, y1: 150, x2: 130, y2: 140 },
      imagen1: 'https://i.postimg.cc/PxYh9n9b/PAMPLONA.jpg',
      imagen2: '',
      imagen3: '',
      imagen4: '',
      imagen5: '',
      imagen6: '',
    },
    {
      nombre: 'Toledo',
      descripcion: 'Lugar de paz',
      economia:'',
      lineCoords: { x1: 320, y1: 160, x2: 190, y2: 160 },
      imagen1: 'https://i.postimg.cc/8cc4sTGM/Toledo.jpg',
      imagen2: '',
      imagen3: '',
      imagen4: '',
      imagen5: '',
      imagen6: '',
    },
    {
      nombre: 'Mutiscua',
      descripcion: 'Tierra fértil',
      economia:'',
      lineCoords: { x1: -42, y1:230, x2: 110, y2: 150 },
      imagen1: 'https://i.postimg.cc/SxMZWQMG/Mutiscua.jpg',
      imagen2: '',
      imagen3: '',
      imagen4: '',
      imagen5: '',
      imagen6: '',
    },
    {
      nombre: 'Santo Domingo de Silos',
      descripcion: 'Rincón agrícola,  ecoturístico y cultural',
      economia:'',
      lineCoords: { x1: 70, y1: 228, x2: 110, y2: 180 },
      imagen1: 'https://i.postimg.cc/B6MNqXrJ/Silos.jpg',
      imagen2: '',
      imagen3: '',
      imagen4: '',
      imagen5: '',
      imagen6: '',
    },
    {
      nombre: 'Chitagá',
      descripcion: 'Paraíso natural',
      economia:'',
      lineCoords: { x1: 205, y1: 228, x2: 160, y2: 195 },
      imagen1: 'https://i.postimg.cc/QCd45pQB/Chitaga.jpg',
      imagen2: '',
      imagen3: '',
      imagen4: '',
      imagen5: '',
      imagen6: '',
    },
    {
      nombre: 'Cácota',
      descripcion: 'Cuna de tradiciones',
      economia:'',
      lineCoords: { x1: 322, y1: 230, x2: 135, y2: 157 },
      imagen1: 'https://i.postimg.cc/Tw9NpkDM/Cacota.jpg',
      imagen2: '',
      imagen3: '',
      imagen4: '',
      imagen5: '',
      imagen6: '',
    }
  ];

  const rows = [
    municipios.slice(0, 4), // First row with 4 items
    [municipios[4], null, null, municipios[5]], // Second row with 2 items on the extremes
    municipios.slice(6, 10) // Third row with 4 items
  ];

  const handleCardClick = (municipio) => {
    setSelectedMunicipio(municipio);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMunicipio(null);
  };

  return (
    <LayoutGeneral>
      <div className="flex justify-center pt-2 bg-jurisdiccion">
        <div className="absolute overlay-jurisdiccion z-10"></div>
        <div className="mb-10 z-20 pt-2">
          <h2 className="text-3xl text-gradient-rose font-bold m-8 text-center drop-shadow-xl">Nuestra Jurisdicción</h2>
          <p className="text-center my-10 mx-48 leading-loose">
            La Jurisdicción de la Cámara de Comercio de Pamplona, fue establecida por medio del decreto 74 de 1976, Artículo 27, la cual comprende los municipios de Pamplona, Bochalema, Chitagá, Cácota, Labateca, Mutiscua, Cucutilla, Pamplonita, Silos y Toledo, en el Departamento Norte de Santander.
          </p>
          <div className="flex divider divider-neutral opacity-5 justify-center mx-36"></div>
          <div className="relative flex justify-center w-full h-auto">
            <div className="p-44">
              {/* Imagen de fondo */}
              <img className="lg:h-[37vh]" src={ MapaJurisdiccion } alt="Mapa Jurisdiccion" />

              {/* SVG con la línea */}
              <svg
                className="absolute top-0 left-0 w-full h-full "
                viewBox="0 0 300 300"
              >
                {municipios.map((municipio, index) => (
                  <React.Fragment key={index}>
                    <path
                      d={`M${municipio.lineCoords.x1},${municipio.lineCoords.y1} L${municipio.lineCoords.x2},${municipio.lineCoords.y2}`}
                      stroke="rgba(0, 0, 0, 0.5)"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                    <circle
                      cx={municipio.lineCoords.x2}
                      cy={municipio.lineCoords.y2}
                      r="1" // Radio del punto, ajusta según sea necesario
                      fill="black"
                    />
                  </React.Fragment>
                ))}
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute w-10/12 z-20">
          <div className="relative mt-48 ">
            <table className="table t-0 border-separate border-spacing-y-16 border-spacing-x-10 w-full">
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((municipio, municipioIndex) => (
                      <td key={municipioIndex}>
                        {municipio ? (
                          <div className="relative overflow-hidden w-60 h-36 rounded-3xl cursor-pointer text-2xl font-bold"
                          onClick={() => handleCardClick(municipio)} >
                            <div>
                              <img className="absolute w-full h-full object-cover" src={municipio.imagen1 || FondoMuncipio } alt={municipio.nombre} />
                            </div>
                            <div className="z-10 absolute w-full h-full peer"></div>
                            <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[160%] peer-hover:h-[160%] peer-hover:opacity-90  -top-32 -left-16 w-32 h-44 rounded-full bg-orange-300 transition-all duration-500 opacity-60"></div>
                            <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-end peer-hover:justify-center peer-hover:w-full peer-hover:h-full peer-hover:opacity-80 -bottom-32 -right-16 w-36 h-44 p-5 rounded-full bg-orange-300 text-white transition-all duration-500 opacity-50">
                              {municipio.descripcion}
                            </div>
                            <div className="absolute w-full h-full items-start justify-center flex uppercase text-gradient-rose mt-6 text-center">
                              {municipio.nombre}
                            </div>
                          </div>
                        ) : (
                          <div className="w-60 h-36"></div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && selectedMunicipio && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <article className="bg-gradient-rose rounded-lg p-[1px] shadow-xl w-full max-w-lg">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button
              className="absolute z-10 p-2 top-0 right-0 text-gray-600 hover:text-gray-800 focus:outline-none text-3xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <div className="card bg-base-100 shadow-xl">
              <figure className="w-full">
                {selectedMunicipio.imagen1 && (
                  <img
                    src={selectedMunicipio.imagen1}
                    alt={selectedMunicipio.nombre}
                    className="w-full h-48 object-cover"
                  />
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title">{selectedMunicipio.nombre}</h2>
                <p>{selectedMunicipio.economia}</p>
              </div>
              <CarouselMunicipios
                images={[
                  selectedMunicipio.imagen1,
                  selectedMunicipio.imagen2,
                  selectedMunicipio.imagen3,
                  selectedMunicipio.imagen4,
                  selectedMunicipio.imagen5,
                  selectedMunicipio.imagen6,
                ].filter((img) => img)}
              />
            </div>
          </div>
        </article>
      </div>
    )}

    </LayoutGeneral>
  );
};

export { Jurisdiccion };

