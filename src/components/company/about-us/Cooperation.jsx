import React from "react";
import onvifbg from "/aboutimg/onvifbg.avif";

const Cooperation = () => {
  return (
    <div className="w-full h-auto p-5 sm:h-screen">
      <div className="w-[80vw] h-[50vh] flex flex-col justify-evenly sm:justify-around mx-auto">
        <h1 className=" text-2xl sm:text-5xl font-semibold">
          Cooperation and Compatibility
        </h1>
        <p className="w-full p-2 text-justify sm:w-[50vw] text-gray-400">
          Milesight is trusted by global partners and collaborates with several
          renowned technology partners to provide flexible services to customers
          worldwide.
        </p>
      </div>

      {/* Corrected Background Image Usage */}
      <div
        className=" relative w-[90vw] h-[80vh]  sm:h-[50vh] bg-cover bg-center mx-auto rounded-lg shadow-lg flex flex-col gap-4 sm:justify-around pl-2"
        style={{ backgroundImage: `url(${onvifbg})` }}
      >
        {/* absolute img Div  */}
        <div className="absolute   gap-3 bottom-0 right-0 p-3  sm:right-0 sm:top-[-10] flex sm:flex  sm:pr-3  ">
            <img src="/aboutimg/cop1.jpg" className="h-[30vh] w-[20vw] sm:w-[10vw] sm:h-[50vh]   " alt="" />
            <img src="/aboutimg/cop2.jpg" className="h-[30vh] sm:h-[40vh]" alt="" />
            <img src="/aboutimg/cop3.jpg" className=" h-[30vh] w-[20vw] sm:h-[50vh] sm:w-[10vw] " alt="" />
        </div>

        {/* fist div  */}
        <div>
          <h3 className="text-white">Milesight IoT Ecosystem</h3>
        </div>
        {/* seond icons div  */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold sm:w-[30vw] sm:text-sm md:text-lg text-white">Milesight Video Security Interoperability</h1>
          <div className="icons  flex flex-wrap gap-3   ">
            <div className="flex flex-col gap-3">
              <img
                src="/aboutimg/onvif.png"
                className=" w-[20vw] p-1 sm:p-2 sm:w-[10vw] bg-cover bg-center bg-white rounded-sm"
                alt=""
              />
              <img
                src="/aboutimg/onvif.png"
                className="w-[20vw] p-1 sm:p-2 sm:w-[10vw] bg-white  rounded-sm"
                alt=""
              />
              <img
                src="/aboutimg/onvif.png"
                className="w-[20vw] p-1 sm:p-2 sm:w-[10vw] bg-white rounded-sm"
                alt=""
              />
            </div>
            <div>

            <img
              src="/aboutimg/onvif.png"
              className="w-[20vw] p-1  sm:w-[10vw] bg-white rounded-sm"
              alt=""
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooperation;
