import ExploreAdvanceds from "./ExploreAdvanceds";
import HighlightPeople from "./HighlightPeople";
import TypicalApp from "./TypicalApp";
import WhyPeople from "./WhyPeople";
import Comprehensive from "./Comprehensive";
import SuccessStories from "./SuccesStories";
import DiscoverFea from "./DiscoverFea";
import WantToknow from "./WantToknow";
import FormSubmit from "./FormSubmit";
import Smart from "./Smart";
import people from '/PeopleCounting/people.jpg'
export default function StickyPeople() {
    const data = [
        {
            title: "People Counting", child: "Typical Application", high: "Highlight", advan: "Advanced Feature",
            pr: "Product", qa: "Q&A",
        }
    ];

    // Scroll to Section Function
    const handleScroll = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <>
            <Smart title={'Smart People Counting Solution for Different Applications'} image={`${people}`} description={'The Reliable People Counter Makes Decisions Smart'} btn={'Contact Us'} />
            <div className="flex flex-wrap justify-between items-center gap-2 w-full mx-auto lg:w-11/12">
                <div className="flex flex-wrap gap-2 w-full p-2 md:w-8/12">
                    {data.map((item, index) => (
                        <div key={index} className="flex gap-10 items-center flex-wrap justify-around">
                            <h1 className="text-center cursor-pointer hover:text-blue-600" onClick={() => handleScroll("why-people")}>
                                {item.title}
                            </h1>
                            <p className="text-center cursor-pointer hover:text-blue-600" onClick={() => handleScroll("typical-app")}>
                                {item.child}
                            </p>
                            <p className="text-center cursor-pointer hover:text-blue-600" onClick={() => handleScroll("highlight-people")}>
                                {item.high}
                            </p>
                            <p className="text-center cursor-pointer hover:text-blue-600" onClick={() => handleScroll("explore-advanceds")}>
                                {item.advan}
                            </p>
                            <p className="text-center cursor-pointer hover:text-blue-600" onClick={() => handleScroll("success-stories")}>
                                {item.pr}
                            </p>
                            <p className="text-center cursor-pointer hover:text-blue-600" onClick={() => handleScroll("form-submit")}>
                                {item.qa}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex gap-3 flex-wrap">
                    <span>Home</span>
                    <span>Solution</span>
                    <span>People Counting</span>
                </div>
            </div>

            {/* Sections with IDs */}
            <section id="why-people"><WhyPeople /></section>
            <section id="typical-app"><TypicalApp /></section>
            <section id="highlight-people"><HighlightPeople /></section>
            <section id="explore-advanceds"><ExploreAdvanceds /></section>
            <section id="comprehensive"><Comprehensive title={'Comprehensive People Counters'}/></section>
            <section id="success-stories"><SuccessStories /></section>
            <section id="discover-fea"><DiscoverFea title={'Discover the Future of Smart Sensing: Milesight People Sensing Series'} bgimage={'/PeopleCounting/child.jpg'} mouse={'/PeopleCounting/mouse.png'} btn={'Learn More'}/></section>
            <section id="want-to-know"><WantToknow /></section>
            <section id="form-submit"><FormSubmit /></section>
        </>
    );
}
