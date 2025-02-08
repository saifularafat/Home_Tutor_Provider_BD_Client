import { useForm } from "react-hook-form";
import BangladeshProfessions from "../../../../Helpers/BangladeshAllProfessions ";
import BangladeshAllUniversitiesName from "../../../../Helpers/BDAllUniversityName";
import DistrictAreas from "../../../../Helpers/DistrictAreas";
import { useParams } from "react-router-dom";
import { useSingleUser } from "../../../../api/useAllUsers";
import Loading from "../../../../Components/Loading/Loading";
import SearchDropDownField from "../../../../Components/SearchDropDownFiled/SearchDropDownField";
import { TuitionGender } from "../../../../Helpers/TuitionJobCreate";

const ParentProfileUpdate = () => {
    const { register,
        formState: { errors },
        handleSubmit,
        reset,
        setValue,
        watch,
    } = useForm();

    const { id } = useParams();
    console.log("useSingleUser PARENT IDDDDDD=>", id);
    const { user = { user: {} }, refetch, isLoading, isError } = useSingleUser(id);
    console.log("useSingleUser PARENT", user?.user);


    const Professions = watch("Professions");
    const parentGender = watch("parentGender");
    const universityName = watch("universityName");
    const PreferableArea = watch("PreferableArea");

    const onSubmit = (data) => {
        const formData = {
            name: data.name,
            phone: data.phone,
            address: data.address,
            livingAddress: data.livingAddress,
            parentGender: parentGender,
            nidBirth: data.nidBirth,
            professions: Professions,
            universityName: universityName,
            PreferableArea: PreferableArea,
            ParentBio: data.ParentBio,
            progressBar: 100,
        };
        console.log(' parent info', formData);
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
        <div className="px-2">
            <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                <div className=" bg-white px-4 rounded-md py-8 space-y-2">
                    <h2 className="text-xl font-semibold text-slate-600">Update Parent Profile</h2>
                    <div className="md:flex items-center gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-sm text-slate-600 font-semibold">Name </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                {...register("name")}
                                defaultValue={user?.user?.name}
                                className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-sm text-slate-600 font-semibold">Email</span>
                            </label>
                            <p
                                className="bg-transparent lowercase input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            >
                                {user?.user?.email}
                            </p>
                        </div>
                    </div>
                    <div className="md:flex items-center gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-sm text-slate-600 font-semibold">Guardian Number</span>
                            </label>
                            <input
                                {...register("phone", {
                                    required: "Parent Phone Number field is required",
                                    pattern: {
                                        value: /^(\+8801|8801|01)[3-9]\d{8}$/,
                                        message: "Enter a valid phone number (+8801XXXXXXXXX)",
                                    },
                                })}
                                type="text"
                                placeholder="Enter Parent Phone Number (e.g., +8801XXXXXXXXX)"
                                defaultValue={user?.user?.phone}
                                className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-sm text-slate-600 font-semibold">Address</span>
                            </label>
                            <input
                                {...register("address", { required: "Address is required" })}
                                type="text"
                                placeholder="Enter Your Address"
                                defaultValue={user?.user?.address}
                                className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-sm text-slate-600 font-semibold">Living Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Living Address"
                                {...register("livingAddress", { required: "Address is required" })}
                                defaultValue={user?.user?.livingAddress}
                                className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                            {errors.livingAddress && (
                                <p className="text-red-500 text-sm mt-1">{errors.livingAddress.message}</p>
                            )}
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-3">
                        <div className="col-span-1 space-y-2">
                            <SearchDropDownField
                                label="Professions *"
                                options={BangladeshProfessions}
                                selectedValue={Professions}
                                setValue={(value) => setValue("Professions", value)}
                            />
                            {errors.Professions && <p className="text-red-500 text-sm">Please Select Parent Gender</p>}
                        </div>
                        <div className="col-span-1 space-y-2">
                            <SearchDropDownField
                                label="Gender *"
                                options={TuitionGender}
                                selectedValue={parentGender}
                                setValue={(value) => setValue("parentGender", value)}
                            />
                            {errors.parentGender && <p className="text-red-500 text-sm">Please Select Parent Gender</p>}
                        </div>
                        <div className="col-span-1 space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-medium text-sm text-slate-700 tracking-wider">Nid/Birth Image *(সর্বোচ্চ 200kb এর ছবি দিন)</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered file-input-primary w-full"
                                {...register("nidBirth", {
                                    required: "Nid Birth Photo is required",
                                    validate: {
                                        fileType: (value) =>
                                            ["image/png", "image/jpg", "image/jpeg"].includes(value[0]?.type) || "Only PNG, JPG, and JPEG files are allowed.",
                                        fileSize: (value) =>
                                            value[0]?.size <= 200 * 1024 || "File size should be less than or equal to 200KB.",
                                    },
                                })}
                                accept=".png, .jpg, .jpeg"
                            />
                            {errors.nidBirth && <p className="text-red-500 text-sm">{errors.nidBirth.message}</p>}
                        </div>
                    </div>
                </div>

                {/* second section */}
                <div className="bg-white px-4 rounded-md py-8 mt-2">
                    <h2 className="text-2xl font-semibold text-slate-700">Others Information</h2>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-3">
                        <div className="col-span-1 space-y-2">
                            <SearchDropDownField
                                label="University Name"
                                options={BangladeshAllUniversitiesName}
                                selectedValue={universityName}
                                setValue={(value) => setValue("universityName", value)}
                            />
                        </div>
                        <div className="col-span-1 space-y-2">
                            <SearchDropDownField
                                label="Preferable Area"
                                options={DistrictAreas}
                                selectedValue={PreferableArea}
                                setValue={(value) => setValue("PreferableArea", value)}
                            />
                        </div>
                    </div>
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
                    <div className="mt-9 w-1/4 mx-auto">
                        <button className="flex items-center justify-center w-full bg-blue-400 hover:bg-blue-500 transition-all duration-200 rounded-md py-[6px] text-white text-xl font-semibold tracking-wide">
                            Update
                        </button>
                    </div>
                </div>
            </form >
        </div >
    );
};

export default ParentProfileUpdate;