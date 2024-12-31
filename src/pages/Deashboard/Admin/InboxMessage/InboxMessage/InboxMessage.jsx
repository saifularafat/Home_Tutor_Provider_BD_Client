import { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../../../Components/Loading/Loading";
import { useAllContactMessage } from "../../../../../api/useAllContactMessage";
import Pagination from "../../../../../Components/Pagination/Pagination";

const InboxMessage = () => {
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");

    const [payload, refetch, isLoading] = useAllContactMessage(page, searchText);
    const { contacts: contacts, pagination } = payload || {};

    const { currentPage, nextPage, previousPage, totalPage, totalNumberOfTuition } = pagination || {};

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="py-6 text-center text-3xl font-bold">
            <h3 className="text-xl font-medium text-left pb-2">Total Messages: {totalNumberOfTuition}</h3>
            <div className="overflow-x-auto">
                <table className="table border border-x-white border-b-sky-400 rounded-md">
                    {/* Table Head */}
                    <thead>
                        <tr className="bg-blue-400 text-slate-800 font-medium text-lg text-center">
                            <th className="">User Id</th>
                            <th>Contact Name</th>
                            <th>Contact Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((message, index) => (
                            <tr key={message._id} className={index % 2 === 0 ? "bg-base-200 text-sm font-normal hover:bg-sky-200 text-center" : "text-sm font-normal hover:bg-green-200 text-center"}>
                                <td>
                                    <Link to={message._id}>
                                        {message.userId}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={message._id}>
                                        {message.contactName}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={message._id}>
                                        {message.contactEmail}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={message._id}>
                                        {message.message}
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

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
