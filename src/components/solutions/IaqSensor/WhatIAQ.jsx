import { useState, useEffect, useRef } from "react";
import Bouncing from "./Bouncing";
import Certified from "./Certified";
import Indoor from "./Indoor";
import IotCloud from "./IotCloud";
import Occupant from "./Occupant";
import PairUp from "./PairUp";
import PromotingEne from "./PromotingEne";
import Sensing from "./Sensing";
import UnlockEnergy from "./UnlockEnergy";

export default function WhatIAQ() {
    const sections = [
        { id: "what-is-iaq", label: "What is IAQ", ref: useRef(null) },
        { id: "applications", label: "Application & Success Stories", ref: useRef(null) },
        { id: "products", label: "Products", ref: useRef(null) },
        { id: "work-with-well", label: "Work with Well", ref: useRef(null) },
        { id: "download", label: "Download", ref: useRef(null) },
        { id: "home", label: "Home", ref: useRef(null) },
        { id: "solution", label: "Solutions", ref: useRef(null) },
        { id: "iaq", label: "IAQ", ref: useRef(null) }
    ];

    const [activeSection, setActiveSection] = useState(sections[0].id);

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = sections[0].id;
            sections.forEach(({ id, ref }) => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
                        currentSection = id;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full">
            {/* Sticky Navbar */}
            <div className="w-full mx-auto sticky top-0 z-50 bg-white shadow-md">
                <div className="flex justify-between items-center p-2">
                    <div className="flex flex-wrap justify-around gap-4 md:w-[70%]">
                        {sections.slice(0, 5).map(({ id, label }) => (
                            <h1
                                key={id}
                                className={`text-xs  lg:text-lg px-2 py-1 rounded-lg cursor-pointer transition duration-200 ${activeSection === id ? "bg-blue-500 text-white" : "bg-transparent text-gray-700"
                                    }`}
                            >
                                {label}
                            </h1>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2 md:w-[20%]">
                        {sections.slice(5).map(({ id, label }) => (
                            <h1 key={id}
                                className={`text-xs md:text-lg px-2 py-1 rounded-lg cursor-pointer transition ${activeSection === id ? "bg-sky-200 text-gray-900" : "text-gray-700"
                                    }`}>
                                {label}
                            </h1>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sections */}
            <div ref={sections[0].ref} id="what-is-iaq"><Indoor /></div>
            <div ref={sections[1].ref} id="applications"><Bouncing /></div>
            <div ref={sections[2].ref} id="products"><Occupant /></div>
            <div ref={sections[3].ref} id="work-with-well"><PromotingEne /></div>
            <div ref={sections[4].ref} id="work-with-well"><Sensing /></div>
            <div ref={sections[4].ref} id="download"><PairUp /></div>
            <div ref={sections[5].ref} id="home"><Certified /></div>
            <div ref={sections[6].ref} id="solution"><IotCloud /></div>
            <div ref={sections[7].ref} id="iaq"><UnlockEnergy /></div>
        </div>
    );
}
