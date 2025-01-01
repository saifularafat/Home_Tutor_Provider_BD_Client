import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../../Components/Loading/Loading";
import { useAllContactMessage } from "../../../../../api/useAllContactMessage";
import Pagination from "../../../../../Components/Pagination/Pagination";
import PageTitleShow from "../../../../../Components/PageTitleShow/PageTitleShow";

const InboxMessage = () => {
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [submittedSearchText, setSubmittedSearchText] = useState("");
    const navigate = useNavigate();

    const [contacts, refetch, isLoading] = useAllContactMessage(page, submittedSearchText);
    const { contacts: contact, pagination } = contacts || {};
    const { currentPage, nextPage, previousPage, totalPage, totalNumberOfContact } = pagination || {};

    // TODO MESSAGE SEARCH IS DON'T WORKING

    const handleSearch = () => {
        setSubmittedSearchText(searchText);
        console.log('object', searchText);
        refetch();
    };

    const handleRowClick = (id) => {
        navigate(`/message/details/${id}`);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="md:pb-6 md:pt-2 text-center">
            <PageTitleShow currentPage="Inbox Messages" />

            {/* Search Section */}
            <div className="flex items-center md:mb-4 mb-2 justify-between md:px-6 px-3 md:pt-4 md:pb-2 py-2 rounded-xl shadow-md mt-2 bg-white">
                <div className="w-5/6 mb-2">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
                        value={searchText}
                        placeholder="Search by name, email"
                        className="md:px-9 px-2 md:py-[10px] md:w-4/6 md:mr-2 mr-1 py-2 placeholder:text-slate-300 text-slate-500 border border-blue-200 rounded-tl-md rounded-bl-md focus:outline-none focus:outline-blue-400 focus:outline-double"
                    />
                    <button
                        onClick={handleSearch}
                        className="py-[9px] md:px-3 px-2 md:w-1/6 bg-sky-600 text-white rounded-br-md rounded-tr-md text-lg tracking-wider"
                    >
                        Search
                    </button>
                </div>
                <h2 className="w-2/6 text-right text-xl font-medium text-slate-700">
                    Total Messages: <span className="text-blue-500 text-2xl font-semibold">
                        ({totalNumberOfContact})
                    </span>
                </h2>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto shadow-md md:mb-5 mb-2">
                <table className="table border border-x-white border-b-sky-400 rounded-md">
                    <thead>
                        <tr className="bg-blue-400 text-slate-800 font-medium text-lg text-center">
                            <th>#</th>
                            <th>User Id</th>
                            <th>Contact Name</th>
                            <th>Contact Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contact?.map((message, index) => (
                            <tr
                                onClick={() => handleRowClick(message?._id)}
                                key={message._id}
                                className={
                                    index % 2 === 0
                                        ? "bg-base-200 text-sm font-normal hover:bg-sky-200 text-center"
                                        : "text-sm font-normal hover:bg-green-200 text-center"
                                }
                            >
                                <td>{index + 1}</td>
                                <td>
                                    {message.userId}
                                </td>
                                <td>
                                    {message.contactName}
                                </td>
                                <td>
                                    {message.contactEmail}
                                </td>
                                <td>
                                    {message.message}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
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

export default InboxMessage;
