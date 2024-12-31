import { useState } from "react";
import PageTitleShow from "../../../../../Components/PageTitleShow/PageTitleShow";
import ApproveBlog from "./ApproveBlog";
import PendingBlog from "./PendingBlog";
import { useAllBlogs } from "../../../../../api/useAllBlog";
import Loading from "../../../../../Components/Loading/Loading";

const AllBlog = () => {
    const [requestApprove, setRequestApprove] = useState(false);

    const [page, setPage] = useState(1);
    const [searchText, setSearchText] = useState("");

    const [blogs, refetch, isLoading] = useAllBlogs(page, searchText);
    const { blogs: blogList = [] } = blogs || {};

    const approveBlog = blogList?.filter((singleBlog) => singleBlog?.isBlog === true) || [];
    const pendingBlog = blogList?.filter((singleBlog) => singleBlog?.isBlog === false) || [];

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="py-1">
            <div className="md:my-5 my-3 w-full max-w-full overflow-hidden rounded-lg border bg-white dark:border-zinc-700 dark:bg-zinc-900">
                <PageTitleShow currentPage="Blogs" />
                <div className={`flex select-none md:gap-2 gap-[2px] border-b md:p-2.5 p-1 *:flex-1 *:rounded-md *:border *:p-2 *:text-center *:uppercase *:shadow-inner *:outline-none dark:border-zinc-700 *:dark:border-zinc-600 ${requestApprove ? 'last-of-type:*:bg-blue-400 last-of-type:*:text-white' : 'first-of-type:*:bg-orange-400 first-of-type:*:text-white'}`}>
                    <button onClick={() => setRequestApprove(false)}>Pending</button>
                    <button onClick={() => setRequestApprove(true)}>Approve</button>
                </div>

                <div className="w-full md:flex-col items-center overflow-hidden p-2 sm:p-5">
                    {/*Approve section */}
                    <div className={`${requestApprove ? 'h-full duration-300' : 'invisible h-0 opacity-0'}`}>
                        <ApproveBlog approveBlog={approveBlog} />
                    </div>
                    {/* Request section */}
                    <div className={`${requestApprove ? 'h-0 opacity-0' : 'h-full duration-300'}`}>
                        <PendingBlog pendingBlog={pendingBlog} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBlog;