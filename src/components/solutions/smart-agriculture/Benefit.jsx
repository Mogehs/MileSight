import React from "react";

function Benefit() {
  return (
    <div
      id="agri-benefits"
      className="md:h-[100vh] bg-cover bg-no-repeat bg-centerp-4 flex flex-col items-center justify-center gap-6 p-6"
      style={{ backgroundImage: "url('/Solution/smart-agri/benefit-bg.jpg')" }}
    >
      <h2 className="text-white lg:text-[2.5rem] md:text-[1.5rem] text-[20px]">
        What Benefits Will You Get?
      </h2>

      <div className="flex md:flex-row justify-center flex-col gap-8">
        <div className="bg-[#164c85] text-white flex flex-col gap-6 justify-center items-center p-4 rounded-md md:w-[40%]">
          <h2 className="md:text-[1.8rem] text-[25px]">Increase</h2>
          <ul className="text-sm list-disc marker:text-[#fff] pl-5">
            <li>
              Efficiency Improvement
              <br />
              The automatic remote solution can improve resource usage
              effectively, including
              <br /> water, light, etc.
            </li>
            <li>
              High Flexibility at Scale <br />
              The battery-powered sensors can be added or moved anytime anywhere
              with no worries <br />
              about cable and electricity.
            </li>
            <li>
              Data Visualization <br />
              Collected data can be transferred to the cloud platform, enabling
              users to remote <br />
              control and monitor the devices.
            </li>
          </ul>
        </div>

        <div className="bg-[#164c85] text-white flex flex-col gap-6 justify-center items-center p-4 rounded-md md:w-[40%]">
          <h2 className="md:text-[1.8rem] text-[25px]">Reduce</h2>
          <ul className="text-sm list-disc marker:text-[#fff] pl-5">
            <li>
              Minimum Human Interference
              <br />
              The crops are kept at optimum temperature, humidity,
              <br /> light, CO2 , and soil moisture levels automatically.
            </li>
            <li>
              Low Maintenance Costs <br />
              The battery-powered sensors will do away with a lot of the <br />
              repetitive work.
            </li>
            <li>
              Labor Costs Reduction <br />
              The automatic solution will decrease the number of <br />
              farmers needed to monitor and tend the growth situation <br /> of
              crops.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
