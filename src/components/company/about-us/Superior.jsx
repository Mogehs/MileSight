import React from 'react';

const Superior = () => {
    const Super_Array = [
        {
            id: 1,
            iconimg: "/aboutimg/sup1.png",
            title: "Value-added",
            desc: "Advanced industrial-leading technologies are all embedded in every Milesight sensing product."
        },
        {
            id: 2,
            iconimg: "/aboutimg/sup2.png",
            title: "Win-win",
            desc: "Healthy distribution channel ensures sustainable and win-win partnership."
        },
        {
            id: 3,
            iconimg: "/aboutimg/sup3.png",
            title: "Responsiveness",
            desc: "Quick market response allows us to stay close with our customers."
        }
    ];

    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-blue-600 to-blue-300 flex flex-col items-center p-10">
            <h1 className=" text-3xl text-center sm:text-4xl  font-bold text-white mb-8 tracking-wide uppercase">Superior Strength</h1>
            <div className="grid grid-cols-1 cursor-pointer shadow-sm sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-20">
                {Super_Array.map((item) => (
                    <div key={item.id} className="bg-white p-8   md:py-12 lg:py-15 lg:w-[20vw]  rounded-2xl shadow-xl transform hover:scale-105 transition duration-300 text-center">
                        <img src={item.iconimg} alt={item.title} className="w-10 lg:w-10 mx-auto mb-4" />
                        <h2 className="text-2xl  font-semibold mb-3 text-gray-800">{item.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Superior;
