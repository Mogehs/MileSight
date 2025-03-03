import office from '/PeopleCounting/comp1.png';
import classroom from '/PeopleCounting/comp1.png';
import gym from '/PeopleCounting/comp2.png';
import hospital from '/PeopleCounting/comp3.png';
import church from '/PeopleCounting/comp4.png';
import resturant from '/PeopleCounting/comp5.png';
import market from '/PeopleCounting/comp6.png';
import background from '/PeopleCounting/background.jpg';

const data = [
    {
        img: office,
        title: "VS121 AI Workplace Occupancy Sensor",
        description: "Accuracy: Up to ~95%. Technology: AI, RGB. Functionality: Bi-Directional/Regional People Counting, Multi-Zone Occupancy Detection.",
    },
    {
        img: gym,
        title: "VS125 AI Stereo Vision People Counter",
        description: "Technology: AI, RGB, Binocular Technology. Functionality: Bi-Directional/Regional People Counting, Dwell Time Detection. Application: Retail Stores, Airports, Supermarkets.",
    },
    {
        img: hospital,
        title: "VS133 AI ToF People Counting Sensor",
        description: "Accuracy: Up to 99.8%. Technology: AI, 2nd Gen ToF. Functionality: Bi-Directional Counting, Dwell Time Detection. Application: Retail, Building, Airport, Supermarket.",
    },
    {
        img: church,
        title: "VS135 Ultra ToF People Counter",
        description: "Accuracy: Up to 99.8%. Technology: AI, 2nd Gen ToF. Functionality: Bi-Directional Counting, Dwell Time Detection. Application: Retail, Building, Airport, Supermarket.",
    },
    {
        img: resturant,
        title: "VS351 Mini AI Thermopile People Counter",
        description: "Accuracy: Up to 99.8%. Technology: Radar, Thermopile. Functionality: Bi-Directional People Counting. Application: Meeting Room.",
    },
    {
        img: classroom,
        title: "VS360 IR Breakbeam People Counter",
        description: "Accuracy: Multiple People: ~80%. Technology: IR Breakbeam. Functionality: Bi-Directional People Counting. Application: Open Space People Counting.",
    },
    {
        img: market,
        title: "Network Camera & Software",
        description: "Embedded Deep Learning Algorithm. Line Crossing & Regional People Counting. Professional Analysis & Reports.",
    },
];

export default function Comprehensive({title}) {
    return (
        <div
            className="w-full p-4 mt-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="w-full sm:w-11/12 mx-auto sm:mt-8 mt-4">
                <div className="text-center">
                    {title && <h1 className="md:text-3xl text-xl mb-4 font-semibold text-[#7CCA9A]"> {title}
                    </h1>}
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 border border-transparent hover:border-[#00667C] hover:scale-105"
                        >
                            {/* Image with Hover Effect */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:-translate-y-2"
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#034251] flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                                <h2 className="text-lg font-semibold text-[#7CCA9A]">{item.title}</h2>
                                <p className="text-sm text-[#7CCA9A] mt-2">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
