import { useParams } from "react-router-dom";
import { useAllRequestJobs } from "../../api/useAllRequestJobs";
import Loading from "../../Components/Loading/Loading";
import PageTitleShow from "../../Components/PageTitleShow/PageTitleShow";

const TuitionJobApplyDetails = () => {
	const { id } = useParams();
	console.log("id apply job ", id);
	const [payloads, refetch, isLoading] = useAllRequestJobs();
	const { tutorJobApplies = [] } = payloads || { tutorJobApplies: [] };
	// console.log("id apply job tutorJobApplies => ", tutorJobApplies);

	const applyDetails =
		tutorJobApplies?.filter((singleJob) => singleJob?._id === id) || [];
	console.log("id apply job applyDetails => ", applyDetails);

	if (isLoading) {
		return <Loading />;
	}
	return (
		<>
			<PageTitleShow currentPage="Job Apply Details |" />
			<div className="md:max-w-7xl mx-auto bg-slate-50 md:py-5 md:px-3 py-3 px-2.5 rounded-lg shadow-md">
				<h3 className="text-center text-xl font-bold font-mono">
					Tuition Job Apply Details
				</h3>
				{applyDetails.map((apply) => (
					<div
						key={apply?._id}
						className="grid md:grid-cols-2 md:gap-4 gap-3 py-6"
					>
						<div className="col-span-1 text-left md:p-5 p-2.5 bg-green-100 rounded-lg hover:shadow-lg hover:bg-green-200 transition-all duration-300">
							<h2 className="text-lg font-semibold font-mono border-b-2 border-green-400 md:py-3 py-1.5">
								Tutor Information
							</h2>
							<div className="md:pt-5 pt-2 font-mono">
								<div className="space-y-1">
									<p className="text-sm">
										Tutor Id:{" "}
										<span className="font-semibold">
											{apply?.tutorId || "HTPBD-00000"}
										</span>
									</p>
									<p className="text-sm">
										Tutor Name:{" "}
										<span className="font-semibold">
											{apply?.tutorName || "Tutor Name"}
										</span>
									</p>
									<p className="text-sm">
										Tutor Email:{" "}
										<span className="font-semibold">
											{apply?.tutorEmail || "tutorname@gmail.com"}
										</span>
									</p>
									<p className="text-sm">
										Tutor Demean Salary:{" "}
										<span className="font-semibold">
											{apply?.tutorDemeanSalary || "4000"}TK
										</span>
									</p>
									<p className="text-sm">
										Tutor Full Address:{" "}
										<span className="font-semibold">
											{apply?.tutorAddress || "Dhaka, BD"}
										</span>
									</p>
									<p className="text-sm">
										Tutor Current Location:{" "}
										<span className="font-semibold">
											{apply?.tutorCurrentLocation || "Dhaka, BD"}
										</span>
									</p>
									<p className="text-sm">
										Tutor Contact Number:{" "}
										<span className="font-semibold">
											{apply?.tutorPhone || "880100-000-00-000"}
										</span>
									</p>
									<p className="text-sm">
										Tutor WhatsApp Number:{" "}
										<span className="font-semibold">
											{apply?.tutorWhatsappNumber || "880100-000-00-000"}
										</span>
									</p>
									<p className="text-sm">
										Apply Date :{" "}
										<span className="font-semibold italic text-slate-500">
											{new Date(apply?.createdAt).toLocaleDateString() ||
												"DD-MM-YYYY"}
											{""}&nbsp; &nbsp;
											{new Date(apply?.createdAt).toLocaleTimeString() ||
												"H-M-S"}
										</span>
									</p>

									<p className="text-base bg-slate-50 p-1">
										Tutor Job Apply Status:{" "}
										{apply?.isTutorRequest === false ? (
											<span className="font-bold tracking-widest text-red-500">
												Pending
											</span>
										) : (
											<span className="font-bold tracking-widest text-green-500">
												Approve
											</span>
										)}
									</p>
									<p className="text-sm font-semibold pt-2">
										Tutor Job Apply Information :
									</p>
									<p className="font-medium text-sm leading-3">
										{apply?.tutorDescription || "tutor-description"}
									</p>
								</div>
							</div>
						</div>

						{/* tuition job details */}
						<div className="col-span-1 text-right md:p-5 p-2.5 bg-orange-100 rounded-lg hover:shadow-lg hover:bg-orange-200 transition-all duration-300">
							<h2 className="text-lg font-semibold font-mono border-b-2 border-orange-400 md:py-3 py-1.5">
								Tuition Job Information
							</h2>
							<div className="md:pt-5 pt-2 text-left text-slate-600 font-mono">
								<div className="space-y-0.5 text-[15px]">
									<p className="">
										Job Id :{" "}
										<span className="font-semibold">
											{apply?.jobId || "TJP-00000"}
										</span>
									</p>
									<p className="">
										Job Email :{" "}
										<span className="font-semibold">
											{apply?.jobEmail || "jobemail@gmail.com"}
										</span>
									</p>
									<p className="">
										Job Subject :{" "}
										<span className="font-semibold">
											{apply?.jobSubject || "subject"}
										</span>
									</p>
									<p className="">
										Job Class :{" "}
										<span className="font-semibold">
											{apply?.jobClass || "class"}
										</span>
									</p>
									<p className="">
										Job Medium :{" "}
										<span className="font-semibold">
											{apply?.jobMedium || "medium"}
										</span>
									</p>
									<p className="">
										Job Category :{" "}
										<span className="font-semibold">
											{apply?.jobCategory || "Home"}
										</span>
									</p>
									<p className="">
										Job Salary :{" "}
										<span className="font-semibold">
											{apply?.jobSalary || "00000"}
										</span>
									</p>
									<p className="">
										Job Per Week :{" "}
										<span className="font-semibold">
											{apply?.jobPerWeek || "week"} Day
										</span>
									</p>
									<p className="">
										Job Address :{" "}
										<span className="font-semibold">
											{apply?.jobAddress || "address"}
										</span>
									</p>
									<p className="">
										Job School Name :{" "}
										<span className="font-semibold">
											{apply?.jobSchoolName || "job-school-name"}
										</span>
									</p>
									<p className="">
										Job Contact Number :{" "}
										<span className="font-semibold">
											{apply?.jobPhone || "88010-000-00-000"}
										</span>
									</p>
									<p className="">
										Job Whatsapp Number :{" "}
										<span className="font-semibold">
											{apply?.jobWhatsappNumber || "88010-000-00-000"}
										</span>
									</p>
									<p className="">
										Job Date:{" "}
										<span className="font-semibold italic text-slate-500">
											{apply?.jobPostDate
												? `${new Date(
														apply.jobPostDate
												  ).toLocaleDateString()} ${new Date(
														apply.jobPostDate
												  ).toLocaleTimeString()}`
												: "DD-MM-YYYY H-M-S"}
										</span>
									</p>
									<p className="font-semibold pt-2">Job Comment : </p>
									<p className="font-normal text-sm leading-3">
										{apply?.jobComment || "comment"}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default TuitionJobApplyDetails;
