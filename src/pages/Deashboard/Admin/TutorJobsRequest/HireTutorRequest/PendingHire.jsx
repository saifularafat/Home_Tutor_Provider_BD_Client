import { useDeleteItemById } from "../../../../../Components/DeletedItem/DeletedItem";
import Loading from "../../../../../Components/Loading/Loading";
import { useManageAction } from "../../../../../Components/useManageAction/useManageAction";

const PendingHire = ({ pendingHire, refetch, isLoading }) => {
    console.log("pendingHire Hire 5 ==>>", pendingHire);

    const { handleManageAction } = useManageAction(refetch);
    const { handleDeleteById } = useDeleteItemById(refetch);

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="overflow-x-auto">
            <table className="min-w-[100%] shadow-md border mx-auto border-gray-100">
                {/* head */}
                <thead>
                    <tr className="bg-red-500 text-white">
                        <th className="py-2 pl-1 capitalize text-center border-b font-medium">
                            # 
                        </th>
                        <th className="py-2 pl-1 capitalize text-center border-b font-medium">
                            <p className="text-xs"> Tutor Name</p>
                            <p className="text-[10px] leading-3"> Tutor Id</p>
                        </th>
                        <th className="py-2 pl-1 capitalize text-center border-b font-medium">
                            <p className="text-xs"> Tutor Area</p>
                            <p className="text-[10px] leading-3"> Tutor Phone</p>
                        </th>
                        <th className="py-2 pl-1 capitalize text-center border-b font-medium">
                            <p className="text-xs">Job Subject</p>
                            <p className="text-[10px] leading-3">Job Category</p>
                        </th>
                        <th className="py-2 pl-1 capitalize text-center border-b font-medium">
                            <p className="text-xs"> Job Salary</p>
                            <p className="text-[10px] leading-3"> Tuition Start</p>
                        </th>
                        <th className="py-2 pl-1 capitalize text-center border-b font-medium">
                            <p className="text-xs"> Guardian Name</p>
                            <p className="text-[10px] leading-3"> Guardian Id</p>
                        </th>
                        <th className="py-2 pl-1 capitalize text-center border-b font-medium">
                            <p className="text-xs"> Guardian Area</p>
                            <p className="text-[10px] leading-3"> Guardian Phone</p>
                        </th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">A. Date</th>
                        <th className="py-2 pr-2 border-b capitalize text-sm font-semibold text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pendingHire.map((hire, inx) =>
                            <tr
                                key={hire?._id}
                                className="hover:bg-gray-100 transition duration-300 border-slate-200 border-b-[2px]"
                            >
                                <td className="py-2 font-semibold">{inx + 1}</td>
                                <td className="pl-2 py-2">
                                    <div className="flex items-center text-center justify-center">
                                        <div>
                                            <div className="font-medium text-sm">{hire?.tutorName || 'Tutor Name'}</div>
                                            <div className="font-medium text-xs opacity-60">{hire?.tutorId || "HTP-0000"}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2">
                                    <div className="flex items-center text-center justify-center">
                                        <div>
                                            <div className="font-medium text-sm">{hire?.tutorAddress || 'Dhaka, Bangladesh'}</div>
                                            <div className="font-medium text-xs opacity-70">{hire?.tutorPhone || "+8801000000000"}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2">
                                    <div className="flex items-center text-center justify-center">
                                        <div>
                                            <div className="font-medium text-sm">{hire?.JobSubject || 'Sciences'}</div>
                                            <div className="font-medium text-xs opacity-60">{hire?.JobCategory || "Home"}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2">
                                    <div className="flex items-center text-center justify-center">
                                        <div>
                                            <div className="font-medium text-sm">{hire?.tuitionSalary || '0000'}TK</div>
                                            <div className="font-medium text-xs opacity-60">Start {hire?.tuitionStartMonth || "MM"}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2">
                                    <div className="flex items-center text-center justify-center">
                                        <div>
                                            <div className="font-medium text-sm">{hire?.guardianName || 'guardian name'}</div>
                                            <div className="font-medium text-xs opacity-50">{hire?.guardianId || 'P-00000'}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2">
                                    <div className="flex items-center text-center justify-center">
                                        <div>
                                            <div className="font-medium text-sm">{hire?.guardianAddress || 'Dhaka, Bangladesh'}</div>
                                            <div className="font-medium text-xs opacity-70">{hire?.guardianPhone || "+8801888888888"}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2">
                                    <div className="flex items-center text-center justify-center">
                                        <div>
                                            <div className="font-medium text-sm"> {new Date(hire?.createdAt).toLocaleDateString()}</div>
                                            <div className="font-medium text-xs opacity-70">{new Date(hire?.createdAt).toLocaleTimeString()}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-1 text-xs font-medium text-center border-b space-y-1">
                                    <div>
                                        <button
                                            onClick={() =>
                                                handleManageAction(`api/tutor-hire-request/manage-tutor-hire/${hire?._id}`,
                                                    "approve",
                                                    "Tutor Hire",
                                                    "Approve Tutor Hire")
                                            }
                                            className="text-xs px-1 py-1 bg-green-500 hover:bg-green-600 hover:underline text-white rounded-lg transition-all duration-200">
                                            Approve
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => handleDeleteById(`api/tutor-hire-request/${hire?._id}`,
                                                "Tuition Job",
                                                "Your Tuition Job"
                                            )}
                                            className=" text-xs px-2 py-1 bg-red-400 hover:bg-red-600 hover:underline text-white rounded-lg transition-all duration-200">
                                            Cancel
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div >
    );
};

export default PendingHire;