import PremiumCourse from "../PremiumCourse/PremiumCourse";
import Accordion from "./Accordion/Accordion";
import TeamCard from "./TeamCard/TeamCard";
import Testimonial from "./Testimonial/Testimonial";
import TutorCard from "./TutorCard/TutorCard";

const Home = () => {
    return (
        <div>
            This is a Home Page

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