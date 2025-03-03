import { useState } from "react";
import { FaRegBuilding, FaBus, FaRestroom, FaShoppingCart, FaBriefcase, FaUniversity, FaEllipsisH } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";
import enbg from "/Enriched/enbg.jpg";
import div1 from "/Enriched/div1.jpg";
import div2 from "/Enriched/div2.jpg";
import div3 from "/Enriched/div3.jpg";
import div4 from "/Enriched/div4.jpg";
import div11 from "/Enriched/div11.png";
import div22 from "/Enriched/div22.png";
import div33 from "/Enriched/div33.png";
import div44 from "/Enriched/div44.png";

export default function TypicalApp() {
    // Mapping of main images and overlays
    const imageMapping = {
        div1: { main: div1, overlay: div11 },
        div2: { main: div2, overlay: div22 },
        div3: { main: div3, overlay: div33 },
        div4: { main: div4, overlay: div44 },
    };

    // Default selected image and content
    const [selectedImage, setSelectedImage] = useState(imageMapping.div1);
    const [selectedContent, setSelectedContent] = useState({
        title: "Smart Building",
        description:
            "Using accurate people counting technologies, Milesight people counters give you a direct way to precisely manage buildings.",
        feature: [
            "People Counting", "HVAC System Management", "Energy Saving", "Space Utilization"
        ],
        icon: <FiCheckSquare />,
    });

    // Navigation Data
    const data = [
        { key: "div1", icon: <FaRegBuilding />, title: "Smart Building" },
        { key: "div2", icon: <FaBus />, title: "Transportation" },
        { key: "div3", icon: <FaRestroom />, title: "Restroom" },
        { key: "div4", icon: <FaShoppingCart />, title: "Retail" },
        { key: "div1", icon: <FaBriefcase />, title: "Office" },
        { key: "div2", icon: <FaUniversity />, title: "University" },
        { key: "div3", icon: <FaEllipsisH />, title: "More Application" },
    ];

    // Content Data
    const contentData = {
        div1: {
            title: "Smart Building",
            description:
                "Using accurate people counting technologies, Milesight people counters give you a direct way to precisely manage buildings. The data allows buildings to improve indoor air quality and comfort through further data-driven measures.",
            feature: [
                "People Counting", "HVAC System Management", "Energy Saving", "Space Utilization"
            ],
            icon: <FiCheckSquare />,
        },
        div2: {
            title: "Transportation",
            description:
                "Optimizing public transport efficiency by analyzing passenger flow patterns and making real-time adjustments.",
            feature: [
                "Passenger Flow Analysis", "Real-time Adjustments", "Route Optimization", "Traffic Management"
            ],
            icon: <FiCheckSquare />,
        },
        div3: {
            title: "Restroom",
            description:
                "Enhancing restroom cleanliness and resource allocation by monitoring foot traffic in public restrooms.",
            feature: [
                "Foot Traffic Monitoring", "Resource Allocation", "Cleaning Schedule Optimization", "Restroom Availability Alerts"
            ],
            icon: <FiCheckSquare />,
        },
        div4: {
            title: "Retail",
            description:
                "Boosting retail sales and improving customer experience by tracking foot traffic and dwell time in stores.",
            feature: [
                "Foot Traffic Tracking", "Customer Behavior Insights", "Dwell Time Analysis", "Sales Optimization"
            ],
            icon: <FiCheckSquare />,
        },
    };

    // Handle click event to change the image and content
    const handleSelection = (key) => {
        setSelectedImage(imageMapping[key]);
        setSelectedContent(contentData[key]);
    };

    return (
        <div
            className="w-full bg-cover"
            style={{ backgroundImage: `url(${enbg})` }}
        >
            <div className="w-full sm:w-11/12 mx-auto sm:mt-8 mt-2 p-2">
                <h1 className="text-xl text-[#7CCA9A] text-center md:text-4xl mb-6 font-bold">
                    Typical Applications of People Counters
                </h1>

                {/* Category Navigation */}
                <div className="flex flex-wrap justify-around gap-2 w-full mb-3 mx-auto">
                    {data.map((item) => (
                        <div
                            key={item.key}
                            className=" bg-[#00667C] border flex justify-center border-gray-400 cursor-pointer transition-all hover:shadow-lg rounded-lg w-full md:w-[12%]"
                            onClick={() => handleSelection(item.key)}
                        >
                            <div className="flex gap-2 items-center justify-center rounded-md p-2 w-full">
                                <span className="text-[#7CCA9A] text-xs">{item.icon}</span>
                                <span className="font-semibold text-[#7CCA9A] text-xs">{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Content & Image Section */}
                <div className="w-full lg:w-[75%] bg-[#00667C] p-2 md:flex md:flex-col lg:flex-row gap-6 items-center justify-between mx-auto">
                    {/* Left: Content */}
                    <div className="lg:w-1/2 w-full p-4  rounded-lg shadow-md">
                        <h2 className="text-lg font-bold text-[#7CCA9A]">{selectedContent.title}</h2>
                        <p className="text-[#7CCA9A] mt-2">{selectedContent.description}</p>

                        <div className="flex flex-wrap gap-2 mt-4 text-[#7CCA9A]">
                            {selectedContent.feature.map((item, index) => (
                                <div key={index} className="flex items-center gap-2 text-xs">
                                    <FiCheckSquare className="text-[#7CCA9A]" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Right: Image */}
                    <div className="lg:w-1/2 w-full relative">
                        <img
                            src={selectedImage.main}
                            alt="Main"
                            className="w-full rounded-lg object-cover"
                        />
                        <img
                            src={selectedImage.overlay}
                            alt="Overlay"
                            className="w-full rounded-lg absolute top-0 left-0 z-20 object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
