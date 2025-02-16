import { useForm } from "react-hook-form";
import BangladeshProfessions from "../../../../Helpers/BangladeshAllProfessions ";
import BangladeshAllUniversitiesName from "../../../../Helpers/BDAllUniversityName";
import DistrictAreas from "../../../../Helpers/DistrictAreas";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSingleUser } from "../../../../api/useAllUsers";
import Loading from "../../../../Components/Loading/Loading";
import SearchDropDownField from "../../../../Components/SearchDropDownFiled/SearchDropDownField";
import { useState } from "react";
import { imageURLKey, serverApiUrl } from "../../../../../ApiSecret";
import Swal from "sweetalert2";
import axios from "axios";
import PageTitleShow from "../../../../Components/PageTitleShow/PageTitleShow";

const ParentProfileUpdate = () => {
    const [imageError, setImageError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    const { register,
        formState: { errors },
        handleSubmit,
        reset,
        setValue,
        watch,
    } = useForm();

    const { user = { user: {} }, refetch, isLoading, isError } = useSingleUser(id);
    console.log("useSingleUser PARENT", user?.user);


    const Professions = watch("Professions");
    const universityName = watch("universityName");
    const PreferableArea = watch("PreferableArea");

    const imageURL = `https://api.imgbb.com/1/upload?key=${imageURLKey}`;

    const onSubmit = async (data) => {
        try {
            setImageError(null);

            // Check if a new file is uploaded
            const imageFile = data.nidBirth?.[0];

            // If a new file is uploaded, validate it
            if (imageFile) {
                if (imageFile.size > 500 * 1024) {
                    setImageError("License Image size should not exceed 500KB.");
                    return;
                }

                const formData = new FormData();
                formData.append("image", imageFile);

                const imageResponse = await fetch(imageURL, {
                    method: "POST",
                    body: formData,
                });

                const imageData = await imageResponse.json();
                if (!imageData.success) {
                    throw new Error("Failed to upload image");
                }

                data.nidBirth = imageData.data.display_url;
            } else {
                // If no new image, keep the existing one
                data.nidBirth = user?.user?.nidBirth;
            }

            const userID = user?.user?._id;
            if (!userID) {
                Swal.fire({
                    title: "Error",
                    text: "User ID is missing. Please try again later.",
                    icon: "error",
                });
                return;
            }

            const parentProfileUpdate = {
                name: data.name || user?.user?.name,
                phone: data.phone || user?.user?.phone,
                address: data.address || user?.user?.address,
                gender: data.gender || user?.user?.gender,
                livingAddress: data.livingAddress || user?.user?.livingAddress,
                Professions: data.Professions || user?.user?.Professions,
                nidBirth: data.nidBirth,
                universityName: data.universityName || user?.user?.universityName,
                PreferableArea: data.PreferableArea || user?.user?.PreferableArea,
                bio: data.bio || user?.user?.bio,
                progressBar: 100,
            };

            console.log("Sending data:", JSON.stringify(parentProfileUpdate, null, 2));

            const response = await axios.put(`${serverApiUrl}/api/users/${userID}`, parentProfileUpdate);

            if (response.status === 200) {
                console.log("Response data:", response?.data);
                reset();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: response.data.message || "Please Check Your Information",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate("/dashboard/profile");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
            Swal.fire({
                title: "Error",
                text: error.response?.data?.message || "Something went wrong",
                icon: "error",
            });
        }
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
        <div className="px-2">
            <PageTitleShow currentPage="Parent Profile Update |" />
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
                                <span className="label-text text-sm text-slate-600 font-semibold">Parent Number</span>
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
                                label="Professions"
                                options={BangladeshProfessions}
                                selectedValue={Professions}
                                setValue={(value) => setValue("Professions", value)}
                            />
                            {errors.Professions && <p className="text-red-500 text-sm">Please Select Parent Gender</p>}
                        </div>
                        <div className="col-span-1 space-y-1">
                            <label className='block text-slate-700 font-medium pb-1'>
                                <span className="font-bold text-slate-500 tracking-wider">Gender</span>
                            </label>
                            <select
                                {...register("gender", { required: "Gender is required" })}
                                defaultValue={user?.user?.gender || "male"}
                                className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.gender && <span className="mt-1 text-red-500">{errors.gender.message}</span>}
                        </div>


                        {/* License Picture (Only required if missing) */}
                        <div className="col-span-1 space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-medium text-sm text-slate-700 tracking-wider">
                                    Nid/Birth Photo *(Max 500KB, PNG/JPG/JPEG)
                                </span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered file-input-primary w-full"
                                {...register("nidBirth", {
                                    validate: user?.user?.nidBirth
                                        ? undefined // Skip validation if image exists
                                        : {
                                            required: (value) =>
                                                value?.length > 0 || "Nid Birth Photo is required",
                                            fileType: (value) =>
                                                value?.length === 0 ||
                                                ["image/png", "image/jpg", "image/jpeg"].includes(value[0]?.type) ||
                                                "Only PNG, JPG, and JPEG files are allowed.",
                                            fileSize: (value) =>
                                                value?.length === 0 || value[0]?.size <= 500 * 1024 ||
                                                "File size should be ≤ 500KB.",
                                        },
                                })}
                                accept=".png, .jpg, .jpeg"
                            />
                            {errors.nidBirth && <p className="text-red-500 text-sm">{errors.nidBirth.message}</p>}
                            {imageError && <p className="text-red-500 text-sm">Please Select Your nid/birth Image</p>}
                        </div>

                        {/* <div className="col-span-1 space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-medium text-sm text-slate-700 tracking-wider">Nid/Birth Photo *(সর্বোচ্চ 200kb এর ছবি দিন)</span>
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
                        </div> */}

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
                                to={`/dashboard/user-photo-update/${user?.user?._id}`}
                                className="text-sm font-semibold underline italic hover:not-italic hover:tracking-wider hover:text-green-700 transition-all duration-200"
                            >
                                Your Photo Change Now
                            </Link>
                            <div className="flex items-end  justify-end">
                                <img
                                    src={user?.user?.image}
                                    title={user?.user?.name}
                                    className="w-20 h-20 md:mr-3 mr-1 bg-cover rounded-md"
                                    alt="coaching logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    );
};

export default ParentProfileUpdate;