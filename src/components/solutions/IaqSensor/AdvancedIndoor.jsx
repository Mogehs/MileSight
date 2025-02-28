
import room from '/IaqAdvanced/room.jpg';
import sensor from '/IaqAdvanced/sensor.png';

export default function AdvancedIndoor() {
    return (
        <div className=" w-full p-3" style={{ background: `url(${room})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className=' w-full sm:w-9/12 mx-auto'>
                <div className=''>
                    <h1 className=' text-xl font-semibold md:text-3xl'>IAQ Sensors: Advanced Indoor <br />
                        Air Quality Monitoring Solution <br />
                        for Healthier Spaces
                    </h1>
                    <h4 className=' mt-3 text-xl'>See the Unseen to Optimize Energy Efficiency <br />
                        and Healthy
                    </h4>
                    <img src={sensor} alt="" className='' />
                </div>
            </div>
        </div>
    )
}
