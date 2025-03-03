import React from 'react';

const Navsight = () => {
    return (
        <div className="w-full h-auto lg:h-[70px] flex items-center justify-center shadow-2xl px-6 md:px-10 py-5">
            <div className="flex items-center justify-end w-full max-w-screen-xl">
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                    <h1 className="cursor-pointer hover:text-blue-600 transition duration-300">Home</h1>
                    <h1 className="cursor-pointer hover:text-blue-600 transition duration-300">Solution</h1>
                    <h1 className="cursor-pointer hover:text-blue-600 transition duration-300">Smart Waste Management Solution</h1>
                </div>
            </div>
        </div>
    );
};

export default Navsight;
