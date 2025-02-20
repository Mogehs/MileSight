import { useState, useEffect } from "react";

const ImageCarousel = ({ data, imagesPerSlide = 4 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(imagesPerSlide);

  const totalImages = data.length;
  const maxIndex = Math.max(0, totalImages - slidesToShow);

  // Handle next slide
  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Handle previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Adjust `imagesPerSlide` based on screen width
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // Show 1 image after `md`
      } else {
        setSlidesToShow(imagesPerSlide); // Default images per slide
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, [imagesPerSlide]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out gap-2"
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-1/${slidesToShow} flex justify-center transition-all ease-in-out`}
          >
            <div className="flex flex-col items-center text-center">
              <img
                className="w-32 h-32 object-cover"
                src={item.img}
                alt="not found"
              />
              <p className="mt-2 hover:cursor-pointer hover:text-[#0299f4] text-[#333]">
                {item.para1} <br /> {item.para2}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 text-black p-2 rounded-full 
          ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:cursor-pointer"}`}
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 text-black p-2 rounded-full 
          ${currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "hover:cursor-pointer"}`}
        onClick={nextSlide}
        disabled={currentIndex >= maxIndex}
      >
        ❯
      </button>
    </div>
  );
};

export default ImageCarousel;
