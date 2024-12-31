import { useState } from "react";
import PageTitleShow from "../../../../../Components/PageTitleShow/PageTitleShow";
import { useAllRequestJobs } from "../../../../../api/useAllRequestJobs";
import ApproveJobs from "./ApproveJobs";
import PendingJobs from "./PendingJobs";

const AllJobsRequestApprove = () => {
    const [requestApprove, setRequestApprove] = useState(false);

    const [payloads, refetch, isLoading] = useAllRequestJobs();
    const { tutorJobApplies = [] } = payloads || { tutorJobApplies: [] };

    const approveJob = tutorJobApplies?.filter((singleJob) => singleJob?.isJobApply === true) || [];
    const pendingJob = tutorJobApplies?.filter((singleJob) => singleJob?.isJobApply === false) || [];

    return (
        <div className="md:my-8 my-4 w-full max-w-full overflow-hidden rounded-lg border bg-white dark:border-zinc-700 dark:bg-zinc-900">
            <PageTitleShow currentPage="Request Approve" />
            <div className={`flex select-none md:gap-2 gap-[2px] border-b md:p-2.5 p-1 *:flex-1 *:rounded-md *:border *:p-2 *:text-center *:uppercase *:shadow-inner *:outline-none dark:border-zinc-700 *:dark:border-zinc-600 ${requestApprove ? 'last-of-type:*:bg-blue-400 last-of-type:*:text-white' : 'first-of-type:*:bg-orange-400 first-of-type:*:text-white'}`}>
                <button onClick={() => setRequestApprove(false)}>Pending</button>
                <button onClick={() => setRequestApprove(true)}>Approve</button>
            </div>

            <div className="w-full md:flex-col items-center overflow-hidden p-2 sm:p-5">
                {/*Approve section */}
                <div className={`${requestApprove ? 'h-full duration-300' : 'invisible h-0 opacity-0'}`}>
                    <ApproveJobs approveJob={approveJob} isLoading={isLoading} />
                </div>
                {/* Pending section */}
                <div className={`${requestApprove ? 'h-0 opacity-0' : 'h-full duration-300'}`}>
                    <PendingJobs pendingJob={pendingJob} isLoading={isLoading} />
                </div>
            </div>
        </div>
    );
};

export default AllJobsRequestApprove;