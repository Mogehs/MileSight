import React, { useState, useEffect } from 'react';
import pic from '/Solution/waste-management/bag.jpg';
import pic2 from '/Solution/waste-management/bag2.jpg';

const SuccessStories = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [pic, pic2];

    // Automatically move to the next image every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='h-auto flex flex-col items-center justify-center w-full bg-yellow-100 py-8'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-8'>
                Success Stories
            </h1>
            <div className='w-full sm:w-4/5 lg:w-3/5 h-[60vh] sm:h-[70vh] flex items-center justify-center'>
                <div className='relative w-full h-full rounded-xl overflow-hidden shadow-lg'>
                    <img
                        src={images[currentIndex]}
                        alt="Success Story"
                        className='w-full h-full object-cover transition-transform duration-700 ease-in-out transform'
                    />
                </div>
            </div>
            <div className='mt-4 flex space-x-2'>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full bg-gray-800 ${currentIndex === index ? 'bg-opacity-80' : 'bg-opacity-40'} transition-all duration-300`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SuccessStories;
