import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HowSmartSection from "./HowSmartSection";
import HowConnectSection from "./HowConnectSection";
import HowScaleSection from "./HowScaleSection";
import HowTalkSection from "./HowTalkSection";
import HowExploreSection from "./HowExploreSection";

function HowSection() {
  const [activeSection, setActiveSection] = useState("monitoring");

  return (
    <div id="hvac-how" className="my-8">
      <div className="p-4">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="md:text-[2.5rem] text-[25px] text-[#333] text-center ">
            How Can Our Iot Solutions Help Different HVAC Systems in Buildings?
          </h2>
          <p className="text-[#666] text-sm text-center">
            The types of HVAC systems vary depending on the building
            infrastructure. In our solutions, we got it all for you! Our devices
            are ideal fits for different HVAC types, including RTU, PTAC, VAV,
            boilers and heat pumps.
          </p>
          <p className="text-[#666] text-sm text-center">
            Furthermore, our solutions cover the full spectrum, starting with
            the HVAC system to ensure smarter and more efficient buildings. The
            energy consumption of an HVAC system is affected by ventilation
            status, indoor/outdoor temperatures, humidity levels, thermostat
            settings, facility operational performance, and other factors.
            Regular maintenance is critical to optimize HVAC system performance
            and reduce energy consumption.
          </p>
        </div>
        <div
          className="h-[80vh] bg-cover bg-center text-white p-4 flex flex-col gap-6 justify-center items-start"
          style={{
            backgroundImage: "url('/Solution/smart-hvac/how-bg.png')",
          }}
        ></div>
        <div className="bg-[#7CCA9A] p-4">
          <div>
            <div className="flex flex-col gap-4 items-center">
              <h2 className="md:text-[2rem] text-[20px] text-[#333]">
                Smart HVAC Keeps Building Efficient
              </h2>
              <div className="flex items-center gap-4">
                <button
                  className={`hover:cursor-pointer px-2 py-1 transition-all duration-300 text-sm ${
                    activeSection === "monitoring"
                      ? "text-[#00667C] border-b-4 border-[#00667C] font-semibold"
                      : "text-[#333]"
                  }`}
                  onClick={() => setActiveSection("monitoring")}
                >
                  Performance Monitoring
                </button>
                <button
                  className={`hover:cursor-pointer px-2 py-1 transition-all duration-300 text-sm ${
                    activeSection === "optimization"
                      ? "text-[#00667C] border-b-4 border-[#00667C] font-semibold"
                      : "text-[#333]"
                  }`}
                  onClick={() => setActiveSection("optimization")}
                >
                  Performance Optimization
                </button>
              </div>
            </div>
            {/* Section Content with Animation */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                {activeSection === "monitoring" && (
                  <motion.div
                    key="monitoring"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#fff] p-4 rounded flex md:flex-row flex-col justify-between items-center"
                  >
                    <div className="flex flex-col justify-center items-start gap-4">
                      <h2 className="md:text-[1.5rem] text-[15px] text-[#333]">
                        Is the HVAC System Running Smoothly as Planned?
                      </h2>
                      <p className="text-sm text-[#666]">
                        With smart thermostats, you can be informed in real-time
                        and have ALL under control. We can help you:
                      </p>
                      <button className="bg-[#7CCA9A] hover:bg-[#00667C] px-4 py-1 rounded text-white text-sm hover:cursor-pointer ">
                        Work Better with Predictive Maintenance
                      </button>
                      <div className="flex items-center my-4">
                        <div className="flex flex-col items-center gap-2">
                          <img
                            src="/Solution/smart-hvac/how-img1.png"
                            alt="not found"
                          />
                          <p className="text-sm text-[#333]">WT201</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <img
                            src="/Solution/smart-hvac/how-img2.png"
                            alt="not found"
                          />
                          <p className="text-sm text-[#333]">WT30x</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/Solution/smart-hvac/how-img3.png"
                        alt="not found"
                      />
                    </div>
                  </motion.div>
                )}

                {activeSection === "optimization" && (
                  <motion.div
                    key="optimization"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#fff] p-4 rounded flex md:flex-row flex-col justify-between items-center"
                  >
                    <div className="flex flex-col justify-center items-start gap-4">
                      <h2 className="md:text-[1.5rem] text-[15px] text-[#333]">
                        Have I Got the Smart HVAC System Working to Its Full
                        Potential?
                      </h2>
                      <p className="text-sm text-[#666]">
                        Different from traditional HVAC systems, you are able to
                        take a step further with smart thermostat to utilize the
                        performance.
                      </p>
                      <button className="bg-[#7CCA9A] hover:bg-[#00667C] px-4 py-1 rounded text-white text-sm hover:cursor-pointer ">
                        Improve More with Predictive Maintenance
                      </button>
                      <div className="flex items-center my-4">
                        <div className="flex flex-col items-center gap-2">
                          <img
                            src="/Solution/smart-hvac/how-img1.png"
                            alt="not found"
                          />
                          <p className="text-sm text-[#333]">WT201</p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <img
                            src="/Solution/smart-hvac/how-img2.png"
                            alt="not found"
                          />
                          <p className="text-sm text-[#333]">WT30x</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/Solution/smart-hvac/how-img4.jpg"
                        alt="not found"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <HowSmartSection />
        <HowConnectSection />
        <HowScaleSection />
        <HowTalkSection />
        <HowExploreSection />
      </div>
    </div>
  );
}

export default HowSection;
