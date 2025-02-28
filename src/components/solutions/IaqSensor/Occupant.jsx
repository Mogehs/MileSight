import office from '/IaqAdvanced/office.png';
import classroom from '/IaqAdvanced/clasroom.png';
import gym from '/IaqAdvanced/gym.png';
import hospital from '/IaqAdvanced/hospital.png';
import church from '/IaqAdvanced/church.png';
import resturant from '/IaqAdvanced/restaurant.png';
import market from '/IaqAdvanced/market.png';

export default function Occupant() {
    return (
        <div className="w-full p-4">
            <div className="w-full sm:w-11/12 mx-auto sm:mt-8 mt-4">
                <div className="text-center">
                    <h1 className="md:text-3xl text-xl mb-2 font-semibold">
                        Ensuring Occupant Health with IAQ Sensors
                    </h1>
                </div>

                {/* Grid Layout */}
                <div className="flex flex-col  gap-2  p-4 rounded-lg">
                    {/* First row (3 images) */}
                    <div className=' flex cursor-pointer md:flex-nowrap flex-wrap gap-3 '>
                        <div className="col-span-2">
                            <img
                                src={office}
                                alt="Office"
                                className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div>
                            <img
                                src={market}
                                alt="Market"
                                className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div>
                            <img
                                src={resturant}
                                alt="Restaurant"
                                className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Second row (4 images) */}
                    <div className=' flex cursor-pointer md:flex-nowrap flex-wrap gap-3'>
                        <div className=' '>
                            <img
                                src={hospital}
                                alt="Hospital"
                                className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div>
                            <img
                                src={gym}
                                alt="Gym"
                                className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div>
                            <img
                                src={classroom}
                                alt="Classroom"
                                className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div>
                            <img
                                src={church}
                                alt="Church"
                                className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
