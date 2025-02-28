import React from 'react';
import pic from '/Smartbuilding/dark.jpg';
import pic2 from '/Smartbuilding/pak.png';

const ExploringSmartBuilding = () => {
    return (
        <div className='items-center justify-center flex flex-col w-full h-auto sm:h-[500px] md:h-[500px] lg:h-[500px] xl:h-[600px]'>
            <div className='h-[100%] w-full'
                style={{ backgroundImage: `url(${pic})` }}
            >
                <div className="flex flex-col items-center justify-end text-white font-thin mt-8  text-center px-4">
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-4xl font-semibold">
                        Exploring the Smart Building Applications
                    </h1>
                    <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2">
                        Enhancing Efficiency, Safety, and Sustainability
                    </p>
                </div>
                <div className="h-auto w-full max-w-6xl flex flex-col lg:flex-row gap-6 mt-8 px-4">
                    <div className="w-full lg:w-[50%] h-[200px] sm:h-[200px] md:h-[200px] lg:h-full flex items-center justify-center">
                        <img
                            src={pic2}
                            alt="Smart Building Detail"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="w-full lg:w-[40%] text-white flex flex-col justify-center">
                        {[
                            "HVAC System Control",
                            "Switch/Lighting Control",
                            "Indoor Air Quality Improvement",
                            "Security Monitoring",
                            "People Counting & Occupancy",
                            "Smart Trash Bin System",
                            "Leakage Monitoring",
                            "Smart Parking System",
                        ].map((item, index) => (
                            <div key={index} className="h-10  sm:h-12 w-full gap-4 items-center justify-start flex">
                                <span className="h-3 w-3 border border-white rounded-full hover:bg-blue-600 "></span>
                                <h1 className="text-sm sm:text-base md:text-lg">{item}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploringSmartBuilding;