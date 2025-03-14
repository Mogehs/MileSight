import React, { useState } from "react";

const cards = [
  {
    id: 1,
    img: "/partners/techno-partner/iot1.png",
    title: "Actility",
    btn: "Read the news",
    para: "Actility is a world leader in Low-Power Wide-Area Networks (LPWAN) industrial-grade connectivity solutions for the Internet of Things. Actility provides its ThingPark™ platform and network technology to deploy, operate and maintain public and private wireless IoT networks within a unified, scalable and versatile network infrastructure. The vast majority of nationwide LoRaWAN® network service providers (over 50) and hundreds of companies trust ThingPark™ all over the world. Through its subsidiary Abeeway, Actility also provides patented ultra-low power tracking solutions. ThingPark Market offers the largest selection of interoperable IoT gateways, devices and applications to simplify and accelerate deployment of use cases.",
  },
  {
    id: 2,
    img: "/partners/techno-partner/iot2.png",
    title: "Akenza",
    btn: "Read the news",
    para: "Akenza is the self-service IoT platform, allowing you to build great IoT products and services with value. It connects, controls, and manages IoT devices, all in one place.",
  },
  {
    id: 3,
    img: "/partners/techno-partner/iot3.png",
    title: "Alibaba Cloud",
    btn: "Read the news",
    para: "Founded in 2009, Alibaba Cloud is the world’s leading cloud computing and artificial intelligence technology company, providing services for companies, developers and governments in more than 200 countries. In January 2017, Alibaba Cloud became the global designated cloud service provider for the Olympic Games.",
  },
  {
    id: 4,
    img: "/partners/techno-partner/iot4.png",
    title: "Amazon Web Services (AWS)",
    btn: "Read the news",
    para: "Amazon Web Services (AWS) is a secure cloud services platform, offering compute power, database storage, content delivery and other functionality to help businesses scale and grow.",
  },
  {
    id: 5,
    img: "/partners/techno-partner/iot5.png",
    title: "Asteria's Gravio Node Computing Platform",
    btn: "Read the news",
    para: "Asteria is a software development company, which provides products and services that “connect” systems, people, things and wills to the future based on the concept of Connecting the World with Software”. Its flagship product, ASTERIA Warp, is middleware which integrates data from different systems and cloud services without coding. As of August 1, 2023, over 10,000 companies had introduced the product. Another product, Handbook, is a business negotiation support app which enables consolidated management of data from diverse origins, such as documents, videos, and websites, through the cloud. Mobile app building tool Platio allows users to easily create and distribute mobile apps befitting specific in-house tasks. Node integration platform Gravio enables integrated management of data collected from multiple areas without coding. By offering these products, Asteria helps companies and organizations promote digital transformation (DX) and improve their business process efficiency.",
  },
  {
    id: 6,
    img: "/partners/techno-partner/iot6.png",
    title: "Brunata AG",
    btn: "Read the news",
    para: "Brunata AG offers IoT consulting and develops innovative and scalable IoT end-to-end solutions for cities, service companies and energy providers. The offer is based on various low power WAN technologies such as LoRaWAN®, Sigfox and mobile communications. Brunata customers and partners have access to a complete package, from sensors and devices to communication networks and extensive end applications.",
  },
];

function IotSection() {
  const [hoveredId, setHoveredId] = useState(null);
  return (
    <div className="my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {cards.map((item, index) => (
          <div key={item.id} className="relative">
            <div
              className="bg-[#F9FAFC] p-4 rounded-xl flex flex-col items-center justify-center gap-4 hover:cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img src={item.img} alt="not found" />
              <h3 className="font-bold text-[15px]">{item.title}</h3>
              <button className="border border-[#469bff] rounded-lg text-[#469bff] hover:cursor-pointer hover:bg-[#469bff] hover:text-white px-2 py-1">
                {item.btn}
              </button>
            </div>

            {/* Smooth hover effect */}
            {hoveredId === item.id && (
              <div
                className={`absolute bg-white text-[#666] p-4 rounded-md shadow-lg w-[90%] md:w-[100%] z-50 transition-all duration-300 ${
                  index % 4 === 3 ? "right-0" : "left-0"
                }`}
              >
                <p>{item.para}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default IotSection;
