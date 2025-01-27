import { useNavigate } from "react-router-dom";
import { useDeleteItemById } from "../../../../../Components/DeletedItem/DeletedItem";
import EmptyDataUiShow from "../../../../../Components/EmptyDataUiShow/EmptyDataUiShow";
import Loading from "../../../../../Components/Loading/Loading";
import { useManageAction } from "../../../../../Components/useManageAction/useManageAction";

const PendingJobs = ({ pendingJob, refetch, isLoading }) => {
	console.log("object pendingJob JOb", pendingJob);

	const { handleManageAction } = useManageAction(refetch);

	const { handleDeleteById, isDeleting } = useDeleteItemById(refetch);

	const navigate = useNavigate();

	const handleRowClick = (id) => {
		navigate(`/tuition-job-apply/details/${id}`);
	};

	if (isLoading) {
		return <Loading />;
	}
	return (
		<>
			{pendingJob?.length > 0 ? (
				<div className="overflow-x-auto">
					<table className="min-w-[100%] shadow-md  border mx-auto border-gray-100">
						<thead>
							<tr className="bg-[#403f3f] text-white">
								<th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">
									tutor name
								</th>
								<th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">
									T. Id
								</th>
								<th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">
									T. Area
								</th>
								<th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">
									Subject
								</th>
								<th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">
									Class
								</th>
								<th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">
									Medium
								</th>
								<th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">
									Salary
								</th>
								<th className="py-2 pl-2 capitalize text-center border-b text-sm font-semibold">
									Per Week
								</th>
								<th className="py-2 pr-2 border-b capitalize text-sm font-semibold text-center">
									Job Area
								</th>
								<th className="py-2 pr-2 border-b capitalize text-sm font-semibold text-center">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{pendingJob.map((job) => (
								<tr
									key={job?._id}
									onClick={() => handleRowClick(job?._id)}
									className="hover:bg-gray-100 transition duration-300"
								>
									<td className="p-1 text-xs font-medium text-center border-b">
										{job?.tutorName || "Tutor Name"}
									</td>
									<td className="p-1 text-xs font-medium text-center border-b">
										{job?.tutorId || "HTP-0000"}
									</td>
									<td className="p-1 text-xs font-medium border-b text-end">
										{job?.tutorAddress || "Dhaka, Bangladesh"}
									</td>
									<td className="p-1 text-xs font-medium text-center border-b">
										{job?.jobSubject || "Sciences"}
									</td>
									<td className="p-1 text-xs font-medium text-center border-b">
										{job?.jobClass || "class-N/A"}
									</td>
									<td className="p-1 text-xs font-medium text-center border-b">
										{job?.jobMedium || "Bangla"}
									</td>
									<td className="p-1 text-xs font-medium text-center border-b">
										{job?.jobSalary || "5"}k
									</td>
									<td className="p-1 text-xs font-medium text-center border-b">
										{job?.jobPerWeek || "d"}d
									</td>
									<td className="p-1 text-xs font-medium border-b text-end">
										{" "}
										{job?.jobAddress || "Dhaka, Bangladesh"}
									</td>
									<td className="p-1 text-xs font-medium text-center border-b">
										<button
											onClick={() =>
												handleManageAction(
													`api/job-apply/manage-job-apply/${job?._id}`,
													"approve",
													"job apply",
													"Job Apply"
												)
											}
											className="text-[11px] px-1 py-1 bg-blue-500 text-white rounded-lg mr-1"
										>
											Approve
										</button>
										<button
											onClick={() =>
												handleDeleteById(
													`api/job-apply/${job?._id}`,
													"Tuition Job Apply",
													"Your Tuition Job Apply"
												)
											}
											className="text-[11px] px-1 py-1 bg-red-500 text-white rounded-lg mr-1"
										>
											Cancel
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<EmptyDataUiShow />
			)}
		</>
	);
};

export default PendingJobs;
