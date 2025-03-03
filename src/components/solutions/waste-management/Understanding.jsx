import React from 'react';
import hero from '/Solution/waste-management/hero2.jpg';

const Understanding = () => {
    return (
        <div className='w-full py-10 flex items-center justify-center flex-col'>
            <div className='w-full max-w-screen-xl px-6 flex flex-col items-center'>
                <h1 className='text-3xl sm:text-4xl font-semibold text-center py-5'>
                    Understanding the Basics of Smart Waste Bin Sensors
                </h1>
                <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex items-center justify-center'>
                    <p className='text-base sm:text-lg md:text-xl text-center font-light'>
                        Waste management has been increasingly crucial today as environmental concerns and resource management become a top priority.
                        Milesight smart waste management solution helps measure fill levels of garbage bins, the status of the trash bin lid, and trash combustion.
                        It plays a significant role in optimizing collection routes and disposal processes.
                    </p>
                </div>
                <div className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-5'>
                    <img
                        src={hero}
                        className='w-full h-auto border-2 border-gray-300 rounded-md shadow-lg'
                        alt='Smart Waste Bin'
                    />
                </div>
            </div>
        </div>
    );
};

export default Understanding;
