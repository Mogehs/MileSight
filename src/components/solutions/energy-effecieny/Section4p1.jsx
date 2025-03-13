import React from "react";
import icon2 from "/energyefficiency/ico2.png";
import icon3 from "/energyefficiency/ico3.png";
import icon4 from "/energyefficiency/ico4.png";
import icon5 from "/energyefficiency/ico5.png";
import icon6 from "/energyefficiency/ico6.png";
import icon7 from "/energyefficiency/ico7.png";

const Section4p1 = () => {
  return (
    <div className="flex flex-col items-center bg-blue-950 px-4 py-10">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="grid gap-7">
          <div className="text-white">
            <h1 className="text-lg sm:text-xl font-semibold">
              Driving Cost-Efficient Workplace
            </h1>
            <h2 className="text-sm">CoWork Smart Office Solution</h2>
          </div>

          {/* Card 1 */}
          <div className="border border-gray-600 rounded-md text-white p-4 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <h1 className="text-sm">Real-Time Workplace People Counting</h1>
              <h2 className="text-xs text-blue-500">
                Avoid “ghost” meeting rooms with real-time occupancy data and
                100% anonymous detection.
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <img src={icon2} alt="Icon" className="w-16 sm:w-24" />
              <div className="bg-sky-600 rounded-sm text-xs p-1">
                <li>AI Workplace Occupancy Sensor</li>
                <li>Mini LoRaWAN® Gateway</li>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-600 rounded-md text-white p-4 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <h1 className="text-sm">Precise ON/OFF All Day Long</h1>
              <h2 className="text-xs text-blue-500">
                Optimize energy usage by automatically controlling lights, air
                conditioning, and fans.
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <img src={icon4} alt="Icon" className="w-16 sm:w-24" />
              <div className="bg-sky-600 rounded-sm text-xs p-1">
                <li>Smart Light Controller</li>
                <li>LoRaWAN® Wall Switch</li>
                <li>PIR Light Sensor</li>
                <li>Smart Portable Socket</li>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="grid gap-7">
          <div className="text-white">
            <h1 className="text-lg sm:text-xl font-semibold">
              Enhancing Workplace Efficiency
            </h1>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-600 rounded-md text-white p-4 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <h1 className="text-sm">Line Crossing People Counting</h1>
              <h2 className="text-xs text-blue-500">
                Count people entering and exiting with 99.5% accuracy and 100%
                anonymous detection.
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <img src={icon3} alt="Icon" className="w-16 sm:w-24" />
              <div className="bg-sky-600 rounded-sm text-xs p-1">
                <li>AI ToF People Counting Sensor</li>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-600 rounded-md text-white p-4 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <h1 className="text-sm">
                24/7 Indoor Air Quality (IAQ) & CO2 Monitoring
              </h1>
              <h2 className="text-xs text-blue-500">
                Optimize ventilation by monitoring temperature, humidity, and
                CO2 levels.
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <img src={icon5} alt="Icon" className="w-16 sm:w-24" />
              <div className="bg-sky-600 rounded-sm text-xs p-1">
                <li>3-in-1 IAQ Sensor</li>
                <li>9-in-1 IAQ Sensor</li>
                <li>Indoor LoRaWAN® Gateway</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4p1;
