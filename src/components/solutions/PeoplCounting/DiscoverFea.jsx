export default function DiscoverFea({ title, bgimage, mouse, btn, description }) {
    return (
        <div
            className="relative w-full h-[400px] sm:h-[300px] bg-cover bg-center flex items-start justify-start px-6 sm:px-12 py-10 sm:py-16 "
            style={{ backgroundImage: `url(${bgimage})` }}
        >
            <div className="max-w-lg">
                <h1 className="text-xl mb-2 sm:text-3xl font-semibold leading-tight text-[#7CCA9A]">
                    {title}
                </h1>
                <p className=" text-[#7CCA9A]">{description}</p>

                
                {btn && mouse &&(
                    <button className="mt-4 flex items-center gap-2 bg-[#00667C] text-white hover:bg-[#7CCA9A] hover:text-[#00667C] text-sm sm:text-lg rounded-2xl px-5 py-3 transform transition-all ease-in duration-200 hover:scale-105 cursor-pointer">
                        <span>{btn}</span>
                        <span className="p-[0.5px] bg-white rounded-md">
                            <img src={mouse} alt="Mouse Icon" className="w-5 sm:w-6" />
                        </span>
                    </button>
                )}
            </div>
        </div>
    );
}
