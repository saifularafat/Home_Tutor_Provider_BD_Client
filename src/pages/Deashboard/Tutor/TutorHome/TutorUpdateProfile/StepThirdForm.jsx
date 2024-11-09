import { useForm } from "react-hook-form";
import { GiBoxUnpacking } from "react-icons/gi";

const StepThirdForm = ({ completeStep }) => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    // Function to handle form submission
    const onSubmit = (data) => {
        console.log("Form data:", data);
        completeStep(data); // Move to the next step on successful submission
    };
    return (
        <div className='bg-white rounded-2xl shadow-xl'>
            <h3 className='text-center text-2xl font-semibold pt-4'>অন্যান্য ইনফর্মেশন</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:px-8 px-3 py-3 md:py-5">
                {/* step - 1 */}
                <div className="flex items-center gap-2">
                    <GiBoxUnpacking className="text-lg text-slate-600" />
                    <h5 className="text-lg font-bold text-slate-600">Experience</h5>
                </div>
                <div className='grid md:grid-cols-2 gap-5 w-full'>
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-sm text-slate-600 tracking-wider">Your Experience </span>
                        </label>
                        <input
                            {...register("experience", { required: true })}
                            type="number"
                            placeholder="Enter Your Name"
                            className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                        />
                    </div>
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-sm text-slate-600 tracking-wider">Your Expected Salary </span>
                        </label>
                        <input
                            {...register("expectedSalary", { required: true })}
                            type="text"
                            placeholder="Enter Your text"
                            className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                        />
                    </div>
                </div>
                {/* step - 2 */}
                <div className="flex items-center gap-2">
                    <GiBoxUnpacking className="text-lg text-slate-600" />
                    <h5 className="text-lg font-bold text-slate-600">Your Preferable Class/Subject</h5>
                </div>
                <div className='grid md:grid-cols-4 gap-5 w-full'>
                    <div className="col-span-1">
                        <label htmlFor='image' className='block text-slate-700 font-medium pb-1'>
                            <span className="font-semibold text-slate-600 text-sm">Preferable Class</span>
                        </label>
                        <select {...register("preferableClass")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label htmlFor='image' className='block text-slate-700 font-medium pb-1'>
                            <span className="font-bold text-slate-600 tracking-wider">Medium</span>
                        </label>
                        <select {...register("medium")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label htmlFor='image' className='block text-slate-700 font-medium pb-1'>
                            <span className="font-bold text-slate-600 tracking-wider">Expected Salary</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Expected Salary"
                            {...register('expectedSalary')}
                            className="block w-full border border-gray-300 rounded px-3 py-2 mb-4"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-600 tracking-wider">Preferable Subject</span>
                        </label>
                        <select {...register("preferableSubject")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                </div>

                <div className=" space-y-1">
                    <label className="block text-slate-700  font-medium">
                        <span className="font-bold text-slate-600 tracking-wider">Preferable Medium </span>
                    </label>
                    <select {...register("preferableMedium")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                    {errors.preferableMedium && (
                        <span className="mt-1 text-red-500">
                            Preferable Medium field is required
                        </span>
                    )}
                </div>
                <div className=" space-y-3">
                    <label className="block text-slate-700 space-y-1">
                        <span className="font-bold text-slate-600 tracking-wider">Additional Qualification </span>
                        <p className="text-sm text-slate-600 font-bold">আপনি কি কোচিং/স্কুল/কলেজ এর শিক্ষক</p>
                    </label>
                    <select {...register("preferableMedium")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                    {errors.preferableMedium && (
                        <span className="mt-1 text-red-500">
                            Preferable Medium field is required
                        </span>
                    )}
                </div>
                <div className=" space-y-3">
                    <label className="block text-slate-700 space-y-1">
                        <span className="font-bold text-slate-600 tracking-wider">Preferable Area</span>
                    </label>
                    <select {...register("preferableArea")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                    {errors.preferableArea && (
                        <span className="mt-1 text-red-500">
                            Preferable Medium field is required
                        </span>
                    )}
                </div>
                <div className=" space-y-3">
                    <label className="block text-slate-700 space-y-1">
                        <span className="font-bold text-slate-600 tracking-wider">Preferable Sub Area</span>
                    </label>
                    <select {...register("preferableSubArea")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                        <option value="male">male</option>
                        <option value="female">female</option>
                        <option value="other">other</option>
                    </select>
                    {errors.preferableArea && (
                        <span className="mt-1 text-red-500">
                            Preferable Medium field is required
                        </span>
                    )}
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

export default StepThirdForm;