import React, { useEffect, useState } from "react";
import mainsecurity from "/ResourceImg/mainsecurity.jpg";
import { GiCctvCamera } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { RiBuilding2Line } from "react-icons/ri";
import { MdOutlineCellTower, MdSensors } from "react-icons/md";
import { LuLayoutTemplate } from "react-icons/lu";
import security from "/ResourceImg/security.jpg";
import iothelpcenter from "/ResourceImg/iothelpcenter.jpg";
import { FaRegSquareCheck } from "react-icons/fa6";
import { BsCheck2Square } from "react-icons/bs";
import { TfiCheck } from "react-icons/tfi";
export default function SubmitTicket() {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowChild(true);
    }, 1000);
  }, []);

  const faqSections = [
    {
      title: "Security",
      image: "/ResourceImg/security.jpg",
      faqs: [
        "How to Upgrade Firmware for IP Camera?",
        "How to Activate and Check Security Question for Milesight Devices?",
        "How to Setup HTTP Notification?",
        "How to set DDNS?",
      ],
    },
    {
      title: "iothelpcenter",
      image: "/ResourceImg/iothelpcenter.jpg",
      faqs: [
        "How to configure a VPN?",
        "How to troubleshoot network latency?",
        "How to set up port forwarding?",
        "How to improve WiFi performance?",
        "How to set DDNS?",
      ],
    },
  ];

  const section = [
    {
      image: "/ResourceImg/videosurveillancedemo.png",
      productname: "Video Surveillance",
      button: "Try Now",
    },
    {
      image: "/ResourceImg/milesight.png",
      productname: "Milesight Iot cloud",
      button: "Try Now",
    },
    {
      image: "/ResourceImg/gateway-demo-removebg-preview.png",
      productname: "Gateway",
      button: "Try Now",
    },
    {
      image: "/ResourceImg/router-demo.png",
      productname: "Router",
      button: "Try Now",
    },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 300);
  }, []);

  return (
    <div>
      <div className="relative w-full h-auto">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="flex flex-col  w-full sm:w-[80%] lg:w-[70%] ">
            <h3 className="text-2xl sm:text-4xl font-bold max-w-[600px]">
              Support
            </h3>
            <p className="text-sm sm:text-base px-4 sm:px-0">
              We are dedicated to providing our customers with the best possible
              support service <br className="hidden sm:block" />
              to help them make the most of our products and solutions.
            </p>
          </div>
        </div>
        <img
          src={mainsecurity}
          alt="Security"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="SubmitTicket flex flex-col items-center w-[100%] h-auto mt-10">
        <h2 className="text-4xl text-black font-bold mt-7">Submit a Ticket</h2>
        <p className="text-gray-900 mt-10">
          Submit a ticket to get efficient support in
        </p>
      </div>
      <div className="icon flex flex-col sm:flex-row justify-evenly text-[#009CF4] text-6xl  h-auto cursor-pointer mt-10">
        {[
          { icon: <GiCctvCamera />, text: "Video Surveillance" },
          { icon: <FaCar />, text: "Intelligent Traffic" },
          { icon: <RiBuilding2Line />, text: "IoT LoRaWAN Series" },
          { icon: <MdOutlineCellTower />, text: "5G & Cellular Product" },
          { icon: <MdSensors />, text: "Environmental Sensing" },
          { icon: <LuLayoutTemplate />, text: "Software & Platform" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 text-gray-800 hover:text-[#009CF4] group"
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-blue-500 text-[#009CF4] rounded-lg">
              {item.icon}
            </span>
            <span className="text-sm  group-hover:text-[#009CF4]">
              {item.text}
            </span>
          </div>
        ))}
      </div>
      <div className="div flex justify-center text-5xl font-semibold h-[15vh] mt-12">
        <h1>Help Center</h1>
      </div>
      <div className="h-auto">
        <div className="flex flex-wrap gap-8 justify-center items-center ">
          {faqSections.map((section, index) => (
            <div
              key={index}
              className="group relative w-[400px] h-autorounded-2xl shadow-lg "
            >
              <img
                src={section.image}
                alt={section.title}
                className=" rounded-2xl w-full h-auto transition-all duration-700 ease-in-out 
              group-hover:shadow-lg shadow-black group-hover:-translate-y-3"
              />
              <div
                className={`  group-hover:-translate-y-3 group-hover:shadow-lg shadow-black  w-full bg-white px-6 py-4  rounded-2xl shadow-md transition-all duration-700 ease-in-out 
            ${loaded ? "bottom-[-83%]" : "bottom-0"} `}
              >
                <h2 className="text-xl font-bold text-gray-800 ">
                  {section.title}
                </h2>
                {section.faqs.map((faq, i) => (
                  <p
                    key={i}
                    className="flex items-center gap-2 hover:text-blue-600 cursor-pointer transition-colors duration-300"
                  >
                    <BsCheck2Square className="text-2xl font-bold hover:text-blue-600 " />{" "}
                    {faq}
                  </p>
                ))}
                <button
                  className="btn border border-gray-500 w-full py-3 h-[45px] mt-4 rounded-lg text-black 
                   hover:text-[#009CF4] transition-transform transform hover:scale-105 
                    shadow-md hover:shadow-lg hover:border-blue-600"
                >
                  View Project
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-2xl h-[10px]">
                    <TfiCheck />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-7 mt-12">
        <h1 className="text-4xl font-bold justify-center flex">Online Demo</h1>
        <p className="mb-5 text-[14px] text-center flex">
          Try Milesight products with the online demo immediately.
        </p>
        <div className="flex flex-wrap items-center justify-center text-center">
          {section.map((item, index) => (
            <div key={index} className="group rounded-2xl  ">
              <img
                src={item.image}
                alt={item.productname}
                className="w-[250px]  h-[150px] rounded-2xl transition-all duration-500 group-hover:-translate-y-3 shadow-lg"
              />
              <div className="   bg-white opacity-0 group-hover:opacity-80 transition-opacity duration-500 mt-5"></div>
              <h2 className=" bottom-12 left-5 text-black px-3 py-1  transition-all duration-500  group-hover:text-[#009CF4] rounded">
                {item.productname}
              </h2>
              <button className=" mt-5 mb-2 bottom-3 right-5 border border-black text-black px-16 py-2 rounded-lg transition-all duration-500 group-hover:bg-blue-500 group-hover:text-white">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
