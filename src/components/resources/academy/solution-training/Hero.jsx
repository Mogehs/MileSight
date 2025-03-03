import React from "react";

function Hero() {
  return (
    <div
      className="h-[100vh] bg-cover bg-center bg-no-repeat p-4 flex flex-col justify-center gap-2 md:pl-16"
      style={{
        backgroundImage: "url('/resources/solution-training/solution-bg.png')",
      }}
    >
      <h2 className="md:text-[2rem] lg:text-[3rem] text-[25px] text-[#333] md:w-[40%]">
        Looking For Solutions for Your Industry?
      </h2>
      <p className="text-[#333] md:text-[1rem] text-[20px] md:w-[40%]">
        Join Milesight's in-demand webinars to experience new and typical
        solutions and enhance your knowledge of the AIoT world.
      </p>
    </div>
  );
}

export default Hero;
