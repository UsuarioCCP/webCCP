import React from "react";
import "./styles.css";

const HoverButton = ({ text}) => {
  return (
    <div className=" hover-text-gradient-rose hover:scale-105">
      <span className="opcion font-semibold">{text}</span>
    </div>
  );
};

export { HoverButton };


