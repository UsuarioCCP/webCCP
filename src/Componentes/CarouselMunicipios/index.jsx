const CarouselMunicipios = ({ images }) => {
    return (
      <div className="flex justify-center">
        <div className="carousel rounded-box w-[26rem]">
          {images.map((image, index) => (
            <div
              key={index}
              id={`slide${index + 1}`}
              className="carousel-item relative w-full"
            >
              <img src={image} className="w-full h-40" alt={`Slide ${index + 1}`} />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#slide${(index - 1 + images.length) % images.length + 1}`}
                  className="btn btn-circle"
                >
                  ❮
                </a>
                <a
                  href={`#slide${(index + 1) % images.length + 1}`}
                  className="btn btn-circle"
                >
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export { CarouselMunicipios };
  