import React from "react";

const Start = () => {
  return (
    <div className="relative bg-black h-[28rem] flex items-center justify-center" style={{background: "url('/Ourbrand/background.png')", backgroundSize: "cover", backgroundPosition: "50%"}}>
      

      <div className="relative text-white w-full max-w-22xl px-6 md:px-12 flex flex-col gap-5 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-medium leading-tight">
          We Are Milesight,
          <br className="hidden md:block" />
          We Make Sensing Matter
        </h1>
        <p className="text-sm md:text-base">
          From sensing to connecting, to processing, to acting, and to the power
          that transforms the world.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-sky-500 rounded-md px-4 py-2 text-white text-sm md:text-base w-[8rem]">
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
