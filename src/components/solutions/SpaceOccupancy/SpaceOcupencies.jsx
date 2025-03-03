import layout from '/SpaceOuccpancy/layout.png'

export default function SpaceOcupencies() {
  return (
    <div className=' w-full p-2 mt-4 sm:mt-6'>
        <div className=' mx-auto md:w-9/12 text-center'>
            <h1 className=' text-xl md:text-4xl mb-2 font-semibold text-[#00667C]'>Space Occupancy</h1>
            <p className=' text-xs md:text-lg text-[#00667C]'>In general, space occupancy refers to the measure of individuals in a space. It is also a measure of how many people use a space. Space usage has always been a priority for facility managers.Having a comprehensive understanding of space occupancy allows for improved strategic decision making, identification of opportunities for cost reduction, simplified space planning and validation of employee needs.</p>

            <div className=' h-[30vh] md:h-[70vh]'>
              <img src={layout} alt="" className=' h-full w-full' />
            </div>
        </div>
    </div>
  )
}
