import React from "react";
import startimg from "/aboutimg/start.jpg"; // Ensure the correct path

const Start = () => {
  return (
    <div
      className="w-full h-[60vh] sm:h-[80vh] sm:float-right bg-cover bg-center  rounded-md relative "
      style={{ backgroundImage: `url(${startimg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute pt-20 px-3 sm:float-right flex flex-col justify-center  items-center sm:flex sm:flex-col sm:right-0 sm:top-7 sm:p-3 text-white bg-[#00000060] rounded w-full sm:w-[35rem]">
        <h1 className="sm:text-4xl w-full text-2xl font-bold">
          ABOUT MILESIGHT
        </h1>
        <span className="">
          Focusing on sensing products, on the value of data, on creating
          impacts, we make sensing matter.
        </span>
      </div>
    </div>
  );
};

export default Start;
