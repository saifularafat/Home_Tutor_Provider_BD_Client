import PremiumCourse from "../PremiumCourse/PremiumCourse";
import Accordion from "./Accordion";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            This is a Home Page

            {/* Premium Course section*/}
            <PremiumCourse />
            {/* last section */}
            <Testimonial />
            <Accordion />
        </div>
    );
};

export default Home;