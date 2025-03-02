import React from 'react'
import world from "/aboutimg/word2.avif"
const World = () => {
  return (
    <div className="w-full h-[90vh] text-center flex flex-col gap-5  justify-center items-center bg-cover bg-center   " style={{backgroundImage:`url(${world})`}} >
        <h1 className="sm:text-4xl text-2xl font-bold sm:font-semibold">Worldwide Coverage</h1>
        <p className="w-[90vw] text-justify text-gray-400 ">Milesight adapts to each and every products and applications demand from global market and has now provided services over 120+ countries and regions, creating a wide spectrum of complete end-to-end solutions including retail, government, industry, education, commercial, agriculture, etc. To take a quick response and bring efficient support to the corresponding market, Milesight forms a global presence with worldwide offices in the USA, Korea, Taiwan China and China Mainland.</p>
    </div>
  )
}

export default World;