import { useState } from "react";
import innovation from "/Innovation/innovation.png";
import bg from "/Innovation/background.png";

export default function Innovation() {
    const [hoverIndex, setHoverIndex] = useState(null);

    const innovative = [
        { title: "FusionXpert Technology", description: "Seamlessly Stitch Dual-Sensor 180° Panoramic Images" },
        { title: "FAI ISP", description: "Enhance image clarity in all conditions, deliver superior night vision performance" },
        { title: "Smart IR II", description: "Great Combination of High Beam and Low Beam Ensures the Best Night Viewing Experience" },
        { title: "Starlight", description: "Bigger Starlight Sensor Achieves Unparalleled 0.001Lux Starlight Visibility" },
    ];

    const innovative2 = [
        { title: "P-Iris", description: "Deliver clear images, adapt to lighting changes, enhance image quality" },
        { title: "AI VCA", description: "AI Technology for Intelligent, Accurate and Efficient Security Monitoring" },
        { title: "Heat Map", description: "Boom Your Business with Milesight Heat Map Function" },
        { title: "Structure Design", description: "Ideal for Indoor Discreet Surveillance with Dome Cameras" },
        { title: "SIP/VoIP", description: "Integrate with VoIP Systems for Flexible Security Solutions" },
    ];

    return (
        <div
            className="w-full h-fit p-6 sm:p-10 mt-4 sm:mt-10 bg-cover bg-center"
            style={{ backgroundImage: `url(${innovation})` }}
        >
            <h1 className="text-2xl sm:text-4xl font-semibold">Innovation</h1>

            {/* First Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {innovative.map((item, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        className="bg-[#ffffff4e] cursor-pointer p-4 rounded-lg transition-all duration-300 hover:bg-cover hover:bg-center hover:bg-no-repeat"
                        style={{ backgroundImage: hoverIndex === index ? `url(${bg})` : "none" }}
                    >
                        <h1
                            className={`text-xl font-semibold mb-2  transition-all duration-300 ${
                                hoverIndex === index
                                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text "
                                    : "text-gray-900"
                            }`}
                        >
                            {item.title}
                            
                        </h1>
                        <hr />
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Second Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
                {innovative2.map((item, index) => (
                    <div
                        key={index + 10}
                        onMouseEnter={() => setHoverIndex(index + 10)}
                        onMouseLeave={() => setHoverIndex(null)}
                        className="bg-[#ffffff4e] cursor-pointer p-4 rounded-lg transition-all duration-300 hover:bg-cover hover:bg-center hover:bg-no-repeat"
                        style={{ backgroundImage: hoverIndex === index + 10 ? `url(${bg})` : "none" }}
                    >
                        <h1
                            className={`text-xl font-semibold mb-2  transition-all duration-300 ${
                                hoverIndex === index + 10
                                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
                                    : "text-gray-900"
                            }`}
                        >
                            {item.title}
                        </h1>
                        <hr />
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>

            <p className=' underline text-center mt-4 cursor-pointer' >View All Products</p>

        </div>
    );
}
