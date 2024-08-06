import React from "react";

const EventCard = ({ imageUrl, name, description, date, onClick }) => {
    return (
      <div className="card lg:card-side bg-base-100 shadow-xl" onClick={onClick}>
        <figure>
          <img src={imageUrl} alt="Album" className="w-full h-64 object-cover" />
          </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <p>{date}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    );
  };

export {EventCard}