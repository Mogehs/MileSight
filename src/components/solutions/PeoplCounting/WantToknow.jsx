import { useState } from "react";

export default function WantToknow() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const data = [
        {
            title: "Q: Why do people counting sensors/people counters matter to your business?",
            content: "A: People counting sensors play a crucial role in businesses for several reasons. They provide accurate data on customer behavior, locations, and demographics, helping businesses understand their customers better. This information enables the optimization of operations, such as improving staffing schedules, reducing wait times, and delivering enhanced customer service Additionally, a people counting system assists in measuring conversion rates and evaluating marketing strategies, enabling data-driven business decisions to boost revenue generation. By analyzing space usage, businesses can optimize store layouts, identify popular areas, and maximize resource allocation.Furthermore, people counting sensors contribute to maintaining a safe and secure environment by monitoring     occupancy levels and managing crowd control effectively. Using people counting technology in business is important for understanding data, improving operational efficiency, enhancing customer experiences, and      achieving success.   See How Milesight People Counters Meet Your Different Applications",
        },
        {
            title: "Q: What are the differences among people counters for different applications?",
            content: "A: People counters for different applications vary in their technology, mounting options, accuracy, counting areas, connectivity, data analysis capabilities, and scalability. The choice of people counters depends on the specific requirements and objectives of each application. A store focuses on counting accurately for conversion rates, while a venue estimates crowd sizes at entrances and exits.Connectivity options and integration capabilities vary. You can choose from wired or wireless people counters. Some devices can integrate with other sensors, devices, and systems like facility management systems, while others lack scalability. Milesight people counters offer great compatibility, making integration easy and providing extendable performance.Explore Milesight Comprehensive People Counting Sensors.",
        },
        {
            title: "Q: How to guarantee high accuracy?",
            content: "A:  Milesight brings a comprehensive range of people counters to satisfy different application needs. The accuracy varies from different models.Passage People Counter VS350 with PIR stands out with its cost-effective performance. For the best accuracy, consider the AI ToF People Counting Sensor VS133 or the Ultra ToF People Counter VS135. Both options have an industry-leading accuracy of 99.8%. Milesight people counters also use deep learning AI and thermal imaging technology to accurately count people by analyzing detailed images.",
        },
        {
            title: "Q: How do Milesight people counting sensors guarantee anonymity?",
            content: "A:  Privacy is highly concerned, especially in the age of heavy information leakage. Personally identifiable information is easily captured by diversified electronic devices and the internet. Milesight people counters use technologies like ToF, PIR, and thermopile to prevent information leakage without collecting personal data.They transmit data via LoRaWAN® protocol which baud rates range from 0.3 kbps to 50 kbps. The feature makes it fit for anonymous detection. It only sends small amounts of data (like sensor readings) over long distances, ensuring anonymous detection. The people counting sensors are in line with GDPR compliance."
        },
        
    ];

    return (
        <div className="w-full md:w-8/12 p-2 mx-auto mt-10">
            <h1 className=" md:text-4xl text-2xl font-semibold text-center mb-4 text-[#00667C]">You May Want to Know
            </h1>
            {data.map((item, index) => (
                <div key={index} className="mb-2 border border-gray-300 rounded-md">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full p-3 flex justify-between items-center cursor-pointer bg-[#00657c5a] hover:bg-gray-300 transition"
                    >
                        <span className="text-xs md:text-lg  font-semibold">{item.title}</span>
                        <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
                    </button>
                    {openIndex === index && (
                        <div className="p-3 text-xs bg-[#00667C]  text-[#7CCA9A]">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
}
