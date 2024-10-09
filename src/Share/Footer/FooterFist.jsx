import { Link } from "react-router-dom";
import logo from "./../../assets/HTP_logo.png"
import {
    FaLinkedinIn,
    FaSquareFacebook,
    FaWhatsapp,
    FaXTwitter,
    FaYoutube
} from "react-icons/fa6";
const FooterFistPart = () => {
    return (
        <div className="col-span-2">
            <div>
                <img src={logo} alt="logo" className="w-9/12" />
            </div>
            <p className="text-[14px] text-justify py-4 font-sans"><span className="text-[18px] font-medium"> &quot;Home Tutor Provider BD&ldquo;</span> is an innovative educational platform in Bangladesh dedicated to providing comprehensive learning solutions.
                We offer a wide range of academic and extracurricular tutoring options, including home-based, online, batch, and crash courses. Our experienced tutors are passionate about making learning engaging,
                effective, and tailored to each student&apos;s needs. At Tutor Provider BD, we strive to enhance your child&apos;s educational journey with personalized support and expert guidance, ensuring a fun and enriching learning experience.
            </p>
            <div className="flex items-center justify-center gap-3 py-6">
                <Link to="#">
                    <FaSquareFacebook className="hover:text-[#106AFF] text-4xl text-slate-700" />
                </Link>
                <Link to="#">
                    <FaWhatsapp className="hover:text-[#25D147] text-4xl text-slate-700 transition-all duration-200" />
                </Link>
                <Link to="#">
                    <FaXTwitter className="hover:text-[#24A4F2] text-4xl text-slate-700 transition-all duration-200" />
                </Link>
                <Link to="#">
                    <FaLinkedinIn className="hover:text-[#0A78B5] text-4xl text-slate-700 transition-all duration-200" />
                </Link>
                <Link to="#">
                    <FaYoutube className="hover:text-[#FE080A] text-4xl text-slate-700 transition-all duration-200" />
                </Link>
            </div>
        </div>
    );
};

export default FooterFistPart;