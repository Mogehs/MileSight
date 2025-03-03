import React from 'react'
import pic from '/Solution/waste-management/cad.png'
import pic2 from '/Solution/waste-management/cad2.png'
import pic3 from '/Solution/waste-management/cad3.png'

const Benefits = () => {


    const cards = [
        {
            title: "Manage Waste Efficiently",
            text: "Utilizing real-time monitoring of garbage bins overall status and optimizing routes, efficient waste management can be achieved, minimizing unnecessary trips and maximizing resource utilization.",
        },
        {
            title: "Lower Cost by Routes Optimization",
            text: "By implementing route optimization strategies based on actionable data insights, waste collection companies lower costs by reducing fuel consumption, operational expenses, and inefficient routes."
        },
        {
            title: "Improve People's Health & Environment",
            text: "Proactive lid status monitoring prevents overflow and maintains cleanliness, promoting a healthier environment for individuals. Additionally, monitoring trash combustion helps identify hazardous material burning, safeguarding both human health and the environment."
        },
    ];

    const images = [pic, pic2, pic3];
    return (
        <div className='w-full py-10 flex flex-col items-center justify-center'>
            <div className='w-full max-w-screen-xl px-6 items-center justify-center flex flex-col'>
                <div className='text-center mb-8'>
                    <h1 className='text-3xl sm:text-4xl font-thin-semibold py-4 '>
                        Benefits of Choosing Milesight for Waste Management</h1>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center w-full lg:w-[85%] lg:h-[400px]'>
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-gray-100  rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border hover:border-blue-700 transform hover:scale-105 transition duration-300 flex flex-col items-center justify-between p-6 h-full"
                        >
                            <div className="w-full h-[100px] mb-4 flex items-center justify-center">
                                <img
                                    src={images[index]}
                                    alt={card.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col items-center lg:h-[60%] justify-center">
                                <h1 className="text-black font-thin-semibold text-xl mb-2">{card.title}</h1>
                                <p className="text-sm text-center font-thin">{card.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Benefits
