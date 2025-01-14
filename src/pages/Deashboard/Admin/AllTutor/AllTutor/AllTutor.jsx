import { useState } from "react";
import PageTitleShow from "../../../../../Components/PageTitleShow/PageTitleShow";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../../Components/Loading/Loading";
import { allTutor } from "../../../../../api/allTutor";
import Pagination from "../../../../../Components/Pagination/Pagination";
import EmptyDataUiShow from "../../../../../Components/EmptyDataUiShow/EmptyDataUiShow";

const AllTutor = () => {
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [submittedSearchText, setSubmittedSearchText] = useState("");
    const navigate = useNavigate();

    const [tutors, refetch, isLoading] = allTutor(page, submittedSearchText);
    const { tutors: tutor, pagination } = tutors || {};

    console.log(tutor);
    console.log(pagination);

    const { currentPage, nextPage, previousPage, totalPage } = pagination || {};

    const handleRowClick = (id) => {
        navigate(`/tutor-details/${id}`);
    };

    const handlerSearch = () => {
        setSubmittedSearchText(searchText)
        refetch();
    };

    // TODO TUITION JOBS DELETED 


    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="overflow-x-auto">
            <div className="bg-white rounded-md md:mt-6 mt-4">
                <PageTitleShow currentPage="All Tutor |" />
                <div className="md:flex items-center justify-between md:px-6 px-3 md:pt-4 md:pb-2 py-2 rounded-xl shadow-xl bg-white">
                    <div className="md:w-4/6 mb-2 flex items-center gap-1">
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            type="text"
                            value={searchText}
                            placeholder="Search Your Tuition Code"
                            className="md:px-9 px-2 md:py-[10px] md:w-4/6 w-2/3 md:mr-2 mr-1 py-[6px] placeholder:text-slate-300 text-slate-500 border border-blue-200 rounded-tl-md rounded-bl-md focus:outline-none md:placeholder:text-sm placeholder:text-xs focus:outline-blue-400 focus:outline-double"
                        />
                        <button
                            onClick={handlerSearch}
                            className="py-[9px] md:px-3 px-2 md:w-1/6 w-1/3 bg-sky-600 text-white rounded-br-md rounded-tr-md md:text-lg text-sm tracking-wider"
                        >
                            Search
                        </button>
                    </div>
                    <h2 className="md:w-2/6 md:text-right text-left md:text-2xl text-xl font-medium text-slate-700">Total Tutor = <span className="text-blue-500 text-2xl font-semibold">({tutor?.length})</span></h2>
                </div>

                <table className="min-w-[100%] border mx-auto bg-white border-gray-200 md:my-4 my-2 shadow-lg">
                    <thead>
                        <tr className="bg-[#282727] text-white">
                            <th className="py-2 text-sm text-center border-b"></th>
                            <th className="py-2 text-sm text-center border-b">Name</th>
                            <th className="py-2 text-sm text-center border-b">Group/Sub</th>
                            <th className="py-2 text-sm text-center border-b">C. University</th>
                            <th className="py-2 text-sm text-center border-b">Experian</th>
                            <th className="py-2 text-sm text-center border-b">Expert Salary</th>
                            <th className="py-2 text-sm text-center border-b">C. Student</th>
                            <th className="py-2 text-sm text-center border-b">Gender</th>
                            <th className="py-2 text-sm text-center border-b">Address</th>
                        </tr>
                    </thead>
                    {
                        tutor?.length > 0 ? (
                            <tbody className="">
                                {
                                    tutor.map((data, index) =>
                                        <tr
                                            key={data?._id}
                                            onClick={() => handleRowClick(data?._id)}
                                            className={`hover:bg-gray-100 transition duration-300`} title={data?.name}>
                                            <td className="py-1 text-sm text-center border-b">{index + 1}</td>
                                            <td className="py-1 text-sm text-center border-b">{data?.name}</td>
                                            <td className="py-1 text-sm text-center border-b">Sciences</td>
                                            <td className="py-1 text-sm text-center border-b">Dhaka International University</td>
                                            <td className="py-1 text-sm text-center border-b">4 Years</td>
                                            <td className="py-1 text-sm text-center border-b">5 K</td>
                                            <td className="py-1 text-sm text-center border-b"> 4 Student</td>
                                            <td className="py-1 text-sm text-center border-b">{data?.gender}</td>
                                            <td className="py-1 text-sm text-center border-b">{data?.address}</td>
                                        </tr>
                                    )}
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
        </div>
    );
};

export default AllTutor;