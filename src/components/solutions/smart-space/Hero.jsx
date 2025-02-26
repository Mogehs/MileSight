import React from "react";

function Hero() {
  return (
    <div
      className="md:h-[70vh] h-[50vh] w-full bg-no-repeat bg-cover bg-center md:px-8 px-2 md:text-white flex flex-col justify-center opacity-90"
      style={{ backgroundImage: "url('/Solution/smart-space/hero-img.png')" }}
    >
      <h1 className="md:text-[2.5rem] text-[25px]">
        Cowork Smart Space <br />
        Solution
      </h1>
      <p className="md:text-[1.5rem] md:w-[30%] text-[15px]">
        Explore the Potential of Space Optimization & Management
      </p>
    </div>
  );
}

export default Hero;
