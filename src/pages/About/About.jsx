import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PageTitleShow from '../../Components/PageTitleShow/PageTitleShow';

const About = () => {
    return (
        <div className='container px-6 mx-auto'>
            <PageTitleShow currentPage="About us" />

            <div className='overflow-x-hidden items-center justify-between py-20 text-center md:flex md:gap-20 md:text-left'>
                <div className=' md:w-1/2'>
                    <h2
                        data-aos='zoom-in'
                        data-aos-duration='1000'
                        className='pb-3 text-sm'
                    >
                        About Home Tutor Provider <sup>BD</sup>
                    </h2>
                    <div
                        data-aos='fade-right'
                        data-aos-easing='ease-in-sine'
                        className='pb-5'
                    >
                        <h2 className='pb-3 text-4xl font-bold tracking-wide xl:text-7xl'>
                            Reach your peak.
                        </h2>
                        <h2 className='text-4xl font-bold tracking-wide xl:text-7xl'>
                            We'll help you get there.
                        </h2>
                    </div>

                    <p
                        data-aos='fade-right'
                        data-aos-easing='ease-in-sine'
                        className='pb-5 text-lg  '
                    >
                        We recognize the importance of seamless and efficient examination
                        processes, and that's why we have created a cutting-edge solution
                        that allows students to take their exams from the comfort of their
                        own space. Our platform is built on a foundation of innovation and
                        user-centric design, ensuring a user-friendly experience.
                    </p>
                    <Link
                        data-aos='fade-down'
                        data-aos-duration='1000'
                        to='/contact'
                        className='  border-none shadow-md btn btn-primary'
                    >
                        Contact Us
                    </Link>
                </div>

                <div
                    data-aos='fade-left'
                    data-aos-easing='ease-in-sine'
                    className='md:w-1/2'
                >
                    <img
                        className='w-2/3 mx-auto mt-10'
                        src='https://i.ibb.co/sPdHD97/45397-removebg.png'
                        alt=''
                    />
                </div>
            </div>

            

          
        </div>
    )
}

export default About;





// import Lottie from "lottie-react";
// import aboutLottie from "./../../assets/Animation/about.json"
// const About = () => {
//     return (
//         <>
//             <div className=" footerBg ">
//                 <div className="grid grid-cols-4 gap-5 w-10/12 mx-auto py-10 ">
//                     <div className="col-span-2 w-full p-5 hover:shadow-lg rounded-md transition-all duration-200">
//                         <Lottie
//                             animationData={aboutLottie}
//                             loop={true} className="" />
//                     </div>
//                     <div className="col-span-2 hover:shadow-lg hover:rounded-md transition-all duration-200 p-5">
//                         <h3 className="text-3xl font-semibold text-slate-800 pb-4">About Us</h3>
//                         <p className="text-justify text-[18px] text-slate-700">
//                             At <span className="text-lg font-semibold text-orange-600">Home Tutor Provider BD</span>, we are dedicated to revolutionizing education through personalized learning experiences.
//                             Our mission is to connect students with exceptional tutors who can guide them towards achieving their academic goals and unlocking their full potential.
//                         </p>
//                         <p className="text-justify  text-[18px] text-slate-700 py-5">
//                             With a team of passionate educators and a commitment to excellence, we strive to create a supportive and engaging learning environment.
//                             Our platform offers a range of flexible options to meet the diverse needs of learners, ensuring that every student receives the attention and resources they need to succeed.
//                         </p>
//                         <p className="text-justify  text-[18px] text-slate-700">
//                             Join us on our journey to make quality education accessible to all. Together, we can make a difference in the lives
//                             of students and shape the future of education.
//                         </p>
//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// };

// export default About;
