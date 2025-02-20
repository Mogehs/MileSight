import sol from '/Solution/sol.png'
import crowd from '/Solution/crowd.png'
import people from '/Solution/people.png'
import statics from '/Solution/static.png'
import security from '/Solution/security.png'
import height from '/Solution/height.png'

export default function Solution() {

    return (
        <div className=" w-full mt-10">
            <h1 className="sm:text-start text-center sm:px-10 text-2xl sm:text-4xl font-semibold ">Solution</h1>

            {/* main div */}
            <div className=" flex flex-col lg:flex-row gap-4 mt-10 sm:w-[90%] md:mx-auto w-full">

                {/* first div */}
                <div className="grid grid-flow-col p-3 grid-rows-1 sm:grid-rows-3 gap-4 w-full md:w-[100%]">
                    <div className="row-span-3 p-2" style={{ backgroundImage: `url(${sol})`, backgroundPosition: 'contain' }}>
                        <h1 className=' font-semibold text-xl sm:text-2xl mb-2'>Intelligent Traffic <br />Solution</h1>
                        <p>Traffic Insights to Improve Safety <br /> and Mobility</p>
                    </div>
                    <div className="col-span-2 p-2" style={{ backgroundImage: `url(${people})`, backgroundSize: '100% 100%' }}>
                        <h1 className=' font-semibold text-xl sm:text-2xl mb-2'>People Counting <br />Solution</h1>
                        <p>Unparalleled Anonymous <br /> Counting</p>
                    </div>
                    <div className="col-span-2 row-span-2 p-2" style={{ backgroundImage: `url(${crowd})`, backgroundSize: '100% 100%' }}>
                        <h1 className=' font-semibold text-xl sm:text-2xl mb-2'>Smart Crowd <br />Management Solution</h1>
                        <p>Accurate and Efficient<br /> One-stop Solution</p>
                    </div>
                </div>

                {/* second div */}
                <div className="grid grid-flow-col grid-rows-3 p-3 gap-4 w-full md:w-[100%]">
                    <div className="row-span-3 p-2" style={{ backgroundImage: `url(${height})`, backgroundPosition: 'contain' }}>
                        <h1 className=' font-semibold text-xl sm:text-2xl mb-2'>Panoramic <br />Surveillance <br />Solution</h1>
                        <p>Full 180°/360° Panoramic <br /> Viewing Experience</p>
                    </div>
                    <div className="col-span-2 p-2" style={{ backgroundImage: `url(${security})`, backgroundSize: '100% 100%' }}>
                        <h1 className=' text-white font-semibold text-xl sm:text-2xl mb-2'>Smart Remote <br />Managment <br />Solution</h1>
                        <p className=' text-white'>Easy and Remote <br /> Management in Batch</p>
                    </div>
                    <div className="col-span-2 row-span-2 p-2" style={{ backgroundImage: `url(${statics})`, backgroundSize: '100% 100%' }}>
                        <h1 className=' font-semibold text-xl sm:text-2xl mb-2'>PTZ Surveillance <br />Solution</h1>
                        <p>Monitor Large Areas with <br /> Flexible PTZ Functions</p>
                    </div>
                </div>
            </div>
            <p className=' underline text-center mt-4 cursor-pointer text-xl' >View All Solutions</p>

        </div>
    )
}
