import React, { useState } from "react";

const buttonItems = [
  { label: "Building", image: "/SmartCity/bt-2.jpg" },
  { label: "Hospital", image: "/SmartCity/bt-3.jpg" },
  { label: "Utility", image: "/SmartCity/bt-4.jpg" },
  { label: "Museum", image: "/SmartCity/bt-5.jpg" },
  { label: "Industrial", image: "/SmartCity/bt-5.jpg" },
];

const SuccessStories = () => {
  const [selectedImage, setSelectedImage] = useState(buttonItems[0].image);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="my-20 hidden md:block" id="smartCity-benefit">
      <h1 className="text-center text-2xl font-bold mb-5">Success Story</h1>
      <div className="flex justify-center gap-4">
        {buttonItems.map((button, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-xl text-[10px] transition-all border border-transparent hover:bg-[#7CCA9A] hover:cursor-pointer ${
              activeIndex === index
                ? "bg-[#00667C] text-[#fff]"
                : "border-black"
            }`}
            onClick={() => {
              setSelectedImage(button.image);
              setActiveIndex(index);
            }}
          >
            {button.label}
          </button>
        ))}
      </div>
      {selectedImage && (
        <div className="mt-5 flex justify-center">
          <img
            src={selectedImage}
            alt="Selected"
            className="w-[40rem] h-64 rounded-md object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default SuccessStories;
