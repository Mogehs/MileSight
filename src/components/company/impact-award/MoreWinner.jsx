import React from "react";

function MoreWinner() {
  return (
    <div className="bg-[#f7f8f9] my-8 p-4 flex md:flex-row flex-col gap-4">
      <img
        className="rounded-xl md:max-w-[50%]"
        src="/company/impact-award/winner.jpg"
        alt="not found"
      />
      <div className="flex flex-col gap-8 items-center justify-center">
        <h2 className="lg:text-[2.5rem] md:text-[1.5rem] text-[25px] text-[#333]">
          More Winner Package Galore!
        </h2>
        <div className="bg-white rounded-xl p-4 md:px-8">
          <ul className="text-[#666] flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <img src="/company/impact-award/check.png" alt="not found" />
              <li>One exclusive and personalized trophy</li>
            </div>
            <div className="flex items-center gap-4">
              <img src="/company/impact-award/check.png" alt="not found" />
              <li>One exclusive award certificate (digital copy & in print)</li>
            </div>
            <div className="flex items-center gap-4">
              <img src="/company/impact-award/check.png" alt="not found" />
              <li>
                One specially crafted case study included in our website's Hall
                of Fame section
              </li>
            </div>
            <div className="flex items-center gap-4">
              <img src="/company/impact-award/check.png" alt="not found" />
              <li>Exposure in the Milesight Impact Awards virtual ceremony</li>
            </div>
            <div className="flex items-center gap-4">
              <img src="/company/impact-award/check.png" alt="not found" />
              <li>
                Exposure across all Milesight channels (Newsletter, Social,
                Website)
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MoreWinner;
