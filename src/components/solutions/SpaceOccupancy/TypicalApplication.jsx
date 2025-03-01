import typbg from '/SpaceOuccpancy/typbg.jpg'
import tyapp from '/SpaceOuccpancy/tyapp.png'
import AppAccordian from './AppAcordians'

export default function TypicalApplication() {
  return (
    <div className=" w-full p-3 " style={{backgroundImage: `url(${typbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className='flex flex-wrap justify-around items-center gap-2 w-full mx-auto lg:w-11/12'>

                {/* content */}
                <div className=' w-full md:w-[50%]'>
                    <AppAccordian/>
                </div>

                {/* image */}
                <div className=' md:w-[45%] w-full'>
                    <img src={tyapp} alt="" className=' bg-transparent' />
                </div>
        </div>
    </div>
  )
}
