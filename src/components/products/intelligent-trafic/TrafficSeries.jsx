import { useState, useEffect, useMemo } from "react";
import FormSection from "../iot-sensing/FormSection";
import ParkingManage from "./ParkingManage";
import TrafficManagement from "./TrafficManagement";
import TrafficXseriex from "./TrafficXseriex";

export default function TrafficSeries() {
  const traffic = useMemo(
    () => [
      { key: "TrafficXseriex", label: "TrafficX Series" },
      { key: "TrafficManagement", label: "Road Traffic Management" },
      { key: "ParkingManage", label: "Parking Management" },
    ],
    []
  );

  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      traffic.forEach(({ key }) => {
        const section = document.getElementById(key);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            currentSection = key;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [traffic]); // Include `traffic` in the dependency array

  return (
    <div className="w-full mt-3 sm:mt-0">
      {/* Sticky Navigation */}
      <div className="sm:w-11/12 mx-auto w-full sticky top-0 bg-white shadow-md z-50">
        <div className="flex justify-between items-center flex-wrap p-3">
          <div className="flex">
            {traffic.map((item) => (
              <div
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`flex justify-center items-center sm:font-semibold min-w-[100px] sm:min-w-[200px] h-[40px] cursor-pointer px-3 transition-all delay-75 ease-in  ${
                  activeSection === item.key ? "bg-[#00667C] text-white" : ""
                }`}
              >
                <span className="sm:text-lg text-xs">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-2">
            <p className="text-xs sm:text-sm text-gray-400 cursor-pointer">
              Home
            </p>
            <p className="text-xs sm:text-sm text-gray-400 cursor-pointer">
              Intelligent Traffic
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <section id="TrafficXseriex" className="mt-6">
        <TrafficXseriex />
      </section>
      <section id="TrafficManagement" className="mt-6">
        <TrafficManagement />
      </section>
      <section id="ParkingManage" className="mt-6">
        <ParkingManage />
      </section>

      <FormSection />
    </div>
  );
}
