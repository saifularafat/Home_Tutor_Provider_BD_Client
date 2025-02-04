import { useForm } from "react-hook-form";
import SearchDropdown from "../../../../Components/SearchInputFuntion/SearchDropdown";
import BangladeshProfessions from "../../../../Helpers/BangladeshAllProfessions ";
import { useState } from "react";
import BangladeshAllUniversitiesName from "../../../../Helpers/BDAllUniversityName";
import DistrictAreas from "../../../../Helpers/DistrictAreas";

const ParentProfileUpdate = () => {
    const [allProfessions, setAllProfessions] = useState("");
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const [selectPreferableArea, setSelectPreferableArea] = useState('');

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

    return (
        <div className="px-2">
            <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                <div className=" bg-white px-4 rounded-md py-8 space-y-2">
                    <h2 className="text-xl font-semibold text-slate-600">Update Profile</h2>
                    <div className="md:flex items-center gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-sm text-slate-600 font-semibold">Name *</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                {...register("name")}
                                className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-sm text-slate-600 font-semibold">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                {...register("email")}
                                className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                        </div>
                    </div>
                    <div className="md:flex items-center gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-sm text-slate-600 font-semibold">Guardian Number</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Your Guardian Number"
                                {...register("guardianNumber", { maxLength: 14 })}
                                className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-sm text-slate-600 font-semibold">Address</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Address"
                                {...register("address")}
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
                                {...register("livingAddress")}
                                className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm"
                            />
                        </div>
                    </div>
                    <div className="md:flex items-center justify-center gap-3">
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-sm text-slate-600 font-semibold">Profession</span>
                            </label>
                            <SearchDropdown
                                options={BangladeshProfessions}
                                selectedValue={allProfessions}
                                onSelect={handleProfessions}
                            />
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-sm text-slate-600 font-semibold">Gender</span>
                            </label>
                            <select {...register("gender")} className="bg-transparent capitalize input border border-sky-300 rounded-lg outline-sky-600 px-4 py-3 w-full placeholder:text-sm placeholder:tracking-wider text-sm">
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="label">
                                <span className="label-text text-sm text-slate-600 font-semibold">Image </span>
                            </label>
                            <input
                                {...register("image")}
                                type="file"
                                className="file-input file-input-bordered w-full " />
                        </div>
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
                                placeholder="Please Type Your Bio"
                                {...register("ParentBio")}
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
        </div >
    );
};

export default ParentProfileUpdate;