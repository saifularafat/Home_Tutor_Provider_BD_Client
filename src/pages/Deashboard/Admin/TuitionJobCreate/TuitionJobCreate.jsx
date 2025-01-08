import { useState } from "react";
import { useForm } from "react-hook-form";
import PageTitleShow from "../../../../Components/PageTitleShow/PageTitleShow";
import SearchDropDownField from "../../../../Components/SearchDropDownFiled/SearchDropDownField";
import { Duration, FixedTime, JobCategory, JobSalary, Medium, PerWeek, StudentGender, TuitionGender } from "../../../../Helpers/TuitionJobCreate";
import PreferableClassOptions from "../../../../Helpers/PreferableClass";
import AllSubjects from "../../../../Helpers/SubjectData";
import DistrictAreas from "../../../../Helpers/DistrictAreas";

const TuitionJobCreate = () => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors }
    } = useForm()

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

    // LOCATION CLICK show sub location
    // const handleDistricts = (e) => {
    //     setDistricts(e.target.value)
    //     setCityAreas(BdDistricts.find(areas => areas.stateName === e.target.value).stateAreas)
    // }

    // jobLocation, jobSalary, contactNumber, whatsAppNumber, tutorGender, medium,jobCategory
    // perWeek, className, subject, jobComment, duration, studentGender, studentSchool, 
    // fixedTime, description

    const onSubmit = data => {
        const tuitionJobCreate = {
            userId: "012457836",
            locationName: data.jobLocation,
            jobSalary: jobSalary,
            tutorGender: tutorGender,
            medium: medium,
            jobCategory: jobCategory,
            contactNumber: data.contactNumber,
            whatsAppNumber: data.whatsAppNumber || 'N/A',
            perWeek: perWeek,
            className: className,
            subject: subject,
            fixedTime: fixedTime,
            duration: duration,
            studentGender: studentGender,
            jobComment: data.jobComment || 'N/A',
            tuitionDistrictName: tuitionDistrictName,
        }
        console.log('tuitionJobCreate ==>', tuitionJobCreate);
    }

    return (
        <div className="mt-5">
            <PageTitleShow currentPage="Tuition Job Create |" />
            <div className="md:max-w-5xl w-full mx-2 md:mx-auto bg-white p-5 rounded-xl shadow-md mt-8">
                <h2 className="py-4 text-3xl font-semibold text-slate-700 text-center">Create Tuition Job</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                    <div className="grid md:grid-cols-2 gap-5 p-5">
                        {/* jobLocation */}
                        <div className="space-y-2 md:col-span-2 text-left">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Job Location*</span>
                            </label>
                            <input
                                {...register("jobLocation", { required: true })}
                                type="text"
                                placeholder="Enter your job location"
                                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm mt-2"
                            />
                            {errors.jobLocation && (
                                <p className="text-red-500 text-sm">Job location is required</p>
                            )}
                        </div>
                        {/* class Name */}
                        <SearchDropDownField
                            label="Class Name *"
                            options={PreferableClassOptions}
                            selectedValue={className}
                            setValue={(value) => setValue("className", value, { shouldValidate: true })}
                        />
                        {/* subject*/}
                        <SearchDropDownField
                            label="Subject *"
                            options={AllSubjects}
                            selectedValue={subject}
                            setValue={(value) => setValue("subject", value, { shouldValidate: true })}
                        />
                        {/* tuition Medium */}
                        <SearchDropDownField
                            label="Tuition Medium *"
                            options={Medium}
                            selectedValue={medium}
                            setValue={(value) => setValue("medium", value, { shouldValidate: true })}
                        />
                        {/* Job Category */}
                        <SearchDropDownField
                            label="Job Category *"
                            options={JobCategory}
                            selectedValue={jobCategory}
                            setValue={(value) => setValue("jobCategory", value, { shouldValidate: true })}
                        />

                        {/* jobSalary */}
                        <SearchDropDownField
                            label="Tuition Salary *"
                            options={JobSalary}
                            selectedValue={jobSalary}
                            setValue={(value) => setValue("jobSalary", value, { shouldValidate: true })}
                        />
                        {/* tuition Gender */}
                        <SearchDropDownField
                            label="Tuition Gender *"
                            options={TuitionGender}
                            selectedValue={tutorGender}
                            setValue={(value) => setValue("tutorGender", value, { shouldValidate: true })}
                        />

                        {/* per Week */}
                        <SearchDropDownField
                            label="Per Week *"
                            options={PerWeek}
                            selectedValue={perWeek}
                            setValue={(value) => setValue("perWeek", value, { shouldValidate: true })}
                        />

                        {/* Duration*/}
                        <SearchDropDownField
                            label="Class Duration *"
                            options={Duration}
                            selectedValue={duration}
                            setValue={(value) => setValue("duration", value, { shouldValidate: true })}
                        />
                        {/* fixedTime*/}
                        <SearchDropDownField
                            label="Fixed Time *"
                            options={FixedTime}
                            selectedValue={fixedTime}
                            setValue={(value) => setValue("fixedTime", value, { shouldValidate: true })}
                        />
                        {/* StudentGender*/}
                        <SearchDropDownField
                            label="Student Gender *"
                            options={StudentGender}
                            selectedValue={studentGender}
                            setValue={(value) => setValue("studentGender", value, { shouldValidate: true })}
                        />
                        {/* jobLocation */}
                        <div className="space-y-2">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Contact Number*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your contact number"
                                {...register("contactNumber", { maxLength: 14 })}
                                className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                            {errors.contactNumber && (
                                <p className="text-red-500 text-sm">Contact number is required</p>
                            )}
                        </div>
                        {/* jobLocation */}
                        <div className="space-y-2">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">WhatsApp Number</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your whatsApp number"
                                {...register("whatsAppNumber", { maxLength: 14 })}
                                className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                        </div>
                        {/* student School */}
                        <div className="space-y-2 md:col-span-2 text-left">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Student School Name *</span>
                            </label>
                            <input
                                {...register("studentSchool", { required: true })}
                                type="text"
                                placeholder="Enter your job location"
                                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm mt-2"
                            />
                            {errors.studentSchool && (
                                <p className="text-red-500 text-sm">student school name is required</p>
                            )}
                        </div>

                        {/* tuitionDistrictName*/}
                        <SearchDropDownField
                            label="Tuition District Name *"
                            options={DistrictAreas}
                            selectedValue={tuitionDistrictName}
                            setValue={(value) => setValue("tuitionDistrictName", value, { shouldValidate: true })}
                        />
                        <div className="space-y-2">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Job Comment</span>
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
    )
};

export default TuitionJobCreate;