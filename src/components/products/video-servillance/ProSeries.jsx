import camera from '/VideoSurivilence/camera.png'
import pro from '/VideoSurivilence/pro.png'
import cam from '/VideoSurivilence/cam.png'
export default function ProSeries() {
    const camerAray=[
            {
                name:"AI Motorized Dome CameraAI 4X/12X Pro Bullet Plus Camera",img:cam
            },
            {
                name:"AI Motorized Pro Bullet Plus Camera",img:cam
            },
            {
                name:"AI Motorized Pro Bullet Camera",img:cam
            },
            {
                name:"AI Motorized Pro Dome Camera",img:camera
            },
            {
                name:"AI Pro Box Plus Camera",img:pro
            },
            
        ]
  return (
    <div className=" w-full sm:mt-5">

            <div className=" sm:w-[90%]  mx-auto w-full">
                    <span className=" text-gray-500 mb-3 mt-3 ">Professional · Trustful · Reliable</span>

                    <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-3">
                        {
                            camerAray.map((item,index)=>(
                                <div className=' p-2 transition-all ease-in delay-100 hover:shadow hover:shadow-blue-200 cursor-pointer h-[150px] sm:flex sm:flex-col sm:justify-start  flex  flex-row-reverse justify-center sm:border-0 items-center sm:w-full sm:m-0 w-[30rem] mx-auto border' key={index}>
                                    <span className=' text-xs mb-2'>{item.name}</span>
                                    <img src={item.img} alt="" className=' transition-all ease-in-out delay-400  h-[100px] w-[150px] sm:h-[100px] hover:translate-x-20 sm:w-[200px] ' />
                                </div>
                            ))
                        }
                    </div>
            </div>
            <p className=' underline text-center mt-4 cursor-pointer' >View All Products</p>
    </div>
  )
}
