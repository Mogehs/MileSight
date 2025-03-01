import React from "react";

function Hero() {
  return (
    <div
      className="h-[100vh] bg-cover bg-center bg-no-repeat p-4 flex flex-col justify-center gap-2 md:pl-16"
      style={{
        backgroundImage: "url('/resources/product-training/hero-bg.png')",
      }}
    >
      <h2 className="md:text-[2rem] lg:text-[3rem] text-[25px] text-[#333] md:w-[40%]">
        What Products Do You Want to Learn Today?
      </h2>
      <p className="text-[#333] md:text-[1rem] text-[20px] md:w-[40%]">Gain an overview of Milesight's products, with background
      information and fundamental training on the full product lineup.</p>
    </div>
  );
}

export default Hero;
