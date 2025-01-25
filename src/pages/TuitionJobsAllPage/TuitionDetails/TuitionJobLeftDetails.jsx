import { FaCalendarAlt } from "react-icons/fa";
import { FaMedal, FaMedium, FaMoneyBillWave } from "react-icons/fa6";
import { IoDuplicateSharp } from "react-icons/io5";
import { TbGenderAndrogyne } from "react-icons/tb";
import Loading from "../../../Components/Loading/Loading";

const TuitionJobLeftDetails = (tuition, isLoading) => {
	const {
		jobLocation,
		tuitionCode,
		tutorGender,
		medium,
		perWeek,
		jobSalary,
		jobCategory,
		jobComment,
	} = tuition?.tuition;

	if (isLoading.isLoading) {
		return <Loading />;
	}
	return (
		<div className="md:col-span-2 col-span-1">
			<h3 className="text-2xl font-bold pb-3 text-slate-900">{jobLocation}</h3>
			<div className="md:block hidden">
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-between">
						<div className="py-3">
							<div className="flex items-center gap-x-2">
								<FaMedal className="transform rotate-180 text-orange-500 text-xl" />
								<div>
									<span className="text-base font-semibold text-slate-500">
										Tuition Code:
									</span>
									<p className="font-normal text-base text-slate-600">
										{tuitionCode}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className=" py-3">
							<div className="flex items-center gap-x-2">
								<TbGenderAndrogyne className="transform rotate-90 text-pink-500 text-xl" />
								<div>
									<span className="text-base font-semibold text-slate-500">
										Gender:
									</span>
									<p className="font-normal text-base text-slate-600">
										{tutorGender}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className=" py-3">
							<div className="flex items-center gap-x-2">
								<FaMedium className=" text-orange-500 text-xl" />
								<div>
									<span className="text-base font-semibold text-slate-500">
										Medium:
									</span>
									<p className="font-normal text-base text-slate-600">
										{medium}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<div className="flex items-center justify-between">
						<div className=" py-3">
							<div className="flex items-center gap-x-2">
								<FaCalendarAlt className=" text-orange-600 text-xl" />
								<div>
									<span className="text-base font-semibold text-slate-500">
										Per Week:
									</span>
									<p className="font-normal text-base text-slate-600">
										{perWeek} Days
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className=" py-3">
							<div className="flex items-center gap-x-2">
								<FaMoneyBillWave className=" text-orange-500 text-xl" />
								<div>
									<span className="text-base font-semibold text-slate-500">
										Salary:
									</span>
									<p className="font-normal text-base text-slate-600">
										{jobSalary}
										<span className="text-2xl font-bold">৳</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className=" py-3">
							<div className="flex items-center gap-x-2">
								<IoDuplicateSharp className="transform rotate-180 text-orange-500 text-xl" />
								<div>
									<span className="text-base font-semibold text-slate-500">
										Category:
									</span>
									<p className="font-normal text-base text-slate-600">
										{jobCategory}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* mobile response */}
			<div className="md:hidden flex items-center justify-between gap-3">
				<div className="md:flex items-center justify-between">
					<div className="flex items-center justify-between">
						<div className="py-3">
							<div className="flex items-center gap-x-2">
								<FaMedal className="transform rotate-180 text-orange-500 text-xl" />
								<div>
									<span className="text-base font-semibold text-slate-500">
										Tuition Code:
									</span>
									<p className="font-normal md:text-base text-sm text-slate-600">
										{tuitionCode}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className=" py-3">
							<div className="flex items-center gap-x-2">
								<TbGenderAndrogyne className="transform rotate-90 text-pink-500 text-xl" />
								<div>
									<span className="text-base font-semibold text-slate-500">
										Gender:
									</span>
									<p className="font-normal md:text-base text-sm text-slate-600">
										{tutorGender}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className="py-3">
							<div className="flex items-center gap-x-2">
								<FaMedium className=" text-orange-500 text-xl" />
								<div>
									<span className="text-base font-semibold text-slate-500">
										Medium:
									</span>
									<p className="font-normal md:text-base text-sm text-slate-600">
										{medium}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="md:flex items-center justify-between">
					<div className="flex items-center justify-between">
						<div className="py-3">
							<div className="flex items-center gap-x-2">
								<FaCalendarAlt className=" text-orange-600 text-xl" />
								<div>
									<span className="text-base font-semibold text-slate-500">
										Per Week:
									</span>
									<p className="font-normal md:text-base text-sm text-slate-600">
										{perWeek} Days
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className=" py-3">
							<div className="flex items-center gap-x-2">
								<FaMoneyBillWave className=" text-orange-500 text-xl" />
								<div>
									<span className="text-base font-semibold text-slate-500">
										Salary:
									</span>
									<p className="font-normal md:text-base text-sm text-slate-600">
										{jobSalary}
										<span className="text-2xl font-bold">৳</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between">
						<div className=" py-3">
							<div className="flex items-center gap-x-2">
								<IoDuplicateSharp className="transform rotate-180 text-orange-500 text-xl" />
								<div>
									<span className="text-base font-semibold text-slate-500">
										Category:
									</span>
									<p className="font-normal md:text-base text-sm text-slate-600">
										{jobCategory}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="md:py-8 py-4">
				<p className="italic font-normal">
					Comment:{" "}
					<span className="font-semibold text-slate-700">{jobComment}</span>
				</p>
			</div>
		</div>
	);
};

export default TuitionJobLeftDetails;
