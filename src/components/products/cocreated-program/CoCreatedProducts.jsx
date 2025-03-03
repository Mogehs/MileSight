import React from "react";

const CoCreatedProducts = () => {
  return (
    <div className="w-full my-20 px-4">
      <h1 className="text-xl sm:text-4xl text-[#262626] font-semibold text-center">
        Co-Created Products
      </h1>

      <div className="flex flex-col lg:flex-row items-center bg-gradient-to-l from-[#00667C] to-[#7CCA9A] w-[90%] mx-auto rounded-lg mt-10 p-5 lg:p-8">
        {/* Image Section */}
        <div className="w-full lg:w-[40%] flex justify-center">
          <img
            src="/co-created/meeting-room-bg.png"
            alt="Product Image"
            className="object-cover h-64 w-full max-w-sm rounded-lg"
          />
        </div>

        {/* Text Content Section */}
        <div className="text-white w-full lg:w-[60%] mt-6 lg:mt-0 lg:ml-8">
          <h1 className="text-[1.2rem] font-semibold">
            VS370 Radar Human Presence Sensor
          </h1>
          <p className="mt-3 text-sm leading-relaxed">
            Milesight VS370 Radar Human Presence Sensor is a high-accuracy
            occupancy sensor designed for meeting rooms of all sizes. Combining
            24GHz millimeter-wave radar and PIR technology, it ensures precise
            detection with strong anti-interference capabilities, unaffected by
            lighting and without privacy concerns. Essential for IoT buildings
            and offices, it integrates seamlessly with lighting, HVAC, and
            building control systems, making your office and building smarter.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <ul className="text-sm space-y-2">
              <li>✔ Millimeter Wave Radar + PIR</li>
              <li>✔ Reliable Privacy Protection</li>
              <li>✔ Smarter Automation: Light Sensor & Milesight D2D</li>
            </ul>
            <ul className="text-sm space-y-2">
              <li>✔ Millimeter Wave Radar + PIR</li>
              <li>✔ Reliable Privacy Protection</li>
              <li>✔ Smarter Automation: Light Sensor & Milesight D2D</li>
            </ul>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-[#7CCA9A] rounded-lg py-2 px-4 w-full sm:w-auto">
              Register Now
            </button>
            <button className="p-2 rounded-lg bg-white text-[#00667C] w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-center text-[#262626] text-2xl sm:text-4xl sm:w-[60%] mx-auto mt-20 font-semibold">
        Join in Milesight's Co-Creation Program and Get Sample Discount NOW!
      </h1>
    </div>
  );
};

export default CoCreatedProducts;
