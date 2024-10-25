import PremiumCourse from "../PremiumCourse/PremiumCourse";
import Accordion from "./Accordion/Accordion";
import Banner from "./Banner/Banner";
import TeamCard from "./TeamCard/TeamCard";
import Testimonial from "./Testimonial/Testimonial";
import TutorCard from "./TutorCard/TutorCard";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>

            {/* Banner Card section*/}
            <Banner />
            {/* Why Choose Us Card section*/}
            <WhyChooseUs />
            {/* Tutor Card section*/}
            <TutorCard />
            {/* Premium Course section*/}
            <PremiumCourse />
            {/* Testimonial section */}
            <Testimonial />
            {/* Accordion section */}
            <Accordion />
            {/* Team card section */}
            <TeamCard />
        </div>
    );
};

export default Home;