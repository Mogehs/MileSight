import React from "react";

function Hero() {
  return (
    <div
      className="md:h-[90vh] bg-cover bg-center bg-no-repeat p-4 flex flex-col justify-between items-center md:py-8"
      style={{
        backgroundImage: "url('/company/impact-award/impactbg.jpg')",
      }}
    >
      <h2 className="md:text-[1.5rem] lg:text-[2.5rem] text-[25px] text-[#fff]">
        Milesight 2024 Impact Awards Ceremony
      </h2>
      <div className="flex flex-col items-center">
        <p className="text-[#fff] md:text-[1rem] text-[20px]">
          Honoring Customer Stories that Make Sensing Matter
        </p>
        <div className="flex md:flex-row flex-col w-full items-center mt-4 gap-4">
          <button className="border border-[#0299f4] px-2 py-1 rounded-md bg-[#0299f4] text-white hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 w-full md:w-auto">
            IoT Category Recap
          </button>
          <button className="border border-[#0299f4] px-2 py-1 rounded-md bg-[#0299f4] text-white hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 w-full md:w-auto">
            Video Security Category Recap
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
