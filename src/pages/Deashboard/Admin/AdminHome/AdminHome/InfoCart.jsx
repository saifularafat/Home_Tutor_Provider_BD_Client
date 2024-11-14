import { FaBlog, FaUsers } from "react-icons/fa";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { MdOutlineWork, MdReduceCapacity, MdWorkHistory } from "react-icons/md";
import { PiHandshakeDuotone, PiStudentFill } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { SiFampay } from "react-icons/si";

const InfoCart = () => {
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mx-4">
            {/* All Users */}
            <div className="hover:scale-105 shadow-lg border-l-2 border-r-2 border-slate-400 bg-white rounded-md hover:border-r-blue-400 hover:border-l-blue-400 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                <div className="flex items-center justify-between gap-0">
                    <div>
                        <h4 className="text-lg font-medium">All Users</h4>
                        <p className="text-center">90</p>
                    </div>
                    <FaUsers className="md:text-3xl text-xl" />
                </div>
            </div>
            {/* All Tutors */}
            <div className="hover:scale-105 shadow-lg border-l-2 border-r-2 border-slate-400 bg-white rounded-md hover:border-r-blue-400 hover:border-l-blue-400 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                <div className="flex items-center justify-between gap-0">
                    <div>
                        <h4 className="text-lg font-medium">All Tutors</h4>
                        <p className="text-center">50</p>
                    </div>
                    <MdReduceCapacity className="md:text-3xl text-xl" />
                </div>
            </div>
            {/* Coaching Center */}
            <div className="hover:scale-105 shadow-lg border-l-2 border-r-2 border-slate-400 bg-white rounded-md hover:border-r-blue-400 hover:border-l-blue-400 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                <div className="flex items-center justify-between gap-0">
                    <div>
                        <h4 className="text-lg font-medium">Coaching Center</h4>
                        <p className="text-center">9</p>
                    </div>
                    <FaSchoolCircleCheck className="md:text-3xl text-xl" />
                </div>
            </div>
            {/* Total Parent */}
            <div className="hover:scale-105 shadow-lg border-l-2 border-r-2 border-slate-400 bg-white rounded-md hover:border-r-blue-400 hover:border-l-blue-400 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                <div className="flex items-center justify-between gap-0">
                    <div>
                        <h4 className="text-lg font-medium">Total Parent</h4>
                        <p className="text-center">31</p>
                    </div>
                    <RiParentFill className="md:text-3xl text-xl" />
                </div>
            </div>
            {/* All Users */}
            <div className="hover:scale-105 shadow-lg border-l-2 border-r-2 border-slate-400 bg-white rounded-md hover:border-r-blue-400 hover:border-l-blue-400 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                <div className="flex items-center justify-between gap-0">
                    <div>
                        <h4 className="text-lg font-medium">Total Payment</h4>
                        <p className="text-center">07</p>
                    </div>
                    <SiFampay className="md:text-3xl text-xl" />
                </div>
            </div>
            <div className="hover:scale-105 shadow-lg border-l-2 border-r-2 border-slate-400 bg-white rounded-md hover:border-r-blue-400 hover:border-l-blue-400 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                <div className="flex items-center justify-between gap-0">
                    <div>
                        <h4 className="text-lg font-medium">Request Jobs</h4>
                        <p className="text-center">50</p>
                    </div>
                    <MdWorkHistory className="md:text-3xl text-xl" />
                </div>
            </div>
            <div className="hover:scale-105 shadow-lg border-l-2 border-r-2 border-slate-400 bg-white rounded-md hover:border-r-blue-400 hover:border-l-blue-400 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                <div className="flex items-center justify-between gap-0">
                    <div>
                        <h4 className="text-lg font-medium">Request Tutor</h4>
                        <p className="text-center">15</p>
                    </div>
                    <PiHandshakeDuotone className="md:text-3xl text-xl" />
                </div>
            </div>
            <div className="hover:scale-105 shadow-lg border-l-2 border-r-2 border-slate-400 bg-white rounded-md hover:border-r-blue-400 hover:border-l-blue-400 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                <div className="flex items-center justify-between gap-0">
                    <div>
                        <h4 className="text-lg font-medium">Total Blog</h4>
                        <p className="text-center">12</p>
                    </div>
                    <FaBlog className="md:text-3xl text-xl" />
                </div>
            </div>
        </div>
    );
};

export default InfoCart;