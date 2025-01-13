import { useState } from "react";
import PageTitleShow from "../../../../../Components/PageTitleShow/PageTitleShow";
import { allTuitionJobs } from "../../../../../api/allTuitionJobs";
import Loading from "../../../../../Components/Loading/Loading";
import Pagination from "../../../../../Components/Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { useDeleteItemById } from "../../../../../Components/DeletedItem/DeletedItem";
import EmptyDataUiShow from "../../../../../Components/EmptyDataUiShow/EmptyDataUiShow";

const AllTuitionJobs = () => {
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [submittedSearchText, setSubmittedSearchText] = useState("");
    const navigate = useNavigate();

    const [tuitionJobs, refetch, isLoading] = allTuitionJobs(page, submittedSearchText);
    const { tuitionJobs: jobs, pagination } = tuitionJobs || {};
    const { currentPage, nextPage, previousPage, totalPage, totalNumberOfTuition } = pagination || {};

    const { handleDeleteById, isDeleting } = useDeleteItemById(refetch);

    const handlerSearch = () => {
        setSubmittedSearchText(searchText);
        refetch();
    };

    const handleRowClick = (id) => {
        navigate(`/tuition-job-details/${id}`);
    };

    if (isLoading || isDeleting) {
        return <Loading />;
    }

    return (
        <div className="overflow-x-auto my-8 px-4 py-6 rounded-lg bg-white">
            <PageTitleShow currentPage="All Tuition Jobs |" />
            {/* Searching file */}
            <div className="flex items-center justify-between md:px-6 px-3 md:pb-4 py-2 rounded-xl md:shadow-2xl shadow-xl">
                <div className="w-4/6">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
                        placeholder="Search Your Tuition Code"
                        className="md:px-9 px-2 md:py-[10px] md:w-4/6 md:mr-1 py-2 placeholder:text-slate-300 text-slate-500 border border-blue-200 rounded-tl-md rounded-bl-md focus:outline-none focus:outline-blue-400 focus:outline-double"
                    />
                    <button
                        onClick={handlerSearch}
                        className="py-[9px] md:px-3 px-2 ml-1 md:w-1/6 bg-sky-600 text-white rounded-br-md rounded-tr-md text-lg tracking-wider"
                    >
                        Search
                    </button>
                </div>
                <h2 className="w-2/6 text-right text-xl font-medium text-slate-700">Total Tuition Job = <span className="text-blue-500 text-2xl font-semibold">({totalNumberOfTuition})</span></h2>
            </div>

            <table className="min-w-[100%] shadow-md border mx-auto border-gray-100 my-6">
                <thead>
                    <tr className="bg-[#0095FF] text-white">
                        <th className="py-2 px-2 text-sm text-left border-b"></th>
                        <th className="py-2 px-2 text-sm text-left border-b">Address</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Salary</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Per week</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Class</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Subject</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Tui.Code</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Gender</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Medium</th>
                        <th className="py-2 px-2 text-sm text-left border-b">Category</th>
                        <th className="py-2 px-2 text-sm border-b text-end">Action</th>
                    </tr>
                </thead>
                {
                    jobs?.length > 0 ? (
                        <tbody>
                            {jobs.map((job, index) => (
                                <tr key={job?._id} className="hover:bg-slate-200 border-b transition duration-300">
                                    <td className="px-1 border-b text-sm font-normal">{index + 1}</td>
                                    <td
                                        onClick={() => handleRowClick(job?._id)}
                                        className="py-1 px-2 border-b text-sm font-normal">{job?.jobLocation}</td>
                                    <td
                                        onClick={() => handleRowClick(job?._id)}
                                        className="py-1 px-2 border-b text-sm font-normal">{job?.jobSalary}k</td>
                                    <td
                                        onClick={() => handleRowClick(job?._id)}
                                        className="py-1 px-2 border-b text-sm font-normal">{job?.perWeek} days</td>
                                    <td
                                        onClick={() => handleRowClick(job?._id)}
                                        className="py-1 px-2 border-b text-sm font-normal">{job?.className}</td>
                                    <td
                                        onClick={() => handleRowClick(job?._id)}
                                        className={`py-1 px-2 border-b text-sm font-normal text-center 
                                ${job?.subject === 'Science' ? 'bg-sky-300 text-white'
                                                : job?.subject === "Commerce" ? 'bg-green-400 text-white'
                                                    : job?.subject === "Arch" ? 'bg-orange-300'
                                                        : job?.subject === "Mathematics" ? 'bg-teal-600 text-white'
                                                            : job?.subject === "English" ? 'bg-blue-500 text-white'
                                                                : job?.subject === "Quran" ? 'bg-pink-400 text-slate-500'
                                                                    : job?.subject === "All" ? 'bg-green-400 text-slate-700'
                                                                        : "bg-slate-500 text-white"
                                            }`}
                                    >
                                        {job?.subject}
                                    </td>
                                    <td
                                        onClick={() => handleRowClick(job?._id)}
                                        className="py-1 px-2 border-b text-sm font-normal">{job?.tuitionCode}</td>
                                    <td
                                        onClick={() => handleRowClick(job?._id)}
                                        className="py-1 px-2 border-b text-sm font-normal">{job?.tutorGender}</td>
                                    <td
                                        onClick={() => handleRowClick(job?._id)}
                                        className="py-1 px-2 border-b text-sm font-normal">{job?.medium}</td>
                                    <td className={`py-1 px-2 border-b text-sm font-normal text-center 
                                ${job?.jobCategory === 'Home' ? 'bg-sky-500'
                                            : job?.jobCategory === 'Online' ? "bg-orange-400"
                                                : "bg-green-400"}`} >
                                        {job?.jobCategory}
                                    </td>
                                    <td className="py-1 px-2 border-b text-end">
                                        <button
                                            onClick={() => handleDeleteById(`api/tuition-job/${job?._id}`,
                                                "tuition",
                                                "Your Tuition Job")}
                                            className="bg-red-400 hover:bg-red-500 transition-all duration-200 text-white py-1 px-2 rounded-md"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <EmptyDataUiShow />
                    )
                }
            </table>

            {/* Pagination Controls */}
            <Pagination
                totalPage={totalPage}
                currentPage={currentPage}
                nextPage={nextPage}
                setPage={setPage}
                previousPage={previousPage}
            />
        </div>
    );
};

export default AllTuitionJobs;
