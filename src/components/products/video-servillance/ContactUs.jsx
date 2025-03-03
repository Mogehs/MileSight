import contact from "/Supprt/contactus.png";

export default function ContactUs() {
  return (
    <div className=" w-full sm:mt-8 mt-4">
      <div
        className=" text-white sm:w-11/12 mx-auto w-full p-10 rounded-lg flex justify-center items-center flex-col gap-4 bg-cover"
        style={{ background: `url(${contact})` }}
      >
        <h1 className=" text-xl font-semibold sm:text-2xl">
          Contact us today to discuss your needs!
        </h1>

        <div className="flex justify-center flex-col items-center w-full lg:w-[20%] rounded-2xl py-2 cursor-pointer mt-2 border border-gray-400 transition-all duration-300 bg-[#7CCA9A] hover:bg-[#00667C]">
          <a href="/resources/academy/product-training">
            <span>View All Stories</span>
          </a>
        </div>
      </div>
    </div>
  );
}
