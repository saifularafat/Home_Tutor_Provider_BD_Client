import { useState } from "react";
import { useAllBlogs } from "../../../../api/useAllBlog";
import Loading from "../../../../Components/Loading/Loading";
import PageTitleShow from "../../../../Components/PageTitleShow/PageTitleShow";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ShowYourBlog = () => {
    const [searchText, setSearchText] = useState("");

    const blogUserId = '142563';

    const [blogs, refetch, isLoading] = useAllBlogs(1, searchText);
    const { blogs: blogList = [] } = blogs || {};
    console.log('object', blogList);
    const blogUserIdFinding = blogList?.filter((singleBlog) => singleBlog?.userId === blogUserId) || [];
    // const pendingBlog = blogList?.filter((singleBlog) => singleBlog?.isBlog === false) || [];
    console.log("blogUserId ===>>", blogUserIdFinding);

    // TODO BLOG DELETED AND APPROVE

    const handleBlogEditById = (id) => {
        console.log('Edit', id);
    }
    const handleBlogDeleteById = (id) => {
        console.log('Delete ===>', id);

    }

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="relative overflow-x-auto">
            <PageTitleShow currentPage="Your Blogs |" />
            <div className="flex items-center justify-between py-5">
                <h2 className="text-2xl font-medium text-center text-slate-900">Your All Blogs </h2>
                <div className="flex items-center justify-end gap-3 shadow-2xl shadow-black">
                    <div className="flex items-center gap-2">
                        <span>Approve</span>
                        <span className="py-3 px-3 rounded-xl bg-white"></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Pending</span>
                        <span className="py-3 px-3 rounded-xl bg-red-300"></span>
                    </div>
                </div>
            </div>
            <table className="w-full border-collapse border border-gray-200 text-left text-sm">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-200 px-4 py-2">#</th>
                        <th className="border border-gray-200 px-4 py-2">image</th>
                        <th className="border border-gray-200 px-4 py-2">Name</th>
                        <th className="border border-gray-200 px-4 py-2">Subject</th>
                        <th className="border border-gray-200 px-4 py-2">Title</th>
                        <th className="border border-gray-200 px-4 py-2">Medium</th>
                        <th className="border border-gray-200 px-4 py-2">Code</th>
                        <th className="border border-gray-200 px-4 py-2">Category</th>
                        <th className="border border-gray-200 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogUserIdFinding.map((blog, index) => (
                        <tr
                            key={blog?._id}
                            className={`${blog?.isBlog === true ? "bg-white-300 hover:bg-slate-200" : "bg-red-300 hover:bg-red-200"} relative cursor-pointer transition-all duration-300 `}
                        // onClick={() => handleRowClick(blog?._id)}
                        >
                            <td className="border border-gray-200 px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-200 px-4 py-1">
                                <img src={blog?.image} alt="coaching logo" className="h-12 w-12 rounded-lg object-cover" />
                            </td>
                            <td className="border border-gray-200 px-4 py-2">{blog?.authorName}</td>
                            <td className="border border-gray-200 px-4 py-2">{blog?.subject}</td>
                            <td className="border border-gray-200 px-4 py-2">{blog?.title}</td>
                            <td className="border border-gray-200 px-4 py-2">{blog?.medium}</td>
                            <td className="border border-gray-200 px-4 py-2">{blog?.blogCode}</td>
                            <td className="border border-gray-200 px-4 py-2">{blog?.category}</td>
                            <td className="border border-gray-200 px-4 py-2">
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleBlogEditById(blog?._id)}
                                        title="Edit"
                                        className={`${blog?.isBlog === true ? "bg-green-400 hover:bg-white hover:text-green-400 text-white" : " text-green-500 bg-white"}  py-[6px] px-[6px] rounded-xl transition-all duration-300`}
                                    >
                                        <FaEdit className="text-lg" />
                                    </button>
                                    <button
                                        onClick={() => handleBlogDeleteById(blog?._id)}
                                        title="Delete"
                                        className={`${blog?.isBlog === true ? "bg-red-400 hover:bg-white hover:text-red-400 text-white" : " text-red-500 bg-white"}  py-[6px] px-[6px] rounded-xl transition-all duration-300`}
                                    >
                                        <MdDelete className="text-lg" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowYourBlog;