import { useState } from "react";

export const Card = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-[80%]  bg-white shadow-lg  shadow-gray-500 rounded-lg h-[18rem] overflow-hidden cursor-pointer p-2 border-gray-500 border-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={item.img}
        alt={item.tite}
        className="w-full h-35 object-cover rounded-md"
      />
      <div className="p-2 h-[15vh]">
        <h1 className="font-semibold mb-2 text-xs">{item.title}</h1>
        <p className="text-md w-[63%]">{item.decription}</p>
      </div>
      <div
        className={` w-full sm:w-[35%] transition-all ease-in delay-100 p-1 px-2  rounded-4xl bg-blue-300  duration-300 ${
          isHovered ? "opacity-100 h-[35px]" : "opacity-0 h-0"
        }`}
      >
        <span>Compare Now</span>
      </div>
    </div>
  );
};
