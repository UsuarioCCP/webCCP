import React, { useState } from "react";
import { NewsCard } from "../NewsCard";
import { SocialMedia } from "../SocialMedia";
import { NavLink } from "react-router-dom";

const NewsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("lo_ultimo");

  return (
    <section id="news" className="py-8 bg-white w-full">
      <div className="max-w-screen-2xl mx-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Noticias */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4">
              {/* Encabezado */}
              <div className="flex items-center justify-between">
                <NavLink to="/" className="text-2xl font-bold">
                  Noticias
                </NavLink>
                {/* Botones de categorías */}
                <div className="hidden md:flex gap-4">
                  {["lo_ultimo", "economia", "emprendimiento", "regional"].map(
                    (category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`btn-nav font-bold ${
                          selectedCategory === category
                            ? "text-gradient-rose underline"
                            : "text-gray-500 hover:text-gradient-rose"
                        }`}
                      >
                        {category.replace("_", " ").toUpperCase()}
                      </button>
                    )
                  )}
                </div>
              </div>
              <div className="w-full h-1 bg-gray-200"></div>

              {/* Noticias Cards */}
              <div>
                <NewsCard selectedCategory={selectedCategory} />
              </div>
              <div className="w-full h-1 bg-gray-200"></div>
            </div>
          </div>

          {/* Social Media */}
          <aside className="flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold text-center">Síguenos</h2>
            <div className="w-full h-1 bg-gray-200"></div>
            <div className="w-full flex justify-center">
              <SocialMedia />
            </div>
            <div className="w-full h-1 bg-gray-200"></div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export { NewsSection };

