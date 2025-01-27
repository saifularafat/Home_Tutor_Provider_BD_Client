import { Link, useParams } from "react-router-dom";
import { singleTuitionJobs } from "../../../api/allTuitionJobs";
import Loading from "../../../Components/Loading/Loading";
import ErrorComponent from "../../../Components/ErrorComponent/ErrorComponent";
import NoJobFound from "../../../Components/NoFoundData/NoFoundData";
import PageTitleShow from "../../../Components/PageTitleShow/PageTitleShow";
import { useForm } from "react-hook-form";
import { allTutor } from "../../../api/allTutor";

const TuitionJobApplyForm = () => {
	const { id } = useParams();

	// Fetching tuition job details
	const { tuitionJob, refetch, isLoading, isError } = singleTuitionJobs(id);
	console.log("fetching tuition job", tuitionJob);

	// tutor info
	const [tutors] = allTutor();
	const { tutors: tutor } = tutors || {};
	const singleTutorFind = tutor?.find((single) => single?.isTutor === true);
	console.log("fetching singleTutorFind number 20 =>", singleTutorFind);

	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm();

	const onSubmit = async (data) => {
		console.log("object", data);

		const applyData = {
			tutorId: singleTutorFind?.userId,
			tutorName: singleTutorFind?.name,
			tutorEmail: singleTutorFind?.email,
			tutorAddress: singleTutorFind?.address,
			tutorDemeanSalary: singleTutorFind?.tutorDemeanSalary || "3000",
			tutorCurrentLocation: data.applyLocation || "",
			tutorPhone: data.applyContactNumber || "",
			tutorWhatsappNumber: data.applyWhatsAppNumber || "",
			tutorDescription: data.applyInformation || "",
			jobId: tuitionJob?.tuitionCode,
			jobEmail: tuitionJob?.userEmail,
			jobSubject: tuitionJob?.subject,
			jobClass: tuitionJob?.className,
			jobMedium: tuitionJob?.medium,
			jobCategory: tuitionJob?.jobCategory,
			jobSalary: tuitionJob?.jobSalary,
			jobPerWeek: tuitionJob?.perWeek,
			jobAddress: tuitionJob?.jobLocation,
			jobPhone: tuitionJob?.contactNumber,
			jobSchoolName: tuitionJob?.studentSchool,
			jobWhatsappNumber: tuitionJob?.whatsAppNumber,
		};
		console.log("apply data ===>", applyData);
	};

	if (isLoading) {
		return <Loading />;
	}
	if (isError) {
		return (
			<ErrorComponent message="Error fetching tuition information details." />
		);
	}

	if (!tuitionJob) {
		return <NoJobFound message="No tuition found." />;
	}
	return (
		<>
			<PageTitleShow currentPage="Tuition Job Apply |" />
			<div className="md:w-9/12 w-full mx-auto  my-5 rounded-lg shadow-md hover:shadow-xl hover:shadow-slate-200 transition-all duration-300">
				<h3 className="text-center text-lg font-medium">
					{tuitionJob?.jobLocation}
				</h3>
				<form onSubmit={handleSubmit(onSubmit)} className="pb-5">
					<div className="grid md:grid-cols-2 gap-3 p-5">
						{/* Current Location */}
						<div className="space-y-2 md:col-span-2 text-left">
							<label className="block text-slate-700 font-medium">
								<span className="font-semibold text-slate-600 tracking-wider">
									Current Location*
								</span>
							</label>
							<input
								{...register("applyLocation", {
									required: "Job location is required",
								})}
								type="text"
								defaultValue={singleTutorFind?.address}
								placeholder="Enter your job location"
								className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm mt-2"
							/>
							{errors.applyLocation && (
								<p className="text-red-500 text-sm">
									{errors.applyLocation.message}
								</p>
							)}
						</div>

						{/* Contact Number */}
						<div className="space-y-2">
							<label className="block text-slate-700 font-medium">
								<span className="font-semibold text-slate-600 tracking-wider">
									Contact Number*
								</span>
							</label>
							<input
								type="text"
								placeholder="Your contact number"
								{...register("applyContactNumber", {
									required: "Contact number is required",
									maxLength: 14,
									value: "8801",
								})}
								defaultValue={singleTutorFind?.phone}
								onInput={(e) =>
									(e.target.value = e.target.value.replace(/\D/g, ""))
								}
								className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
							/>
							{errors.applyContactNumber && (
								<p className="text-red-500 text-sm">
									{errors.applyContactNumber.message}
								</p>
							)}
						</div>

						{/* WhatsApp Number */}
						<div className="space-y-2">
							<label className="block text-slate-700 font-medium">
								<span className="font-semibold text-slate-600 tracking-wider">
									WhatsApp Number
								</span>
							</label>
							<input
								type="text"
								placeholder="Your WhatsApp number"
								{...register("applyWhatsAppNumber", {
									required: "WhatsApp number is required",
									maxLength: 14,
									value: "8801",
								})}
								defaultValue={singleTutorFind?.whatsApp || "N/A"}
								onInput={(e) =>
									(e.target.value = e.target.value.replace(/\D/g, ""))
								}
								className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
							/>
							{errors.applyWhatsAppNumber && (
								<p className="text-red-500 text-sm">
									{errors.applyWhatsAppNumber.message}
								</p>
							)}
						</div>

						{/* tutor Description */}
						<div className="space-y-2 md:col-span-2 text-left">
							<label className="block text-slate-700 font-medium">
								<span className="font-semibold text-slate-600 tracking-wider">
									Your Description
								</span>
							</label>
							<textarea
								cols="2"
								rows="5"
								placeholder="Please give your apply information...."
								{...register("applyInformation", { required: true })}
								className="border border-sky-300 rounded-lg outline-sky-400 placeholder:text-sm overflow-hidden w-full py-2 px-4"
							></textarea>
							{errors.applyInformation && (
								<p className="text-red-500 text-sm">
									{errors.applyInformation.message}
								</p>
							)}
						</div>
						{/* accept Terms Condition */}
						<div>
							<label className=" flex items-center">
								<input
									type="checkbox"
									name="checkbox"
									{...register("checkbox")}
									required
									className="w-4 h-4 rounded-full"
								/>
								<p className="md:pl-3 pl-1 text-sm font-open">
									Accept
									<Link
										to="/terms-condition"
										className="text-blue-600 text-sm underline md:pl-2"
									>
										Terms and Condition
									</Link>
								</p>
							</label>
						</div>
					</div>
					<div className="text-center">
						<button
							type="submit"
							className="relative inline-block h-14 w-40 text-lg font-medium overflow-hidden border-sky-500 px-5 py-2 
                                    text-sky-500 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] 
                                    before:rounded-s-full before:bg-sky-600 before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full 
                                    after:bg-sky-600 tracking-wider after:duration-500  hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
						>
							Apply
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default TuitionJobApplyForm;
