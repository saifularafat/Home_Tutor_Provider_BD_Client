import { useForm } from "react-hook-form";
import AllSubjects from "../../../../../Helpers/subjectData";
import { useNavigate } from "react-router-dom";

const StepFourForm = ({ handleFinalSubmit }) => {

    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    // Function to handle form submission
    const onSubmit = (data) => {
        const updateComplete = {
            ...data,
            progressBar: 100,
        }
        console.log("Form data:", updateComplete);
        handleFinalSubmit(data);
        navigate('/dashboard/profile')
    };

    return (
        <div className='bg-white rounded-2xl shadow-xl'>
            <h3 className='text-center text-lg font-semibold pt-4'>ডকুমেন্টেশন</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:px-8 px-3 py-3 md:py-5">
                <h5 className="text-lg font-bold text-slate-700">Present Institute</h5>
                <div className="bg-white shadow-md rounded-md py-8 px-3 space-y-4">
                    <div className='grid md:grid-cols-1 gap-5 w-4/5 mx-auto'>
                        <div className="col-span-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-bold text-slate-500 tracking-wider">Institute Name*</span>
                            </label>
                            <input
                                {...register("presentInstituteName", { required: true })}
                                type="text"
                                placeholder="Enter Your Present Institute Name"
                                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 gap-5 w-4/5 mx-auto'>
                        <div className="col-span-1 space-y-2">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-bold text-slate-500 tracking-wider">Semester* </span>
                            </label>
                            <input
                                {...register("runningSemester", { required: true })}
                                type="text"
                                placeholder="Enter Your Running Semester "
                                className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                        </div>
                        <div className="col-span-1 space-y-2">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-bold text-slate-500 tracking-wider">Department/Subject</span>
                            </label>
                            <select
                                {...register("preferableSubject")}
                                className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                                style={{ height: 'auto', maxHeight: '100px', overflowY: 'auto' }}
                            >
                                <option value="" disabled selected>--select--</option>
                                {AllSubjects.map((subject, index) => (
                                    <option key={index} value={subject} className="h-20">
                                        {subject}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* PHOTO SECTION */}
                <div className="bg-white shadow-md rounded-md py-10 px-3 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* Profile Picture */}
                        {/* <div className="space-y-2 w-full max-w-xs mx-auto">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-medium text-sm text-slate-700 tracking-wider">Profile Picture (সর্বোচ্চ 200kb এর ছবি দিন) </span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered file-input-info w-full"
                                {...register("profilePhoto", {
                                    required: "File is required",
                                    validate: {
                                        fileType: (value) =>
                                            ["image/png", "image/jpg", "image/jpeg"].includes(value[0]?.type) || "Only PNG, JPG, and JPEG files are allowed.",
                                        fileSize: (value) =>
                                            value[0]?.size <= 200 * 1024 || "File size should be less than or equal to 200KB.",
                                    },
                                })}
                                accept=".png, .jpg, .jpeg"
                            />
                            {errors.profilePhoto && <p className="text-red-500 text-sm">{errors.profilePhoto.message}</p>}
                        </div> */}

                        {/* NID Picture */}
                        {/* <div className="space-y-2 w-full max-w-xs mx-auto">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-medium text-sm text-slate-700 tracking-wider">NID Picture (সর্বোচ্চ 200kb এর ছবি দিন)</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered file-input-primary w-full"
                                {...register("nidPhoto", {
                                    required: "File is required",
                                    validate: {
                                        fileType: (value) =>
                                            ["image/png", "image/jpg", "image/jpeg"].includes(value[0]?.type) || "Only PNG, JPG, and JPEG files are allowed.",
                                        fileSize: (value) =>
                                            value[0]?.size <= 200 * 1024 || "File size should be less than or equal to 200KB.",
                                    },
                                })}
                                accept=".png, .jpg, .jpeg"
                            />
                            {errors.nidPhoto && <p className="text-red-500 text-sm">{errors.nidPhoto.message}</p>}
                        </div> */}

                        {/* Student ID Card Picture */}
                        <div className="md:col-span-3 col-span-1 space-y-2 w-full max-w-sm mx-auto">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-medium text-sm text-slate-700 tracking-wider">Student ID Card Picture (সর্বোচ্চ 200kb)</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered file-input-success w-full"
                                {...register("studentIdCardPicture", {
                                    required: "File is required",
                                    validate: {
                                        fileType: (value) =>
                                            ["image/png", "image/jpg", "image/jpeg"].includes(value[0]?.type) || "Only PNG, JPG, and JPEG files are allowed.",
                                        fileSize: (value) =>
                                            value[0]?.size <= 200 * 1024 || "File size should be less than or equal to 200KB.",
                                    },
                                })}
                                accept=".png, .jpg, .jpeg"
                            />
                            {errors.studentIdCardPicture && <p className="text-red-500 text-sm">{errors.studentIdCardPicture.message}</p>}
                        </div>
                    </div>
                </div>


                <div className="text-center">
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 mx-auto bg-blue-500 text-white rounded"
                    >
                        Complete
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StepFourForm;