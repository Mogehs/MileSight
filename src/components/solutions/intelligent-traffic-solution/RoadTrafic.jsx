import cars from '/IntelligentTrafficSol/cars.jpg';

export default function RoadTrafic() {
    const trafic = [
        {
            img: cars,
            title: "Road Traffic Management",
            description: 'Intelligent Cameras for Road Traffic Monitoring',
            li: 'AI-powered LPR & Vehicle Attributes Recognition',
            li1: 'High Speed Capture with Great Details',
            li3: 'Real-time Speed Measurement',
            li4: 'Precise License Plate Recognition',
            li5: 'Traffic Flow Analysis'
        },
    ];

    return (
        <div className="w-full sm:w-11/12 mx-auto mt-4 sm:mt-8 bg-white border border-gray-300 p-4 sm:p-6 rounded-md">
            <div className="flex flex-col md:flex-row gap-6 items-center">
                {
                    trafic.map((item) => (
                        <div key={item.title} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
                             {/* Right: Text Content */}
                            <div className="w-full flex flex-col gap-3  ">
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
                    ))
                }
            </div>
        </div>
    );
}
