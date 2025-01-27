import { useForm } from "react-hook-form";
import PageTitleShow from "../../../../Components/PageTitleShow/PageTitleShow";
import SearchDropDownField from "../../../../Components/SearchDropDownFiled/SearchDropDownField";
import {
	Duration,
	FixedTime,
	JobCategory,
	JobSalary,
	Medium,
	PerWeek,
	StudentGender,
	TuitionGender,
} from "../../../../Helpers/TuitionJobCreate";
import PreferableClassOptions from "../../../../Helpers/PreferableClass";
import AllSubjects from "../../../../Helpers/SubjectData";
import DistrictAreas from "../../../../Helpers/DistrictAreas";
import axios from "axios";
import { serverApiUrl } from "../../../../../ApiSecret";
import Swal from "sweetalert2";
import { useAllUsers } from "../../../../api/useAllUsers";

const TuitionJobCreate = () => {
	const {
		register,
		handleSubmit,
		reset,
		setValue,
		watch,
		formState: { errors },
	} = useForm();

	// TODO USER INFORMATION
	const [users] = useAllUsers();
	const { users: allUsers } = users || {};

	const findUser = (allUsers || []).find(
		(data) => data.isCoaching === true || data.isParent === true
	);
	// console.log("findUser", findUser);

	const jobSalary = watch("jobSalary");
	const tutorGender = watch("tutorGender");
	const medium = watch("medium");
	const jobCategory = watch("jobCategory");
	const perWeek = watch("perWeek");
	const className = watch("className");
	const subject = watch("subject");
	const fixedTime = watch("fixedTime");
	const duration = watch("duration");
	const studentGender = watch("studentGender");
	const tuitionDistrictName = watch("tuitionDistrictName");

	const onSubmit = async (data) => {
		const tuitionJobCreate = {
			userId: findUser?.userId,
			userEmail: findUser?.email,
			jobLocation: data.jobLocation || "N/A",
			jobSalary: jobSalary || "N/A",
			tutorGender: tutorGender || "N/A",
			medium: medium || "",
			jobCategory: jobCategory || "",
			contactNumber: data.contactNumber || "",
			whatsAppNumber: data.whatsAppNumber || "N/A",
			perWeek: perWeek || "",
			className: className || "",
			subject: subject || "",
			fixedTime: fixedTime || "",
			duration: duration || "",
			studentSchool: data.studentSchool || "N/A",
			studentGender: studentGender || "",
			jobComment: data.jobComment || "N/A",
			tuitionDistrictName: tuitionDistrictName || "",
		};
		console.log("Payload being sent to the server:", tuitionJobCreate);
		try {
			const response = await axios.post(
				`${serverApiUrl}/api/tuition-job`,
				tuitionJobCreate
			);
			console.log("API Response:", response.data);
			if (response.data.success) {
				reset();
				Swal.fire({
					position: "top-center",
					icon: "success",
					title: response.data.message,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		} catch (error) {
			console.error(
				"Error posting tuition job information:",
				error.response?.data || error.message
			);
			Swal.fire({
				position: "top-center",
				icon: "error",
				title: "Failed to create job. Check your inputs.",
				text: error.response?.data?.message || error.message,
				showConfirmButton: true,
			});
		}
	};

	return (
		<div className="my-5">
			<PageTitleShow currentPage="Tuition Job Create |" />
			<div className="md:max-w-6xl w-full mx-2 md:mx-auto bg-white p-5 rounded-xl shadow-md mt-8">
				<h2 className="py-4 text-3xl font-semibold text-slate-700 text-center">
					Create Tuition Job
				</h2>
				<form onSubmit={handleSubmit(onSubmit)} className="text-center">
					<div className="grid md:grid-cols-2 gap-5 p-5">
						{/* Job Location */}
						<div className="space-y-2 md:col-span-2 text-left">
							<label className="block text-slate-700 font-medium">
								<span className="font-semibold text-slate-600 tracking-wider">
									Job Location*
								</span>
							</label>
							<input
								{...register("jobLocation", {
									required: "Job location is required",
								})}
								type="text"
								placeholder="Enter your job location"
								className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm mt-2"
							/>
							{errors.jobLocation && (
								<p className="text-red-500 text-sm">
									{errors.jobLocation.message}
								</p>
							)}
						</div>
						{/* Dropdown Fields */}
						<SearchDropDownField
							label="Class Name *"
							options={PreferableClassOptions}
							selectedValue={className}
							setValue={(value) => setValue("className", value)}
						/>
						<SearchDropDownField
							label="Subject *"
							options={AllSubjects}
							selectedValue={subject}
							setValue={(value) => setValue("subject", value)}
						/>
						<SearchDropDownField
							label="Tuition Medium *"
							options={Medium}
							selectedValue={medium}
							setValue={(value) => setValue("medium", value)}
						/>
						<SearchDropDownField
							label="Job Category *"
							options={JobCategory}
							selectedValue={jobCategory}
							setValue={(value) => setValue("jobCategory", value)}
						/>
						<SearchDropDownField
							label="Tuition Salary *"
							options={JobSalary}
							selectedValue={jobSalary}
							setValue={(value) => setValue("jobSalary", value)}
						/>
						<SearchDropDownField
							label="Tuition Gender *"
							options={TuitionGender}
							selectedValue={tutorGender}
							setValue={(value) => setValue("tutorGender", value)}
						/>
						<SearchDropDownField
							label="Per Week *"
							options={PerWeek}
							selectedValue={perWeek}
							setValue={(value) => setValue("perWeek", value)}
						/>
						<SearchDropDownField
							label="Class Duration *"
							options={Duration}
							selectedValue={duration}
							setValue={(value) => setValue("duration", value)}
						/>
						<SearchDropDownField
							label="Fixed Time *"
							options={FixedTime}
							selectedValue={fixedTime}
							setValue={(value) => setValue("fixedTime", value)}
						/>
						<SearchDropDownField
							label="Student Gender *"
							options={StudentGender}
							selectedValue={studentGender}
							setValue={(value) => setValue("studentGender", value)}
						/>
						{/* Contact Details */}
						<div className="space-y-2">
							<label className="block text-slate-700 font-medium">
								<span className="font-semibold text-slate-600 tracking-wider">
									Contact Number*
								</span>
							</label>
							<input
								type="number"
								placeholder="Your contact number"
								{...register("contactNumber", {
									required: "Contact number is required",
									maxLength: 14,
									value: "8801",
								})}
								className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
							/>
							{errors.contactNumber && (
								<p className="text-red-500 text-sm">
									{errors.contactNumber.message}
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
								type="number"
								placeholder="Your WhatsApp number"
								{...register("whatsAppNumber", { maxLength: 14 })}
								className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
							/>
						</div>
						{/* student School */}
						<div className="space-y-2 md:col-span-2 text-left">
							<label className="block text-slate-700 font-medium">
								<span className="font-semibold text-slate-600 tracking-wider">
									Student School Name *
								</span>
							</label>
							<input
								{...register("studentSchool", { required: true })}
								type="text"
								placeholder="Enter your job location"
								className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm mt-2"
							/>
							{errors.studentSchool && (
								<p className="text-red-500 text-sm">
									student school name is required
								</p>
							)}
						</div>

						<SearchDropDownField
							label="Tuition District Name *"
							options={DistrictAreas}
							selectedValue={tuitionDistrictName}
							setValue={(value) => setValue("tuitionDistrictName", value)}
						/>
						{/* Job Comment */}
						<div className="space-y-2">
							<label className="block text-slate-700 font-medium">
								<span className="font-semibold text-slate-600 tracking-wider">
									Job Comment
								</span>
							</label>
							<textarea
								cols="2"
								rows="2"
								placeholder="Please give your job comment"
								{...register("jobComment")}
								className="border border-sky-300 rounded-lg outline-sky-400 placeholder:text-sm overflow-hidden w-full py-2 px-4"
							></textarea>
						</div>
					</div>
					<div>
						<input
							className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition-all duration-200 mb-1"
							type="submit"
							value="Create Job"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TuitionJobCreate;
