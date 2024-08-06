import React from 'react';
import './styles.css'; // Importar el archivo CSS para los estilos del efecto

const EfectClick = ({ children, onClick }) => {
  const handleClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = `${offsetX}px`;
    ripple.style.top = `${offsetY}px`;
    event.target.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 1000);
    if (onClick) onClick(event);
  };

  return (
    <button className="ripple-button" onClick={handleClick}>
      {children}
    </button>
  );
};

export {EfectClick};
