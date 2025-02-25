import onetwo from '/IntelligentTrafficSol/onetwo.png'
import anpr from '/IntelligentTrafficSol/anpr.png'
import wave from '/IntelligentTrafficSol/wave.png'
import circle from '/IntelligentTrafficSol/circle.png'
import { useState } from "react";
import FrameParity from './FrameParity';
import GlibalShulter from './GlobalShulter';
import DualOptimize from './DualOptimize';
import ANPR from './AnPr';

export default function OutStandingFea() {
    const [active, setActive] = useState('frame');

    const data = [
        { icon: onetwo, title: "Frame Parity Flashing", key: "frame" },
        { icon:circle, title: "Global Shulter", key: "global" },
        { icon:wave , title: "Dual IR Wavelength Options", key: "dual" },
        { icon:anpr , title: "Long-range ANPR Distance", key: "anpr" },
    ];

    return (
        <div className="mt-4 w-full h-[60vh] sm:h-[40vh] md:h-[45vh] lg:h-[40vh] xl:h-[70vh] relative flex flex-col items-center justify-center">
            {/* Navigation Section */}
            
            <div className="sm:w-9/10 mx-auto w-full l13%] shadow-lg rounded-lg absolute bottom-0">
                <div className="flex w-full justify-around items-center">
                    {data.map((item) => (
                        <div
                            key={item.key}
                            className={`flex gap-2 flex-col  cursor-pointer bg-white shadow-md items-center sm:justify-center w-1/3 justify-start px-3 py-5 group ${
                                active === item.key ? "bg-gray-200" : ""
                            }`}
                            onMouseOver={() => setActive(item.key)}
                        >
                            <div className="p-2 lg:p-2 rounded-full flex items-center justify-center text-white text-xl border border-blue-500 group-hover:text-black transition-all ease-in delay-75 group-hover:bg-gray-300">
                                <img src={item.icon} alt="" className=' h-7 md:h-10'/>
                            </div>
                            <h1 className="text-xs text-blue-500 transition-all ease-in delay-75 text-wrap">
                                {item.title}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* Component Display Section */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                {active === "frame" && <FrameParity />}
                {active === "global" && <GlibalShulter />}
                {active === "dual" && <DualOptimize />}
                {active === "anpr" && <ANPR />}
            </div>
        </div>
    );
}
