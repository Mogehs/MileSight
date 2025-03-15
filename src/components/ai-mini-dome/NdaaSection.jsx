import React, { useState } from "react";

const NdaaSection = ({ title, subtitle, list, images = {} }) => {
  const listArray = list?.split(",");

  // Convert object to an array
  const imagesArray = Object.values(images);

  // Ensure `imagesArray` is an array
  if (!Array.isArray(imagesArray) || imagesArray.length === 0) {
    return <div className="text-center text-red-500">No images available</div>;
  }

  // Map thumbnails to their full-size images
  const showImage = {};
  imagesArray.forEach((img) => {
    showImage[img] = img.replace("-small", ""); // Replace "-small" with full-size image
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(showImage[imagesArray[0]]);

  const handleUp = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
    setSelectedImage(showImage[imagesArray[currentIndex]]);
  };

  const handleDown = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(showImage[imagesArray[currentIndex]]);
  };

  const handleSelectImage = (img) => {
    setSelectedImage(showImage[img]);
    setCurrentIndex(imagesArray.indexOf(img));
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
                {imagesArray.map((img, index) => (
                  <li key={index} className="flex justify-center items-center">
                    <img
                      src={img}
                      className={`h-20 w-20 object-cover mr-5 p-1 rounded-full cursor-pointer ${
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

      <div className="flex md:flex-row flex-col md:items-center mx-8 md:gap-16 my-8">
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
