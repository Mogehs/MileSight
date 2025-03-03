import React from "react";

const Start = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('/SmartCity/star.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative text-center text-white px-8 flex flex-col justify-center md:gap-4 gap-2 md:items-start items-center overflow-hidden">
        <h1 className="text-[2rem] md:text-[3rem] font-medium">
        Smart City Solution
        </h1>
        <p className="text-xl md:text-2xl font-base">
        Realize a More Connected, Livable and Efficient City
         </p>
        </div>
    </div>
  );
};

export default Start;
