import React, { useState, useEffect, useRef } from "react";

const contenido = [
  {
    titulo: "Collaborative Editing",
    descripcion:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly.",
    imagenSrc: "https://i.postimg.cc/j26W7Bg1/Pamplona-Colombia.png",
  },
  {
    titulo: "Real-time Changes",
    descripcion:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project.",
    imagenSrc: "https://i.postimg.cc/Tw9NpkDM/Cacota.jpg",
  },
  {
    titulo: "Version Control",
    descripcion:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project.",
    imagenSrc: "https://i.postimg.cc/QCd45pQB/Chitaga.jpg",
  },
];

export function ScrollMercantil() {
  const [currentImage, setCurrentImage] = useState(contenido[0].imagenSrc);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;

      contenido.forEach((item, index) => {
        const element = document.getElementById(`section-${index}`);
        const infoElement = element.querySelector(".info");
        const rect = infoElement.getBoundingClientRect();
        const containerTop = container.getBoundingClientRect().top;

        if (rect.top >= containerTop && rect.top <= containerTop + window.innerHeight / 2) {
          setCurrentImage(item.imagenSrc);
          setActiveIndex(index);
        }
      });
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative h-[70vh] overflow-y-scroll flex bg-black text-white"
      ref={containerRef}
    >
      <div className="w-1/2 flex flex-col space-y-10 p-10">
        {contenido.map((item, index) => (
          <div
            key={index}
            id={`section-${index}`}
            className={`min-h-[70vh] flex items-center ${
              activeIndex === index ? "opacity-100" : "opacity-50"
            } transition-opacity duration-500`}
          >
            <div className="info">
              <h2 className="text-3xl font-bold mb-2">{item.titulo}</h2>
              <p className="text-lg">{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-1/2 h-[70vh] flex items-center justify-center sticky top-0">
        <img
          src={currentImage}
          alt="Relevant visual"
          className="w-3/4 h-auto object-contain"
        />
      </div>
    </div>
  );
}
