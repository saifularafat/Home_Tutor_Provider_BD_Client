import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApproveBlog = ({ approveBlog }) => {
    const [hoveredRow, setHoveredRow] = useState(null);
    const navigate = useNavigate();

    const handleRowClick = (id) => {
        navigate(`/details/${id}`);
    };

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
                        <th className="border border-gray-200 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {approveBlog.map((blog, index) => (
                        <tr
                            key={blog?._id}
                            className="relative cursor-pointer hover:bg-gray-50 even:bg-gray-50"
                            onClick={() => handleRowClick(blog?._id)}
                            onMouseEnter={() => setHoveredRow(index)} 
                            onMouseLeave={() => setHoveredRow(null)} 
                        >
                            <td className="border border-gray-200 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-200 px-4 py-2">{blog?.authorName}</td>
                            <td className="border border-gray-200 px-4 py-2">{blog?.authorStudySubject}</td>
                            <td className="border border-gray-200 px-4 py-2">{blog?.medium}</td>
                            <td className="border border-gray-200 px-4 py-2">{blog?.blogCode}</td>
                            <td className="border border-gray-200 px-4 py-2">
                                <div className="flex gap-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            alert(`Deleting ${blog?.authorName}`);
                                        }}
                                        className="text-red-600 hover:underline"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                            {/* Custom tooltip */}
                            {hoveredRow === index && blog?.description && (
                                <td
                                    colSpan="6"
                                    className="absolute left-0 top-0 z-10 w-full bg-gray-800/80 text-white h-full text-sm px-2"
                                >
                                    <div className="leading-3 font-medium">Title: {blog?.title}</div>
                                    <div className="text-sm">Description: {blog?.description}</div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApproveBlog;
