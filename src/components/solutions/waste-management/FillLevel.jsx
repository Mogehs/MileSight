import React from 'react';
import pic from '/Solution/waste-management/building.jpg';
import pic2 from '/Solution/waste-management/box.png';
import pic3 from '/Solution/waste-management/box.png';
import pic4 from '/Solution/waste-management/box.png';

const FillLevel = () => {
    return (
        <div className='h-auto w-full'>
            <h1 className='text-2xl sm:text-4xl font-semibold text-center text-black mb-6 z-10 w-full'>
                Fill Level Monitoring Across All Trash Bin Types
            </h1>
            <div
                className='h-screen w-full bg-yellow-400 flex flex-col items-center justify-center relative'
                style={{ backgroundImage: `url(${pic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className='w-[100%] sm:w-[100%] md:w-[80%] lg:w-[100%] h-auto flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-8 '>
                    <div className='w-full sm:w-[48%]  md:w-[45%] lg:w-[25%] bg-green-100 rounded-xl shadow-lg p-6 mb-6 sm:mb-0'>
                        <h2 className='text-lg sm:text-xl font-semibold mb-2'>Small and Mini Trash Bin</h2>
                        <p className='text-sm sm:text-base mb-4'>
                            Time-of-flight (ToF) allows for detecting and measuring the distance to objects with almost no blind spot and stable performance, which is specialized for small & mini trash bins to monitor the fill level with high accuracy and alert users to empty trash in time.
                        </p>
                        <img src={pic2} alt="Small and Mini Trash Bin" className='w-[100%] h-[120px] object-contain' />
                    </div>
                    <div className='w-full sm:w-[48%] md:w-[45%] lg:w-[25%] bg-green-100 rounded-xl shadow-lg p-6'>
                        <h2 className='text-lg sm:text-xl font-semibold mb-2'>Medium or Large Trash Container</h2>
                        <p className='text-sm sm:text-base mb-4'>
                            Ultrasonic distance detection makes it possible to precise distance measurement and small blind spot, which is ideal for smart waste management in medium and large trash containers. Waste collection companies can optimize their collection schedule based on actual needs.
                        </p>
                        <div className='flex justify-between'>
                            <img src={pic3} alt="Medium Trash Bin" className='w-[48%] h-[120px] object-contain' />
                            <img src={pic4} alt="Large Trash Bin" className='w-[48%] h-[120px] object-contain' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FillLevel;
