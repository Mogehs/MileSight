import React from "react";

function Hero() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center bg-no-repeat p-4 flex flex-col justify-center gap-2 md:pl-16"
      style={{
        backgroundImage: "url('/resources/online-demo/hero-bg.jpg')",
      }}
    >
      <h2 className="md:text-[2rem] lg:text-[3rem] text-[25px] text-[#fff]">
        Online Demo
      </h2>
      <p className="text-[#fff] md:text-[1rem] text-[20px] md:w-[48%]">
        Click to experience the powerful performance and explore more
        possibilities of IoT and Video Surveillance.
      </p>
    </div>
  );
}

export default Hero;
