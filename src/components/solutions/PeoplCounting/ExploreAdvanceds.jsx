import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mulitcam from "/PeopleCounting/reg1.jpg";
import traffic from "/PeopleCounting/reg1.jpg";
import off from "/PeopleCounting/reg2.jpg";
import cameraseries from "/PeopleCounting/reg3.jpg";
import one from "/PeopleCounting/reg4.jpg";
import threed from "/PeopleCounting/reg5.jpg";
export default function ExploreAdvanceds() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const slider = [
        { title: "Bi-Directionnal People Counting", img: mulitcam },
        { title: "Reginonal People Counting", img: mulitcam },
        { title: "Dwell Time Detection",  img: off },
        { title: "Multi Staff Stitching ", img: threed },
        { title: "Staff Detection", img: traffic },
        { title: "Adults and Children Differentation", img: cameraseries },
        { title: "Group Counting", img: one },
    ];

    return (
        <div className="relative md:overflow-visible overflow-hidden mt-10 w-full sm:w-[90%] mx-auto">
            <h1 className="text-center font-semibold text-2xl sm:text-4xl text-[#00667C]">Explore the Advanced Features of Milesight People Counting Sensors</h1>
            <Slider {...settings}>
                {slider.map((item, index) => (
                    <div key={index} className="w-full md:w-[30%] bg-white mt-5 shadow-lg rounded-lg p-4">
                        <img src={item.img} alt={item.title} className="w-full h-48 bg-contain object-cover rounded-lg" />
                        <h2 className="text-xs lg:text-lg font-semibold mt-2 text-[#00667C]">{item.title}</h2>
                    </div>
                ))}
            </Slider>
        </div>
    );
}