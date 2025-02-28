import child from "/PeopleCounting/child.jpg";
import mouse from "/PeopleCounting/mouse.png";

export default function DiscoverFea() {
    return (
        <div
            className="relative w-full h-[400px] sm:h-[300px] bg-cover bg-center flex items-start justify-start px-6 sm:px-12 py-10 sm:py-16 text-white"
            style={{ backgroundImage: `url(${child})` }}
        >
            <div className="max-w-lg">
                <h1 className="text-xl sm:text-3xl font-semibold leading-tight">
                    Discover the Future of Smart Sensing: <br />
                    Milesight People Sensing Series
                </h1>
                <button className="mt-4 flex items-center gap-2 bg-blue-500 text-white text-sm sm:text-lg rounded-2xl px-5 py-3 transform transition-all ease-in duration-200 hover:scale-105 cursor-pointer">
                    <span>LEARN MORE</span>
                    <span className=" p-[0.5px] bg-white rounded-md"><img src={mouse} alt="Mouse Icon" className="w-5 sm:w-6" /></span>
                </button>
            </div>
        </div>
    );
}
