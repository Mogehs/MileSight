export default function DiscoverFea({
  title,
  bgimage,
  mouse,
  btn,
  description,
}) {
  return (
    <div
      className="relative w-full h-[200px] sm:h-[300px] bg-cover bg-center flex items-start justify-start px-6 sm:px-12 py-10 sm:py-16 text-white"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="max-w-lg">
        <h1 className="text-xl mb-2 sm:text-3xl font-semibold leading-tight">
          {title}
        </h1>
        <p>{description}</p>

        {btn && (
          <button className="mt-4 flex items-center bg-[#00667C] hover:bg-[#7CCA9A] text-white py-2 px-6 rounded cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1">
              
            <span>{btn}</span>
            {mouse && (
              <span className="p-[0.5px] bg-white rounded-md">
                <img src={mouse} alt="Mouse Icon" className="w-5 sm:w-6" />
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
