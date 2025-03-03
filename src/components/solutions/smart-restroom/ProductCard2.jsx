import React from "react";
import { GrFormNextLink } from "react-icons/gr";

function ProductCard2() {
  return (
    <div className="bg-[#7CCA9A] rounded-4xl p-4">
      <div className="flex items-center gap-4 border-b pb-2 border-b-[#b9b9b9]">
        <img
          className="w-20"
          src="/Solution/smart-restroom/product-img-2.png"
          alt="not found"
        />
        <h1 className="text-[#fff]">
          <span className="bg-[#1d98fb] text-white p-1">Smell</span> to Get Rid
          of Smell
        </h1>
      </div>
      <div>
        <div>
          <div className="flex flex-col py-2 gap-4">
            <img
              className="w-16 bg-[#ececec] p-1 rounded-full"
              src="/Solution/smart-restroom/p-img-5.png"
              alt="not found"
            />
            <div className="hover:cursor-pointer">
              <h2 className="hover:underline md:text-[1.5rem] text-[20px] text-white">
                Bathroom Odor Detector GS301
              </h2>
              <h3 className="text-[#fff] text-[15px]">
                Smell ammonia (NH3) and hydrogen sulfide (H2S) and monitor
                temperature and humidity to take timely responses to improve air
                quality, getting optimal user experience.
              </h3>
              <div>
                <GrFormNextLink className="text-[#fff] text-[1.8rem] ms-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard2;
