import { FaLocationDot } from "react-icons/fa6";
import PageTitleShow from "../../../Components/PageTitleShow/PageTitleShow";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../../Components/Loading/Loading";
import { allTutor } from "../../../api/allTutor";
import Pagination from "../../../Components/Pagination/Pagination";

const TutorProfile = () => {
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");

    const [tutors, refetch, isLoading] = allTutor(page, searchText);
    const { tutors: tutor, pagination } = tutors || {};
    const { currentPage, nextPage, previousPage, totalPage } = pagination || {};

    useEffect(() => {
        refetch();
    }, [page, refetch]);

    const handlerSearch = () => {
        refetch();
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <PageTitleShow currentPage="Tutor Profile" />
            <div className="md:pb-3">
                {/* Search and filter section */}
                <div className=" contain-content mx-auto gap-5 rounded-lg md:py-2 py-3 md:pl-4 px-2">
                    <div className="md:px-6 px-3 md:py-5 py-2 rounded-xl md:shadow-xl shadow-md flex items-center justify-center gap-2">
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            type="text"
                            placeholder="search university name, tutor name, tutor code and location"
                            className="md:w-1/2 w-full px-5 md:py-[10px] py-2 placeholder:text-slate-300 placeholder:text-sm text-slate-500 border border-blue-200 rounded-tl-md rounded-bl-md focus:outline-none focus:outline-blue-400 focus:outline-double"
                        />
                        <button
                            onClick={handlerSearch}
                            className="py-2 md:px-3 px-2 bg-sky-600 text-white rounded-br-md rounded-tr-md text-lg tracking-wider"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:max-w-5xl mx-auto md:py-12 py-6">
                <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-5 mx-3 md:mx-0">
                    {tutor.map((tutor) => (
                        <div
                            key={tutor._id}
                            className="col-span-1 flex flex-col items-center justify-center space-y-4 rounded-xl bg-white p-6 shadow-lg hover:shadow-2xl hover:shadow-sky-300 transition-all duration-200 shadow-blue-400 dark:bg-[#18181B]"
                        >
                            <div className="group relative" title={tutor?.name}>
                                <img
                                    width={110}
                                    height={110}
                                    className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover"
                                    src={tutor.image || "https://via.placeholder.com/110"} 
                                    alt={tutor.name || "Tutor"}
                                />
                                <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-green-500 dark:border-[#18181B]"></span>
                                <span className="absolute bottom-3 right-0 h-5 w-5 animate-ping rounded-full bg-green-500"></span>
                            </div>
                            <div className="space-y-1 text-center">
                                <h1 className="md:text-2xl text-xl font-bold text-[#0369A1]">
                                    {tutor.name || "Unknown"}
                                </h1>
                                <div className="flex items-center justify-center gap-1">
                                    <FaLocationDot className="text-slate-600" />
                                    <span className="text-slate-600 font-medium">
                                        {tutor.address || "Location not available"}
                                    </span>
                                </div>
                            </div>
                            <p className="pb-2 text-center text-sm text-gray-500">
                                {tutor.bio || "No bio available"}
                            </p>
                            <Link
                                to={`/tutor-details/${tutor._id}`}
                                className="w-full text-center rounded-full py-2 text-[12px] font-semibold text-sky-700 ring-1 ring-sky-700 hover:bg-sky-700 hover:text-white sm:text-sm md:text-base"
                            >
                                View Profile
                            </Link>
                        </div>
                    ))}
                </div>
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

export default TutorProfile;
