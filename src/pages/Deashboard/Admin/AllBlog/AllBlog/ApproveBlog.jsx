import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../../Components/Loading/Loading";
import { useDeleteItemById } from "../../../../../Components/DeletedItem/DeletedItem";
import { useManageAction } from "../../../../../Components/useManageAction/useManageAction";
import EmptyDataUiShow from "../../../../../Components/EmptyDataUiShow/EmptyDataUiShow";

const ApproveBlog = ({ approveBlog, isLoading, refetch }) => {
    console.log('object ==>>', approveBlog);
    const [hoveredRow, setHoveredRow] = useState(null);
    const navigate = useNavigate();

    const { handleManageAction } = useManageAction(refetch);
    const { handleDeleteById, isDeleting } = useDeleteItemById(refetch);

    const handleRowClick = (id) => {
        navigate(`/details/${id}`);
    };

    if (isLoading || isDeleting) {
        return <Loading />
    }
    return (
        <div className="relative overflow-x-auto">
            <h2 className="text-sm font-normal text-center text-orange-500">Author All Information</h2>
            <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-200 px-4 py-2">#</th>
                        <th className="border border-gray-200 px-4 py-2">Name</th>
                        <th className="border border-gray-200 px-4 py-2">Subject</th>
                        <th className="border border-gray-200 px-4 py-2">Code</th>
                        <th className="border border-gray-200 px-4 py-2">Medium</th>
                        <th className="border border-gray-200 px-4 py-2 text-center">Action</th>
                    </tr>
                </thead>
                {
                    approveBlog?.length > 0 ? (
                        <tbody>
                            {approveBlog.map((blog, index) => (
                                <tr
                                    key={blog?._id}
                                    className="relative cursor-pointer hover:bg-gray-50 even:bg-gray-50"
                                    onMouseEnter={() => setHoveredRow(index)}
                                    onMouseLeave={() => setHoveredRow(null)}
                                >
                                    <td
                                        onClick={() => handleRowClick(blog?._id)}

                                        className="border border-gray-200 px-4 py-2">{index + 1}</td>
                                    <td
                                        onClick={() => handleRowClick(blog?._id)}

                                        className="border border-gray-200 px-4 py-2">{blog?.authorName}</td>
                                    <td
                                        onClick={() => handleRowClick(blog?._id)}

                                        className="border border-gray-200 px-4 py-2">{blog?.authorStudySubject}</td>
                                    <td
                                        onClick={() => handleRowClick(blog?._id)}

                                        className="border border-gray-200 px-4 py-2">{blog?.medium}</td>
                                    <td
                                        onClick={() => handleRowClick(blog?._id)}

                                        className="border border-gray-200 px-4 py-2">{blog?.blogCode}</td>
                                    <td className="border border-gray-200 px-4 py-2 text-right">
                                        <div className="flex gap-2 justify-center z-50">
                                            <button
                                                onClick={() =>
                                                    handleManageAction(`api/blog/manage-blog/${blog?._id}`, "pending", "blog", "Blog")
                                                }
                                                className="text-yellow-500 bg-slate-800 px-2 py-1 rounded-lg hover:underline"
                                            >
                                                Pending
                                            </button>
                                            <button
                                                onClick={() => handleDeleteById(`api/blog/${blog?._id}`,
                                                    "blog",
                                                    "Your blog"
                                                )}
                                                className="bg-red-600 text-white px-2 py-1 rounded-lg hover:underline"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                    {/* Custom tooltip */}
                                    {/* {hoveredRow === index && blog?.description && (
                                <td
                                    colSpan="4"
                                    className="absolute left-0 top-0 z-10 w-full bg-gray-800/80 text-white h-full text-sm"
                                >
                                    <div className="leading-3 font-medium">Title: {blog?.title}</div>
                                    <div className="text-sm">Description: {blog?.description}</div>
                                </td>
                            )} */}
                                </tr>
                            ))}
                        </tbody>
                    ) : (
                        <EmptyDataUiShow />
                    )
                }
            </table>
        </div>
    );
};

export default ApproveBlog;
