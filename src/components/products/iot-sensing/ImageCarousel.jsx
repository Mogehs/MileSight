import { useState } from "react";

const ImageCarousel = ({ data, imagesPerSlide = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalImages = data.length;

  // Ensures that at least `imagesPerSlide` images are always displayed
  const maxIndex = Math.max(0, totalImages - imagesPerSlide);

  // Go to next image without empty spaces
  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Go to previous image
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative w-full md:max-w-5xl mx-auto overflow-hidden mt-4 pb-8">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out gap-8"
        style={{
          transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)`,
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-1/${imagesPerSlide} flex justify-center transition-all ease-in-out`}
          >
            <div className="flex flex-col items-center text-center">
              <img
                className="md:w-32 md:h-32 object-cover"
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
        className={`absolute top-1/2 left-0 transform hover:cursor-pointer -translate-y-1/2 text-black p-2 rounded-full 
          ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        className={`absolute top-1/2 right-0 transform hover:cursor-pointer -translate-y-1/2  text-black p-2 rounded-full 
          ${currentIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={nextSlide}
        disabled={currentIndex >= maxIndex}
      >
        ❯
      </button>
    </div>
  );
};

export default ImageCarousel;
