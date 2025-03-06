import React, { useState } from "react";

const NdaaSection = ({ title, subtitle, list }) => {
  const listArray = list?.split(",");

  // Thumbnails List
  const images = [
    "/product-details/product-1-small.png",
    "/product-details/product-2-small.png",
    "/product-details/product-3-small.png",
  ];

  // Corresponding main display images
  const showImage = {
    "/product-details/product-1-small.png": "/mini-dome/hero-img.png",
    "/product-details/product-2-small.png": "/product-details/product-2.png",
    "/product-details/product-3-small.png": "/product-details/product-3.png",
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(showImage[images[0]]); // Default image

  const handleUp = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSelectedImage(showImage[images[currentIndex]]);
  };

  const handleDown = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(showImage[images[currentIndex]]);
  };

  const handleSelectImage = (img) => {
    setSelectedImage(showImage[img]);
    setCurrentIndex(images.indexOf(img));
  };

  return (
    <div>
      <div
        className="md:h-[20rem] bg-cover bg-center flex md:flex-row flex-col items-center justify-between text-white relative"
        style={{ backgroundImage: "url('/mini-dome/dome-hero-bg.jpg')" }}
      >
        <div className="flex flex-col px-8">
          <h1 className="md:text-[2.5rem] text-[25px]">{title}</h1>
          <p className="md:text-[1.5rem] text-[15px]">{subtitle}</p>
        </div>
        <div className="flex justify-center items-center relative w-full h-[20rem] sm:w-[40%] sm:h-full">
          {/* Main Display Image */}
          <img
            className="w-[80%] absolute sm:-left-20 top-20 -left-10 p-2 rounded-lg"
            src={selectedImage}
            alt="Selected"
          />

          {/* Thumbnail List */}
          <div className="relative left-20 sm:left-30 top-10">
            <div className="h-auto flex flex-col items-center gap-2">
              {/* Up Arrow */}
              <button
                onClick={handleUp}
                className="text-gray-700 bg-white/50 px-2 py-1 rounded"
              >
                ▲
              </button>

              {/* Image List */}
              <ul>
                {images.map((img, index) => (
                  <li key={index} className="flex justify-center">
                    <img
                      src={img}
                      className={`h-20 p-1 rounded-full cursor-pointer ${
                        currentIndex === index
                          ? "bg-white/20 shadow-lg"
                          : "bg-transparent"
                      }`}
                      alt=""
                      onClick={() => handleSelectImage(img)}
                    />
                  </li>
                ))}
              </ul>

              {/* Down Arrow */}
              <button
                onClick={handleDown}
                className="text-gray-700 bg-white/50 px-2 py-1 rounded"
              >
                ▼
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:items-center mx-8  md:gap-16 my-8">
        <ul className="list-disc marker:text-[#00667C] text-[#666]">
          {listArray.map((li, id) => (
            <>{id <= 3 && <li key={id}>{li}</li>}</>
          ))}
        </ul>
        <ul className="list-disc marker:text-[#00667C] text-[#666]">
          {listArray.map((li, id) => (
            <>{id > 3 && <li key={id}>{li}</li>}</>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NdaaSection;
