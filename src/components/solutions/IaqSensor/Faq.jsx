import { useState } from "react";

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const data = [
        {
            title: "Q: What role do IAQ sensors play in predictive maintenance for HVAC systems?",
            content: "A: IAQ sensors monitor air quality, detecting issues such as pollutants, humidity, and temperature fluctuations in real time. By providing continuous data or air quality readings, these sensors help identify potential HVAC system inefficiencies early, allowing for predictive maintenance before breakdowns occur. This proactive approach improves energy efficiency, extends HVAC equipment lifespan, and ensures optimal indoor air quality.",
        },
        {
            title: "Q: How do IAQ sensors influence building certification programs, such as Works with WEL",
            content: "A:  IAQ sensors play a critical role in achieving building certifications like Works with WELL by ensuring continuous monitoring of air quality parameters such as CO2 levels, particulate matter, and humidity. These sensors provide data-driven insights that help maintain healthier, more comfortable indoor environments, aligning with the standards required for certifications that promote occupant well-being and energy-efficient practices.Milesight AM319 9-in-1 IAQ Sensor has officially earned the coveted Works with WELL mark. This can help buildings achieve WELL certification, demonstrating their commitment to creating healthier and more supportive environments for occupants.",
        },
        {
            title: "Q: How can IAQ sensors improve workplace safety?",
            content: "A:  Indoor air quality sensors enhance workplace safety by continuously monitoring air pollutants and ensuring ventilation systems operate effectively. This reduces the risk of health issues related to poor air quality, promoting a healthier work environment.",
        },
        {
            title: "Q: How do IAQ sensors integrate with smart building systems?",
            content: "A:IAQ sensors can easily integrate with smart building systems, allowing for automated adjustments to HVAC systems based on real-time air quality data. This ensures energy efficiency while maintaining a comfortable environment."
        },
        {
            title: "Q: What types of pollutants can IAQ sensors detect?",
            content: "A:  Milesight offers types of sensors to detect various indoor air pollutants, including volatile organic compounds (VOCs), carbon dioxide (CO2), particulate matter (PM), and humidity levels. Understanding these factors helps maintain efficient air monitoring, and know the time to open an air purifier or opening a window.",
        },
        
    ];

    return (
        <div className="w-full md:w-8/12 p-2 mx-auto mt-10">
            <h1 className=" md:text-4xl text-2xl font-semibold text-center mb-4">FAQs on IAQ Sensors </h1>
            {data.map((item, index) => (
                <div key={index} className="mb-2 border border-gray-300 rounded-md">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full p-3 flex justify-between items-center bg-white hover:bg-gray-300 transition"
                    >
                        <span className="text-xs md:text-lg font-medium">{item.title}</span>
                        <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                    </button>
                    {openIndex === index && (
                        <div className="p-3 text-xs bg-white text-gray-700">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
}
