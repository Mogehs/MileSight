import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import Year2025 from "./NewsNavbar/Year2025";

function Navbar() {
  const Years = [
    "All",
    "2025",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2011/16",
  ];
  const [selectedYear, setSelectedYear] = useState("All");

  const cardData = [
    // Year 2025
    {
      id: "1",
      year: "2025",
      date: "25/02/18",
      title:
        "Milesight and myDevices Expand Strategic Partnership for a Shared Vision of Simplified IoT",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img1.jpg",
    },
    {
      id: "2",
      year: "2025",
      date: "2025/01/23",
      title:
        "Milesight and LORIOT Enhance IoT Solutions with Seamless Gateway Integration and Simplified Deployment",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img2.jpg",
    },
    // Year 2024
    {
      id: "3",
      year: "2024",
      date: "2024/12/18",
      title:
        "Milesight Partner Awards 2024 - Celebrating Outstanding Achievements",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img3.jpg",
    },
    {
      id: "4",
      year: "2024",
      date: "2024/12/17",
      title:
        "Milesight and The Things Industries Strengthen Partnership to Elevate IoT Connectivity",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img4.jpg",
    },
    {
      id: "5",
      year: "2024",
      date: "2024/12/04",
      title:
        "Milesight Expanding Enterprise NVR Family with the Official Launch of 1U Series",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img5.jpg",
    },
    {
      id: "6",
      year: "2024",
      date: "2024/11/26",
      title:
        "Milesight Partners with Actility to Revolutionize IoT Connectivity and Data Management",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img6.jpg",
    },
    {
      id: "7",
      year: "2024",
      date: "2024/11/26",
      title:
        "Milesight Officially Launches its High-End Multi-Directional Camera in the Panoramic Camera Series",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img7.jpg",
    },
    {
      id: "8",
      year: "2024",
      date: "2024/10/25",
      title:
        "Milesight People Sensing - New Possibilities Await with IoT-based Transformation",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img8.jpg",
    },
    {
      id: "9",
      year: "2024",
      date: "2024/09/27",
      title:
        "Milesight's Commitment to Network Security and Compliance with the NIS2 Directive",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img9.jpg",
    },
    {
      id: "10",
      year: "2019",
      date: "2019/09/26",
      title: "Milesight Officially Launches the 4G Solar-powered Camera Series",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img10.jpg",
    },
    {
      id: "11",
      year: "2019",
      date: "2019/09/19",
      title:
        "Milesight and Arteco Forge Path to Smarter Security with Revolutionary ONVIF Metadata Integration",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img11.jpg",
    },
    {
      id: "12",
      year: "2019",
      date: "2019/08/26",
      title:
        "Milesight Shines at the Security Exhibition &amp; Conference 2024 in Australia",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img12.jpg",
    },
    {
      id: "13",
      year: "2018",
      date: "2018/08/26",
      title:
        "Milesight Shines at the Security Exhibition &amp; Conference 2024 in Australia",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img12.jpg",
    },
    {
      id: "14",
      year: "2018",
      date: "2018/07/10",
      title:
        "Milesight's Technological Triumph with Red Dot Design Award for Innovative Products",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img240710.jpg",
    },
    {
      id: "15",
      year: "2018",
      date: "2018/08/16",
      title:
        "Milesight and Morse Micro announce Wi-Fi HaLow Gateway, Sensing Camera, and People Counter  Enhanced IoT Connectivity Range Brings Wi-Fi HaLow to Market ",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img240816.jpg",
    },
    {
      id: "16",
      year: "2018",
      date: "2018/07/10",
      title:
        "Milesight's Technological Triumph with Red Dot Design Award for Innovative Products",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img240710.jpg",
    },
    // Year 2023
    {
      id: "17",
      year: "2023",
      date: "2023/12/21",
      title:
        "Milesight and ThingsBoard, Inc. Announced a Technical Partnership to Provide More Integrated IoT Solutions",
      description:
        "Milesight and ThingsBoard have announced a technical partnership, aiming to deliver highly integrated IoT solutions to customers.",
      img: "/newoimg/img231221.jpg",
    },
    {
      id: "18",
      year: "2023",
      date: "2023/12/19",
      title:
        "Milesight and The Things Industries Further Strengthen Partnership to Supercharge LoRaWAN® Solutions Across the World",
      description:
        "Milesight, together with The Things Industries, further strengthens its partnership to supercharge LoRaWAN® solutions.",
      img: "/newoimg/img231219.jpg",
    },
    {
      id: "19",
      year: "2023",
      date: "2023/12/14",
      title:
        "Milesight and TagoIO Announce Technical Collaboration to Drive the All-In-One IoT Solutions Deployment",
      description:
        "Milesight, together with TagoIO, announced a further technical collaboration to drive the All-In-One IoT solution.",
      img: "/newoimg/img231214.jpg",
    },
    {
      id: "20",
      year: "2023",
      date: "2023/12/08",
      title:
        "Milesight Clinches PMI PMO Project Excellence Award for Outstanding Achievements",
      description:
        "Xiamen, China, December 8, 2023 – Milesight, a global sensing products provider, in a groundbreaking development, has emerged triumphant at the Project Management Institute (PMI) Awards, ",
      img: "/newoimg/img231208.jpg",
    },
    {
      id: "21",
      year: "2023",
      date: "2023/11/30",
      title: "Milesight Takes Smart Building Innovations on the Road",
      description:
        "Milesight, a global sensing products provider, was embarking on a xxx roadshow to showcase its latest innovations in smart buildings.",
      img: "/newoimg/img231130.jpg",
    },
    {
      id: "22",
      year: "2023",
      date: "2023/11/24",
      title:
        "Milesight at Sicurezza 2023 - Sensing the Future with Inspired Products",
      description:
        "Milesight, a global sensing products provider, was thrilled to announce its active participation in Sicurezza 2023.",
      img: "/newoimg/img231124.jpg",
    },
    {
      id: "23",
      year: "2022",
      date: "2022/11/24",
      title:
        "Milesight &amp; Plate Recognizer - Drive Innovative Collaboration for Mutual Business Growth",
      description:
        "Milesight, a global sensing products provider, in a move set to redefine the landscape of digital solutions, proudly announces a strategic partnership with Plate Recognizer. ",
      img: "/newoimg/img23112424.jpg",
    },
    {
      id: "24",
      year: "2022",
      date: "2022/11/23",
      title:
        "Milesight Showcased Green Building Solution at Smart Building Expo 2023",
      description:
        "Milesight, a global sensing products provider, took highly participation and witnessed a groundbreaking showcase of IoT technologies in  Smart Building Expo 2023.",
      img: "/newoimg/img231123.jpg",
    },
    {
      id: "25",
      year: "2022",
      date: "2022/11/22",
      title:
        "Revolutionizing Sustainability - Milesight Green Building Innovations Pave the Way for a Greener Future",
      description:
        "Milesight, a renowned leader in smart building solutions, recently, released a real case of its smart building solution. ",
      img: "/newoimg/img9.jpg",
    },
    {
      id: "26",
      year: "2021",
      date: "2021/11/16",
      title:
        "Milesight Embraces Green Buildings with Eco-Friendly Solutions at SCEWC 2023",
      description:
        "Milesight, a global sensing products provider, successfully unfolded its latest innovations at the Smart City Expo World Congress (SCEWC) last week.",
      img: "/newoimg/img7.jpg",
    },
    {
      id: "27",
      year: "2021",
      date: "2021/11/08",
      title:
        "Milesight Deploys Hundreds of LoRaWAN® Sensors to Support New Zealand’s SMART Economy Initiative",
      description:
        "Project has delivered measurable benefits in water distribution and leak detection, energy efficiency, and indoor air quality.",
      img: "/newoimg/img8.jpg",
    },
    // Year 2024
    {
      id: "28",
      year: "2017",
      date: "2017/12/18",
      title:
        "Milesight Partner Awards 2024 - Celebrating Outstanding Achievements",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img3.jpg",
    },
    {
      id: "29",
      year: "2017",
      date: "2017/12/17",
      title:
        "Milesight and The Things Industries Strengthen Partnership to Elevate IoT Connectivity",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img4.jpg",
    },
    {
      id: "30",
      year: "2020",
      date: "2020/12/04",
      title:
        "Milesight Expanding Enterprise NVR Family with the Official Launch of 1U Series",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img5.jpg",
    },

    {
      id: "41",
      year: "2011",
      date: "2011/10/25",
      title:
        "Milesight People Sensing - New Possibilities Await with IoT-based Transformation",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img8.jpg",
    },
    {
      id: "32",
      year: "2024",
      date: "2024/11/26",
      title:
        "Milesight Officially Launches its High-End Multi-Directional Camera in the Panoramic Camera Series",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img7.jpg",
    },
    {
      id: "33",
      year: "2024",
      date: "2024/10/25",
      title:
        "Milesight People Sensing - New Possibilities Await with IoT-based Transformation",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img8.jpg",
    },
    {
      id: "34",
      year: "2024",
      date: "2024/09/27",
      title:
        "Milesight's Commitment to Network Security and Compliance with the NIS2 Directive",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img9.jpg",
    },
    {
      id: "42",
      year: "2011/16",
      date: "2016/11/26",
      title:
        "Milesight Partners with Actility to Revolutionize IoT Connectivity and Data Management",
      description:
        "Milesight and myDevices Expand Strategic Partnership for A Shared Vision of Simplified IoT",
      img: "/newoimg/img6.jpg",
    },
  ];

  // Filtering logic
  const filteredCards =
    selectedYear === "All"
      ? cardData
      : selectedYear === "2011/16"
      ? cardData.filter((item) => item.year === "2011/16")
      : cardData.filter((item) => item.year === selectedYear);

  return (
    <div>
      <div className="w-full p-3 h-20 bg-red-400 overflow-x-scroll flex justify-center items-center shadow-md">
        <div className="w-[80vw] mx-auto flex justify-between items-center gap-4">
          <div className="sm:pr-2">
            <ul className="flex items-center space-x-3 sm:space-x-5 text-sm font-semibold text-gray-700">
              <li>
                <a href="#">YEAR</a>
              </li>
              <li>|</li>
              {Years.map((year) => (
                <li
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`cursor-pointer p-1 rounded-sm ${
                    selectedYear === year ? "bg-gray-200 font-bold" : ""
                  }`}
                >
                  {year}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center sm:gap-4 gap-2 text-gray-700 font-semibold px-4">
            <div className="flex lg:justify-around gap-1 lg:items-center border px-5 sm:px-10 md:px-0 lg:w-[10vw] rounded-sm border-gray-300">
              <span className="text-sm text-nowrap">
                Total: {filteredCards.length}
              </span>
            </div>
            <div className="cursor-pointer w-[10vw] flex justify-start items-center p-1 rounded-sm border border-gray-300">
              <span>
                <CiSearch />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Year2025 filteredCards={filteredCards} />
    </div>
  );
}

export default Navbar;
