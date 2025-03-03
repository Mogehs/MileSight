import sensor from "/IaqAdvanced/sensor.jpg";
import hvac from "/IaqAdvanced/hvac.png";
import hvac2 from "/IaqAdvanced/hvac2.png";
import hvac3 from "/IaqAdvanced/hvac3.png";
import { PiCloudSunLight } from "react-icons/pi";
import { IoMdSpeedometer } from "react-icons/io";

import { WiHumidity } from "react-icons/wi";
import { LiaTemperatureHighSolid } from "react-icons/lia";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMdCloudyNight } from "react-icons/io";
import { GiRunningNinja } from "react-icons/gi";
import { TiWeatherWindyCloudy } from "react-icons/ti";

export default function Sensing() {
  const cards = [
    {
      img: hvac,
      title: "AM102/AM102L",
      titl2: "2-in-1 IAQ Sensors",
      features: [
        "Itsy-bitsy & Eye-Catching",
        "Traffic Light Indicator",
        "Anti-theft Protection",
        "2.13-inch E-ink Screen (AM102)",
        "Support Smart Screen Mode (AM102)",
        "Support Hibernation Mode (AM102)",
        "Battery Life up to 7 Years (AM102) / 9 Years (AM102L)",
      ],
      humidity: <WiHumidity />,
      temp: <LiaTemperatureHighSolid />,
      rightarow: <FaLongArrowAltRight />,
    },
    {
      img: hvac2,
      title: "AM103/AM103L",
      titl2: "3-in-1 IAQ Sensors",
      features: [
        "Traffic Light Status Indicator",
        "Anti - theft Protection",
        "2.13 Inch E - ink Screen(AM103)",
        "Vivid Emoticon Indication(AM103)",
        "Support Smart Screen Mode(AM103)",
        "Support Hibernation Mode(AM103)",
        "Battery Life up to 3 Years(AM103) / 4Years(AM103L)",
      ],
      cloud: <IoMdCloudyNight />,
      humidity: <WiHumidity />,
      temp: <LiaTemperatureHighSolid />,
      rightarow: <FaLongArrowAltRight />,
    },
    {
      img: hvac3,
      title: "AM307 (L) / AM308(L)/AM319 (L)",
      titl2: "9-in-1 IAQ Sensors",
      features: [
        "Aligned with WELL (AM319)",
        "Traffic Light Indicator and Buzzer",
        "Anti-theft Protection",
        "Higher Accuracy & Smart Screen Mode",
        "Data Retrieval and Data Retransmission",
        "4.2-Inch E-ink Screen (AM307/AM308/AM319)",
        "Vivid Emoticon Indication (AM307/AM308/AM319)",
        "Powered via USB Type-C (AM319/AM319L)",
        "Battery Life up to 3 Years (AM307) / 1 Year (AM308)",
        "Battery Life up to 4 Years (AM307L) / 1.5 Years (AM308L)",
      ],
      cloud: <IoMdCloudyNight />,
      humidity: <WiHumidity />,
      temp: <LiaTemperatureHighSolid />,
      rightarow: <FaLongArrowAltRight />,
      run: <GiRunningNinja />,
      sun: <PiCloudSunLight />,
      speed: <IoMdSpeedometer />,
      co: <TiWeatherWindyCloudy />,
    },
  ];

  return (
    <div
      className="w-full py-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${sensor})` }}
    >
      <div className="w-full sm:w-11/12 mx-auto">
        <div className="text-center text-[#7CCA9A] mb-6 px-4">
          <h1 className="text-xl md:text-3xl font-semibold">
            Sensing and Seeing the Air with IAQ Sensors
          </h1>
          <p className="text-xs md:text-lg mt-2 w-full md:w-[60%] mx-auto">
            Real-time and remote energy management is actionable by monitoring
            indoor air quality, such as temperature and humidity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="h-auto md:h-[36rem] bg-[#00657c97] border border-[#2b6db8] rounded-lg p-4 shadow-lg transition-transform   relative"
            >
              <div className="flex items-center gap-3">
                <img
                  src={card.img}
                  alt=""
                  className="w-24 h-24 object-contain rounded-md"
                />
                <div>
                  <h1 className="text-lg md:text-xl font-semibold text-white">
                    {card.title}
                  </h1>
                  <h2 className="text-sm md:text-md text-white">
                    {card.titl2}
                  </h2>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-xs lg:text-md">
                {card.features.map((feature, i) => (
                  <li key={i} className="list-disc list-inside text-[#7CCA9A]">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mt-4">
                {card.cloud && (
                  <div className="border border-white rounded-md px-2 py-1 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl text-[#7CCA9A]">
                      {card.cloud}
                    </span>
                  </div>
                )}
                {card.humidity && (
                  <div className="border border-white rounded-md px-2 py-1 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl text-[#7CCA9A]">
                      {card.humidity}
                    </span>
                  </div>
                )}
                {card.temp && (
                  <div className="border border-white rounded-md px-2 py-1 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl text-[#7CCA9A]">
                      {card.temp}
                    </span>
                  </div>
                )}
                {card.run && (
                  <div className="border border-white rounded-md px-2 py-1 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl text-[#7CCA9A]">
                      {card.run}
                    </span>
                  </div>
                )}
                {card.sun && (
                  <div className="border border-white rounded-md px-2 py-1 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl text-[#7CCA9A]">
                      {card.sun}
                    </span>
                  </div>
                )}
                {card.speed && (
                  <div className="border border-white rounded-md px-2 py-1 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl text-[#7CCA9A]">
                      {card.speed}
                    </span>
                  </div>
                )}
                {card.co && (
                  <div className="border border-white rounded-md px-2 py-1 flex items-center justify-center">
                    <span className="text-3xl md:text-4xl text-[#7CCA9A]">
                      {card.co}
                    </span>
                  </div>
                )}
              </div>

              <div className="absolute top-2 right-2 md:hidden w-[20%] p-2 rounded-md flex justify-center items-center bg-blue-600 transition-all ease-in-out transform hover:scale-105 cursor-pointer">
                <span className="text-white">{card.rightarow}</span>
              </div>
              <div className="hidden md:flex absolute bottom-2 right-4 w-[20%] p-2 rounded-md justify-center items-center group bg-[#00667C] hover:bg-[#7CCA9A] hover:text-[#00667C] transition-all ease-in-out transform hover:scale-105 cursor-pointer">
                <span className="text-white group-hover:text-[#00667C]">
                  <a href="/products/NDAA-Compilant">{card.rightarow}</a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
