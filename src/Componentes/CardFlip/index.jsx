import './styles.css';

const CardFlip = ({ textOne, textTwo, backgroundImage }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Parte frontal: Imagen o Degradado */}
        <div
          className={`flip-card-front ${backgroundImage ? 'flip-card-front-image' : 'flip-card-front-gradient'}`}
          style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
        >
          <p className="title">{textOne}</p>
        </div>

        {/* Parte trasera con información */}
        <div className="flip-card-back">
          <p className="title">{textOne} :</p>
          <p className="mt-4">{textTwo}</p>
        </div>
      </div>
    </div>
  );
};

export { CardFlip };

