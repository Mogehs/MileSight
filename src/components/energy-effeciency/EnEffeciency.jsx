import React from "react";
// import video from "/energyefficiency/video.mp4";

const EnEffeciency = () => {
  return (
    <div className="relative h-[350px] sm:h-[500px] md:h-[450px] lg:h-[450px] xl:h-[600px]">
      <video
        src={video}
        autoPlay
        loop
        muted
        className="object-cover w-full h-full"
      ></video>
      <div className="absolute inset-0 flex flex-col am:top-[20%] top-[15%]  pl-5 md:pl-20  text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Energy Efficiency Solution
        </h1>
        <h2 className="text-1xl sm:text-3xl md:text-3xl font-semibold">
          Highest Performance with Lowest Cost
        </h2>
      </div>
    </div>
  );
};

export default EnEffeciency;
