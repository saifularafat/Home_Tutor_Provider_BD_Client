import { useForm } from "react-hook-form";
import SearchDropdown from "../../../../Components/SearchInputFuntion/SearchDropdown";
import BangladeshProfessions from "../../../../Helpers/BangladeshAllProfessions ";
import { useState } from "react";
import BangladeshAllUniversitiesName from "../../../../Helpers/BDAllUniversityName";
import DistrictAreas from "../../../../Helpers/DistrictAreas";
import { useParams } from "react-router-dom";
import { useSingleUser } from "../../../../api/useAllUsers";
import Loading from "../../../../Components/Loading/Loading";

const CoachingProfileUpdate = () => {
    const [allProfessions, setAllProfessions] = useState("");
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const [selectPreferableArea, setSelectPreferableArea] = useState('');

    const { id } = useParams();
    const { user = { user: {} }, refetch, isLoading, isError } = useSingleUser(id);
    console.log("useSingleUser", user?.user);

    const { register,
        formState: { errors },
        handleSubmit,
        setValue,
        reset } = useForm();

    const onSubmit = (data) => {
        const formData = {
            name: data.name,
            email: data.email,
            guardianNumber: data.guardianNumber,
            address: data.address,
            livingAddress: data.livingAddress,
            gender: data.gender,
            image: data.image,
            allProfessions: allProfessions,
            universityName: selectedUniversity,
            PreferableArea: selectPreferableArea,
            ParentBio: data.ParentBio,
        };
        console.log(formData);
    }

    // Function to update the selected Education Levels
    const handleProfessions = (option) => {
        setAllProfessions(option);
        setValue('polytechnicSubjects', option);
    };
    const handleUniversitySelect = (option) => {
        setSelectedUniversity(option);
        setValue('selectedUniversity', option);
    };
    const handlePreferableArea = (option) => {
        setSelectPreferableArea(option);
        setValue('selectPreferableArea', option);
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

                <div className='grid md:grid-cols-2 gap-5'>
                    <div className="col-span-1 space-y-1">
                        <label className="block text-slate-700 font-medium">
                            <span className="font-bold text-slate-500 tracking-wider">Coaching Center Address *</span>
                        </label>
                        <SearchDropdown
                            options={BangladeshProfessions}
                            selectedValue={allProfessions}
                            onSelect={handleProfessions}
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

                {/* second section */}
                <div className="bg-white px-4 rounded-md py-8 mt-2">
                    <h2 className="text-2xl font-semibold text-slate-700">Others Information</h2>

                    <div className="md:flex items-center gap-5 mt-3">
                        <div className="md:w-1/2 space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-bold text-slate-500 tracking-wider">University Name</span>
                            </label>
                            <SearchDropdown
                                options={BangladeshAllUniversitiesName}
                                selectedValue={selectedUniversity}
                                onSelect={handleUniversitySelect}
                            />
                        </div>
                        <div className="md:w-1/2 space-y-1">
                            <label className="block text-slate-700 font-medium">
                                <span className="font-bold text-slate-500 tracking-wider">Preferable Area</span>
                            </label>
                            <SearchDropdown
                                options={DistrictAreas}
                                selectedValue={selectPreferableArea}
                                onSelect={handlePreferableArea}
                            />
                        </div>

                    </div>
                    <div className="flex items-center gap-3 pt-1">
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="font-bold text-lg text-slate-500 tracking-wider">Bio</span>
                            </label>
                            <textarea
                                name=""
                                id=""
                                cols="20"
                                rows="3"
                                placeholder="Please Type Your Coaching Center Bio"
                                {...register("Bio")}
                                className="border border-sky-300 rounded-lg outline-sky-600 placeholder:text-sm overflow-hidden w-full p-2"
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className="mt-9 w-1/4 mx-auto">
                        <button className="flex items-center justify-center w-full bg-blue-400 hover:bg-blue-500 transition-all duration-200 rounded-md py-[6px] text-white text-xl font-semibold tracking-wide">
                            Update
                        </button>
                    </div>
                </div>
            </form >
        </div>
    );
};

export default CoachingProfileUpdate;