import React, { useEffect, useState } from "react";
import mainsecurity from "/ResourceImg/mainsecurity.jpg";
import { GiCctvCamera } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { RiBuilding2Line } from "react-icons/ri";
import { MdOutlineCellTower, MdSensors } from "react-icons/md";
import { LuLayoutTemplate } from "react-icons/lu";
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
      title: "IoT Help Center",
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
      productname: "Milesight IoT Cloud",
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
      <div className="relative w-full h-[20rem]">
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="flex flex-col w-full sm:w-[80%] lg:w-[70%]">
            <h3 className="text-2xl sm:text-4xl font-bold max-w-[600px] ml-4">
              Support
            </h3>
            <p className="text-sm sm:text-base px-4 sm:px-0 mt-2">
              We are dedicated to providing our customers with the best possible
              support service <br className="hidden sm:block" />
              to help them make the most of our products and solutions.
            </p>
          </div>
        </div>
        <img
          src={mainsecurity}
          alt="Security"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="SubmitTicket flex flex-col items-center w-full h-auto mt-10">
        <h2 className="text-4xl text-[#00667C] font-bold mt-7">
          Submit a Ticket
        </h2>
        <p className="text-[#004D5A] mt-10">
          Submit a ticket to get efficient support in
        </p>
      </div>
      <div className="icon flex flex-col sm:flex-row justify-evenly text-[#00667C] text-6xl h-auto cursor-pointer mt-10">
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
            className="flex flex-col items-center gap-3 p-4 rounded-lg transition-all duration-300 text-[#004D5A] hover:text-[#7CCA9A] group"
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-[#7CCA9A] text-[#00667C] rounded-lg">
              {item.icon}
            </span>
            <span className="text-sm group-hover:text-[#7CCA9A]">
              {item.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-7 mt-12">
        <h1 className="text-4xl font-bold justify-center flex text-[#00667C]">
          Online Demo
        </h1>
        <p className="mb-5 text-[14px] text-center text-[#004D5A]">
          Try Milesight products with the online demo immediately.
        </p>
        <div className="flex flex-wrap items-center justify-center text-center">
          {section.map((item, index) => (
            <div key={index} className="group rounded-2xl">
              <img
                src={item.image}
                alt={item.productname}
                className="w-[250px] h-[150px] rounded-2xl transition-all duration-500 group-hover:-translate-y-3 shadow-lg"
              />
              <h2 className="mt-3 text-[#00667C] font-semibold group-hover:text-[#7CCA9A]">
                {item.productname}
              </h2>
              <button className="mt-3 mb-2 px-16 py-2 border border-[#00667C] text-[#00667C] rounded-lg transition-all duration-500 group-hover:bg-[#7CCA9A] group-hover:text-white">
                {item.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
