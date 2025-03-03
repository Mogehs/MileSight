import vechile1 from '/IntelligentTrafficSol/vechile1.jpg'
import vechile2 from '/IntelligentTrafficSol/vechile2.jpg'
import vechile3 from '/IntelligentTrafficSol/vehicle3.jpg'
import vechile4 from '/IntelligentTrafficSol/vechile4.jpg'
import vechile5 from '/IntelligentTrafficSol/vechile5.jpg'
import car1 from '/IntelligentTrafficSol/car1.svg'
import car2 from '/IntelligentTrafficSol/car2.svg'
import car3 from '/IntelligentTrafficSol/car3.svg'
import paint from '/IntelligentTrafficSol/paint.svg'
import audi from '/IntelligentTrafficSol/audi.svg'
import bmw from '/IntelligentTrafficSol/bmw.svg'
import mercedez from '/IntelligentTrafficSol/mercedez.svg'
import cubes from '/IntelligentTrafficSol/cubes.svg'
import direction from '/IntelligentTrafficSol/cubes.svg'
import sniper from '/IntelligentTrafficSol/sniper.svg'
import locate from '/IntelligentTrafficSol/locate.svg'
import location from '/IntelligentTrafficSol/location.svg'

export default function AiPowered() {
    const data = [
        {
            img: vechile1, title: "Vehicle Type", icons: [car1, car2, car3]
        },
        {
            img: vechile2, title: "Vehicle Color", icons: [car1, paint]
        },
        {
            img: vechile3, title: "Vehicle Make", icons: [audi, mercedez, bmw]
        },
        {
            img: vechile4, title: "Plate Color", icons: [paint, cubes]
        },
        {
            img: vechile5, title: "More Highlights", highlights: [
                { icon: sniper, title: "High Confidence Level" },
                { icon: direction, title: "Direction Recognition" },
                { icon: locate, title: "3D Radar Localization" },
                { icon: location, title: "GPS" }
            ]
        }
    ];

    return (
        <div className="w-full h-fit sm:mt-10 mt-4">
            <h1 className="text-center text-xl font-semibold md:text-3xl text-[#00667C]">AI-powered LPR Algorithm</h1>
            <div className='mx-auto sm:w-11/12 p-2 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6'>
                {data.map((item, index) => (
                    <div key={index} className="relative flex flex-col items-center justify-center bg-cover bg-center p-6 rounded-lg text-[#7CCA9A] shadow-lg py-10" style={{ backgroundImage: `url(${item.img})`, minHeight: '300px' }}>
                        <h2 className="absolute underline top-4 text-lg font-bold bg-opacity-50 px-2 py-1 rounded">{item.title}</h2>
                        
                        {item.highlights ? (
                            <div className="mt-8 flex flex-col items-center gap-2">
                                {item.highlights.map((highlight, i) => (
                                    <div key={i} className="flex  items-center gap-2 border border-white bg-opacity-50 px-3 py-2 rounded w-full">
                                        <img src={highlight.icon} alt={highlight.title} className="w-6 h-6 bg-white" />
                                        <span className="text-xs text-nowrap">{highlight.title}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex gap-4 mt-12 bg-[#d6d4d42c] flex-wrap justify-center">
                                {item.icons?.map((icon, i) => (
                                    <img key={i} src={icon} alt="icon" className="w-12 h-12" />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
