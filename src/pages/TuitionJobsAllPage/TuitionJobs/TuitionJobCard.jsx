import { FaCalendarAlt } from "react-icons/fa";
import { FaMedal, FaMedium, FaMoneyBillWave } from "react-icons/fa6";
import { IoDuplicateSharp } from "react-icons/io5";
import { TbGenderAndrogyne } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import JobCategorySliderTabs from "./JobCategorySliderTabs";
import { allTuitionJobs } from "../../../api/allTuitionJobs";
import Loading from "../../../Components/Loading/Loading";
import Pagination from "../../../Components/Pagination/Pagination";

const TuitionJobCard = () => {
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [submittedSearchText, setSubmittedSearchText] = useState("");

    const [tuitionJobs, refetch, isLoading] = allTuitionJobs(page, submittedSearchText);
    const { tuitionJobs: jobs, pagination } = tuitionJobs || {};
    const { currentPage, nextPage, previousPage, totalPage } = pagination || {};

    useEffect(() => {
        refetch();
    }, [page, refetch]);

    const handlerSearch = () => {
        setSubmittedSearchText(searchText);
        refetch();
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <div className="md:py-3">
                {/* Search and filter section */}
                <div className="grid md:grid-cols-6 grid-cols-1 contain-content gap-5 rounded-lg md:py-6 py-3 md:pl-4 px-2">
                    <div className="md:col-span-2 col-span-1 md:px-6 px-3 md:py-0 py-2 rounded-xl md:shadow-xl shadow-md flex items-center gap-2">
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            type="text"
                            placeholder="Search Your Tuition Code"
                            className="md:px-9 px-2 md:py-[10px] py-2 placeholder:text-slate-300 text-slate-500 border border-blue-200 rounded-tl-md rounded-bl-md focus:outline-none focus:outline-blue-400 focus:outline-double"
                        />
                        <button
                            onClick={handlerSearch}
                            className="py-[9px] md:px-3 px-2 bg-sky-600 text-white rounded-br-md rounded-tr-md text-lg tracking-wider"
                        >
                            Search
                        </button>
                    </div>

                    {/* Job Category Slider Tabs section */}
                    <div className="md:col-span-4 col-span-1 w-full shadow-xl rounded-xl flex items-center md:gap-2 gap-1 md:py-6 py-2 md:px-8 md:mr-6">
                        <JobCategorySliderTabs />
                    </div>
                </div>
            </div>

            {/* Tuition job cards */}
            <div className="md:px-8 grid md:grid-cols-4 grid-cols-1 md:gap-7 md:space-y-0 space-y-5 md:mx-0 mx-2 md:py-12 py-5">
                {jobs?.map((job) => (
                    <div key={job._id} className="md:col-span-2 col-span-1 md:max-h-[500px] shadow-md hover:shadow-xl hover:shadow-sky-100 border border-slate-100 rounded-md md:p-5 p-2">
                        <h5 className="md:text-xl text-lg font-semibold md:pb-3 pb-1">{job?.jobLocation}</h5>
                        {/* First Step: Job details */}
                        <div className="md:block hidden">
                            <div className="md:px-4 md:flex items-center justify-between">
                                <div className="flex items-center justify-between">
                                    <div className="py-3">
                                        <div className="flex items-center gap-x-2">
                                            <FaMedal className="transform rotate-180 text-orange-500 text-lg" />
                                            <span className="text-base font-semibold text-slate-500">Tuition Code:</span>
                                        </div>
                                        <p className="font-normal text-[15px] text-slate-600 capitalize">{job?.tuitionCode}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="py-3">
                                        <div className="flex items-center gap-x-2">
                                            <TbGenderAndrogyne className="transform rotate-90 text-pink-500 text-2xl" />
                                            <span className="text-base font-semibold text-slate-500">Gender:</span>
                                        </div>
                                        <p className="font-normal text-[15px] text-slate-600">{job?.tutorGender}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="py-3">
                                        <div className="flex items-center gap-x-2">
                                            <FaMedium className="text-orange-500 text-2xl" />
                                            <span className="text-base font-semibold text-slate-500">Medium:</span>
                                        </div>
                                        <p className="font-normal text-[15px] text-slate-600">{job?.medium}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Second Step: Job details */}
                            <div className="px-4 md:flex items-center justify-between">
                                <div className="flex items-center justify-between">
                                    <div className="py-3">
                                        <div className="flex items-center gap-x-2">
                                            <IoDuplicateSharp className="transform rotate-180 text-orange-500 text-lg" />
                                            <span className="text-base font-semibold text-slate-500">Category:</span>
                                        </div>
                                        <p className="font-normal text-[15px] text-slate-600">{job?.jobCategory}</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="py-3">
                                        <div className="flex items-center gap-x-2">
                                            <FaCalendarAlt className="text-orange-500 text-lg" />
                                            <span className="text-base font-semibold text-slate-500">Per Week:</span>
                                        </div>
                                        <p className="font-normal text-[15px] text-slate-600">{job?.perWeek} Days</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="py-3">
                                        <div className="flex items-center gap-x-2">
                                            <FaMoneyBillWave className="text-orange-500 text-lg" />
                                            <span className="text-base font-semibold text-slate-500">Salary:</span>
                                        </div>
                                        <p className="font-normal text-[15px] text-slate-600">{job?.jobSalary}<span className="text-2xl font-bold">৳</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Table section: Class and Subject */}
                        <div className="md:mx-8 bg-[#F3F4F6] rounded-tl-lg rounded-tr-lg">
                            <div className="w-full">
                                <div className="flex items-center justify-between md:px-5 px-3 md:py-3 py-2">
                                    <h6 className="md:text-xl text-lg md:font-bold font-semibold text-slate-700">Class</h6>
                                    <h6 className="md:text-xl text-lg md:font-bold font-semibold text-slate-700">Subject</h6>
                                </div>
                                <div className="flex items-center justify-between border-t-[1px] md:px-5 px-2 bg-sky-100 border-slate-300 md:py-2 py-1 rounded-br-md rounded-bl-md">
                                    <h6 className="font-normal md:tracking-wide text-slate-500 capitalize">{job?.className}</h6>
                                    <h6 className="md:font-medium font-normal md:tracking-wide text-[#4B5563] capitalize">{job?.subject}</h6>
                                </div>
                            </div>
                        </div>

                        {/* Job Comments and Creation Date */}
                        <div className="md:py-6 py-3">
                            <p className="font-medium text-slate-700">
                                Create: <span className="font-normal">
                                    {new Date(job?.createdAt).toLocaleDateString()}{" "}
                                    {new Date(job?.createdAt).toLocaleTimeString()}
                                </span>
                                <br />
                                <span className="font-normal">Comment:</span>
                                <span className="font-medium text-slate-700 italic">{job?.jobComment}</span>
                            </p>
                        </div>

                        {/* Link to Job Details */}
                        <div className="flex justify-end">
                            <Link to={`/tuition-job-details/${job?._id}`}>
                                <button className="group relative z-20 md:h-10 h-8 md:w-32 w-24 rounded-lg overflow-hidden border-y-4 border-sky-950 bg-sky-700 md:text-xl text-base text-white duration-500">
                                    <span>View Detail</span>
                                    <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-1000">Job Detail</span>
                                    <span className="absolute inset-0 -translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span>
                                    <span className="absolute inset-0 translate-y-full bg-sky-950 group-hover:translate-y-0 group-hover:duration-1000"></span>
                                    <span className="absolute inset-0 translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span>
                                    <span className="absolute inset-0 -translate-x-full bg-sky-950 delay-100 duration-1000 group-hover:translate-x-0 group-hover:delay-300"></span>
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <Pagination
                totalPage={totalPage}
                currentPage={currentPage}
                nextPage={nextPage}
                setPage={setPage}
                previousPage={previousPage}
            />
        </>
    );
};

export default TuitionJobCard;
