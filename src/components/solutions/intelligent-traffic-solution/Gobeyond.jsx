import video from '/IntelligentTrafficSol/cover.mp4';

export default function Gobeyond() {
    return (
        <div className="w-full h-[50vh] sm:h-[80vh] relative">
            
            <video 
                autoPlay 
                muted 
                loop 
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={video} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center text-center px-4">
                <div className="md:w-7/12 w-full  p-6 rounded-lg">
                    <h1 className="text-2xl md:text-4xl font-bold text-[#7CCA9A]">
                        Milesight Intelligent Traffic Solution
                    </h1>
                    <p className="text-sm sm:text-lg mt-3 text-[#7CCA9A] ">
                        Go Beyond Security, Go for Smarter Traffic.
                    </p>
                </div>
            </div>
        </div>
    );
}
