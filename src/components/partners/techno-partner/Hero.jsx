import React from "react";

function Hero() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center bg-no-repeat p-4 flex flex-col justify-center gap-2 md:pl-16"
      style={{
        backgroundImage: "url('/partners/techno-partner/techno-hero.jpg')",
      }}
    >
      <h2 className="md:text-[2rem] lg:text-[3rem] text-[25px] text-[#fff]">
        Milesight Technology Partners
      </h2>
      <p className="text-[#fff] md:text-[1rem] text-[20px] md:w-[48%]">
        Together, we can speed up integration and innovation.
      </p>
    </div>
  );
}

export default Hero;
