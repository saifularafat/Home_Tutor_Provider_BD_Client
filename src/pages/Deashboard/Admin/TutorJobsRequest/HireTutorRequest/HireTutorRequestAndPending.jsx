import { useState } from "react";
import { useParentRequestTutor } from "../../../../../api/useAllParentHireRequestToTutor";
import PageTitleShow from "../../../../../Components/PageTitleShow/PageTitleShow";
import ApproveHire from "./ApproveHire";
import PendingHire from "./PendingHire";

const HireTutorRequestAndPending = () => {
    const [requestApprove, setRequestApprove] = useState(false);

    const [payload, refetch, isLoading] = useParentRequestTutor();
    const { tutorRequest = [] } = payload || { tutorRequest: [] }
    // console.log("HireTutorRequestAndPending", tutorRequest);
    // console.log("pagination", pagination); 

    const approveHire = tutorRequest?.filter((singleHire) => singleHire?.isTutorRequest === true) || [];
    const pendingHire = tutorRequest?.filter((singleHire) => singleHire?.isTutorRequest === false) || [];

    return (
        <div className="md:my-8 my-4 w-full max-w-full overflow-hidden rounded-lg border bg-white dark:border-zinc-700 dark:bg-zinc-900">
            <PageTitleShow currentPage="Hire Tutor Request Approve |" />
            <h2 className="text-2xl font-bold text-slate-800 text-center capitalize py-3">Hire Tutor with Guardian <span className="text-red-500 underline">Request</span> And <span className="text-blue-500 underline">Pending</span></h2>
            <div className={`flex select-none md:gap-2 gap-[2px] border-b md:p-2.5 p-1 *:flex-1 *:rounded-md *:border *:p-2 *:text-center *:uppercase *:shadow-inner *:outline-none dark:border-zinc-700 *:dark:border-zinc-600 ${requestApprove ? 'last-of-type:*:bg-blue-400 last-of-type:*:text-white' : 'first-of-type:*:bg-orange-400 first-of-type:*:text-white'}`}>
                <button onClick={() => setRequestApprove(false)}>Pending</button>
                <button onClick={() => setRequestApprove(true)}>Approve</button>
            </div>

            <div className="w-full md:flex-col items-center overflow-hidden p-2 sm:p-5">
                {/*Approve section */}
                <div className={`${requestApprove ? 'h-full duration-300' : 'invisible h-0 opacity-0'}`}>
                    <ApproveHire approveHire={approveHire} refetch={refetch} isLoading={isLoading} />
                </div>
                {/* Pending section */}
                <div className={`${requestApprove ? 'h-0 opacity-0' : 'h-full duration-300'}`}>
                    <PendingHire pendingHire={pendingHire} refetch={refetch} isLoading={isLoading} />
                </div>
            </div>
        </div>
    );
};

export default HireTutorRequestAndPending;