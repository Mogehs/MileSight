import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const items = [
  {
    name: "Smart Office",
    image: "/home/smart-office.jpg",
  },
  {
    name: "Smart restroom",
    image: "/home/smart-restroom.jpg",
  },
  {
    name: "Indoor Air Quality",
    image: "/home/indoor-air-quality.jpg",
  },
  {
    name: "people counting",
    image: "/home/people-counting.jpg",
  },
  {
    name: "video surveillance",
    image: "/home/video-surveillance.jpg",
  },
  {
    name: "intelligent traffic",
    image: "/home/intelligent-traffic (1).jpg",
  },
];

const Solution = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const getItemIndex = (index) => {
    return (startIndex + index) % items.length;
  };

  return (
    <div className="my-20">
      <div className="ml-4 md:ml-23">
        <h1 className="mt-10 font-semibold text-2xl md:text-3xl text-[#333333]">
          Solution
        </h1>
        <p className="text-[#333333] mt-3 w-[90%] md:w-[35%]">
          Milesight provides a range of solutions to empower a more productive
          and effective society.
        </p>
      </div>
      <div className="w-[95%] md:w-[85%] h-[20rem] md:h-[30rem] mx-auto gap-1 overflow-hidden flex p-4 md:p-10 items-end relative">
        {Array.from({ length: 5 }).map((_, index) => {
          const itemIndex = getItemIndex(index);
          return (
            <div
              key={itemIndex}
              className={`relative transition-all duration-600 linear cursor-pointer ${
                index === 4
                  ? "w-[40%] md:w-[30%] h-[15rem] md:h-[25rem] transform scale-110 m-2 md:m-4"
                  : "w-[20%] md:w-[15%] h-[10rem] md:h-[20rem] transform scale-90"
              }`}
            >
              <img
                src={items[itemIndex].image}
                alt={items[itemIndex].name}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          );
        })}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
          onClick={handlePrev}
        >
          <GrFormPrevious />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
          onClick={handleNext}
        >
          <MdNavigateNext />
        </button>
      </div>
    </div>
  );
};

export default Solution;
