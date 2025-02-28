import React from 'react';
import pic from '/Smartbuilding/pain.png';
import pic2 from '/Smartbuilding/pain2.png';
import pic3 from '/Smartbuilding/pain3.png';
import pic4 from '/Smartbuilding/pain4.png';
import pic5 from '/Smartbuilding/pain5.png';

const ConventionalBuildings = () => {
    const cards = [
        {
            title: "Lack of Energy Efficiency",
            text: "Designed without a focus on energy efficiency, which can result in higher energy costs."
        },
        {
            title: "Limited Data Collection and Analysis",
            text: "Limits the collection and analysis of data related to building performance and occupant behavior. Without this data, building managers may be unable to identify opportunities for optimization and improvement."
        },
        {
            title: "Lack of Automation",
            text: "Lacks automation systems that can monitor and control building systems and operations."
        },
        {
            title: "Limited Occupant Comfort",
            text: "Does not provide optimal levels of occupant comfort, such as lighting, temperature, and indoor air quality, affecting productivity, wellbeing and overall comfort."
        },
        {
            title: "Limited Flexibility",
            text: "Not designed to accommodate changes in occupancy or use, making it difficult to adapt to changing needs."
        }
    ];
    const images = [pic, pic2, pic3, pic4, pic5];

    return (
        <div className="w-full flex flex-col items-center justify-center py-8 px-4">
            <div className="w-full max-w-8xl text-center mb-8">
                <h1 className="text-3xl sm:text-3xl md:text-5xl font-semibold py-4">
                    Conventional Buildings are Facing Various Problems
                </h1>
                <p className="text-base sm:text-md">
                    Conventional buildings encounter a range of problems as they rely on traditional construction materials and methods, lacking the incorporation of smart building technologies or advanced features such as automation, artificial intelligence, or <span className="text-blue-600">IoT sensors.</span>
                </p>
            </div>

            <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-xl hover:border hover:border-blue-700 transform hover:scale-105 transition duration-300 flex flex-col"
                    >
                        <div className="flex items-center justify-center mt-3">
                            <div className=" w-[190px]">
                                <img src={images[index]} alt={card.title} className="w-full h-full object-contain" />
                            </div>
                        </div>
                        <div className="p-4">
                            <h1 className="font-semibold text-lg mb-2">{card.title}</h1>
                            <p className="text-sm">{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConventionalBuildings;
