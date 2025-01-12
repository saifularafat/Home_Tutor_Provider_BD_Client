import axios from "axios";
import { useForm } from "react-hook-form";
import { serverApiUrl } from "../../../ApiSecret";
import Swal from "sweetalert2";

const ReviewModal = ({ users, openModal, setOpenModal, setSelectedRating }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const emailLogin = "saifulislam@gmail.com"
    console.log("users ==>>", users?.map((user) => user.email)) || {};
    // const email = users.map((user) => user.email);

    const handleRatingChange = (e) => {
        setSelectedRating(e.target.value);
    };

    const onSubmit = async (data) => {
        const ratingData = {
            userEmail: emailLogin || "your email",
            rating: data.selectedRating === '5' ? 5
                : data.selectedRating === '4' ? 4
                    : data.selectedRating === '3' ? 3
                        : data.selectedRating === '2' ? 2
                            : data.selectedRating === '1' ? 1
                                : 5,
            review: data.reviewComment || "N/A",
        }
        console.log("Rating data", ratingData);
        try {
            const response = await axios.post(`${serverApiUrl}/api/rating`, ratingData);
            console.log("API Response:", response.data);
            if (response.data.success) {
                reset();
               setOpenModal(false)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: response.data.message,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error("Error posting tuition job information:", error.response?.data || error.message);
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Failed to your review. Check your inputs.",
                text: error.response?.data?.message || error.message,
                showConfirmButton: true
            });
        }
    }
    return (
        <div className="mx-auto flex items-end justify-end">
            <div className="">
                <button onClick={() => setOpenModal(true)} className="rounded-full bg-blue-500 hover:bg-blue-600 gray-700 py-2 px-7 text-white text-base font-medium transition duration-200">
                    Make a Review
                </button>
            </div>
            <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}>
                <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] ${openModal ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}>

                    {/* Submit Review form */}
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10">
                        <svg
                            onClick={() => setOpenModal(false)}
                            className="mx-auto mr-0 w-10 cursor-pointer fill-black dark:fill-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
                            </g>
                        </svg>

                        <h1 className="pb-5 text-xl font-semibold backdrop-blur-sm">Please Make Your Review</h1>
                        <div className="space-y-5">
                            <div className="md:flex items-center gap-3">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-base text-slate-600 font-semibold">Rating</span>
                                    </label>
                                    <select
                                        {...register("selectedRating")}
                                        onChange={handleRatingChange}
                                        className="select text-orange-600 input input-bordered w-full focus:border-blue-400 text-base font-normal"
                                    >
                                        <option value='5'>★★★★★</option>
                                        <option value="4">★★★★☆</option>
                                        <option value="3">★★★☆☆</option>
                                        <option value="2">★★☆☆☆</option>
                                        <option value="1">★☆☆☆☆ </option>
                                    </select>

                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="label-text text-base text-slate-600 font-semibold">Comment</span>
                                    </label>
                                    <textarea
                                        {...register("reviewComment", { required: true })}
                                        name="reviewComment"
                                        id=""
                                        cols="20"
                                        rows="3"
                                        placeholder="Please Your Comments"
                                        className="rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-slate-600 ring-offset-1 duration-200 focus:outline-none focus:ring-2 overflow-hidden w-full"
                                    >
                                    </textarea>
                                    {errors.reviewComment && (
                                        <p className="text-red-500 text-sm">Please give your comment</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* button type will be submit for handling form submission*/}
                        <div className="flex items-center justify-center">
                            <button type="submit" className="relative py-2.5 px-5 rounded-lg mt-6 bg-orange-500 hover:bg-orange-600 text-white font-medium tracking-wide drop-shadow-lg dark:bg-gray-700 dark:hover:bg-gray-800">
                                Submit Review
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;