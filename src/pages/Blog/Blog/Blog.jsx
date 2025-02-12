import { useState } from "react";
import { useAllBlogs } from "../../../api/useAllBlog";
import EmptyDataUiShow from "../../../Components/EmptyDataUiShow/EmptyDataUiShow";
import { Link } from "react-router-dom";
import Pagination from "../../../Components/Pagination/Pagination";

const Blog = () => {
    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");
    const [submittedSearchText, setSubmittedSearchText] = useState("");

    const [blogs, refetch, isLoading] = useAllBlogs(1, submittedSearchText);
    const { blogs: blogList = [] } = blogs || {};

    const approveBlog = blogList?.filter((singleBlog) => singleBlog?.isBlog === true) || [];
    console.log("blog section  1222===>>", blogs?.pagination);
    console.log("blog section  ===>>", approveBlog);

    return (
        <div className="md:max-w-7xl mx-auto md:py-12 py-5">
            {
                approveBlog?.length > 0 ? (
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 pb-5">
                        {approveBlog?.map((blog) => (
                            <div
                                key={blog?._id}
                                className="w-full bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-sky-200 flex flex-col transition-all duration-300"
                            >
                                <div>
                                    <img
                                        className="h-[250px] w-full rounded-t-lg object-cover"
                                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt=""
                                    />
                                </div>
                                <div className="px-3 py-5 flex-grow">
                                    <h3 className="text-base font-bold text-left">{blog?.title}</h3>
                                    <p className="text-sm font-normal text-justify">{blog?.description}</p>
                                    <p className="text-sm font-normal pt-2">
                                        Author Name: <span className="font-semibold">{blog?.authorName}</span>
                                    </p>
                                    <p className="text-sm font-normal">
                                        Time:{" "}
                                        <span className="font-normal">
                                            {new Date(blog?.createdAt).toLocaleDateString()}{" "}
                                            <span className="font-semibold">
                                                {new Date(blog?.createdAt).toLocaleTimeString()}
                                            </span>
                                        </span>
                                    </p>
                                </div>
                                <div className="pb-4 pr-4 flex items-end justify-end gap-4 ">
                                    <Link to={`/blogs-details/${blog?._id}`}
                                        className="bg-blue-400 text-sm font-medium tracking-wide py-2 px-3 rounded-lg text-white hover:bg-blue-500 hover:scale-105 transition-all duration-200"
                                    >Details </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <EmptyDataUiShow />
                )
            }

            <div className="flex justify-center my-6">
                <Pagination
                    totalPage={blogs?.pagination?.totalPage}
                    currentPage={blogs?.pagination?.currentPage}
                    nextPage={blogs?.pagination?.nextPage}
                    setPage={setPage}
                    previousPage={blogs?.pagination?.previousPage}
                />
            </div>
        </div>
    );
};

export default Blog;