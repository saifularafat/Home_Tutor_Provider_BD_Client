import { useForm } from "react-hook-form";

const StepFirstFrom = ({ completeStep }) => {

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
            <h3 className='text-center text-2xl font-semibold pt-4'>পারসোনাল ইনফর্মেশন</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:px-8 px-3 py-3 md:py-5">
                <div className='grid md:grid-cols-2 gap-5 w-full'>
                    <div className="col-span-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-500 tracking-wider">Name </span>
                        </label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Enter Your Name"
                            className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                        />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-500 tracking-wider">Email </span>
                        </label>
                        <input
                            {...register("email", { required: true })}
                            type="email"
                            placeholder="Enter Your Email"
                            className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                        />
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-5 w-full'>
                    <div className="col-span-1">
                        <label htmlFor='image' className='block text-slate-700 font-medium pb-1'>
                            <span className="font-bold text-slate-500 tracking-wider">Gender</span>
                        </label>
                        <select {...register("gender")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                            <option value="male">male</option>
                            <option value="female">female</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-500 tracking-wider">Your Number </span>
                        </label>
                        <input
                            {...register("number", { required: true })}
                            type="number"
                            placeholder="Enter Your Number"
                            className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                        />
                    </div>
                </div>

                <div className=" space-y-1">
                    <label className="block text-slate-700  font-medium">
                        <span className="font-bold text-slate-500 tracking-wider">Address </span>
                    </label>
                    <input
                        {...register("address", { required: true })}
                        type="text"
                        placeholder="Enter Your Address"
                        className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                    />
                    {errors.phone && (
                        <span className="mt-1 text-red-500">
                            Address field is required
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

export default StepFirstFrom;