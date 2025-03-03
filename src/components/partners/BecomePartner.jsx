export default function BecomePartner() {
  const data = [
    {
      img: "/ChannelPartner/shake.png",
      title: "Become a Channel Partner",
      description: "Work with us to drive value and exceed sales targets.",
      btn: "Apply Now",
      route: "/contact",
    },
    {
      img: "/ChannelPartner/tie.png",
      title: "Milesight Partner Ecosystem",
      description: "Grow your business and develop joint offerings with us.",
      btn: "Learn More",
      route: "/resources/academy/product-training",
    },
  ];
  return (
    <div
      className=" w-full py-20 h-fit sm:h-[40vh] flex justify-center items-center"
      style={{
        background: "url(/ChannelPartner/blue.png) no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" flex overflow-hidden gap-3 justify-center ">
        {data.map((item, index) => (
          <div
            className=" w-full md:w-[30rem] flex gap-4 transition-all ease-in delay-75 hover:opacity-[0.7] cursor-pointer bg-white rounded-md p-4 md:flex-row flex-col"
            key={index}
          >
            <div className=" ">
              <img src={item.img} alt="" className=" h-10 mx-auto" />
            </div>
            <div className="flex justify-center gap-2 flex-col items-center">
              <h1 className=" text-xl font-medium">{item.title}</h1>
              <p className=" text-sm">{item.description}</p>
              <button className=" rounded-md cursor-pointer bg-[#00667C] text-white px-4 py-1 mt-2">
                <a href={item.route}>{item.btn}</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
