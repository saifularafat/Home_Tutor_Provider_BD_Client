import Accordion from "./Accordion";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            This is a Home Page

            {/* last section */}
            <Testimonial />
            <Accordion />
        </div>
    );
};

export default Home;