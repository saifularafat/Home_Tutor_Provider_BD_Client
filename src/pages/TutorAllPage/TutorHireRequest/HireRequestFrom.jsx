import { useState } from "react";
import { useForm } from "react-hook-form";
import HirePageRequestModel from "../../../Components/Model/HirePageRequestModel";
import { BdAllDistrictAndArea } from "../../../Helpers/BdAllDistrictAndArea";
import { singleTutor } from "../../../api/allTutor";
import Loading from "../../../Components/Loading/Loading";
import ErrorComponent from "../../../Components/ErrorComponent/ErrorComponent";
import NoJobFound from "../../../Components/NoFoundData/NoFoundData";
import { useAllUsers } from "../../../api/useAllUsers";
import PageTitleShow from "../../../Components/PageTitleShow/PageTitleShow";
import SearchDropdown from "../../../Components/SearchInputFuntion/SearchDropdown";
import AllSubjects from "../../../Helpers/SubjectData";
import PreferableClassOptions from "../../../Helpers/PreferableClass";
import { JobSalary, PerMonth, PerWeek, StudentGender } from "../../../Helpers/TuitionJobCreate";
import axios from "axios";
import { serverApiUrl } from "../../../../ApiSecret";
import Swal from "sweetalert2";
const HireRequestFrom = ({ id }) => {
    const [openModal, setOpenModal] = useState(false);
    const [districts, setDistricts] = useState();
    const [cityAreas, setCityAreas] = useState([]);

    const { register, formState: { errors }, reset, handleSubmit, setValue, watch } = useForm();

    const { tutors, refetch, isLoading, isError } = singleTutor(id);
    const [users] = useAllUsers();
    const { users: allUsers } = users || [];

    if (!allUsers) {
        return <Loading />;
    }
    // console.log('object allUsers HireRequestFrom serial number 13=====>', allUsers);
    const parentFind = allUsers.find((parent) => parent?.isParent === true) || {}

    // LOCATION CLICK show sub location
    const handleDistricts = (e) => {
        setDistricts(e.target.value)
        setCityAreas(BdAllDistrictAndArea.find(areas => areas.stateName === e.target.value).stateAreas)
    }

    const jobSubject = watch("jobSubject");
    const studentClass = watch("studentClass");
    const howManyStudent = watch("howManyStudent");
    const studentGender = watch("studentGender");
    const tuitionSalary = watch("tuitionSalary");
    const tuitionStartMonth = watch("tuitionStartMonth");

    // all data submit from
    const onSubmit = async (data) => {
        const hireData = {
            // tutor info
            tutorId: tutors?.user?.userId || '',
            tutorEmail: tutors?.user?.email || '',
            tutorName: tutors?.user?.name || '',
            tutorPhone: tutors?.user?.phone || "",
            tutorImage: tutors?.user?.image || "image upComming",
            tutorAddress: tutors?.user?.address || "",
            // parent info
            ParentEmail: parentFind?.email || "",
            parentName: parentFind?.name || "",
            parentAddress: parentFind?.address || "",
            parentImage: parentFind?.image || "",
            parentId: parentFind?.userId || "",
            // form info
            jobSubject: jobSubject,
            studentClass: studentClass,
            tuitionSalary: tuitionSalary,
            howManyStudent: howManyStudent,
            tuitionStartMonth: tuitionStartMonth,
            studentGender: studentGender,
            parentPhone: data?.parentPhone || "",
            jobCategory: data?.jobCategory || "",
            studentLocation: data?.studentLocation || "",
            studentSubLocation: data?.studentSubLocation || "",
            tuitionFullAddress: data?.tuitionFullAddress || "",
            comments: data?.comments || "",
        }
        console.log("first data hire Data ===>>>", hireData);
        try {
            const response = await axios.post(`${serverApiUrl}/api/tutor-hire-request`, hireData);
            console.log("API Response:", response.data);
            if (response.data.success) {
                reset();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error posting tutor hire request information:", error.response?.data || error.message);
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Failed to create job. Check your inputs.",
                text: error.response?.data?.message || error.message,
                showConfirmButton: true
            });
        }
    }

    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <ErrorComponent message="Error fetching tutor information details." />;
    }

    if (!tutors) {
        return <NoJobFound message="No tutor found." />;
    }
    return (
        <>
            <PageTitleShow currentPage="Hire Tutor Request |" />
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                    <div className="grid md:grid-cols-2 md:gap-x-5 gap-x-2 md:gap-y-2 gap-y-1 bg-[#F3F3F3] px-4 rounded-md">
                        {/* Category */}
                        <div className="md:col-span-2 space-y-2">
                            <label className="">
                                <span className="font-semibold text-slate-600 tracking-wider">Category *</span>
                            </label>
                            <select {...register("jobCategory")}
                                className="select input input-bordered w-full focus:border-blue-400 text-base font-normal">
                                <option value="Online" selected>Online</option>
                                <option value="StudentsHome">Students Home</option>
                                <option value="TeachersHome">Teachers Home</option>
                                <option value="CoachingCenter">Coaching Center</option>
                                <option value="School">School</option>
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Subject *</span>
                            </label>
                            <SearchDropdown
                                options={AllSubjects}
                                selectedValue={jobSubject}
                                onSelect={(value) => setValue("jobSubject", value, { shouldValidate: true })}
                                hookPlaceholder="Please select a subject"
                            />
                            {!jobSubject && (
                                <p className="text-red-500 text-sm">Student subject is required</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Class *</span>
                            </label>
                            <SearchDropdown
                                options={PreferableClassOptions}
                                selectedValue={studentClass}
                                onSelect={(value) => setValue("studentClass", value, { shouldValidate: true })}
                                hookPlaceholder="Please select a student class"
                            />
                            {!studentClass && (
                                <p className="text-red-500 text-sm">Student Class is required</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Tuition Salary *</span>
                            </label>
                            <SearchDropdown
                                options={JobSalary}
                                selectedValue={tuitionSalary}
                                onSelect={(value) => setValue("tuitionSalary", value, { shouldValidate: true })}
                                hookPlaceholder="Please select a your tuition salary"
                            />
                            {!tuitionSalary && (
                                <p className="text-red-500 text-sm">Tuition salary is required</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">How Many Student *</span>
                            </label>
                            <SearchDropdown
                                options={PerWeek}
                                selectedValue={howManyStudent}
                                onSelect={(value) => setValue("howManyStudent", value, { shouldValidate: true })}
                                hookPlaceholder="How many student number"
                            />
                            {!howManyStudent && (
                                <p className="text-red-500 text-sm">How many student is required</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Start Month*</span>
                            </label>
                            <SearchDropdown
                                options={PerMonth}
                                selectedValue={tuitionStartMonth}
                                onSelect={(value) => setValue("tuitionStartMonth", value, { shouldValidate: true })}
                                hookPlaceholder="Please select a your tuition Start Month"
                            />
                            {!tuitionStartMonth && (
                                <p className="text-red-500 text-sm">Tuition Start Month is required</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-semibold text-slate-600 tracking-wider">Student Gender*</span>
                            </label>
                            <SearchDropdown
                                options={StudentGender}
                                selectedValue={studentGender}
                                onSelect={(value) => setValue("studentGender", value, { shouldValidate: true })}
                                hookPlaceholder="Please select your student gender"
                            />
                            {!studentGender && (
                                <p className="text-red-500 text-sm">Student gender is required</p>
                            )}
                        </div>

                        <div className="space-y-1">
                            <label className="label">
                                <span className="font-semibold text-slate-600 tracking-wider">Location *</span>
                            </label>
                            <select {...register("studentLocation")}
                                className="select input input-bordered w-full focus:border-blue-400 text-base font-normal"
                                onChange={handleDistricts}
                            >
                                <option value="" selected>-- select -- </option>
                                {
                                    BdAllDistrictAndArea.map(district => (
                                        <option
                                            key={district?.stateName}
                                            value={district?.stateName}>
                                            {district?.stateName}
                                        </option>
                                    ))
                                }
                            </select>
                            {errors.studentLocation?.type === "required" && (
                                <p className="text-red-600 text-sm">Student Location is required</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <label className="label">
                                <span className="font-semibold text-slate-600 tracking-wider">Sub Location *</span>
                            </label>
                            <select {...register("studentSubLocation")}
                                className="select input input-bordered w-full focus:border-blue-400 text-base font-normal">
                                <option selected>-- select --</option>
                                {cityAreas.map(city => (
                                    <option
                                        key={city?.name}
                                        value={city.name}>{city?.name}</option>
                                ))}
                            </select>
                            {errors.studentSubLocation?.type === "required" && (
                                <p className="text-red-600 text-sm">Sub Location is required</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <label className="label ">
                                <span className="font-semibold text-slate-600 tracking-wider">Full Address *</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Full Address"
                                {...register("tuitionFullAddress", { required: true, maxLength: 120 })}
                                className="input input-bordered w-full text-base"
                            />
                            {errors.tuitionFullAddress?.type === "required" && (
                                <p className="text-red-600 text-sm">Your Tuition Full Address is required</p>
                            )}
                        </div>
                        <div className="space-y-1">
                            <label className="label">
                                <span className="font-semibold text-slate-600 tracking-wider">Parent Phone number *</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your Parent Phone Number"
                                {...register("parentPhone", { required: "Contact number is required", maxLength: 14, value: '8801' })}
                                className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                            {
                                errors.parentPhone?.type === "required" && (
                                    <p className="text-red-600 text-sm">Parent Phone Number is required</p>
                                )}
                        </div>
                        <div className="md:col-span-2">
                            <label className="label">
                                <span className="label-text text-xl  font-semibold">Additional Comments *</span>
                            </label>
                            <textarea
                                name=""
                                id=""
                                cols="20"
                                rows="3"
                                placeholder="Additional Comments"
                                {...register("comments")}
                                className="border border-sky-300 rounded-lg outline-sky-400 placeholder:text-sm overflow-hidden w-full py-2 px-4"
                            >
                            </textarea>
                        </div>
                        {/* modal */}
                        <div className="w-11/12 mx-auto">
                            <HirePageRequestModel actionBtn="Submit" subLink={'/dashboard/parent-tutor-apply'} openModal={openModal} setOpenModal={setOpenModal} />
                        </div>
                    </div>
                </form>
            </div>


        </>
    );
};

export default HireRequestFrom;