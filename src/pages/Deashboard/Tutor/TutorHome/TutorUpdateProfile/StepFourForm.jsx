import { useForm } from "react-hook-form";
import AllSubjects from "../../../../../Helpers/subjectData";

const StepFourForm = ({ handleFinalSubmit }) => {

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    // Function to handle form submission
    const onSubmit = (data) => {
        console.log("Form data:", data);
        handleFinalSubmit(data); // Move to the next step on successful submission
    };

    return (
        <div className='bg-white rounded-2xl shadow-xl'>
            <h3 className='text-center text-lg font-semibold pt-4'>ডকুমেন্টেশন</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:px-8 px-3 py-3 md:py-5">
                <h5 className="text-lg font-bold text-slate-700">Present Institute</h5>
                <div className="bg-slate-50 py-5 px-3">
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
                                {AllSubjects.map((subject, index) => (
                                    <option key={index} value={subject} className="h-20">
                                        {subject}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="mt-4 px-4 py-2 mx-auto bg-blue-500 text-white rounded"
                    >
                        Save and Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StepFourForm;