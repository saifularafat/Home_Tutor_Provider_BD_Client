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
                        to='/contact-us'
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

            {/* Team Member list and information */}
            <div className='py-4 md:mt-2'>
                <div className='container flex flex-col items-center justify-center p-2 mx-auto sm:p-10'>
                    <p
                        data-aos='fade-down'
                        data-aos-duration='700'
                        className='text-lg  font-medium text-center uppercase tracking'
                    >
                        Meet Our team
                    </p>
                    <h1
                        data-aos="fade-down"
                        data-aos-duration="1500"
                        className="md:text-4xl font-bold leading text-center text-2xl">The Website People Behind the Scenes Member</h1>
                    <div className="flex flex-row flex-wrap-reverse justify-center md:mt-8 mt-4">
                        <div
                            className="flex flex-col justify-center w-full mx-6 my-7 text-center rounded-md md:w-96 lg:w-80 xl:w-64  border hover: ag-white/30 shadow-md dark: ">
                            <div className=" avatar md:-mt-10 -mt-7">
                                <div className="w-24 rounded-full mx-auto  " >
                                    <img src="https://i.ibb.co/19jFGZY/saiful-img1.png" />
                                </div>
                            </div>
                            <div className="flex-1 md:my-4 my-3">
                                <p className="text-xl font-semibold leading">Saiful Arafat</p>
                                <p className='tracking-wide uppercase'>IT Specialist</p>
                            </div>

                            <div className='flex mx-auto gap-5 text-xl pb-3'>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saifularafat.info@gmail.com" target="_blank">
                                    <FaEnvelope />
                                </a>
                                <a href="https://www.linkedin.com/in/saiful-islam-60158b257/" target='_blank'><FaLinkedin /></a>

                                <a href="https://twitter.com/saifularafat69" target='_blank'><FaTwitter /></a>

                                <a href="https://github.com/saifularafat" target='_blank'><FaGithub /></a>
                            </div>

                        </div>
                        <div
                            className="flex flex-col justify-center w-full mx-6 my-7 text-center rounded-md md:w-96 lg:w-80 xl:w-64  border hover: ag-white/30 shadow-md dark: ">
                            <div className=" avatar md:-mt-10 -mt-7">
                                <div className="w-24 rounded-full mx-auto  " >
                                    <img src="https://i.ibb.co.com/cgcVsqg/user1.jpg" />
                                </div>
                            </div>
                            <div className="flex-1 md:my-4 my-3">
                                <p className="text-xl font-semibold leading">Atiqur Rahman</p>
                                <p className='tracking-wide uppercase'>Helper</p>
                            </div>

                            <div className='flex mx-auto gap-5 text-xl pb-3'>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saifularafat.info@gmail.com" target="_blank">
                                    <FaEnvelope />
                                </a>
                                <a href="https://www.linkedin.com/in/saiful-islam-60158b257/" target='_blank'><FaLinkedin /></a>

                                <a href="https://twitter.com/saifularafat69" target='_blank'><FaTwitter /></a>

                                <a href="https://github.com/saifularafat" target='_blank'><FaGithub /></a>
                            </div>

                        </div>
                        <div
                            className="flex flex-col justify-center w-full mx-6 my-7 text-center rounded-md md:w-96 lg:w-80 xl:w-64  border hover: ag-white/30 shadow-md dark: ">
                            <div className=" avatar md:-mt-10 -mt-7">
                                <div className="w-24 rounded-full mx-auto  " >
                                    <img src="https://i.ibb.co.com/jzfkpmD/alices-table.webp" />
                                </div>
                            </div>
                            <div className="flex-1 md:my-4 my-3">
                                <p className="text-xl font-semibold leading">Alices Sultan</p>
                                <p className='tracking-wide uppercase'>call center</p>
                            </div>

                            <div className='flex mx-auto gap-5 text-xl pb-3'>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saifularafat.info@gmail.com" target="_blank">
                                    <FaEnvelope />
                                </a>
                                <a href="https://www.linkedin.com/in/saiful-islam-60158b257/" target='_blank'><FaLinkedin /></a>

                                <a href="https://twitter.com/saifularafat69" target='_blank'><FaTwitter /></a>

                                <a href="https://github.com/saifularafat" target='_blank'><FaGithub /></a>
                            </div>

                        </div>
                        <div
                            className="flex flex-col justify-center w-full mx-6 my-7 text-center rounded-md md:w-96 lg:w-80 xl:w-64  border hover: ag-white/30 shadow-md dark: ">
                            <div className=" avatar md:-mt-10 -mt-7">
                                <div className="w-24 rounded-full mx-auto  " >
                                    <img src="https://i.ibb.co.com/jzQrwjM/ceo-2.jpg" />
                                </div>
                            </div>
                            <div className="flex-1 md:my-4 my-3">
                                <p className="text-xl font-semibold leading">Md Mohibur Rahman</p>
                                <p className='tracking-wide uppercase'>CEO</p>
                            </div>

                            <div className='flex mx-auto gap-5 text-xl pb-3'>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saifularafat.info@gmail.com" target="_blank">
                                    <FaEnvelope />
                                </a>
                                <a href="https://www.linkedin.com/in/saiful-islam-60158b257/" target='_blank'><FaLinkedin /></a>

                                <a href="https://twitter.com/saifularafat69" target='_blank'><FaTwitter /></a>

                                <a href="https://github.com/saifularafat" target='_blank'><FaGithub /></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;
