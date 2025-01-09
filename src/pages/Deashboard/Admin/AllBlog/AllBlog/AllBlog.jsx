import { useState } from "react";
import PageTitleShow from "../../../../../Components/PageTitleShow/PageTitleShow";
import ApproveBlog from "./ApproveBlog";
import PendingBlog from "./PendingBlog";
import { useAllBlogs } from "../../../../../api/useAllBlog";
import { useDeleteItemById } from "../../../../../Components/DeletedItem/DeletedItem";

const AllBlog = () => {
    const [requestApprove, setRequestApprove] = useState(false);

    const [searchText, setSearchText] = useState("");
    const [submittedSearchText, setSubmittedSearchText] = useState("");

    const [blogs, refetch, isLoading] = useAllBlogs(1, submittedSearchText);
    const { blogs: blogList = [] } = blogs || {};

    const approveBlog = blogList?.filter((singleBlog) => singleBlog?.isBlog === true) || [];
    const pendingBlog = blogList?.filter((singleBlog) => singleBlog?.isBlog === false) || [];

    // TODO BLOG DELETED AND APPROVE
    const { handleDeleteById, isDeleting } = useDeleteItemById(refetch);

    const handlerSearch = () => {
        setSubmittedSearchText(searchText)
        refetch();
    };

    return (
        <div className="py-1">
            <div className="md:my-5 my-3 w-full max-w-full overflow-hidden rounded-lg border bg-white dark:border-zinc-700 dark:bg-zinc-900">
                <PageTitleShow currentPage="Blogs |" />
                {/* seacrh filte */}
                <div className="flex items-center justify-between md:px-6 px-3 md:pt-4 md:pb-2 py-2 rounded-xl shadow-xl mt-2 bg-white">
                    <div className="w-5/6 mb-2 ">
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            type="text"
                            value={searchText}
                            placeholder="Search Blog title subject author name category"
                            className="md:px-9 px-2 md:py-[10px] md:w-4/6 md:mr-2 mr-1 py-2 placeholder:text-slate-300 text-slate-500 border border-blue-200 rounded-tl-md rounded-bl-md focus:outline-none focus:outline-blue-400 focus:outline-double"
                        />
                        <button
                            onClick={handlerSearch}
                            className="py-[9px] md:px-3 px-2 md:w-1/6 bg-sky-600 text-white rounded-br-md rounded-tr-md text-lg tracking-wider"
                        >
                            Search
                        </button>
                    </div>
                </div>
                {/* change this target button */}
                <div className={`flex select-none md:gap-2 gap-[2px] border-b md:p-2.5 p-1 *:flex-1 *:rounded-md *:border *:p-2 *:text-center *:uppercase *:shadow-inner *:outline-none dark:border-zinc-700 *:dark:border-zinc-600 ${requestApprove ? 'last-of-type:*:bg-blue-400 last-of-type:*:text-white' : 'first-of-type:*:bg-orange-400 first-of-type:*:text-white'}`}>
                    <button onClick={() => setRequestApprove(false)}>Pending</button>
                    <button onClick={() => setRequestApprove(true)}>Approve</button>
                </div>

                <div className="w-full md:flex-col items-center overflow-hidden p-2 sm:p-5">
                    {/*Approve section */}
                    <div className={`${requestApprove ? 'h-full duration-300' : 'invisible h-0 opacity-0'}`}>
                        <ApproveBlog approveBlog={approveBlog} isLoading={isLoading} refetch={refetch} />
                    </div>
                    {/* Request section */}
                    <div className={`${requestApprove ? 'h-0 opacity-0' : 'h-full duration-300'}`}>
                        <PendingBlog pendingBlog={pendingBlog} isLoading={isLoading} refetch={refetch} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlog;