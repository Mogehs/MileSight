import React from "react";

function SmartSpaceSection() {
  return (
    <div className="my-8" id="smart-space">
      <div>
        <h1 className="md:text-[2.5rem] text-[20px] text-center">
          Transform Your Space with Smart Office Senors and Solutions
        </h1>
        <div className="flex md:flex-row flex-col justify-center w-full p-4 gap-8 mt-8">
          <div className="border border-[#c2c2c2] md:w-[50%] px-4 py-12 rounded-xl flex justify-center items-center">
            <p className="text-[#666]">
              Unlock the full potential of your workplace with Milesight's
              advanced smart office solutions. From occupancy detection and
              environmental monitoring to automation controls, discover how to
              use Milesight smart office sensors to optimize space, reduce
              energy consumption, and ensure a secure, comfortable work
              environment.
            </p>
          </div>
          <div className="md:w-[50%] hover:cursor-pointer">
            <img
              className="w-120 rounded-2xl"
              src="/Solution/smart-space/smart-video-img.jpg"
              alt="not found"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 mb-2 bg-[#7CCA9A] p-4 flex md:flex-row flex-col gap-6 justify-center items-center w-full">
        <div className="md:w-[45%] flex flex-col gap-6">
        <h2 className="md:text-[2rem] text-[25px]">
          Revolutionize Your <br /> Workplace with Smart <br /> Space Solution
        </h2>
        <p className="text-[#666]">
          This turnkey solution will help you stay one step ahead by capturing
          actionable insights, improving decision-making, and exploring the
          potential of your workplace for a smarter space. With smart space
          solutions, you can easily optimize and manage your space, increase
          productivity, enhance collaboration, and reduce costs. Embrace the
          future of work with a smart space solution today.
        </p>
        </div>
        <div className="md:w-[45%]">
          <img className="" src="/Solution/smart-space/smart-space-img.png" alt="not found" />
        </div>
      </div>
    </div>
  );
}

export default SmartSpaceSection;
