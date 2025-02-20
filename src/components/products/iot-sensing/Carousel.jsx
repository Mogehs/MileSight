import React, { useState } from "react";

const data = [
  {
    img: "/iot-sensing/building-kit.png",
    relatedImages: [
      "/iot-sensing/building-kit-1.png",
      "/iot-sensing/building-kit-2.png",
    ],
    title: "Smart Building Kit",
    description: "Building Automation and Management",
  },
  {
    img: "/iot-sensing/agri-kit.png",
    relatedImages: [
      "/iot-sensing/agri-kit-1.png",
      "/iot-sensing/agri-kit-2.png",
      "/iot-sensing/agri-kit-3.png",
    ],
    title: "Smart Agriculture Kit",
    description: "More Productive and Cost-effective",
  },
  {
    img: "/iot-sensing/iq-kit.png",
    relatedImages: [
      "/iot-sensing/iq-kit-1.png",
      "/iot-sensing/iq-kit-2.png",
      "/iot-sensing/iq-kit-3.png",
    ],
    title: "IAQ Kit",
    description: "Lighting Your Way to Green Air",
  },
  {
    img: "/iot-sensing/corWork-kit.png",
    relatedImages: [
      "/iot-sensing/corWork-kit-1.png",
      "/iot-sensing/corWork-kit-2.png",
      "/iot-sensing/corWork-kit-3.png",
    ],
    title: "CoWork Kit-B",
    description: "Workplace Efficiency & Utilization",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [relatedIndex, setRelatedIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    setRelatedIndex(0); // Reset related image index when changing main image
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    setRelatedIndex(0);
  };

  const nextRelatedSlide = () => {
    setRelatedIndex((prevIndex) =>
      prevIndex < data[currentIndex].relatedImages.length - 1
        ? prevIndex + 1
        : 0
    );
  };

  const prevRelatedSlide = () => {
    setRelatedIndex((prevIndex) =>
      prevIndex > 0
        ? prevIndex - 1
        : data[currentIndex].relatedImages.length - 1
    );
  };

  return (
    <div className="relative w-full md:overflow-hidden flex justify-center items-center">
      <div className="flex md:flex-row flex-col sm:h-48 w-full justify-center items-center gap-4">
        {/* Previous Main Image Button */}
        <button
          className="text-[#3696ff] p-2 bg-white rounded-full hover:cursor-pointer"
          onClick={prevSlide}
        >
          ❮
        </button>

        {/* Main Image Container */}
        <div className="flex items-center gap-4">
          {[
            data[(currentIndex - 1 + data.length) % data.length],
            data[currentIndex],
            data[(currentIndex + 1) % data.length],
          ].map((item, index) => {
            const isMainImage = index === 1;

            return (
              <div
                key={item.img}
                className={`flex items-center text-center p-4 transition-all duration-300 w-90 h-56
                  ${
                    isMainImage
                      ? "bg-white md:w-[50%] w-full md:scale-110 md:shadow-lg md:flex-row flex-col gap-4"
                      : "bg-[#9bb0c5] text-white scale-90 opacity-70 md:flex flex-row hidden w-[40%]"
                  }
                `}
              >
                {/* Main Image */}
                <div className="flex flex-col justify-center gap-4 items-center">
                  {isMainImage ? (
                    <div className="flex flex-col md:min-w-[150px] md:max-w-[150px] md:items-start md:justify-start justify-center items-center">
                      <p className=" text-black text-nowrap text-start font-semibol">
                        {item.title}
                      </p>
                      <p className="text-[#1ba3f5] text-nowrap hover:cursor-pointer">
                        {item.title} Solution ❯{" "}
                      </p>
                      <p className="mt-2 text-nowrap text-sm text-start font-semibol">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    <>
                      <img
                        className="w-20 h-20"
                        src={item.img}
                        alt="not found"
                      />
                      <p
                        className={`mt-2 text-sm font-semibold ${
                          isMainImage ? "text-black" : "text-white"
                        }`}
                      >
                        {item.title}
                      </p>
                    </>
                  )}
                </div>

                {/* Related Images (Inside Main Image Container) */}
                {isMainImage && (
                  <div className="flex items-center md:justify-end justify-center md:w-xl">
                    {/* Related Previous Button */}
                    <button
                      className="text-[#333] p-1 rounded-full hover:cursor-pointer mr-2"
                      onClick={prevRelatedSlide}
                    >
                      ❮
                    </button>

                    {/* Related Images Row */}
                    <div className="flex space-x-2">
                      <img
                        className="md:w-40 object-cover"
                        src={data[currentIndex].relatedImages[relatedIndex]}
                        alt="Related"
                      />
                    </div>

                    {/* Related Next Button */}
                    <button
                      className="text-[#333] p-1 rounded-full hover:cursor-pointer ml-2"
                      onClick={nextRelatedSlide}
                    >
                      ❯
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Next Main Image Button */}
        <button
          className="text-[#3696ff] p-2 bg-white rounded-full hover:cursor-pointer"
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
