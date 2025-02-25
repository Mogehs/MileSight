import cars from '/IntelligentTrafficSol/cars.jpg'

export default function RoadTrafic() {
    const trafic = [
        {
            img: cars, title: "Road Traffic Management", description: 'Intelligent Cameras for Road Traffic Monitoring', li: 'AI-powered LPR & Vehicle Attributes Recognition', li1: 'High Speed Capture with Great Details', li3: 'Real-time Speed Measurement', li4: 'Precise License Plate Recognition', li5: 'Traffic Flow Analysis'
        },
    ]
    return (
        <div className=" w-full sm:w-11/12 mx-auto mt-4 sm:mt-8 bg-white border border-[#615e5e62] p-3 rounded-md" style={{clipPath:'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 29% 98%, 27% 74%, 0% 75%);'}}>
            <div className=' flex ' >
            {
                trafic.map((item) => {
                    return (
                        <div key={item.title} className="flex gap-4" >
                            <div className="w-full px-2 md:w-2/3  flex flex-col gap-2">
                                <h1 className="text-xl md:text-2xl font-semibold">{item.title}</h1>
                                <p className="text-sm">{item.description}</p>
                                <ul className="list-disc list-inside">
                                    <li>{item.li}</li>
                                    <li>{item.li1}</li>
                                    <li>{item.li3}</li>
                                    <li>{item.li4}</li>
                                    <li>{item.li5}</li>
                                </ul>
                            </div>
                            <div className="w-full sm:w-2/2">
                                <img src={item.img} alt="cars" className="w-full h-full object-cover rounded-lg" />
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
