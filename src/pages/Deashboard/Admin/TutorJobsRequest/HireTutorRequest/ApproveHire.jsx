import Loading from "../../../../../Components/Loading/Loading";

const ApproveHire = ({ approveHire, refetch, isLoading }) => {
    console.log("approve Hire 4 ==>>", approveHire);

    // parent information backed modify now 
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="overflow-x-auto">
            <table className="min-w-[100%] shadow-md border mx-auto border-gray-100">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">Tutor Name</th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">T. Id</th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">T. Area</th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">Subject</th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">Salary</th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">Parent Name</th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">P. Id</th>
                        <th className="py-2 pr-2 border-b capitalize text-sm font-semibold text-center">P. Area</th>
                        <th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">A. Date</th>
                        <th className="py-2 pr-2 border-b capitalize text-sm font-semibold text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        approveHire.map((hire) =>
                            <tr
                                key={hire?._id}
                                className="hover:bg-gray-100 transition duration-300">
                                <td className="p-1 text-xs font-medium text-center border-b">{hire?.tutorName || 'Tutor Name'}</td>
                                <td className="p-1 text-xs font-medium text-center border-b">{hire?.tutorId || "HTP-0000"}</td>
                                <td className="p-1 text-xs font-medium border-b text-end">{hire?.tutorAddress || 'Dhaka, Bangladesh'}</td>
                                <td className="p-1 text-xs font-medium text-center border-b">{hire?.jobSubject || 'Sciences'}</td>
                                <td className="p-1 text-xs font-medium text-center border-b">{hire?.jobClass || 'class-N/A'}</td>
                                <td className="p-1 text-xs font-medium text-center border-b">{hire?.jobMedium || 'Bangla'}</td>
                                <td className="p-1 text-xs font-medium text-center border-b">{hire?.guardianId || 'P-12450'}</td>
                                <td className="p-1 text-xs font-medium border-b text-end"> {hire?.guardianAddress || 'Dhaka, Bangladesh'}</td>
                                <td className="p-1 text-xs font-medium text-center border-b">
                                    {new Date(hire?.createdAt).toLocaleDateString()}{" "}
                                    {new Date(hire?.createdAt).toLocaleTimeString()}
                                </td>
                                <td className="p-1 text-xs font-medium text-center border-b">
                                    <button
                                        // onClick={() => handleDeleteById(`api/hire-apply/${hire?._id}`,
                                        //     "Tuition Job",
                                        //     "Your Tuition Job"
                                        // )}
                                        className="text-xs px-1 py-1 bg-red-400 hover:bg-red-600 hover:underline text-white rounded-lg transition-all duration-200">Cancel</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ApproveHire;