import React from "react";

const NdaaSection = () => {
  return (
    <div>
      <div
        className="md:h-[60vh] bg-cover bg-center flex md:flex-row flex-col items-center justify-between text-white"
        style={{ backgroundImage: "url('/mini-dome/dome-hero-bg.jpg')" }}
      >

        <div className="flex flex-col px-8">
          <h1 className="md:text-[2.5rem] text-[25px]">
            AI Motorized Dome <br /> Network Camera
          </h1>
          <p className="md:text-[1.5rem] text-[15px]">
            Intelligent and Robust for Mission-critical Applications
          </p>
        </div>
        <div>
          <img
            className="w-[70%]"
            src="/mini-dome/hero-img.png"
            alt="not found"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center mx-8  md:gap-16 my-8">
        <ul className="list-disc marker:text-[#0299f4] text-[#666]">
          <li>2/4/5/8MP</li>
          <li>AI Deep Learning</li>
          <li>0.005Lux Ultra Low-light</li>
          <li>Smart IR II with 50m IR Distance</li>
        </ul>
        <ul className="list-disc marker:text-[#0299f4] text-[#666]">
          <li>Motorized Zoom Lens</li>
          <li>P-Iris Control</li>
          <li>IP67 & IK10</li>
          <li>Versatile Interfaces (Optional)</li>
        </ul>
      </div>
    </div>
  );
};

export default NdaaSection;
