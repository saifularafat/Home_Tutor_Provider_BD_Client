
import Lottie from "lottie-react";
import aboutLottie from "./../../assets/Animation/about.json"
import WhyChooseUs from "../Home/Home/WhyChooseUs/WhyChooseUs";
const About = () => {
    return (
        <>
            <div className=" footerBg ">
                <div className="grid grid-cols-4 gap-5 w-10/12 mx-auto py-10 ">
                    <div className="col-span-2 w-full p-5 hover:shadow-lg rounded-md transition-all duration-200">
                        <Lottie
                            animationData={aboutLottie}
                            loop={true} className="" />
                    </div>
                    <div className="col-span-2 hover:shadow-lg hover:rounded-md transition-all duration-200 p-5">
                        <h3 className="text-3xl font-semibold text-slate-800 pb-4">About Us</h3>
                        <p className="text-justify text-[18px] text-slate-700">
                            At <span className="text-lg font-semibold text-orange-600">Home Tutor Provider BD</span>, we are dedicated to revolutionizing education through personalized learning experiences.
                            Our mission is to connect students with exceptional tutors who can guide them towards achieving their academic goals and unlocking their full potential.
                        </p>
                        <p className="text-justify  text-[18px] text-slate-700 py-5">
                            With a team of passionate educators and a commitment to excellence, we strive to create a supportive and engaging learning environment.
                            Our platform offers a range of flexible options to meet the diverse needs of learners, ensuring that every student receives the attention and resources they need to succeed.
                        </p>
                        <p className="text-justify  text-[18px] text-slate-700">
                            Join us on our journey to make quality education accessible to all. Together, we can make a difference in the lives
                            of students and shape the future of education.
                        </p>
                    </div>

                </div>
            </div>
            <WhyChooseUs />
        </>
    );
};

export default About;