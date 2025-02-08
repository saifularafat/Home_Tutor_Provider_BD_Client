import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useSingleUser } from "../../../api/useAllUsers";
import Loading from "../../../Components/Loading/Loading";

const OnlyImageUpdate = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const { id } = useParams();
    const { user = { user: {} }, refetch, isLoading, isError } = useSingleUser(id);

    const onSubmit = (data) => {
        const formData = {
            image: data.image
        };
        console.log(' image info', formData);
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
        <div className="max-w-5xl mx-auto px-2 md:py-5 py-2.5">
            <form onSubmit={handleSubmit(onSubmit)} className="py-5">
                <div className="md:flex sm:flex-col-reverse items-center justify-center gap-y-2">

                    {/* IMAGE UPLOAD FORM */}
                    <div className="w-1/2 space-y-1 mx-auto">
                        <label className="block text-slate-700 font-medium text-center">
                            <span className="font-medium text-sm text-slate-700 tracking-wider">
                                IMAGE *(সর্বোচ্চ 200kb এর ছবি দিন)
                            </span>
                        </label>
                        <input
                            type="file"
                            className="file-input file-input-bordered file-input-primary w-full mx-auto"
                            {...register("image", {
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
                        {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}

                        {/* SUBMIT BUTTON */}
                        <div className="md:mt-5 mt-1 w-1/4 mx-auto pt-4">
                            <button className="flex items-center justify-center w-full bg-blue-400 hover:bg-blue-500 transition-all duration-200 rounded-md py-[6px] text-white text-xl font-semibold tracking-wide">
                                Update
                            </button>
                        </div>
                    </div>

                    {/* IMAGE DISPLAY SECTION */}
                    <div className="w-1/2 flex justify-center items-center">
                        <div className="group relative sm:w-[320px]">
                            <img
                                width={350}
                                height={350}
                                className="h-full w-full md:scale-105 transform md:rounded-lg"
                                src={user?.user?.image || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"}
                                alt="parent photo"
                            />
                        </div>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default OnlyImageUpdate;
