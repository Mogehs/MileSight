import { useState } from "react";

export const Card = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full   bg-white shadow-lg  shadow-gray-500 rounded-md h-[20rem] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={item.img}
        alt={item.tite}
        className="w-full h-40 object-cover"
      />
      <div className="p-2 h-[20vh]">
        <h1 className="font-semibold mb-2 text-xl">{item.title}</h1>
        <p className="text-xs mb-2">{item.decription}</p>
      </div>
      <div
        className={` w-full mx-auto sm:w-[80%] text-center transition-all ease-in delay-100 py-2  rounded-4xl bg-blue-300  duration-300 ${
          isHovered ? "opacity-100 h-[40px]" : "opacity-0 h-0"
        }`}
      >
        <span>Learn more</span>
      </div>
    </div>
  );
};
