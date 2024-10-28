import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PageTitleShow from '../../Components/PageTitleShow/PageTitleShow';

const About = () => {
    return (
        <div className='container px-6 mx-auto'>
            <PageTitleShow currentPage="About us" />

            <div className='overflow-x-hidden items-center justify-between md:py-12 py-8 text-center md:flex md:gap-6 gap-2 md:text-left'>
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
                        <h2 className='pb-3 md:text-4xl text-2xl font-bold tracking-wide xl:text-7xl'>
                            Reach your peak.
                        </h2>
                        <h2 className='md:text-4xl text-2xl font-bold tracking-wide xl:text-7xl'>
                            We'll help you get there.
                        </h2>
                    </div>

                    <p
                        data-aos='fade-right'
                        data-aos-easing='ease-in-sine'
                        className='md:pb-5 pb-3 text-lg  '
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
                        className='  border-none shadow-md btn bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200'
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
                        className='w-2/3 mx-auto md:mt-10 mt-4'
                        src='https://i.ibb.co/sPdHD97/45397-removebg.png'
                        alt=''
                    />
                </div>
            </div>
            {/* second part */}
            <div className="pb-10">
                <div
                    data-aos='fade-up'
                    data-aos-duration='1500'
                    className='container md:mt-3 md:my-0 my-3 md:mb-4 '
                >
                    <p className='w-full mx-auto text-center md:w-1/2 '>
                        Our commitment extends beyond convenience. We strive to create an
                        inclusive platform that accommodates various subjects, disciplines,
                        and formats, providing an expansive repository of resources for
                        comprehensive preparation. We take pride in supporting the educational
                        ecosystem by partnering with schools, colleges, universities, and
                        educators to facilitate a new era of examination that aligns with the
                        digital age.
                    </p>
                </div>

                <div className='items-center justify-center gap-20 mt-20 md:flex'>
                    <div
                        data-aos='fade-left'
                        data-aos-easing='ease-in-sine'
                        className='w-1/2 mx-auto mb-7 '
                    >
                        <img
                            className='md:w-2/4 md:mt-20 mt-4 md:mx-auto'
                            src='https://i.ibb.co/bPGHBsD/tswv-dzjb-230710.png'
                            alt=''
                        />
                    </div>

                    <div
                        data-aos='fade-right'
                        data-aos-easing='ease-in-sine'
                        className='px-5 text-center md:w-1/2 md:mt-10 mt-5 md:text-left'
                    >
                        <h1 className='w-full md:text-3xl text-xl font-bold xl:text-5xl '>
                            E-ExamPro plays a huge role <br /> by providing unique, <br />
                            authentic peer advice in <br /> study field.
                        </h1>
                        <p className='mt-5   m'>
                            Our commitment extends beyond convenience. We strive to create an
                            inclusive platform that accommodates various subjects, disciplines,
                            and formats, providing an expansive repository of resources for
                            comprehensive preparation. We take pride in supporting the
                            educational ecosystem by partnering with schools, colleges,
                            universities, and educators to facilitate a new era of examination
                            that aligns with the digital age.
                        </p>
                    </div>
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
