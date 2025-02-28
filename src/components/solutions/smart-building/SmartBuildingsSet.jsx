import React, { useState } from 'react';
import photo from '/Smartbuilding/growth.jpg';

const SmartBuildingsSet = () => {
    const [showFullText, setShowFullText] = useState(false);
    const toggleText = () => {
        setShowFullText(!showFullText);
    };
    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden group">
            <img
                src={photo}
                alt="Smart Buildings"
                className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-start p-4 sm:p-8 md:p-12 lg:p-16">
                <div className="max-w-full md:max-w-[70%] lg:max-w-[50%]">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                        Smart Buildings Set the Stage for an Exciting Future
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mt-2 sm:mt-4">
                        The global smart building market was valued at USD 80.62 billion in 2022 and is projected to grow to USD 328.62 billion by 2029, exhibiting a CAGR of 12.3% during the forecast period.
                        {showFullText && (
                            <span>
                                Smart buildings enhance operational efficiency, share information internally, and provide better quality of service and citizen welfare.
                            </span>
                        )}
                    </p>
                </div>
            </div>
            <div className="absolute bottom-4  sm:bottom-9 sm:left-[35%] text-white text-xs sm:text-sm md:text-base">
                <span>---- Fortune Business Insights</span>
            </div>
        </div>
    );
};

export default SmartBuildingsSet;