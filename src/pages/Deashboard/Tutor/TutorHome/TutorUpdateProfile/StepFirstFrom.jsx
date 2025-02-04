import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useSingleUser } from "../../../../../api/useAllUsers";
import Loading from "../../../../../Components/Loading/Loading";

const StepFirstFrom = ({ completeStep }) => {
    const { id } = useParams();
    const { user = { user: {} }, refetch, isLoading, isError } = useSingleUser(id);
    console.log("useSingleUser", user?.user);

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form data:", data);
        completeStep(data);
    };

    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <p className="text-red-500">Error fetching user data</p>;
    }
    if (!user?.user) {
        return <p>No user data found</p>;
    }

    return (
        <div className='bg-white rounded-2xl shadow-xl'>
            <h3 className='text-center text-2xl font-semibold pt-4'>পারসোনাল ইনফর্মেশন</h3>

            {/* ✅ Form will submit ONLY when clicking the Submit button */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:px-8 px-3 py-3 md:py-5">

                <div className='grid md:grid-cols-2 gap-5 w-full'>

                    {/* Name Input */}
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-500 tracking-wider">Name *</span>
                        </label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            placeholder="Enter Your Name"
                            defaultValue={user?.user?.name}
                            className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                        />
                        {errors.name && <span className="mt-1 text-red-500">{errors.name.message}</span>}
                    </div>

                    {/* Email (Disabled) */}
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-500 tracking-wider">Email *</span>
                        </label>
                        <p className="bg-transparent input bg-slate-300 border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full text-sm">
                            {user?.user?.email}
                        </p>
                    </div>

                    {/* Gender Select */}
                    <div className="col-span-1 space-y-1">
                        <label className='block text-slate-700 font-medium pb-1'>
                            <span className="font-bold text-slate-500 tracking-wider">Gender</span>
                        </label>
                        <select
                            {...register("gender", { required: "Gender is required" })}
                            defaultValue={user?.user?.gender || "male"}
                            className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.gender && <span className="mt-1 text-red-500">{errors.gender.message}</span>}
                    </div>

                    {/* Phone Number */}
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-500 tracking-wider">Phone* </span>
                        </label>
                        <input
                            {...register("phone", {
                                required: "Phone field is required",
                                pattern: {
                                    value: /^(\+8801|8801|01)[3-9]\d{8}$/,
                                    message: "Enter a valid phone number (+8801XXXXXXXXX)",
                                },
                            })}
                            type="text"
                            placeholder="Enter Your Phone (e.g., +8801XXXXXXXXX)"
                            defaultValue={user?.user?.phone}
                            className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                        />
                        {errors.phone && <span className="mt-1 text-red-500">{errors.phone.message}</span>}
                    </div>

                    {/* Address */}
                    <div className="col-span-2 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-500 tracking-wider">Address *</span>
                        </label>
                        <input
                            {...register("address", { required: "Address is required" })}
                            type="text"
                            placeholder="Enter Your Address"
                            defaultValue={user?.user?.address}
                            className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                        />
                        {errors.address && <span className="mt-1 text-red-500">{errors.address.message}</span>}
                    </div>

                </div>

                {/* ✅ Submit Button (ONLY triggers submission) */}
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={Object.keys(errors).length > 0}
                        className={`px-4 py-2 rounded-md mt-4 text-white transition-all duration-300 ${Object.keys(errors).length > 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                            }`}
                    >
                        Save and Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StepFirstFrom;