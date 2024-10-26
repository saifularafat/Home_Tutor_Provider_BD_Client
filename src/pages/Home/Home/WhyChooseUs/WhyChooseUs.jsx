import { FaCalendarDays, FaChalkboardUser } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

const WhyChooseUs = () => {
    return (
        <div className="md:py-4 bg-[#fafcff]">
            <div className="text-center">
                <SectionTitle sectionName="Why Choose Us?" />
                <p className="md:text-base text-slate-700 md:px-0 px-2">Discover the exceptional benefits and unique features that set us apart in providing top-notch tutoring services.</p>
            </div>
            <div className="grid md:grid-cols-6 grid-cols-1 md:gap-5 gap-4 w-9/12 mx-auto md:py-12 py-6">
                <div className="md:col-span-2 bg-white h-72 duration-200 rounded-lg text-center shadow-md hover:shadow-2xl hover:shadow-blue-300 transition-all " >
                    <FaChalkboardUser className="w-[70px] h-[70px] mx-auto pt-8 text-blue-300" />

                    <h4 className="md:text-2xl text-xl font-semibold md:py-4 py-3">Expert Tutors</h4>
                    <p className="md:px-5 px-3 md:text-[17px] text-base">Our tutors are highly qualified professionals with extensive
                        experience in their fields,
                        committed to providing exceptional guidance and support.
                    </p>
                </div>
                <div className="md:col-span-2 md:py-0 md:px-0 py-4 px-3 bg-white rounded-lg text-center shadow-md hover:shadow-2xl hover:shadow-green-300 transition-all duration-200" >
                    <FaCalendarDays className="w-[70px] h-[70px] mx-auto pt-8 text-green-500" />

                    <h4 className="md:text-2xl text-xl font-semibold md:py-4 py-3">Flexible Scheduling</h4>
                    <p className="md:px-5 px-3 md:text-[17px] text-base">
                        We offer flexible scheduling options to accommodate your busy lifestyle,
                        ensuring that you can find the perfect time for your lessons.
                    </p>
                </div>
                <div className="md:col-span-2 md:py-0 md:px-0 py-4 px-3 bg-white rounded-lg text-center shadow-md hover:shadow-2xl hover:shadow-red-300 transition-all duration-200" >
                    <MdMiscellaneousServices className="w-20 h-20 mx-auto md:pt-8 pt-4 text-red-600" />

                    <h4 className="md:text-2xl text-xl font-semibold md:py-4 py-3">Customized Learning</h4>
                    <p className="md:px-5 px-3 md:text-[17px] text-base">
                        We tailor our tutoring sessions to meet the specific needs and goals of each student,
                        providing a personalized learning experience.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;