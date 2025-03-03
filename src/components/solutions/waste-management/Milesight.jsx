import React from 'react';
import video from '/Solution/waste-management/video.mp4';

const Milesight = () => {
    return (
        <div className='w-full py-10 bg-gray-100 flex items-center justify-center flex-col'>
            <div className='w-full max-w-screen-xl px-6 flex flex-col items-center'>
                <h1 className='text-3xl sm:text-4xl font-semibold text-center py-4'>
                    Milesight Waste Management Solution for Smart City
                </h1>
                <div className='w-full sm:w-3/4 md:w-2/3 py-2'>
                    <p className='text-base sm:text-lg md:text-sm font-light'>
                        Waste management is crucial in today's world, where environmental concerns and resource management are a top priority.
                        In the context of <span className='text-blue-600'>smart city</span> development, Milesight Smart Waste Management Solutions can help
                        monitor the fill level of garbage bins, the status of the trash bin lid, and trash combustion, which plays a significant role
                        in optimizing waste collection and disposal processes.
                    </p>
                </div>
                <div className='w-full mt-6'>
                    <div className='w-full sm:w-xl lg:w-3xl  mx-auto'>
                        <video
                            src={video}
                            autoPlay
                            loop
                            controls
                            className='w-full h-auto rounded-md shadow-lg'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Milesight;
