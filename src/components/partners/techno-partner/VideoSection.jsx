import React, { useState } from "react";

const cards = [
  {
    id: 1,
    img: "/partners/techno-partner/v-icon1.png",
    title: "3dEYE",
    btn: "Integration link",
    para: "3dEYE offers a cybersecure pure cloud video and AI platform, eliminating the need for server or bridge purchases and installations. The platform is camera-agnostic, accommodating body-worn cameras, drones, and IoT. It's designed for multi-site and multi-brand deployments, delivering AI-driven proactive security and enabling operators to conduct smarter and faster investigations. Since 2014, the 3dEYE platform has empowered the monitoring and video surveillance industry with the ability to migrate, scale, and orchestrate IP cameras and IoT devices on the AWS public cloud.",
  },
  {
    id: 2,
    img: "/partners/techno-partner/icon2.png",
    title: "Akuvox&Akubela",
    btn: "Integration link",
    para: "The Akuvox Company is a global leading provider of smart intercom and smart home products and solutions. The company is committed to unleashing the power of technologies to improve people's lives with better communication, greater security, and more convenience.Our products and solutions have been deployed and used daily in more than 100 countries and regions, meeting customer needs in various vertical markets that range from residential to commercial, from healthcare to public safety.",
  },
  {
    id: 3,
    img: "/partners/techno-partner/icon3.png",
    title: "Arteco",
    btn: "Integration link",
    para: "Founded in 1987, Arteco is a global provider of Video Management Software solutions headquartered in Faenza, Italy, with operations in St. Louis, USA, Pretoria, South Africa, and Sao Paulo, Brazil. With a strong focus on ease of use and event management, Arteco platforms integrate seamlessly with third-party systems such as anti-intrusion, IoT, video analysis, and access control. Arteco products are available through certified partners worldwide.",
  },
  {
    id: 4,
    img: "/partners/techno-partner/icon4.png",
    title: "Axxon",
    btn: "Integration link",
    para: "AxxonSoft is a leading developer of cutting-edge Video Management Software (VMS) and Physical Security Information Management (PSIM) software. Since 2003, our company has been at the forefront of creating disruptive technologies that drive innovation in the Safety & Security industry. Our comprehensive suite of solutions encompasses advanced video management software with intelligent video analytics, and top-notch physical security software. With a focus on video management systems, we provide customizable and scalable video surveillance solutions. Our expertise extends to cloud-based Video Surveillance as a Service (VSaaS) solutions to enhance security camera systems’ capabilities.",
  },
  {
    id: 5,
    img: "/partners/techno-partner/icon5.png",
    title: "Camcloud",
    btn: "Integration link",
    para: "Camcloud is a hardware-free cloud video surveillance solution perfect for businesses such as retail, restaurants, multi-location enterprises and off-grid surveillance applications. The Camcloud solution does not require any specialized on-premise hardware and offers seamless Plug and Play support for Milesight cameras. This support allows Milesight customers to set up their cameras with Camcloud securely and easily, eliminating any complex network configuration.",
  },
  {
    id: 6,
    img: "/partners/techno-partner/v-icon1.png",
    title: "Cathexis",
    btn: "Integration link",
    para: "Cathexis Technologies is a globally recognized developer of electronic and Video Management Software (VMS). For over 20 years, Cathexis has demonstrated how its surveillance solutions can maximize return-on-investment in security management, infrastructure management, and business intelligence, thereby enhancing every aspect of a client's organization. With a global presence, Cathexis offers video surveillance solutions across various vertical markets, including Retail, Manufacturing, Banking, Healthcare, Mining, Education, Transport, Business Parks, City Surveillance, Government, and Remote Monitoring, as well as in the Residential and Commercial Property sectors. Cathexis' VMS is known for its deep integration capabilities with third-party systems such as surveillance cameras, access control, alarm and fire panels, weighbridges, fence monitoring systems, logistics scanning systems, and many others. This enables Cathexis to provide comprehensive systems to its channel partners and deliver solutions that extend beyond standard offerings​​.",
  },
];

function VideoSection() {
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

export default VideoSection;
