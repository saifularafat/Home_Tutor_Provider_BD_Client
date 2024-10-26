import Banner from "./Banner/Banner";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import TutorCard from "./TutorCard/TutorCard";
import PremiumCourse from "../PremiumCourse/PremiumCourse";
import Testimonial from "./Testimonial/Testimonial";
import FrequentlyAskQuestion from "./FrequentlyAskQuestion/FrequentlyAskQuestion";
import TeamCard from "./TeamCard/TeamCard";
import WhatsAppChat from "../../../Components/WhatsAppChat/WhatsAppChat";

const Home = () => {
    return (
        <div>
            <div
                className="" >
                {/* Banner Card section*/}
                <Banner />
                {/* Why Choose Us Card section*/}
                <div className="md:-mt-28">
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
        </div>
    );
};

export default Home;