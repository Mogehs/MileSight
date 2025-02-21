import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { PiHairDryerThin } from "react-icons/pi";
import DownloadDemo from "./DownloadDemo";
import MilesSight from "./MilesSight";
import FormSection from "../iot-sensing/FormSection";

export default function MainLayout() {
    const [selectedSection, setSelectedSection] = useState("Video");

    const traffic = [
        { key: "Video", label: "Video Surveillance", icon: <PiHairDryerThin /> },
        { key: "Iot", label: "IoT", icon: <CiGlobe /> }
    ];

    const handleSectionChange = (key) => {
        setSelectedSection(key);
    };

    return (
        <div className="w-full mt-3 sm:mt-0">
            <div className="sm:w-11/12 mx-auto w-full">
                <div className="flex justify-between items-center flex-wrap p-3">
                    <div className="flex">
                        {traffic.map((item) => (
                            <div
                                key={item.key}
                                onClick={() => handleSectionChange(item.key)}
                                className={`flex justify-center items-center min-w-[100px] sm:min-w-[100px] h-[40px] cursor-pointer px-3 transition-all delay-75 ease-in ${selectedSection === item.key ? "text-blue-500 underline py-2" : ""}`}
                            >
                                <span className="sm:text-xl text-xs flex items-center gap-1">
                                    <span className="rotate-[300deg]">{item.icon}</span>{item.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2 mt-2">
                        <p className="text-xs sm:text-xl text-gray-400 cursor-pointer">Home</p>
                        <p className="text-xs sm:text-xl text-gray-400 cursor-pointer">- Product</p>
                        <p className="text-xs sm:text-xl text-gray-400 cursor-pointer">- Software & Platform</p>
                    </div>
                </div>
            </div>



            {selectedSection === "Video" ? (
                <DownloadDemo 
                    name="Secure with Milesight Video Surveillance Software" 
                    desrip="Integrated and Simplified Video Management" 
                />
            ) : (
                <DownloadDemo 
                    name="Milesight Turnkey IoT Solution Made Easy" 
                    desrip="Accelerate your IoT project deployment and simplify management." 
                />
            )}

            <MilesSight />
            <FormSection />
        </div>
    );
}
