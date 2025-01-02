import Banner from "./Banner/Banner";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import TutorCard from "./TutorCard/TutorCard";
import PremiumCourse from "../PremiumCourse/PremiumCourse";
import Testimonial from "./Testimonial/Testimonial";
import FrequentlyAskQuestion from "./FrequentlyAskQuestion/FrequentlyAskQuestion";
import TeamCard from "./TeamCard/TeamCard";
import WhatsAppChat from "../../../Components/WhatsAppChat/WhatsAppChat";
import { useEffect, useState } from "react";
import PageTitleShow from "../../../Components/PageTitleShow/PageTitleShow";

const Home = () => {
    const [showMainContent, setShowMainContent] = useState(
        window.localStorage.getItem('showMainContent') === null ? false : true
    )

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShowMainContent(true)
            window.localStorage.setItem('showMainContent', 'true')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    if (showMainContent) {
        const a = () => {
            window.scrollTo(0, 0)
        }
        a()
    }
    return (
        <div>
              <PageTitleShow currentPage="" />
            <div
                className={`md:-mt-24 transition-colors duration-700 ${showMainContent ? '  opacity-100' : 'opacity-0'
                    } primary-bg2 `}
            >
                {/* Banner Card section*/}
                <Banner />
                {/* Why Choose Us Card section*/}
                <div className="">
                    <WhyChooseUs />
                </div>
                {/* Tutor Card section*/}
                <TutorCard />
                {/* Premium Course section*/}
                <PremiumCourse />
                {/* Testimonial section */}
                <Testimonial />
                {/* Accordion section */}
                <div className="mx-4">
                    <FrequentlyAskQuestion />
                </div>
                {/* Team card section */}
                <TeamCard />
            </div>
            <WhatsAppChat />
        </div >
    );
};

export default Home;