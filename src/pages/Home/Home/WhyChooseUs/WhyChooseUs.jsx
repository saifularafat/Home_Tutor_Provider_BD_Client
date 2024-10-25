import { FaChalkboardUser } from "react-icons/fa6";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import { GrSchedules, GrUserSettings } from "react-icons/gr";

const WhyChooseUs = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <SectionTitle sectionName="Why Choose Us?" />

            <p className="text-base font-normal text-center text-slate-600 pt-2 pb-10">
                Discover the exceptional benefits and unique features that set us apart in providing top-notch tutoring services.
            </p>
            <div className="grid grid-cols-3 gap-5">
                <div className="bg-slate-50 shadow-xl shadow-gray-300 rounded-md py-5 px-6 text-center space-y-3">
                    <FaChalkboardUser className="h-12 w-12 mx-auto text-blue-500" />
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">Expert Tutors</h2>
                        <p className=" py-4 text-base font-normal text-slate-800">
                            Our tutors are highly qualified professionals with extensive experience in their fields,
                            committed to providing exceptional guidance and support.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-50 shadow-xl shadow-gray-300 rounded-md py-5 px-6 text-center space-y-3">
                    <GrSchedules className="h-12 w-12 mx-auto text-green-500" />
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">Flexible Scheduling</h2>
                        <p className=" py-4 text-base font-normal text-slate-800">
                            We offer flexible scheduling options to accommodate your busy lifestyle,
                            ensuring that you can find the perfect time for your lessons.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-50 shadow-xl shadow-gray-300 rounded-md py-5 px-6 text-center space-y-3">
                    <GrUserSettings className="h-12 w-12 mx-auto text-red-500" />
                    <div>
                        <h2 className="text-xl font-semibold text-gray-800">Customized Learning</h2>
                        <p className=" py-4 text-base font-normal text-slate-800">
                            We tailor our tutoring sessions to meet the specific needs and goals of each student,
                            providing a personalized learning experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;