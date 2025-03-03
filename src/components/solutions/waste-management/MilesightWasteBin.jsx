import React from 'react';
import pic from '/Solution/waste-management/cart.png';
import pic1 from '/Solution/waste-management/cart 1.png';
import pic2 from '/Solution/waste-management/cart2.png';

const MilesightWasteBin = () => {
    const cards = [
        {
            title: "Fill Levels",
            text: "These sensors collect real-time data on garbage bin fill levels. Waste collection companies can use this information to schedule pickups based on actual needs rather than fixed routes. It saves time, reduces trips, and cuts carbon emissions.",
        },
        {
            title: "Lid Status",
            text: "By tracking the status of trash bin lids, these sensors help prevent overflow and littering, minimizing the risk of pest infestations. Alerts will notify operators if lids remain open."
        },
        {
            title: "Combustion Monitoring",
            text: "These sensors help identify hazardous materials being burned in waste to ensure compliance with environmental regulations and safeguard public health."
        },
    ];
    const images = [pic, pic1, pic2];

    return (
        <div className='w-full py-10 flex flex-col items-center justify-center'>
            <div className='w-full max-w-screen-xl px-6 items-center justify-center flex flex-col'>
                <div className='text-center mb-8'>
                    <h1 className='text-3xl sm:text-4xl font-semibold py-4'>
                        How Milesight Waste Bin Fill-level Sensors Can Help
                    </h1>
                    <p className='text-base sm:text-sm'>
                        Efficient waste management starts with accurate, real-time data. Milesight offers smart sensors to monitor various aspects of waste management:
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center w-full lg:w-[75%] lg:h-[400px]'>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-gray-100  rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border hover:border-blue-700 transform hover:scale-105 transition duration-300 flex flex-col items-center justify-between p-6 h-full"
                        >
                            <div className="w-full h-[200px] mb-4 flex items-center justify-center">
                                <img
                                    src={images[index]}
                                    alt={card.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col items-center">
                                <h1 className="text-lg font-semibold mb-2">{card.title}</h1>
                                <p className="text-sm text-center">{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MilesightWasteBin;
