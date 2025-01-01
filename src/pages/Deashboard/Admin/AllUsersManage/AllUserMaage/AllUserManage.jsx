import { useState } from "react";
import { useAllUsers } from "../../../../../api/useAllUsers";
import Loading from "../../../../../Components/Loading/Loading";
import Pagination from "../../../../../Components/Pagination/Pagination";
import PageTitleShow from "../../../../../Components/PageTitleShow/PageTitleShow";

const AllUserManage = () => {
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [submittedSearchText, setSubmittedSearchText] = useState("");
    const [users, refetch, isLoading] = useAllUsers(page, submittedSearchText);

    const { users: allUsers, pagination } = users || {};
    const { currentPage, nextPage, previousPage, totalPage, totalNumberOfUser } = pagination || {};

    const handleSearch = () => {
        setSubmittedSearchText(searchText);
        refetch();
    };

    // TODO USER DELETED USER BANNED AND UNBANNED

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="bg-white py-5 px-4 rounded-lg my-6">
            <PageTitleShow currentPage="All Users" />
            <div className="flex items-center justify-between md:px-6 px-3 md:pt-4 md:pb-2 py-2 rounded-xl shadow-xl mt-2 bg-white">
                <div className="w-4/6 mb-2">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
                        value={searchText}
                        placeholder="Search Your Tuition Code"
                        className="md:px-9 px-2 md:py-[10px] md:w-4/6 md:mr-2 mr-1 py-2 placeholder:text-slate-300 text-slate-500 border border-blue-200 rounded-tl-md rounded-bl-md focus:outline-none focus:outline-blue-400 focus:outline-double"
                    />
                    <button
                        onClick={handleSearch}
                        className="py-[9px] md:px-3 px-2 md:w-1/6 bg-sky-600 text-white rounded-br-md rounded-tr-md text-lg tracking-wider"
                    >
                        Search
                    </button>
                </div>
                <h2 className="w-2/6 text-right text-xl font-medium text-slate-700">Total Tutor = <span className="text-blue-500 text-2xl font-semibold">({totalNumberOfUser})</span></h2>
            </div>

            <div className="overflow-x-auto p-4 min-h-[80vh]">
                <table className="table">
                    <thead className="text-sm text-info">
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>User Id</th>
                            <th>Banned</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allUsers?.map((user, index) => (
                            <tr key={user?._id}>
                                <td>{index + 1}</td>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>
                                    {user?.isAdmin ? "Admin" : user?.isTutor ? "Tutor" : user?.isParent ? "Parent" : user?.isCoaching ? "Coaching" : user?.isBanned ? "Banned" : "Active"}
                                </td>
                                <td>{user?.userId}</td>
                                <td>
                                    {user.isBanned ? (
                                        <button
                                            // onClick={() => handleMakeAdmin(user)}
                                            className="bg-rose-600 hover:bg-slate-300 hover:text-slate-800 font-medium text-white rounded-lg btn-sm transition duration-300"
                                        >
                                            UnBan
                                        </button>
                                    ) : (
                                        <button
                                            // onClick={() => handleMakeAdmin(user)}
                                            className="bg-warning btn btn-ghost btn-sm"
                                        >
                                            Ban
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button
                                        // onClick={() => handleDeleteUser(user)}
                                        className="text-white bg-red-700 rounded-md btn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-center my-6">
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

export default AllUserManage;