import { FaCalendarDays, FaChalkboardUser } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";

const WhyChooseUs = () => {
    return (
        <div className="py-10 bg-[#F3F4F6]">
            <div className="text-center">
                <h2 className="text-4xl font-semibold text-slate-800 pb-6">Why Choose Us?</h2>
                <p className="text-base text-slate-700">Discover the exceptional benefits and unique features that set us apart in providing top-notch tutoring services.</p>
            </div>
            <div className="grid grid-cols-6 gap-5 w-9/12 mx-auto py-12">
                <div className="col-span-2 bg-white h-72 duration-200 rounded-lg text-center  hover:shadow-2xl hover:shadow-blue-300 transition-all " >
                    <FaChalkboardUser className="w-[70px] h-[70px] mx-auto pt-8 text-blue-300" />

                    <h4 className="text-2xl font-semibold py-4">Expert Tutors</h4>
                    <p className="px-5 text-[17px]">Our tutors are highly qualified professionals with extensive
                        experience in their fields,
                        committed to providing exceptional guidance and support.
                    </p>
                </div>
                <div className="col-span-2 bg-white rounded-lg text-center  hover:shadow-2xl hover:shadow-green-300 transition-all duration-200" >
                    <FaCalendarDays className="w-[70px] h-[70px] mx-auto pt-8 text-green-500" />

                    <h4 className="text-2xl font-semibold py-4">Flexible Scheduling</h4>
                    <p className="px-5 text-[17px]">
                    We offer flexible scheduling options to accommodate your busy lifestyle, 
                    ensuring that you can find the perfect time for your lessons.
                    </p>
                </div>
                <div className="col-span-2 bg-white rounded-lg text-center  hover:shadow-2xl hover:shadow-red-300 transition-all duration-200" >
                    <MdMiscellaneousServices className="w-20 h-20 mx-auto pt-8 text-red-600"/>

                    <h4 className="text-2xl font-semibold py-4">Customized Learning</h4>
                    <p className="px-5 text-[17px]">
                        We tailor our tutoring sessions to meet the specific needs and goals of each student,
                        providing a personalized learning experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;