import { FaBlog, FaUsers } from "react-icons/fa";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import { MdReduceCapacity, MdWorkHistory } from "react-icons/md";
import { PiHandshakeDuotone } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { SiFampay } from "react-icons/si";
import { Link } from "react-router-dom";
import { useAllUsers } from "../../../../../api/useAllUsers";
import { useAllBlogs } from "../../../../../api/useAllBlog";
import { useParentRequestTutor } from "../../../../../api/useAllParentRequestToTutor";
import { useAllRequestJobs } from "../../../../../api/useAllRequestJobs";
import Loading from "../../../../../Components/Loading/Loading";
import { allTutor } from "../../../../../api/allTutor";
import { CiSquareQuestion } from "react-icons/ci";
import { FcAcceptDatabase } from "react-icons/fc";

const InfoCart = () => {
    const [users, refetch, isLoading] = useAllUsers();
    const { users: allUsers, pagination: pageInfo } = users || {};

    const coaching = (allUsers || []).filter((data) => data.isCoaching === true);
    const parents = (allUsers || []).filter((data) => data.isParent === true);

    const [tutors] = allTutor();

    const [payload] = useParentRequestTutor();
    const { tutorRequest = [] } = payload || { tutorRequest: [] };

    const [payloads] = useAllRequestJobs();
    const { pagination = {} } = payloads || { tutorJobApplies: [] };

    const [blogs] = useAllBlogs();
    const { blogs: blog } = blogs || {};
    const blogPending = (blog || []).filter((data) => data.isBlog === false);
    const blogApprove = (blog || []).filter((data) => data.isBlog === true);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <div className="md:space-y-4 space-y-2 md:mx-4 mx-0">
                <h2 className="text-2xl font-semibold text-slate-700">User Information</h2>
                <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                    {/* All Users info*/}
                    <Link to="/dashboard/manage-all-users" className="hover:scale-105 shadow-lg border-l-2 border-r-2 hover:bg-blue-400 hover:text-white border-blue-400 bg-white rounded-md hover:border-r-blue-500 hover:border-l-blue-500 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                        <div className="flex items-center justify-between gap-0">
                            <div>
                                <h4 className="text-lg font-medium">All Users</h4>
                                <p className="text-center">{pageInfo?.totalNumberOfUser}</p>
                            </div>
                            <FaUsers className="md:text-3xl text-xl" />
                        </div>
                    </Link>
                    {/* All Tutors */}
                    <Link to="/dashboard/all-tutor" className="hover:scale-105 shadow-lg border-l-2 border-r-2 hover:bg-orange-400 hover:text-white border-orange-400 bg-white rounded-md hover:border-r-orange-400 hover:border-l-orange-400 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                        <div className="flex items-center justify-between gap-0">
                            <div>
                                <h4 className="text-lg font-medium">All Tutors</h4>
                                <p className="text-center">{tutors?.pagination?.totalNumberOfTutor}</p>
                            </div>
                            <MdReduceCapacity className="md:text-3xl text-xl" />
                        </div>
                    </Link>
                    {/* Coaching Center */}
                    <Link to="/dashboard/coaching-center" className="hover:scale-105 shadow-lg border-l-2 border-r-2 hover:bg-cyan-400 hover:text-white border-cyan-400 bg-white rounded-md hover:border-r-cyan-400 hover:border-l-cyan-400 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                        <div className="flex items-center justify-between gap-0">
                            <div>
                                <h4 className="text-lg font-medium">Coaching Center</h4>
                                <p className="text-center">{coaching?.length}</p>
                            </div>
                            <FaSchoolCircleCheck className="md:text-3xl text-xl" />
                        </div>
                    </Link>
                    {/* Total Parent */}
                    <div className="hover:scale-105 shadow-lg border-l-2 border-r-2 hover:bg-emerald-500 hover:text-white border-emerald-500 bg-white rounded-md hover:border-r-emerald-500 hover:border-l-emerald-500 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                        <div className="flex items-center justify-between gap-0">
                            <div>
                                <h4 className="text-lg font-medium">All Parent</h4>
                                <p className="text-center">{parents?.length}</p>
                            </div>
                            <RiParentFill className="md:text-3xl text-xl" />
                        </div>
                    </div>
                </div>

                 <h2 className="text-2xl font-semibold text-slate-600">Tuition Jobs Information</h2>
                <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                    <Link to="/dashboard/all-request-approve-jobs" className="hover:scale-105 shadow-lg border-l-2 border-r-2 hover:bg-blue-500 hover:text-white border-blue-500 bg-white rounded-md hover:border-r-blue-500 hover:border-l-blue-500 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                        <div className="flex items-center justify-between gap-0">
                            <div>
                                <h4 className="text-lg font-medium">Total Tuition Jobs</h4>
                                <p className="text-center">{pagination?.totalNumberOfTuition}</p>
                            </div>
                            <MdWorkHistory className="md:text-3xl text-xl" />
                        </div>
                    </Link>
                    <Link to="/dashboard/all-request-approve-jobs" className="hover:scale-105 shadow-lg border-l-2 border-r-2 hover:bg-red-400 hover:text-white border-red-400 bg-white rounded-md hover:border-r-rose-400 hover:border-l-rose-400 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                        <div className="flex items-center justify-between gap-0">
                            <div>
                                <h4 className="text-lg font-medium">Request Jobs</h4>
                                {/* <p className="text-center">{pagination?.totalNumberOfTuition}</p> */}
                                <p className="text-center">00</p>
                            </div>
                            <MdWorkHistory className="md:text-3xl text-xl" />
                        </div>
                    </Link>
                    <Link to="/dashboard/all-request-approve-jobs" className="hover:scale-105 shadow-lg border-l-2 border-r-2 hover:bg-green-500 hover:text-white border-green-500 bg-white rounded-md hover:border-r-green-500 hover:border-l-green-500 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                        <div className="flex items-center justify-between gap-0">
                            <div>
                                <h4 className="text-lg font-medium">Accept Jobs</h4>
                                {/* <p className="text-center">{pagination?.totalNumberOfTuition}</p> */}
                                <p className="text-center">00</p>
                            </div>
                            <MdWorkHistory className="md:text-3xl text-xl" />
                        </div>
                    </Link>
                </div>

                 <h2 className="text-2xl font-semibold text-slate-600">Tutor Request Information</h2>
                <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                    <Link to="/dashboard/tutor-jobs-request" className="hover:scale-105 shadow-lg border-l-2 border-r-2 hover:bg-blue-400 hover:text-white border-blue-400 bg-white rounded-md hover:border-r-blue-400 hover:border-l-blue-400 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                        <div className="flex items-center justify-between gap-0">
                            <div>
                                <h4 className="text-lg font-medium">Total Tutor</h4>
                                <p className="text-center">{tutorRequest?.length}</p>
                            </div>
                            <PiHandshakeDuotone className="md:text-3xl text-xl" />
                        </div>
                    </Link>
                    <Link to="/dashboard/tutor-jobs-request" className="hover:scale-105 shadow-lg border-l-2 border-r-2 hover:bg-red-400 hover:text-white border-red-400 bg-white rounded-md hover:border-r-red-400 hover:border-l-red-400 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                        <div className="flex items-center justify-between gap-0">
                            <div>
                                <h4 className="text-lg font-medium">Request Tutor</h4>
                                {/* <p className="text-center">{tutorRequest?.length}</p> */}
                                <p className="text-center">00</p>
                            </div>
                            <PiHandshakeDuotone className="md:text-3xl text-xl" />
                        </div>
                    </Link>
                    <Link to="/dashboard/tutor-jobs-request" className="hover:scale-105 shadow-lg border-l-2 border-r-2 hover:bg-green-500 hover:text-white border-green-500 bg-white rounded-md hover:border-r-green-500 hover:border-l-green-500 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                        <div className="flex items-center justify-between gap-0">
                            <div>
                                <h4 className="text-lg font-medium">Accept Tutor</h4>
                                {/* <p className="text-center">{tutorRequest?.length}</p> */}
                                <p className="text-center">00</p>
                            </div>
                            <PiHandshakeDuotone className="md:text-3xl text-xl" />
                        </div>
                    </Link>
                </div>

                 <h2 className="text-2xl font-semibold text-slate-700">All Blog Information</h2>
                <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                    <Link to="/dashboard/all-blog" className="hover:scale-105 shadow-lg border-l-2 border-r-2 hover:bg-sky-500 hover:text-white border-sky-500 bg-white rounded-md hover:border-r-sky-500 hover:border-l-sky-500 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                        <div className="flex items-center justify-between gap-0">
                            <div>
                                <h4 className="text-lg font-medium">Total Blogs</h4>
                                <p className="text-center">{blogs?.pagination?.totalNumberOfBlog}</p>
                            </div>
                            <FaBlog className="md:text-3xl text-xl" />
                        </div>
                    </Link>
                    <Link to="/dashboard/all-request-approve-jobs" className="hover:scale-105 shadow-lg border-l-2 border-r-2 hover:bg-red-400 hover:text-white border-red-400 bg-white rounded-md hover:border-r-red-400 hover:border-l-red-400 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                        <div className="flex items-center justify-between gap-0">
                            <div>
                                <h4 className="text-lg font-medium">Pending Blog</h4>
                                <p className="text-center">{blogPending?.length}</p>
                            </div>
                            <CiSquareQuestion className="md:text-3xl text-xl" />
                        </div>
                    </Link>
                    <Link to="/dashboard/tutor-jobs-request" className="hover:scale-105 shadow-lg border-l-2 border-r-2 hover:bg-green-500 hover:text-white border-green-500 bg-white rounded-md hover:border-r-green-500 hover:border-l-green-500 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                        <div className="flex items-center justify-between gap-0">
                            <div>
                                <h4 className="text-lg font-medium">Approve Blog</h4>
                                <p className="text-center">{blogApprove?.length}</p>
                            </div>
                            <FcAcceptDatabase className="md:text-3xl text-xl text-black " />
                        </div>
                    </Link>
                </div>

                <h2 className="text-2xl font-semibold text-slate-600">Payment Information</h2>
                <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
                    {/* All Payment info*/}
                    <Link to="/dashboard/all-payments" className="hover:scale-105 shadow-lg border-l-2 border-r-2 hover:bg-pink-500 hover:text-white border-pink-500 bg-white rounded-md hover:border-r-pink-500 hover:border-l-pink-500 text-slate-700 font-semibold md:py-4 py-2 md:px-6 px-3 transition-all duration-200">
                        <div className="flex items-center justify-between gap-0">
                            <div>
                                <h4 className="text-lg font-medium">Total Payment</h4>
                                <p className="text-center">00</p>
                            </div>
                            <SiFampay className="md:text-3xl text-xl" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default InfoCart;