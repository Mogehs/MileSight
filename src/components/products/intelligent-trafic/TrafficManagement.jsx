import trafficmanage from '/TrafficIntelecence/trafficmanage.jpg'
import cam1 from '/TrafficIntelecence/solar.png'
import cam2 from '/TrafficIntelecence/ai.png'
import airoad from '/TrafficIntelecence/airoad.png'
import aiplus from '/TrafficIntelecence/aiplus.png'
import ptz from '/TrafficIntelecence/ptz.png'
import ptz2 from '/TrafficIntelecence/ptz2.png'
import ptz3 from '/TrafficIntelecence/ptz3.png'
import { FaArrowRight } from 'react-icons/fa6'
export default function TrafficManagement() {
    const data = [
        {
            img: cam1, title: "4G Solar-powered Traffic Sensing Camera", description: 'For More Demanding Traffic Applications', li: 'Powerful AI ISP Embedded', li1: '250km / h High Speed Capture with Global Shutter', li3: 'Dual- lens for Overview and ANPR Image', li4: 'CGI / APIs and TCP / HTTP / MQTT Protocols for Easy Integration', li5: 'Support 1TB SD Card for Edge Storage', icon: <FaArrowRight />
        },
        {
            img: cam2, title: "AI Road Traffic Radar Pro Bullet Plus Camera", description: 'Red Light Violation Detection', li: 'Edge AI Deep Learning Technology', li1: 'Multiple Traffic Light Detection Methods: Based on Image or Signal Inputs', li3: 'Accurately Capture Video Evidence of Vehicles that Run Red Lights', li4: 'CGI/APIs and TCP/HTTP/MQTT Protocols for Easy Integration', li5: 'Dual-lens for Overview and ANPR Image', icon: <FaArrowRight />
        },
        {
            img: airoad, title: "AI Road Traffic Pro Bullet Plus Camera", description: 'For More Demanding Traffic Applications', li: 'Powerful AI ISP Embedded', li1: '250km / h High Speed Capture with Global Shutter', li3: 'Dual- lens for Overview and ANPR Image', li4: 'CGI / APIs and TCP / HTTP / MQTT Protocols for Easy Integration', li5: 'Support 1TB SD Card for Edge Storage', icon: <FaArrowRight />
        },
        {
            img: aiplus, title: "AI Road Traffic Supplement Light Pro Bullet Plus Camera", description: 'Red Light Violation Detection', li: 'Edge AI Deep Learning Technology', li1: 'Multiple Traffic Light Detection Methods: Based on Image or Signal Inputs', li3: 'Accurately Capture Video Evidence of Vehicles that Run Red Lights', li4: 'CGI/APIs and TCP/HTTP/MQTT Protocols for Easy Integration', li5: 'Dual-lens for Overview and ANPR Image', icon: <FaArrowRight />
        },
        {
            img: ptz, title: "AI Road Traffic PTZ Bullet Plus Camera", description: 'For More Demanding Traffic Applications', li: 'Powerful AI ISP Embedded', li1: '250km / h High Speed Capture with Global Shutter', li3: 'Dual- lens for Overview and ANPR Image', li4: 'CGI / APIs and TCP / HTTP / MQTT Protocols for Easy Integration', li5: 'Support 1TB SD Card for Edge Storage', icon: <FaArrowRight />
        },
        {
            img: ptz2, title: "AI Road Traffic PTZ Bullet Camera", description: 'Red Light Violation Detection', li: 'Edge AI Deep Learning Technology', li1: 'Multiple Traffic Light Detection Methods: Based on Image or Signal Inputs', li3: 'Accurately Capture Video Evidence of Vehicles that Run Red Lights', li4: 'CGI/APIs and TCP/HTTP/MQTT Protocols for Easy Integration', li5: 'Dual-lens for Overview and ANPR Image', icon: <FaArrowRight />
        },
        {
            img: ptz3, title: "AI Road Traffic Speed Dome Camera", description: 'For More Demanding Traffic Applications', li: 'Powerful AI ISP Embedded', li1: '250km / h High Speed Capture with Global Shutter', li3: 'Dual- lens for Overview and ANPR Image', li4: 'CGI / APIs and TCP / HTTP / MQTT Protocols for Easy Integration', li5: 'Support 1TB SD Card for Edge Storage', icon: <FaArrowRight />
        },
        {
            img: airoad, title: "AI Road Traffic Parking Detection Pro Bullet Plus Camera", description: 'Red Light Violation Detection', li: 'Edge AI Deep Learning Technology', li1: 'Multiple Traffic Light Detection Methods: Based on Image or Signal Inputs', li3: 'Accurately Capture Video Evidence of Vehicles that Run Red Lights', li4: 'CGI/APIs and TCP/HTTP/MQTT Protocols for Easy Integration', li5: 'Dual-lens for Overview and ANPR Image', icon: <FaArrowRight />
        },
        
    ]
    return (
        <div className=" w-full h-fit mt-4">
            <div className=" w-full flex justify-center flex-col  mx-auto sm:w-11/12 h-20 sm:h-30 rounded-md " style={{ backgroundImage: `url(${trafficmanage})`, backgroundSize: '100% 100%' }}>
                <h1 className='text-white sm:px-4 text-xs sm:text-2xl sm:text-nowrap text-wrap'>Road Traffic Management</h1>
            </div>

            <div className=" w-full mx-auto sm:w-11/12 h-fit sm:mt-6 mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    data.map((item, index) => (
                        <div className=" w-full h-fit flex px-2 flex-col lg:flex-row justify-center items-center pr-2  border border-gray-300 rounded-md cursor-pointer hover:shadow hover:shadow-gray-400" key={index}>
                            <img src={item.img} alt="missing" />

                            <div className="  mt-2 gap-2">
                                <h1 className=" text-xs sm:text-xl font-semibold mt-2">{item.title}</h1>
                                <p className=" text-sm text-gray-500 mt-2">{item.description}</p>
                                <ul className=" mt-2 text-sm text-gray-500 list-disc marker:text-blue-500 ">
                                    <li className='text-xs'>{item.li}</li>
                                    <li className='text-xs'>{item.li1}</li>
                                    <li className='text-xs'>{item.li3}</li>
                                    <li className='text-xs'>{item.li4}</li>
                                    <li className='text-xs'>{item.li5}</li>
                                </ul>
                                <div className=' flex justify-end pr-4  items-center gap-2 mt-4'>
                                    <span className=' text-xs sm:text-xl'>{item.icon}</span>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
