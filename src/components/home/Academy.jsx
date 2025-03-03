import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Academy = () => {
  const [entered, setEnterd] = useState(false);
  const [entered2, setEnterd2] = useState(false);

  return (
    <div className="mt-10 overflow-hidden">
      <h1 className="text-[#333333] font-bold text-center text-[2.5rem]">
        Academy
      </h1>
      <p className="text-center text-[#333333] text-[0.8rem]">
        Gain deeper understanding about Milesight's latest products,
        technologies and solutions at Milesight Academy.
      </p>
      <div className=" h-[20rem] my-20 w-[80%] mx-auto hidden sm:block">
        <div
          className="relative left-150"
          onMouseEnter={() => setEnterd(true)}
          onMouseLeave={() => setEnterd(false)}
        >
          <a href="/resources/academy/product-training">
            <div
              className={`bg-gray-200 w-[80%] sm:w-[30%] h-[15rem] mx-auto lg:m-0 absolute top-0 left-0 rounded-lg cursor-pointer transition-all linear ${
                entered && "z-40 top-10 left-10"
              }`}
            >
              <p className="text-black m-auto flex justify-center items-center p-10 text-center">
                Explore a comprihensive set of videos and resources to find more
                about how to use our cutting edge technologies
              </p>
              <FaLongArrowAltRight className="text-[#00667C] text-5xl ml-30" />
            </div>
          </a>
          <div
            className={`w-[80%] sm:w-[30%] h-[15rem] mx-auto lg:m-0 absolute top-7 left-7 cursor-pointer transition-all linear ${
              !entered && " left-0"
            }`}
          >
            <img
              src="/academy/training-video-center.jpg"
              alt="academy-img"
              className="h-full object-cover rounded-lg w-full "
            />
          </div>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setEnterd2(true)}
          onMouseLeave={() => setEnterd2(false)}
        >
          <a href="/resources/academy/product-training">
            <div
              className={`bg-gray-200 w-[80%] sm:w-[30%] h-[15rem] mx-auto lg:m-0 absolute top-0 left-0 rounded-lg cursor-pointer transition-all linear ${
                entered2 && "z-40 top-10 left-10"
              }`}
            >
              <p className="text-black m-auto flex justify-center items-center p-10 text-center">
                Explore a comprihensive set of videos and resources to find more
                about how to use our cutting edge technologies
              </p>
              <FaLongArrowAltRight className="text-[#00667C] text-5xl ml-30" />
            </div>
          </a>
          <div
            className={`w-[80%] sm:w-[30%] h-[15rem] mx-auto lg:m-0 absolute top-7 left-7 cursor-pointer transition-all linear ${
              !entered2 && " left-0"
            }`}
          >
            <img
              src="/home/academy1.jpg"
              alt="academy-img"
              className="h-full object-cover rounded-lg w-full "
            />
          </div>
        </div>
      </div>
      <a href="">
        <div className="block sm:hidden bg-[#7CCA9A] w-[80%] mx-auto  rounded-lg mt-10">
          <p className="text-white m-auto flex justify-center items-center p-10 text-center">
            Explore a comprihensive set of videos and resources to find more
            about how to use our cutting edge technologies
          </p>
          <FaLongArrowAltRight className="text-[#00667C] text-5xl ml-35 " />
        </div>
      </a>
    </div>
  );
};

export default Academy;
