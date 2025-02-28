import React from "react";
import startimg from "/aboutimg/start.jpg"; // Ensure the correct path

const Start = () => {
  return (
    <div
      className="w-full h-[80vh] bg-cover bg-center  rounded-md"
       style={{ backgroundImage: `url(${startimg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="sm:float-right sm:flex sm:flex-col p-1 sm:p-3   gap-2 text-white">
        <h1 className="text-3xl w-full  sm:text-6xl font-semibold">ABOUT MILESIGHT</h1>
        <p className="  w-[100vw] lg:ml-[50px] sm:w-[80vw] lg:w-[30vw] mt-4">
          Focusing on sensing products, on the value of data, on creating
          impacts, we make sensing matter.
        </p>
      </div>
    </div>
  );
};

export default Start;
