import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Submit() {
  return (
    <div className="p-4 my-8 flex flex-col items-center gap-6">
      <h2 className="lg:text-[2.5rem] md:text-[1.5rem] text-[25px] text-[#333]">
        Submit Your Customer Success Stories Today!
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-[#f7f7f7] p-4 rounded-xl flex md:flex-row flex-col gap-4">
          <img src="/company/impact-award/card4.png" alt="not found" />
          <div className="flex flex-col justify-around gap-4">
            <button className="bg-[#469bff] text-white px-4 py-2 rounded-md hover:cursor-pointer font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 ">
              IoT Cases Entry
            </button>
            <p>
              {" "}
              <span className="text-[#333]">Lead the Transformation:</span>{" "}
              <br />{" "}
              <span className="text-[#666]">
                Submit Your IoT Innovation Customer Stories Now
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-end items-end">
            <div
              className="bg-[#469bff] w-20 h-20 relative"
              style={{
                clipPath: "polygon(47% 59%, 100% 0%, 100% 100%, 0 100%)",
              }}
            >
              <FaArrowRight
                size={28}
                className="text-[#fff] absolute bottom-2 right-2"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#f7f7f7] p-4 rounded-xl flex md:flex-row flex-col gap-4">
          <img src="/company/impact-award/card5.png" alt="not found" />
          <div className="flex flex-col justify-around gap-4">
            <button className="bg-[#469bff] text-white px-4 py-2 rounded-md hover:cursor-pointer font-bold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 ">
              Video Security Cases Entry
            </button>
            <p>
              {" "}
              <span className="text-[#333]">Secure Your Win:</span> <br />{" "}
              <span className="text-[#666]">
                Showcase Your Video Security Mastery Here
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-end items-end">
            <div
              className="bg-[#469bff] w-20 h-20 relative"
              style={{
                clipPath: "polygon(47% 59%, 100% 0%, 100% 100%, 0 100%)",
              }}
            >
              <FaArrowRight
                size={28}
                className="text-[#fff] absolute bottom-2 right-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submit;
