import React from "react";
// import "./styles.css";

const ButtonGeneral = ({ name }) => {
  return (
    <button className="relative btn btn-sm transition-transform transform hover:scale-105 hover-gradient-rose z-40">
      {name}
    </button>
  );
};

export { ButtonGeneral };
