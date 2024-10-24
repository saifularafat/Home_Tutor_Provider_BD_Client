import PremiumCourse from "../PremiumCourse/PremiumCourse";
import Accordion from "./Accordion";
import Testimonial from "./Testimonial";
import TutorCard from "./TutorCard/TutorCard";

const Home = () => {
    return (
        <div>
            This is a Home Page

            {/* Tutor Card section*/}
            <TutorCard />
            {/* Premium Course section*/}
            <PremiumCourse />
            {/* last section */}
            <Testimonial />
            <Accordion />
        </div>
    );
};

export default Home;