import React from 'react'
import q1 from "/aboutimg/quality1.png"
import q2 from "/aboutimg/q2.png"
import q3 from "/aboutimg/q3.png"
import q4 from "/aboutimg/q4.png"
import q5 from "/aboutimg/q5.png"
import q6 from "/aboutimg/q6.png"
import q7 from "/aboutimg/q7.png"
import q8 from "/aboutimg/q8.png"
import q9 from "/aboutimg/q9.png"
import q10 from "/aboutimg/q10.png"
import q11 from "/aboutimg/q11.png"

const Quality = () => {
  return (
    <div className="sm:w-[90vw] h-auto mb-2 lg:h-[50vh] rounded-lg mx-auto bg-blue-300 flex flex-col gap-2 justify-center items-center" >
        <h1 className="text-3xl font-semibold">Better Quality</h1>
        <p className="w-[90%]">Aiming at providing more functional, beautiful and affordable video surveillance and IoT products, Milesight endeavors to develop stylish and quality products. Milesight owns rich product portfolios boasting low defect rates. Meanwhile, we are an ISO9001 authorized company and our products are certificated with CE, FCC, LoRaWAN®, RoHS, RCM, etc., meeting the daunting and demanding requirements of global security industry.</p>
        <div className="icons grid  grid-cols-2 mt-2 gap-3 sm:grid-cols-3 lg:grid-cols-11 texts-center   sm:gap-2 sm:p-2" >
            <span className="">
                <img className='hover:bg-white  w-[100%] text-[] transform transition duration-400 cursor-pointer sm:py-5 sm:px-3 rounded-md' src={q1} alt="" />
            </span>
            <span className="">
                <img className='hover:bg-white  transform transition duration-400 cursor-pointer py-5 px-3 rounded-md' src={q2} alt="" />
            </span>
            <span className="">
                <img className='hover:bg-white  transform transition duration-400 cursor-pointer py-5 px-3 rounded-md' src={q3} alt="" />
            </span>
            <span className="">
                <img className='hover:bg-white  transform transition duration-400 cursor-pointer py-5 px-3 rounded-md'  src={q4} alt="" />
            </span>

            <span className="">
                <img className='hover:bg-white  transform transition duration-400 cursor-pointer py-5 px-3 rounded-md'  src={q6} alt="" />
            </span>
            <span className="">
                <img className='hover:bg-white  transform transition duration-400 cursor-pointer py-5 px-3 rounded-md'   src={q7} alt="" />
            </span>
            <span className="">
                <img className='hover:bg-white  transform transition duration-400 cursor-pointer py-5 px-3 rounded-md'  src={q8} alt="" />
            </span>
            <span className="">
                <img className='hover:bg-white  transform transition duration-400 cursor-pointer py-5 px-3 rounded-md'   src={q9} alt="" />
            </span>
            <span className="">
                <img className='hover:bg-white  transform transition duration-400 cursor-pointer py-5 px-3 rounded-md'  src={q10} alt="" />
            </span>
            <span className="">
                <img className='hover:bg-white  transform transition duration-400 cursor-pointer py-5 px-3 rounded-md'  src={q11} alt="" />
            </span>
        </div>
    </div>
  )
}

export default Quality;