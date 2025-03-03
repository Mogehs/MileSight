import { useState } from "react";

export default function AppAccordian() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const data = [
        {
            title: "Office Utilization..............................................",
            content: "To better understand office occupancy based on extensive data collected, the sensor can discover both the most and less frequently used areas to optimize the layout, making the office more occupant-friendly and further improving resource allocation.",
        },
        {
            title: "Meeting Room Occupancy.............................",
            content: "Based on real-time data, the Milesight workplace occupancy sensor allows for effective workplace utilization through usage management by detecting the presence in a meeting room, which is useful for last-minute bookings. It can also detect unused but reserved rooms and release the resource allowing other accesses if needed. Moreover, it could generate a true understanding of meeting room usage through extensive reporting.",
        },
        {
            title: "Cubicle Detection................................",
            content: "The hybrid workplace model provides employees with greater flexibility. By leveraging the performance of PIR and ToF, the solution can update occupancy status immediately for better flow management and higher facility efficiency.",
        },
        {
            title: "Workstation Detection............................",
            content: "With the help of the solution, any desk or seat is under control. The status of being occupied or vacant is clear to administrative staff. No extra efforts are needed for complicated counting and statistics management.",
        },
       
        
    ];

    return (
        <div className="w-full p-2 mx-auto ">
            <h1 className=" md:text-4xl text-2xl font-semibold text-start text-[#7CCA9A] mb-4">Typical Applications</h1>
            {data.map((item, index) => (
                <div key={index} className="mb-2 border rounded-md">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full p-3 flex justify-between border rounded-md items-center text-[#7CCA9A] cursor-pointer transition"
                    >
                        <span className="text-xs md:text-lg font-medium">{item.title}</span>
                        <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                    </button>
                    {openIndex === index && (
                        <div className="p-3 text-xs  text-white bg-[#0070FF1A]">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
}
