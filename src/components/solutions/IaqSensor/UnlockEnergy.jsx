import { FaDownload } from 'react-icons/fa'
import iot from '/IaqAdvanced/laptop.jpg'
export default function UnlockEnergy() {
    return (
        <div className='w-full p-4 h-[40vh] md:h-[60vh]' style={{ backgroundImage: `url(${iot})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="w-full sm:w-6/12 px-4 sm:mt-8 mt-4">
                <div className=" ">
                    <h1 className=" text-xl  font-semibold md:text-2xl text-[#00667C]">Unlock a Energy-Saving & Healthier <br />
                        Place Through Ventilation and IAQ
                    </h1>
                    <p className=" text- mt-2   text-[#00667C]">Clean air in indoor environment means healthier, more productive people. See how our IAQ Solution gives you the insights to make the safer and healthier decision.
                    </p>
                    <div className=' flex justify-start items-start flex-wrap gap-2'>
                        <button className="text-xs lg:text-lg rounded-2xl bg-[#00667C] text-white hover:bg-[#7CCA9A] hover:text-[#00667C] px-4 py-2 mt-2 scale-[0.9] transform transition-all ease-in delay-100 hover:scale-[1] cursor-pointer flex gap-2 items-center">
                            <span>IAQ Brochure Download </span>
                            <FaDownload/>
                        </button>
                        <button className="text-xs lg:text-lg rounded-2xl bg-[#00667C] text-white hover:bg-[#7CCA9A] hover:text-[#00667C] px-4 py-2 mt-2 scale-[0.9] transform transition-all ease-in delay-100 hover:scale-[1] cursor-pointer flex gap-2 items-center">
                            <span>Success Stories: IAQ in Schools </span>
                            <FaDownload/>
                        </button>
                        <button className="text-xs lg:text-lg rounded-2xl bg-[#00667C] text-white hover:bg-[#7CCA9A] hover:text-[#00667C] px-4 py-2 mt-2 scale-[0.9] transform transition-all ease-in delay-100 hover:scale-[1] cursor-pointer flex gap-2 items-center">
                            <span>Success Stories: IAQ for Energy Efficiency </span>
                            <FaDownload/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
