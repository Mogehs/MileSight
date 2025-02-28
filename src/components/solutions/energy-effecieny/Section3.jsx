import React from 'react'
import img3 from "/energyefficiency/img3.jpg"

const Section3 = () => {
    return (
        <div className='relative w-full'>
            <img src={img3} alt="Climate Change Impact" className='w-[100%] h-[300px] sm:h-auto object-cover' />
            <div className='absolute inset-0 flex justify-center items-center top-3 lg:top-6 md:top-[16px] text-center'>
                <h1 className='text-[6px] sm:text-sm md:text-[10px] lg:text-[16px] font-semibold text-white'>
                    Maybe so far, so good. But what if this is just the tip of the iceberg?
                </h1>
            </div>
        </div>
    )
}

export default Section3
