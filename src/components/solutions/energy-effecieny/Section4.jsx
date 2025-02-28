import React from 'react';
import mainimg from "/energyefficiency/main1.jpg"; // Ensure this path is correct
import icon from "/energyefficiency/ico1.png"; // Ensure this path is correct

const Section4 = () => {
    return (
        <div className="flex flex-col items-center">

            <div className="absolute flex flex-col pt-3 justify-center items-center z-10">
                <h1 className="text-3xl sm:text-4xl md:text-4xl text-white font-semibold">
                    Ecosystem for Energy Saving Operation
                </h1>
                <h2 className="text-1xl sm:text-2xl md:text-2xl text-sky-600 font-semibold">
                    Reducing Costs and CO2 Emissions
                </h2>
            </div>


            <div className="relative w-full">

                <img src={mainimg} alt="Energy Efficiency" className="w-full h-auto" />
                <div className='lg:block hidden'>
                    <div className='absolute top-40 flex w-full   justify-evenly '>
                        <div className="px-3  text-white w-[330px]">
                            <h1 className="text-md sm:text-xl md:text-xl font-semibold">Going Green in Transport</h1>
                            <h2 className="text-sm sm:text-sm md:text-md">EV Charging Station Management Solution</h2>
                            <h3 className="text-sm sm:text-sm md:text-md text-blue-600">Make electric vehicle (EV) charging management easy and practical.</h3>
                            <h1 className='bg-sky-500 w-[220px] mt-2 px-2 rounded-sm text-sm'>Hit the Road with Confidence</h1>
                        </div>


                        <div className="relative right-3   text-white w-[330px] flex">
                            <div>
                                <h1 className="text-md sm:text-xl md:text-xl font-semibold">Transforming into Modern
                                    Utilities</h1>
                                <h2 className="text-sm sm:text-sm md:text-md">Smart Metering Solution</h2>
                                <h3 className="text-sm sm:text-sm md:text-md text-blue-600">Make data-driven decision based on water/gas/electricity usage monitoring</h3>

                            </div>
                            <div className='w-[30%] gap-3 flex flex-col'>
                                <div>
                                    <img src={icon} alt="" className='w-16' />
                                </div>
                                <div className='bg-sky-500 w-22 rounded-sm'>
                                    <li className=' px-1  text-[10px]'>Pulse Counter</li>
                                    <li className='px-1   text-[10px]'>IoT Controller</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='absolute top-[530px] flex justify-evenly w-full'>

                    <div className='text-white'>
                        <h1 className='text-xl font-semibold'>Driving Cost-Efficient Workplace</h1>
                        <h1 className='text-sm'>CoWork Smart Office Solution</h1>
                    </div>
                    <div className='text-white'>
                        <h1 className='text-xl font-semibold'>Driving Cost-Efficient Workplace</h1>
                        <h1 className='text-sm'>CoWork Smart Office Solution</h1>
                    </div>

                    {/* <div className="px-3  text-white w-[330px] border-2">
                        <h1 className="text-md sm:text-xl md:text-xl font-semibold">Going Green in Transport</h1>
                        <h2 className="text-sm sm:text-sm md:text-md">EV Charging Station Management Solution</h2>
                        <h3 className="text-sm sm:text-sm md:text-md text-blue-600">Make electric vehicle (EV) charging management easy and practical.</h3>
                        <h1 className='bg-sky-500 w-[220px] mt-2 px-2 rounded-sm text-sm'>Hit the Road with Confidence</h1>
                    </div> */}

                </div>
            </div>
        </div>



    );
};

export default Section4;
