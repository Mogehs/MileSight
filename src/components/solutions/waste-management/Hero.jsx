import React from 'react';
import pic from '/Solution/waste-management/hero.jpg';

function Hero() {
    return (
        <div className='w-full min-h-[400px] bg-cover bg-center flex justify-center items-center p-5' style={{ backgroundImage: `url(${pic})` }}>
            <div className=' bg-opacity-80 p-8 md:left-0 sm:left-0  max-w-xl w-full absolute left-20'>
                <h1 className='text-3xl sm:text-4xl font-bold text-gray-800 leading-tight'>Smart Waste Management Sensors & Solutions</h1>
                <p className='text-lg sm:text-2xl text-gray-600 py-4'>Optimize Efficiency, Sustainability, and Cost Savings</p>
                <button className='bg-blue-600 text-white py-2 px-4 rounded-md text-lg hover:bg-blue-700 transition duration-300'>Contact Us</button>
            </div>
        </div>
    );
}

export default Hero;
