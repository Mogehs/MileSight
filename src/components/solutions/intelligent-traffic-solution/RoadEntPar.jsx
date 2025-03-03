import { FaIndent, FaParking, FaRoad } from "react-icons/fa";
import RoadTrafic from "./RoadTrafic";
import EntExit from "./EntExit";
import ParkingMng from "./ParkingMng";
import { useState } from "react";

export default function RoadEntPar() {
    const [active, setActive] = useState('road');

    const data = [
        { icon: <FaRoad />, title: "Road Traffic Management", key: "road" },
        { icon: <FaIndent />, title: "Entrance & Exit Management", key: "entrance" },
        { icon: <FaParking />, title: "Parking Management", key: "parking" },
    ];

    return (
        <div className="mt-4 w-full h-[50vh] sm:h-[50vh] md:h-[45vh] lg:h-[70vh]  relative flex flex-col items-center justify-center">
            {/* Navigation Section */}
            <div className="sm:w-11/12 mx-auto w-full left-[3%] shadow-lg rounded-lg absolute bottom-0">
                <div className="flex w-full justify-around items-center">
                    {data.map((item) => (
                        <div
                            key={item.key}
                            className={`flex gap-2 cursor-pointer bg-white shadow-md items-center sm:justify-center w-1/3 justify-start px-3 sm:flex-row flex-col py-5 group ${
                                active === item.key ? "bg-gray-200" : ""
                            }`}
                            onMouseOver={() => setActive(item.key)}
                        >
                            <div className="p-2 lg:p-4 rounded-full bg-[#00667C] flex items-center justify-center text-white text-xl group-hover:text-black transition-all ease-in delay-75 group-hover:bg-gray-300">
                                {item.icon}
                            </div>
                            <h1 className="text-xs text-center lg:text-xl group-hover:text-[#7CCA9A] transition-all ease-in delay-75 text-wrap">
                                {item.title}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* Component Display Section */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                {active === "road" && <RoadTrafic />}
                {active === "entrance" && <EntExit />}
                {active === "parking" && <ParkingMng />}
            </div>
        </div>
    );
}
