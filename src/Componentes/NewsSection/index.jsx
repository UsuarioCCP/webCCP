import React, { useState } from "react";
import { NewsCard } from "../NewsCard";
import { SocialMedia } from "../SocialMedia";
import { NavLink } from "react-router-dom";

const NewsSection = () => {

  const [selectedCategory, setSelectedCategory] = useState("lo_ultimo");


  return(
  <section id="news" className="px-4 py-2 bg-white w-full">
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 gap-4 mt-2 mx-10">
        <div className="lg:col-span-2">
          <div className="navbar ">
            <div className="navbar-start">
              <NavLink>
                 <h2 className="text-2xl font-semibold ml-5">Noticias</h2> 
              </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 gap-3">
                <li>
                  <button
                    onClick={() => setSelectedCategory("lo_ultimo")}
                    className="btn-nav font-bold text-gradient-rose"
                  >
                    Lo ultimo
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedCategory("economia")}
                    className="btn-nav font-bold text-gradient-rose"
                  >
                    Economia
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedCategory("emprendimiento")}
                    className="btn-nav font-bold text-gradient-rose"
                  >
                    Emprendimiento
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setSelectedCategory("regional")}
                    className="btn-nav font-bold text-gradient-rose"
                  >
                    Regional
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid">
            <NewsCard selectedCategory={selectedCategory}  />
          </div>
          <div className="divider"></div>
        </div>
        <div className="grid col-span-1 w-3/4 md:my-1 lg:my-4 mx-5">
          <h2 className="text-2xl text-center font-semibold mb-4">Siguenos</h2> 
          <div className="divider"></div>
            <SocialMedia />
          <div className="divider"></div>
        </div>
      </div>
    </div>
  </section>
);
}

export { NewsSection };
