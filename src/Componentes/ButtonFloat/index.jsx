import React from "react";
import "./styles.css";

const ButtonFloat = ({ drawerId }) => {
  const handleClick = () => {
    const drawerToggle = document.getElementById(drawerId);
    if (drawerToggle) {
      drawerToggle.checked = !drawerToggle.checked;
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="relative w-96 md:w-44 h-[6vh] btn-gradient-rose text-white text-lg tracking-wider font-semibold outline-none cursor-pointer overflow-hidden transition-all duration-300 shadow-lg transform hover:scale-110 hover:shadow-2xl animated-button sm:btn-sm md:btn-md lg:btn-md rounded-sm"
    >
      Servicios Virtuales
      <span className="span1 absolute block"></span>
      <span className="span2 absolute block"></span>
      <span className="span3 absolute block"></span>
      <span className="span4 absolute block"></span>
    </button>
  );
};

export { ButtonFloat };

