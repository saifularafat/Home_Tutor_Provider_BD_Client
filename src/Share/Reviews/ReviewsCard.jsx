import { useState } from "react";

const ReviewsCard = () => {
    const [expandedReview, setExpandedReview] = useState(null); // Track which review is expanded
    const [openModal, setOpenModal] = useState(false);
    const [selectedRating, setSelectedRating] = useState(5);

    // rating 

    const handleRatingChange = (e) => {
        setSelectedRating(e.target.value);
    };

    // Review data for five users (mix of men and women)
    const reviews = [
        {
            id: 1,
            name: "Saiful Islam",
            guardianId: "HTPBDG101",
            reviewText: "Absolutely fantastic! The tutor we found has been a perfect fit for our child’s needs. They have shown exceptional dedication, and my child has improved dramatically since their lessons began. Highly recommended! We couldn't have asked for a better experience."
        },
        {
            id: 2,
            name: "Amina Khan",
            guardianId: "HTPBDG102",
            reviewText: "The tutor has been great at helping our child with their studies. They’ve built a great rapport and the improvements are noticeable. We’re really happy with the service provided."
        },
        {
            id: 3,
            name: "John Doe",
            guardianId: "HTPBDG103",
            reviewText: "We’ve been very satisfied with the tutor’s approach and how well they have connected with our child. The tutor has been patient and effective."
        },
        {
            id: 4,
            name: "Sarah Ali",
            guardianId: "HTPBDG104",
            reviewText: "Our child has made tremendous progress thanks to the dedicated tutoring. The tutor has gone above and beyond to ensure success."
        },
        {
            id: 5,
            name: "David Williams",
            guardianId: "HTPBDG105",
            reviewText: "The experience with this tutor has been incredible. Our child has gained a lot of confidence in their studies and is performing much better in school."
        },
        {
            id: 6,
            name: "Mohibur Rahman",
            guardianId: "HTPBDG105",
            reviewText: "Good experience overall, but I wish there were more subject options available, and the quality is exceptional. Very satisfied with the service."
        }
    ];

    const handleToggle = (id) => {
        setExpandedReview((prevExpandedReview) => (prevExpandedReview === id ? null : id));
    };

    return (
        <>
            <div className="flex flex-wrap justify-center gap-7 pb-10">
                {reviews.map((review) => {
                    const words = review.reviewText.split(" ");
                    const shortText = words.slice(0, 17).join(" ");
                    const isExpanded = expandedReview === review.id; // Check if this review is expanded

                    return (
                        <div key={review.id} className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl hover:shadow-sky-100 mb-5"> {/* Adjusted card size */}
                            <div className="px-6 py-5">
                                <div className="flex items-center gap-3">
                                    <img
                                        width={500}
                                        height={500}
                                        className="size-14 rounded-full bg-slate-500 object-cover"
                                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop"
                                        alt="avatar"
                                    />
                                    <div>
                                        <h2 className="text-xl font-medium text-slate-800 capitalize">{review.name}</h2>
                                        <p className="text-sm font-medium text-slate-500">Guardian ID: {review.guardianId}</p>

                                        {/* rating */}
                                        <div className="rating rating-sm">
                                            <input type="radio" name={`rating-${review.id}`} className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name={`rating-${review.id}`} className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name={`rating-${review.id}`} className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name={`rating-${review.id}`} defaultChecked className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name={`rating-${review.id}`} className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                    </div>
                                </div>

                                {/* Conditional rendering of text */}
                                <p className="text-base text-slate-600 pt-3">
                                    {isExpanded ? review.reviewText : `${shortText}...`}
                                </p>

                                {/* Show Read More/Read Less if text exceeds 17 words */}
                                {words.length > 17 && (
                                    <div className="card-actions justify-end pt-5">
                                        <button
                                            onClick={() => handleToggle(review.id)}
                                            className="text-sm font-medium text-red-500 hover:underline hover:text-red-600 transition-all duration-200 tracking-wide"
                                        >
                                            {isExpanded ? "Read Less" : "Read More"}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>




            {/* Modal */}
            <div className="mx-auto flex items-end justify-end">
                <div className="">
                    <button onClick={() => setOpenModal(true)} className="rounded-full bg-blue-500 hover:bg-blue-600 gray-700 py-2 px-7 text-white text-base font-medium transition duration-200">
                        Make a Review
                    </button>
                </div>
                <div onClick={() => setOpenModal(false)} className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] ${openModal ? 'opacity-1 translate-y-0 duration-300' : '-translate-y-20 opacity-0 duration-150'}`}>

                        {/* Submit Review form */}
                        <form className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10">
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
                                            value={selectedRating}
                                            onChange={handleRatingChange}
                                            className="select text-orange-600 input input-bordered w-full focus:border-blue-400 text-base font-normal"
                                        >
                                            <option value="star5" className="">★★★★★</option>
                                            <option value="star4">★★★★☆</option>
                                            <option value="star3">★★★☆☆</option>
                                            <option value="star2">★★☆☆☆</option>
                                            <option value="star1">★☆☆☆☆ </option>
                                        </select>

                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="label-text text-base text-slate-600 font-semibold">Comment</span>
                                        </label>
                                        <textarea
                                            name="reviewComment"
                                            id=""
                                            cols="20"
                                            rows="3"
                                            placeholder="Please Your Comments"
                                            className="rounded-lg border border-slate-300 bg-transparent px-3 py-2 text-slate-600 ring-offset-1 duration-200 focus:outline-none focus:ring-2 overflow-hidden w-full"
                                        >
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            {/* button type will be submit for handling form submission*/}
                            <div className="flex items-center justify-center">
                                <button type="button" className="relative py-2.5 px-5 rounded-lg mt-6 bg-orange-500 hover:bg-orange-600 text-white font-medium tracking-wide drop-shadow-lg dark:bg-gray-700 dark:hover:bg-gray-800">
                                    Submit Review
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ReviewsCard;
