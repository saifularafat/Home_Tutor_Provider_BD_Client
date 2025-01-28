import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import PageTitleShow from "../../Components/PageTitleShow/PageTitleShow";
import { useParentRequestTutor } from "../../api/useAllParentHireRequestToTutor";

const HireTutorApplyDetails = () => {
	const { id } = useParams();
	// console.log("id apply job ", id);

	// TODO USER INFORMATION
	const [payload, refetch, isLoading] = useParentRequestTutor();
	const { tutorRequest = [] } = payload || { tutorRequest: [] };
	console.log("id apply job tutorRequest => ", tutorRequest);

	const hireDetails =
		tutorRequest?.filter((singleJob) => singleJob?._id === id) || [];
	console.log("id apply job hireDetails => ", hireDetails);

	if (isLoading) {
		return <Loading />;
	}
	return (
		<>
			<PageTitleShow currentPage="Hire Tutor Request Details |" />
			<div className="md:max-w-7xl mx-auto bg-transparent md:py-5 md:px-3 py-3 px-2.5 rounded-lg shadow-sm">
				<h3 className="text-center text-xl font-bold font-mono">
					Hire Tutor Request Details
				</h3>
				{hireDetails.map((hire) => (
					<div
						key={hire?._id}
						className="grid md:grid-cols-2 md:gap-4 gap-3 py-6"
					>
						<div className="col-span-1 text-left md:p-5 p-2.5 bg-pink-100 rounded-lg hover:shadow-lg hover:bg-pink-200 hover:text-black transition-all duration-300">
							<h2 className="text-lg font-semibold font-mono border-b-2 border-pink-400 md:py-3 py-1.5">
								Parent Request Information
							</h2>
							<div className="md:pt-5 pt-2 font-mono">
								<div className="space-y-1">
									<div
										className=" w-full mx-auto pb-3"
										title={hire?.parentName}
									>
										<img
											width={110}
											height={110}
											className="group relative h-[120px] w-[120px] mx-auto rounded-lg bg-slate-500 object-cover"
											src={
												hire?.parentImage || "https://via.placeholder.com/110"
											}
											alt={hire?.parentName || "parent"}
										/>
									</div>

									<p className="text-sm">
										Parent Id:{" "}
										<span className="font-semibold">
											{hire?.parentId || "HTPBD-00000"}
										</span>
									</p>
									<p className="text-sm">
										Parent Name:{" "}
										<span className="font-semibold">
											{hire?.parentName || "Parent Name"}
										</span>
									</p>
									<p className="text-sm">
										Parent Email:{" "}
										<span className="font-semibold">
											{hire?.tutorRequest || "parentname@gmail.com"}
										</span>
									</p>
									<p className="text-sm bg-slate-50">
										Tuition Subject:{" "}
										<span className="font-semibold">
											{hire?.jobSubject || "subject"} *
										</span>
									</p>
									<p className="text-sm bg-slate-50">
										Tuition Category:{" "}
										<span className="font-semibold">
											{hire?.jobCategory || "category"} *
										</span>
									</p>
									<p className="text-sm bg-slate-50">
										Student Class:{" "}
										<span className="font-semibold">
											{hire?.studentClass || "class"} *
										</span>
									</p>
									<p className="text-sm">
										Student Gender:{" "}
										<span className="font-semibold">
											{hire?.studentGender || "Male-Female"}
										</span>
									</p>

									<p className="text-sm bg-slate-50">
										How Many Student:{" "}
										<span className="font-semibold">
											{hire?.howManyStudent || "00"} Person *
										</span>
									</p>
									<p className="text-sm bg-slate-50">
										Tuition Salary:{" "}
										<span className="font-semibold">
											{hire?.tuitionSalary || "4000"}TK *
										</span>
									</p>
									<p className="text-sm bg-slate-50">
										Parent Full Address:{" "}
										<span className="font-semibold">
											{hire?.tuitionFullAddress || "Dhaka, BD"} *
										</span>
									</p>
									<p className="text-sm bg-slate-50">
										Tuition Start Month:{" "}
										<span className="font-semibold">
											{hire?.tuitionStartMonth || "Month"} *
										</span>
									</p>
									<p className="text-sm bg-slate-50">
										Parent Contact Number:{" "}
										<span className="font-semibold">
											{hire?.parentPhone || "880100-000-00-000"} *
										</span>
									</p>
									<p className="text-sm">
										Tutor WhatsApp Number:{" "}
										<span className="font-semibold">
											{hire?.tutorWhatsappNumber || "880100-000-00-000"}
										</span>
									</p>
									<p className="text-sm pb-2">
										hire Date :{" "}
										<span className="font-semibold italic text-slate-500">
											{new Date(hire?.createdAt).toLocaleDateString() ||
												"DD-MM-YYYY"}
											{""}&nbsp; &nbsp;
											{new Date(hire?.createdAt).toLocaleTimeString() ||
												"H-M-S"}
										</span>
									</p>
									<p className="text-sm font-semibold bg-slate-50">
										Tutor Job hire Information : **
									</p>
									<p className="font-medium text-sm leading-3">
										{hire?.comments || "tutor-description"}
									</p>
								</div>
							</div>
						</div>

						{/* Tutor Request details */}
						<div className="col-span-1 text-right md:p-5 p-2.5 bg-green-100 rounded-lg hover:shadow-lg hover:bg-green-200 transition-all duration-300">
							<h2 className="text-lg font-semibold font-mono border-b-2 border-green-700 md:py-3 py-1.5">
								Tutor Request Information
							</h2>
							<div className="md:pt-5 pt-2 text-left text-slate-600 font-mono">
								<div className="space-y-0.5 text-[15px] w-full mx-auto">
									<div className=" w-full mx-auto pb-3" title={hire?.tutorName}>
										<img
											width={110}
											height={110}
											className="group relative h-[120px] w-[120px] mx-auto rounded-lg bg-slate-500 object-cover"
											src={
												hire?.tutorImage || "https://via.placeholder.com/110"
											}
											alt={hire?.tutorName || "Tutor"}
										/>
									</div>

									<p className="">
										Tutor Id :{" "}
										<span className="font-semibold">
											{hire?.tutorId || "HTP-00000"}
										</span>
									</p>
									<p className=" bg-slate-50">
										Tutor Name :{" "}
										<span className="font-semibold">
											{hire?.tutorName || "tutor Name"} *
										</span>
									</p>
									<p className="">
										Tutor Email :{" "}
										<span className="font-semibold">
											{hire?.tutorEmail || "tutoremail@gmail.com"}
										</span>
									</p>

									<p className="">
										Tutor Dream Salary :{" "}
										<span className="font-semibold">
											{hire?.jobSalary || "00000"}
										</span>
									</p>

									<p className=" bg-slate-50">
										Tutor Address :{" "}
										<span className="font-semibold">
											{hire?.tutorAddress || "address"} *
										</span>
									</p>
									<p className=" bg-slate-50">
										Tutor Contact Number :{" "}
										<span className="font-semibold">
											{hire?.tutorPhone || "88010-000-00-000"} *
										</span>
									</p>
									<p className="">
										Tutor Whatsapp Number :{" "}
										<span className="font-semibold">
											{hire?.jobWhatsappNumber || "N/A"}
										</span>
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
export default HireTutorApplyDetails;
