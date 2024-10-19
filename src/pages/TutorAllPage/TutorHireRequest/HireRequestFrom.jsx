import { useState } from "react";
import { useForm } from "react-hook-form";
import PageModel from "../../../Components/Model/PageModel";
const HireRequestFrom = () => {
    const [openModal, setOpenModal] = useState(false);

    const { register,
        formState: { errors },
        handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log("first data", data);

    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                    <div className=" bg-[#F3F3F3] px-4 rounded-md">
                        {/* Category */}
                        <div className="md:flex items-center gap-3">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text md:text-xl text-xl font-semibold">Category *</span>
                                </label>
                                <select {...register("category")}
                                    className="select input input-bordered w-full focus:border-blue-400 text-base font-normal">
                                    <option value="Online" selected>Online</option>
                                    <option value="StudentsHome">Students Home</option>
                                    <option value="TeachersHome">Teachers Home</option>
                                    <option value="CoachingCenter">Coaching Center</option>
                                    <option value="School">School</option>
                                </select>
                            </div>
                        </div>
                        <div className="md:flex items-center gap-3">
                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-lg  font-semibold">Location *</span>
                                </label>
                                <select {...register("location")}
                                    className="select input input-bordered w-full focus:border-blue-400 text-base font-normal">
                                    <option value="" selected>-- select -- </option>
                                    <option value="Online">Online</option>
                                    <option value="StudentsHome">Students Home</option>
                                    <option value="TeachersHome">Teachers Home</option>
                                    <option value="CoachingCenter">Coaching Center</option>
                                    <option value="School">School</option>
                                </select>
                                {errors.location?.type === "required" && (
                                    <p className="text-red-600 text-sm">Location is required</p>
                                )}
                            </div>

                            <div className="w-full">
                                <label className="label">
                                    <span className="label-text text-lg  font-semibold">Sub Location *</span>
                                </label>
                                <select {...register("subLocation")}
                                    className="select input input-bordered w-full focus:border-blue-400 text-base font-normal">
                                    <option selected>-- select --</option>
                                    <option value="Online" >sub location</option>
                                    <option value="StudentsHome">Students Home</option>
                                    <option value="TeachersHome">Teachers Home</option>
                                    <option value="CoachingCenter">Coaching Center</option>
                                    <option value="School">School</option>
                                </select>
                                {errors.subLocation?.type === "required" && (
                                    <p className="text-red-600 text-sm">Sub Location is required</p>
                                )}
                            </div>

                        </div>
                        <div className="md:flex items-center mt-3 space-x-3">
                            <div className="md:w-1/2 w-full">
                                <label className="label ">
                                    <span className="label-text md:text-xl text-xl font-semibold">Address *</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="yourAddress"
                                    {...register("yourAddress", { required: true, maxLength: 120 })}
                                    className="input input-bordered w-full text-base"
                                />
                                {errors.yourAddress?.type === "required" && (
                                    <p className="text-red-600 text-sm">Your Address is required</p>
                                )}
                            </div>
                            <div className="md:w-1/2 w-full">
                                <label className="label">
                                    <span className="label-text md:text-xl text-xl font-semibold">Phone number *</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="phoneNumber"
                                    {...register("phoneNumber", { required: true, maxLength: 120 })}
                                    className="input input-bordered w-full text-base"
                                />
                                {errors.phoneNumber?.type === "required" && (
                                    <p className="text-red-600 text-sm">Phone Number is required</p>
                                )}
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-xl  font-semibold">Additional Comments *</span>
                                </label>
                                <textarea
                                    name=""
                                    id=""
                                    cols="20"
                                    rows="3"
                                    placeholder="Additional Comments"
                                    {...register("AdditionalComments")}
                                    className="border border-slate-300 rounded-md overflow-hidden w-full p-2"
                                >
                                </textarea>
                            </div>
                        </div>

                        <PageModel openModal={openModal} setOpenModal={setOpenModal} />
                    </div>
                </form>
            </div>


        </>
    );
};

export default HireRequestFrom;