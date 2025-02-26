import React from 'react'
import tecimg from "/aboutimg/tecimg.jpg"

const Technology = () => {
  return (
    <div className="sm:w-[100vw] lg:h-[80vh] lg:w-[80vw] md:mx-auto p-3 h-auto justify-around sm:flex items-center "  >
        <div className="sm:flex flex-col   gap-3 sm:w-[60vw] m-3">
            <h1 className="sm:text-4xl text-2xl  font-semibold">Advanced Technology</h1>
            <p className="text-gray-400">Over half of Milesight employees are R&D engineers. With 15% annual investment of the sales revenue, solid knowledge and years of experience, Milesight has gained strong R&D strength. Therefore, Milesight is able to introduce innovative products and satisfy customers' needs with customized solutions.</p>
        </div>
        <div className="IMgo sm:w-[70vw] md:w-[50vw] ">
            <img className="w-full h-full bg-cover bg-center rounded-md" src={tecimg} alt="tecimg" />
        </div>
    </div>
  )
}

export default Technology;