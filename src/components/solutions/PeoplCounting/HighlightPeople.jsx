import icon1 from '/PeopleCounting/icon1.png';
import icon2 from '/PeopleCounting/icon2.png';
import icon3 from '/PeopleCounting/icon3.png';
import icon4 from '/PeopleCounting/icon4.png';
import icon5 from '/PeopleCounting/icon5.png';
import icon6 from '/PeopleCounting/icon6.png';

export default function HighlightPeople() {
    const pdfData = [
        {
            img: icon1, title: "Multi-Transmission", descrip: "LoRaWAN®, Ethernet, Cellular, and Wi-FiHalow transmission give easy access to different application requirements."
        },
        {
            img: icon2, title: "Advanced Technologies", descrip: "Applying AI, ToF, PIR, thermopile, and radar technologies to enhance counting accuracy and people counters performance."
        },
        {
            img: icon3, title: "Up to 99.8% Ultra-High Accuracy", descrip: "Increasing accuracy to 99.8% to satisfy application requirements."
        },
        {
            img: icon4, title: "100% Anonymous Detection", descrip: "It is GDPR compliant with no personally identifiable information caught."
        },
        {
            img: icon5, title: "Great Compatibility", descrip: "Our appliances easily connect with third-party platforms using open APIs and MQTT/HTTP(s), making integration with existing systems simple for customers."
        },
        {
            img: icon6, title: "Integrated Central Management", descrip: "A quick analysis of both real-time and historical data."
        },
    ];

    return (
        <div className="w-full sm:w-11/12 mx-auto sm:mt-8 mt-4">
            <h1 className="text-2xl sm:text-4xl text-center text-[#00667C]">Highlights of Milesight People Counting Sensors</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-6 group">
                {pdfData.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-start bg-[#00657cd0] shadow-md rounded-lg p-4 border border-transparent hover:border-blue-400 transition cursor-pointer w-[70%] md:w-full  mx-auto "
                    >
                        <div className="flex items-start">
                            <img src={item.img} alt={item.title} className="w-16 h-16 object-contain mr-4" />
                            <div className="flex-1">
                                <h2 className="text-lg font-semibold text-[#00323d]">{item.title}</h2>
                                <p className="text-sm text-white">{item.descrip}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
