import React from 'react'
import img1 from "/energyefficiency/img1.jpg"
import img2 from "/energyefficiency/img2.jpg"

const Section2 = () => {
    return (
        <div className='bg-sky-500 w-full flex flex-col p-5 sm:p-8 md:p-10 lg:p-12 gap-8 md:gap-10 items-center text-white'>
            <div className='grid justify-center text-2xl sm:text-3xl md:text-4xl font-semibold'>
                <h1>Are You Prepared Well, Honestly?</h1>
            </div>
            <div className='w-full sm:w-[90%]'>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-6'>
                    <div className='w-full sm:w-[60%]'>
                        <h1 className='text-base sm:text-lg font-semibold mb-4'>Climate change is already affecting the entire world</h1>
                        <h1 className='text-sm sm:text-base'>
                            Projections made by the Intergovernmental Panel on Climate Change in August 2021 indicate that the average global temperature may rise more than 1.5 degrees by as early as 2030. The result would be weather events more extreme than we have ever experienced before, such as drought, heat waves, heavy rains, floods, landslides and many more.
                        </h1>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <img src={img1} alt="Climate Change" className='rounded-xl w-full' />
                    </div>
                </div>
            </div>

            <div className='w-full sm:w-[90%]'>
                <div className='flex flex-col sm:flex-row justify-center items-center gap-6'>
                    <div className='w-full sm:w-[60%]'>
                        <h1 className='text-base sm:text-lg font-semibold mb-4'>
                            As the world falls into uncertainty, a threatening energy crisis is having a profound impact on all aspects of life
                        </h1>
                        <h1 className='text-sm sm:text-base'>
                            Projections made by the Intergovernmental Panel on Climate Change in August 2021 indicate that the average global temperature may rise more than 1.5 degrees by as early as 2030. The result would be weather events more extreme than we have ever experienced before, such as drought, heat waves, heavy rains, floods, landslides and many more.
                        </h1>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <img src={img2} alt="Energy Crisis" className='rounded-xl w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
