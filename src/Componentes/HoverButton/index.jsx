import React from "react";
import "./styles.css";

const HoverButton = ({ text}) => {
  return (
    <div className=" hover:bg-white hover-text-gradient-rose">
      <span className="opcion font-semibold">{text}</span>
    </div>
  );
};

export { HoverButton };


