import { useState } from "react";
import { useAllBlogs } from "../../../../api/useAllBlog";
import Loading from "../../../../Components/Loading/Loading";
import PageTitleShow from "../../../../Components/PageTitleShow/PageTitleShow";

const ShowYourBlog = () => {
    const [searchText, setSearchText] = useState("");
    const [submittedSearchText, setSubmittedSearchText] = useState("");

    const blogUserId = '142563';
    const [blogs, refetch, isLoading] = useAllBlogs(1, submittedSearchText);
    const { blogs: blogList = [] } = blogs || {};
    console.log('object', blogList);
    const blogUserIdFinding = blogList?.filter((singleBlog) => singleBlog?.userId === blogUserId) || [];
    // const pendingBlog = blogList?.filter((singleBlog) => singleBlog?.isBlog === false) || [];
    console.log("blogUserId ===>>", blogUserIdFinding);

    // TODO BLOG DELETED AND APPROVE

    const handlerSearch = () => {
        setSubmittedSearchText(searchText)
        refetch();
    };

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="relative overflow-x-auto">
            <PageTitleShow currentPage="Your Blog |" />
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
                            className={`${blog === true ? "bg-white-300 hover:bg-slate-200" : "bg-red-300 hover:bg-red-200"} relative cursor-pointer transition-all duration-300 `}
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowYourBlog;