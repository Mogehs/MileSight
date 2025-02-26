import cars from '/IntelligentTrafficSol/parking.jpg';

export default function ParkingMng() {
    const trafic = [
        {
            img: cars,
            title: "Parking Management",
            description: "Lead the Intelligent Way of Indoor Outdoor Parking Management",
            li: "Indoor Parking Guidance with Customizable Indicator",
            li1: "Occupancy Detection Up to 100 Parking Spaces",
            li3: "AI LPR Parking Detection Up to 4 Parking Spaces",
            li4: "Flexible Parking Detection Configuration",
            li5: "Seamless Integration with Third-party VMS",
        },
    ];

    return (
        <div className="w-full sm:w-11/12 mx-auto mt-4 sm:mt-8 bg-white border border-gray-300 p-4 sm:p-6 rounded-md"
            >
            <div className="flex flex-col md:flex-row gap-6 items-center">
                {trafic.map((item) => (
                    <div key={item.title} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
                        {/* Right: Text Content */}
                        <div className="w-full flex flex-col gap-3">
                            <h1 className="text-xl md:text-2xl font-semibold">{item.title}</h1>
                            <p className="text-sm md:text-base">{item.description}</p>
                            <ul className="list-disc list-inside text-sm md:text-base space-y-1">
                                <li>{item.li}</li>
                                <li>{item.li1}</li>
                                <li>{item.li3}</li>
                                <li>{item.li4}</li>
                                <li>{item.li5}</li>
                            </ul>
                        </div>
                        {/* Left: Image */}
                        <div className="w-full">
                            <img src={item.img} alt="cars" className="w-full h-auto max-h-80 object-cover rounded-lg" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
