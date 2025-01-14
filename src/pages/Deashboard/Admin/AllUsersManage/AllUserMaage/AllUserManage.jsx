import { useState } from "react";
import { useAllUsers } from "../../../../../api/useAllUsers";
import Loading from "../../../../../Components/Loading/Loading";
import Pagination from "../../../../../Components/Pagination/Pagination";
import PageTitleShow from "../../../../../Components/PageTitleShow/PageTitleShow";
import EmptyDataUiShow from "../../../../../Components/EmptyDataUiShow/EmptyDataUiShow";
import { useManageAction } from "../../../../../Components/useManageAction/useManageAction";
import { useDeleteItemById } from "../../../../../Components/DeletedItem/DeletedItem";

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
    const { handleManageAction } = useManageAction(refetch);

    const { handleDeleteById } = useDeleteItemById(refetch);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="bg-white py-5 px-4 rounded-lg my-6">
            <PageTitleShow currentPage="All Users |" />
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
                        onClick={handleSearch}
                        className="py-[9px] md:px-3 px-2 md:w-1/6 w-1/3 bg-sky-600 text-white rounded-br-md rounded-tr-md md:text-lg text-sm tracking-wider"
                    >
                        Search
                    </button>
                </div>
                <h2 className="md:w-2/6 md:text-right text-left md:text-2xl text-xl font-medium text-slate-700">Total Tutor = <span className="text-blue-500 md:text-2xl font-semibold">({totalNumberOfUser})</span></h2>
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
                    {
                        allUsers?.length > 0 ? (
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
                                                    onClick={() =>
                                                        handleManageAction(
                                                            `api/users/manage-user/${user?._id}`,
                                                            "unBan",
                                                            "User unBan",
                                                            "Admin User unBan"
                                                        )
                                                    }
                                                    className="bg-rose-600 hover:bg-slate-300 hover:text-slate-800 font-medium text-white rounded-lg btn-sm transition duration-300"
                                                >
                                                    UnBan
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        handleManageAction(
                                                            `api/users/manage-user/${user?._id}`,
                                                            "ban",
                                                            "User Ban",
                                                            "Admin User ban"
                                                        )
                                                    }
                                                    className="bg-warning btn btn-ghost btn-sm"
                                                >
                                                    Ban
                                                </button>
                                            )}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    handleDeleteById(
                                                        `api/users/${user?._id}`,
                                                        "User",
                                                        "Your User"
                                                    )
                                                }
                                                className="text-white bg-red-700 rounded-md btn-sm"
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
            </div>

            {/* pagination */}
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