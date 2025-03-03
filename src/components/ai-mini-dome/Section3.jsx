import React from "react";

const Section3 = () => {
  return (
    <div className="flex md:flex-row flex-col items-center gap-4 justify-around p-4 my-8">
      <img
        className="md:w-[40%]"
        src="/mini-dome/section3-img.png"
        alt="not found"
      />
      <div className="md:w-[50%]">
        <h2 className="md:text-[2rem] text-[25px] text-[#333]">
          Superior Image Quality
        </h2>
        <p className="text-[#666] text-[15px]">
          With advanced image processing algorithms and SONY STARVIS sensor, it
          achieves excellent image performance, even in challenging lighting
          conditions. Its 0.005Lux Ultra Low-light, Smart IR II Technology, and
          up to 4K Video Viewing Experience features make it well-suited for
          various special circumstances.
        </p>
      </div>
    </div>
  );
};

export default Section3;
