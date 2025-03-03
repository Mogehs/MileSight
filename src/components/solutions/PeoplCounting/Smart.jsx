
import ai from '/PeopleCounting/ai.png'
import tof from '/PeopleCounting/tof.png'
export default function Smart({title,image,description,btn}) {
    return (
        <div className='flex justify-center flex-col items-start w-full h-[40vh] lg:h-[80vh]' style={{ background: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>


            <div className=' w-full md:w-7/12 mt-[-20px] px-10'>
                <h1 className=' text-2xl md:text-4xl text-[#7CCA9A]'>{title} </h1>
                <p className=' text-[#7CCA9A] mt-2 text-xs md:text-xl'>{description}</p>
                <div className=' flex gap-2 flex-wrap mt-4'>
                    <div className=' flex justify-center items-center  p-2 bg-white rounded-md'>
                        <span>LoRaWAN®</span>
                    </div>
                    <div className=''>
                        <img src={ai} alt="" className='w-full h-10 md:h-12'/>
                    </div>
                    <div className=''>
                        <img src={tof} alt="" className=' w-full h-10 md:h-12' />
                    </div>
                    <div>
                        <button className="text-xs lg:text-lg rounded-2xl bg-[#00667C] text-white hover:bg-[#7CCA9A] hover:text-[#00667C] px-4 py-2 mt-2 scale-[0.9] transform transition-all ease-in delay-100 hover:scale-[1] cursor-pointer">
                            {btn}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
