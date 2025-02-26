import diverse from '/Diverse/lense.jpg'
import cam1 from '/TrafficIntelecence/solar.png'
import green from '/TrafficIntelecence/green.png'
import airpord from '/TrafficIntelecence/airoad.png'
import aiplus from '/TrafficIntelecence/aiplus.png'
import ptz from '/TrafficIntelecence/ptz.png'
import ptz2 from '/TrafficIntelecence/camera.png'
import ptz3 from '/TrafficIntelecence/ptz3.png'
export default function Diverse() {
    const data = [
        { img: ptz2, title: "Dome" },
        { img: ptz3, title: "Bullet" },
        { img: green, title: "Dual-lens" },
        { img: cam1, title: "Low Consumption" },
        { img: aiplus, title: "Supplement Light" },
        { img: ptz, title: "Radar Module" },
        { img: ptz3, title: "PTZ Bullet" },
        { img: airpord, title: "Speed Dom" },
    ];

    return (
        <div className="mx-auto w-full md:w-11/12 sm:mt-8 mt-4">
            <h1 className="text-center md:text-2xl text-xl font-semibold">
                Diverse Range of Models and Lenses
            </h1>

            {/* Lenses Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 p-3">
                <div
                    className="w-full md:w-2/5 h-[23rem] bg-cover bg-center flex flex-col justify-end items-start text-white  p-4 rounded-lg shadow-md"
                    style={{ backgroundImage: `url(${diverse})` }}
                >
                    <h1 className="text-lg font-bold">Lenses</h1>
                    <p className="text-sm">4X/5X/12X/36X Optical AF Lens <br /> Motorized 2.7~13.5mm/3.6~10mm@F1.4
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border cursor-pointer border-gray-300 rounded-lg overflow-hidden shadow-md transition-all transform hover:-translate-y-2 hover:border-blue-400"
                        >
                            <img src={item.img} alt={item.title} className="w-full h-32 object-cover" />
                            <div className="p-3 text-center">
                                <h2 className="text-sm font-semibold">{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
