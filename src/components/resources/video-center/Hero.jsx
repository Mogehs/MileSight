import React from "react";

function Hero() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h2 className="md:text-[1.5rem] lg:text-[2.5rem] text-[25px] text-[#000]">
        Video Center
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div
          className="md:col-span-3 h-[100vh] bg-cover bg-center bg-no-repeat p-4 flex flex-col justify-center gap-2 md:pl-16"
          style={{
            backgroundImage: "url('/resources/video-center/hero-bg.png')",
          }}
        >
          <h2 className="md:text-[1rem] lg:text-[1.5rem] text-[25px] text-[#fff]">
            Visit our YouTube Channel to take a <br /> deep dive into Milesight
            products <br />
            and solutions.
          </h2>
          <div className="flex md:flex-row flex-col w-full items-center mt-4 gap-4">
            <button className="border border-white px-4 py-2 rounded-full bg-transparent text-white hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 w-full md:w-auto">
              Subscribe to Us on Youtube
            </button>
          </div>
        </div>

        <div className="md:col-span-1 bg-[#f9fafb] p-4 rounded-md flex flex-col gap-4">
          <h2 className="lg:text-[1.5rem] md:text-[1rem] text-[20px] text-[#000]">Video of The Month</h2>
          <div className="flex flex-col gap-2">
            <img src="/resources/video-center/hero1.jpg" alt="not found" />
            <p>LoRaWAN Explained: The Guide from Theory to Practical</p>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/resources/video-center/hero2.jpg" alt="not found" />
            <p>How to Select a Best LoRaWAN Gateway?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
