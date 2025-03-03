import { useState } from "react";
import empower from '/ChannelPartner/empower.png';
import event from '/ChannelPartner/event.jpg';
import award from '/ChannelPartner/award.jpg';
export default function WhyMiles() {
    const [openIndex, setOpenIndex] = useState(0);
    const img=[empower,event,award]
    const toggleAccordion = (index) => {
        setOpenIndex(index);
    };

    const data = [
        {
            title: "Cutting-Edge Sensing Products Provider  Serving Millions of People Worldwide",
        },
        {
            title: "Active Participant in Influential Exhibitions"
        },
        {
            title: "Prominent Presence in Industries"
        },
    ];
    return (
        <div className=" w-full mt-2 md:mt-10 bg-[#f2f6fa] h-[55vh] lg:h-[52vh] p-10 ">
            <div className=" flex justify-around flex-wrap md:w-11/12 mx-auto gap-2">
                <div className=" w-full justify-start md:w-[50%]">
                    <h1 className=" md:text-4xl text-2xl font-semibold text-start  mb-4">Why Milesight ?
                    </h1>
                    {data.map((item, index) => (
                        <div key={index} className="mb-2  border-b-1 border-gray-400 rounded-md">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full p-2 flex justify-between items-center  transition"
                            >
                                <span className="text-xs md:text-lg font-medium text-start">{item.title}</span>
                                <span className="text-xl px-2">{openIndex === index ? "−" : "+"}</span>
                            </button>

                        </div>
                    ))}
                </div>

                <div className=" md:w-[40%] flex justify-center items-center">
                    <img src={img[openIndex]} alt="whyMilesight" className=" w-full md:w-[100%] rounded-md h-auto" />
                </div>
            </div>
        </div>
    )
}
