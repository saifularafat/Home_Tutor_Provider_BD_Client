import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { useSingleUser } from "../../../../api/useAllUsers";
import Loading from "../../../../Components/Loading/Loading";

const CoachingProfileUpdate = () => {

    const { id } = useParams();
    const { user = { user: {} }, refetch, isLoading, isError } = useSingleUser(id);
    console.log("useSingleUser", user?.user);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset } = useForm();

    const onSubmit = (data) => {
        const formData = {
            ...data,
        }
        console.log(formData);
    }

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
        <div className="p-6 my-10 rounded-md bg-slate-50">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-600 text-center tracking-wider">Update Your Profile</h2>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-500 tracking-wider">Coaching Center Name *</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your coaching center Name"
                            {...register("name")}
                            defaultValue={user?.user?.name}
                            className="bg-transparent input bg-slate-300 border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full text-sm"
                        />
                    </div>
                    {/* Email (Disabled) */}
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-500 tracking-wider">Email </span>
                        </label>
                        <p className="bg-transparent input bg-slate-300 tracking-wider border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full text-sm">
                            {user?.user?.email}
                        </p>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    {/* Phone Number */}
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-500 tracking-wider">Phone* </span>
                        </label>
                        <input
                            {...register("phone", {
                                required: "Coaching Center Phone Number field is required",
                                pattern: {
                                    value: /^(\+8801|8801|01)[3-9]\d{8}$/,
                                    message: "Enter a valid phone number (+8801XXXXXXXXX)",
                                },
                            })}
                            type="text"
                            placeholder="Enter Coaching Center Phone Number (e.g., +8801XXXXXXXXX)"
                            defaultValue={user?.user?.phone}
                            className="bg-transparent input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                        />
                        {errors.phone && <span className="mt-1 text-red-500">{errors.phone.message}</span>}
                    </div>

                    {/* Address */}
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-500 tracking-wider">Coaching Center Address *</span>
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

                <div className='grid md:grid-cols-3 col-span-1 gap-5'>
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-500 tracking-wider">Website/Social Media Links*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Coaching Center Website or Social Media Link"
                            {...register("websiteSocialLink", {
                                required: "This field is required",
                                pattern: {
                                    value: /^(https?:\/\/)?(www\.)?[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                                    message: "Please enter a valid URL (e.g., https://example.com)"
                                }
                            })}
                            defaultValue={user?.user?.websiteSocialLink || ''}
                            className="bg-transparent input bg-slate-300 border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full text-sm"
                        />
                        {errors.websiteSocialLink && (
                            <p className="text-red-500 text-sm mt-1">{errors.websiteSocialLink.message}</p>
                        )}
                    </div>
                    {/* Achievements */}
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-500 tracking-wider">Achievements (optional)</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Your Coaching Center Achievements"
                            {...register("achievements")}
                            defaultValue={user?.user?.achievements || ''}
                            className="bg-transparent input bg-slate-300 border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full text-sm"
                        />
                    </div>

                    {/* License Picture */}
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-medium text-sm text-slate-700 tracking-wider">License Photo (সর্বোচ্চ 200kb এর ছবি দিন)</span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered file-input-primary w-full"
                            {...register("licensePhoto", {
                                required: "license Photo is required",
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
                    </div>
                </div>
                {/* BIO */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="font-bold text-lg text-slate-500 tracking-wider">Bio</span>
                    </label>
                    <textarea
                        id="bio"
                        cols="20"
                        rows="2"
                        placeholder="Please Type Your Coaching Center Bio"
                        defaultValue={user?.user?.bio || ''}
                        {...register("bio", {
                            required: "Bio is required",
                            validate: (value) => {
                                const words = value.trim().split(/\s+/).length;
                                if (words < 6) return "Bio must be at least 6 words";
                                if (words > 15) return "Bio cannot exceed 15 words";
                                return true;
                            }
                        })}
                        className="border border-sky-300 rounded-lg outline-sky-600 placeholder:text-sm overflow-hidden w-full p-2"
                    />
                    {errors.bio && (
                        <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
                    )}
                </div>
                <div className="md:flex-1 flex-col-reverse items-center">
                    {/* SUBMIT BUTTON */}
                    <div className="md:mt-5 mt-1 w-1/4 mx-auto">
                        <button className="flex items-center justify-center w-full bg-blue-400 hover:bg-blue-500 transition-all duration-200 rounded-md py-[6px] text-white text-xl font-semibold tracking-wide">
                            Update
                        </button>
                    </div>
                    {/* TODO UPDATE USER PHOTO */}
                    {/* PHOTO UPDATE */}
                    <div className="text-end">
                        <Link
                            to={`/dashboard/photo-update/${user?.user?._id}`}
                            className="text-sm font-semibold underline italic hover:not-italic hover:text-green-700 transition-all duration-200"
                        >
                            Photo update now
                        </Link>
                        <div className="flex items-end  justify-end">
                            <img
                                src={user?.user?.image}
                                className="w-20 h-20 bg-cover rounded-md"
                                alt="coaching logo" />
                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
};

export default CoachingProfileUpdate;