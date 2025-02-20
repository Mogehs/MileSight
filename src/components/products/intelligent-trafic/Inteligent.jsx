import intelgent from '/TrafficIntelecence/intelligent.jpg';
import trf1 from '/TrafficIntelecence/trf1.png';
import trf2 from '/TrafficIntelecence/trf2.png';
import trf3 from '/TrafficIntelecence/trf3.png';
import trf4 from '/TrafficIntelecence/trf4.png';

export default function Inteligent() {
    const data=[
        {
            title:"Intelligent Traffic",description:"Milesight pioneers the fusion of video surveillance, AI, ANPR, 3D Radar, Global Shutter, Dual-lens, IoT and more to redefine traffic management and elevate road safety. Discover how Milesight shapes a smarter and safer traffic and be part of the revolution.",trf1,trf2,trf3,trf4
        }
    ]
  return (
    <div className=' w-full h-[40vh] sm:h-[80vh] flex justify-center flex-col' style={{background:`url(${intelgent})`,backgroundSize:'cover'}}>
        <div className=' flex justify-start items-center flex-col w-[40%] h-[50vh] '>
                {
                    data.map((item,index)=>(
                        <div className=' text-white px-10' key={index}>
                            <h1 className=' text-3xl font-semibold mb-2'>{item.title}</h1>
                            <p className=' mb-2 sm:mb-4'>{item.description}</p>
                            <div className=' flex gap-4'>
                                <img src={item.trf1} alt="missing" />
                                <img src={item.trf2} alt="missing" />
                                <img src={item.trf3} alt="missing" />
                                <img src={item.trf4} alt="missing" />
                            </div>
                            <div className="flex justify-center flex-col items-center w-full mt-3 lg:w-[30%] rounded-2xl py-2 cursor-pointer border border-gray-400 transition-all duration-300 hover:bg-gradient-to-r from-blue-300 to-blue-500">
                                <span>Explore more</span>
                            </div>
                        </div>
                    ))
                }
        </div>
    </div>
  )
}
