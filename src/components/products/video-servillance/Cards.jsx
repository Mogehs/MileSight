import { useState } from "react";

export const Card = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-sm bg-white shadow-lg shadow-gray-500 rounded-md overflow-hidden cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 h-auto">
        <h1 className="font-semibold mb-2 text-md sm:text-lg">{item.title}</h1>
        <p className="text-sm mb-2">{item.description}</p>
      </div>
      <div
        className={`w-full mx-auto mt-3 sm:w-[80%] text-center transition-all ease-in-out duration-300 py-2 rounded-full bg-blue-300 ${
          isHovered ? "opacity-100 h-[40px]" : "opacity-0 h-[40px]"
        }`}
      >
        <span className="text-sm font-medium">Read the News</span>
      </div>
    </div>
  );
};
